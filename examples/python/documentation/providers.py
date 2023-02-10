# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# DOCS_BLOCK_START:providers-import-providers
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws.provider import AwsProvider
from imports.aws.instance import Instance

class SimpleProviderStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        Instance(self, "hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

# DOCS_BLOCK_END:providers-import-providers
'''
DOCS_BLOCK_START:providers-import-providers
app = App()
SimpleProviderStack(app, "provider-stack")
app.synth()
DOCS_BLOCK_END:providers-import-providers
'''

# DOCS_BLOCK_START:providers-import-classes
import os
from constructs import Construct
from cdktf import App, TerraformStack, Token
from imports.aws.provider import AwsProvider
from imports.dnsimple.provider import DnsimpleProvider
from imports.dnsimple.record import Record

class ProviderStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        instance = Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

        DnsimpleProvider(self, "dnsimple",
            token = Token.as_string(os.getenv("DNSIMPLE_TOKEN")),
            account = Token.as_string(os.getenv("DNSIMPLE_ACCOUNT")),
        )

        Record(self, "web-www",
            domain = "example.com",
            name = "web",
            value = instance.public_ip,
            type = "A"
        )

# DOCS_BLOCK_END:providers-import-classes
'''
DOCS_BLOCK_START:providers-import-classes
app = App()
ProviderStack(app, "provider-stack")
app.synth()
DOCS_BLOCK_END:providers-import-classes
'''
