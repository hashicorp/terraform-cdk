#DOCS_BLOCK_START:single-stack
from constructs import Construct
from cdktf import App, TerraformStack
import imports.aws as aws

class MySingleStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        aws.provider.AwsProvider(self, "aws",
            region = "us-east-1"
        )

        aws.instance.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro"
        )

#DOCS_BLOCK_END:single-stack

'''
#DOCS_BLOCK_START:single-stack
app = App()
MySingleStack(app, "a-single-stack")
app.synth
#DOCS_BLOCK_END:single-stack
'''

#DOCS_BLOCK_START:multiple-stacks
from constructs import Construct
from cdktf import App, TerraformStack
import imports.aws as aws

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

        aws.provider.AwsProvider(self, "aws",
            region = region
        )

        aws.instance.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
            tags = {
                "environment": config.environment,
            }
        )

#DOCS_BLOCK_END:multiple-stacks

'''
#DOCS_BLOCK_START:multiple-stacks
app = App()
MyMultipleStacks(app, "multiple-stacks-dev", MyMultipleStacksConfig(environment = "dev"))
MyMultipleStacks(app, "multiple-stacks-staging", MyMultipleStacksConfig(environment = "staging"))
MyMultipleStacks(app, "multiple-stacks-production-us", MyMultipleStacksConfig(environment = "staging", region = "eu-central-1"))

app.synth
#DOCS_BLOCK_END:multiple-stacks
'''

#DOCS_BLOCK_START:cross-stack-reference
from constructs import Construct
from cdktf import App, TerraformStack
import imports.aws as aws
from imports.vpc import Vpc
from my_constructs import DockerBackend

class VPCStack(TerraformStack):
    vpc: Vpc
    region = "us-east-1"
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        aws.provider.AwsProvider(self, "aws",
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

        aws.provider.AwsProvider(self, "aws", 
            region = config.region
        )

        DockerBackend(self, "docker-backend",
            vpc_id = config.vpc_id,
            docker_image = config.docker_image 
        )

#DOCS_BLOCK_END:cross-stack-reference

'''
#DOCS_BLOCK_START:cross-stack-reference
app = App()
origin = VPCStack(app, "origin-stack")
BackendStack(app, "target-stack",
    BackendStackConfig(
        region = origin.region,
        vpc_id = origin.vpc.vpc_id_output,
        docker_image = "org/my-image:latest"
    )
)

app.synth()
#DOCS_BLOCK_END:cross-stack-reference
'''

'''
#DOCS_BLOCK_START:stack-dependencies
self.allResources =  TerraformLocal(self, "merge_items", Fn.merge_lists(resourceFromStackA.items, resourceFromStackB.items))
#DOCS_BLOCK_END:stack-dependencies
'''

app = App()
stack = TerraformStack(app, "temp")
#DOCS_BLOCK_START:stack-escape-hatches
stack.add_override("terraform.backend",{
    "remote": {
        "organization": "test",
        "workspaces": {
            "name": "test"
        }
    }
})
#DOCS_BLOCK_END:stack-escape-hatches