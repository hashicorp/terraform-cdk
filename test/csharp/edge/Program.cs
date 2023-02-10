// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

using System;
using System.Collections.Generic;
using System.Linq;

using Providers.Edge.Provider;
using Providers.Edge.ListBlockResource;
using Providers.Edge.OptionalAttributeResource;
using Providers.Edge.MapResource;
using Providers.Edge.SetBlockResource;
using Providers.Edge.RequiredAttributeResource;
using Constructs;
using HashiCorp.Cdktf;

namespace MyCompany.MyApp
{
    // Using references to resource attributes as resource arguments
    class ReferenceStack : TerraformStack
    {
        public ReferenceStack(Construct scope, string id) : base(scope, id)
        {
            new EdgeProvider(this, "edge", new EdgeProviderConfig {
                Reqstr = "reqstr",
                Reqnum = 123,
                Reqbool = true
            });

            new OptionalAttributeResource(this, "null", new OptionalAttributeResourceConfig { Bool = Token.NullValue() });

            var res = new OptionalAttributeResource(this, "test", new OptionalAttributeResourceConfig { });
            var list = new ListBlockResource(this, "list", new ListBlockResourceConfig {
                Req = new [] { new ListBlockResourceReq { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }, new ListBlockResourceReq { Reqbool = false, Reqnum = 0, Reqstr = "reqstr2" } },
                Singlereq = new ListBlockResourceSinglereq { Reqbool = false, Reqnum = 1, Reqstr = "reqstr" }
            });
            var map = new MapResource(this, "map", new MapResourceConfig {
                OptMap = new Dictionary<string, string> { ["Key1"] = "value1" },
                ReqMap = new Dictionary<string, object> { ["Key1"] = true }
            });
            var set = new SetBlockResource(this, "set_block", new SetBlockResourceConfig {
                Set = new [] { new SetBlockResourceSet { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }, new SetBlockResourceSet { Reqbool = false, Reqnum = 0, Reqstr = "reqstr2" } }
            });

            // plain values
            new RequiredAttributeResource(this, "plain", new RequiredAttributeResourceConfig {
                Bool = res.Bool,
                Str = res.Str,
                Num = res.Num,
                StrList = res.StrList,
                NumList = res.NumList,
                BoolList = res.BoolList
            });

            // required values FROM required single item lists
            new RequiredAttributeResource(this, "from_single_list", new RequiredAttributeResourceConfig {
                Bool = list.Singlereq.Reqbool,
                Str = list.Singlereq.Reqstr,
                Num = list.Singlereq.Reqnum,
                StrList = new [] { list.Singlereq.Reqstr },
                NumList = new [] { list.Singlereq.Reqnum },
                BoolList = new [] { list.Singlereq.Reqbool }
            });

            // required values FROM required multi item lists
            new RequiredAttributeResource(this, "from_list", new RequiredAttributeResourceConfig {
                Bool = Token.AsAny(Fn.Lookup(Fn.Element(list.Req, 0), "reqbool", false)),
                Str = list.Req.Get(0).Reqstr,
                Num = Token.AsNumber(Fn.Lookup(Fn.Element(list.Req, 0), "reqnum", 0)),
                StrList = new [] { list.Req.Get(0).Reqstr },
                NumList = new [] { Token.AsNumber(Fn.Lookup(Fn.Element(list.Req, 0), "reqnum", 0)) },
                BoolList = new [] { Token.AsAny(Fn.Lookup(Fn.Element(list.Req, 0), "reqbool", false)) }
            });

            // passing a reference to a complete list
            // Not supported at this time.
            // Tricky to get working because of JSII interface limitations.
            // new ListBlockResource(this, "list_reference", new ListBlockResourceConfig {
            //     Req = list.Req,
            //     Singlereq = list.Singlereq
            // });

            // passing a literal array with references for a list
            // This doesn't work since the types of 'req' and 'singlereq' are different.
            // It works in TS/Python since the type definitions have the same properties.
            // new ListBlockResource(this, "list_literal", new ListBlockResourceConfig {
            //     Req = new [] { list.Singlereq },
            //     Singlereq = list.Singlereq
            // });

            // required values FROM map
            new RequiredAttributeResource(this, "from_map", new RequiredAttributeResourceConfig {
                Bool = Token.AsAny(Fn.Lookup(map.ReqMap, "key1", false)),
                Str = Token.AsString(Fn.Lookup(map.OptMap, "key1", "missing")),
                Num = Token.AsNumber(Fn.Lookup(map.ComputedMap, "key1", 0)),
                StrList = new [] { Token.AsString(Fn.Lookup(map.OptMap, "key1", "missing")) },
                NumList = new [] { Token.AsNumber(Fn.Lookup(map.ComputedMap, "key1", 0)) },
                BoolList = new [] { Token.AsAny(Fn.Lookup(map.ReqMap, "key1", false)) }
            });

            // passing a reference to a complete map
            new MapResource(this, "map_reference", new MapResourceConfig {
                OptMap = map.OptMap,
                ReqMap = map.ReqMap
            });

            // passing a list ref into a set
            new SetBlockResource(this, "set_from_list", new SetBlockResourceConfig {
                Set = list.Req
            });

            // passing a set ref into a list
            new ListBlockResource(this, "list_from_set", new ListBlockResourceConfig {
                Req = set.Set,
                Singlereq = new ListBlockResourceSinglereq { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }
            });

            // passing a list ref of a complex list type (no block) into an output
            new TerraformOutput(this, "list_from_list_type_ref", new TerraformOutputConfig {
                Value = list.ComputedListOfObject,
                StaticId = true
            });

            // passing an element of a list ref of a complex list type (no block) into a resource
            new OptionalAttributeResource(this, "list_item_from_list_type_ref", new OptionalAttributeResourceConfig {
                Str = list.ComputedListOfObject.Get(5).Str
            });
        }
    }

