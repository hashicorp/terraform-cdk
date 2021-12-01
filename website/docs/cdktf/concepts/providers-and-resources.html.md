---
layout: "cdktf"
page_title: "Providers and Resources"
sidebar_current: "cdktf"
description: "Providers allow Terraform to communicate with external APIs. Learn to define providers and resources in a CDK for Terraform application."
---

# Providers and Resources

-> **Note:** CDK for Terraform is currently in [beta](/docs/cdktf/index.html#project-maturity-and-production-readiness).

A [provider](https://www.terraform.io/docs/language/providers/index.html) is a Terraform plugin that allows users to manage an external API. Provider plugins like the [AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest) or the [cloud-init provider](https://registry.terraform.io/providers/hashicorp/cloudinit/latest/docs) act as a translation layer that allows Terraform to communicate with many different cloud providers, databases, and services.

![diagram: How Terraform uses plugins](images/terraform-plugin-overview.png)

Terraform uses providers to provision [resources](https://www.terraform.io/docs/language/resources/index.html), which describe one or more infrastructure objects like virtual networks and compute instances. Each provider on the [Terraform Registry](https://registry.terraform.io/) has documentation detailing available resources and their configuration options.

In your CDK for Terraform (CDKTF) application, you will use your preferred programming language to define the resources you want Terraform to manage on one or more providers. This page explains how to use providers and resources in your application and how to use [escape hatches](#escape-hatch) to change resource behavior when necessary.

## Providers

You can install pre-built providers, import providers from the Terraform Registry, or reference local providers to define resources for your application. CDKTF generates the required code bindings from the providers you define in [`cdktf.json`](/docs/cdktf/create-and-deploy/configuration-file.html). This allows you to define resources for that provider in your preferred programming language.

### Import Providers

CDK for Terraform lets you import Terraform [providers](https://www.terraform.io/docs/providers/index.html) to your project.

This TypeScript example project has a `main.ts` file that defines AWS resources.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, EC2 } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    new EC2.Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
    });
  }
}

const app = new App();
new MyStack(app, "hello-terraform");
app.synth();
```

#### Add Provider to `cdktf.json`

To use a new provider, first add it to the `"terraformProviders"` array in the [`cdktf.json` file](/docs/cdktf/create-and-deploy/configuration-file.html).

The example below adds the [DNS Simple](https://www.terraform.io/docs/providers/dnsimple/index.html) provider:

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": ["aws@~> 2.0", "dnsimple/dnsimple"]
}
```

#### Generate Classes

Go to the working directory and run `cdktf get` to create the appropriate TypeScript classes for the provider automatically.

```bash
cdktf get
⠋ downloading and generating providers...
```

```bash
Generated typescript constructs in the output directory: .gen
```

#### Import Classes

Import and use the generated classes in your application. The TypeScript example below imports the `DnsimpleProvider` and `Record` resources from `./.gen/providers/dnsimple` and defines them.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack, Token } from "cdktf";
import { AwsProvider, EC2 } from "./.gen/providers/aws";
import { DnsimpleProvider, Record } from "./.gen/providers/dnsimple";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const instance = new EC2.Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
    });

    new DnsimpleProvider(this, "dnsimple", {
      token: Token.asString(process.env.DNSIMPLE_TOKEN),
      account: Token.asString(process.env.DNSIMPLE_ACCOUNT),
    });

    new Record(this, "web-www", {
      domain: "example.com",
      name: "web",
      value: instance.publicIp,
      type: "A",
    });
  }
}

const app = new App();
new MyStack(app, "hello-terraform");
app.synth();
```

Use the `synth` command to convert your code into a JSON Terraform configuration file.

```bash
cdktf synth --json
```

```json
{
  "//": {
    "metadata": {
      "version": "0.0.11-pre.8757404fa25b6e405f1a51eac11b96943ccb372e",
      "stackName": "vpc-example"
    }
  },
  "terraform": {
    "required_providers": {
      "aws": "~> 2.0",
      "dnsimple": "undefined"
    }
  },
  "provider": {
    "aws": [
      {
        "region": "us-east-1"
      }
    ],
    "dnsimple": [
      {
        "account": "hello@example.com",
        "token": "xxxxxxxxxx"
      }
    ]
  },
  "resource": {
    "aws_instance": {
      "vpcexample_Hello_279554CB": {
        "ami": "ami-2757f631",
        "instance_type": "t2.micro",
        "//": {
          "metadata": {
            "path": "vpc-example/Hello",
            "uniqueId": "vpcexample_Hello_279554CB",
            "stackTrace": [
              .....
            ]
          }
        }
      }
    },
    "dnsimple_record": {
      "vpcexample_webwww_477C7150": {
        "domain": "example.com",
        "name": "web",
        "type": "A",
        "value": "${aws_instance.vpcexample_Hello_279554CB.public_ip}",
        "//": {
          "metadata": {
            "path": "vpc-example/web-www",
            "uniqueId": "vpcexample_webwww_477C7150",
            "stackTrace": [
              .....
            ]
          }
        }
      }
    }
  }
}

