package com.mycompany.app.remoteBackends;

import com.hashicorp.cdktf.*;
import software.constructs.Construct;

import java.util.HashMap;

// DOCS_BLOCK_START:remote-backend-migrate
public class MainRemoteBackend extends TerraformStack {

    public MainRemoteBackend(Construct scope, String id) {
        super(scope, id);

        new TerraformOutput(this, "dns-server", TerraformOutputConfig.builder()
                .value("local")
                .build()
        );
    }

    public static void main(String[] args) {
        final App app = new App();
        MainRemoteBackend stack = new MainRemoteBackend(app, "local-to-cloud-backend");
        new CloudBackend(stack, CloudBackendConfig.builder()
                .hostname("app.terraform.io")
                .organization("company")
                .workspaces(new NamedCloudWorkspace("my-app-prod"))
                .build()
        );
        app.synth();
        // DOCS_BLOCK_END:remote-backend-migrate

        // DOCS_BLOCK_START:remote-backend-escape-hatches
        stack.addOverride("terraform.backend", new HashMap<String, HashMap>() {
            {
                put("atlas", new HashMap<String, String>() {
                    {
                        put("name", "example_corp/networking-prod");
                        put("address", "https://app.terraform.io");
                    }
                });
            }
        });
        // DOCS_BLOCK_END:remote-backend-escape-hatches
        // DOCS_BLOCK_START:remote-backend-migrate
    }
}
// DOCS_BLOCK_END:remote-backend-migrate
