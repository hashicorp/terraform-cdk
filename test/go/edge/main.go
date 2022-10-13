package main

import (
	"cdk.tf/go/stack/generated/hashicorp/edge/listblockresource"
	"cdk.tf/go/stack/generated/hashicorp/edge/mapresource"
	"cdk.tf/go/stack/generated/hashicorp/edge/optionalattributeresource"
	"cdk.tf/go/stack/generated/hashicorp/edge/provider"
	"cdk.tf/go/stack/generated/hashicorp/edge/requiredattributeresource"
	"cdk.tf/go/stack/generated/hashicorp/edge/setblockresource"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

func NewReferenceStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	provider.NewEdgeProvider(stack, jsii.String("edge"), &provider.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	res := optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("test"), &optionalattributeresource.OptionalAttributeResourceConfig{})

	list := listblockresource.NewListBlockResource(stack, jsii.String("list"), &listblockresource.ListBlockResourceConfig{
		Req: &[]*listblockresource.ListBlockResourceReq{
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
		Singlereq: &listblockresource.ListBlockResourceSinglereq{
			Reqbool: jsii.Bool(false),
			Reqnum:  jsii.Number(1),
			Reqstr:  jsii.String(("reqstr")),
		},
	})

	mapRes := mapresource.NewMapResource(stack, jsii.String("map"), &mapresource.MapResourceConfig{
		OptMap: &map[string]*string{"Key1": jsii.String("value1")},
		ReqMap: &map[string]interface{}{"Key1": jsii.Bool(true)},
	})

	set := setblockresource.NewSetBlockResource(stack, jsii.String("set_block"), &setblockresource.SetBlockResourceConfig{
		Set: &[]*setblockresource.SetBlockResourceSet{&setblockresource.SetBlockResourceSet{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")}, &setblockresource.SetBlockResourceSet{Reqbool: jsii.Bool(false), Reqnum: jsii.Number(0), Reqstr: jsii.String("reqstr2")}},
	})

	// plain values
	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("plain"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     res.Bool(),
		Str:      res.Str(),
		Num:      res.Num(),
		StrList:  res.StrList(),
		NumList:  res.NumList(),
		BoolList: res.BoolList(),
	})

	// required values FROM required single item lists
	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("from_single_list"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     list.Singlereq().Reqbool(),
		Str:      list.Singlereq().Reqstr(),
		Num:      list.Singlereq().Reqnum(),
		StrList:  &[]*string{list.Singlereq().Reqstr()},
		NumList:  &[]*float64{list.Singlereq().Reqnum()},
		BoolList: &[]interface{}{list.Singlereq().Reqbool()},
	})

	// required values FROM required multi item lists
	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("from_list"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     cdktf.Token_AsAny(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqbool"), jsii.Bool(false))),
		Str:      list.Req().Get(jsii.Number(0)).Reqstr(),
		Num:      cdktf.Token_AsNumber(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqnum"), jsii.Number(0))),
		StrList:  &[]*string{list.Req().Get(jsii.Number(0)).Reqstr()},
		NumList:  &[]*float64{cdktf.Token_AsNumber(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqnum"), jsii.Number(0)))},
		BoolList: &[]interface{}{cdktf.Token_AsAny(cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), jsii.Number(0)), jsii.String("reqbool"), jsii.Bool(false)))},
	})

	// passing a reference to a complete list
	// listblockresource.NewListBlockResource(stack, jsii.String("list_reference"), &listblockresource.ListBlockResourceConfig{
	// TODO: this fails at synth with "Expected array type, got \"<unresolved-token>\""
	// Req: list.Req(),
	// TODO: this does not compile (see #1371)
	// Singlereq: list.Singlereq(),
	// })

	// passing a literal array with references for a list
	// listblockresource.NewListBlockResource(stack, jsii.String("list_literal"), &listblockresource.ListBlockResourceConfig{
	// TODO: this does not compile as the types do not match (despite having the same interface)
	// Req: &[]*listblockresource.ListBlockResourceReq{list.Singlereq()},
	// Singlereq: list.Singlereq(),
	// })

	// required values FROM map
	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("from_map"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     cdktf.Token_AsAny(cdktf.Fn_Lookup(mapRes.ReqMap(), jsii.String("key1"), jsii.Bool(false))),
		Str:      cdktf.Token_AsString(cdktf.Fn_Lookup(mapRes.OptMap(), jsii.String("key1"), jsii.String("missing")), &cdktf.EncodingOptions{}),
		Num:      cdktf.Token_AsNumber(cdktf.Fn_Lookup(mapRes.ComputedMap(), jsii.String("key1"), jsii.Number(0))),
		StrList:  &[]*string{cdktf.Token_AsString(cdktf.Fn_Lookup(mapRes.OptMap(), jsii.String("key1"), jsii.String("missing")), &cdktf.EncodingOptions{})},
		NumList:  &[]*float64{cdktf.Token_AsNumber(cdktf.Fn_Lookup(mapRes.ComputedMap(), jsii.String("key1"), jsii.Number(0)))},
		BoolList: &[]interface{}{cdktf.Token_AsAny(cdktf.Fn_Lookup(mapRes.ReqMap(), jsii.String("key1"), jsii.Bool(false)))},
	})

	// passing a reference to a complete map
	mapresource.NewMapResource(stack, jsii.String("map_reference"), &mapresource.MapResourceConfig{
		OptMap: mapRes.OptMap(),
		ReqMap: mapRes.ReqMap(),
	})

	// passing a list ref into a set
	setblockresource.NewSetBlockResource(stack, jsii.String("set_from_list"), &setblockresource.SetBlockResourceConfig{
		Set: list.Req(),
	})

	// passing a set ref into a list
	listblockresource.NewListBlockResource(stack, jsii.String("list_from_set"), &listblockresource.ListBlockResourceConfig{
		Req:       set.Set(),
		Singlereq: &listblockresource.ListBlockResourceSinglereq{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")},
	})

	// passing a list ref of a complex list type (no block) into an output
	cdktf.NewTerraformOutput(stack, jsii.String("list_from_list_type_ref"), &cdktf.TerraformOutputConfig{
		Value:    list.ComputedListOfObject(),
		StaticId: jsii.Bool(true),
	})

	// passing an element of a list ref of a complex list type (no block) into a resource
	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("list_item_from_list_type_ref"), &optionalattributeresource.OptionalAttributeResourceConfig{
		Str: list.ComputedListOfObject().Get(jsii.Number(5)).Str(),
	})

	return stack
}

func NewProviderStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	providerOpt := provider.NewEdgeProvider(stack, jsii.String("edge"), &provider.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	providerFull := provider.NewEdgeProvider(stack, jsii.String("provider_full"), &provider.EdgeProviderConfig{
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

	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("reqOpt"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     providerOpt.Reqbool(),
		Num:      providerOpt.Reqnum(),
		Str:      providerOpt.Reqstr(),
		StrList:  &[]*string{providerOpt.Reqstr()},
		NumList:  &[]*float64{providerOpt.Reqnum()},
		BoolList: &[]interface{}{providerOpt.Reqbool()},
	})

	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("optOpt"), &optionalattributeresource.OptionalAttributeResourceConfig{
		Bool: providerOpt.Optbool(),
		Str:  providerOpt.Optstr(),
		Num:  providerOpt.Optnum(),
	})

	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("computedOpt"), &optionalattributeresource.OptionalAttributeResourceConfig{
		Bool: providerOpt.Computedbool(),
		Str:  providerOpt.Computedstr(),
		Num:  providerOpt.Computednum(),
	})

	requiredattributeresource.NewRequiredAttributeResource(stack, jsii.String("reqFull"), &requiredattributeresource.RequiredAttributeResourceConfig{
		Bool:     providerFull.Reqbool(),
		Num:      providerFull.Reqnum(),
		Str:      providerFull.Reqstr(),
		StrList:  &[]*string{providerFull.Reqstr()},
		NumList:  &[]*float64{providerFull.Reqnum()},
		BoolList: &[]interface{}{providerFull.Reqbool()},
	})

	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("optFull"), &optionalattributeresource.OptionalAttributeResourceConfig{
		Bool: providerFull.Optbool(),
		Str:  providerFull.Optstr(),
		Num:  providerFull.Optnum(),
	})

	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("computedFull"), &optionalattributeresource.OptionalAttributeResourceConfig{
		Bool: providerFull.Computedbool(),
		Str:  providerFull.Computedstr(),
		Num:  providerFull.Computednum(),
	})

	return stack
}

