#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, TerraformVariable, Token, TerraformOutput
from imports.aws import AwsProvider
from imports.aws.sns import SnsTopic
from imports.vpc import Vpc
from imports.eks import Eks
from imports.aws.lambda_function import LambdaFunction
from imports.aws.iam import IamRole


def region(scope: Construct):
    return TerraformVariable(scope, 'region', default='us-east-1', type='string').string_value

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region=region(self))

        Vpc(self, 'CustomVpc',
            name='custom-vpc',
            cidr='10.0.0.0/16',
            azs=["us-east-1a", "us-east-1b"],
            public_subnets=["10.0.1.0/24", "10.0.2.0/24"]
            )
        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        role = IamRole(self, 'Role', name='lambda-role', assume_role_policy='{}')
        LambdaFunction(self, 'Lambda', function_name='my-first-lambda-function', role=role.arn, handler='index.handler', runtime='python3.6')

class MyOtherStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region=region(self))

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
            manage_aws_auth=False,
            cluster_version='1.17'
        )

        TerraformOutput(self, 'cluster_endpoint',
            value=my_eks.cluster_endpoint_output
        )



app = App()
MyStack(app, "python-aws")
MyOtherStack(app, "python-aws-2")

app.synth()
