/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

import com.hashicorp.cdktf.*;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import software.constructs.Construct;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

public class MainIterator2 extends TerraformStack {
    public MainIterator2(Construct scope, String id) {
        super(scope, id);

        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
            .region("us-east-1")
            .build()
        );
        // DOCS_BLOCK_START:iterators-define-iterators
        TerraformVariable list = new TerraformVariable(this, "list", TerraformVariableConfig.builder()
                .type("list(string)")
                .build());

        TerraformIterator terraformIterator = TerraformIterator.fromList(list.getListValue());

        S3Bucket awsS3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(terraformIterator)
                .bucket(Token.asString(terraformIterator.getString("")))
                .build());
        // DOCS_BLOCK_END:iterators-define-iterators
    }
}
