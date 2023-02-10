# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

from cdktf import TerraformHclModule

# DOCS_BLOCK_START:modules-install-modules
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws.provider import AwsProvider
from imports.vpc import Vpc

class ModuleStack(TerraformStack):
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

# DOCS_BLOCK_END:modules-install-modules
'''
DOCS_BLOCK_START:modules-install-modules
app = App()
ModuleStack(app, "hello-terraform")
app.synth()
DOCS_BLOCK_END:modules-install-modules
'''


# DOCS_BLOCK_START:modules-create-modules
class HclModuleStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        
        provider = AwsProvider(self, "provider",
            region = "us-east-1",
        )

        module = TerraformHclModule(self, "Vpc",
            source = "terraform-aws-modules/vpc/aws",
            # Note: variables has no types for its inputs.
            # When using this for other modules consult the docs of the module
            # to ensure the arguments are correct.
            variables = {
                "name": "my-vpc",
                "cidr": "10.0.0.0/16",
                "azs": ["us-west-2a", "us-west-2b", "us-west-2c"],
                "private_subnets": ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
                "public_subnets": ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
                "enable_nat_gateway": True,
            },
            providers = [provider]
        )

# DOCS_BLOCK_END:modules-create-modules
'''
DOCS_BLOCK_START:modules-create-modules
app = App()
HclModuleStack(app, "hello-terraform")
app.synth()
DOCS_BLOCK_END:modules-create-modules
'''

# DOCS_BLOCK_START:modules-examples
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput
# This module can come from a registry or through a local / remote reference
from imports.my_local_module import MyLocalModule


class ModuleWithOutputStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        localModule = MyLocalModule(self, "local-module", ip_address='127.0.0.1')
        TerraformOutput(self, "dns-server", value=localModule.dns_server_output)

# DOCS_BLOCK_END:modules-examples
'''
DOCS_BLOCK_START:modules-examples
app = App()
ModuleWithOutputStack(app, "hello-terraform")
app.synth()
DOCS_BLOCK_END:modules-examples
'''
