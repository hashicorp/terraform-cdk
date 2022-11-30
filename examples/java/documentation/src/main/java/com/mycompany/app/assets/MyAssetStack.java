package com.mycompany.app.assets;

// DOCS_BLOCK_START:assets
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformAsset;
import com.hashicorp.cdktf.TerraformAssetConfig;
import com.hashicorp.cdktf.AssetType;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.aws.s3_bucket.S3Bucket;
import imports.aws.s3_bucket.S3BucketConfig;
import imports.aws.s3_bucket_object.S3BucketObject;
import imports.aws.s3_bucket_object.S3BucketObjectConfig;

import java.nio.file.Paths;

public class MyAssetStack extends TerraformStack {
    public MyAssetStack(Construct scope, String name){
        super(scope, name);

        new AwsProvider(this,"aws", AwsProviderConfig.builder()
                .region("eu-central-1")
                .build()
        );

        S3Bucket bucket = new S3Bucket(this, "bucket", S3BucketConfig.builder()
                .bucket("demo")
                .build()
        );

        TerraformAsset asset = new TerraformAsset(this, "lambda-asset", TerraformAssetConfig.builder()
                .path(Paths.get(System.getProperty("user.dir"), "lambda").toString())
                .type(AssetType.ARCHIVE)
                .build()
        );

        new S3BucketObject(this, "lambda-archive", S3BucketObjectConfig.builder()
                .bucket(bucket.getBucket())
                .key(asset.getFileName())
                .source(asset.getPath())
                .build()
        );

    }

    // DOCS_BLOCK_END:assets

    /**
    // DOCS_BLOCK_START:assets
    public static void main(String[] args) {
        final App app = new App();
        new MyAssetStack(app, "demo");
        app.synth();
    }
    // DOCS_BLOCK_END:assets
     */
// DOCS_BLOCK_START:assets
}
// DOCS_BLOCK_END:assets
