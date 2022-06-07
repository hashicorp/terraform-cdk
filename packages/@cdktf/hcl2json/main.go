//+ build js,wasm
package main

import (
	"encoding/json"
	"fmt"
	"syscall/js"

	"github.com/zclconf/go-cty/cty"

	hcl "github.com/hashicorp/hcl/v2"
	"github.com/hashicorp/hcl/v2/hclsyntax"

	hcljson "github.com/hashicorp/hcl/v2/json"
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

	registerFn("getReferencesInExpression", func(this js.Value, args []js.Value) (interface{}, error) {
		if len(args) == 0 {
			return nil, fmt.Errorf("No arguments provided")
		}

		expr, err := hcljson.ParseExpression([]byte(args[1].String()), args[0].String())
		if err != nil {
			return nil, err
		}


		if !hcljson.IsJSONExpression(expr) {
			return nil, fmt.Errorf("Expected JSON expression")
		}

		val, diags := expr.Value(nil)
		if diags.HasErrors() {
			return nil, fmt.Errorf(diags.Error())
		}

		ast, diags := expressionForValue(val)
		if diags.HasErrors() {
			return nil, fmt.Errorf(diags.Error())
		}

		jsonValue, marshalError := json.Marshal(ast)
		if marshalError != nil {
			return nil, err
		}

		return string(jsonValue), nil
	})
	<-c
}


func expressionForValue(val cty.Value) (hclsyntax.Expression, hcl.Diagnostics) {
	// NOTE: This intentionally only supports the subset of cty
	// values that HCL JSON's Value method can produce when
	// given a nil EvalContext, which means:
	// - Known values only
	// - Only structural types, no collection types
	// - Strings with template syntax in them are still in their raw form

	// The result of this would not be suitable for normal end-user-oriented
	// uses because it has no source location information, but I think it would
	// be reasonable to use as input to another function which takes an
	// hclsyntax.Expression and tries to turn it into another language, since
	// a function like that would typically be lossy and throw away the
	// source location information anyway.

	switch {
	case val.IsNull():
		return literalValueExpr(val)
	case val.Type() == cty.String:
		raw := val.AsString()
		return hclsyntax.ParseTemplate([]byte(raw), "", hcl.Pos{})
	case val.Type().IsTupleType():
		var diags hcl.Diagnostics
		expr := &hclsyntax.TupleConsExpr{}
		for it := val.ElementIterator(); it.Next(); {
			_, elemVal := it.Element()
			elemExpr, moreDiags := expressionForValue(elemVal)
			diags = append(diags, moreDiags...)
			expr.Exprs = append(expr.Exprs, elemExpr)
		}
		return expr, diags
	case val.Type().IsObjectType():
		var diags hcl.Diagnostics
		expr := &hclsyntax.ObjectConsExpr{}

		for it := val.ElementIterator(); it.Next(); {
			keyVal, valVal := it.Element()
			keyExpr, moreDiags := expressionForValue(keyVal)
			diags = append(diags, moreDiags...)
			valExpr, moreDiags := expressionForValue(valVal)
			diags = append(diags, moreDiags...)
			expr.Items = append(expr.Items, hclsyntax.ObjectConsItem{
				KeyExpr:   keyExpr,
				ValueExpr: valExpr,
			})
		}
		return expr, diags
	default:
		return literalValueExpr(val)
	}
}

func literalValueExpr(val cty.Value) (hclsyntax.Expression, hcl.Diagnostics) {
	return &hclsyntax.LiteralValueExpr{
		Val: val,
	}, nil
}
