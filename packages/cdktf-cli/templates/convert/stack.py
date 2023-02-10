#!/usr/bin/env python
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

from constructs import Construct
from cdktf import TerraformStack
# {{ imports }}


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # {{ code }}
