package com.mycompany.app.modules;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformHclModule;
import com.hashicorp.cdktf.TerraformHclModuleConfig;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import software.constructs.Construct;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class MainCreateModules extends TerraformStack {

    public MainCreateModules(Construct scope, String id){
        super(scope, id);

        TerraformStack stack = new TerraformStack(new App(), "temp");
        // DOCS_BLOCK_START:modules-create-modules
        AwsProvider provider = new AwsProvider(stack, "provider", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );

        TerraformHclModule module = new TerraformHclModule(stack, "Vpc", TerraformHclModuleConfig.builder()
                .source("terraform-aws-modules/vpc/aws")
                .variables(new HashMap<String, Object>(){{
                    put("name", "my-vpc");
                    put("cidr", "10.0.0.0/16");
                    put("azs", Arrays.asList("us-west-2a", "us-west-2b", "us-west-2c"));
                    put("privateSubnets", Arrays.asList("10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"));
                    put("publicSubnets", Arrays.asList("10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"));
                    put("enableNatGateway", true);
                }})
                .providers(Arrays.asList(provider))
                .build()
        );
        // DOCS_BLOCK_END:modules-create-modules
    }

}