    // CDKTF supports referencing inputs from providers (Terraform does not)
    class ProviderStack : TerraformStack
    {
        public ProviderStack(Construct scope, string id) : base(scope, id)
        {
            var providerOpt = new EdgeProvider(this, "edge", new EdgeProviderConfig {
                Reqstr = "reqstr",
                Reqnum = 123,
                Reqbool = true
            });
            var providerFull = new EdgeProvider(this, "edge_full", new EdgeProviderConfig {
                Reqstr = "reqstr",
                Reqnum = 123,
                Reqbool = true,
                Optstr = "optstr",
                Optnum = 456,
                Optbool = false,
                Computedstr = "computedstr",
                Computednum = 789,
                Computedbool = true,
                Alias = "full"
            });

            // Non-null assertion because provider.reqbool may be undefined
            // although it is required to be set and therefor never actually is undefined
            new RequiredAttributeResource(this, "reqOpt", new RequiredAttributeResourceConfig {
                Bool = providerOpt.Reqbool,
                Num = providerOpt.Reqnum.Value,
                Str = providerOpt.Reqstr,
                StrList = new [] { providerOpt.Reqstr },
                NumList = new [] { providerOpt.Reqnum.Value },
                BoolList = new [] { providerOpt.Reqbool }
            });

            new OptionalAttributeResource(this, "optOpt", new OptionalAttributeResourceConfig {
                Bool = providerOpt.Optbool,
                Str = providerOpt.Optstr,
                Num = providerOpt.Optnum
            });

            new OptionalAttributeResource(this, "computedOpt", new OptionalAttributeResourceConfig {
                Bool = providerOpt.Computedbool,
                Str = providerOpt.Computedstr,
                Num = providerOpt.Computednum
            });

            new RequiredAttributeResource(this, "reqFull", new RequiredAttributeResourceConfig {
                Bool = providerFull.Reqbool,
                Num = providerFull.Reqnum.Value,
                Str = providerFull.Reqstr,
                StrList = new [] { providerFull.Reqstr },
                NumList = new [] { providerFull.Reqnum.Value },
                BoolList = new [] { providerFull.Reqbool }
            });

            new OptionalAttributeResource(this, "optFull", new OptionalAttributeResourceConfig {
                Bool = providerFull.Optbool,
                Str = providerFull.Optstr,
                Num = providerFull.Optnum
            });

            new OptionalAttributeResource(this, "computedFull", new OptionalAttributeResourceConfig {
                Bool = providerFull.Computedbool,
                Str = providerFull.Computedstr,
                Num = providerFull.Computednum
            });
        }
    }

