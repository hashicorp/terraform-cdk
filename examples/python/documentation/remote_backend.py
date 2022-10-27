# DOCS_BLOCK_START:remote-backend-define
from constructs import Construct
from cdktf import App, CloudBackend, NamedCloudWorkspace, TerraformStack, TerraformOutput
# DOCS_BLOCK_END:remote-backend-define

class Stack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

# DOCS_BLOCK_START:remote-backend-migrate
stack = Stack(App(), "hi-terraform")
# DOCS_BLOCK_END:remote-backend-migrate

# DOCS_BLOCK_START:remote-backend-define
class RemoteBackendStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        
        # DOCS_BLOCK_END:remote-backend-define
        
        # DOCS_BLOCK_START:remote-backend-define,remote-backend-migrate
        CloudBackend(self,
            hostname = "app.terraform.io",
            organization = "company",
            workspaces = NamedCloudWorkspace("my-app-prod")
        )
        # DOCS_BLOCK_END:remote-backend-define,remote-backend-migrate
        
        # DOCS_BLOCK_START:remote-backend-define
        
        TerraformOutput(self, "dns-server",
            value = "hello-world"
        )

# DOCS_BLOCK_END:remote-backend-define
'''
DOCS_BLOCK_START:remote-backend-define
app = App()
RemoteBackendStack(app, "hello-terraform")
app.synth()
DOCS_BLOCK_END:remote-backend-define
'''

# DOCS_BLOCK_START:remote-backend-escape-hatches
stack.add_override("terraform.backend",{
    "atlas": {
        "name": "example_corp/networking-prod",
        "address": "https://app.terraform.io"
    }
})
# DOCS_BLOCK_END:remote-backend-escape-hatches

