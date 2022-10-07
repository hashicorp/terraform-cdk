package com.mycompany.app.stacks;

import java.util.HashMap;
import java.util.Objects;

// DOCS_BLOCK_END:multiple-stacks
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

public class MainMultipleStacks extends TerraformStack {

    public MainMultipleStacks(Construct scope, String id, MultipleStacksConfig config){
        super(scope, id);

        String region = config.region != null ? config.region : "us-east-1";

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region(region)
                .build()
        );

        new Instance(this, "Hello", InstanceConfig.builder()
                .ami("ami-2757f631")
                .instanceType("t2.micro")
                .tags(new HashMap<String, String>(){{
                    put("environment", config.myEnvironment);
                }})
                .build()
        );
    }

    public static class MultipleStacksConfig{

        public String myEnvironment;
        public String region;

        public MultipleStacksConfig setEnvironment(String environment){
            Objects.requireNonNull(environment, "environment must be non-null");
            this.myEnvironment = environment;
            return this;
        }

        public MultipleStacksConfig setRegion(String region){
            this.region = region;
            return this;
        }
    }

    public static void main(String[] args) {
        final App app = new App();
        new MainMultipleStacks(app, "multiple-stacks-dev", new MainMultipleStacks.MultipleStacksConfig().setEnvironment("dev"));
        new MainMultipleStacks(app, "multiple-stacks-staging", new MainMultipleStacks.MultipleStacksConfig().setEnvironment("staging"));
        new MainMultipleStacks(app, "multiple-stacks-production-us", new MainMultipleStacks.MultipleStacksConfig().setEnvironment("staging").setRegion("eu-central-1"));

        app.synth();
    }
}
// DOCS_BLOCK_END:multiple-stacks
