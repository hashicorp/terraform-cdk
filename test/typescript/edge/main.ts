import { Construct } from "constructs";
import { App, Fn, TerraformStack } from "cdktf";
import * as edge from "./.gen/providers/edge";

// Using references to resource attributes as resource arguments
export class ReferenceStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new edge.EdgeProvider(this, "edge", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
    });

    const res = new edge.OptionalAttributeResource(this, "test", {});
    const list = new edge.ListBlockResource(this, "list", {
      req: [
        { reqbool: true, reqnum: 1, reqstr: "reqstr" },
        { reqbool: false, reqnum: 0, reqstr: "reqstr2" },
      ],
      singlereq: { reqbool: true, reqnum: 1, reqstr: "reqstr" },
    });

    // plain values
    new edge.RequiredAttributeResource(this, "plain", {
      bool: res.bool,
      str: res.str,
      num: res.num,
    });

    // required values FROM required single item lists
    new edge.RequiredAttributeResource(this, "from_single_list", {
      bool: list.singlereq.reqbool,
      str: list.singlereq.reqstr,
      num: list.singlereq.reqnum,
    });

    // required values FROM required multi item lists
    new edge.RequiredAttributeResource(this, "from_list", {
      bool: Fn.lookup(Fn.element(list.req, 0), "reqbool", false),
      str: Fn.lookup(Fn.element(list.req, 0), "reqstr", "fallback"),
      num: Fn.lookup(Fn.element(list.req, 0), "reqnum", 0),
    });

    // passing a reference to a complete list
    new edge.ListBlockResource(this, "list_reference", {
      req: list.req,
      singlereq: list.singlereq,
    });

    // passing a literal array with references for a list
    new edge.ListBlockResource(this, "list_literal", {
      req: [list.singlereq],
      singlereq: list.singlereq,
    });
  }
}

// CDKTF supports referencing inputs from providers (Terraform does not)
export class ProviderStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const providerOpt = new edge.EdgeProvider(this, "edge", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
    });
    const providerFull = new edge.EdgeProvider(this, "edge_full", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
      optstr: "optstr",
      optnum: 456,
      optbool: false,
      computedstr: "computedstr",
      computednum: 789,
      computedbool: true,
      alias: "full",
    });

    // TODO: this currently does not compile because provider.reqbool may be undefined
    // although it is required to be set and therefor never actually is undefined
    new edge.RequiredAttributeResource(this, "reqOpt", {
      bool: providerOpt.reqbool!,
      num: providerOpt.reqnum!,
      str: providerOpt.reqstr!,
    });

    new edge.OptionalAttributeResource(this, "optOpt", {
      bool: providerOpt.optbool,
      str: providerOpt.optstr,
      num: providerOpt.optnum,
    });

    new edge.OptionalAttributeResource(this, "computedOpt", {
      bool: providerOpt.computedbool,
      str: providerOpt.computedstr,
      num: providerOpt.computednum,
    });

    new edge.RequiredAttributeResource(this, "reqFull", {
      bool: providerFull.reqbool!,
      num: providerFull.reqnum!,
      str: providerFull.reqstr!,
    });

    new edge.OptionalAttributeResource(this, "optFull", {
      bool: providerFull.optbool,
      str: providerFull.optstr,
      num: providerFull.optnum,
    });

    new edge.OptionalAttributeResource(this, "computedFull", {
      bool: providerFull.computedbool,
      str: providerFull.computedstr,
      num: providerFull.computednum,
    });
  }
}

const app = new App();
new ReferenceStack(app, "reference");
new ProviderStack(app, "provider");
app.synth();
