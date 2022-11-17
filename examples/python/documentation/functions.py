from constructs import Construct
from cdktf import TerraformStack, App
# DOCS_BLOCK_START:functions-usage-example
from cdktf import Fn, TerraformOutput
from imports.aws.provider import AwsProvider
from imports.aws.data_aws_availability_zones import DataAwsAvailabilityZones
# DOCS_BLOCK_END:functions-usage-example


class FunctionsStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        AwsProvider(self, "aws", region="us-east-1")

        # DOCS_BLOCK_START:functions-usage-example

        zones = DataAwsAvailabilityZones(self, 'zones',
                                         state="available",
                                         )

        TerraformOutput(self, 'first-zone',
                        value=Fn.element(zones.names, 0)
                        )

        # DOCS_BLOCK_END:functions-usage-example
'''
DOCS_BLOCK_START:functions-usage-example
app = App()
FunctionsStack(app, "functions")
app.synth()
DOCS_BLOCK_END:functions-usage-example
'''

