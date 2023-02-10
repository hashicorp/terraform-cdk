#!/usr/bin/env python
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

import os
from constructs import Construct
from cdktf import App, TerraformStack, Testing, TerraformAsset, AssetType, TerraformOutput, LocalBackend
from imports.null.provider import NullProvider
from imports.null.resource import Resource


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)
        LocalBackend(self, path="terraform.tfstate")

        NullProvider(self, "null")
        Resource(self, "null-resource")

        fixture = TerraformAsset(self, 'fixture', path=os.path.abspath(
            "./fixture.txt"), asset_hash="hash")
        fixtures = TerraformAsset(self, 'fixtures', path=os.path.abspath(
            "./fixtures"), asset_hash="hash", type=AssetType.ARCHIVE)

        TerraformOutput(self, 'fixture-output', value=fixture.path)
        TerraformOutput(self, 'fixtures-output', value=fixtures.path)


app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-assets")

app.synth()
