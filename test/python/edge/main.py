#!/usr/bin/env python
import os
from constructs import Construct
from cdktf import App, Fn, TerraformStack, Token
import imports.edge as edge

# Using references to resource attributes as resource arguments
class ReferenceStack(TerraformStack):
    def __init__(self, scope, id):
        super().__init__(scope, id)
        edge.EdgeProvider(self, "edge",
            reqstr="reqstr",
            reqnum=123,
            reqbool=True
        )

        res = edge.OptionalAttributeResource(self, "test")
        list = edge.ListBlockResource(self, "list",
            req=[{"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}, {"reqbool": False, "reqnum": 0, "reqstr": "reqstr2"}
            ],
            singlereq={"reqbool": False, "reqnum": 1, "reqstr": "reqstr"}
        )
        map = edge.MapResource(self, "map",
            opt_map={"key1": "value1"},
            req_map={"key1": True}
        )
        set = edge.SetBlockResource(self, "set_block",
            set=[{"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}, {"reqbool": False, "reqnum": 0, "reqstr": "reqstr2"}
            ]
        )

        # plain values
        edge.RequiredAttributeResource(self, "plain",
            bool=res.bool,
            str=res.str,
            num=res.num,
            str_list=res.str_list,
            num_list=res.num_list,
            bool_list=res.bool_list
        )

        # required values FROM required single item lists
        edge.RequiredAttributeResource(self, "from_single_list",
            bool=list.singlereq.reqbool,
            str=list.singlereq.reqstr,
            num=list.singlereq.reqnum,
            str_list=[list.singlereq.reqstr],
            num_list=[list.singlereq.reqnum],
            bool_list=[list.singlereq.reqbool]
        )

        # required values FROM required multi item lists
        edge.RequiredAttributeResource(self, "from_list",
            bool=Token().as_any(Fn.lookup(Fn.element(list.req, 0), "reqbool", False)),
            str=Token().as_string(Fn.lookup(Fn.element(list.req, 0), "reqstr", "fallback")),
            num=Token().as_number(Fn.lookup(Fn.element(list.req, 0), "reqnum", 0)),
            str_list=[Token().as_string(Fn.lookup(Fn.element(list.req, 0), "reqstr", "fallback"))],
            num_list=[Token().as_number(Fn.lookup(Fn.element(list.req, 0), "reqnum", 0))],
            bool_list=[Token().as_any(Fn.lookup(Fn.element(list.req, 0), "reqbool", False))]
        )

        # passing a reference to a complete list
        edge.ListBlockResource(self, "list_reference",
            req=list.req,
            singlereq=list.singlereq
        )

        # passing a literal array with references for a list
        edge.ListBlockResource(self, "list_literal",
            req=[list.singlereq],
            singlereq=list.singlereq
        )

        # required values FROM map
        edge.RequiredAttributeResource(self, "from_map",
            bool=Token().as_any(Fn.lookup(map.req_map, "key1", False)),
            str=Token().as_string(Fn.lookup(map.opt_map, "key1", "missing")),
            num=Token().as_number(Fn.lookup(map.computed_map, "key1", 0)),
            str_list=[Token().as_string(Fn.lookup(map.opt_map, "key1", "missing"))],
            num_list=[Token().as_number(Fn.lookup(map.computed_map, "key1", 0))],
            bool_list=[Token().as_any(Fn.lookup(map.req_map, "key1", False))]
        )

        # passing a reference to a complete map
        edge.MapResource(self, "map_reference",
            opt_map=map.opt_map,
            req_map=map.req_map
        )

        # passing a list ref into a set
        edge.SetBlockResource(self, "set_from_list",
            set=list.req
        )

        # passing a set ref into a list
        edge.ListBlockResource(self, "list_from_set",
            req=set.set,
            singlereq={"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}
        )

# CDKTF supports referencing inputs from providers (Terraform does not)
class ProviderStack(TerraformStack):
    def __init__(self, scope, id):
        super().__init__(scope, id)
        provider_opt = edge.EdgeProvider(self, "edge",
            reqstr="reqstr",
            reqnum=123,
            reqbool=True
        )
        provider_full = edge.EdgeProvider(self, "edge_full",
            reqstr="reqstr",
            reqnum=123,
            reqbool=True,
            optstr="optstr",
            optnum=456,
            optbool=False,
            computedstr="computedstr",
            computednum=789,
            computedbool=True,
            alias="full"
        )

        edge.RequiredAttributeResource(self, "reqOpt",
            bool=provider_opt.reqbool,
            num=provider_opt.reqnum,
            str=provider_opt.reqstr,
            str_list=[provider_opt.reqstr],
            num_list=[provider_opt.reqnum],
            bool_list=[provider_opt.reqbool]
        )

        edge.OptionalAttributeResource(self, "optOpt",
            bool=provider_opt.optbool,
            str=provider_opt.optstr,
            num=provider_opt.optnum
        )

        edge.OptionalAttributeResource(self, "computedOpt",
            bool=provider_opt.computedbool,
            str=provider_opt.computedstr,
            num=provider_opt.computednum
        )

        edge.RequiredAttributeResource(self, "reqFull",
            bool=provider_full.reqbool,
            num=provider_full.reqnum,
            str=provider_full.reqstr,
            str_list=[provider_full.reqstr],
            num_list=[provider_full.reqnum],
            bool_list=[provider_full.reqbool]
        )

        edge.OptionalAttributeResource(self, "optFull",
            bool=provider_full.optbool,
            str=provider_full.optstr,
            num=provider_full.optnum
        )

        edge.OptionalAttributeResource(self, "computedFull",
            bool=provider_full.computedbool,
            str=provider_full.computedstr,
            num=provider_full.computednum
        )

app = App()
ReferenceStack(app, "reference")
ProviderStack(app, "provider")
app.synth()