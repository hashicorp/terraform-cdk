# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

# DOCS_BLOCK_START:hcl-interop
from constructs import Construct
from cdktf import App, TerraformOutput, TerraformStack, TerraformVariable
from imports.random.pet import Pet
from imports.random.provider import RandomProvider

class HclInteropStack(TerraformStack):
    def __init__(self, scope: Construct, name: str):
        super().__init__(scope, name)

        RandomProvider(self, "default")
        petNameLength = TerraformVariable(self, "petNameLength",
                            type="number",
                            default=2,
                            description="Pet name length"
                        )

        myPet = Pet(self, "example",
                    length=petNameLength.number_value
                )

        TerraformOutput(self, "name",
            value=myPet.id
        )
# DOCS_BLOCK_END:hcl-interop
'''
DOCS_BLOCK_START:hcl-interop
# app = App()
# HclInteropStack(app, "random-pet-module")
# app.synth()
DOCS_BLOCK_END:hcl-interop
'''

