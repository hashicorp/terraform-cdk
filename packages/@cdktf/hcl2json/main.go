// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// + build js,wasm
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

var jsGlobal js.Value
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
	jsGlobal = global.Get("global")
	jsRoot = jsGlobal.Get(bridgeJavaScriptName)
	c := make(chan struct{}, 0)

	registerFn("parse", func(this js.Value, args []js.Value) (interface{}, error) {
		var options = convert.Options{false}

		if len(args) == 0 {
			return nil, fmt.Errorf("No arguments provided")
		}

		converted, err := convert.Bytes([]byte(args[1].String()), args[0].String(), options)
		return string(converted), err
	})

	registerFn("parseExpression", func(this js.Value, args []js.Value) (interface{}, error) {
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

	registerFn("getExpressionAst", func(this js.Value, args []js.Value) (interface{}, error) {
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

		jsonValue, marshalError := expressionToMarshalledAst(ast)
		if marshalError != nil {
			return nil, marshalError
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

var operationNamesLookup = map[interface{}]string{
	hclsyntax.OpLogicalOr:          "logicalOr",
	hclsyntax.OpLogicalAnd:         "logicalAnd",
	hclsyntax.OpLogicalNot:         "logicalNot",
	hclsyntax.OpEqual:              "equal",
	hclsyntax.OpNotEqual:           "notEqual",
	hclsyntax.OpGreaterThan:        "greaterThan",
	hclsyntax.OpGreaterThanOrEqual: "greaterThanOrEqual",
	hclsyntax.OpLessThan:           "lessThan",
	hclsyntax.OpLessThanOrEqual:    "lessThanOrEqual",
	hclsyntax.OpAdd:                "add",
	hclsyntax.OpSubtract:           "subtract",
	hclsyntax.OpMultiply:           "multiply",
	hclsyntax.OpDivide:             "divide",
	hclsyntax.OpModulo:             "modulo",
	hclsyntax.OpNegate:             "negate",
}

type ExpressionAst struct {
	Parent   *ExpressionAst         `json:"-"`
	Children []*ExpressionAst       `json:"children"`
	Type     string                 `json:"type"`
	Meta     map[string]interface{} `json:"meta,omitempty"`
	Range    RangeAst               `json:"range,omitempty"`
}

type PosAst struct {
	Line   int `json:"line"`
	Column int `json:"column"`
	Byte   int `json:"byte"`
}
type RangeAst struct {
	Start PosAst `json:"start"`
	End   PosAst `json:"end"`
}

type TraversalAst struct {
	Segment string    `json:"segment"`
	Range   hcl.Range `json:"range,omitempty"`
}

type ExpressionWalker struct {
	Root    ExpressionAst
	Stack   []*ExpressionAst
	Current *ExpressionAst
}

func convertPosToAst(p hcl.Pos) PosAst {
	return PosAst{
		Line:   p.Line,
		Column: p.Column,
		Byte:   p.Byte,
	}
}

func convertRangeToAst(r hcl.Range) RangeAst {
	return RangeAst{
		Start: convertPosToAst(r.Start),
		End:   convertPosToAst(r.End),
	}
}

func convertTraversal(t hcl.Traversal) []TraversalAst {
	var res []TraversalAst
	for _, p := range t {
		switch p.(type) {
		case hcl.TraverseRoot:
			root := p.(hcl.TraverseRoot)
			res = append(res, TraversalAst{Segment: root.Name, Range: root.SrcRange})
		case hcl.TraverseAttr:
			attr := p.(hcl.TraverseAttr)
			res = append(res, TraversalAst{Segment: attr.Name, Range: attr.SrcRange})
		}
	}
	return res
}

func getOperationName(op *hclsyntax.Operation) string {
	return operationNamesLookup[op]
}

func isChildScope(node hclsyntax.Node) bool {
	switch node.(type) {
	case hclsyntax.ChildScope:
		return true
	default:
		return false
	}
}

func (w *ExpressionWalker) Enter(node hclsyntax.Node) hcl.Diagnostics {
	// We don't care about child scope nodes, since they're synthetic for walking and I don't know if we
	// need to use them yet
	if isChildScope(node) {
		return nil
	}
	expr := node.(hclsyntax.Expression)
	if w.Current != nil {
		w.Stack = append(w.Stack, w.Current)
		newAst := ExpressionAst{
			Parent:   w.Current,
			Children: []*ExpressionAst{},
			Meta:     map[string]interface{}{},
		}
		w.Current.Children = append(w.Current.Children, &newAst)
		w.Current = &newAst
	} else {
		w.Root = ExpressionAst{
			Parent:   nil,
			Children: []*ExpressionAst{},
			Meta:     map[string]interface{}{},
		}
		w.Current = &w.Root
	}

	w.Current.Range = convertRangeToAst(expr.StartRange())
	var diags hcl.Diagnostics

	switch actualExpr := expr.(type) {
	case *hclsyntax.FunctionCallExpr:
		w.Current.Type = "function"
		w.Current.Meta["name"] = actualExpr.Name
		w.Current.Meta["expandedFinalArgument"] = actualExpr.ExpandFinal
		w.Current.Meta["nameRange"] = map[string]interface{}{
			"start": convertPosToAst(actualExpr.NameRange.Start),
			"end":   convertPosToAst(actualExpr.NameRange.End),
		}
		w.Current.Meta["openParenRange"] = map[string]interface{}{
			"start": convertPosToAst(actualExpr.OpenParenRange.Start),
			"end":   convertPosToAst(actualExpr.OpenParenRange.End),
		}
		w.Current.Meta["closeParenRange"] = map[string]interface{}{
			"start": convertPosToAst(actualExpr.CloseParenRange.Start),
			"end":   convertPosToAst(actualExpr.CloseParenRange.End),
		}

	case *hclsyntax.TupleConsExpr:
		w.Current.Type = "tuple"
	case *hclsyntax.ObjectConsExpr:
		w.Current.Type = "object"
	case *hclsyntax.TemplateExpr:
		w.Current.Type = "template"
	case *hclsyntax.TemplateJoinExpr:
		w.Current.Type = "templateJoin"
	case *hclsyntax.TemplateWrapExpr:
		w.Current.Type = "templateWrap"
	case *hclsyntax.ScopeTraversalExpr:
		w.Current.Type = "scopeTraversal"

		w.Current.Meta["traversal"] = convertTraversal(actualExpr.Traversal)
	case *hclsyntax.RelativeTraversalExpr:
		w.Current.Type = "relativeTraversal"
	case *hclsyntax.LiteralValueExpr:
		w.Current.Type = "literalValue"
		v, _ := expr.Value(nil)
		w.Current.Meta["type"] = v.Type()
	case *hclsyntax.IndexExpr:
		w.Current.Type = "index"
	case *hclsyntax.SplatExpr:
		w.Current.Type = "splat"
	case *hclsyntax.ForExpr:
		w.Current.Type = "for"
	case *hclsyntax.ConditionalExpr:
		w.Current.Type = "conditional"
	case *hclsyntax.UnaryOpExpr:
		w.Current.Type = "unaryOp"
		val, _ := actualExpr.Value(nil)
		w.Current.Meta["operator"] = getOperationName(actualExpr.Op)
		w.Current.Meta["returnType"] = val.Type()
	case *hclsyntax.BinaryOpExpr:
		w.Current.Type = "binaryOp"
		val, _ := actualExpr.Value(nil)
		w.Current.Meta["operator"] = getOperationName(actualExpr.Op)
		w.Current.Meta["returnType"] = val.Type()

	default:
		diags = append(diags, &hcl.Diagnostic{
			Severity: hcl.DiagError,
			Summary:  "Unknown expression type",
			Detail:   fmt.Sprintf("Unknown expression type: %T", expr),
			Subject:  expr.Range().Ptr(),
		})
		return diags
	}

	return nil
}

func (w *ExpressionWalker) Exit(node hclsyntax.Node) hcl.Diagnostics {
	if len(w.Stack) > 0 {
		lastItem, stack := w.Stack[len(w.Stack)-1], w.Stack[:len(w.Stack)-1]
		w.Stack = stack
		w.Current = lastItem
	}

	return nil
}

func expressionToMarshalledAst(expr hclsyntax.Expression) (string, error) {
	walker := &ExpressionWalker{}
	hclsyntax.Walk(expr, walker)

	m, _ := json.MarshalIndent(walker.Root, "", "  ")

	return string(m), nil
}
