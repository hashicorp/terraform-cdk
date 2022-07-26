using Xunit;
using HashiCorp.Cdktf;
using System;
using System.Collections.Generic;

namespace MyCompany.MyApp{
    // The tests below are example tests, you can find more information at
    // https://cdk.tf/testing
    public class TestProgram{
        
        [Fact]
        public void myAppTest(){
            Assert.True(true);
        }
        
        //private static TerraformStack stack = new TerraformStack(Testing.app(), "stack");
        //private static MyApplicationsAbstraction appAbstraction = new MyApplicationsAbstraction(stack, "construct");
        //private static string synthesized = Testing.synth(stack);

        //[Fact]
        //public void CheckValidity(){
        //    Assert.True(Testing.ToBeValidTerraform(Testing.FullSynth(stack)) );
        //}

        //[Fact]
        //public void shouldContainContainer(){
        //    Assert.True(Testing.ToHaveResource(synthesized, Container.TfResourceType) );
        //}

        //[Fact]
        //public void shouldUseUbuntuImage(){
        //    Assert.True(Testing.ToHaveResourceWithProperties(synthesized, Image.TfResourceType, new Dictionary<String, Object>() {
        //       {"name", "ubuntu:latest"}
        //    }) );
        //}
    }

}