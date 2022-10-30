package com.mycompany.app;

import com.hashicorp.cdktf.*;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import software.constructs.Construct;

public class MainIterator2 extends TerraformStack {
    public MainIterator2(Construct scope, String id) {
        super(scope, id);

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
