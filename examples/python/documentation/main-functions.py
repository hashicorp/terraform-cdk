from constructs import Construct
from cdktf import TerraformStack
# DOCS_BLOCK_START:functions-usage-example
from cdktf import Fn, TerraformOutput
from imports.aws.datasources import DataAwsAvailabilityZones
# DOCS_BLOCK_END:functions-usage-example

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # DOCS_BLOCK_START:functions-usage-example
        
        from cdktf import Fn, TerraformOutput
        from imports.aws.datasources import DataAwsAvailabilityZones

        zones = DataAwsAvailabilityZones(self, 'zones',
            state = "available",
        )

        TerraformOutput(self, 'first-zone',
            value = Fn.element(zones.names, 0)
        )
        # DOCS_BLOCK_END:functions-usage-example