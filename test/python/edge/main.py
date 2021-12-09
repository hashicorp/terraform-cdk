#!/usr/bin/env python
import os
from constructs import Construct
from cdktf import App, Fn, TerraformStack
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
            singlereq={"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}
        )

        # plain values
        edge.RequiredAttributeResource(self, "plain",
            bool=res.bool,
            str=res.str,
            num=res.num
        )

        # required values FROM required single item lists
        edge.RequiredAttributeResource(self, "from_single_list",
            bool=list.singlereq.reqbool,
            str=list.singlereq.reqstr,
            num=list.singlereq.reqnum
        )

        # required values FROM required multi item lists
        # edge.RequiredAttributeResource(self, "from_list",
        #     bool=Fn.lookup(Fn.element(list.req, 0), "reqbool", False),
        #     str=Fn.lookup(Fn.element(list.req, 0), "reqstr", "fallback"),
        #     num=Fn.lookup(Fn.element(list.req, 0), "reqnum", 0)
        # )

        # passing a reference to a complete list
        # edge.ListBlockResource(self, "list_reference",
        #     req=list.req,
        #     singlereq=list.singlereq
        # )

        # passing a literal array with references for a list
        edge.ListBlockResource(self, "list_literal",
            req=[list.singlereq],
            singlereq=list.singlereq
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

        # TODO: this currently does not compile because provider.reqbool may be undefined
        # although it is required to be set and therefor never actually is undefined
        edge.RequiredAttributeResource(self, "reqOpt",
            bool=provider_opt.reqbool,
            num=provider_opt.reqnum,
            str=provider_opt.reqstr
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
            str=provider_full.reqstr
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