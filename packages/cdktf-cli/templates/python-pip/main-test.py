import pytest
from cdktf import Testing, TerraformStack

# The tests below are example tests, you can find more information at
# https://cdk.tf/testing


class TestMain:

    stack = TerraformStack(Testing.app(), "stack")
    #app_abstraction = MyApplicationsAbstraction(stack, "app-abstraction")
    #synthesized = Testing.synth(stack)

    # def test_should_contain_container(self):
    #    assert Testing.to_have_resource(self.synthesized, Container.TF_RESOURCE_TYPE)

    # def test_should_use_an_ubuntu_image(self):
    #    assert Testing.to_have_resource_with_properties(self.synthesized, Image.TF_RESOURCE_TYPE, {
    #        "name": "ubuntu:latest",
    #    })

    # def test_check_validity(self):
    #    assert Testing.to_be_valid_terraform(Testing.full_synth(stack))
