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
import * as hcl2cdk from "@cdktf/hcl2cdk";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";

(async () => {
  const hcl = hcl2cdk.getTerraformConfigFromDir("/path/to/terraform/project");
  const providerRequirements = await hcl2cdk.parseProviderRequirements(hcl);
  const targets = Object.entries(providerRequirements).map(([name, version]) =>
    ConstructsMakerProviderTarget.from(
      new config.TerraformProviderConstraint(`${name}@ ${version}`),
      LANGUAGES[0]
    )
  );
  // Get all the provider schemas, making the conversion more precise
  const { providerSchema } = await readSchema(targets);

  const mainTs = await hcl2cdk.convert(hcl, {
    language: "typescript",
    providerSchema: providerSchema,
  });

  await hcl2cdk.convertProject(
    hcl,
    mainTs.code,
    require("../cdktf.json"),
    { language: "typescript", providerSchema } // Currently we only support Typescript for project conversion
  );
})();
```

This transforms your Terraform project into a CDK for Terraform project, besides the resource naming within Terraform the deployed resources should not differ between `terraform plan` and `cdktf plan`.

## Known Limitations

### Providers guessed can be not functional

If your HCL includes providers that are not mentioned under `required_providers` we infer the name, e.g. if you use the `datadog_dashboard` resource we infer the provider `datadog` which is right, but the namespace is missing, for DataDog it would be `datadog/datadog`. Instead we will try to use `hashicorp/datadog` and fail because this provider is not known to the registry.
Please see the [required providers docs](https://www.terraform.io/docs/language/providers/requirements.html#requiring-providers) for more information on how to specify providers.

### Local Modules and Files

We don't move modules or files for you, if you reference local modules you have to move them so that the relative paths are correct. If you want to make use of files you need to wrap them in a [`TerraformAsset`](../../docs/working-with-cdk-for-terraform/terraform-assets.md) before using them.

### Development

We have two types of test cases, one within `lib` that are on the unit level and one within `test` that are testing the entire package at once by converting and then synthesizing the resulting code.

In general, both test types can be run by `npx jest <pathToTestCase>`. You can add `-u` to update the snapshots and `--watch` to run the tests in watch mode.

To make the tests inside `test` faster we disable synthesizing and multi-language snapshots by default. You can enable them by setting the envinronment variable `CI=true`. Another way of improving the performance significantly is setting the `TF_PLUGIN_CACHE_DIR` to a valid directory in order to cache the provider binaries used within the tests. E.g. by running `TF_PLUGIN_CACHE_DIR=(mktemp -d) npx jest <pathToTestCase> --watch`.
