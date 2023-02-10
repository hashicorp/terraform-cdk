// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0

using System;
using Providers.Null.Provider;
using NullResource = Providers.Null.Resource;
using Constructs;
using HashiCorp.Cdktf;

namespace MyCompany.MyApp
{
    class MyApp : TerraformStack
    {
        public MyApp(Construct scope, string id) : base(scope, id)
        {
            new LocalBackend(this, new LocalBackendConfig {
                Path = "terraform.tfstate"
            });
            new NullProvider(this, "Null");
            NullResource.Resource resource = new NullResource.Resource(this, "null", new NullResource.ResourceConfig {});
        }

        public static void Main(string[] args)
        {
            App app = Testing.StubVersion(new App(new AppConfig { StackTraces = false }));
            new MyApp(app, "csharp-simple");
            app.Synth();
        }
    }
}