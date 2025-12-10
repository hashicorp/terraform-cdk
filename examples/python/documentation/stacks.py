# Copyright IBM Corp. 2019, 2025
# SPDX-License-Identifier: MPL-2.0

#DOCS_BLOCK_START:single-stack
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws.instance import Instance
from imports.aws.provider import AwsProvider

class MySingleStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1"
        )

        Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro"
        )

app = App()
MySingleStack(app, "a-single-stack")
app.synth
#DOCS_BLOCK_END:single-stack


#DOCS_BLOCK_START:multiple-stacks
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws.instance import Instance
from imports.aws.provider import AwsProvider

class MyMultipleStacksConfig:
    environment: str
    region: str = None
    def __init__(self, environment: str, region: str = None):
        self.environment = environment
        self.region = region


class MyMultipleStacks(TerraformStack):
    def __init__(self, scope: Construct, id: str, config: MyMultipleStacksConfig):
        super().__init__(scope, id)

        region = "us-east-1" if config.region == None else config.region

        AwsProvider(self, "aws",
            region = region
        )

        Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
            tags = {
                "environment": config.environment,
            }
        )

multi_stack_app = App()
MyMultipleStacks(multi_stack_app, "multiple-stacks-dev", MyMultipleStacksConfig(environment = "dev"))
MyMultipleStacks(multi_stack_app, "multiple-stacks-staging", MyMultipleStacksConfig(environment = "staging"))
MyMultipleStacks(multi_stack_app, "multiple-stacks-production-us", MyMultipleStacksConfig(environment = "staging", region = "eu-central-1"))

multi_stack_app.synth
#DOCS_BLOCK_END:multiple-stacks

#DOCS_BLOCK_START:cross-stack-reference
from constructs import Construct
from cdktf import App, TerraformStack, Token
from imports.aws.instance import Instance
from imports.aws.provider import AwsProvider
from imports.vpc import Vpc
from my_constructs import DockerBackend

class VPCStack(TerraformStack):
    vpc: Vpc
    region = "us-east-1"
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = self.region
        )

        self.vpc = Vpc(self, "vpc")

class BackendStackConfig:
    region: str
    vpc_id: str
    docker_image: str
    def __init__(self, region: str, vpc_id: str, docker_image: str):
        self.region = region
        self.vpc_id = vpc_id
        self.docker_image = docker_image

class BackendStack(TerraformStack):
    def __init__(self, scope: Construct, id: str, config: BackendStackConfig):
        super().__init__(scope, id)

        AwsProvider(self, "aws", 
            region = config.region
        )

        DockerBackend(self, "docker-backend",
            vpc_id = config.vpc_id,
            docker_image = config.docker_image 
        )

cross_stack_app = App()
origin = VPCStack(cross_stack_app, "origin-stack")
BackendStack(cross_stack_app, "target-stack",
    BackendStackConfig(
        region = origin.region,
        vpc_id = origin.vpc.vpc_id_output,
        docker_image = "org/my-image:latest"
    )
)

cross_stack_app.synth()
#DOCS_BLOCK_END:cross-stack-reference

from cdktf import TerraformLocal, Fn
from imports.aws.provider import AwsProvider
from imports.aws.instance import Instance

class SourceStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws", 
                    region = "us-east-1"
                    )

        instance_a = Instance(self, "hello",
                            ami = "ami-abcde123",
                            instance_type = "t2.micro"
                            )
        instance_b = Instance(self, "hello_2",
                            ami = "ami-abcde124",
                            instance_type = "t2.micro"
                            )

        self.instances = [instance_a, instance_b]

class StackDependenciesStack(TerraformStack):
    def __init__(self, scope: Construct, id: str, stack_a, stack_b):
        super().__init__(scope, id)

        AwsProvider(self, "aws", 
            region = "us-east-1"
        )

        resources_from_stack_a = [instance.id for instance in stack_a.instances]
        resources_from_stack_b = [instance.id for instance in stack_b.instances]

#DOCS_BLOCK_START:stack-dependencies
        self.allResources =  TerraformLocal(self, "merge_items", Fn.concat([resources_from_stack_a, resources_from_stack_b]))
#DOCS_BLOCK_END:stack-dependencies
    
stack_dependencies_app = App()
stack_a = SourceStack(stack_dependencies_app, "stack_a");
stack_b = SourceStack(stack_dependencies_app, "stack_b");
stack = StackDependenciesStack(stack_dependencies_app, "temp", stack_a, stack_b)
stack_dependencies_app.synth()

#DOCS_BLOCK_START:stack-escape-hatches
stack.add_override("terraform.backend", {
    "local": Token.null_value(), # delete the default local backend
    "remote": {
        "organization": "test",
        "workspaces": {
            "name": "test"
        }
    }
})
#DOCS_BLOCK_END:stack-escape-hatches
