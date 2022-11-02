package com.mycompany.app.dataSources;

import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.NamedRemoteWorkspace;
import software.constructs.Construct;

import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;

// DOCS_BLOCK_START:data-sources-remote-state-data-source
import com.hashicorp.cdktf.DataTerraformRemoteState;
import com.hashicorp.cdktf.DataTerraformRemoteStateRemoteConfig;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;

public class DataSourcesRemoteState extends TerraformStack {

    public DataSourcesRemoteState(Construct scope, String id) {
        super(scope, id);
        // DOCS_BLOCK_END:data-sources-remote-state-data-source
        AwsProvider provider = new AwsProvider(this, "provider", AwsProviderConfig.builder()
                .region("us-east-1")
                .build());
        // DOCS_BLOCK_START:data-sources-remote-state-data-source

        // ....
        DataTerraformRemoteState remoteState = new DataTerraformRemoteState(this, "state",
                DataTerraformRemoteStateRemoteConfig.builder()
                        .organization("hashicorp")
                        .workspaces(new NamedRemoteWorkspace("vpc-prod"))
                        .build());

        new Instance(this, "foo", InstanceConfig.builder()
                // ....
                .subnetId(remoteState.getString("subnet_id"))
                .build());
    }
}
// DOCS_BLOCK_END:data-sources-remote-state-data-source
