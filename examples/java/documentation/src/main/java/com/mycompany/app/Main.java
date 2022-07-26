package com.mycompany.app;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformStack;

import imports.aws.AwsProvider;
import com.hashicorp.cdktf.providers.aws.s3.*;
import software.constructs.Construct;

import imports.kubernetes.*;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) {
        super(scope, id);

        AwsProvider.Builder.create(this, "aws").region("eu-central-1").build();

        // concepts/assets.mdx
        S3Bucket bucket = S3Bucket.Builder.create(this, "bucket")
                .bucket("demo")
                .build();

        TerraformAsset asset = TerraformAsset.Builder.create(this, "lambda-asset")
                .path(resolve(__dirname, "../lambda"))
                .type(AssetType.ARCHIVE)
                .build();

        S3BucketObject.Builder.create(this, "lambda-archive")
                .bucket(bucket.getBucket())
                .key(asset.getFileName())
                .source(asset.getPath())
                .build();

        // concepts/constructs.mdx
        KubernetesProvider.Builder.create(this, "kind")
                .configPath(Paths.get(System.getProperty("user.dir"), "kubeconfig.yaml").toString())
                .build();

        new KubernetesWebAppDeployment(this, "deployment", Map.of(
                "image", "nginx:latest",
                "replicas", 2,
                "app", "myapp",
                "component", "frontend",
                "environment", "dev"));
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "java-documentation");
        app.synth();
    }
}