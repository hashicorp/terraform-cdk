package com.mycompany.app.resources;

import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.data_aws_region.DataAwsRegion;

// DOCS_BLOCK_START:resources-define
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.dynamodb_table.DynamodbTable;
import imports.aws.dynamodb_table.DynamodbTableAttribute;
import imports.aws.dynamodb_table.DynamodbTableConfig;


import java.util.Arrays;

public class MainResourcesDefine extends TerraformStack {

    public MainResourcesDefine(Construct scope, String id){
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );

        DataAwsRegion region = new DataAwsRegion(this, "region");

        new DynamodbTable(this, "hello", DynamodbTableConfig.builder()
                .name("my-first-table-"+region.getName())
                .hashKey("temp")
                .attribute(Arrays.asList(
                        DynamodbTableAttribute.builder()
                                .name("id")
                                .type("S")
                                .build()
                        )
                )
                .billingMode("PAY_PER_REQUEST")
                .build()
        );
    }
}
// DOCS_BLOCK_END:resources-define