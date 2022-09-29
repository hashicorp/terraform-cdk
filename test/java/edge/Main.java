package com.mycompany.app;

import java.util.*;
import software.constructs.Construct;

import com.hashicorp.cdktf.*;
import imports.edgeprovider.provider.*;
import imports.edgeprovider.optional_attribute_resource.*;
import imports.edgeprovider.list_block_resource.*;
import imports.edgeprovider.set_block_resource.*;
import imports.edgeprovider.map_resource.*;
import imports.edgeprovider.required_attribute_resource.*;

// Using references to resource attributes as resource arguments
class ReferenceStack extends TerraformStack {
    public ReferenceStack(Construct scope, String id) {
        super(scope, id);

        EdgeProvider.Builder.create(this, "edge")
                .reqstr("reqstr")
                .reqnum(123)
                .reqbool(true)
                .build();

        List<ListBlockResourceReq> arrlist = new ArrayList<ListBlockResourceReq>();
        arrlist.add(ListBlockResourceReq.builder().reqbool(true).reqnum(1).reqstr("reqstr").build());
        arrlist.add(ListBlockResourceReq.builder().reqbool(false).reqnum(0).reqstr("reqstr2").build());

        List<SetBlockResourceSet> setlist = new ArrayList<SetBlockResourceSet>();
        setlist.add(SetBlockResourceSet.builder().reqbool(true).reqnum(1).reqstr("reqstr").build());
        setlist.add(SetBlockResourceSet.builder().reqbool(false).reqnum(0).reqstr("reqstr2").build());

        OptionalAttributeResource res = OptionalAttributeResource.Builder.create(this, "test").build();
        ListBlockResource list = ListBlockResource.Builder.create(this, "list").req(arrlist)
                .singlereq(ListBlockResourceSinglereq.builder().reqbool(false).reqnum(1).reqstr("reqstr").build())
                .build();
        MapResource map = MapResource.Builder.create(this, "map")
                .optMap(Collections.singletonMap("key1", "value1"))
                .reqMap(Collections.singletonMap("key1", true))
                .build();
        SetBlockResource set = SetBlockResource.Builder.create(this, "set_block")
                .set(setlist)
                .build();

        // plain values
        RequiredAttributeResource.Builder.create(this, "plain")
                .bool(Token.asAny(res.getBool()))
                .str(res.getStr())
                .num(res.getNum())
                .strList(res.getStrList())
                .numList(res.getNumList())
                .boolList(Token.asAny(res.getBoolList()))
                .build();

        // required values FROM required single item lists
        RequiredAttributeResource.Builder.create(this, "from_single_list")
                .bool(Token.asAny(list.getSinglereq().getReqbool()))
                .str(list.getSinglereq().getReqstr())
                .num(list.getSinglereq().getReqnum())
                .strList(Collections.singletonList(list.getSinglereq().getReqstr()))
                .numList(Collections.singletonList(list.getSinglereq().getReqnum()))
                .boolList(Collections.singletonList(list.getSinglereq().getReqbool()))
                .build();

        // required values FROM required multi item lists
        RequiredAttributeResource.Builder.create(this, "from_list")
                .bool(Token.asAny(Fn.lookup(Fn.element(list.getReq(), 0), "reqbool", false)))
                .str(list.getReq().get(0).getReqstr())
                .num(Token.asNumber(Fn.lookup(Fn.element(list.getReq(), 0), "reqnum", 0)))
                .strList(Collections.singletonList(list.getReq().get(0).getReqstr()))
                .numList(
                        Collections.singletonList(Token.asNumber(Fn.lookup(Fn.element(list.getReq(), 0), "reqnum", 0))))
                .boolList(Collections
                        .singletonList(Token.asAny(Fn.lookup(Fn.element(list.getReq(), 0), "reqbool", false))))
                .build();

        // passing a reference to a complete list
        // Not supported at this time.
        // Tricky to get working because of JSII interface limitations.
        // ListBlockResource.Builder.create(this, "list_reference")
        // .req(Token.asAny(list.getReq()))
        // .singlereq(list.getSinglereq())
        // .build();

        // passing a literal array with references for a list
        // This doesn't work since the types of 'req' and 'singlereq' are different.
        // It works in TS since the type definitions have the same properties.
        // ListBlockResource.Builder.create(this, "list_literal")
        // .req(Token.asAny(Collections.singletonList(list.getSinglereq())))
        // .singlereq(list.getSinglereq())
        // .build();

        // required values FROM map
        RequiredAttributeResource.Builder.create(this, "from_map")
                .bool(Token.asAny(Fn.lookup(map.getReqMap(), "key1", false)))
                .str(Token.asString(Fn.lookup(map.getOptMap(), "key1", "missing")))
                .num(Token.asNumber(Fn.lookup(map.getComputedMap(), "key1", 0)))
                .strList(Collections.singletonList(Token.asString(Fn.lookup(map.getOptMap(), "key1", "missing"))))
                .numList(Collections.singletonList(Token.asNumber(Fn.lookup(map.getComputedMap(), "key1", 0))))
                .boolList(Collections.singletonList(Token.asAny(Fn.lookup(map.getReqMap(), "key1", false))))
                .build();

        // passing a reference to a complete map
        MapResource.Builder.create(this, "map_reference")
                .optMap(map.getOptMap())
                .reqMap(map.getReqMap())
                .build();

        // passing a list ref into a set
        SetBlockResource.Builder.create(this, "set_from_list")
                .set(Token.asAny(list.getReq()))
                .build();

        // passing a set ref into a list
        ListBlockResource.Builder.create(this, "list_from_set")
                .req(Token.asAny(set.getSet()))
                .singlereq(ListBlockResourceSinglereq.builder().reqbool(true).reqnum(1).reqstr("reqstr").build())
                .build();

        // passing a list ref of a complex list type (no block) into an output
        TerraformOutput.Builder.create(this, "list_from_list_type_ref")
                .value(list.getComputedListOfObject())
                .staticId(true)
                .build();

        // passing an element of a list ref of a complex list type (no block) into a
        // resource
        OptionalAttributeResource.Builder.create(this, "list_item_from_list_type_ref")
                .str(list.getComputedListOfObject().get(5).getStr())
                .build();
    }
}

