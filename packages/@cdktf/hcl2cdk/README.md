# HCL2CDK

Uses `@cdktf/hcl2json` to transform HCL configuration to CDK constructs.

## Usage

```
yarn install @cdktf/hcl2cdktf
```

### Parse HCL strings

```ts
import { transform } from "@cdktf/hcl2cdktf";

const hcl = `
  variable "name" {
    description = "Name to be used on all the resources as identifier"
    type        = string
    default     = ""
  }
`(async () => {
  // my-filename.tf isn't relevant for the functionality, just metadata
  const ts = await transform("my-filename.tf", hcl, { language: "typescript" });
  console.log(ts);
})();

// =>

new TerraformVariable(this, "imageId", {
  type: "string",
  default: "ami-abcde123",
  description: "What AMI to use to create an instance",
});
```

`@cdktf/hcl2cdktf` does not handle imports

### Parse an entire directory

```js
import { convertFiles } from "@cdktf/hcl2json";

(async () => {
  const json = await convertFiles("/your/terraform/code");
  console.log(json);
})();

// => Unified JSON representation of all *.tf and *.tf.json files in the given directory
```
