#!/usr/bin/env python
import os
from constructs import Construct
from cdktf import App, TerraformStack, Testing, TerraformAsset, AssetType, TerraformOutput
from imports.null import NullProvider, Resource

class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        NullProvider(self, "null")
        Resource(self, "null-resource")

        fixture = TerraformAsset(self, 'fixture', path=os.path.abspath("./fixture.txt"), assetHash="hash")
        fixtures = TerraformAsset(self, 'fixtures', path=os.path.abspath("./fixtures"), assetHash="hash", type=AssetType.ARCHIVE)

        TerraformOutput(self, 'fixture-output', value=fixture.path)
        TerraformOutput(self, 'fixtures-output', value=fixtures.path)

app = Testing.stub_version(App(stack_traces=False))
MyStack(app, "python-assets")

app.synth()