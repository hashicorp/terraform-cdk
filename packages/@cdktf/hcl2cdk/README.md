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
  const ts = await convert(hcl, { language: "typescript" });
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

## Known Limitations

### Terraform Expressions are of the wrong TS/Java/C# type

When working with typed languages the converter can run into problems where the Terraform Expression evaluates to a certain type but it's encoded in a string. Therefore the type checker of the language detects a type mismatch, resulting in an compilation error. These problems need to be manually solved by adding a typecast. One example would be:

```ts
{
  booleanProperty: `\${${shouldBeTrue.value} ? true : false}`;
}
```
