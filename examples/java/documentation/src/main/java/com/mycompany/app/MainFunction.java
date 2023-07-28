/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

import com.hashicorp.cdktf.TerraformStack;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

import software.constructs.Construct;

import java.util.Arrays;

// DOCS_BLOCK_START:functions-usage-example
import com.hashicorp.cdktf.Fn;
import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import imports.aws.data_aws_availability_zones.DataAwsAvailabilityZones;
import imports.aws.data_aws_availability_zones.DataAwsAvailabilityZonesConfig;
// DOCS_BLOCK_END:functions-usage-example

public class MainFunction extends TerraformStack {

    public MainFunction(Construct scope, String id) {
        super(scope, id);

        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
            .region("us-east-1")
            .build()
        );

        // DOCS_BLOCK_START:functions-usage-example

        DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones",
                DataAwsAvailabilityZonesConfig.builder()
                        .state("available")
                        .build());

        new TerraformOutput(this, "first-zone", TerraformOutputConfig.builder()
                .value(Fn.element(zones.getNames(), 0))
                .build());
        // DOCS_BLOCK_END:functions-usage-example

        // DOCS_BLOCK_START:functions-lookup
        TerraformVariable v = new TerraformVariable(this, "complex_object", TerraformVariableConfig.builder()
                .type("object({users: list(object({name: string}))})")
                .build());
        new TerraformOutput(this, "users", TerraformOutputConfig.builder()
                .value(Fn.lookup(v.getValue(), "users"))
                .build());
        new TerraformOutput(this, "first-user-name", TerraformOutputConfig.builder()
                .value(Fn.lookupNested(v.getValue(), Arrays.asList("users", "0", "name")))
                .build());
        // DOCS_BLOCK_END:functions-lookup

        // DOCS_BLOCK_START:functions-raw-string
        new TerraformOutput(this, "quotes", TerraformOutputConfig.builder()
                .value(Fn.rawString("\"b\""))
                .build());
        new TerraformOutput(this, "template", TerraformOutputConfig.builder()
                .value(Fn.rawString("${TEMPLATE}"))
                .build());
        // DOCS_BLOCK_END:functions-raw-string

    }
}