// CDKTF supports referencing inputs from providers (Terraform does not)
class ProviderStack extends TerraformStack {
    public ProviderStack(Construct scope, String id) {
        super(scope, id);
        EdgeProvider providerOpt = EdgeProvider.Builder.create(this, "edge")
                .reqstr("reqstr")
                .reqnum(123)
                .reqbool(true)
                .build();

        EdgeProvider providerFull = EdgeProvider.Builder.create(this, "edge_full")
                .reqstr("reqstr")
                .reqnum(123)
                .reqbool(true)
                .optstr("optstr")
                .optnum(456)
                .optbool(false)
                .computedstr("computedstr")
                .computednum(789)
                .computedbool(true)
                .alias("full")
                .build();

        RequiredAttributeResource.Builder.create(this, "reqOpt")
                .bool(Token.asAny(providerOpt.getReqbool()))
                .num(Token.asNumber(providerOpt.getReqnum()))
                .str(Token.asString(providerOpt.getReqstr()))
                .strList(Collections.singletonList(providerOpt.getReqstr()))
                .numList(Collections.singletonList(providerOpt.getReqnum()))
                .boolList(Collections.singletonList(providerOpt.getReqbool()))
                .build();

        OptionalAttributeResource.Builder.create(this, "optOpt")
                .bool(Token.asAny(providerOpt.getOptbool()))
                .str(Token.asString(providerOpt.getOptstr()))
                .num(Token.asNumber(providerOpt.getOptnum()))
                .build();

        OptionalAttributeResource.Builder.create(this, "computedOpt")
                .bool(Token.asAny(providerOpt.getComputedbool()))
                .str(Token.asString(providerOpt.getComputedstr()))
                .num(Token.asNumber(providerOpt.getComputednum()))
                .build();

        RequiredAttributeResource.Builder.create(this, "reqFull")
                .bool(Token.asAny(providerFull.getReqbool()))
                .num(Token.asNumber(providerFull.getReqnum()))
                .str(Token.asString(providerFull.getReqstr()))
                .strList(Collections.singletonList(providerFull.getReqstr()))
                .numList(Collections.singletonList(providerFull.getReqnum()))
                .boolList(Collections.singletonList(providerFull.getReqbool()))
                .build();

        OptionalAttributeResource.Builder.create(this, "optFull")
                .bool(Token.asAny(providerFull.getOptbool()))
                .str(Token.asString(providerFull.getOptstr()))
                .num(Token.asNumber(providerFull.getOptnum()))
                .build();

        OptionalAttributeResource.Builder.create(this, "computedFull")
                .bool(Token.asAny(providerFull.getComputedbool()))
                .str(Token.asString(providerFull.getComputedstr()))
                .num(Token.asNumber(providerFull.getComputednum()))
                .build();
    }
}

