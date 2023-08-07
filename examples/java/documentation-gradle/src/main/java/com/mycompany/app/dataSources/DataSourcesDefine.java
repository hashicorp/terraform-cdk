/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.dataSources;

import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;

// DOCS_BLOCK_START:data-sources-define-data-sources
import imports.aws.data_aws_region.DataAwsRegion;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

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