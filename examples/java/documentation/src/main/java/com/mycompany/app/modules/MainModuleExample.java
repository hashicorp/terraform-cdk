package com.mycompany.app.modules;

// DOCS_BLOCK_START:modules-examples
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf.TerraformOutputConfig;
import com.hashicorp.cdktf.TerraformStack;
import software.constructs.Construct;
import imports.my_local_module.MyLocalModule;
import imports.my_local_module.MyLocalModuleConfig;
public class MainModuleExample extends TerraformStack {

    public MainModuleExample(Construct scope, String id){
        super(scope, id);

        MyLocalModule localModule = new MyLocalModule(this, "local-module", MyLocalModuleConfig.builder()
                .ipAddress("127.0.0.1")
                .build()
        );

        new TerraformOutput(this, "dns-server", TerraformOutputConfig.builder()
                .value(localModule.getDnsServerOutputOutput())
                .build()
        );

    }
}
// DOCS_BLOCK_END:modules-examples