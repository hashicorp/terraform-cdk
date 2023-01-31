// DOCS_BLOCK_START:var-out-define-reference-remote-state
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using random.Provider;
using random.Pet;

namespace Examples
{
    class Producer : TerraformStack
    {
        public Producer(Construct scope, string name) : base(scope, name)
        {
            new CloudBackend(this, new CloudBackendConfig {
                Organization = "hashicorp",
                Workspaces = new NamedCloudWorkspace("producer"),
            });

            new RandomProvider(this, "random", new RandomProviderConfig());
            var pet = new Pet(this, "pet", new PetConfig());

            new TerraformOutput(this, "random-pet", new TerraformOutputConfig {
                Value = pet.Id,
            });
        }
    }

    class Consumer : TerraformStack
    {
        public Consumer(Construct scope, string name) : base(scope, name)
        {
            new CloudBackend(this, new CloudBackendConfig {
                Organization = "hashicorp",
                Workspaces = new NamedCloudWorkspace("consumer"),
            });

            DataTerraformRemoteState remoteState = new DataTerraformRemoteState(this, "remote-state", new DataTerraformRemoteStateRemoteConfig {
                Organization = "hashicorp",
                Workspaces = new NamedRemoteWorkspace("producer"),
            });

            new TerraformOutput(this, "random-remote-pet", new TerraformOutputConfig {
                Value = remoteState.GetString("random-pet"),
            });
        }
    }

    class Main {
// DOCS_BLOCK_END:var-out-define-reference-remote-state
/*
// DOCS_BLOCK_START:var-out-define-reference-remote-state
        public static void Main(string[] args)
        {
            App app = new App();
            new Producer(app, "cdktf-producer");
            new Consumer(app, "cdktf-consumer");
            app.Synth();
        }
// DOCS_BLOCK_END:var-out-define-reference-remote-state
*/
// DOCS_BLOCK_START:var-out-define-reference-remote-state
    }
    
}
// DOCS_BLOCK_END:var-out-define-reference-remote-state
