## 0.0.12

**Fixed bugs:**

- `cdktf init` was broken on Windows [\#198](https://github.com/hashicorp/terraform-cdk/issues/198)

## 0.0.11

**Implemented enhancements:**

- Defaults are opposite of Terraform but should default to being non-destructive [\#155](https://github.com/hashicorp/terraform-cdk/issues/155)
- Version check for new cdktf cli [\#130](https://github.com/hashicorp/terraform-cdk/issues/130)
- Set NODE\_ENV for CLI [\#129](https://github.com/hashicorp/terraform-cdk/issues/129)
- Make local state persistent  [\#116](https://github.com/hashicorp/terraform-cdk/issues/116)
- Improved resource name structure in Diff / Deploy / Destroy [\#135](https://github.com/hashicorp/terraform-cdk/issues/135)

**Fixed bugs:**

- cdktf destroy errors saying stale plan [\#182](https://github.com/hashicorp/terraform-cdk/issues/182)
- Migrating from local state to remote state doesn't work [\#168](https://github.com/hashicorp/terraform-cdk/issues/168)
- Display Typescript Errors for Synth [\#161](https://github.com/hashicorp/terraform-cdk/issues/161)
- cdktf init is broken [\#157](https://github.com/hashicorp/terraform-cdk/issues/157)
- Handle stale stacks in cdktf [\#150](https://github.com/hashicorp/terraform-cdk/issues/150)
- cdktf init Terraform Cloud workspace creation doesn't work [\#144](https://github.com/hashicorp/terraform-cdk/issues/144)
- Case sensitive tags are incorrectly downcased [\#75](https://github.com/hashicorp/terraform-cdk/issues/75)

## 0.0.10

- Bug when creating Terraform Cloud workspace via `cdktf init` (#144)

## 0.0.9

- Fix `cdktf init` issue (#139)

## 0.0.8

Minor bug fixes and documentation for getting started guides.

## 0.0.7

- Support for `cdktf diff` (#90)
- Support for `cdktf deploy` (#92)
- Support for `cdktf destroy` (#111)
- Support for Terraform Cloud via `cdktf login` (#96)
- Support for logging across the project (#100)
- New UI for `cdktf synth` and `cdktf get` (#103)
- Basic error handling support (#110)

There are other minor bug fixes included in the release. (#109, #122, #128).

## 0.0.6

- Typescript examples and template defaults for synthesize commands to compile application (#63)
- Terraform Output doesn't handle Optional Types (#83)

## 0.0.5

- Document Terraform outputs and remote backend (#64)
- Fix providers file workflow (#66)
- Stack escape hatch (#81)

## 0.0.4

- Getting started guide for Python (#73)
- Change output directory to `cdktf.out` for Terraform configuration (#70)
- Fix output directory argument for `cdktf synth` (#62)

## 0.0.3

Enable synthesis to Python

## 0.0.2-alpha.2

Minor output changes and updated README.md example.

## 0.0.2-alpha.1

Alpha release for Github and NPM

## 0.0.2

Initial release to GitHub and NPM.

## 0.0.1

Initial release of `cdktf-cli` and `cdktf` to Github and NPM registry.
