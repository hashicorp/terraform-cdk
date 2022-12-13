// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:outputs,outputs-usage,remote-state
import { TerraformLocal, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { App, TerraformOutput } from "cdktf";
// DOCS_BLOCK_END:outputs,outputs-usage,remote-state

// DOCS_BLOCK_START:remote-state
import {
  CloudBackend,
  DataTerraformRemoteState,
  NamedCloudWorkspace,
} from "cdktf";
// DOCS_BLOCK_END:remote-state

// DOCS_BLOCK_START:outputs-usage
import { RandomProvider } from "@cdktf/provider-random/lib/provider";
import { Pet } from "@cdktf/provider-random/lib/pet";
// DOCS_BLOCK_END:outputs-usage

import { Instance } from "@cdktf/provider-aws/lib/instance";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";

export class VariablesStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    // DOCS_BLOCK_START:variables
    const imageId = new TerraformVariable(this, "imageId", {
      type: "string",
      default: "ami-abcde123",
      description: "What AMI to use to create an instance",
    });
    new Instance(this, "hello", {
      ami: imageId.value,
      instanceType: "t2.micro",
    });
    // DOCS_BLOCK_END:variables

    // DOCS_BLOCK_START:locals
    const commonTags = new TerraformLocal(this, "common_tags", {
      Service: "service_name",
      Owner: "owner",
    });

    new Instance(this, "example", {
      ami: "ami-abcde123",
      instanceType: "t2.micro",
      tags: commonTags.expression,
    });
    // DOCS_BLOCK_END:locals
  }
}

export function outputVariablesRunner() {
  // DOCS_BLOCK_START:outputs
  interface OutputVariableStackConfig {
    readonly myDomain: string;
  }

  class OutputVariableStack extends TerraformStack {
    constructor(
      scope: Construct,
      name: string,
      config: OutputVariableStackConfig
    ) {
      super(scope, name);

      const { myDomain } = config;

      new TerraformOutput(this, "my-domain", {
        value: myDomain,
      });
    }
  }

  const app = new App();
  new OutputVariableStack(app, "cdktf-producer", {
    myDomain: "example.com",
  });
  app.synth();
  // DOCS_BLOCK_END:outputs
}

export function outputsUsageRunner() {
  // DOCS_BLOCK_START:outputs-usage
  class OutputsUsageStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
      super(scope, name);

      new RandomProvider(this, "random", {});
      const pet = new Pet(this, "pet", {});

      new TerraformOutput(this, "random-pet", {
        value: pet.id,
      });
    }
  }

  const app = new App();
  new OutputsUsageStack(app, "outputs-usage");
  app.synth();
  // DOCS_BLOCK_END:outputs-usage
}

export function remoteStateRunner() {
  // DOCS_BLOCK_START:remote-state

  class Producer extends TerraformStack {
    constructor(scope: Construct, name: string) {
      super(scope, name);

      new CloudBackend(this, {
        organization: "hashicorp",
        workspaces: new NamedCloudWorkspace("producer"),
      });

      new RandomProvider(this, "random", {});
      const pet = new Pet(this, "pet", {});

      new TerraformOutput(this, "random-pet", {
        value: pet.id,
      });
    }
  }

  class Consumer extends TerraformStack {
    constructor(scope: Construct, name: string) {
      super(scope, name);

      new CloudBackend(this, {
        organization: "hashicorp",
        workspaces: new NamedCloudWorkspace("consumer"),
      });

      const remoteState = new DataTerraformRemoteState(this, "remote-pet", {
        organization: "hashicorp",
        workspaces: {
          name: "producer",
        },
      });

      new TerraformOutput(this, "random-remote-pet", {
        value: remoteState.getString("random-pet"),
      });
    }
  }

  const app = new App();
  new Producer(app, "cdktf-producer");
  new Consumer(app, "cdktf-consumer");
  app.synth();
  // DOCS_BLOCK_END:remote-state
}