class IteratorStack extends TerraformStack {
    public IteratorStack(Construct scope, String id) {
        super(scope, id);
        EdgeProvider.Builder.create(this, "edge")
                .reqstr("reqstr")
                .reqnum(123)
                .reqbool(true)
                .build();

        List<String> stringList = new ArrayList<String>();
        stringList.add("a");
        stringList.add("b");
        stringList.add("c");

        OptionalAttributeResource simpleList = OptionalAttributeResource.Builder.create(this, "target")
                .strList(stringList)
                .build();

        List<ListBlockResourceReq> arrlist = new ArrayList<ListBlockResourceReq>();
        arrlist.add(ListBlockResourceReq.builder().reqbool(true).reqnum(1).reqstr("reqstr").build());
        arrlist.add(ListBlockResourceReq.builder().reqbool(false).reqnum(0).reqstr("reqstr2").build());

        ListBlockResource complexList = ListBlockResource.Builder.create(this, "list")
                .req(arrlist)
                .singlereq(ListBlockResourceSinglereq.builder().reqbool(false).reqnum(1).reqstr("reqstr").build())
                .build();

        Map<String, String> stringMap = new HashMap<String, String>();
        stringMap.put("key1", "value1");
        stringMap.put("key2", "value2");
        Map<String, Boolean> boolMap = new HashMap<String, Boolean>();
        boolMap.put("key1", true);

        MapResource map = MapResource.Builder.create(this, "map")
                .optMap(stringMap)
                .reqMap(boolMap)
                .build();

        ListTerraformIterator stringListIterator = TerraformIterator
                .fromList(simpleList.getStrList());
        ListTerraformIterator complexListIterator = TerraformIterator
                .fromList(complexList.getReq());
        MapTerraformIterator stringMapIterator = TerraformIterator.fromMap(map.getOptMap());

        // iterating over a list of strings
        OptionalAttributeResource.Builder.create(this, "string_list_target")
                .forEach(stringListIterator)
                .str(Token.asString(stringListIterator.getValue()))
                .build();

        // iterating over a list of complex objects
        OptionalAttributeResource.Builder.create(this, "complex_list_target")
                .forEach(complexListIterator)
                .str(complexListIterator.getString("reqstr"))
                .num(complexListIterator.getNumber("reqnum"))
                .build();

        // iterating over entries of a map of strings
        OptionalAttributeResource.Builder.create(this, "string_map_target")
                .forEach(stringMapIterator)
                .str(Token.asString(stringMapIterator.getValue()))
                .build();

        // passing an iterator to a block property
        HashMap<String, Object> content = new HashMap<String, Object>();
        content.put("reqbool", complexListIterator.getBoolean("reqbool"));
        content.put("reqstr", complexListIterator.getString("reqstr"));
        content.put("reqnum", complexListIterator.getNumber("reqnum"));
        ListBlockResource.Builder.create(this, "list_attribute")
                .req(complexListIterator.dynamic(content))
                .singlereq(ListBlockResourceSinglereq.builder().reqbool(true).reqnum(0).reqstr("a").build())
                .build();
    }
}

public class Main extends TerraformStack {
    public Main(Construct scope, String id) {
        super(scope, id);
    }

    public static void main(String[] args) {
        final App app = Testing.stubVersion(App.Builder.create().stackTraces(false).build());
        new ReferenceStack(app, "reference");
        new ProviderStack(app, "provider");
        new IteratorStack(app, "iterator");
        app.synth();
    }
}