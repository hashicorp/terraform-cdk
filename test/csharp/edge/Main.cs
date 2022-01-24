using System;
using System.Collections.Generic;
using System.Linq;

using Providers.Null;
using Providers.Edge;
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

            var res = new OptionalAttributeResource(this, "test", new OptionalAttributeResourceConfig { });
            var list = new ListBlockResource(this, "list", new ListBlockResourceConfig {
                Req = new [] { new ListBlockResourceReq { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }, new ListBlockResourceReq { Reqbool = false, Reqnum = 0, Reqstr = "reqstr2" } },
                Singlereq = new ListBlockResourceSinglereq { Reqbool = true, Reqnum = 1, Reqstr = "reqstr" }
            });
            var map = new MapResource(this, "map", new MapResourceConfig {
                OptMap = new Dictionary<string, string> { ["Key1"] = "value1" },
                ReqMap = new Dictionary<string, object> { ["Key1"] = true }
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
            // new RequiredAttributeResource(this, "from_list", new RequiredAttributeResourceConfig {
            //     Bool = true, //Fn.Lookup(Fn.Element(list.Req, 0), "reqbool", false),
            //     Str = Token.AsString(Fn.Lookup(Fn.Element(list.Req, 0), "reqstr", "fallback")),
            //     Num = Token.AsNumber(Fn.Lookup(Fn.Element(list.Req, 0), "reqnum", 0))
            // });

            // passing a reference to a complete list
            // new ListBlockResource(this, "list_reference", new ListBlockResourceConfig {
            //     Req = list.Req,
            //     Singlereq = list.Singlereq
            // });

            // passing a literal array with references for a list
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

            // Not supported .ReqXXX is optional in CSharp
            // new RequiredAttributeResource(this, "reqOpt", new RequiredAttributeResourceConfig {
            //     Bool = providerOpt.Reqbool,
            //     Num = providerOpt.Reqnum,
            //     Str = providerOpt.Reqstr
            // });

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

            // Not supported .ReqXXX is optional in CSharp
            // new RequiredAttributeResource(this, "reqFull", new RequiredAttributeResourceConfig {
            //     Bool = providerFull.Reqbool,
            //     Num = providerFull.Reqnum,
            //     Str = providerFull.Reqstr
            // });

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

    class MyApp
    {
        public static void Main(string[] args)
        {
            App app = new App();
            new ReferenceStack(app, "reference");
            new ProviderStack(app, "provider");
            app.Synth();
        }
    }
}




