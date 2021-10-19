#!/usr/bin/env python
from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput, Token
from imports.azurerm import AzurermProvider, ResourceGroup, VirtualNetwork


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        # define resources here
        loca="West Europe"
        add_space=["10.12.0.0/27"]
        rg_name="example-rg"
        tag = {
                "ENV": "Dev",
                "PROJECT": "AZ_TF"
            }
        

        AzurermProvider(self, "Azurerm",\
            features={}
            )

        example_rg = ResourceGroup(self, 'example-rg',\
            name=rg_name, 
            location = loca,
            tags = tag
            )

        example_vnet = VirtualNetwork(self, 'example_vnet',\
            depends_on =[example_rg],
            name="example_vnet",
            location=loca,
            address_space=add_space,
            resource_group_name=Token().as_string(example_rg.name),
            tags = tag
            )

        TerraformOutput(self, 'vnet_id',
            value=example_vnet.id
        )

app = App()
MyStack(app, "python-azure")

app.synth()