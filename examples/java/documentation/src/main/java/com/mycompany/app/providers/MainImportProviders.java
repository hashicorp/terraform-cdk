package com.mycompany.app.providers;

// DOCS_BLOCK_START:providers-import-providers
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;

public class MainImportProviders extends TerraformStack {

    public MainImportProviders(Construct scope, String id){
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );

        new Instance(this, "hello", InstanceConfig.builder()
                .ami("ami-2757f631")
                .instanceType("t2.micro")
                .build()
        );
    }

    public static void main(String[] args) {
        final App app = new App();
        new MainImportProviders(app, "hello-terraform");
        app.synth();
    }
}
// DOCS_BLOCK_END:providers-import-providers