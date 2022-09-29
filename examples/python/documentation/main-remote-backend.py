from cdktf import CloudBackend, NamedCloudWorkspace


# DOCS_BLOCK_START:remote-backend-define
from constructs import Construct
from cdktf import App, CloudBackend, NamedCloudWorkspace,TerraformStack, TerraformOutput

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        CloudBackend(self,
            hostname = "app.terraform.io",
            organization = "company",
            workspaces = NamedCloudWorkspace("my-app-prod")
        )

        TerraformOutput(self, "dns-server",
            value = "hello-world"
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:remote-backend-define

# DOCS_BLOCK_START:remote-backend-migrate
stack = MyStack(app, "hi-terraform")
CloudBackend(stack,
    hostname = "app.terraform.io",
    organization = "company",
    workspaces = NamedCloudWorkspace("my-app")
)
# DOCS_BLOCK_END:remote-backend-migrate

# DOCS_BLOCK_START:remote-backend-escape-hatches
stack.add_override("terraform.backend",{
    "atlas": {
        "name": "example_corp/networking-prod",
        "address": "https://app.terraform.io"
    }
})
# DOCS_BLOCK_END:remote-backend-escape-hatches

