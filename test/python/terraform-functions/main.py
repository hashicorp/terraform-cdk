#!/usr/bin/env python
from cdktf import App, Fn, TerraformOutput, TerraformStack, Testing
from constructs import Construct
from imports.aws import AwsProvider, SnsTopic
from imports.terraform_aws_modules.vpc.aws import TerraformAwsModulesVpcAws


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')
        modules = TerraformAwsModulesVpcAws(self, 'CustomVpc', name='custom-vpc')
        TerraformOutput(self, "computed", value=Fn.cidrsubnet(Fn.element(Fn.merge(modules.public_subnets_cidr_blocks_output, modules.public_subnets_ipv6_cidr_blocks_output), 3), 4, 2))

app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-simple")

app.synth()
