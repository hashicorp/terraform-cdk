package com.mycompany.app.modules;

import java.util.Arrays;

// DOCS_BLOCK_START:modules-install-modules
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.App;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.vpc.Vpc;
import imports.vpc.VpcConfig;

public class MainInstallModules extends TerraformStack {

    public MainInstallModules(Construct scope, String id){
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );

        new Vpc(this, "myVpc", VpcConfig.builder()
                .name("my-vpc")
                .cidr("10.0.0.0/16")
                .azs(Arrays.asList("us-west-2a", "us-west-2b", "us-west-2c"))
                .privateSubnets(Arrays.asList("10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"))
                .publicSubnets(Arrays.asList("10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"))
                .enableNatGateway(true)
                .build()
        );
    }

    // DOCS_BLOCK_END:modules-install-modules
    /**
    // DOCS_BLOCK_START:modules-install-modules
    public static void main(String[] args) {
        final App app = new App();
        new MainInstallModules(app, "hello-terraform");
        app.synth();
    }
    // DOCS_BLOCK_END:modules-install-modules
     */
    // DOCS_BLOCK_START:modules-install-modules
}
// DOCS_BLOCK_END:modules-install-modules