package com.mycompany.app;

import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
import com.hashicorp.cdktf.Token;
import imports.eks.Eks;
import imports.eks.EksConfig;
import imports.vpc.VpcConfig;
import software.constructs.Construct;
import imports.vpc.Vpc;

import java.util.Arrays;

public class MainToken extends TerraformStack {

    public MainToken(Construct scope, String id){
        super(scope, id);
        // DOCS_BLOCK_START:tokens
        TerraformVariable logRetention = new TerraformVariable(this, "logRetentionInDays", TerraformVariableConfig.builder()
                .type("number")
                .build()
        );

        Vpc vpc = new Vpc(this, "vpcName", VpcConfig.builder()
                .name("vpcName")
                .publicSubnets(Arrays.asList("10.0.1.0/24", "10.0.2.0/24"))
                .build()
        );

        new Eks(this, "EksModules", EksConfig.builder()
                .vpcId(vpc.getVpcIdOutput())
                .clusterName("my-kubernetes-cluster")
                .subnets(Token.asList(vpc.getPublicSubnetsOutput()))
                .clusterCreateTimeout(logRetention.getNumberValue())
                .build()
        );
        // DOCS_BLOCK_END:tokens
    }
}
