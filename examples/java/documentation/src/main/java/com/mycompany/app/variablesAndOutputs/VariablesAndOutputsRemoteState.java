package com.mycompany.app.variablesAndOutputs;

// DOCS_BLOCK_START:var-out-define-reference-remote-state
import imports.random.provider.RandomProvider;
import imports.random.pet.Pet;

import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import com.hashicorp.cdktf.CloudBackend;
import com.hashicorp.cdktf.CloudBackendConfig;
import com.hashicorp.cdktf.NamedCloudWorkspace;
import com.hashicorp.cdktf.NamedRemoteWorkspace;
import com.hashicorp.cdktf.DataTerraformRemoteState;
import com.hashicorp.cdktf.DataTerraformRemoteStateRemoteConfig;

public class VariablesAndOutputsRemoteState {

    public static class Producer extends TerraformStack{

        public Producer(Construct scope, String id){
            super(scope, id);

            new CloudBackend(this, CloudBackendConfig.builder()
                    .organization("hashicorp")
                    .workspaces(new NamedCloudWorkspace("producer"))
                    .build()
            );

            new RandomProvider(this, "random");
            Pet pet = new Pet(this, "pet");

            new TerraformOutput(this, "random-pet", TerraformOutputConfig.builder()
                    .value(pet.getId())
                    .build()
            );
        }
    }

    public static class Consumer extends TerraformStack{

        public Consumer(Construct scope, String id){
            super(scope, id);

            new CloudBackend(this, CloudBackendConfig.builder()
                    .organization("hashicorp")
                    .workspaces(new NamedCloudWorkspace("consumer"))
                    .build()
            );

            DataTerraformRemoteState remoteState = new DataTerraformRemoteState(this, "remote-pet", DataTerraformRemoteStateRemoteConfig.builder()
                    .organization("hashicorp")
                    .workspaces(new NamedRemoteWorkspace("producer"))
                    .build()
            );
        }
    }
    // DOCS_BLOCK_END:var-out-define-reference-remote-state
    /**
    // DOCS_BLOCK_START:var-out-define-reference-remote-state

    public static void main(String[] args) {
        final App app = new App();
        new Producer(app, "cdktf-producer");
        new Consumer(app, "cdktf-consumer");
        app.synth();
    }
    // DOCS_BLOCK_END:var-out-define-reference-remote-state
     */
    // DOCS_BLOCK_START:var-out-define-reference-remote-state
}
// DOCS_BLOCK_END:var-out-define-reference-remote-state