```

### Install Pre-built Providers

It can take several minutes to generate the code bindings for providers with very large schemas, so we offer several popular providers as pre-built packages. Pre-built providers are a completely optional performance optimization, and you may prefer to generate the code bindings for these providers yourself. For example, you may want to use a different version of that provider than the one in the pre-built package. The [Terraform CDK Providers](https://github.com/orgs/hashicorp/repositories?q=cdktf-provider-) page has a complete list, but available pre-built providers include:

- [AWS Provider](https://github.com/terraform-cdk-providers/cdktf-provider-aws)
- [Google Provider](https://github.com/terraform-cdk-providers/cdktf-provider-google)
- [Azure Provider](https://github.com/terraform-cdk-providers/cdktf-provider-azurerm)
- [Kubernetes Provider](https://github.com/terraform-cdk-providers/cdktf-provider-kubernetes)
- [Docker Provider](https://github.com/terraform-cdk-providers/cdktf-provider-docker)
- [Github Provider](https://github.com/terraform-cdk-providers/cdktf-provider-github)
- [Null Provider](https://github.com/terraform-cdk-providers/cdktf-provider-null)

These packages are regularly published to NPM / PyPi, and you can treat them as you would any other dependency. The example below shows how to install the AWS provider in TypeScript / Node.

```
npm install @cdktf/provider-aws
```

When you choose to install a pre-built provider via `npm install`, you should not define that provider again in your `cdktf.json` file. If you receive errors while running `cdktf synth` because of duplicate providers, remove the duplicates from your `cdktf.json` file, delete `tsbuildinfo.json`, and try running `cdktf synth` again.

### Provider Caching

Caching prevents CDK for Terraform from re-downloading providers between each CLI command. It is also useful when you need to remove the `cdktf.out` folder and re-synthesize your configuration. Finally, caching is necessary when you use multiple [stacks](/docs/cdktf/concepts/stacks.html) within one application.

#### Set the Caching Directory

Refer to the Terraform documentation about [how to configure your plugin cache](https://www.terraform.io/docs/cli/config/config-file.html#provider-plugin-cache). Otherwise, CDKTF automatically sets the `TF_PLUGIN_CACHE_DIR` environment variable to `$HOME/.terraform.d/plugin-cache` when you use `cdktf` cli commands.

To disable this behavior, set `CDKTF_DISABLE_PLUGIN_CACHE_ENV` to a non null value, like `CDKTF_DISABLE_PLUGIN_CACHE_ENV=1`. You may want to do this when a different cache directory is configured via a `.terraformrc` configuration file.

### Use a Local Provider

Terraform needs to know the location of local providers to enable CDKTF to generate the appropriate type bindings. You can configure this in two ways:

- [Implied Local Mirrors](/docs/cli/config/config-file.html#implied-local-mirror-directories)
- [Development Overrides](/docs/cli/config/config-file.html#development-overrides-for-provider-developers)

Once configured properly, you can reference these providers in the `cdktf.json` file the same way that you reference providers from the Terraform Registry. Refer to the [project configuration documentation](/docs/cdktf/create-and-deploy/configuration-file.html) for more details about the `cdktf.json` specification.

## Resources

Resources are the most important element when defining infrastructure in CDKTF applications. Each resource describes one or more infrastructure objects, such as virtual networks, compute instances, or higher-level components such as DNS records.

### Define Resources

Resource definitions and properties vary depending on the type of resource and the provider. Consult your provider's documentation for a full list of available resources and their configuration options.

The TypeScript example below defines a [DynamoDB table](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) resource on the AWS provider.

```typescript
export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    const region = new DataAwsRegion(this, "region");

    new aws.DynamoDB.DynamodbTable(this, "Hello", {
      name: `my-first-table-${region.name}`,
      hashKey: "temp",
      attribute: [{ name: "id", type: "S" }],
      billingMode: "PAY_PER_REQUEST",
    });
  }
}
```

The [examples page](/docs/cdktf/examples.html) contains multiple example projects for every supported programming language.

### Scope

You can instantiate the same resource multiple times throughout your infrastructure. For example, you may want to create multiple S3 Buckets with different configurations. Instances that share the same parent element are considered to be part of the same scope. You must set a different `name` property for each instance to avoid naming conflicts.

Refer to the [constructs documentation](/docs/cdktf/concepts/constructs.html#scope) for more details and an example.

### References

You can reference resource properties throughout your configuration. For example, you may want to use the name of a parent resource when assigning names to related child resources. Refer to your provider's documentation for a full list of available properties for each resource type.

To create references, call `myResource.<propertyName>` on the resource instance. For example, you could use `myResource.name` to retrieve the `name` property from `myResource`. Terraform does not support passing an entire block (e.g. `exampleNamespace.metadata`) into a resource or data source, so you must create a reference for each individual property.

References are also useful when you need to track logical dependencies. For example, Kubernetes resources live in a namespace, so a namespace must exist before Terraform can provision the associated resources. The TypeScript example below uses a reference for the namespace property in the the deployment. This reference tells Terraform that it needs to create the namespace before creating the resources.

```ts

