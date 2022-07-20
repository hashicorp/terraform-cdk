# Documentation Generation

A little node.js script that uses `jsii-docgen` to generate documentation for the `cdktf` package.
Run `yarn && yarn docs` to generate the documentation.

This package is excluded from the hoisting because we need a locally installed copy of `cdktf` and `constructs`.
