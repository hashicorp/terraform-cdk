# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

from constructs import Construct
from cdktf import App, TerraformStack
import os
from imports.aws.provider import AwsProvider
from imports.aws.s3_bucket import S3Bucket

# To properly see the move functionality in action, the resource being moved needs to be deployed
# First run "deploy" with the STEP_1 env flag set, then "plan" or "deploy" with the STEP_2 env flag set

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        AwsProvider(self, 'Aws', region='eu-central-1')
        
        if os.environ.get('STEP_1')=='True':
            S3Bucket(self, "old-bucket", bucket='python-move-test-bucket')

        if os.environ.get('STEP_2')=='True':
            S3Bucket(self, "old-bucket", bucket='python-move-test-bucket').move_to("move-s3")
            S3Bucket(self, "new-bucket", bucket='python-move-test-bucket').add_move_target("move-s3")
            

app = App()
MyStack(app, "python-aws-move")

app.synth()
