/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app;

import software.constructs.Construct;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;


public class Main
{
    public static void main(String[] args) {
        final App app = new App();
        new MainStack(app, "modules-not-working");
        app.synth();
    }
}