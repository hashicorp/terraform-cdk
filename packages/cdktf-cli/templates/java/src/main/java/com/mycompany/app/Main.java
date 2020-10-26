package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;

public class Main extends TerraformStack
{
    public Main(final Construct scope, final String id) {
        super(scope, id);

        // define resources here
    }

    public static void main(String[] args) {
        final App app = new App();
        new Main(app, "{{ $base }}");
        app.synth();
    }
}