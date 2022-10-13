package com.mycompany.app;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

import imports.google.compute_instance.*;
import imports.google.compute_network.*;
import imports.google.provider.GoogleProvider;
import software.constructs.Construct;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) throws IOException {
        super(scope, id);

        Path credentialPath = Paths.get("").resolve("google.json");
        String credentials = credentialPath.toFile().exists() ? new String(Files.readAllBytes(credentialPath), StandardCharsets.UTF_8) : "{}";

        GoogleProvider.Builder.create(this, "Google")
            .region("us-central1")
            .zone("us-central1-c")
            .project("terraform-cdk")
            .credentials(credentials)
            .build();

        ComputeNetwork network = ComputeNetwork.Builder.create(this, "Network").name("cdktf-network").build();

        ComputeInstance.Builder.create(this, "ComputeInstance")
            .name("cdktf-instance")
            .machineType("f1-micro")
            .bootDisk(ComputeInstanceBootDisk.builder()
            .initializeParams(ComputeInstanceBootDiskInitializeParams.builder()
                    .image("debian-cloud/debian-9")
                    .build()
                )
                .build()
            )
            .networkInterface(Arrays.asList(ComputeInstanceNetworkInterface.builder()
                .network(network.getName())
                .build()
            ))
            .tags(Arrays.asList("web", "dev"))
            .dependsOn(Arrays.asList(network))
            .build();
    }

    public static void main(String[] args) throws IOException {
        final App app = new App();
        new Main(app, "google");
        app.synth();
    }
}