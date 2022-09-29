from cdktf import TerraformStack, TerraformLocal, TerraformVariable, CloudBackend, NamedCloudWorkspace
from imports.aws import ec2


class TestStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        #DOCS_BLOCK_START:var-out-define-local
        commonTags = TerraformLocal(self, "common_tags", {
            "service": "service_name",
            "owner": "owner"
        })

        ec2.Instance(self, "example",
            tags = commonTags.expression
        )
        #DOCS_BLOCK_END:var-out-define-local
        #DOCS_BLOCK_START:var-out-input-variables
        imageId = TerraformVariable(self, "imageId",
            type = "string",
            default = "ami-abcde123",
            description = "What AMI to use to create an instance"
        )
        ec2.Instance(self, "hello",
            ami = imageId.string_value,
            instance_type = "t2.micro"
        )
        #DOCS_BLOCK_END:var-out-input-variables

#DOCS_BLOCK_START:var-out-output-values
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class MyStackProps:
    myDomain: str
    def __init__(self, myDomain: str):
        self.myDomain = myDomain

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str, props: MyStackProps):
        super().__init__(scope, name)

        TerraformOutput(self, "my-domain",
            value = props.myDomain
        )

app = App()
MyStack(app, "cdktf-producer", MyStackProps(myDomain = "example.com"))
app.synth()
#DOCS_BLOCK_END:var-out-output-values

#DOCS_BLOCK_START:var-out-define-output-values
import imports.random as random

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        random.RandomProvider(self, "random")
        pet = random.Pet(self, "pet")

        TerraformOutput(self, "random-pet", 
            value = pet.id
        )

app = App()
MyStack(app, "cdktf-demo")
app.synth()
#DOCS_BLOCK_END:var-out-define-output-values


#DOCS_BLOCK_START:var-out-define-reference-remote-state
import imports.random as random

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, CloudBackend, NamedRemoteWorkspace, DataTerraformRemoteState

class Producer(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        CloudBackend(self,
            organization = "hashicorp",
            workspaces = NamedCloudWorkspace("producer")
        )

        random.RandomProvider(self, "random")
        pet = random.Pet(self, "pet")

        TerraformOutput(self, "random-pet",
            value = pet.id
        )

class Consumer(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        CloudBackend(self, 
            organization = "hashicorp",
            workspaces = NamedCloudWorkspace("consumer")
        )

        remoteState = DataTerraformRemoteState(self, "remote-pet",
            organization = "hashicorp",
            workspaces = NamedRemoteWorkspace(name = "producer")
        )

        TerraformOutput(self, "random-remote-pet",
            value = remoteState.get_string("random-pet")
        )

app = App()
Producer(app, "cdktf-producer")
Consumer(app, "cdktf-consumer")
app.synth()
#DOCS_BLOCK_END:var-out-define-reference-remote-state