# DOCS_BLOCK_START:providers-import-providers
from constructs import Construct
from cdktf import App, TerraformStack
import imports.aws as aws

class SimpleProviderStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        aws.provider.AwsProvider(self, "aws",
            region = "us-east-1",
        )

        aws.instance.Instance(self, "hello",
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
import imports.aws as aws
import imports.dnsimple as dnsimple

class ProviderStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        aws.provider.AwsProvider(self, "aws",
            region = "us-east-1",
        )

        instance = aws.instance.Instance(self, "Hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

        dnsimple.provider.DnsimpleProvider(self, "dnsimple",
            token = Token.as_string(os.getenv("DNSIMPLE_TOKEN")),
            account = Token.as_string(os.getenv("DNSIMPLE_ACCOUNT")),
        )

        dnsimple.record.Record(self, "web-www",
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
