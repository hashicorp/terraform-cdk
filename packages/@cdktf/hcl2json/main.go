//+ build js,wasm
package main

import (
	"fmt"
	"syscall/js"

	"github.com/tmccombs/hcl2json/convert"
)

var jsRoot js.Value

const (
	bridgeJavaScriptName = "__parse_terraform_config_wasm__"
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
	jsRoot = global.Get(bridgeJavaScriptName)
	c := make(chan struct{}, 0)
	registerFn("parse", func(this js.Value, args []js.Value) (interface{}, error) {
		var options = convert.Options{false}

		if len(args) == 0 {
			return nil, fmt.Errorf("No arguments provided")
		}

		converted, err := convert.Bytes([]byte(args[1].String()), args[0].String(), options)
		return string(converted), err
	})
	<-c
}
