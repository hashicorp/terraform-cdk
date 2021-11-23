---
layout: "cdktf"
page_title: "Constructs"
description: “Constructs are classes that allow you to reuse existing configurations. Learn about using constructs in your CDKTF application and how to publish custom constructs.”
---

# Constructs

-> **Note:** CDK for Terraform is currently in [beta](/docs/cdktf/index.html#project-maturity-and-production-readiness).

Construct is a general term that you can use to describe parts of your CDK for Terraform (CDKTF) project because every element in a CDKTF application is a descendent of the [`Construct` base class](https://github.com/aws/constructs/blob/main/API.md#constructs-construct). The entire application, each `stack`, and each resource are all constructs.

You can also import custom construct classes that represent infrastructure configurations written in your programming language. Custom constructs are helpful because they enforce configuration best practices, they let you reuse configurations rather than rewriting them multiple times, and they abstract some configuration details away. For example, you might import a construct that configures a Kubernetes deployment. When you create a new instance in your application, you can customize the deployment via the exposed properties without learning all of the implementation details.

This page explains how to think about and use constructs within your CDKTF project. It also provides some recommendations for publishing custom constructs.

## Construct Types

Construct classes define system state at various levels of granularity. For example, you can write a custom construct that defines and configures a single Elastic Cloud Compute resource or one that defines and configures an entire deployment with multiple resources from different providers.

The Cloud Development Kit community has identified three major construct types that indicate an increasing level of abstraction:

- **L1** constructs define single resources or very small units of configuration. For example, the code bindings that CDKTF generates for each Terraform provider are considered L1 constructs. Another example would be creating a custom L1 construct that defines the configuration for an Azure virtual machine.

- **L2** constructs define resources and include an intent-driven API with additional helper methods, properties, and functionality. For example, you could create a custom L2 construct that contains a method for adding files to an S3 Bucket and a method for granting resource access to a particular user group.

- **L3** constructs define common design patterns and larger pieces of functionality. For example, you could create a custom L3 construct that configures all of the necessary resources to deploy and host a static website frontend.

## Modules vs. Constructs

Both Terraform [modules](/docs/cdktf/concepts/modules.html) and constructs allow you to reuse configurations and customize those configurations via exposed properties. However, constructs let you compose more complex objects while maintaining type safety because they can use the built-in functionality from your preferred programming language.

### Interoperability

You can use the [`cdktf convert`](/docs/cdktf/cli-reference/commands.html#convert) command to translate existing projects written in HashiCorp Configuration Language (HCL) into CDKTF-compatible projects. You could then use the output as a starting point to create custom constructs.

You cannot create a Terraform module directly from an existing CDKTF construct, but you can use the synthesized output of a CDKTF project as a Terraform Module. Refer to the [HCL interoperability](/docs/cdktf/concepts/hcl-interoperability.html) page for more details.

## Constructs vs. Stacks

[Stacks](/docs/cdktf/concepts/stacks.html) represent a collection of infrastructure that CDK for Terraform (CDKTF) synthesizes as a dedicated Terraform configuration. Stacks allow you to separate the state management for multiple environments within an application. For example, you may want to have one stack that describes the infrastructure for development and another with slightly different inputs for testing.

Constructs also provide a way to logically structure a set of resources, but you can only use them as part of a stack. A single stack may contain multiple constructs that act as building blocks to create the full infrastructure configuration. For example, you could use one construct to define a Kubernetes deployment and a different construct to define an AWS DynamoDB table.

## Use Constructs

> **Hands On:** Try [Deploy Applications with CDK for Terraform](https://learn.hashicorp.com/tutorials/terraform/cdktf-applications?in=terraform/cdktf) tutorial on HashiCorp Learn to use a custom construct. It includes the example code below.

You can import any [CDKTF-compatible](#available-constructs) construct that is available in your project’s programming language. Then, you can create new instances of the construct and use any exposed properties to customize the construct configuration.

The TypeScript example below instantiates a construct called `KubernetesWebAppDeployment` and uses the available arguments to specify that the deployment will have two replicas.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import * as kubernetes from "@cdktf/provider-kubernetes";
import * as path from "path";

import { KubernetesWebAppDeployment } from "./custom-constructs";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new kubernetes.KubernetesProvider(this, "kind", {
      configPath: path.join(__dirname, "../kubeconfig.yaml"),
    });

    new KubernetesWebAppDeployment(this, "deployment", {
      image: "nginx:latest",
      replicas: 2,
      app: "myapp",
      component: "frontend",
      environment: "dev",
    });
  }
}

const app = new App();
new MyStack(app, "app");
app.synth();
```

### Scope

You can instantiate a construct multiple times throughout your infrastructure. For example, you may want to create multiple S3 Buckets with different configurations. CDKTF infers a unique `name` for each instance from its `Construct#id` and parent construct. Instances that share the same parent element are considered to be part of the same scope. If you instantiate multiple constructs within the same scope, you must set a different `name` for each instance to avoid naming conflicts.

The example below creates three different S3 buckets, two of which are in the same scope. When CDKTF synthesizes this configuration, the Terraform IDs for these resources will be the construct names prefixed by the stack name and suffixed with a hash for each Construct instance.

```ts
import { Construct } from "constructs";

class PublicS3Bucket extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name); // This creates a new scope since we extend from resource

    // This bucket is in a different scope than the buckets
    // defined in `MyStack` below. Therefore, it does not need a unique name.
    this.bucket = new S3Bucket(this, "bucket", {
      bucketPrefix: name,
      website: [
        {
          indexDocument: "index.html",
          errorDocument: "5xx.html",
        },
      ],
    });
  }
}

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Both buckets are inside of the same stack, meaning they share
    // the same scope. Therefore, their names must be unique.
    new PublicS3Bucket(this, "first-bucket");
    new PublicS3Bucket(this, "second-bucket");
  }
}
```

### Aspects

`Aspects` allow you to implement a visitor pattern, dynamically add or remove constructs, and automatically change attributes of existing constructs when you synthesize your CDTKF application. For example, you could use an aspect to help tag resources based on dynamic conditions. Refer to the [aspects documentation](/docs/cdktf/concepts/aspects.html) for more details.

### Available Constructs

You can search the Amazon Web Services (AWS) [Construct Hub](https://constructs.dev/search?q=&cdk=cdktf&offset=0) for existing CDKTF-compatible constructs. We are also building the [AWS Adapter](/docs/cdktf/create-and-deploy/aws-adapter.html), which lets you use AWS Constructs in your CDKTF projects.

~> **Note:** The AWS Adapter is in tech preview.

## Publish Constructs

If you want to distribute construct libraries, we recommend writing the constructs in TypeScript and using `jsii` to generate native packages for all desired language targets. We recommend that open source projects aim to support all generally available languages.

You can use the [package generator projen](https://github.com/projen/projen#getting-started) to scaffold a Github project with the necessary Github Actions workflows to build and publish your construct in multiple programming languages.
