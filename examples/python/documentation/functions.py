# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

from constructs import Construct
from cdktf import TerraformStack, App, TerraformVariable, Token
# DOCS_BLOCK_START:functions-usage-example
from cdktf import Fn, TerraformOutput
from imports.aws.provider import AwsProvider
from imports.aws.data_aws_availability_zones import DataAwsAvailabilityZones
# DOCS_BLOCK_END:functions-usage-example

class FunctionsStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        AwsProvider(self, "aws", 
            region="us-east-1"
        )

        # DOCS_BLOCK_START:functions-usage-example

        zones = DataAwsAvailabilityZones(self, 'zones',
                    state="available",
                )

        TerraformOutput(self, 'first-zone',
            value=Fn.element(zones.names, 0)
        )

        # DOCS_BLOCK_END:functions-usage-example

        # INTERNAL NOTE: Due to an JSII bug, we have to pass the variable as a string_value in Python
        # We can remove it, once https://github.com/aws/jsii/pull/4209 is released
        # DOCS_BLOCK_START:functions-lookup
        v = TerraformVariable(self, "complex-object",
            type = 'object({users: list(object({name: string}))})',
        )
        TerraformOutput(self, 'users',
            value=Fn.lookup(v.string_value, "users")
        )
        TerraformOutput(self, 'first_user_name',
            value=Fn.lookup_nested(v.string_value, ["users", 0, "name"])
        )
        # DOCS_BLOCK_END:functions-lookup

        # DOCS_BLOCK_START:functions-raw-string
        TerraformOutput(self, 'quotes',
            value=Fn.raw_string('"b"')
        )
        TerraformOutput(self, 'template',
            value=Fn.raw_string('${TEMPLATE}')
        )
        # DOCS_BLOCK_END:functions-raw-string

