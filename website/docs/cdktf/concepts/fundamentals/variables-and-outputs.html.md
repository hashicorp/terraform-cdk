---
layout: "docs"
page_title: "Variables and Outputs"
sidebar_current: "cdktf"
description: "TBD"
---

# Variables and Outputs

Terraform configurations are written in either HashiCorp Configuration Language (HCL) syntax or JSON. Because neither of these is a programming language, Terraform has has developed ways to enable users to request and publish named values. These are:

- [**Input Variables:**](#input-variables) These are like function arguments.
- [**Local Values**](#local-values): These are like a function's temporary local variables.
- [**Output Values**](#output-values): These are like function return values.

You may need to occasionally use these elements in your CDKTF application instead of passing data through the conventions available in your preferred programming language.  

## Input Variables

You can define [Terraform variables](https://www.terraform.io/docs/configuration/variables.html) as input parameters to customize stacks and [modules](/fundamentals/modules.html). For example, rather than hardcoding the number and type of AWS EC2 instances to provision, you can define a variable that lets users change these parameters based on their needs.

### When to use Input Variables

Variables are useful when you plan to synthesize your CDKTF application into a JSON configuration file for Terraform. For example, when you are planning to store configurations and run Terraform inside [Terraform Cloud](https://www.terraform.io/cloud).

If you plan to use CDK for Terraform to manage your infrastructure, then we recommend using your language's APIs to consume the data you would normally pass through Terraform variables. You can read from disk (synchronously) or from the environment variables, just as you would in any normal program.


### Define Input Variables

TODO: Can we get a description of what is happening here?

```typescript
const imageId = new TerraformVariable(this, "imageId", {
  type: "string",
  default: "ami-abcde123",
  description: "What AMI to use to create an instance",
});
new Instance(this, "hello", {
  ami: imageId.value,
  instanceType: "t2.micro",
});
```

TODO: When this gets synthesized, can we tell users what's going to happen? Is it automatically going to create the `tfvars` file?


## Local Values

A [Terraform local](https://www.terraform.io/docs/configuration/locals.html) assigns a name to an expression to allow repeated usage. They can be thought of similar to a local variable, and as such, can often be replaced by one.

### When to Use Local values

TODO: Write something here.

### Define Local Values

In TypeScript, a Terraform local is expressed by `TerraformLocal`.

```typescript
const commonTags = new TerraformLocal(this, "common_tags", {
  Service: "service_name",
  Owner: "owner",
});

new Instance(this, "example", {
  tags: commonTags.expression,
});
```

The `TerraformLocal` synthesizes to the following:

```json
"locals": {
    "common_tags": {
      "Service": "service_name",
      "Owner": "owner"
    }
}
...
"resource": {
  "aws_instance": {
    "example": {
      "tags": "${local.common_tags}"
    }
  }
}
```


## Outputs

You can define [Terraform outputs](https://www.terraform.io/docs/configuration-0-11/outputs.html) to export structured data about your resources. Terraform prints the output value for the user after it applies infrastructure changes, and you can use this information as a data source for other [Terraform workspaces](https://www.terraform.io/docs/language/state/workspaces.html).

### When to use Output Values

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

### Define Outputs

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


### Define & Reference Outputs via Remote State

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
