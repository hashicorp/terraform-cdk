## 0.0.19

**Fixed bugs:**

- Depends on expansion [\#442](https://github.com/hashicorp/terraform-cdk/issues/442)
- Make sure tokens resolved before converting to json [\#439](https://github.com/hashicorp/terraform-cdk/issues/439)
- Alter reset and input names when they conflict [\#429](https://github.com/hashicorp/terraform-cdk/issues/429)
- Fix complex map attribute data source reference [\#441](https://github.com/hashicorp/terraform-cdk/issues/441)
- Remap 'equals' to 'equalTo' to work around jsii limitation [\#428](https://github.com/hashicorp/terraform-cdk/issues/428)
- Generated custom mappings [\#395](https://github.com/hashicorp/terraform-cdk/issues/395)

## 0.0.18

**Fixed bugs:**

- Update jsii with python docs fix [\#418](https://github.com/hashicorp/terraform-cdk/issues/418)
- Maintain dependencies between required construct properties [\#310](https://github.com/hashicorp/terraform-cdk/issues/310)

**Implemented enhancements:**

- Java support [\#360](https://github.com/hashicorp/terraform-cdk/issues/360)
- Simple Terraform Locals [\#357](https://github.com/hashicorp/terraform-cdk/issues/357)
- allow to use TERRAFORM_BINARY_NAME env to set terraform binary [\#366](https://github.com/hashicorp/terraform-cdk/issues/366)
- Default to NPM in templates [\#359](https://github.com/hashicorp/terraform-cdk/issues/359)
- Terraform version check [\#378](https://github.com/hashicorp/terraform-cdk/issues/378)
- Terraform Variables [\#277](https://github.com/hashicorp/terraform-cdk/issues/277)
- Terraform hcl module [\#375](https://github.com/hashicorp/terraform-cdk/issues/375)
- Support for matching existing Terraform names [\#329](https://github.com/hashicorp/terraform-cdk/issues/329)

## 0.0.17

**Fixed bugs:**

- Fix Orcale Provider [\#341](https://github.com/hashicorp/terraform-cdk/issues/341)
- Run Terraform commands with `input=false` flag [\#343](https://github.com/hashicorp/terraform-cdk/issues/343)
- Use default provider caching of Terraform, rather than creating error prone symlinks [\#344](https://github.com/hashicorp/terraform-cdk/issues/344)

**Implemented enhancements:**

- Streamline CLI workflows for prebuilt providers [\#331](https://github.com/hashicorp/terraform-cdk/issues/331)
- CLI installable via Homebrew [\#342](https://github.com/hashicorp/terraform-cdk/issues/342)
- Support Terraform provider caching by default [#189](https://github.com/hashicorp/terraform-cdk/issues/189), [\#222](https://github.com/hashicorp/terraform-cdk/issues/222), [\#349](https://github.com/hashicorp/terraform-cdk/issues/349)

## 0.0.16

**Fixed bugs:**

- Fix TerraformProvider alias definition [\#332](https://github.com/hashicorp/terraform-cdk/issues/332)

**Implemented enhancements:**

- Checkpoint telemetry integration [\#326](https://github.com/hashicorp/terraform-cdk/issues/326)
- Adding cdktf version to the terraform user agent [\#321](https://github.com/hashicorp/terraform-cdk/issues/321)
- Migrate to jsii-srcmak [\#276](https://github.com/hashicorp/terraform-cdk/issues/276)

## 0.0.15

**Fixed bugs:**

- Terraform 0.13 Compatibility for 3rd Party Providers (e.g. Docker) in Python [\#309](https://github.com/hashicorp/terraform-cdk/issues/309)
- Fix Naming Collision with Config interfaces [\#300](https://github.com/hashicorp/terraform-cdk/issues/300)

**Implemented enhancements:**

- Use remote backend class for typescript template [\#313](https://github.com/hashicorp/terraform-cdk/issues/313)

## 0.0.14

**Implemented enhancements:**

- Terraform 0.13 Compatibility [\#285](https://github.com/hashicorp/terraform-cdk/issues/285)

**Security Updates:**

- Fix dot-prop security dependency bot alert [\#296](https://github.com/hashicorp/terraform-cdk/issues/296)

## 0.0.13

**Fixed bugs:**

- Fix interpolation bug in complex computed list of data sources [\#215](https://github.com/hashicorp/terraform-cdk/issues/215)
- Avoid conflicts with resource attributes called "node" [\#230](https://github.com/hashicorp/terraform-cdk/pull/230)
- Python: setup imports dir as a package [\#262](https://github.com/hashicorp/terraform-cdk/pull/262)

**Implemented enhancements:**

- Add support for List of Maps in schema generator [\#229](https://github.com/hashicorp/terraform-cdk/issues/229)
- Add Lists of Maps [\#229](https://github.com/hashicorp/terraform-cdk/pull/229)
- Bump and align Typescript / @node/types Dependencies - Upgrade lodash [\#252](https://github.com/hashicorp/terraform-cdk/pull/252)
- Terraform backend config [\#224](https://github.com/hashicorp/terraform-cdk/pull/224)
- Terraform data remote state [\#241](https://github.com/hashicorp/terraform-cdk/pull/241)

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
