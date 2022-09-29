// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  Fn,
  TerraformIterator,
  TerraformOutput,
  TerraformStack,
} from "cdktf";
import * as edge from "./.gen/providers/edge";

// Using references to resource attributes as resource arguments
export class ReferenceStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new edge.provider.EdgeProvider(this, "edge", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
    });

    const res = new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "test",
      {}
    );
    const list = new edge.listBlockResource.ListBlockResource(this, "list", {
      req: [
        { reqbool: true, reqnum: 1, reqstr: "reqstr" },
        { reqbool: false, reqnum: 0, reqstr: "reqstr2" },
      ],
      singlereq: { reqbool: false, reqnum: 1, reqstr: "reqstr" },
    });
    const map = new edge.mapResource.MapResource(this, "map", {
      optMap: { key1: "value1" },
      reqMap: { key1: true },
    });
    const set = new edge.setBlockResource.SetBlockResource(this, "set_block", {
      set: [
        { reqbool: true, reqnum: 1, reqstr: "reqstr" },
        { reqbool: false, reqnum: 0, reqstr: "reqstr2" },
      ],
    });

    // plain values
    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "plain",
      {
        bool: res.bool,
        str: res.str,
        num: res.num,
        strList: res.strList,
        numList: res.numList,
        boolList: res.boolList,
      }
    );

    // required values FROM required single item lists
    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "from_single_list",
      {
        bool: list.singlereq.reqbool,
        str: list.singlereq.reqstr,
        num: list.singlereq.reqnum,
        strList: [list.singlereq.reqstr],
        numList: [list.singlereq.reqnum],
        boolList: [list.singlereq.reqbool],
      }
    );

    // required values FROM required multi item lists
    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "from_list",
      {
        bool: Fn.lookup(Fn.element(list.req, 0), "reqbool", false),
        str: list.req.get(0).reqstr,
        num: Fn.lookup(Fn.element(list.req, 0), "reqnum", 0),
        strList: [list.req.get(0).reqstr],
        numList: [Fn.lookup(Fn.element(list.req, 0), "reqnum", 0)],
        boolList: [Fn.lookup(Fn.element(list.req, 0), "reqbool", false)],
      }
    );

    // passing a reference to a complete list
    new edge.listBlockResource.ListBlockResource(this, "list_reference", {
      req: list.req,
      singlereq: list.singlereq,
    });

    // passing a literal array with references for a list
    new edge.listBlockResource.ListBlockResource(this, "list_literal", {
      req: [list.singlereq],
      singlereq: list.singlereq,
    });

    // required values FROM map
    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "from_map",
      {
        bool: Fn.lookup(map.reqMap, "key1", false),
        str: Fn.lookup(map.optMap, "key1", "missing"),
        num: Fn.lookup(map.computedMap, "key1", 0),
        strList: [Fn.lookup(map.optMap, "key1", "missing")],
        numList: [Fn.lookup(map.computedMap, "key1", 0)],
        boolList: [Fn.lookup(map.reqMap, "key1", false)],
      }
    );

    // passing a reference to a complete map
    new edge.mapResource.MapResource(this, "map_reference", {
      optMap: map.optMap,
      reqMap: map.reqMap,
    });

    // passing a list ref into a set
    new edge.setBlockResource.SetBlockResource(this, "set_from_list", {
      set: list.req,
    });

    // passing a set ref into a list
    new edge.listBlockResource.ListBlockResource(this, "list_from_set", {
      req: set.set,
      singlereq: { reqbool: true, reqnum: 1, reqstr: "reqstr" },
    });

    // passing a list ref of a complex list type (no block) into an output
    new TerraformOutput(this, "list_from_list_type_ref", {
      value: list.computedListOfObject,
      staticId: true,
    });

    // passing an element of a list ref of a complex list type (no block) into a resource
    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "list_item_from_list_type_ref",
      {
        str: list.computedListOfObject.get(5).str,
      }
    );
  }
}

