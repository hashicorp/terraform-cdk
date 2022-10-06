package com.mycompany.app.dataSources;

import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;

// DOCS_BLOCK_START:data-sources-define-data-sources
import imports.aws.datasources.DataAwsRegion;
import imports.aws.datasources.DataAwsRegionConfig;
import imports.aws.AwsProvider;
import imports.aws.AwsProviderConfig;

public class DataSourcesDefine extends TerraformStack {

    public DataSourcesDefine(Construct scope, String id){
        super(scope, id);

        new AwsProvider(this, "temp", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );
        //......
        DataAwsRegion region = new DataAwsRegion(this, "region");
    }
}
// DOCS_BLOCK_END:data-sources-define-data-sources