/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

// DOCS_BLOCK_START:hcl-interop
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import com.hashicorp.cdktf.TerraformVariable;
import com.hashicorp.cdktf.TerraformVariableConfig;
import com.hashicorp.cdktf.App;
import imports.random.provider.RandomProvider;
import imports.random.pet.Pet;
import imports.random.pet.PetConfig;

public class MainHCL extends TerraformStack {

    public MainHCL(Construct scope, String id) {
        super(scope, id);

        new RandomProvider(this, "default");
        TerraformVariable petNameLength = new TerraformVariable(this, "petNameLength", TerraformVariableConfig.builder()
                .type("number")
                .defaultValue(2)
                .description("Pet name length")
                .build());

        Pet myPet = new Pet(this, "example", PetConfig.builder()
                .length(petNameLength.getNumberValue())
                .build());

        new TerraformOutput(this, "name", TerraformOutputConfig.builder()
                .value(myPet.getId())
                .build());
    }
    // DOCS_BLOCK_END:hcl-interop
    /**
    // DOCS_BLOCK_START:hcl-interop

    public static void main(String[] args) {
        final App app = new App();
        new MainHCL(app, "random-pet-module");
        app.synth();
    }
    // DOCS_BLOCK_END:hcl-interop
     */
    // DOCS_BLOCK_START:hcl-interop
}
// DOCS_BLOCK_END:hcl-interop