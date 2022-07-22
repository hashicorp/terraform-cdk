package main

import (
	"cdk.tf/go/stack/generated/hashicorp/edge"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewReferenceStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	edge.NewEdgeProvider(stack, jsii.String("edge"), &edge.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	res := edge.NewOptionalAttributeResource(stack, jsii.String("test"), &edge.OptionalAttributeResourceConfig{})

	list := edge.NewListBlockResource(stack, jsii.String("list"), &edge.ListBlockResourceConfig{
		Req: &[]*edge.ListBlockResourceReq{
			{
				Reqbool: jsii.Bool(true),
				Reqnum:  jsii.Number(1),
				Reqstr:  jsii.String(("reqstr")),
			},
			{
				Reqbool: jsii.Bool(false),
				Reqnum:  jsii.Number(0),
				Reqstr:  jsii.String(("reqstr2")),
			},
		},
		Singlereq: &edge.ListBlockResourceSinglereq{
			Reqbool: jsii.Bool(false),
			Reqnum:  jsii.Number(1),
			Reqstr:  jsii.String(("reqstr")),
		},
	})

	mapRes := edge.NewMapResource(stack, jsii.String("map"), &edge.MapResourceConfig{
		OptMap: &map[string]*string{"Key1": jsii.String("value1")},
		ReqMap: &map[string]interface{}{"Key1": jsii.Bool(true)},
	})

	set := edge.NewSetBlockResource(stack, jsii.String("set_block"), &edge.SetBlockResourceConfig{
		Set: &[]*edge.SetBlockResourceSet{&edge.SetBlockResourceSet{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")}, &edge.SetBlockResourceSet{Reqbool: jsii.Bool(false), Reqnum: jsii.Number(0), Reqstr: jsii.String("reqstr2")}},
	})

	// plain values
	edge.NewRequiredAttributeResource(stack, jsii.String("plain"), &edge.RequiredAttributeResourceConfig{
		Bool:     res.Bool(),
		Str:      res.Str(),
		Num:      res.Num(),
		StrList:  res.StrList(),
		NumList:  res.NumList(),
		BoolList: res.BoolList(),
	})

	// required values FROM required single item lists
	edge.NewRequiredAttributeResource(stack, jsii.String("from_single_list"), &edge.RequiredAttributeResourceConfig{
		Bool:     list.Singlereq().Reqbool(),
		Str:      list.Singlereq().Reqstr(),
		Num:      list.Singlereq().Reqnum(),
		StrList:  &[]*string{list.Singlereq().Reqstr()},
		NumList:  &[]*float64{list.Singlereq().Reqnum()},
		BoolList: &[]interface{}{list.Singlereq().Reqbool()},
	})

	// required values FROM required multi item lists
	edge.NewRequiredAttributeResource(stack, jsii.String("from_list"), &edge.RequiredAttributeResourceConfig{
		Bool:     cdktf.Token_AsAny(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqbool"), jsii.Bool(false))),
		Str:      list.Req().Get(jsii.Number(0)).Reqstr(),
		Num:      cdktf.Token_AsNumber(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqnum"), jsii.Number(0))),
		StrList:  &[]*string{list.Req().Get(jsii.Number(0)).Reqstr()},
		NumList:  &[]*float64{cdktf.Token_AsNumber(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqnum"), jsii.Number(0)))},
		BoolList: &[]interface{}{cdktf.Token_AsAny(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqbool"), jsii.Bool(false)))},
	})

	// passing a reference to a complete list
	// edge.NewListBlockResource(stack, jsii.String("list_reference"), &edge.ListBlockResourceConfig{
	// TODO: this fails at synth with "Expected array type, got \"<unresolved-token>\""
	// Req: list.Req(),
	// TODO: this does not compile (see #1371)
	// Singlereq: list.Singlereq(),
	// })

	// passing a literal array with references for a list
	// edge.NewListBlockResource(stack, jsii.String("list_literal"), &edge.ListBlockResourceConfig{
	// TODO: this does not compile as the types do not match (despite having the same interface)
	// Req: &[]*edge.ListBlockResourceReq{list.Singlereq()},
	// Singlereq: list.Singlereq(),
	// })

	// required values FROM map
	edge.NewRequiredAttributeResource(stack, jsii.String("from_map"), &edge.RequiredAttributeResourceConfig{
		Bool:     cdktf.Token_AsAny(cdktf.Fn_Lookup(mapRes.ReqMap(), jsii.String("key1"), jsii.Bool(false))),
		Str:      cdktf.Token_AsString(cdktf.Fn_Lookup(mapRes.OptMap(), jsii.String("key1"), jsii.String("missing")), &cdktf.EncodingOptions{}),
		Num:      cdktf.Token_AsNumber(cdktf.Fn_Lookup(mapRes.ComputedMap(), jsii.String("key1"), jsii.Number(0))),
		StrList:  &[]*string{cdktf.Token_AsString(cdktf.Fn_Lookup(mapRes.OptMap(), jsii.String("key1"), jsii.String("missing")), &cdktf.EncodingOptions{})},
		NumList:  &[]*float64{cdktf.Token_AsNumber(cdktf.Fn_Lookup(mapRes.ComputedMap(), jsii.String("key1"), jsii.Number(0)))},
		BoolList: &[]interface{}{cdktf.Token_AsAny(cdktf.Fn_Lookup(mapRes.ReqMap(), jsii.String("key1"), jsii.Bool(false)))},
	})

	// passing a reference to a complete map
	edge.NewMapResource(stack, jsii.String("map_reference"), &edge.MapResourceConfig{
		OptMap: mapRes.OptMap(),
		ReqMap: mapRes.ReqMap(),
	})

	// passing a list ref into a set
	edge.NewSetBlockResource(stack, jsii.String("set_from_list"), &edge.SetBlockResourceConfig{
		Set: list.Req(),
	})

	// passing a set ref into a list
	edge.NewListBlockResource(stack, jsii.String("list_from_set"), &edge.ListBlockResourceConfig{
		Req:       set.Set(),
		Singlereq: &edge.ListBlockResourceSinglereq{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")},
	})

	// passing a list ref of a complex list type (no block) into an output
	cdktf.NewTerraformOutput(stack, jsii.String("list_from_list_type_ref"), &cdktf.TerraformOutputConfig{
		Value:    list.ComputedListOfObject(),
		StaticId: jsii.Bool(true),
	})

	// passing an element of a list ref of a complex list type (no block) into a resource
	edge.NewOptionalAttributeResource(stack, jsii.String("list_item_from_list_type_ref"), &edge.OptionalAttributeResourceConfig{
		Str: list.ComputedListOfObject().Get(jsii.Number(5)).Str(),
	})

	return stack
}

func NewProviderStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	providerOpt := edge.NewEdgeProvider(stack, jsii.String("edge"), &edge.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	providerFull := edge.NewEdgeProvider(stack, jsii.String("edge_full"), &edge.EdgeProviderConfig{
		Reqstr:       jsii.String("reqstr"),
		Reqnum:       jsii.Number(123),
		Reqbool:      jsii.Bool(true),
		Optstr:       jsii.String("optstr"),
		Optnum:       jsii.Number(456),
		Optbool:      jsii.Bool(false),
		Computedstr:  jsii.String("computedstr"),
		Computednum:  jsii.Number(789),
		Computedbool: jsii.Bool(true),
		Alias:        jsii.String("full"),
	})

	edge.NewRequiredAttributeResource(stack, jsii.String("reqOpt"), &edge.RequiredAttributeResourceConfig{
		Bool:     providerOpt.Reqbool(),
		Num:      providerOpt.Reqnum(),
		Str:      providerOpt.Reqstr(),
		StrList:  &[]*string{providerOpt.Reqstr()},
		NumList:  &[]*float64{providerOpt.Reqnum()},
		BoolList: &[]interface{}{providerOpt.Reqbool()},
	})

	edge.NewOptionalAttributeResource(stack, jsii.String("optOpt"), &edge.OptionalAttributeResourceConfig{
		Bool: providerOpt.Optbool(),
		Str:  providerOpt.Optstr(),
		Num:  providerOpt.Optnum(),
	})

	edge.NewOptionalAttributeResource(stack, jsii.String("computedOpt"), &edge.OptionalAttributeResourceConfig{
		Bool: providerOpt.Computedbool(),
		Str:  providerOpt.Computedstr(),
		Num:  providerOpt.Computednum(),
	})

	edge.NewRequiredAttributeResource(stack, jsii.String("reqFull"), &edge.RequiredAttributeResourceConfig{
		Bool:     providerFull.Reqbool(),
		Num:      providerFull.Reqnum(),
		Str:      providerFull.Reqstr(),
		StrList:  &[]*string{providerFull.Reqstr()},
		NumList:  &[]*float64{providerFull.Reqnum()},
		BoolList: &[]interface{}{providerFull.Reqbool()},
	})

	edge.NewOptionalAttributeResource(stack, jsii.String("optFull"), &edge.OptionalAttributeResourceConfig{
		Bool: providerFull.Optbool(),
		Str:  providerFull.Optstr(),
		Num:  providerFull.Optnum(),
	})

	edge.NewOptionalAttributeResource(stack, jsii.String("computedFull"), &edge.OptionalAttributeResourceConfig{
		Bool: providerFull.Computedbool(),
		Str:  providerFull.Computedstr(),
		Num:  providerFull.Computednum(),
	})

	return stack
}

func NewIteratorStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	edge.NewEdgeProvider(stack, jsii.String("edge"), &edge.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	simpleList := edge.NewOptionalAttributeResource(stack, jsii.String("target"), &edge.OptionalAttributeResourceConfig{
		StrList: &[]*string{jsii.String("a"), jsii.String("b"), jsii.String("c")},
	})

	complexList := edge.NewListBlockResource(stack, jsii.String("list"), &edge.ListBlockResourceConfig{
		Req: &[]*edge.ListBlockResourceReq{
			{
				Reqbool: jsii.Bool(true),
				Reqnum:  jsii.Number(1),
				Reqstr:  jsii.String(("reqstr")),
			},
			{
				Reqbool: jsii.Bool(false),
				Reqnum:  jsii.Number(0),
				Reqstr:  jsii.String(("reqstr2")),
			},
		},
		Singlereq: &edge.ListBlockResourceSinglereq{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")},
	})

	stringMap := edge.NewMapResource(stack, jsii.String("map"), &edge.MapResourceConfig{
		OptMap: &map[string]*string{"key1": jsii.String("value1"), "key2": jsii.String("value2")},
		ReqMap: &map[string]interface{}{"key1": jsii.Bool(true)},
	})

	stringListIterator := cdktf.TerraformIterator_FromList(simpleList.StrList())
	complexListIterator := cdktf.TerraformIterator_FromList(complexList.Req())
	stringMapIterator := cdktf.TerraformIterator_FromMap(stringMap.OptMap())

	// iterating over a list of strings
	edge.NewOptionalAttributeResource(stack, jsii.String("string_list_target"), &edge.OptionalAttributeResourceConfig{
		ForEach: &stringListIterator,
		Str:     cdktf.Token_AsString(stringListIterator.Value(), &cdktf.EncodingOptions{}),
	})

	// iterating over a list of complex objects
	edge.NewOptionalAttributeResource(stack, jsii.String("complex_list_target"), &edge.OptionalAttributeResourceConfig{
		ForEach: &complexListIterator,
		Str:     complexListIterator.GetString(jsii.String("reqstr")),
		Num:     complexListIterator.GetNumber(jsii.String("reqnum")),
	})

	// iterating over entries of a map of strings
	edge.NewOptionalAttributeResource(stack, jsii.String("string_map_target"), &edge.OptionalAttributeResourceConfig{
		ForEach: &stringMapIterator,
		Str:     cdktf.Token_AsString(stringMapIterator.Value(), &cdktf.EncodingOptions{}),
	})

	// passing an iterator to a block property
	edge.NewListBlockResource(stack, jsii.String("list_attribute"), &edge.ListBlockResourceConfig{
		Req: complexListIterator.Dynamic(&map[string]interface{}{
			"reqbool": complexListIterator.GetBoolean(jsii.String("reqbool")),
			"reqstr":  complexListIterator.GetString(jsii.String("reqstr")),
			"reqnum":  complexListIterator.GetNumber(jsii.String("reqnum")),
		}),
		Singlereq: &edge.ListBlockResourceSinglereq{
			Reqbool: jsii.Bool(true),
			Reqnum:  jsii.Number(0),
			Reqstr:  jsii.String("a"),
		},
	})

	return stack
}

func main() {
	app := cdktf.Testing_StubVersion(cdktf.NewApp(&cdktf.AppOptions{StackTraces: jsii.Bool(false)}))

	NewReferenceStack(app, "reference")
	NewProviderStack(app, "provider")
	NewIteratorStack(app, "iterator")

	app.Synth()
}