// CDKTF supports referencing inputs from providers (Terraform does not)
export class ProviderStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const providerOpt = new edge.provider.EdgeProvider(this, "edge", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
    });
    const providerFull = new edge.provider.EdgeProvider(this, "edge_full", {
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

    // Non-null assertion because provider.reqbool may be undefined
    // although it is required to be set and therefor never actually is undefined
    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "reqOpt",
      {
        bool: providerOpt.reqbool!,
        num: providerOpt.reqnum!,
        str: providerOpt.reqstr!,
        strList: [providerOpt.reqstr!],
        numList: [providerOpt.reqnum!],
        boolList: [providerOpt.reqbool!],
      }
    );

    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "optOpt",
      {
        bool: providerOpt.optbool,
        str: providerOpt.optstr,
        num: providerOpt.optnum,
      }
    );

    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "computedOpt",
      {
        bool: providerOpt.computedbool,
        str: providerOpt.computedstr,
        num: providerOpt.computednum,
      }
    );

    new edge.requiredAttributeResource.RequiredAttributeResource(
      this,
      "reqFull",
      {
        bool: providerFull.reqbool!,
        num: providerFull.reqnum!,
        str: providerFull.reqstr!,
        strList: [providerFull.reqstr!],
        numList: [providerFull.reqnum!],
        boolList: [providerFull.reqbool!],
      }
    );

    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "optFull",
      {
        bool: providerFull.optbool,
        str: providerFull.optstr,
        num: providerFull.optnum,
      }
    );

    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "computedFull",
      {
        bool: providerFull.computedbool,
        str: providerFull.computedstr,
        num: providerFull.computednum,
      }
    );
  }
}

export class IteratorStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new edge.provider.EdgeProvider(this, "edge", {
      reqstr: "reqstr",
      reqnum: 123,
      reqbool: true,
    });

    const simpleList =
      new edge.optionalAttributeResource.OptionalAttributeResource(
        this,
        "target",
        {
          strList: ["a", "b", "c"],
        }
      );

    const complexList = new edge.listBlockResource.ListBlockResource(
      this,
      "list",
      {
        req: [
          { reqbool: true, reqnum: 1, reqstr: "reqstr" },
          { reqbool: false, reqnum: 0, reqstr: "reqstr2" },
        ],
        singlereq: { reqbool: false, reqnum: 1, reqstr: "reqstr" },
      }
    );
    const map = new edge.mapResource.MapResource(this, "map", {
      optMap: { key1: "value1", key2: "value2" },
      reqMap: { key1: true },
    });

    const stringListIterator = TerraformIterator.fromList(simpleList.strList);
    const complexListIterator = TerraformIterator.fromList(complexList.req);
    const stringMapIterator = TerraformIterator.fromMap(map.optMap);

    // iterating over a list of strings
    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "string_list_target",
      {
        forEach: stringListIterator,
        str: stringListIterator.value,
      }
    );

    // iterating over a list of complex objects
    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "complex_list_target",
      {
        forEach: complexListIterator,
        str: complexListIterator.getString("reqstr"),
        num: complexListIterator.getNumber("reqnum"),
      }
    );

    // iterating over entries of a map of strings
    new edge.optionalAttributeResource.OptionalAttributeResource(
      this,
      "string_map_target",
      {
        forEach: stringMapIterator,
        str: stringMapIterator.value,
      }
    );

    // passing an iterator to a block property
    new edge.listBlockResource.ListBlockResource(this, "list_attribute", {
      req: complexListIterator.dynamic({
        reqbool: complexListIterator.getBoolean("reqbool"),
        reqstr: complexListIterator.getString("reqstr"),
        reqnum: complexListIterator.getNumber("reqnum"),
      }),
      singlereq: {
        reqbool: true,
        reqnum: 0,
        reqstr: "a",
      },
    });
  }
}

const app = new App();
new ReferenceStack(app, "reference");
new ProviderStack(app, "provider");
new IteratorStack(app, "iterator");
app.synth();
