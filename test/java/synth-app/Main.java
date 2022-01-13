package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.Testing;

import imports.nullprovider.NullProvider;
import imports.nullprovider.Resource;

import imports.random.RandomProvider;
import imports.random.StringResource;

public class Main extends TerraformStack
{
    public Main(final Construct scope, final String id) {
        super(scope, id);

        NullProvider.Builder.create(this, "Null").build();
        Resource resource = Resource.Builder.create(this, "NullResource").build();

        RandomProvider.Builder.create(this, "Random").build();
        StringResource stringResource = StringResource.Builder.create(this, "RandomString").length(42).build();
    }

    public static void main(String[] args) {
        final App app = Testing.stubVersion(App.Builder.create().stackTraces(false).build());
        new Main(app, "java-simple");
        app.synth();
    }
}