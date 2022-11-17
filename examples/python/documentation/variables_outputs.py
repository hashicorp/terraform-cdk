from cdktf import TerraformStack, TerraformLocal, TerraformVariable, CloudBackend, NamedCloudWorkspace
import imports.aws as aws
from constructs import Construct

class VariablesOutputsDefineLocalStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)
        aws.provider.AwsProvider(self, "aws", region="us-east-1")
        #DOCS_BLOCK_START:var-out-define-local
        commonTags = TerraformLocal(self, "common_tags", {
            "service": "service_name",
            "owner": "owner"
        })

        aws.instance.Instance(self, "example",
            tags = commonTags.as_string_map
        )
        #DOCS_BLOCK_END:var-out-define-local
        #DOCS_BLOCK_START:var-out-input-variables
        imageId = TerraformVariable(self, "imageId",
            type = "string",
            default = "ami-abcde123",
            description = "What AMI to use to create an instance"
        )
        aws.instance.Instance(self, "hello",
            ami = imageId.string_value,
            instance_type = "t2.micro"
        )
        #DOCS_BLOCK_END:var-out-input-variables

#DOCS_BLOCK_START:var-out-output-values
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class OutputValuesProps:
    myDomain: str
    def __init__(self, myDomain: str):
        self.myDomain = myDomain

class OutputValuesStack(TerraformStack):
    def __init__(self, scope: Construct, name: str, props: OutputValuesProps):
        super().__init__(scope, name)

        TerraformOutput(self, "my-domain",
            value = props.myDomain
        )

#DOCS_BLOCK_END:var-out-output-values

'''
#DOCS_BLOCK_START:var-out-output-values
app = App()
OutputValuesStack(app, "cdktf-producer", OutputValuesProps(myDomain = "example.com"))
app.synth()
#DOCS_BLOCK_END:var-out-output-values
'''

#DOCS_BLOCK_START:var-out-define-output-values
import imports.random as random

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput

class DefineOutputStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        random.provider.RandomProvider(self, "random")
        pet = random.pet.Pet(self, "pet")

        TerraformOutput(self, "random-pet", 
            value = pet.id
        )

#DOCS_BLOCK_END:var-out-define-output-values

'''
#DOCS_BLOCK_START:var-out-define-output-values
app = App()
DefineOutputStack(app, "cdktf-demo")
app.synth()
#DOCS_BLOCK_END:var-out-define-output-values
'''

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

        random.provider.RandomProvider(self, "random")
        pet = random.pet.Pet(self, "pet")

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

#DOCS_BLOCK_END:var-out-define-reference-remote-state

'''
#DOCS_BLOCK_START:var-out-define-reference-remote-state
app = App()
Producer(app, "cdktf-producer")
Consumer(app, "cdktf-consumer")
app.synth()
#DOCS_BLOCK_END:var-out-define-reference-remote-state
'''