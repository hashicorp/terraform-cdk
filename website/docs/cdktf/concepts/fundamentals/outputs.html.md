---
layout: "docs"
page_title: "Outputs"
sidebar_current: "cdktf"
description: "Outputs allow you export structured data about resources. Learn to define them in CDK for Terraform."
---

# Outputs

You can define [Terraform outputs](https://www.terraform.io/docs/configuration-0-11/outputs.html) to export structured data about your resources. Terraform prints the output value for the user after it applies infrastructure changes, and you can use this information as a data source for other [Terraform workspaces](https://www.terraform.io/docs/language/state/workspaces.html).

## When to use outputs

Outputs are useful to make any value of a Terraform Resource or Data Source available for further consumption. This might be just you wanting to get the URL of the server which was just provisioned. But it's also very handy to allow data sharing between `TerraformStacks`. This applies in particular to data which is depending on the provisioned resources and therefore not known at compile time.

For values which are known at compile time (like static inputs such as user or domain names), it's usually recommended to supply this data as direct inputs to the stacks.

```ts
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";

export interface MyStackProps {
  readonly myDomain: string;
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string, props: MyStackProps) {
    super(scope, name);

    const { myDomain } = props;

    new TerraformOutput(this, "my-domain", {
      value: myDomain,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-producer", {
  myDomain: "example.com",
});
app.synth();
```

## Define Outputs

In TypeScript, a Terraform output for a Pet resource of the Randome provider can be expressed by `TerraformOutput`.

```typescript
import * as random from "@cdktf/provider-random";

import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new random.RandomProvider(this, "random", {});
    const pet = new random.Pet(this, "pet", {});

    new TerraformOutput(this, "random-pet", {
      value: pet.id,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-demo");
app.synth();
```

The `TerraformOutput` synthesizes to the following:

```json
"output": {
  "random-pet": {
    "value": "${random_pet.pet.id}"
  }
}
```

When deployed via `cdktf deploy`, you'll see an output like the following:

```
Deploying Stack: cdktf-demo
Resources
 ✔ RANDOM_PET           pet                 random_pet.pet

Summary: 1 created, 0 updated, 0 destroyed.

Output: random-pet = choice-haddock
```

Since these are plain Terraform outputs, these can be used in the same fashion as Terraform outputs (thinking about Terraform Cloud / TFE but also all the other possible backends)

## Define & Reference Outputs via Remote State

A common use case for outputs is data sharing between stacks. In particular for data, which is not known at compile time.

```ts
import * as random from "@cdktf/provider-random";

import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  TerraformOutput,
  RemoteBackend,
  DataTerraformRemoteState,
} from "cdktf";

class Producer extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new RemoteBackend(this, {
      organization: "hashicorp",
      workspaces: {
        name: "producer",
      },
    });

    new random.RandomProvider(this, "random", {});
    const pet = new random.Pet(this, "pet", {});

    new TerraformOutput(this, "random-pet", {
      value: pet.id,
    });
  }
}

class Consumer extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new RemoteBackend(this, {
      organization: "hashicorp",
      workspaces: {
        name: "consumer",
      },
    });

    const remoteState = new DataTerraformRemoteState(this, "remote-pet", {
      organization: "hashicorp",
      workspaces: {
        name: "producer",
      },
    });

    new TerraformOutput(this, "random-remote-pet", {
      value: remoteState.getString("id"),
    });
  }
}

const app = new App();
new Producer(app, "cdktf-producer");
new Consumer(app, "cdktf-consumer");
app.synth();
```
