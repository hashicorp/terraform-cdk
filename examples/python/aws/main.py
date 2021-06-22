#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, Token
from imports.aws import SnsTopic, AwsProvider
from imports.terraform_aws_modules.vpc.aws import TerraformAwsModulesVpcAws


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')

        TerraformAwsModulesVpcAws(self, 'CustomVpc',
            name='custom-vpc',
            cidr='10.0.0.0/16',
            azs=["us-east-1a", "us-east-1b"],
            public_subnets=["10.0.1.0/24", "10.0.2.0/24"]
            )
        topic = SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        tokenAsString = Token.as_string(1234)
        tokenAsNumber = Token.as_number("1234")
        tokenAsList = Token.as_list("1234")
        tokenAsAny = Token.as_any(True)
        TerraformOutput(self, 'TopicStringOutput', value=tokenAsString)
        TerraformOutput(self, 'TopicAnyOutput', value=tokenAsAny)
        TerraformOutput(self, 'TopicNumberOutput', value=tokenAsNumber)
        TerraformOutput(self, 'TopicListOutput', value=tokenAsList)



app = App()
MyStack(app, "python-aws")

app.synth()
