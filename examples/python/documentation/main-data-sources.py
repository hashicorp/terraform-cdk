from cdktf import TerraformStack
from constructs import Construct

# DOCS_BLOCK_START:data-sources-define-data-sources
from imports.aws.datasources import DataAwsRegion
from imports.aws import AwsProvider

class HelloTerraform(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "temp",
            region = "us-east-1"
        )

        #.....
        region = DataAwsRegion(self, "region")

# DOCS_BLOCK_END:data-sources-define-data-sources

from cdktf import DataTerraformRemoteState
from imports.aws import ec2

# DOCS_BLOCK_START:data-sources-remote-state-data-source
from cdktf import DataTerraformRemoteState
from imports.aws import ec2

class HelloTerraform(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        #.....
        remoteState = DataTerraformRemoteState(self, 
            organization = "hashicorp",
            workspace = 'vpc-prod'
        )

        ec2.Instance(self, "foo",
            #.....
            subnet_id = remoteState.get('subnet_id')
        )
# DOCS_BLOCK_END:data-sources-remote-state-data-source