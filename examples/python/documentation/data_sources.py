from imports.aws.instance import Instance
from imports.aws.provider import AwsProvider
# DOCS_BLOCK_START:data-sources-define-data-sources,data-sources-remote-state-data-source
from cdktf import TerraformStack, App
# DOCS_BLOCK_END:data-sources-define-data-sources
from cdktf import DataTerraformRemoteState, NamedRemoteWorkspace
# DOCS_BLOCK_END:data-sources-remote-state-data-source
from constructs import Construct

# DOCS_BLOCK_START:data-sources-define-data-sources
from imports.aws.data_aws_region import DataAwsRegion
from imports.aws.provider import AwsProvider


class HelloTerraform(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
                    region="us-east-1"
                    )

        # .....
        region = DataAwsRegion(self, "region")


# DOCS_BLOCK_END:data-sources-define-data-sources

'''
DOCS_BLOCK_START:data-sources-define-data-sources
app = App()
HelloTerraform(app, "data-sources")
app.synth()
DOCS_BLOCK_END:data-sources-define-data-sources
'''



# DOCS_BLOCK_START:data-sources-remote-state-data-source
class HelloTerraformRemoteState(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        AwsProvider(self, "aws",
                    region="us-east-1"
                    )

        # .....
        remoteState = DataTerraformRemoteState(self, "vpc-prod-remote-state",
                                               organization="hashicorp",
                                               workspaces=NamedRemoteWorkspace(name='vpc-prod')
                                               )

        Instance(self, "foo",
                 # .....
                 subnet_id=remoteState.get_string('subnet_id')
                 )
# DOCS_BLOCK_END:data-sources-remote-state-data-source


'''
DOCS_BLOCK_START:data-sources-define-data-sources
app = App()
HelloTerraformRemoteState(app, "terraform-remotes-state")
app.synth()
DOCS_BLOCK_END:data-sources-define-data-sources
'''