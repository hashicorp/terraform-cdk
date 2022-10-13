package com.mycompany.app;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.Fn;
import com.hashicorp.cdktf.Token;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformStack;

import imports.ucloud.provider.UcloudProvider;
import imports.ucloud.data_ucloud_images.DataUcloudImages;;
import imports.ucloud.instance.Instance;
import software.constructs.Construct;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) {
        super(scope, id);

        UcloudProvider.Builder.create(this, "ucloud")
	    .region("cn-bj2")
	    .projectId(System.getenv().getOrDefault("UCLOUD_PROJECT_ID", ""))
	    .build();

	DataUcloudImages images = DataUcloudImages.Builder.create(this, "images")
	    .availabilityZone("cn-bj2-04")
	    .nameRegex("^CentOS 8.2 64")
	    .imageType("base")
	    .build();

	Instance.Builder.create(this, "web")
	    .availabilityZone("cn-bj2-04")
            .imageId(images.getImages().get(0).getId())
            .instanceType("n-basic-2")
            .rootPassword("wA1234567")
            .name("cdktf-example-instance")
            .tag("tf-example")
            .bootDiskType("cloud_ssd")
	    .build();
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "ucloud");
        app.synth();
    }
}
