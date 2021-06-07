## 0.4.1 (June 7, 2021)

**Fixed Bugs**

- Fix `cdktf destroy` - Make sure output parses only relevant parts [\#761](https://github.com/hashicorp/terraform-cdk/pull/761)
- Dont error on init when log has been written [\#759](https://github.com/hashicorp/terraform-cdk/pull/759)

## 0.4.0 (May 27, 2021)

**Implemented enhancements**

- Experimental Go Support [\#686](https://github.com/hashicorp/terraform-cdk/pull/686)
- Add Asset Construct [\#698](https://github.com/hashicorp/terraform-cdk/pull/698)
- Support sensitive variables [\#701](https://github.com/hashicorp/terraform-cdk/pull/701)
- Update python templates to use RemoteBackend construct [\#644](https://github.com/hashicorp/terraform-cdk/pull/644) & [\#669](https://github.com/hashicorp/terraform-cdk/pull/669)
- UX: Explain how to specify a stack in the error message [\#689](https://github.com/hashicorp/terraform-cdk/pull/689)
- Terraform Cloud: Output uses attribute name instead of id [\#717](https://github.com/hashicorp/terraform-cdk/pull/717)
- Terraform Cloud: Stream resource updates [\#712](https://github.com/hashicorp/terraform-cdk/pull/712)
- Add JSDoc links to Terraform Registry docs when generating providers [\#576](https://github.com/hashicorp/terraform-cdk/pull/576)

**Fixed Bugs**

- Return non-zero exit code on unknown command and allow terraform-like command names [\#680](https://github.com/hashicorp/terraform-cdk/pull/680)
- Add cdktf.log to .gitignore of built-in templates [\#662](https://github.com/hashicorp/terraform-cdk/pull/662)
- Fix elasticsearch index resource [\#681](https://github.com/hashicorp/terraform-cdk/pull/681)
- Fix gitignore after init [\#691](https://github.com/hashicorp/terraform-cdk/pull/691)
- Deploy changes on TF output changes [\#687](https://github.com/hashicorp/terraform-cdk/pull/687)
- Fix: Unable to use resources containing an argument named 'stack' [\#716](https://github.com/hashicorp/terraform-cdk/pull/716)
- OCI Synth issues: "module has already exported a member" [\#713](https://github.com/hashicorp/terraform-cdk/pull/713)
- Adapt to changed output format in Terraform 0.15.4 [\#736](https://github.com/hashicorp/terraform-cdk/pull/736)

## 0.3.0 (April 21, 2021)

**Breaking Changes**

We're now supporting multiple Stacks! - existing Terraform state files from **local** Terraform workflows have to be renamed to match the stack name.

Up until CDK for Terraform version `0.2` only a single stack was supported. For local state handling, a `terraform.tfstate` file in the project root folder was used. With version `0.3.0` the local state file reflects the stack name it belongs to in its file name. When a `terraform.tfstate` file is still present in the project root folder, it has to be renamed to match the schema `terraform.<stack-name>.tfstate` manually.

**Implemented enhancements**

- Add support for remote templates [\#645](https://github.com/hashicorp/terraform-cdk/pull/645)
- Handle Multiple Stacks [\#636](https://github.com/hashicorp/terraform-cdk/pull/636)

**Fixed Bugs**

- Wait for ConfigurationVersion to be ready when using Terraform Cloud [\#655](https://github.com/hashicorp/terraform-cdk/pull/655)
- Fix module variables without type [\#630](https://github.com/hashicorp/terraform-cdk/pull/630)
- Fix module without newline [\#633](https://github.com/hashicorp/terraform-cdk/pull/633)
- Rename instance variable to a more specific name to avoid name collisions [\#640](https://github.com/hashicorp/terraform-cdk/pull/640)
- Fix multiple modules with same end name [\#637](https://github.com/hashicorp/terraform-cdk/pull/637)

## 0.2.2 (April 13, 2021)

**Fixed Bugs**

- Resources containing hyphens in resource ids did not correctly display their apply status [\#614](https://github.com/hashicorp/terraform-cdk/pull/614)
- Add missing handling for resource status lines [\#619](https://github.com/hashicorp/terraform-cdk/pull/619)
- Print more descriptive error messages if requests to Terraform Cloud fail [\#623](https://github.com/hashicorp/terraform-cdk/pull/623), [\#626](https://github.com/hashicorp/terraform-cdk/pull/626), [\#488](https://github.com/hashicorp/terraform-cdk/issues/488), [\#400](https://github.com/hashicorp/terraform-cdk/issues/400)

## 0.2.1 (March 29, 2021)

**Fixed Bugs**

- Allow for module without outputs [\#599](https://github.com/hashicorp/terraform-cdk/pull/599)
- Fix Python template [\#604](https://github.com/hashicorp/terraform-cdk/pull/604)
- Don't treat warning lines as resources [\#585](https://github.com/hashicorp/terraform-cdk/pull/585)
- Handle malformed code blocks in provider schema descriptions [\#605](https://github.com/hashicorp/terraform-cdk/pull/605)

## 0.2.0 (March 11, 2021)

**Breaking Changes**

- Generated classes for modules from the registry will change - see [this comment](https://github.com/hashicorp/terraform-cdk/pull/584#issuecomment-794534236) for more details
- Phased out testing and support for Terraform `0.12`. It's likely to still work for now, but it's not guaranteed anymore [\#592](https://github.com/hashicorp/terraform-cdk/issues/592)

**Implemented enhancements:**

- Improve Module Support [\#584](https://github.com/hashicorp/terraform-cdk/issues/584)
- Release packages to Maven Central [\#556](https://github.com/hashicorp/terraform-cdk/issues/556)
- Release packages to Nuget.org [\#528](https://github.com/hashicorp/terraform-cdk/issues/528)
- TerraformHclModule outputs use tokens [\#512](https://github.com/hashicorp/terraform-cdk/issues/512)
- Improve C# init behaviour for Github Package Registry [\#497](https://github.com/hashicorp/terraform-cdk/issues/497)
- Support for dynamic attribute type [\#565](https://github.com/hashicorp/terraform-cdk/issues/565)
- Upgrade to ink v3 [\#559](https://github.com/hashicorp/terraform-cdk/issues/559)

**Fixed bugs:**

- Correct depends on casing for modules [\#508](https://github.com/hashicorp/terraform-cdk/issues/508)
- Python pip template adjustments for windows [\#535](https://github.com/hashicorp/terraform-cdk/issues/535)
- Checkpoint Error Handling / Timeout [\#552](https://github.com/hashicorp/terraform-cdk/issues/552)
- Inject defaults for certain attributes [\#479](https://github.com/hashicorp/terraform-cdk/issues/479)
- Python-pip template fix/improvements [\#541](https://github.com/hashicorp/terraform-cdk/issues/541)
- Quote cdktf path in init templates [\#511](https://github.com/hashicorp/terraform-cdk/issues/511)
- Include feature flags in java template and test [\#471](https://github.com/hashicorp/terraform-cdk/issues/471)
- Update jsii-srcmak to remove symlink [\#580](https://github.com/hashicorp/terraform-cdk/issues/580)
- Rename null provider for java & c# [\#589](https://github.com/hashicorp/terraform-cdk/issues/589)

**Chores:**

- Fix typo in execTerraformSynth [\#554](https://github.com/hashicorp/terraform-cdk/issues/554)
- Upgrade Java exec-maven-plugin 3.0.0 [\#536](https://github.com/hashicorp/terraform-cdk/issues/536)

## 0.1.0 (January 14, 2021)

**Implemented enhancements:**

- C# Support [\#477](https://github.com/hashicorp/terraform-cdk/issues/477)
- Terraform Cloud support with remote execution mode [\#449](https://github.com/hashicorp/terraform-cdk/issues/449)

**Fixed bugs:**

- Include feature flags in java template and test [\#471](https://github.com/hashicorp/terraform-cdk/issues/471)

**Security Updates:**

- Bump ini from 1.3.5 to 1.3.8 [\#460](https://github.com/hashicorp/terraform-cdk/issues/460)
- CVE-2020-7789 / GHSA-p9pc-299p-vxgp [\#478](https://github.com/hashicorp/terraform-cdk/issues/478) / [\#493](https://github.com/hashicorp/terraform-cdk/issues/493)

## 0.0.19 (December 6, 2020)

**Fixed bugs:**

- Depends on expansion [\#442](https://github.com/hashicorp/terraform-cdk/issues/442)
- Make sure tokens resolved before converting to json [\#439](https://github.com/hashicorp/terraform-cdk/issues/439)
- Alter reset and input names when they conflict [\#429](https://github.com/hashicorp/terraform-cdk/issues/429)
- Fix complex map attribute data source reference [\#441](https://github.com/hashicorp/terraform-cdk/issues/441)
- Remap 'equals' to 'equalTo' to work around jsii limitation [\#428](https://github.com/hashicorp/terraform-cdk/issues/428)
- Generated custom mappings [\#395](https://github.com/hashicorp/terraform-cdk/issues/395)

## 0.0.18 (November 5, 2020)

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

## 0.0.17 (September 1, 2020)

**Fixed bugs:**

- Fix Orcale Provider [\#341](https://github.com/hashicorp/terraform-cdk/issues/341)
- Run Terraform commands with `input=false` flag [\#343](https://github.com/hashicorp/terraform-cdk/issues/343)
- Use default provider caching of Terraform, rather than creating error prone symlinks [\#344](https://github.com/hashicorp/terraform-cdk/issues/344)

**Implemented enhancements:**

- Streamline CLI workflows for prebuilt providers [\#331](https://github.com/hashicorp/terraform-cdk/issues/331)
- CLI installable via Homebrew [\#342](https://github.com/hashicorp/terraform-cdk/issues/342)
- Support Terraform provider caching by default [#189](https://github.com/hashicorp/terraform-cdk/issues/189), [\#222](https://github.com/hashicorp/terraform-cdk/issues/222), [\#349](https://github.com/hashicorp/terraform-cdk/issues/349)

## 0.0.16 (August 21, 2020)

**Fixed bugs:**

- Fix TerraformProvider alias definition [\#332](https://github.com/hashicorp/terraform-cdk/issues/332)

**Implemented enhancements:**

- Checkpoint telemetry integration [\#326](https://github.com/hashicorp/terraform-cdk/issues/326)
- Adding cdktf version to the terraform user agent [\#321](https://github.com/hashicorp/terraform-cdk/issues/321)
- Migrate to jsii-srcmak [\#276](https://github.com/hashicorp/terraform-cdk/issues/276)

## 0.0.15 (August 17, 2020)

**Fixed bugs:**

- Terraform 0.13 Compatibility for 3rd Party Providers (e.g. Docker) in Python [\#309](https://github.com/hashicorp/terraform-cdk/issues/309)
- Fix Naming Collision with Config interfaces [\#300](https://github.com/hashicorp/terraform-cdk/issues/300)

**Implemented enhancements:**

- Use remote backend class for typescript template [\#313](https://github.com/hashicorp/terraform-cdk/issues/313)

## 0.0.14 (August 9, 2020)

**Implemented enhancements:**

- Terraform 0.13 Compatibility [\#285](https://github.com/hashicorp/terraform-cdk/issues/285)

**Security Updates:**

- Fix dot-prop security dependency bot alert [\#296](https://github.com/hashicorp/terraform-cdk/issues/296)

## 0.0.13 (July 31, 2020)

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

## 0.0.12 (July 18, 2020)

**Fixed bugs:**

- `cdktf init` was broken on Windows [\#198](https://github.com/hashicorp/terraform-cdk/issues/198)

## 0.0.11 (July 15, 2020)

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

## 0.0.10 (July 7, 2020)

- Bug when creating Terraform Cloud workspace via `cdktf init` (#144)

## 0.0.9 (Jul 7, 2020)

- Fix `cdktf init` issue (#139)

## 0.0.8 (July 5, 2020)

Minor bug fixes and documentation for getting started guides.

## 0.0.7 (July 3, 2020)

- Support for `cdktf diff` (#90)
- Support for `cdktf deploy` (#92)
- Support for `cdktf destroy` (#111)
- Support for Terraform Cloud via `cdktf login` (#96)
- Support for logging across the project (#100)
- New UI for `cdktf synth` and `cdktf get` (#103)
- Basic error handling support (#110)

There are other minor bug fixes included in the release. (#109, #122, #128).

## 0.0.6 (May 14, 2020)

- Typescript examples and template defaults for synthesize commands to compile application (#63)
- Terraform Output doesn't handle Optional Types (#83)

## 0.0.5 (May 13, 2020)

- Document Terraform outputs and remote backend (#64)
- Fix providers file workflow (#66)
- Stack escape hatch (#81)

## 0.0.4 (May 12, 2020)

- Getting started guide for Python (#73)
- Change output directory to `cdktf.out` for Terraform configuration (#70)
- Fix output directory argument for `cdktf synth` (#62)

## 0.0.3 (May 11, 2020)

Enable synthesis to Python

## 0.0.2-alpha.2 (May 9, 2020)

Minor output changes and updated README.md example.

## 0.0.2-alpha.1 (May 9, 2020)

Alpha release for Github and NPM

## 0.0.2 (May 8, 2020)

Initial release to GitHub and NPM.

## 0.0.1 (May 8, 2020)

Initial release of `cdktf-cli` and `cdktf` to Github and NPM registry.
