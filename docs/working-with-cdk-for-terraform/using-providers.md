# Using Providers

## Prebuilt Providers

To improve the general user experience around provider imports and to allow building further abstractions on top of the Terraform provider bindings, a few popular providers are offered as prebuilt packages. At the moment the following providers are built and published to NPM / PyPi on a regular basis automatically.

- [AWS Provider](https://github.com/terraform-cdk-providers/cdktf-provider-aws)
- [Google Provider](https://github.com/terraform-cdk-providers/cdktf-provider-google)
- [Azure Provider](https://github.com/terraform-cdk-providers/cdktf-provider-azurerm)
- [Kubernetes Provider](https://github.com/terraform-cdk-providers/cdktf-provider-kubernetes)
- [Docker Provider](https://github.com/terraform-cdk-providers/cdktf-provider-docker)
- [Github Provider](https://github.com/terraform-cdk-providers/cdktf-provider-github)
- [Null Provider](https://github.com/terraform-cdk-providers/cdktf-provider-null)

Please check the [Terraform CDK Providers](https://github.com/terraform-cdk-providers) organization as well for an up to date list. As these are normal NPM / PyPI packages, they can be used as any other dependency.

e.g. in TypeScript / Node:

```
npm install @cdktf/provider-aws
```

## Importing Providers and Modules

CDK for Terraform allows you to import Terraform [providers](https://www.terraform.io/docs/providers/index.html) and [modules](https://www.terraform.io/docs/modules/index.html) to your project
using this workflow.

Let's take the TypeScript [example](../getting-started/typescript.md) shown in the getting started guide.
The project has the `main.ts` file that defines the AWS resources that need to be deployed.

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
new MyStack(app, "hello-terraform");
app.synth();
```

The project also has the [cdktf.json](./cdktf-json.md) file that defines what providers and modules are being used by the project.

```bash
vim cdktf.json
```

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": ["aws@~> 2.0"]
}
```

In order to use another provider or module, edit the `cdktf.json` file and add the name of the provider.
For example, to add [DNS Simple](https://www.terraform.io/docs/providers/dnsimple/index.html) provider to the project, edit the `cdktf.json` file and add the provider name to the `terraformProviders` array. For details on the version constraint syntax and the alternative object syntax please see the [`cdktf.json` specification](./cdktf-json.md).

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": ["aws@~> 2.0", "dnsimple"]
}
```

Then run `cdktf get` command in the working directory.

```bash
cdktf get
⠋ downloading and generating providers...
```

```bash
Generated typescript constructs in the output directory: .gen
```

This command creates the appropriate TypeScript classes automatically that can be imported in the application.

Import the `DnsimpleProvider` and `Record` resources from `./.gen/providers/dnsimple` and define them.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, Instance } from "./.gen/providers/aws";
import { DnsimpleProvider, Record } from "./.gen/providers/dnsimple";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const instance = new Instance(this, "Hello", {
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

Synthesize the code.

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

## Provider Caching

When using the `cdktf` cli commands, it'll automatically set the process env `TF_PLUGIN_CACHE_DIR` to `$HOME/.terraform.d/plugin-cache` if it isn't set to something else. This will avoid re-downlodading the providers between the different `cdktf` commands. See the [Terraform](https://www.terraform.io/docs/commands/cli-config.html#provider-plugin-cache) docs for more information.

`cdktf get` works in a temporary directory, hence all downloaded providers would be lost without caching. For the deployment related commands `diff` / `deploy` / `destroy`, the working directory is usually `cdktf.out` and is treated as throwaway folder. While not common, it's totally reasonable to remove the `cdktf.out` folder and synthesize again. In that case, caching will help as well.

Last but not least, when using multiple stacks within one application, provider caching is a basic prerequisite.

This behaviour can be disabled by setting `CDKTF_DISABLE_PLUGIN_CACHE_ENV` to non null value, e.g. `CDKTF_DISABLE_PLUGIN_CACHE_ENV=1`. This might be desired, when a different cache directory is configured via a `.terraformrc` configuration file.

## Using a Local Provider

Terraform supports using local providers. For CDK for Terrform being able to generate the type bindings from these providers, Terraform itself has to find these providers. There are two ways to achieve this:

- [Implied Local Mirrors](https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories)
- [Development Overrides](https://www.terraform.io/docs/cli/config/config-file.html#development-overrides-for-provider-developers)

Once configured properly, these providers can be referenced in the `cdktf.json` config file as any other provider in the Terraform registry.

## Using References

When working with resources created from providers you can use properties on the instances from the generated bindings to reference in other resources. This allows us to track logical dependencies and access computed values.

```ts

const exampleNamespace = new Namespace(this, "tf-cdk-example", {
  metadata: {
    name: "tf-cdk-example",
  },
});

new Deployment(this, "nginx-deployment", {
  metadata: {
    name: "nginx",
    namespace: exampleNamespace.metadata.name, // This let's you reference the name
    labels: {
      app,
    },
  });
```

Please be aware that you can not pass an entire block (e.g. `exampleNamespace.metadata`) as this is not supported by Terraform. You need to specify all values you want to pass.
