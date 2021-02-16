package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.Testing;

import imports.aws.AwsProvider;
import imports.aws.SnsTopic;

public class Main extends TerraformStack
{
    public Main(final Construct scope, final String id) {
        super(scope, id);

        AwsProvider.Builder.create(this, "Aws").region("eu-central-1").build();
        SnsTopic topic = SnsTopic.Builder.create(this, "Topic").displayName("overwritten").build();
        topic.addOverride("display_name", "my-first-sns-topic");
    }

    public static void main(String[] args) {
        final App app = Testing.stubVersion(App.Builder.create().stackTraces(false).build());
        new Main(app, "java-simple");
        app.synth();
    }
}