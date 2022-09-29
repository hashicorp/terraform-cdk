from imports.aws import AwsProvider
from imports.aws.datasources import DataAwsRegion
from cdktf import App
# DOCS_BLOCK_START:resources-define
from constructs import Construct
from cdktf import TerraformStack
from imports.aws import dynamodb

class HelloTera(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1" 
        )

        region = DataAwsRegion(self, "region")

        dynamodb.DynamodbTable(self, "Hello",
            name = "my-first-table-{}".format(region.name),
            hash_key = "temp",
            attribute = [{ "name": "id", "type": "S"}],
            billing_mode = "PAY_PER_REQUEST", 
        )
# DOCS_BLOCK_END:resources-define

# DOCS_BLOCK_START:resources-references
from imports.kubernetes import Deployment, DeploymentMetadata, Namespace, NamespaceMetadata
# DOCS_BLOCK_END:resources-references

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        app = App()
        # DOCS_BLOCK_START:resources-references
        
        exampleNamespace = Namespace(self, "tf-cdk-example",
            metadata = NamespaceMetadata({
                "name": "tf-cdk-example"
            })
        )

        Deployment(self, "nginx-deployment",
            metadata = DeploymentMetadata({
                "name": "nginx",
                "namespace": exampleNamespace.metadata.name,
                "labels": {
                    app,
                }
            })
        )
        # DOCS_BLOCK_END:resources-references


class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
# DOCS_BLOCK_START:resources-escape-hatch
from imports.aws import dynamodb
# DOCS_BLOCK_END:resources-escape-hatch

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        # DOCS_BLOCK_START:resources-escape-hatch
        
        tableName = "my-table"

        table = dynamodb.DynamodbTable(self, "Hello",
            name = tableName,
            hash_key = "id",
            attribute = [{"name": "id", "type": "S"}]
        )

        table.add_override("provisioner", [
            {
                "local-exec": {
                    "command": "aws dynamodb create-backup --table-name {} --backup-name {}-backup".format(tableName)
                }
            }
        ])
        # DOCS_BLOCK_END:resources-escape-hatch

#DOCS_BLOCK_START:resources-override-attribute
from imports.aws import sns
#DOCS_BLOCK_END:resources-override-attribute


class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-override-attribute

        topic = sns.SnsTopic(self, "Topic",
            display_name = "will-be-overwritten"
        )

        topic.add_override("display_name", "my-topic")
        #DOCS_BLOCK_END:resources-override-attribute

#DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
from cdktf import TerraformVariable
from imports.aws.vpc import SecurityGroup
#DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-escape-hatch-dynamic-block
        
        ports = TerraformVariable(self, "ports",
            type = "list",
            default = [22, 80, 443, 5432] 
        )

        sq = SecurityGroup(self, "sec1grp",
            name = "security1",
            vpc_id = "vpcs",
            egress = [
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
        #DOCS_BLOCK_END:resources-escape-hatch-dynamic-block

#DOCS_BLOCK_START:resources-escape-loop-thru-ports
from imports.aws.vpc import SecurityGroup
#DOCS_BLOCK_END:resources-escape-loop-thru-ports

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:resources-escape-loop-thru-ports
        
        ports = [22, 80, 443, 5432]

        SecurityGroup(self, "sec1grp",
            name = "security1",
            vpc_id = "vpcs",
            egress = [
                {
                    "fromPort": 0,
                    "toPort": 0,
                    "ciderBlocks": ["0.0.0.0/0"],
                    "protocal": "-1"
                }
            ],
            ingress = map(lambda port_list, port: port_list.append(
                {
                    "fromPort": port,
                    "toPort": port,
                    "cidrBlocks": ["0.0.0.0/0"],
                    "protocol": "-1",
                }
            ), [], ports)
        )
        #DOCS_BLOCK_END:resources-escape-loop-thru-ports