# HCL2JSON

This is a WebAssembly wrapper for https://github.com/tmccombs/hcl2json

## Usage

```
yarn install @cdktf/hcl2json
```

### Parse HCL strings

```js
import { parse } from '@cdktf/hcl2json'

const hcl = `
  variable "name" {
    description = "Name to be used on all the resources as identifier"
    type        = string
    default     = ""
  }
`

(async () => {
  // my-filename.tf isn't relevant for the functionality, just metadata
  const json = await parse('my-filename.tf', hcl)
  console.log(json)
})()

// =>

{
  "variable": {
    "name": [
      {
        "default": "",
        "description": "Name to be used on all the resources as identifier",
        "type": "${string}"
      }
    ]
  }
}
```

### Parse an entire directory

```js
import { convertFiles } from "@cdktf/hcl2json";

(async () => {
  const json = await convertFiles("/your/terraform/code");
  console.log(json);
})();

// => Unified JSON representation of all *.tf and *.tf.json files in the given directory
```

## Development

With `yarn build` a Typescript compile is triggered and a Go build with a WASM target is performed.
