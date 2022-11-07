// DOCS_BLOCK_START:aspect
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using kubernetes.Provider;
using MyConstructs;

namespace MyCompany.MyAspectsStack
{
    class MyAspectsStack : TerraformStack
    {
        public MyAspectsStack(Construct scope, string name) : base(scope, name)
        {
            new KubernetesProvider(this, "kind", new KubernetesProviderConfig {
                ConfigPath = Path.Join(Environment.CurrentDirectory, "../kubeconfig.yaml")
            });
            new KubernetesWebAppDeployment(this, "deployment", new Dictionary<string, object> {
                { "image", "nginx:latest" },
                { "replicas", 2 },
                { "app", "myapp" },
                { "component", "frontend" },
                { "environment", "dev" }
            });
        }
    }
}
// DOCS_BLOCK_END:aspect