package com.mycompany.app.stacks;

// DOCS_BLOCK_START:single-stack
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;

public class MainSingleStack extends TerraformStack {

    public MainSingleStack(Construct scope, String id) {
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build());

        new Instance(this, "Hello", InstanceConfig.builder()
                .ami("ami-2757f631")
                .instanceType("t2.micro")
                .build());
    }
    // DOCS_BLOCK_END:single-stack
    /**
    // DOCS_BLOCK_START:single-stack

    public static void main(String[] args) {
        final App app = new App();
        new MainSingleStack(app, "a-single-stack");
        app.synth();
    }
    // DOCS_BLOCK_END:single-stack
     */
    // DOCS_BLOCK_START:single-stack
}
// DOCS_BLOCK_END:single-stack
