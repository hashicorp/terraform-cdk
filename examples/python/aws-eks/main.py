#!/usr/bin/env python

# for CDK
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, Token

# for terraform provider
from imports.aws import AwsProvider, DataAwsCallerIdentity
from imports.local import LocalProvider
from imports.null import NullProvider
from imports.random import RandomProvider
from imports.template import TemplateProvider

# for terraform module
from imports.terraform_aws_modules.vpc.aws import Vpc
from imports.terraform_aws_modules.eks.aws import Eks

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='us-west-2')
        LocalProvider(self, 'Local')
        NullProvider(self, 'Null')
        RandomProvider(self, 'Random')
        TemplateProvider(self, 'Template')

        my_vpc = Vpc(self, 'MyVpc',
            name='my-vpc',
            cidr='10.0.0.0/16',
            azs=['us-west-2a', 'us-west-2b', 'us-west-2c'],
            private_subnets=['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
            public_subnets=['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
            enable_nat_gateway=True
        )

        my_eks= Eks(self, 'MyEks',
            cluster_name='my-eks',
            subnets=Token().as_list(my_vpc.private_subnets_output),
            vpc_id=Token().as_string(my_vpc.vpc_id_output),
            manage_aws_auth='false'
        )

        TerraformOutput(self, 'cluster_endpoint',
            value=my_eks.cluster_endpoint_output
        )

        TerraformOutput(self, 'create_user_arn',
            value=DataAwsCallerIdentity(self, 'current').arn
        )

app = App()
MyStack(app, "eks-stack")

app.synth()
