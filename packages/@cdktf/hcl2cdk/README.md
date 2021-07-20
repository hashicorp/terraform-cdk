# HCL2CDK

Uses `@cdktf/hcl2json` to transform HCL configuration to CDK constructs.

## Usage

```sh
yarn install @cdktf/hcl2cdktf
```

### Covert HCL strings to Constructs

```ts
import { convert } from "@cdktf/hcl2cdktf";

const hcl = `
  variable "name" {
    description = "Name to be used on all the resources as identifier"
    type        = string
    default     = ""
  }
`(async () => {
  // my-filename.tf isn't relevant for the functionality, just metadata
  const ts = await convert("my-filename.tf", hcl, { language: "typescript" });
  console.log(ts.imports); // just the necessary imports
  console.log(ts.code); // just the constructs
  console.log(ts.all); // code with imports
})();

// =>

new TerraformVariable(this, "imageId", {
  type: "string",
  default: "ami-abcde123",
  description: "What AMI to use to create an instance",
});
```

### Convert a project

```ts
import { convertProject, getProjectTerraformFiles } from "@cdktf/hcl2json";

(async () => {
  await convertProject(
    getProjectTerraformFiles("/path/to/terraform/project"),
    "/path/to/cdktf-init/project",
    { language: "typescript" } // currently only TS is supported
  );
})();
```

This transforms your Terraform project into a CDK for Terraform project, besides the resource naming the output of `terraform plan` and `cdktf plan` should be the same.
