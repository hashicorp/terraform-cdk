# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0


from imports.kubernetes.namespace import NamespaceMetadata
from imports.aws.data_aws_region import DataAwsRegion
from imports.aws.dynamodb_table import DynamodbTable
from imports.aws.security_group import SecurityGroup, SecurityGroupIngress
from imports.aws.sns_topic import SnsTopic
from imports.kubernetes.deployment import Deployment, DeploymentMetadata, DeploymentSpec, DeploymentSpecSelector, DeploymentSpecTemplate, DeploymentSpecTemplateMetadata, DeploymentSpecTemplateSpec, DeploymentSpecTemplateSpecContainer
from imports.kubernetes.namespace import Namespace
from imports.kubernetes.provider import KubernetesProvider
from imports.aws.provider import AwsProvider
from cdktf import TerraformVariable

# DOCS_BLOCK_START:resources-define
from constructs import Construct
from cdktf import TerraformStack

class ResourceStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region="us-east-1"
        )

        region = DataAwsRegion(self, "region")

        DynamodbTable(self, "Hello",
            name="my-first-table-{}".format(region.name),
            hash_key="temp",
            attribute=[{"name": "id", "type": "S"}],
            billing_mode="PAY_PER_REQUEST"
        )
# DOCS_BLOCK_END:resources-define

class ReferencesStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        KubernetesProvider(self, "k8s")
        app = "my-app"
        # DOCS_BLOCK_START:resources-references

        exampleNamespace = Namespace(self, "tf-cdk-example",
            metadata=NamespaceMetadata(name="tf-cdk-example")
        )

        Deployment(self, "nginx-deployment",
            metadata=DeploymentMetadata(
                name="nginx",
                namespace=exampleNamespace.metadata.name, # Reference the name property
                labels={"app": app}
            ),
            spec=DeploymentSpec(
                selector=DeploymentSpecSelector(
                    match_labels={"app": app}
                ),
                replicas="1",
                template=DeploymentSpecTemplate(
                    metadata=DeploymentSpecTemplateMetadata(
                        labels={"app": app}
                    ),
                    spec=DeploymentSpecTemplateSpec(
                        container=[
                            DeploymentSpecTemplateSpecContainer(
                                image="nginx:1.7.9", name="nginx")
                        ]
                    )
                )
            )
        )
        # DOCS_BLOCK_END:resources-references


class EscapeHatch(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-hatch

        tableName = "my-table"

        table = DynamodbTable(self, "Hello",
            name=tableName,
            hash_key="id",
            attribute=[{"name": "id", "type": "S"}]
        )

        table.add_override("provisioner.local-exec.command", [
            {
                "local-exec": {
                    "command": f"aws dynamodb create-backup --table-name {tableName} --backup-name {tableName}-backup"
                }
            }
        ])
        # DOCS_BLOCK_END:resources-escape-hatch


class ResourceOverrideStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-override-attribute

        topic = SnsTopic(self, "Topic",
                    display_name="will-be-overwritten"
                )

        topic.add_override("display_name", "my-topic")
        # DOCS_BLOCK_END:resources-override-attribute


class EscapeHatchDynamicStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-hatch-dynamic-block

        ports = TerraformVariable(self, "ports",
                    type="list",
                    default=[22, 80, 443, 5432]
                )

        sq = SecurityGroup(self, "sec1grp",
                name="security1",
                vpc_id="vpcs",
                egress=[
                    {
                        "from_port": 0,
                        "to_port": 0,
                        "cidr_blocks": ["0.0.0.0/0"],
                        "protocol": "-1"
                    }
                ]
            )

        sq.add_override("dynamic.ingress", {
            "for_each": ports.list_value,
            "content": {
                "from_port": "${ingress.value}",
                "to_port": "${ingress.value}",
                "cidr_blocks": ["0.0.0.0/0"],
                "protocol": "-1"
            }
        })
        # DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

class EscapeThroughLoopsStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-loop-thru-ports
        ports = [22, 80, 443, 5432]

        SecurityGroup(self, "sec1grp",
            name="security1",
            vpc_id="vpcs",
            egress=[
                {
                    "fromPort": 0,
                    "toPort": 0,
                    "ciderBlocks": ["0.0.0.0/0"],
                    "protocol": "-1"
                }
            ],
            ingress=[
                SecurityGroupIngress(
                    from_port=port,
                    to_port=port,
                    protocol="-1",
                    cidr_blocks=["0.0.0.0/0"]
                ) for port in ports
            ]
        )
        # DOCS_BLOCK_END:resources-escape-loop-thru-ports
