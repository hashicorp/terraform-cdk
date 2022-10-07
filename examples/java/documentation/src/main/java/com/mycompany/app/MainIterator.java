package com.mycompany.app;

import com.hashicorp.cdktf.TerraformStack;

import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
import software.constructs.Construct;
// DOCS_BLOCK_START:iterators-iterators-complex-types
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import com.hashicorp.cdktf.TerraformIterator;

// DOCS_BLOCK_END:iterators-iterators-complex-types

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MainIterator extends TerraformStack {

    public MainIterator(Construct scope, String id){
        super(scope, id);

        // DOCS_BLOCK_START:iterators-iterators-complex-types
        TerraformIterator iterator = TerraformIterator.fromList(
                Arrays.asList(
                        new HashMap(){{
                            put("name", "website-static-files");
                            put("tags", new HashMap<String, String>(){{
                                put("app", "website");
                            }});
                        }},
                        new HashMap(){{
                            put("name", "images");
                            put("tags", new HashMap<String, String>(){{
                                put("app", "image-converter");
                            }});
                        }}
                )
        );

        S3Bucket s3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(iterator)
                .tags(iterator.getStringMap("tags"))
                .build()
        );
        // DOCS_BLOCK_END:iterators-iterators-complex-types

        // DOCS_BLOCK_START:iterators-define-iterators
        TerraformVariable list = new TerraformVariable(this, "list", TerraformVariableConfig.builder()
                .type("list(string)")
                .build()
        );

        TerraformIterator terraformIterator = TerraformIterator.fromList(list.getListValue());

        S3Bucket awsS3Bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .forEach(terraformIterator)
                .build()
        );
        // DOCS_BLOCK_START:iterators-define-iterators

    }
}
