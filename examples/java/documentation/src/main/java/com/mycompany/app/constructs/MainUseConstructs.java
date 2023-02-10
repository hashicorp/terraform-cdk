/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.constructs;


import com.hashicorp.cdktf.App;
import com.mycompany.app.assets.MyAssetStack;

import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;

// DOCS_BLOCK_START:constructs-use-constructs
import java.nio.file.Paths;
import imports.kubernetes.provider.KubernetesProvider;
import imports.kubernetes.provider.KubernetesProviderConfig;
import com.mycompany.app.myconstructs.KubernetesWebAppDeployment;
import com.mycompany.app.myconstructs.KubernetesWebAppDeploymentConfig;


public class MainUseConstructs extends TerraformStack {

    public MainUseConstructs(Construct scope, String name){
        super(scope, name);

        new KubernetesProvider(this, "kind", KubernetesProviderConfig.builder()
                .configPath(Paths.get(System.getProperty("user.dir"), "..", "kubeconfig.yaml").toString())
                .build()
        );

        new KubernetesWebAppDeployment(this, "deployment",  KubernetesWebAppDeploymentConfig.builder()
                .image("nginx:latest")
                .replicas(2)
                .app("myapp")
                .components("frontend")
                .environments("dev")
                .build()
        );
    }

    // DOCS_BLOCK_END:constructs-use-constructs
    /**
    // DOCS_BLOCK_START:constructs-use-constructs
    public static void main(String[] args) {
        final App app = new App();
        new MainUseConstructs(app, "demo");
        app.synth();
    }
    // DOCS_BLOCK_END:constructs-use-constructs
     */
    // DOCS_BLOCK_START:constructs-use-constructs
}
// DOCS_BLOCK_END:constructs-use-constructs