const exampleNamespace = new Namespace(this, "tf-cdk-example", {
  metadata: {
    name: "tf-cdk-example",
  },
});

new Deployment(this, "nginx-deployment", {
  metadata: {
    name: "nginx",
    namespace: exampleNamespace.metadata.name, // Reference the namespace name propery
    labels: {
      app,
    },
  });
```

### Escape Hatch

Terraform provides [meta-arguments](https://www.terraform.io/docs/language/resources/syntax.html#meta-arguments) to change resource behavior. For example, the `for_each` meta-argument creates multiple resource instances according to a map, or set of strings. The escape hatch allows you to use these meta-arguments to your CDKTF application and to override attributes that CDKTF cannot yet fully express.

The TypeScript example below defines a provisioner for a resource using the `addOverride` method.

```typescript
const tableName = "my-table";

const table = new aws.DynamoDB.DynamodbTable(this, "Hello", {
  name: tableName,
  hashKey: "id",
  attribute: [{ name: "id", type: "S" }],
});

table.addOverride("provisioner", [
  {
    "local-exec": {
      command: `aws dynamodb create-backup --table-name ${tableName} --backup-name ${tableName}-backup`,
    },
  },
]);
```

When you run `cdktf synth`, CDKTF generates a Terraform configuration with the [provisioner added to the JSON object](https://www.terraform.io/docs/configuration/syntax-json.html#nested-block-mapping).

```json
{
  "resource": {
    "aws_dynamodb_table": {
      "helloterraHello69872235": {
        "hash_key": "temp",
        "name": "my-table",
        "attribute": [
          {
            "name": "id",
            "type": "S"
          }
        ],
        "provisioner": [
          {
            "local-exec": {
              "command": "aws dynamodb create-backup --table-name my-table --backup-name my-table-backup"
            }
          }
        ]
      }
    }
  }
}
```

To override an attribute, include the resource attribute key in `addOverride`. The attribute in the escape hatch is in snake case because the Terraform JSON configuration uses snake case instead of camel case.

```typescript
const topic = new SnsTopic(this, "Topic", {
  displayName: "will-be-overwritten",
});
topic.addOverride("display_name", "my-topic");
```

When you run `cdktf synth`, CDKTF generates a Terraform configuration with the value overwritten.

```json
{
  "resource": {
    "aws_sns_topic": {
      "helloterraTopic6609C1D4": {
        "display_name": "my-topic"
      }
    }
  }
}
```

Use a dot notation to access elements in arrays: `resource.addOverride("configurations.0.https", true)`.

#### Escape Hatch for Dynamic Blocks

Terraform configurations sometimes use [`dynamic` blocks](/docs/language/expressions/dynamic-blocks.html) to create related resources based on dynamic data, or data that is only known after Terraform provisions the infrastructure. For example, you could create a series of nested blocks for a series of Virtual Private Cloud (VPC) ingress ports. A `dynamic` block loops over a complex value and generates a nested resource block for each element of that complex value.

In CDKTF applications, you must use an escape hatch when you want to loop through a dynamic value like a `TerraformVariable` or a resource output.

To use an escape hatch to loop over dynamic data, you must:

- Set the first argument of `addOverride` to be `dynamic.<attribute_name>`.
- Create a `for_each` value for the second argument and set it to the list you want to iterate over.
- Take the attribute as base for the reference when you reference values from the list. For example, use `"${<attribute_name>.value.nested_value}"`.

The TypeScript example below adds ingress values by looping through the ports passed as `TerraformVariable`.

```ts
const ports = new TerraformVariable(this, "ports", {
  type: "list",
  default: [22, 80, 443, 5432],
});

const sg = new SecurityGroup(this, "sec1grp", {
  name: "security1",
  vpcId: "vpcs",
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      cidrBlocks: ["0.0.0.0/0"],
      protocol: "-1",
    },
  ],
});
sg.addOverride("dynamic.ingress", {
  for_each: ports.listValue,
  content: {
    fromPort: "${ingress.value}",
    toPort: "${ingress.value}",
    cidrBlocks: ["0.0.0.0/0"],
    protocol: "-1",
  },
});
```

You should only use escape hatches when you need to work with dynamic values that are unknown until after Terraform provisions your infrastructure. If you are working with static values, we recommend using the functionality available in your preferred programming language to iterate through the array.

The TypeScript example below loops through the ports without using an escape hatch.

```ts
const ports = [22, 80, 443, 5432];

new SecurityGroup(this, "sec1grp", {
  name: "security1",
  vpcId: "vpcs",
  egress: [
    {
      fromPort: 0,
      toPort: 0,
      cidrBlocks: ["0.0.0.0/0"],
      protocol: "-1",
    },
  ],
  ingress: ports.map((port) => ({
    fromPort: port,
    toPort: port,
    cidrBlocks: ["0.0.0.0/0"],
    protocol: "-1",
  })),
});
```
