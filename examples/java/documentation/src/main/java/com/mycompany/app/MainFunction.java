package com.mycompany.app;

import com.hashicorp.cdktf.TerraformStack;

import software.constructs.Construct;

// DOCS_BLOCK_START:functions-usage-example
import com.hashicorp.cdktf.Fn;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import imports.aws.data_aws_availability_zones.DataAwsAvailabilityZones;
import imports.aws.data_aws_availability_zones.DataAwsAvailabilityZonesConfig;
// DOCS_BLOCK_END:functions-usage-example

public class MainFunction extends TerraformStack {

    public MainFunction(Construct scope, String id) {
        super(scope, id);

        // DOCS_BLOCK_START:functions-usage-example

        DataAwsAvailabilityZones zones = new DataAwsAvailabilityZones(this, "zones",
                DataAwsAvailabilityZonesConfig.builder()
                        .state("available")
                        .build());

        new TerraformOutput(this, "first-zone", TerraformOutputConfig.builder()
                .value(Fn.element(zones.getNames(), 0))
                .build());
        // DOCS_BLOCK_END:functions-usage-example

    }
}
