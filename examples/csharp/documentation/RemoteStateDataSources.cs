// DOCS_BLOCK_START:remote-state-datasources
using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.Instance;

namespace Examples
{
    class RemoteStateDataSourceStack : TerraformStack
    {
        public RemoteStateDataSourceStack(Construct scope, string name) : base(scope, name)
        {

            new AwsProvider(this, "aws", new AwsProviderConfig {
                Region = "eu-central-1"
            });

            DataTerraformRemoteState remoteState = new DataTerraformRemoteState(this, "remoteState", new DataTerraformRemoteStateRemoteConfig {
                Organization = "hashicorp",
                Workspaces = new NamedRemoteWorkspace("vpc-prod")
            });

            new Instance(this, "foo", new InstanceConfig {
                // ....
                SubnetId = remoteState.GetString("subnet_id")
            });
        }
    }
}
// DOCS_BLOCK_END:remote-state-datasources