// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// DOCS_BLOCK_START:single-stack,multiple-stacks,cross-stack-reference
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
// DOCS_BLOCK_END:single-stack,multiple-stacks,cross-stack-reference

// DOCS_BLOCK_START:cross-stack-reference
import { Vpc } from "./constructs/vpc";
import { DockerBackend } from "./constructs/docker-backend";
// DOCS_BLOCK_END:cross-stack-reference

import { TerraformLocal, TerraformOutput } from "cdktf";

// Formatting space for the docs
// DOCS_BLOCK_START:single-stack,multiple-stacks,cross-stack-reference

// DOCS_BLOCK_END:single-stack,multiple-stacks,cross-stack-reference

export function singleStackRunner() {
  // DOCS_BLOCK_START:single-stack
  class MySingleStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new AwsProvider(this, "aws", {
        region: "us-east-1",
      });

      new Instance(this, "Hello", {
        ami: "ami-2757f631",
        instanceType: "t2.micro",
      });
    }
  }

  const singleStackApp = new App();
  new MySingleStack(singleStackApp, "a-single-stack");
  singleStackApp.synth();
  // DOCS_BLOCK_END:single-stack
}

export function multiStackRunner() {
  // DOCS_BLOCK_START:multiple-stacks
  interface MyMultiStackConfig {
    environment: string;
    region?: string;
  }

  class MyMultiStack extends TerraformStack {
    constructor(scope: Construct, id: string, config: MyMultiStackConfig) {
      super(scope, id);

      const { region = "us-east-1" } = config;

      new AwsProvider(this, "aws", {
        region,
      });

      new Instance(this, "Hello", {
        ami: "ami-2757f631",
        instanceType: "t2.micro",
        tags: {
          environment: config.environment,
        },
      });
    }
  }

  const multiStackApp = new App();
  new MyMultiStack(multiStackApp, "multiple-stacks-dev", {
    environment: "dev",
  });
  new MyMultiStack(multiStackApp, "multiple-stacks-staging", {
    environment: "staging",
  });
  new MyMultiStack(multiStackApp, "multiple-stacks-production-us", {
    environment: "production",
    region: "us-east-1",
  });
  new MyMultiStack(multiStackApp, "multiple-stacks-production-eu", {
    environment: "production",
    region: "eu-central-1",
  });
  multiStackApp.synth();
  // DOCS_BLOCK_END:multiple-stacks
}

export function crossStackReferencesRunner() {
  // DOCS_BLOCK_START:cross-stack-reference
  class VPCStack extends TerraformStack {
    public vpc: Vpc;
    constructor(scope: Construct, id: string, public region = "us-east-1") {
      super(scope, id);

      new AwsProvider(this, "aws", {
        region,
      });

      this.vpc = new Vpc(this, "vpc", {});
    }
  }

  interface BackendStackConfig {
    region: string;
    vpcId: string;
    dockerImage: string;
  }

  class BackendStack extends TerraformStack {
    constructor(scope: Construct, id: string, config: BackendStackConfig) {
      super(scope, id);

      const { region, vpcId, dockerImage } = config;

      new AwsProvider(this, "aws", {
        region,
      });

      new DockerBackend(this, "docker-backend", {
        vpcId,
        dockerImage,
      });
    }
  }

  const crossStackReferenceApp = new App();
  const origin = new VPCStack(crossStackReferenceApp, "origin-stack");
  new BackendStack(crossStackReferenceApp, "target-stack", {
    region: origin.region,
    vpcId: origin.vpc.id,
    dockerImage: "org/my-image:latest",
  });

  crossStackReferenceApp.synth();
  // DOCS_BLOCK_END:cross-stack-reference
}

export function stackDependenciesRunner() {
  // Write a stack that exposes a few resources
  class MySourceStack extends TerraformStack {
    public instance: Instance;
    constructor(scope: Construct, id: string, ami: string) {
      super(scope, id);

      new AwsProvider(this, "aws", {
        region: "us-east-1",
      });

      this.instance = new Instance(this, "Hello", {
        ami,
        instanceType: "t2.micro",
      });
    }
  }

  class MyDependencyStack extends TerraformStack {
    public allResources: TerraformLocal;
    constructor(scope: Construct, id: string, dependencies: MySourceStack[]) {
      super(scope, id);

      // DOCS_BLOCK_START:stack-dependencies
      this.allResources = new TerraformLocal(this, "merged_items", [
        sourceStackA.instance.id,
        sourceStackB.instance.id,
      ]);
      // DOCS_BLOCK_END:stack-dependencies

      new TerraformOutput(this, "all_resources", {
        value: this.allResources,
      });
    }
  }

  const dependencyApp = new App();
  const sourceStackA = new MySourceStack(
    dependencyApp,
    "source-stack-a",
    "ami-2757f631"
  );
  const sourceStackB = new MySourceStack(
    dependencyApp,
    "source-stack-b",
    "ami-2757f632"
  );

  new MyDependencyStack(dependencyApp, "dependency-stack", [
    sourceStackA,
    sourceStackB,
  ]);

  dependencyApp.synth();
}

export function escapeHatchesRunner() {
  class MySingleStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);

      new AwsProvider(this, "aws", {
        region: "us-east-1",
      });

      new Instance(this, "Hello", {
        ami: "ami-2757f631",
        instanceType: "t2.micro",
      });
    }
  }

  const overrideApp = new App();
  const stack = new MySingleStack(overrideApp, "a-single-override-stack");
  // DOCS_BLOCK_START:stack-escape-hatches
  stack.addOverride("terraform.backend", {
    remote: {
      organization: "test",
      workspaces: {
        name: "test",
      },
    },
  });
  // DOCS_BLOCK_END:stack-escape-hatches
  overrideApp.synth();
}
