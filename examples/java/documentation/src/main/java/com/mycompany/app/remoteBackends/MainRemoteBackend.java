package com.mycompany.app.remoteBackends;

import com.hashicorp.cdktf.TerraformLocal;
import com.hashicorp.cdktf.TerraformStack;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;
import software.constructs.Construct;

import java.util.HashMap;
import java.util.Map;

public class MainRemoteBackend extends TerraformStack {

    public MainRemoteBackend(Construct scope, String id) {
        super(scope, id);

    }
}
