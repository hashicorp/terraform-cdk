# @cdktf/hcl2cdk

Uses `@cdktf/hcl2cdk` to transform HCL configuration to CDK constructs.

## Usage

```sh
yarn install @cdktf/hcl2cdk
```

### Convert HCL strings to Constructs

```ts
import { convert } from "@cdktf/hcl2cdk";

const hcl = `
  variable "name" {
    description = "Name to be used on all the resources as identifier"
    type        = string
    default     = ""
  }
`(async () => {
  const ts = await convert(hcl, { language: "typescript" });
  console.log(ts.imports); // just the necessary imports
  console.log(ts.code); // just the constructs
  console.log(ts.all); // code with imports
})();

// =>
import * as cdktf from "cdktf";

new cdktf.TerraformVariable(this, "imageId", {
  type: "string",
  default: "ami-abcde123",
  description: "What AMI to use to create an instance",
});
```

### Convert a project

```ts
import { convertProject, getTerraformConfigFromDir } from "@cdktf/hcl2json";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";

(async () => {
  // Get all the provider schemas, making the conversion more precise
  const { providerSchema } = await readSchema(
    providerRequirements.map((spec) =>
      ConstructsMakerProviderTarget.from(
        new config.TerraformProviderConstraint(spec),
        LANGUAGES[0]
      )
    )
  );

  await convertProject(
    getTerraformConfigFromDir("/path/to/terraform/project"),
    "/path/to/cdktf-init/project",
    { language: "typescript", providerSchema } // Currently we only support Typescript for project conversion
  );
})();
```

This transforms your Terraform project into a CDK for Terraform project, besides the resource naming within Terraform the deployed resources should not differ between `terraform plan` and `cdktf plan`.

## Known Limitations

### Terraform Expressions are of the wrong TS/Java/C# type

When working with typed languages the converter can run into problems where the Terraform Expression evaluates to a certain type but it's encoded in a string. Therefore the type checker of the language detects a type mismatch, resulting in an compilation error. These problems need to be manually solved by adding a typecast. One example would be:

```ts
{
  // Typescript expects a boolean here, but a string is passed
  booleanProperty:
    ( // This Terraform expression evaluates to a boolean as required by the property
      `\${${shouldBeTrue.value} ? true : false}`
      as boolean // We need to cast the type so that Typescript understand the right type is being passed
    );
}
```

### Providers guessed can be not functional

If your HCL includes providers that are not mentioned under `required_providers` we infer the name, e.g. if you use the `datadog_dashboard` resource we infer the provider `datadog` which is right, but the namespace is missing, for DataDog it would be `datadog/datadog`. Instead we will try to use `hashicorp/datadog` and fail because this provider is not known to the registry.
Please see the [required providers docs](https://www.terraform.io/docs/language/providers/requirements.html#requiring-providers) for more information on how to specify providers.

### Local Modules and Files

We don't move modules or files for you, if you reference local modules you have to move them so that the relative paths are correct. If you want to make use of files you need to wrap them in a [`TerraformAsset`](../../docs/working-with-cdk-for-terraform/terraform-assets.md) before using them.
