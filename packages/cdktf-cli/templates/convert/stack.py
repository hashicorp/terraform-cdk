#!/usr/bin/env python
from constructs import Construct
from cdktf import TerraformStack
# {{ imports }}


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # {{ code }}
