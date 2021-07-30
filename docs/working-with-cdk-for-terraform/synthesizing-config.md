# Synthesizing Terraform Configuration using CDK for Terraform CLI

CDK for Terraform project allows you to synthesize Terraform JSON configuration using the
`cdktf synth` command. This allows users to write a CDK for Terraform application in a
language such as TypeScript or Python and generate JSON configuration that can be read by
Terraform.

Let's take a simple TypeScript application.

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

To synthesize the application code into Terraform JSON configuration, run the `cdktf synth`.

```bash
cdktf synth
```

```bash
Generated Terraform code in the output directory: cdktf.out
```

This command will generate a directory called `cdktf.out`. This directory contains the Terraform JSON configuration for
application. The Terraform config for your stack `hello-terraform` will be in `cdktf.out/stacks/hello-terraform`.

## Deploy Workflow Using Terraform CLI

Use the Terraform CLI commands to provision infrastructure resources.

```bash
cd cdktf.out/stacks/hello-terraform
```

Terraform plan

```bash
terraform plan
```

Terraform apply

```bash
terraform apply
```

Terraform destroy

```bash
terraform destroy
```
