package com.mycompany.app.remoteBackends;

// DOCS_BLOCK_START:remote-backend-define
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.CloudBackend;
import com.hashicorp.cdktf.CloudBackendConfig;
import com.hashicorp.cdktf.NamedCloudWorkspace;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;

public class MainRemoteBackendDefine extends TerraformStack {

    public MainRemoteBackendDefine(Construct scope, String id) {
        super(scope, id);

        new CloudBackend(this, CloudBackendConfig.builder()
                .hostname("app.terraform.io")
                .organization("company")
                .workspaces(new NamedCloudWorkspace("my-app-prod"))
                .build()
        );

        new TerraformOutput(this, "dns-server", TerraformOutputConfig.builder()
                .value("hello-world")
                .build()
        );
    }
}
// DOCS_BLOCK_END:remote-backend-define