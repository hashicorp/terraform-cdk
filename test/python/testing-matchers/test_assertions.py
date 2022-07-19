import pytest
from main import MyStack, MyStackInvalidTerraform
from cdktf import Testing
from imports.docker import Image, Container, DataDockerImage, DataDockerNetwork, Config

class TestAssertions:

    app = Testing.app()
    stack = MyStack(app, "stack")
    synthesized = Testing.synth(stack)
    fullSynthesized = Testing.full_synth(stack)

    appInvalid = Testing.app()
    invalidStack = MyStackInvalidTerraform(appInvalid, "stack-invalid")
    fullSynthesizedInvalid = Testing.full_synth(invalidStack)

    def test_has_resource_pass(self):
        assert Testing.to_have_resource(self.synthesized, Container.TF_RESOURCE_TYPE).pass_

    def test_has_resource_with_properties_pass(self):
        assert Testing.to_have_resource_with_properties(self.synthesized, Container.TF_RESOURCE_TYPE, {
            "privileged": False,
            "ports": [
                {
                    "external": 8000,
                    "internal": 80,
                    "ip": "0.0.0.0",
                    "protocol": "tcp"
                }
            ],
        }).pass_

    def test_has_resource_fail(self):
        assert Testing.to_have_resource(self.synthesized, Config.TF_RESOURCE_TYPE).pass_ is False

    def test_has_resource_with_properties_fail(self):
        assert Testing.to_have_resource_with_properties(self.synthesized, Container.TF_RESOURCE_TYPE, {
            "privileged": True,
            "ports": {
                "internal": 100,
                "external": 1000,
                "ip": "0.0.0.0",
                "protocol": "tcp"
            }
        }).pass_ is False

    def test_has_data_pass(self):
        assert Testing.to_have_data_source(self.synthesized, DataDockerImage.TF_RESOURCE_TYPE).pass_

    def test_has_data_with_properties_pass(self):
        assert Testing.to_have_data_source_with_properties(self.synthesized, DataDockerImage.TF_RESOURCE_TYPE, {
            "name": "nginx:latest"
        }).pass_

    def test_has_data_fail(self):
        assert Testing.to_have_data_source(self.synthesized, DataDockerNetwork.TF_RESOURCE_TYPE).pass_ is False
        

    def test_has_data_with_properties_fail(self):
        assert Testing.to_have_data_source_with_properties(self.synthesized, DataDockerImage.TF_RESOURCE_TYPE, {
            "name": "wrong"
        }).pass_ is False

    def test_to_be_valid_terraform_pass(self):
        assert Testing.to_be_valid_terraform(self.fullSynthesized).pass_

    def test_to_be_valid_terraform_fail(self):
        app = Testing.app()
        stack = MyStackInvalidTerraform(app, "stack")
        synthed = Testing.full_synth(stack)
        assert Testing.to_be_valid_terraform(synthed).pass_ is False