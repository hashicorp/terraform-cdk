/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.stacks;

// DOCS_BLOCK_START:cross-stack-reference
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import com.mycompany.app.myconstructs.DockerBackend;
import com.mycompany.app.myconstructs.DockerBackendConfig;
import com.mycompany.app.myconstructs.Vpc;

public class MainCrossStackReferences extends TerraformStack {

    public MainCrossStackReferences(Construct scope, String id){
        super(scope, id);
    }

    public static class VPCStack extends TerraformStack{
        public Vpc vpc;
        public String region = "us-east-1";
        public VPCStack(Construct scope, String id){
            super(scope, id);

            new AwsProvider(this, "aws", AwsProviderConfig.builder()
                    .region(this.region)
                    .build()
            );

            this.vpc = new Vpc(this, "vpc");
        }
    }

    public static class BackendStackConfig{

        public String region;
        public String vpcId;
        public String dockerImage;

        public BackendStackConfig setRegion(String region){
            this.region = region;
            return this;
        }

        public BackendStackConfig setVpcId(String vpcId){
            this.vpcId = vpcId;
            return this;
        }

        public BackendStackConfig setDockerImage(String dockerImage){
            this.dockerImage = dockerImage;
            return this;
        }
    }

    public static class BackendStack extends TerraformStack{

        public BackendStack(Construct scope, String id, BackendStackConfig config){
            super(scope, id);

            new AwsProvider(this, "aws", AwsProviderConfig.builder()
                    .region(config.region)
                    .build()
            );

            new DockerBackend(this, "docker-backend", DockerBackendConfig.builder()
                    .vpcId(config.vpcId)
                    .dockerImage(config.dockerImage)
                    .build()
            );
        }
    }
    // DOCS_BLOCK_END:cross-stack-reference
    /**
    // DOCS_BLOCK_START:cross-stack-reference
    public static void main(String[] args) {
        final App app = new App();
        VPCStack origin = new VPCStack(app, "origin-stack");
        new BackendStack(app, "target-stack", new BackendStackConfig()
                .setRegion(origin.region)
                .setVpcId(origin.vpc.getId())
                .setDockerImage("org/my-image:latest")
        );
        app.synth();
    }
    // DOCS_BLOCK_END:cross-stack-reference
     */
    // DOCS_BLOCK_START:cross-stack-reference
}
// DOCS_BLOCK_END:cross-stack-reference
