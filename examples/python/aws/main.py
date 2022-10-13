from constructs import Construct
from cdktf import App, TerraformStack
from imports.aws.provider import AwsProvider
from imports.aws.sns_topic import SnsTopic
from imports.terraform_aws_modules.aws import Vpc
from imports.aws.lambda_function import LambdaFunction
from imports.aws.iam_role import IamRole


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')

        Vpc(self, 'CustomVpc',
            name='custom-vpc',
            cidr='10.0.0.0/16',
            azs=["us-east-1a", "us-east-1b"],
            public_subnets=["10.0.1.0/24", "10.0.2.0/24"]
            )
        SnsTopic(self, 'Topic', display_name='my-first-sns-topic')
        role = IamRole(self, 'Role', name='lambda-role',
                       assume_role_policy='{}')
        LambdaFunction(self, 'Lambda', function_name='my-first-lambda-function',
                       role=role.arn, handler='index.handler', runtime='python3.6')


app = App()
MyStack(app, "python-aws")

app.synth()
