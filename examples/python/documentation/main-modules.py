from cdktf import TerraformHclModule

# DOCS_BLOCK_START:modules-install-modules
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider
from imports.vpc import Vpc

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        Vpc(self, "MyVpc",
            name = "my-vpc",
            cidr = "10.0.0.0/16",
            azs = ['us-west-2a', 'us-west-2b', 'us-west-2c'],
            private_subnets = ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
            public_subnets = ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
            enable_nat_gateway = True
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:modules-install-modules


stack = TerraformStack(App(), "temp")
# DOCS_BLOCK_START:modules-create-modules
provider = AwsProvider(stack, "provider",
    region = "us-east-1",
)

module = TerraformHclModule(stack, "Vpc",
    source = "terraform-aws-modules/vpc/aws",
    # variables takes any input - please consult the docs of the module
    # to ensure the arguments are correct
    variables = {
        "name": "my-vpc",
        "cidr": "10.0.0.0/16",
        "azs": ["us-west-2a", "us-west-2b", "us-west-2c"],
        "privateSubnets": ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
        "publicSubnets": ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
        "enableNatGateway": True,
    },
    providers = [provider]
)
# DOCS_BLOCK_END:modules-create-modules

# DOCS_BLOCK_START:modules-examples
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput
# This module can come from a registry or through a local / remote reference
from imports.my_local_module import MyLocalModule


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        localModule = MyLocalModule(self, "local-module", ip_address='127.0.0.1')
        TerraformOutput(self, "dns-server", value=localModule.dns_server_output)
# DOCS_BLOCK_END:modules-examples