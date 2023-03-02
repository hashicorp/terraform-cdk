# tools/generate-function-bindings

This package contains two tools that work together to generate the bindings for Terraform functions that are part of the `cdktf` package. This is currently a manual process and not yet automated through CI.

## Fetching function metadata

Terraform v1.4.0-beta2 introduced the `terraform metadata functions -json` command which returns a JSON specification of the function signatures supported by Terraform.
CDKTF generates its function bindings based on that schema.

To update the function definitions (stored in `scripts/functions.json`), run the following command:

```sh
yarn run fetch-metadata
```

If your default Terraform version does not (yet) support the `metadata functions` command, you can pass the environment variable `TERRAFORM_BINARY_NAME` to point to a different Terraform binary:

```sh
TERRAFORM_BINARY_NAME="~/Downloads/terraform-140-beta2" yarn run fetch-metadata
```

## Generating function bindings

The second step is to generate function bindings based off of the `functions.json` downloaded by the first tool.

To do so, run:

```sh
yarn run generate
```

This will update the generated file in `packages/cdktf/lib/functions/terraform-functions.generated.ts`

### Overriding functions

The `scripts/generate.ts` file contains a constant named `INTERNAL_METHODS` that will cause those functions to be internalized (by adding a `_` prefix and the `@internal` docstring required by JSII). This allows to either skip exposing a function or (which we currently use it for) to export that function with a slightly different signature through `packages/cdktf/lib/terraform-functions.ts`. We currently do this for some functions that Terraform uses variadic parameters for that would otherwise have a poor UX in CDKTF. Refer to the aforementioned file for examples and more background information.

## Running both commands at once

To aid the update process, it is also possible to run the following command in the root of the repository:

```sh
yarn run generate-function-bindings
```

This will invoke both commands in sequence.
