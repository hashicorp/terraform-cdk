// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// + build js,wasm
package main

import (
	"encoding/json"
	"fmt"
	"syscall/js"

	"github.com/zclconf/go-cty/cty"

	"github.com/hashicorp/hcl/v2/hclsyntax"
	"github.com/hashicorp/hcl/v2/hclwrite"
)

var (
	jsGlobal js.Value
	jsRoot   js.Value
)

const (
	bridgeJavaScriptName = "__hcl_helpers_config_wasm__"
)

func registrationWrapper(fn func(this js.Value, args []js.Value) (interface{}, error)) func(this js.Value, args []js.Value) interface{} {
	return func(this js.Value, args []js.Value) interface{} {
		cb := args[len(args)-1]

		ret, err := fn(this, args[:len(args)-1])

		if err != nil {
			cb.Invoke(err.Error(), js.Null())
		} else {
			cb.Invoke(js.Null(), ret)
		}

		return ret
	}
}

func registerFn(name string, callback func(this js.Value, args []js.Value) (interface{}, error)) {
	jsRoot.Set(name, js.FuncOf(registrationWrapper(callback)))
}

func registerValue(name string, value interface{}) {
	jsRoot.Set(name, value)
}

func main() {
	global := js.Global()
	jsGlobal = global.Get("global")
	jsRoot = jsGlobal.Get(bridgeJavaScriptName)
	c := make(chan struct{}, 0)

	registerFn("format", func(this js.Value, args []js.Value) (interface{}, error) {
		if len(args) == 0 {
			return nil, fmt.Errorf("No arguments provided")
		}

		formatted, err := hclwrite.Format([]byte(args[1].String()))
		if err != nil {
			return nil, err
		}

		return string(formatted), err
	})

	<-c
}
