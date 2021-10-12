package com.mycompany.app;

import java.util.Arrays;
import java.util.ArrayList;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformStack;

import imports.azurerm.AzurermProvider;
import imports.azurerm.AzurermProviderFeatures;
import imports.azurerm.VirtualNetwork;

import software.constructs.Construct;

public class Main extends TerraformStack {
    public Main(final Construct scope, final String id) {
        super(scope, id);

        AzurermProvider.Builder.create(this, "AzureRm")
            .features(AzurermProviderFeatures.builder().build())
            .build();

        VirtualNetwork.Builder.create(this, "TfVnet")
            .location("uksouth")
            .addressSpace(Arrays.asList("10.0.0.0/24"))
            .name("TerraformVNet")
            .resourceGroupName("<YOUR_RESOURCE_GROUP_NAME>")
            .build();
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "azure");
        app.synth();
    }
}