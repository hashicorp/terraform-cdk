# DOCS_BLOCK_START:unit-tests
import pytest
from cdktf import TerraformStack, Testing
from imports.docker.image import Image
from imports.docker.container import Container
from unit_test import MyApplicationsAbstraction # Could be a class extending from Construct

class TestApplication:

  stack = TerraformStack(Testing.app(), "stack")
  app_abstraction = MyApplicationsAbstraction(stack, "app-abstraction")
  synthesized = Testing.synth(stack)

  

  def test_should_contain_container(self):
    assert Testing.to_have_resource(self.synthesized, Container.TF_RESOURCE_TYPE)

  def test_should_use_an_ubuntu_image(self):
    assert Testing.to_have_resource_with_properties(self.synthesized, Image.TF_RESOURCE_TYPE, {
            "name": "ubuntu:latest",
    })
# DOCS_BLOCK_END:unit-tests