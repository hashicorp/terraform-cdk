/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.stacks;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.Fn;
import com.hashicorp.cdktf.TerraformLocal;
import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class MainStacks extends TerraformStack {

    public TerraformLocal allResources;

    public MainStacks(Construct scope, String id){
        super(scope, id);

        MainStacks.Temp resourceFromStackA = new Temp();
        MainStacks.Temp resourceFromStackB = new Temp();

        // DOCS_BLOCK_START:stack-dependencies
        this.allResources = new TerraformLocal(this, "merge_items", Fn.mergeLists(Arrays.asList(resourceFromStackA.items, resourceFromStackB.items)));
        // DOCS_BLOCK_END:stack-dependencies

        TerraformStack stack = new TerraformStack(new App(), "temp");
        // DOCS_BLOCK_START:stack-escape-hatches
        stack.addOverride("terraform.backend", new HashMap<String, HashMap<String, Object>>(){{
            put("remote", new HashMap<String, Object>(){{
                put("organization", "test");
                put("workspaces", new HashMap<String, String>(){{
                    put("name", "test");
                }});
            }});
        }});
        // DOCS_BLOCK_END:stack-escape-hatches
    }

    public static class Temp{
        public List<? extends Object>  items = Arrays.asList("1", "2", "3");
    }
}
