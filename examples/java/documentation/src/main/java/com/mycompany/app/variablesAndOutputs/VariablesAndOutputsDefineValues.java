package com.mycompany.app.variablesAndOutputs;

// DOCS_BLOCK_START:var-out-define-output-values
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import imports.random.pet.Pet;
import imports.random.provider.RandomProvider;

public class VariablesAndOutputsDefineValues extends TerraformStack {

    public VariablesAndOutputsDefineValues(Construct scope, String id) {
        super(scope, id);

        new RandomProvider(this, "random");

        Pet pet = new Pet(this, "pet");

        new TerraformOutput(this, "random-pet", TerraformOutputConfig.builder()
                .value(pet.getId())
                .build());
    }// DOCS_BLOCK_END:var-out-define-output-values
    /**
    // DOCS_BLOCK_START:var-out-define-output-values

    public static void main(String[] args) {
        final App app = new App();
        new VariablesAndOutputsDefineValues(app, "cdktf-demo");
        app.synth();
    }
    // DOCS_BLOCK_END:var-out-define-output-values
     */
    // DOCS_BLOCK_START:var-out-define-output-values
}
// DOCS_BLOCK_END:var-out-define-output-values