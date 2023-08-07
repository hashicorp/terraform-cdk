/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.constructs;

import software.constructs.Construct;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import imports.aws.s3_bucket.S3BucketWebsite;

// DOCS_BLOCK_START:constructs-scope
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.App;
public class MainConstructScope extends TerraformStack {

    public MainConstructScope(Construct scope, String name){
        super(scope, name);

        new MainConstructScope.PublicS3Bucket(this, "first-bucket");
        new MainConstructScope.PublicS3Bucket(this, "second-bucket");

    }

    static class PublicS3Bucket extends Construct{

        public S3Bucket bucket;

        public PublicS3Bucket(Construct scope, String name){
            super(scope, name);

            new AwsProvider(this, "aws", AwsProviderConfig.builder()
                    .region("us-east-1")
                    .build()
            );

            this.bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                    .bucketPrefix(name)
                    .website(S3BucketWebsite.builder()
                            .indexDocument("index.html")
                            .errorDocument("5xx.html")
                            .build()
                    )
                    .build()
            );
        }
    }
}
// DOCS_BLOCK_END:constructs-scope
