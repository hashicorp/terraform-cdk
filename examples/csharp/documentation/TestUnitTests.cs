// DOCS_BLOCK_START:unit-tests
using Xunit;
using HashiCorp.Cdktf; // MyApplicationsAbstraction - Could be a class extending from Construct
using MyCompany.MyApp;
using System;
using System.Collections.Generic;
using docker.Image;
using docker.Container;

namespace MyCompany.MyApp{
  public class TestApplication{

    private static TerraformStack stack = new TerraformStack(Testing.app(), "stack");
    private static MyApplicationsAbstraction appAbstraction = new MyApplicationsAbstraction(stack, "resource");
    private static string synthesized = Testing.synth(stack);

    [Fact]
    public void ShouldContainContainer(){
      Assert.True(Testing.ToHaveResource(synthesized, Container.TfResourceType) );
    }

    [Fact]
    public void shouldUseUbuntuImage(){
      Assert.True(Testing.ToHaveResourceWithProperties(synthesized, Image.TfResourceType, new Dictionary<String, Object>() {
              {"name", "ubuntu:latest"}
      }) );
    }
  }
}
// DOCS_BLOCK_END:unit-tests