func NewIteratorStack(scope constructs.Construct, id string) cdktf.TerraformStack {
	stack := cdktf.NewTerraformStack(scope, &id)

	provider.NewEdgeProvider(stack, jsii.String("edge"), &provider.EdgeProviderConfig{
		Reqstr:  jsii.String("reqstr"),
		Reqnum:  jsii.Number(123),
		Reqbool: jsii.Bool(true),
	})

	simpleList := optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("target"), &optionalattributeresource.OptionalAttributeResourceConfig{
		StrList: &[]*string{jsii.String("a"), jsii.String("b"), jsii.String("c")},
	})

	complexList := listblockresource.NewListBlockResource(stack, jsii.String("list"), &listblockresource.ListBlockResourceConfig{
		Req: &[]*listblockresource.ListBlockResourceReq{
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
		Singlereq: &listblockresource.ListBlockResourceSinglereq{Reqbool: jsii.Bool(true), Reqnum: jsii.Number(1), Reqstr: jsii.String("reqstr")},
	})

	stringMap := mapresource.NewMapResource(stack, jsii.String("map"), &mapresource.MapResourceConfig{
		OptMap: &map[string]*string{"key1": jsii.String("value1"), "key2": jsii.String("value2")},
		ReqMap: &map[string]interface{}{"key1": jsii.Bool(true)},
	})

	stringListIterator := cdktf.TerraformIterator_FromList(simpleList.StrList())
	complexListIterator := cdktf.TerraformIterator_FromList(complexList.Req())
	stringMapIterator := cdktf.TerraformIterator_FromMap(stringMap.OptMap())

	// iterating over a list of strings
	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("string_list_target"), &optionalattributeresource.OptionalAttributeResourceConfig{
		ForEach: &stringListIterator,
		Str:     cdktf.Token_AsString(stringListIterator.Value(), &cdktf.EncodingOptions{}),
	})

	// iterating over a list of complex objects
	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("complex_list_target"), &optionalattributeresource.OptionalAttributeResourceConfig{
		ForEach: &complexListIterator,
		Str:     complexListIterator.GetString(jsii.String("reqstr")),
		Num:     complexListIterator.GetNumber(jsii.String("reqnum")),
	})

	// iterating over entries of a map of strings
	optionalattributeresource.NewOptionalAttributeResource(stack, jsii.String("string_map_target"), &optionalattributeresource.OptionalAttributeResourceConfig{
		ForEach: &stringMapIterator,
		Str:     cdktf.Token_AsString(stringMapIterator.Value(), &cdktf.EncodingOptions{}),
	})

	// passing an iterator to a block property
	listblockresource.NewListBlockResource(stack, jsii.String("list_attribute"), &listblockresource.ListBlockResourceConfig{
		Req: complexListIterator.Dynamic(&map[string]interface{}{
			"reqbool": complexListIterator.GetBoolean(jsii.String("reqbool")),
			"reqstr":  complexListIterator.GetString(jsii.String("reqstr")),
			"reqnum":  complexListIterator.GetNumber(jsii.String("reqnum")),
		}),
		Singlereq: &listblockresource.ListBlockResourceSinglereq{
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
