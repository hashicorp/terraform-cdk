package com.mycompany.app.variablesAndOutputs;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import com.hashicorp.cdktf.TerraformLocal;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;
import software.constructs.Construct;

import java.util.HashMap;
import java.util.Map;

public class VariablesAndOutputs extends TerraformStack {

    public VariablesAndOutputs(Construct scope, String id){
        super(scope, id);

        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
            .region("us-east-1")
            .build()
        );

        // DOCS_BLOCK_START:var-out-define-local
        TerraformLocal commonTags = new TerraformLocal(this, "common_tags", new HashMap<String, String>(){{
            put("service", "service_name");
            put("owner", "owner");
        }});

        new Instance(this, "example", InstanceConfig.builder()
                .tags((Map<String, String>) commonTags.getExpression())
                .build()
        );
        // DOCS_BLOCK_END:var-out-define-local

        // DOCS_BLOCK_START:var-out-input-variables
        TerraformVariable imageId = new TerraformVariable(this, "imageId", TerraformVariableConfig.builder()
                .type("string")
                .defaultValue("ami-abcde123")
                .description("What AMI to use to create an instance")
                .build()
        );

        new Instance(this, "hello", InstanceConfig.builder()
                .ami(imageId.getStringValue())
                .instanceType("t2.micro")
                .build()
        );
        // DOCS_BLOCK_END:var-out-input-variables
    }
}
