
import imports.kubernetes as kubernetes
from cdktf import TerraformVariable
from cdktf import App
# DOCS_BLOCK_START:resources-define
from constructs import Construct
from cdktf import TerraformStack
import imports.aws as aws


class ResourceStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        aws.provider.AwsProvider(self, "aws",
                                 region="us-east-1"
                                 )

        region = aws.data_aws_region.DataAwsRegion(self, "region")

        aws.dynamodb_table.DynamodbTable(self, "Hello",
                                         name="my-first-table-{}".format(
                                             region.name),
                                         hash_key="temp",
                                         attribute=[
                                             {"name": "id", "type": "S"}],
                                         billing_mode="PAY_PER_REQUEST",
                                         )
# DOCS_BLOCK_END:resources-define


# DOCS_BLOCK_START:resources-references
# DOCS_BLOCK_END:resources-references


class ReferencesStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        kubernetes.provider.KubernetesProvider(self, "k8s")
        app = "my-app"
        # DOCS_BLOCK_START:resources-references

        exampleNamespace = kubernetes.namespace.Namespace(self, "tf-cdk-example",
                                                          metadata=kubernetes.namespace.NamespaceMetadata(
                                                              name="tf-cdk-example")
                                                          )

        kubernetes.deployment.Deployment(self, "nginx-deployment",
            metadata=kubernetes.deployment.DeploymentMetadata(
                name="nginx",
                namespace=exampleNamespace.metadata.name,
                labels={"app": app}
            ),
            spec=kubernetes.deployment.DeploymentSpec(
                selector=kubernetes.deployment.DeploymentSpecSelector(
                    match_labels={"app": app}
                ),
                replicas="1",
                template=kubernetes.deployment.DeploymentSpecTemplate(
                    metadata=kubernetes.deployment.DeploymentSpecTemplateMetadata(
                        labels={"app": app}
                    ),
                    spec=kubernetes.deployment.DeploymentSpecTemplateSpec(
                        container=[
                            kubernetes.deployment.DeploymentSpecTemplateSpecContainer(
                                image="nginx:1.7.9", name="nginx")
                        ]
                    )
                )
            )
        )
        # DOCS_BLOCK_END:resources-references


# DOCS_BLOCK_START:resources-escape-hatch
# DOCS_BLOCK_END:resources-escape-hatch


class EscapeHatch(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        aws.provider.AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-hatch

        tableName = "my-table"

        table = aws.dynamodb_table.DynamodbTable(self, "Hello",
                                                 name=tableName,
                                                 hash_key="id",
                                                 attribute=[
                                                     {"name": "id", "type": "S"}]
                                                 )

        table.add_override("provisioner.local-exec.command", [
            {
                "local-exec": {
                    "command": f"aws dynamodb create-backup --table-name {tableName} --backup-name {tableName}-backup"
                }
            }
        ])
        # DOCS_BLOCK_END:resources-escape-hatch


# DOCS_BLOCK_START:resources-override-attribute
# DOCS_BLOCK_END:resources-override-attribute


class ResourceOverrideStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        aws.provider.AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-override-attribute

        topic = aws.sns_topic.SnsTopic(self, "Topic",
                                       display_name="will-be-overwritten"
                                       )

        topic.add_override("display_name", "my-topic")
        # DOCS_BLOCK_END:resources-override-attribute


# DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
# DOCS_BLOCK_END:resources-escape-hatch-dynamic-block


class EscapeHatchDynamicStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        aws.provider.AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-hatch-dynamic-block

        ports = TerraformVariable(self, "ports",
                                  type="list",
                                  default=[22, 80, 443, 5432]
                                  )

        sq = aws.security_group.SecurityGroup(self, "sec1grp",
                                              name="security1",
                                              vpc_id="vpcs",
                                              egress=[
                                                  {
                                                      "fromPort": 0,
                                                      "toPort": 0,
                                                      "ciderBlocks": ["0.0.0.0/0"],
                                                      "protocal": "-1"
                                                  }
                                              ]
                                              )

        sq.add_override("dynamic.ingress", {
            "for_each": ports.list_value,
            "content": {
                "fromPort": "${ingress.value}",
                "toPort": "${ingress.value}",
                "ciderBlocks": ["0.0.0.0/0"],
                "protocal": "-1"
            }
        })
        # DOCS_BLOCK_END:resources-escape-hatch-dynamic-block


# DOCS_BLOCK_START:resources-escape-loop-thru-ports
# DOCS_BLOCK_END:resources-escape-loop-thru-ports


class EscapeThroughLoopsStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        aws.provider.AwsProvider(self, "aws", region="us-east-1") 
        # DOCS_BLOCK_START:resources-escape-loop-thru-ports

        ports = [22, 80, 443, 5432]

        aws.security_group.SecurityGroup(self, "sec1grp",
            name="security1",
            vpc_id="vpcs",
            egress=[
                {
                    "fromPort": 0,
                    "toPort": 0,
                    "ciderBlocks": ["0.0.0.0/0"],
                    "protocal": "-1"
                }
            ],
            ingress=[
                aws.security_group.SecurityGroupIngress(
                    from_port=port,
                    to_port=port,
                    protocol="-1",
                    cidr_blocks=["0.0.0.0/0"]
                ) for port in ports
            ]
        )
        # DOCS_BLOCK_END:resources-escape-loop-thru-ports
