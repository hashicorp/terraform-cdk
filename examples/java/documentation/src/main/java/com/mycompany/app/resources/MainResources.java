package com.mycompany.app.resources;

// DOCS_BLOCK_START:resources-escape-hatch
// DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
// DOCS_BLOCK_END:resources-escape-hatch-dynamic-block
import imports.aws.dynamodb_table.DynamodbTable;
import imports.aws.dynamodb_table.DynamodbTableAttribute;
import imports.aws.dynamodb_table.DynamodbTableConfig;
// DOCS_BLOCK_END:resources-escape-hatch

// DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
import imports.aws.security_group.*;
// DOCS_BLOCK_END:resources-escape-hatch-dynamic-block
import imports.kubernetes.deployment.*;
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

// DOCS_BLOCK_START:resources-references
import imports.kubernetes.namespace.Namespace;
import imports.kubernetes.namespace.NamespaceConfig;
import imports.kubernetes.namespace.NamespaceMetadata;
// DOCS_BLOCK_END:resources-references

import imports.aws.sns_topic.SnsTopic;
import imports.aws.sns_topic.SnsTopicConfig;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class MainResources extends TerraformStack {

        public MainResources(Construct scope, String id) {
                super(scope, id);

                App app = new App();
                // DOCS_BLOCK_START:resources-references
                Namespace exampleNamespace = new Namespace(this, "tf-cdk-example", NamespaceConfig.builder()
                                .metadata(NamespaceMetadata.builder()
                                                .name("tf-cdk-example")
                                                .build())
                                .build());

                // labels attribute is wrong
                new Deployment(this, "nginx-deployment", DeploymentConfig.builder()
                                .metadata(DeploymentMetadata.builder()
                                                .name("nginx")
                                                .namespace(exampleNamespace.getMetadata().getName())
                                                .labels(new HashMap<String, String>() {
                                                        {
                                                                put("app", app.toString());
                                                        }
                                                })
                                                .build())
                                .spec(DeploymentSpec.builder()
                                        .selector(DeploymentSpecSelector.builder()
                                                .matchLabels(new HashMap<String, String>(){{
                                                        put("app", app.toString());
                                                }})
                                                .build()
                                        )
                                        .replicas("1")
                                        .template(DeploymentSpecTemplate.builder()
                                                .metadata(DeploymentSpecTemplateMetadata.builder()
                                                        .labels(new HashMap<String, String>(){{
                                                                put("app", app.toString());
                                                        }})
                                                        .build()
                                                )
                                                .spec(DeploymentSpecTemplateSpec.builder()
                                                        .container(Arrays.asList(DeploymentSpecTemplateSpecContainer.builder()
                                                                        .image("nginx:1.7.9")
                                                                        .name("nginx")
                                                                        .build()
                                                                )
                                                        )
                                                        .build()
                                                )
                                                .build()
                                        )
                                        .build()
                                )
                                .build());
                // DOCS_BLOCK_END:resources-references

                // DOCS_BLOCK_START:resources-escape-hatch
                String tableName = "my-table";

                DynamodbTable table = new DynamodbTable(this, "Hello", DynamodbTableConfig.builder()
                                .name(tableName)
                                .hashKey("id")
                                .attribute(Arrays.asList(
                                                DynamodbTableAttribute.builder()
                                                                .name("id")
                                                                .type("S")
                                                                .build()))
                                .build());

                table.addOverride("provisioner", Arrays.asList(
                                new HashMap() {
                                        {
                                                put("local-exec", new HashMap<String, String>() {
                                                        {
                                                                put("command", "aws dynamodb create-backup --table-name "
                                                                                + tableName + " --backup-name "
                                                                                + tableName + "-backup");
                                                        }
                                                });
                                        }
                                }));
                // DOCS_BLOCK_END:resources-escape-hatch

                // DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
                // default value might be array rather than list
                TerraformVariable ports = new TerraformVariable(this, "ports", TerraformVariableConfig.builder()
                                .type("list")
                                .defaultValue(Arrays.asList(22, 80, 443, 5432))
                                .build());

                SecurityGroup sq = new SecurityGroup(this, "sec1grp", SecurityGroupConfig.builder()
                                .name("security1")
                                .vpcId("vpcs")
                                .egress(Arrays.asList(
                                                SecurityGroupEgress.builder()
                                                                .fromPort(0)
                                                                .toPort(0)
                                                                .cidrBlocks(Arrays.asList("0.0.0.0/0"))
                                                                .protocol("-1")
                                                                .build()))
                                .build());

                sq.addOverride("dynamic.ingress", new HashMap<String, Object>() {
                        {
                                put("for_each", ports.getListValue());
                                put("content", new HashMap<String, Object>() {
                                        {
                                                put("fromPort", "${ingress.value}");
                                                put("toPort", "${ingress.value}");
                                                put("cidrBlocks", Arrays.asList("0.0.0.0/0"));
                                                put("protocal", "-1");
                                        }
                                });
                        }
                });
                // DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

                // DOCS_BLOCK_START:resources-escape-loop-thru-ports
                List<Number> myPorts = Arrays.asList(22, 80, 443, 5432);
                List<SecurityGroupIngress> ingress = new ArrayList();
                myPorts.forEach(port -> ingress.add(
                                SecurityGroupIngress.builder()
                                                .toPort(port)
                                                .fromPort(port)
                                                .cidrBlocks(Arrays.asList("0.0.0.0/0"))
                                                .protocol("-1")
                                                .build()));

                new SecurityGroup(this, "sec2grp", SecurityGroupConfig.builder()
                                .name("security1")
                                .vpcId("vpcs")
                                .egress(Arrays.asList(
                                                SecurityGroupEgress.builder()
                                                                .fromPort(0)
                                                                .toPort(0)
                                                                .cidrBlocks(Arrays.asList("0.0.0.0/0"))
                                                                .protocol("-1")
                                                                .build()))
                                .ingress(ingress)
                                .build());
                // DOCS_BLOCK_END:resources-escape-loop-thru-ports

                // DOCS_BLOCK_START:resources-override-attribute
                new SnsTopic(this, "Topic", SnsTopicConfig.builder()
                                .displayName("will-be-overwritten")
                                .build()).addOverride("display_name", "my-topic");
                // DOCS_BLOCK_END:resources-override-attribute

        }
}
