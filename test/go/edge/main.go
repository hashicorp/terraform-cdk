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
			Reqbool: jsii.Bool(true),
			Reqnum:  jsii.Number(1),
			Reqstr:  jsii.String(("reqstr")),
		},
	})

	// plain values
	edge.NewRequiredAttributeResource(stack, jsii.String("plain"), &edge.RequiredAttributeResourceConfig{
		// Bool: res.Bool(), TODO: references to Booleans currently do not work (see #1363)
		Bool: jsii.Bool(true),
		Str:  res.Str(),
		Num:  res.Num(),
		StrList: res.StrList(),
		NumList: res.NumList(),
		BoolList: &[]*bool{jsii.Bool(true)},//res.BoolList(),
	})

	// required values FROM required single item lists
	edge.NewRequiredAttributeResource(stack, jsii.String("from_single_list"), &edge.RequiredAttributeResourceConfig{
		// Bool: list.Singlereq().Reqbool(), TODO: references to Booleans currently do not work (see #1363)
		Bool: jsii.Bool(true),
		Str:  list.Singlereq().Reqstr(),
		Num:  list.Singlereq().Reqnum(),
		StrList: &[]*string{list.Singlereq().Reqstr()},
		NumList: &[]*float64{list.Singlereq().Reqnum()},
		BoolList: &[]*bool{jsii.Bool(true)},//list.Singlereq().Reqbool()},
	})

	// required values FROM required multi item lists
	// edge.NewRequiredAttributeResource(stack, jsii.String("from_list"), &edge.RequiredAttributeResourceConfig{
	// TODO: this compiles, but currently does not work (fails at synth) (see #1371)
	// Bool: cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req, 0), "reqbool", false),
	// TODO: this compiles but fails with "Expected array type, got \"<unresolved-token>\""
	// Num: cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), 0), "reqnum", 0).(*float64),
	// Str: cdktf.Fn_Lookup(cdktf.Fn_Element(list.Req(), 0), "reqstr", "fallback").(*string),
	// })

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
		Bool: providerOpt.Reqbool(),
		Num:  providerOpt.Reqnum(),
		Str:  providerOpt.Reqstr(),
		StrList: &[]*string{providerOpt.Reqstr()},
		NumList: &[]*float64{providerOpt.Reqnum()},
		BoolList: &[]*bool{jsii.Bool(true)},//providerOpt.Reqbool()},
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
		Bool: providerFull.Reqbool(),
		Num:  providerFull.Reqnum(),
		Str:  providerFull.Reqstr(),
		StrList: &[]*string{providerFull.Reqstr()},
		NumList: &[]*float64{providerFull.Reqnum()},
		BoolList: &[]*bool{jsii.Bool(true)},//providerFull.Reqbool()},
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

func main() {
	app := cdktf.Testing_StubVersion(cdktf.NewApp(&cdktf.AppOptions{StackTraces: jsii.Bool(false)}))

	NewReferenceStack(app, "reference")
	NewProviderStack(app, "provider")

	app.Synth()
}
