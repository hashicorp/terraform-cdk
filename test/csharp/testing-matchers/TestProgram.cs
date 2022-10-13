using Xunit;
using HashiCorp.Cdktf;

using System;
using System.Collections.Generic;

using docker.Container;
using docker.DataDockerImage;
using docker.DataDockerNetwork;
using docker.Config;

namespace MyCompany.MyApp{

    public class MyAppTesting{

        public static MyApp stack = new MyApp(Testing.App(), "stack");
        public static string synthesized = Testing.Synth(stack);

        public static MyApp.MyAppInvalid stackInvalid = new MyApp.MyAppInvalid(Testing.App(), "stack-invalid");

        public static string fullSynthesizedValid = Testing.FullSynth(stack);
        public static string fullSynthesizedInvalid = Testing.FullSynth(stackInvalid);

        
        [Fact]
        public void hasResourcePass(){
            Assert.True(Testing.ToHaveResource(synthesized, Container.TfResourceType) );
        }

        [Fact]
        public void hasResourceFail(){
            Assert.False(Testing.ToHaveResource(synthesized, Config.TfResourceType) );
        }

        [Fact]
        public void hasResourceWithPropertiesPass(){
            Assert.True(Testing.ToHaveResourceWithProperties(synthesized, Container.TfResourceType, new Dictionary<String, Object>() {
                    {"dns_opts", new string[]{"1", "2", "3"}}
                }) );
        }

        [Fact]
        public void hasResourceWithPropertiesFail(){
            Assert.False(Testing.ToHaveResourceWithProperties(synthesized, Container.TfResourceType, new Dictionary<String, Object>() {
                    {"dns_opts", new string[]{"11", "22", "33"}}
                }) );
        }
        
        [Fact]
        public void hasDataPass(){
            Assert.True(Testing.ToHaveDataSource(synthesized, DataDockerImage.TfResourceType) );
        }

        [Fact]
        public void hasDataFail(){
            Assert.False(Testing.ToHaveDataSource(synthesized, DataDockerNetwork.TfResourceType) );
        }

        [Fact]
        public void hasDataWithPropertiesPass(){
            Assert.True(Testing.ToHaveDataSourceWithProperties(synthesized, DataDockerImage.TfResourceType, new Dictionary<String, Object>(){
                {"name", "nginx:latest"}
            }) );
        }

        [Fact]
        public void hasDataWithPropertiesFail(){
            Assert.False(Testing.ToHaveDataSourceWithProperties(synthesized, DataDockerImage.TfResourceType, new Dictionary<String, Object>(){
                {"name", "wrong"}
            }) );
        }

        [Fact]
        public void toBeValidTerraformPass(){
            Assert.True(Testing.ToBeValidTerraform(fullSynthesizedValid) );
        }

        [Fact]
        public void toBeValidTerraformFail(){
            Assert.False(Testing.ToBeValidTerraform(fullSynthesizedInvalid) );
        }
    }
}