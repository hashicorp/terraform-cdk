package com.mycompany.app.dataSources;

import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.IRemoteWorkspace;
import software.constructs.Construct;

// DOCS_BLOCK_START:data-sources-remote-state-data-source
import com.hashicorp.cdktf.DataTerraformRemoteState;
import com.hashicorp.cdktf.DataTerraformRemoteStateRemoteConfig;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;

public class DataSourcesRemoteState extends TerraformStack {

    public DataSourcesRemoteState(Construct scope, String id){
        super(scope, id);

        //....
        DataTerraformRemoteState remoteState = new DataTerraformRemoteState(this, "state", DataTerraformRemoteStateRemoteConfig.builder()
                .organization("hashicorp")
                .workspace("vpc-prod")
                .build()
        );

        new Instance(this, "foo", InstanceConfig.builder()
                //....
                .subnetId(remoteState.getString("subnet_id"))
                .build()
        );
    }
}
// DOCS_BLOCK_END:data-sources-remote-state-data-source
