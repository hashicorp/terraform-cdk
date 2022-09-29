// DOCS_BLOCK_START:assets,constructs
package com.mycompany.app;

import java.nio.file.Paths;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;
// DOCS_BLOCK_END:assets,constructs

// DOCS_BLOCK_START:assets
import com.hashicorp.cdktf.TerraformAsset;
import com.hashicorp.cdktf.AssetType;
import imports.aws.provider.AwsProvider;
import imports.aws.s3_bucket.*;
import imports.aws.s3_bucket_object.*;
// DOCS_BLOCK_END:assets

// DOCS_BLOCK_START:constructs
import java.util.*;
import imports.kubernetes.provider.*;
// DOCS_BLOCK_END:constructs

// DOCS_BLOCK_START:assets,constructs

public class Main extends TerraformStack {
    public Main(final Construct scope, final String name) {
        super(scope, name);
        
        // DOCS_BLOCK_END:assets,constructs
        // DOCS_BLOCK_START:assets
        AwsProvider.Builder.create(this, "aws").region("eu-central-1").build();

        S3Bucket bucket = S3Bucket.Builder.create(this, "bucket")
                .bucket("demo")
                .build();

        TerraformAsset asset = TerraformAsset.Builder.create(this, "lambda-asset")
                .path(Paths.get(System.getProperty("user.dir"), "lambda").toString())
                .type(AssetType.ARCHIVE)
                .build();

        S3BucketObject.Builder.create(this, "lambda-archive")
                .bucket(bucket.getBucket())
                .key(asset.getFileName())
                .source(asset.getPath())
                .build();
        // DOCS_BLOCK_END:assets
        // DOCS_BLOCK_START:constructs
        KubernetesProvider.Builder.create(this, "kind")
                .configPath(Paths.get(System.getProperty("user.dir"), "kubeconfig.yaml").toString())
                .build();

        final HashMap<String, String> properties = new HashMap<>();
        properties.put("image", "lambci/lambda:latest");
        properties.put("replicas", "2");
        properties.put("app", "myapp");
        properties.put("component", "frontend");
        properties.put("environment", "dev");

        new KubernetesWebAppDeployment(this, "deployment", properties);
        // DOCS_BLOCK_END:constructs
        // DOCS_BLOCK_START:assets,constructs
    }
    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "demo");
        app.synth();
    }
}
// DOCS_BLOCK_END:assets,constructs