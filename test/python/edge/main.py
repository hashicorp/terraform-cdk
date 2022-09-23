#!/usr/bin/env python
import os
from constructs import Construct
from cdktf import App, Fn, TerraformStack, Token, TerraformOutput, TerraformIterator
import imports.edge as edge

# Using references to resource attributes as resource arguments


class ReferenceStack(TerraformStack):
    def __init__(self, scope, id):
        super().__init__(scope, id)
        edge.provider.EdgeProvider(self, "edge",
                                   reqstr="reqstr",
                                   reqnum=123,
                                   reqbool=True
                                   )

        res = edge.optional_attribute_resource.OptionalAttributeResource(
            self, "test")
        list = edge.list_block_resource.ListBlockResource(self, "list",
                                                          req=[{"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}, {"reqbool": False, "reqnum": 0, "reqstr": "reqstr2"}
                                                               ],
                                                          singlereq={
                                                              "reqbool": False, "reqnum": 1, "reqstr": "reqstr"}
                                                          )
        map = edge.map_resource.MapResource(self, "map",
                                            opt_map={"key1": "value1"},
                                            req_map={"key1": True}
                                            )
        set = edge.set_block_resource.SetBlockResource(self, "set_block",
                                                       set=[{"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}, {"reqbool": False, "reqnum": 0, "reqstr": "reqstr2"}
                                                            ]
                                                       )

        # plain values
        edge.required_attribute_resource.RequiredAttributeResource(self, "plain",
                                                                   bool=res.bool,
                                                                   str=res.str,
                                                                   num=res.num,
                                                                   str_list=res.str_list,
                                                                   num_list=res.num_list,
                                                                   bool_list=res.bool_list
                                                                   )

        # required values FROM required single item lists
        edge.required_attribute_resource.RequiredAttributeResource(self, "from_single_list",
                                                                   bool=list.singlereq.reqbool,
                                                                   str=list.singlereq.reqstr,
                                                                   num=list.singlereq.reqnum,
                                                                   str_list=[
                                                                       list.singlereq.reqstr],
                                                                   num_list=[
                                                                       list.singlereq.reqnum],
                                                                   bool_list=[
                                                                       list.singlereq.reqbool]
                                                                   )

        # required values FROM required multi item lists
        edge.required_attribute_resource.RequiredAttributeResource(self, "from_list",
                                                                   bool=Token().as_any(Fn.lookup(Fn.element(list.req, 0), "reqbool", False)),
                                                                   str=list.req.get(
                                                                       0).reqstr,
                                                                   num=Token().as_number(Fn.lookup(Fn.element(list.req, 0), "reqnum", 0)),
                                                                   str_list=[
                                                                       list.req.get(0).reqstr],
                                                                   num_list=[Token().as_number(
                                                                       Fn.lookup(Fn.element(list.req, 0), "reqnum", 0))],
                                                                   bool_list=[Token().as_any(
                                                                       Fn.lookup(Fn.element(list.req, 0), "reqbool", False))]
                                                                   )

        # passing a reference to a complete list
        # Not supported at this time.
        # Tricky to get working because of JSII interface limitations.
        # edge.list_block_resource.ListBlockResource(self, "list_reference",
        #     req=list.req,
        #     singlereq=list.singlereq
        # )

        # passing a literal array with references for a list
        # This doesn't work since the types of 'req' and 'singlereq' are different.
        # It works in TS since the type definitions have the same properties.
        # edge.list_block_resource.ListBlockResource(self, "list_literal",
        #    req=[list.singlereq],
        #    singlereq=list.singlereq
        # )

        # required values FROM map
        edge.required_attribute_resource.RequiredAttributeResource(self, "from_map",
                                                                   bool=Token().as_any(Fn.lookup(map.req_map, "key1", False)),
                                                                   str=Token().as_string(Fn.lookup(map.opt_map, "key1", "missing")),
                                                                   num=Token().as_number(Fn.lookup(map.computed_map, "key1", 0)),
                                                                   str_list=[Token().as_string(
                                                                       Fn.lookup(map.opt_map, "key1", "missing"))],
                                                                   num_list=[Token().as_number(
                                                                       Fn.lookup(map.computed_map, "key1", 0))],
                                                                   bool_list=[Token().as_any(
                                                                       Fn.lookup(map.req_map, "key1", False))]
                                                                   )

        # passing a reference to a complete map
        edge.map_resource.MapResource(self, "map_reference",
                                      opt_map=map.opt_map,
                                      req_map=map.req_map
                                      )

        # passing a list ref into a set
        edge.set_block_resource.SetBlockResource(self, "set_from_list",
                                                 set=list.req
                                                 )

        # passing a set ref into a list
        edge.list_block_resource.ListBlockResource(self, "list_from_set",
                                                   req=set.set,
                                                   singlereq={
                                                       "reqbool": True, "reqnum": 1, "reqstr": "reqstr"}
                                                   )

        # passing a list ref of a complex list type (no block) into an output
        TerraformOutput(self, "list_from_list_type_ref",
                        value=list.computed_list_of_object,
                        static_id=True,
                        )

        # passing an element of a list ref of a complex list type (no block) into a resource
        edge.optional_attribute_resource.OptionalAttributeResource(self, "list_item_from_list_type_ref",
                                                                   str=list.computed_list_of_object.get(
                                                                       5).str,
                                                                   )

# CDKTF supports referencing inputs from providers (Terraform does not)


class ProviderStack(TerraformStack):
    def __init__(self, scope, id):
        super().__init__(scope, id)
        provider_opt = edge.provider.EdgeProvider(self, "edge",
                                                  reqstr="reqstr",
                                                  reqnum=123,
                                                  reqbool=True
                                                  )
        provider_full = edge.provider.EdgeProvider(self, "edge_full",
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

        edge.required_attribute_resource.RequiredAttributeResource(self, "reqOpt",
                                                                   bool=provider_opt.reqbool,
                                                                   num=provider_opt.reqnum,
                                                                   str=provider_opt.reqstr,
                                                                   str_list=[
                                                                       provider_opt.reqstr],
                                                                   num_list=[
                                                                       provider_opt.reqnum],
                                                                   bool_list=[
                                                                       provider_opt.reqbool]
                                                                   )

        edge.optional_attribute_resource.OptionalAttributeResource(self, "optOpt",
                                                                   bool=provider_opt.optbool,
                                                                   str=provider_opt.optstr,
                                                                   num=provider_opt.optnum
                                                                   )

        edge.optional_attribute_resource.OptionalAttributeResource(self, "computedOpt",
                                                                   bool=provider_opt.computedbool,
                                                                   str=provider_opt.computedstr,
                                                                   num=provider_opt.computednum
                                                                   )

        edge.required_attribute_resource.RequiredAttributeResource(self, "reqFull",
                                                                   bool=provider_full.reqbool,
                                                                   num=provider_full.reqnum,
                                                                   str=provider_full.reqstr,
                                                                   str_list=[
                                                                       provider_full.reqstr],
                                                                   num_list=[
                                                                       provider_full.reqnum],
                                                                   bool_list=[
                                                                       provider_full.reqbool]
                                                                   )

        edge.optional_attribute_resource.OptionalAttributeResource(self, "optFull",
                                                                   bool=provider_full.optbool,
                                                                   str=provider_full.optstr,
                                                                   num=provider_full.optnum
                                                                   )

        edge.optional_attribute_resource.OptionalAttributeResource(self, "computedFull",
                                                                   bool=provider_full.computedbool,
                                                                   str=provider_full.computedstr,
                                                                   num=provider_full.computednum
                                                                   )


class IteratorStack(TerraformStack):
    def __init__(self, scope, id):
        super().__init__(scope, id)
        edge.provider.EdgeProvider(self, "edge",
                                   reqstr="reqstr",
                                   reqnum=123,
                                   reqbool=True
                                   )

        simple_list = edge.optional_attribute_resource.OptionalAttributeResource(self, "target",
                                                                                 str_list=[
                                                                                     "a", "b", "c"]
                                                                                 )

        complex_list = edge.list_block_resource.ListBlockResource(self, "list",
                                                                  req=[{"reqbool": True, "reqnum": 1, "reqstr": "reqstr"}, {"reqbool": False, "reqnum": 0, "reqstr": "reqstr2"}
                                                                       ],
                                                                  singlereq={
                                                                      "reqbool": False, "reqnum": 1, "reqstr": "reqstr"}
                                                                  )
        map = edge.map_resource.MapResource(self, "map",
                                            opt_map={"key1": "value1",
                                                     "key2": "value2"},
                                            req_map={"key1": True}
                                            )

        string_list_iterator = TerraformIterator.from_list(
            simple_list.str_list)
        complex_list_iterator = TerraformIterator.from_list(complex_list.req)
        string_map_iterator = TerraformIterator.from_map(map.opt_map)

        # iterating over a list of strings
        edge.optional_attribute_resource.OptionalAttributeResource(self, "string_list_target",
                                                                   for_each=string_list_iterator,
                                                                   str=Token().as_string(string_list_iterator.value)
                                                                   )

        # iterating over a list of complex objects
        edge.optional_attribute_resource.OptionalAttributeResource(self, "complex_list_target",
                                                                   for_each=complex_list_iterator,
                                                                   str=complex_list_iterator.get_string(
                                                                       "reqstr"),
                                                                   num=complex_list_iterator.get_number(
                                                                       "reqnum")
                                                                   )

        # iterating over entries of a map of strings
        edge.optional_attribute_resource.OptionalAttributeResource(self, "string_map_target",
                                                                   for_each=string_map_iterator,
                                                                   str=Token().as_string(string_map_iterator.value)
                                                                   )

        # passing an iterator to a block property
        edge.list_block_resource.ListBlockResource(self, "list_attribute",
                                                   req=complex_list_iterator.dynamic({
                                                       "reqbool": complex_list_iterator.get_boolean("reqbool"),
                                                       "reqstr": complex_list_iterator.get_string("reqstr"),
                                                       "reqnum": complex_list_iterator.get_number("reqnum")
                                                   }),
                                                   singlereq={
                                                       "reqbool": True,
                                                       "reqnum": 0,
                                                       "reqstr": "a"
                                                   }
                                                   )


app = App()
ReferenceStack(app, "reference")
ProviderStack(app, "provider")
IteratorStack(app, "iterator")
app.synth()
