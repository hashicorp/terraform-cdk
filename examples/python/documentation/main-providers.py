# DOCS_BLOCK_START:providers-import-providers
from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws import AwsProvider, ec2

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        ec2.Instance(self, "hello",
            ami = "ami-2757f631",
            instance_type = "t2.micro",
        )

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:providers-import-providers

# DOCS_BLOCK_START:providers-import-classes
import os
from constructs import Construct
from cdktf import App, TerraformStack, Token
from imports.aws import AwsProvider, ec2
from imports.dnsimple import DnsimpleProvider, Record

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
            region = "us-east-1",
        )

        instance = ec2.Instance(self, "Hello",
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

app = App()
MyStack(app, "hello-terraform")
app.synth
# DOCS_BLOCK_END:providers-import-classes