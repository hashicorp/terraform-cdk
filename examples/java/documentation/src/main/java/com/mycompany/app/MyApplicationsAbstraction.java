package com.mycompany.app;

import java.util.ArrayList;
import java.util.List;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

import imports.docker.provider.DockerProvider;
import imports.docker.image.Image;
import imports.docker.image.ImageConfig;
import imports.docker.container.Container;
import imports.docker.container.ContainerConfig;
import imports.docker.data_docker_image.DataDockerImage;
import imports.docker.data_docker_image.DataDockerImageConfig;

// Dummy class used to test against for unit test examples
public class MyApplicationsAbstraction extends TerraformStack {

    public MyApplicationsAbstraction(final Construct scope, final String id) {
        super(scope, id);

        new DockerProvider(this, "provider");

        DataDockerImage dataImage = new DataDockerImage(this, "id",  DataDockerImageConfig.builder()
                .name("ubuntu:latest")
                .build()
        );

        Image image = new Image(this, "ubuntu:latest", ImageConfig.builder()
                .name(dataImage.getName())
                .keepLocally(false)
                .build()
        );

        List<String> opt = new ArrayList<>();
        opt.add("1");
        opt.add("2");
        opt.add("3");
        new Container(this, "ubuntu-cdktf", ContainerConfig.builder()
                .name("ubuntu:latest")
                .image(image.getName())
                .dnsOpts(opt)
                .build()
        );


    }

    public static void main(String[] args) {
        final App app = new App();
        new MyApplicationsAbstraction(app, "java-simple");
        app.synth();
    }
}