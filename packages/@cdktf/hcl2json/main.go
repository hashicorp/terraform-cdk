// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

// + build js,wasm
package main

import (
	"encoding/json"
	"fmt"
	"strings"
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

		filename := args[0].String()
		src := args[1].String()
		ast, diags := hclsyntax.ParseExpression([]byte(src), filename, hcl.Pos{})
		if diags != nil && diags.HasErrors() {
			return nil, fmt.Errorf("getExpressionAst errors on input string '%s': %s ", src, diags.Error())
		}

		res, _ := expressionToMarshalledAst(src, ast)

		return string(res), nil
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
	Type    string        `json:"type"`
	Segment string        `json:"segment,omitempty"`
	Each    *TraversalAst `json:"each,omitempty"`
	Range   RangeAst      `json:"range,omitempty"`
}

type ExpressionWalker struct {
	Input   string
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

func convertTraversal(t hcl.Traversal) ([]TraversalAst, string) {
	var res []TraversalAst
	var full string
	for _, p := range t {
		switch p.(type) {
		case hcl.TraverseRoot:
			root := p.(hcl.TraverseRoot)
			res = append(res, TraversalAst{Type: "nameTraversal", Segment: root.Name, Range: convertRangeToAst(root.SrcRange)})
			if full == "" {
				full = root.Name
			} else {
				full = strings.Join([]string{full, root.Name}, ".")
			}
		case hcl.TraverseAttr:
			attr := p.(hcl.TraverseAttr)
			res = append(res, TraversalAst{Type: "nameTraversal", Segment: attr.Name, Range: convertRangeToAst(attr.SrcRange)})
			if full == "" {
				full = attr.Name
			} else {
				full = strings.Join([]string{full, attr.Name}, ".")
			}
		case hcl.TraverseIndex:
			index := p.(hcl.TraverseIndex)
			key := index.Key
			var val string
			if key.Type() == cty.String {
				val = fmt.Sprintf(`"%s"`, key.AsString())
			} else if key.Type() == cty.Number {
				val = key.AsBigFloat().String()
			}

			res = append(res, TraversalAst{Type: "indexTraversal", Segment: val, Range: convertRangeToAst(index.SrcRange)})
			if full == "" {
				full = val
			} else {
				full = fmt.Sprintf("%s[%s]", full, val)
			}
		case hcl.TraverseSplat:
			splat := p.(hcl.TraverseSplat)
			sub, rel := convertTraversal(splat.Each)
			res = append(res, sub...)
			if full == "" {
				full = rel
			} else {
				full = strings.Join([]string{full, rel}, ".")
			}
		}
	}
	return res, full
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
		w.Current.Meta["nameRange"] = convertRangeToAst(actualExpr.NameRange)
		w.Current.Meta["openParenRange"] = convertRangeToAst(actualExpr.OpenParenRange)
		w.Current.Meta["closeParenRange"] = convertRangeToAst(actualExpr.CloseParenRange)
		var argsRanges = []RangeAst{}
		for _, arg := range actualExpr.Args {
			argsRanges = append(argsRanges, convertRangeToAst(arg.Range()))
		}
		w.Current.Meta["argsRanges"] = argsRanges

	case *hclsyntax.TupleConsExpr:
		w.Current.Type = "tuple"
	case *hclsyntax.ObjectConsExpr:
		w.Current.Type = "object"
		items := make(map[string]string)
		for _, item := range actualExpr.Items {
			key := w.Input[item.KeyExpr.Range().Start.Byte:item.KeyExpr.Range().End.Byte]
			value := w.Input[item.ValueExpr.Range().Start.Byte:item.ValueExpr.Range().End.Byte]
			items[key] = value
		}
		w.Current.Meta["items"] = items
	case *hclsyntax.TemplateExpr:
		w.Current.Type = "template"
	case *hclsyntax.TemplateJoinExpr:
		w.Current.Type = "templateJoin"
	case *hclsyntax.TemplateWrapExpr:
		w.Current.Type = "templateWrap"
	case *hclsyntax.ScopeTraversalExpr:
		w.Current.Type = "scopeTraversal"
		w.Current.Meta["traversal"], w.Current.Meta["fullAccessor"] = convertTraversal(actualExpr.Traversal)
	case *hclsyntax.RelativeTraversalExpr:
		w.Current.Type = "relativeTraversal"
		w.Current.Meta["traversal"], w.Current.Meta["fullAccessor"] = convertTraversal(actualExpr.Traversal)
		w.Current.Meta["sourceExpression"] = w.Input[actualExpr.Source.Range().Start.Byte:actualExpr.Source.Range().End.Byte]
	case *hclsyntax.LiteralValueExpr:
		w.Current.Type = "literalValue"
		v, _ := expr.Value(nil)
		w.Current.Meta["type"] = v.Type()
	case *hclsyntax.IndexExpr:
		w.Current.Type = "index"
		w.Current.Meta["keyExpression"] = w.Input[actualExpr.Key.Range().Start.Byte:actualExpr.Key.Range().End.Byte]
		w.Current.Meta["collectionExpression"] = w.Input[actualExpr.Collection.Range().Start.Byte:actualExpr.Collection.Range().End.Byte]
	case *hclsyntax.SplatExpr:
		w.Current.Type = "splat"
		w.Current.Meta["sourceExpression"] = w.Input[actualExpr.Source.Range().Start.Byte:actualExpr.Source.Range().End.Byte]
		w.Current.Meta["eachExpression"] = w.Input[actualExpr.Each.Range().Start.Byte:actualExpr.Each.Range().End.Byte]
		w.Current.Meta["anonSymbolExpression"] = w.Input[actualExpr.Item.Range().Start.Byte:actualExpr.Item.Range().End.Byte]
		w.Current.Meta["markerRange"] = convertRangeToAst(actualExpr.MarkerRange)
	case *hclsyntax.ForExpr:
		w.Current.Type = "for"
		w.Current.Meta["keyVar"] = actualExpr.KeyVar
		w.Current.Meta["valVar"] = actualExpr.ValVar
		if actualExpr.CollExpr != nil {
			w.Current.Meta["collectionExpression"] = w.Input[actualExpr.CollExpr.Range().Start.Byte:actualExpr.CollExpr.Range().End.Byte]
		}
		if actualExpr.CondExpr != nil {
			w.Current.Meta["conditionalExpression"] = w.Input[actualExpr.CondExpr.Range().Start.Byte:actualExpr.CondExpr.Range().End.Byte]
		}
		if actualExpr.KeyExpr != nil {
			w.Current.Meta["keyExpression"] = w.Input[actualExpr.KeyExpr.Range().Start.Byte:actualExpr.KeyExpr.Range().End.Byte]
		}
		w.Current.Meta["valueExpression"] = w.Input[actualExpr.ValExpr.Range().Start.Byte:actualExpr.ValExpr.Range().End.Byte]
		w.Current.Meta["groupedValue"] = actualExpr.Group
		w.Current.Meta["openRange"] = convertRangeToAst(actualExpr.OpenRange)
		w.Current.Meta["openRangeValue"] = w.Input[actualExpr.OpenRange.Start.Byte:actualExpr.OpenRange.End.Byte]
		w.Current.Meta["closeRange"] = convertRangeToAst(actualExpr.CloseRange)
		w.Current.Meta["closeRangeValue"] = w.Input[actualExpr.CloseRange.Start.Byte:actualExpr.CloseRange.End.Byte]
	case *hclsyntax.ConditionalExpr:
		w.Current.Type = "conditional"
		w.Current.Meta["conditionExpression"] = w.Input[actualExpr.Condition.Range().Start.Byte:actualExpr.Condition.Range().End.Byte]
		w.Current.Meta["trueExpression"] = w.Input[actualExpr.TrueResult.Range().Start.Byte:actualExpr.TrueResult.Range().End.Byte]
		w.Current.Meta["falseExpression"] = w.Input[actualExpr.FalseResult.Range().Start.Byte:actualExpr.FalseResult.Range().End.Byte]
	case *hclsyntax.UnaryOpExpr:
		w.Current.Type = "unaryOp"
		w.Current.Meta["operator"] = getOperationName(actualExpr.Op)
		w.Current.Meta["valueExpression"] = w.Input[actualExpr.Val.Range().Start.Byte:actualExpr.Val.Range().End.Byte]
		w.Current.Meta["symbolRange"] = convertRangeToAst(actualExpr.SymbolRange)
		val, _ := actualExpr.Value(nil)
		w.Current.Meta["returnType"] = val.Type()
	case *hclsyntax.BinaryOpExpr:
		w.Current.Type = "binaryOp"
		val, _ := actualExpr.Value(nil)
		w.Current.Meta["operator"] = getOperationName(actualExpr.Op)
		w.Current.Meta["returnType"] = val.Type()
		w.Current.Meta["lhsExpression"] = w.Input[actualExpr.LHS.Range().Start.Byte:actualExpr.LHS.Range().End.Byte]
		w.Current.Meta["rhsExpression"] = w.Input[actualExpr.RHS.Range().Start.Byte:actualExpr.RHS.Range().End.Byte]

	default:
		diags = append(diags, &hcl.Diagnostic{
			Severity: hcl.DiagError,
			Summary:  "Unknown expression type",
			Detail:   fmt.Sprintf("Unknown expression type: %T", expr),
			Subject:  expr.Range().Ptr(),
		})
		return diags
	}
	w.Current.Meta["value"] = w.Input[expr.Range().Start.Byte:expr.Range().End.Byte]

	return nil
}

func (w *ExpressionWalker) Exit(node hclsyntax.Node) hcl.Diagnostics {
	if isChildScope(node) {
		return nil
	}

	if len(w.Stack) > 0 {
		lastItem, stack := w.Stack[len(w.Stack)-1], w.Stack[:len(w.Stack)-1]
		w.Stack = stack
		w.Current = lastItem
	}

	return nil
}

func expressionToMarshalledAst(input string, expr hclsyntax.Expression) (string, error) {
	walker := &ExpressionWalker{
		Input: input,
	}

	hclsyntax.Walk(expr, walker)

	m, _ := json.MarshalIndent(walker.Root, "", "  ")

	return string(m), nil
}
