package com.mycompany.app;

import com.hashicorp.cdktf.*;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import software.constructs.Construct;
// DOCS_BLOCK_START:iterators-iterators-complex-types
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;

// DOCS_BLOCK_END:iterators-iterators-complex-types

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainIterator extends TerraformStack {

    public MainIterator(Construct scope, String id) {
        super(scope, id);

        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
            .region("us-east-1")
            .build()
        );
        
        // DOCS_BLOCK_START:iterators-iterators-complex-types
        TerraformLocal myList = new TerraformLocal(this, "my-list", Arrays.asList(
                new HashMap() {
                    {
                        put("name", "website-static-files");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "website");
                            }
                        });
                    }
                },
                new HashMap() {
                    {
                        put("name", "images");
                        put("tags", new HashMap<String, String>() {
                            {
                                put("app", "image-converter");
                            }
                        });
                    }
                }));

        TerraformIterator iterator = TerraformIterator.fromList(myList.getAsList());

        S3Bucket s3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(iterator)
                .bucket(iterator.getString("name"))
                .tags(iterator.getStringMap("tags"))
                .build());
        // DOCS_BLOCK_END:iterators-iterators-complex-types
    }
}
