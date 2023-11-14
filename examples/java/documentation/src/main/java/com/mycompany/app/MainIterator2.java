/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

import com.hashicorp.cdktf.*;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import imports.aws.s3_bucket_object.S3BucketObject;
import imports.aws.s3_bucket_object.S3BucketObjectConfig;
import software.constructs.Construct;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.nio.file.Paths;

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

        // DOCS_BLOCK_START:iterators-chain
        TerraformLocal myComplexLocal = new TerraformLocal(this, "my-map", new HashMap() {
            {
                put("website", new HashMap() {
                    {
                        put("name", "website-static-files");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "website");
                            }
                        });
                    }
                });
                put("images", new HashMap() {
                    {
                        put("name", "images");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "image-converter");
                            }
                        });
                    }
                });
            }
        });

        TerraformIterator s3BucketConfigurationIterator = TerraformIterator.fromMap(myComplexLocal.getAsAnyMap());
        S3Bucket s3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(s3BucketConfigurationIterator)
                .bucket(s3BucketConfigurationIterator.getString("name"))
                .tags(s3BucketConfigurationIterator.getStringMap("tags"))
                .build());
        
        TerraformAsset asset = new TerraformAsset(this, "help", TerraformAssetConfig.builder()
                .path(Paths.get(System.getProperty("user.dir"), "help").toString())
                .build()
        );

        // This would be TerraformIterator.fromDataSources for data_sources
        TerraformIterator s3BucketIterator = TerraformIterator.fromResources(s3Bucket);
        new S3BucketObject(this, "object", S3BucketObjectConfig.builder()
                .forEach(s3BucketIterator)
                .bucket(s3BucketIterator.getString("id"))
                .key("help")
                .source(asset.getPath())
                .build()
        );
    // DOCS_BLOCK_END:iterators-chain
    }
}
