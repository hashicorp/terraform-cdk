# App / Stacks Concept

> **Hands-on:** Try the [Deploy Multiple Lambda Functions with TypeScript](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda?in=terraform/cdktf) tutorial on HashiCorp Learn. This tutorial guides you through a multi-stack application.

In CDK for Terraform we have the concept of an Application which consists of one or more Stacks.

## Constructs

CDK for Terraform apps are structured as a tree of [constructs](https://github.com/aws/constructs). The classes `App`, `TerraformStack`, `TerraformResource` and `Resource` are all deriving from `Construct` and are therefore represented as a node in the application tree, where the `App` node is the root.

## Application

The app is host of stacks and the root node in the constructs tree. It can be used to provide global configuration to each stack and underlying constructs.

### App Context

One option to provide global configuration is the app `context`, which can be accessed in any construct within the app.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
      tags: {
        myConfig: this.constructNode.getContext("myConfig"),
      },
    });
  }
}

const app = new App({ context: { myConfig: "config" } });
new MyStack(app, "hello-cdktf");
app.synth();
```

## Stack

A stack represents a collection of infrastructure which will be synthesized as a dedicated Terraform configuration. In comparision to the Terraform CLI, a Stack is equal to a dedicated working directory. Stacks are useful to separate the state management within an application.

## A single Stack

The following example will synthesize a single Terraform configuration in the configured output folder. When running `cdktf synth` we'll find the synthesized Terraform configuration in the folder `cdktf.out/stacks/a-single-stack`

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
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

const app = new App();
new MyStack(app, "a-single-stack");
app.synth();
```

## Multiple Stacks

The following example will synthesize multiple Terraform configurations in the configured output folder.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";

interface MyStackConfig {
  environment: string;
  region?: string;
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: MyStackConfig) {
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

const app = new App();
new MyStack(app, "multiple-stacks-dev", { environment: "dev" });
new MyStack(app, "multiple-stacks-staging", { environment: "staging" });
new MyStack(app, "multiple-stacks-production-us", {
  environment: "production",
  region: "us-east-1",
});
new MyStack(app, "multiple-stacks-production-eu", {
  environment: "production",
  region: "eu-central-1",
});
app.synth();
```

After running `cdktf synth` we can see the following synthesized stacks:

```
$ cdktf list

Stack name                      Path
multiple-stacks-dev             cdktf.out/stacks/multiple-stacks-dev
multiple-stacks-staging         cdktf.out/stacks/multiple-stacks-staging
multiple-stacks-production-us   cdktf.out/stacks/multiple-stacks-production-us
multiple-stacks-production-eu   cdktf.out/stacks/multiple-stacks-production-eu
```

### Current Limitations

#### Deployments

At the moment all Terraform operations are limited to a single stack. In order to run `diff`, `deploy` or `destroy`, a target stack has to be specified. A deploy command like `cdktf deploy multiple-stacks-dev` will work and all Terraform operations will run in the folder `cdktf.out/stacks/multiple-stacks-dev`.

Omitting the target stack by running a plain `cdktf deploy` will result in error. This will change in future versions, where support for targeting all or a subset of stacks will be added.

Please track this [issue](https://github.com/hashicorp/terraform-cdk/issues/650) when you're interested in this feature.

### Migration from `<= 0.2`

Up until CDK for Terraform version `0.2` only a single stack was supported. For local state handling, a `terraform.tfstate` in the project root folder was used. With version `>= 0.3` the local state file reflects the stack name it belongs to in its file name. When a `terraform.tfstate` file is still present in the project root folder, it has to be renamed to match the schema `terraform.<stack-name>.tfstate` manually.