    class IteratorStack : TerraformStack
    {
        public IteratorStack(Construct scope, string id) : base(scope, id)
        {
            new EdgeProvider(this, "edge", new EdgeProviderConfig {
                Reqstr = "reqstr",
                Reqnum = 123,
                Reqbool = true
            });

            var simpleList = new OptionalAttributeResource(this, "target", new OptionalAttributeResourceConfig {
                StrList = new [] { "a", "b", "c" }
            });

            var complexList = new ListBlockResource(this, "list", new ListBlockResourceConfig {
                Req = new [] { new ListBlockResourceReq { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }, new ListBlockResourceReq { Reqbool = false, Reqnum = 0, Reqstr = "reqstr2" } },
                Singlereq = new ListBlockResourceSinglereq { Reqbool = false, Reqnum = 1, Reqstr = "reqstr" }
            });
            var map = new MapResource(this, "map", new MapResourceConfig {
                OptMap = new Dictionary<string, string> { ["Key1"] = "value1", ["Key2"] = "value2" },
                ReqMap = new Dictionary<string, object> { ["Key1"] = true }
            });

            ListTerraformIterator stringListIterator = TerraformIterator.FromList(simpleList.StrList);
            ListTerraformIterator complexListIterator = TerraformIterator.FromList(complexList.Req);
            MapTerraformIterator stringMapIterator = TerraformIterator.FromMap(map.OptMap);

            // iterating over a list of strings
            new OptionalAttributeResource(this, "string_list_target", new OptionalAttributeResourceConfig {
                ForEach = stringListIterator,
                Str = Token.AsString(stringListIterator.Value)
            });

            // iterating over a list of complex objects
            new OptionalAttributeResource(this, "complex_list_target", new OptionalAttributeResourceConfig {
                ForEach = complexListIterator,
                Str = complexListIterator.GetString("reqstr"),
                Num = complexListIterator.GetNumber("reqnum")
            });

            // iterating over entries of a map of strings
            new OptionalAttributeResource(this, "string_map_target", new OptionalAttributeResourceConfig {
                ForEach = stringMapIterator,
                Str = Token.AsString(stringMapIterator.Value)
            });

            // passing an iterator to a block property
            new ListBlockResource(this, "list_attribute", new ListBlockResourceConfig {
                Req = complexListIterator.Dynamic(new Dictionary<string, object> {
                    // due to https://github.com/aws/jsii/issues/1044 we have to pass a string
                    // (it will still correctly resolve to a boolean when deploying)
                    ["reqbool"] = complexListIterator.GetString("reqbool"),
                    ["reqstr"] = complexListIterator.GetString("reqstr"),
                    ["reqnum"] = complexListIterator.GetNumber("reqnum")
                }),
                Singlereq = new ListBlockResourceSinglereq {
                    Reqbool = true,
                    Reqnum = 0,
                    Reqstr = "a"
                }
            });
        }
    }

    class MyApp
    {
        public static void Main(string[] args)
        {
            App app = new App();
            new ReferenceStack(app, "reference");
            new ProviderStack(app, "provider");
            new IteratorStack(app, "iterator");
            app.Synth();
        }
    }
}