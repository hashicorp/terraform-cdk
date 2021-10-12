package com.mycompany.app;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

import imports.kubernetes.Deployment;
import imports.kubernetes.DeploymentConfig;
import imports.kubernetes.DeploymentMetadata;
import imports.kubernetes.DeploymentSpec;
import imports.kubernetes.DeploymentSpecSelector;
import imports.kubernetes.DeploymentSpecTemplate;
import imports.kubernetes.DeploymentSpecTemplateMetadata;
import imports.kubernetes.DeploymentSpecTemplateSpec;
import imports.kubernetes.DeploymentSpecTemplateSpecContainer;
import imports.kubernetes.DeploymentSpecTemplateSpecContainerPort;
import imports.kubernetes.DeploymentSpecTemplateSpecContainerResources;
import imports.kubernetes.DeploymentSpecTemplateSpecContainerResourcesLimits;
import imports.kubernetes.DeploymentSpecTemplateSpecContainerResourcesRequests;
import imports.kubernetes.KubernetesProvider;
import imports.kubernetes.Namespace;
import imports.kubernetes.NamespaceConfig;
import imports.kubernetes.NamespaceMetadata;
import imports.kubernetes.Service;
import imports.kubernetes.ServiceConfig;
import imports.kubernetes.ServiceMetadata;
import imports.kubernetes.ServiceSpec;
import imports.kubernetes.ServiceSpecPort;

import software.constructs.Construct;

import java.util.Collections;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) {
        super(scope, id);

        KubernetesProvider.Builder.create(this, "kind").build();

        Namespace exampleNamespace = new Namespace(this, "tf-cdk-example",
            NamespaceConfig.builder()
                .metadata(
                    NamespaceMetadata.builder()
                        .name("tf-cdk-example")
                        .build()
                )
                .build());

        String app = "nginx-example";

        new Deployment(this, "nginx-deployment", DeploymentConfig.builder()
            .metadata(
                DeploymentMetadata.builder()
                    .name(app)
                    .namespace(exampleNamespace.getId())
                    .labels(Collections.singletonMap("app", app))
                    .build()
            )
            .spec(
                DeploymentSpec.builder()
                    .replicas(2)
                    .selector(
                        DeploymentSpecSelector.builder()
                            .matchLabels(Collections.singletonMap("app", app))
                            .build()
                    )
                    .template(DeploymentSpecTemplate.builder()
                        .metadata(
                            DeploymentSpecTemplateMetadata.builder()
                                .labels(Collections.singletonMap("app", app))
                                .build()
                        )
                        .spec(
                            DeploymentSpecTemplateSpec
                                .builder()
                                .container(Collections.singletonList(
                                    DeploymentSpecTemplateSpecContainer.builder()
                                        .image("nginx:1.7.8")
                                        .name("example")
                                        .port(Collections.singletonList(
                                            DeploymentSpecTemplateSpecContainerPort.builder()
                                                .containerPort(80)
                                                .build()
                                        ))
                                        .resources(
                                            DeploymentSpecTemplateSpecContainerResources.builder()
                                                .limits(
                                                    DeploymentSpecTemplateSpecContainerResourcesLimits.builder()
                                                        .cpu("0.5")
                                                        .memory("512Mi")
                                                        .build()
                                                )
                                                .requests(
                                                    DeploymentSpecTemplateSpecContainerResourcesRequests.builder()
                                                        .cpu("250m")
                                                        .memory("50Mi")
                                                        .build()
                                                ).build()
                                        ).build()
                                )).build()
                        ).build()
                    ).build()
            ).build());

        new Service(this, "nginx-service", ServiceConfig.builder()
            .metadata(
                ServiceMetadata.builder()
                    .name(app)
                    .namespace(exampleNamespace.getId())
                    .build())
            .spec(ServiceSpec.builder()
                .selector(Collections.singletonMap("app", app))
                .port(Collections.singletonList(
                    ServiceSpecPort.builder()
                        .nodePort(30201)
                        .port(80)
                        .targetPort("80")
                        .build()
                ))
                .type("NodePort")
                .build())
            .build());
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "tf-cdk-example");
        app.synth();
    }
}