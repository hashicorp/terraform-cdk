// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:modules-install,modules-create,modules-local
import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
// DOCS_BLOCK_END:modules-install,modules-create,modules-local

// DOCS_BLOCK_START:modules-create
import { TerraformHclModule } from "cdktf";
// DOCS_BLOCK_END:modules-create

// DOCS_BLOCK_START:modules-install
import { Vpc } from "./.gen/modules/terraform-aws-modules/aws/vpc";
// DOCS_BLOCK_END:modules-install

// DOCS_BLOCK_START:modules-local
import { TerraformOutput } from "cdktf";

// This module can come from a registry or through a local / remote reference
import { MyLocalModule } from "./.gen/modules/my-local-module";
// DOCS_BLOCK_END:modules-local

// DOCS_BLOCK_START:modules-create,modules-install,modules-local

export class ModulesStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const provider = new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // DOCS_BLOCK_END:modules-create,modules-install,modules-local

    // DOCS_BLOCK_START:modules-create
    new TerraformHclModule(this, "Vpc", {
      source: "terraform-aws-modules/vpc/aws",
      // Note: variables has no types for its inputs.
      // When using this for other modules consult the docs of the module
      // to ensure the arguments are correct.
      variables: {
        name: "my-vpc",
        cidr: "10.0.0.0/16",
        azs: ["us-west-2a", "us-west-2b", "us-west-2c"],
        private_subnets: ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
        public_subnets: ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
        enable_nat_gateway: true,
      },
      providers: [provider],
    });
    // DOCS_BLOCK_END:modules-create

    // DOCS_BLOCK_START:modules-install
    new Vpc(this, "MyVpc", {
      name: "my-vpc",
      cidr: "10.0.0.0/16",
      azs: ["us-west-2a", "us-west-2b", "us-west-2c"],
      privateSubnets: ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
      publicSubnets: ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
      enableNatGateway: true,
    });
    // DOCS_BLOCK_END:modules-install

    // DOCS_BLOCK_START:modules-local
    const localModule = new MyLocalModule(this, "local-module", {
      ipAddress: "127.0.0.1",
    });

    new TerraformOutput(this, "dns-server", {
      value: localModule.dnsServerOutput,
    });
    // DOCS_BLOCK_END:modules-local

    // DOCS_BLOCK_START:modules-create,modules-install,modules-local
  }
}
// DOCS_BLOCK_END:modules-create,modules-install,modules-local
