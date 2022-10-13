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


public class Main extends TerraformStack {

    public Main(final Construct scope, final String id) {
        super(scope, id);

        new DockerProvider(this, "provider");

        DataDockerImage dataImage = new DataDockerImage(this, "id",  DataDockerImageConfig.builder()
                .name("nginx:latest")
                .build()
        );

        Image image = new Image(this, "nginx-latest", ImageConfig.builder()
                .name(dataImage.getName())
                .keepLocally(false)
                .build()
        );

        List<String> opt = new ArrayList<>();
        opt.add("1");
        opt.add("2");
        opt.add("3");
        new Container(this, "nginx-cdktf", ContainerConfig.builder()
                .name("nginx:latest")
                .image(image.getName())
                .dnsOpts(opt)
                .build()
        );


    }

    public static class MainInvalid extends TerraformStack {

        public MainInvalid(final Construct scope, final String id) {
            super(scope, id);

            new DockerProvider(this, "provider");

            DataDockerImage dataImage = new DataDockerImage(this, "id",  DataDockerImageConfig.builder()
                    .id("id")
                    .name("nginx:latest")
                    .build()
            );

            Image image = new Image(this, "nginx-latest", ImageConfig.builder()
                    .name(dataImage.getName())
                    .keepLocally(false)
                    .build()
            );

            List<String> opt = new ArrayList<>();
            opt.add("1");
            opt.add("2");
            opt.add("3");
            new Container(this, "nginx-cdktf", ContainerConfig.builder()
                    .name("nginx:latest")
                    .image(image.getName())
                    .dnsOpts(opt)
                    .build()
            ).addOverride("", "");

        }
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "java-simple");
        app.synth();
    }
}