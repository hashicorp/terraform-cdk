#DOCS_BLOCK_START:single-stack
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1"
        )

        ec2.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro"
        )

app = App()
MyStack(app, "a-single-stack")
app.synth
#DOCS_BLOCK_END:single-stack

#DOCS_BLOCK_START:multiple-stacks
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStackConfig:
    environment: str
    region: str = None
    def __init__(self, environment: str, region: str = None):
        self.environment = environment
        self.region = region


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str, config: MyStackConfig):
        super().__init__(scope, id)

        region = "us-east-1" if config.region == None else config.region

        AwsProvider(self, "aws",
            region = region
        )

        ec2.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
            tags = {
                "environment": config.environment,
            }
        )

app = App()
MyStack(app, "multiple-stacks-dev", MyStackConfig(environment = "dev"))
MyStack(app, "multiple-stacks-staging", MyStackConfig(environment = "staging"))
MyStack(app, "multiple-stacks-production-us", MyStackConfig(environment = "staging", region = "eu-central-1"))

app.synth
#DOCS_BLOCK_END:multiple-stacks

#DOCS_BLOCK_START:cross-stack-reference
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider
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

if False:
    #DOCS_BLOCK_START:stack-dependencies
    self.allResources =  TerraformLocal(self, "merge_items", Fn.merge_lists(resourceFromStackA.items, resourceFromStackB.items))
    #DOCS_BLOCK_END:stack-dependencies

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