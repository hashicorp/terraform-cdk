## Unreleased Changes

**Breaking Changes**

Abbreviated version below, for a guide see [Upgrade Guide for 0.7](./docs/upgrade-guide/upgrading-to-0.7.md)

### Namespaced AWS Provider Resources [#572](https://github.com/hashicorp/terraform-cdk/issues/572)

The AWS Provider has a size that makes it hard to navigate in editors, especially in languages that compile it to a single file like Python. We implemented namespaces that hold Resources and Data Sources the same category together, the categories can be found on the [AWS Provider page](https://registry.terraform.io/providers/hashicorp/aws/latest/docs).
If you don't use the AWS provider no action is needed, if you do you need to adjust your import statements to match the namespaces. You can find more information at [the upgrade guide](./docs/upgrade-guide/upgrading-to-0.7.md).

### Simplify Provider API Surface [#258](https://github.com/hashicorp/terraform-cdk/issues/258)

When generating the provider bindings we previously translated any block to an array of a certain type, both in configuration and as properties on the resource / data source instances. For blocks that can only appear once at most this is making the API harder to use. From this version on these blocks are going to be just the type instead of an array of a certain type.
For information on how to migrate please see [the upgrade guide](./docs/upgrade-guide/upgrading-to-0.7.md).

## 0.6.4 (October 4, 2021)

**Breaking Changes**

### fix(cli): Better handle non-registry modules and improved naming [\#929](https://github.com/hashicorp/terraform-cdk/pull/929)

If you use Terraform Modules you will need to adust their names. We changed the naming to be more intuitive, e.g. `TerraformAwsModulesVpcAws` is now `Vpc`. To migrate please run `cdktf get` with this version and change your imports to match the new abbreviated form.

**Fixed Bugs**

- fix(cli): directly depend on cli-spinners v2.6.0 [\#1116](https://github.com/hashicorp/terraform-cdk/pull/1116)
- fix(cli): create .cdktf folder if needed [\#1107](https://github.com/hashicorp/terraform-cdk/pull/1107)
- fix(lib): check for null on removing metadata in testing framework [\#1075](https://github.com/hashicorp/terraform-cdk/pull/1075)
- fix: ignore build output in prettier [\#1077](https://github.com/hashicorp/terraform-cdk/pull/1077)

**Chores**

- chore(deps): bump trim-newlines from 3.0.0 to 3.0.1 [\#863](https://github.com/hashicorp/terraform-cdk/pull/863)
- chore(docs): remove roadmap link from README [\#1067](https://github.com/hashicorp/terraform-cdk/pull/1067)

## 0.6.3 (September 22, 2021)

**Features**

- feat(hcl2cdk): Add logical id override when construct id's aren't unique [\#1045](https://github.com/hashicorp/terraform-cdk/pull/1045)
- feat(lib): use jest asymetric matchers & nicer error messages [\#1052](https://github.com/hashicorp/terraform-cdk/pull/1052)

**Fixed Bugs**

- fix(hcl2cdk): Correctly handle remote state [\#1031](https://github.com/hashicorp/terraform-cdk/pull/1031)
- fix(docs): adjust setup handling in docs [\#1048](https://github.com/hashicorp/terraform-cdk/pull/1048)
- fix(cli): don't create config.json files if none was present before [\#1054](https://github.com/hashicorp/terraform-cdk/pull/1054)
- fix(lib): fix source path generated for local modules [\#947](https://github.com/hashicorp/terraform-cdk/pull/947)
- fix(docs): typo in documentation [\#1060](https://github.com/hashicorp/terraform-cdk/pull/1060)
- fix(lib): Fix release pipeline [\#1061](https://github.com/hashicorp/terraform-cdk/pull/1061)

**Chores**

- chore(tests): Build examples as matrix - 1 build per example [\#1043](https://github.com/hashicorp/terraform-cdk/pull/1043)
- chore(tests): Fix release pipeline [\#1050](https://github.com/hashicorp/terraform-cdk/pull/1050)
- chore(tests): Upgrade to jest 0.27 for integration tests and retry failed tests once [\#1051](https://github.com/hashicorp/terraform-cdk/pull/1051)
- chore(deps): bump tmpl from 1.0.4 to 1.0.5 [\#1055](https://github.com/hashicorp/terraform-cdk/pull/1055)
- chore: fix config for dependabot [\#1057](https://github.com/hashicorp/terraform-cdk/pull/1057)

## 0.6.2 (September 17, 2021)

**Fixed Bugs**

- fix(cli): replaceAll not available in node v14 [\#1036](https://github.com/hashicorp/terraform-cdk/pull/1036)
- fix(cli): fix import path for Manifest (was relative) [\#1037](https://github.com/hashicorp/terraform-cdk/pull/1037)

**Chores**

- chore: lint monorepo for relative imports between packages [\#1040](https://github.com/hashicorp/terraform-cdk/pull/1040)
- chore: remove duplicated jest interface members [\#1042](https://github.com/hashicorp/terraform-cdk/pull/1042)

**Documentation**

- feat(docs): add docs for `Testing.renderConstructTree()` [\#1029](https://github.com/hashicorp/terraform-cdk/pull/1029)

## 0.6.1 (September 16, 2021)

**Fixed Bugs**

- fix(lib): Fix testing setup [\#1027](https://github.com/hashicorp/terraform-cdk/pull/1027)

## 0.6.0 (September 15, 2021)

**Breaking Changes**

Abbreviated version below, for a guide see [Upgrade Guide for 0.6](./docs/upgrade-guide/upgrading-to-0.6.md)

### Constructs upgrade (`v3` to `v10`)

The `constructs` package serves as the base for all building blocks of the CDKs (e.g. CDK for Terraform, AWS CDK and cdk8s). Recently the `constructs` package was lifted to v10 with a few but major changes. The reason behind those was to make it future proof and stable across different CDKs. In this process the API surface area of the `constructs` base package was reduced and some functionality has been moved directly to the AWS CDK instead. For more information and the underlying motivation for the changes to the `constructs` library refer to the [Removal of Construct Compatibility Layer RFC](https://github.com/aws/aws-cdk-rfcs/blob/master/text/0192-remove-constructs-compat.md).

#### Moved functionality

- `Aspects` are now part of `cdktf` as they've been removed from `constructs`. If you use them, you need to change your import statement to import them from the `cdktf` package. The api also has changed a bit. The new way to register `Aspects` is `Aspects.of(construct).add(aspect)` instead of `construct.node.applyAspect(aspect)`.
- The `construct.node.addInfo()`, `construct.node.addWarning()` and `construct.node.addError()` methods are now available under the `Annotations.of(construct)` API: e.g. `Annotations.of(construct).addWarning('my warning')`. `Annotations` are a part of the `cdktf` base library.

#### Removed functionality

- `construct.onPrepare` / `construct.prepare()` has been removed. Instead you can use [`Aspects`](./docs/upgrade-guide/upgrading-to-0.6.md#onprepare-and-prepare-have-been-removed).
- `onSynthesize` has been removed. If you find yourself needing support for it, please file a new issue on this repo and describe your use-case.

**Features**

- feat(hcl2cdk): inform about recommended variable usage [\#875](https://github.com/hashicorp/terraform-cdk/pull/875)
- feat(lib): make asset paths change if asset content changes [\#769](https://github.com/hashicorp/terraform-cdk/pull/769)
- feat(cli): Introduce support for shell completions [\#943](https://github.com/hashicorp/terraform-cdk/pull/943)
- feat(lib): Print a hint when the app has been passed to a backend instead of the stack [\#945](https://github.com/hashicorp/terraform-cdk/pull/945)
- feat(lib): expose unit testing helpers [\#942](https://github.com/hashicorp/terraform-cdk/pull/942)
- feat(cli): detect and validate used node & go version [\#855](https://github.com/hashicorp/terraform-cdk/pull/855)
- feat(lib): expose terraform functions [\#903](https://github.com/hashicorp/terraform-cdk/pull/903)

**Documentation**

- chore(docs): add a first short note about how to release [\#864](https://github.com/hashicorp/terraform-cdk/pull/864)
- feat(docs): document how to connect CDKTF to Terraform Cloud [\#874](https://github.com/hashicorp/terraform-cdk/pull/874)
- fix(docs): update docs to be correct about outdir since multiple stacks feature [\#872](https://github.com/hashicorp/terraform-cdk/pull/872)
- fix(hcl2cdk): aliased provider missed in graph [\#876](https://github.com/hashicorp/terraform-cdk/pull/876)
- chore(docs): release pre-built providers [\#892](https://github.com/hashicorp/terraform-cdk/pull/892)
- chore(docs): update telemetry.md for 0.6 release [\#1017](https://github.com/hashicorp/terraform-cdk/pull/1017)
- chore(docs): remove custom adapter section for now [\#1021](https://github.com/hashicorp/terraform-cdk/pull/1021)
- feat(docs): upgrade guide for v0.6 [\#991](https://github.com/hashicorp/terraform-cdk/pull/991)

**Fixed Bugs**

- fix(lib): keysToSnakeCase needs to ignore intrinsic tokens [\#902](https://github.com/hashicorp/terraform-cdk/pull/902)
- fix(lib): synthesise numbers correctly [\#899](https://github.com/hashicorp/terraform-cdk/pull/899)
- fix(lib): better error for uninitialized provider [\#896](https://github.com/hashicorp/terraform-cdk/pull/896)
- fix(cli): Don't specify --user flag when running in an pip activated virtualenv [\#912](https://github.com/hashicorp/terraform-cdk/pull/912)
- fix(deps): check in husky hooks [\#919](https://github.com/hashicorp/terraform-cdk/pull/919)
- fix(lib): Alternative Validation Approach [\#911](https://github.com/hashicorp/terraform-cdk/pull/911)
- fix(cli): Don't print sensitive outputs when running deploy [\#940](https://github.com/hashicorp/terraform-cdk/pull/940)
- fix(tests): enable windows test with escapes [\#957](https://github.com/hashicorp/terraform-cdk/pull/957)
- fix(hcl2cdk): Fix convert with numeric count [\#1011](https://github.com/hashicorp/terraform-cdk/pull/1011)
- fix(lib): Module references to providers synthesizes array instead of map [\#933](https://github.com/hashicorp/terraform-cdk/pull/933)
- fix(tests): disable terraform cloud test for now [\#955](https://github.com/hashicorp/terraform-cdk/pull/955)

**Chores**

- chore(lib): speed up TS compilation [\#873](https://github.com/hashicorp/terraform-cdk/pull/873)
- chore(deps): ignore tsbuildinfo [\#894](https://github.com/hashicorp/terraform-cdk/pull/894)
- chore(docs): Brief reference for local provider usage [\#897](https://github.com/hashicorp/terraform-cdk/pull/897)
- chore(docs): Link Python Poetry community template [\#922](https://github.com/hashicorp/terraform-cdk/pull/922)
- chore(deps): bump tar from 4.4.13 to 4.4.17 [\#914](https://github.com/hashicorp/terraform-cdk/pull/914)
- chore(tests): remove unused aws provider dependency to speed up test [\#926](https://github.com/hashicorp/terraform-cdk/pull/926)
- chore: fix typos [\#927](https://github.com/hashicorp/terraform-cdk/pull/927)
- chore(lib): BREAKING CHANGE upgrade constructs lib to v10 [\#921](https://github.com/hashicorp/terraform-cdk/pull/921)
- chore(deps): Upgrade yargs to v17 [\#779](https://github.com/hashicorp/terraform-cdk/pull/779)
- chore(tests): Align workflow trigger [\#931](https://github.com/hashicorp/terraform-cdk/pull/931)
- chore(cli): Make sure Python dependencies are working locally [\#936](https://github.com/hashicorp/terraform-cdk/pull/936)
- chore(deps): bump tar from 4.4.17 to 4.4.19 [\#941](https://github.com/hashicorp/terraform-cdk/pull/941)
- chore(release): run all tests on npm test [\#962](https://github.com/hashicorp/terraform-cdk/pull/962)
- chore(hcl2cdk): Provide guidance for imports [\#949](https://github.com/hashicorp/terraform-cdk/pull/949)
- chore(deps): bump axios from 0.21.1 to 0.21.4 [\#963](https://github.com/hashicorp/terraform-cdk/pull/963)
- refactor(lib): use the same jest config everywhere [\#930](https://github.com/hashicorp/terraform-cdk/pull/930)
- feat(cli): Improve telemetry [\#895](https://github.com/hashicorp/terraform-cdk/pull/895)

## 0.5.0 (July 29, 2021)

**New Features**

- feat(cli): implement hcl2cdk [\#796](https://github.com/hashicorp/terraform-cdk/pull/796)
- feat(cli): add cdktf `watch` command [\#817](https://github.com/hashicorp/terraform-cdk/pull/817)

**Documentation**

- chore(docs): link docker integration example [\#789](https://github.com/hashicorp/terraform-cdk/pull/789)
- chore(docs): add google cloud kubernetes example [\#742](https://github.com/hashicorp/terraform-cdk/pull/742)
- chore(docs): python example for gcp cloud function [\#776](https://github.com/hashicorp/terraform-cdk/pull/776)
- chore(docs): Add serverless application guide [\#786](https://github.com/hashicorp/terraform-cdk/pull/786)
- chore(docs): link to serverless e2e example [\#795](https://github.com/hashicorp/terraform-cdk/pull/795)
- chore(docs): add examples for ucloud provider (ts/python/java/c#/go) [\#790](https://github.com/hashicorp/terraform-cdk/pull/790)
- chore(docs): add azure python link [\#773](https://github.com/hashicorp/terraform-cdk/pull/773)
- chore(docs): Enhance readme with Terraform Platform Illustration [\#778](https://github.com/hashicorp/terraform-cdk/pull/778)
- chore(docs): Add Project Maturity section to README [\#797](https://github.com/hashicorp/terraform-cdk/pull/797)
- chore(docs): Add callouts to Learn tutorials [\#767](https://github.com/hashicorp/terraform-cdk/pull/767)
- chore(docs): Create BUGPROCESS.md [\#815](https://github.com/hashicorp/terraform-cdk/pull/815)
- refactor(docs): clarify that we support all providers and modules [\#783](https://github.com/hashicorp/terraform-cdk/pull/783)
- fix(docs): remove Csharp readme in Python for #745 [\#820](https://github.com/hashicorp/terraform-cdk/pull/820)
- fix(docs): add mandatory cdktf get step [\#784](https://github.com/hashicorp/terraform-cdk/pull/784)
- fix(docs): document module generation [\#848](https://github.com/hashicorp/terraform-cdk/pull/848)

**Fixed Bugs**

- fix(cli): throw explicit error when commands are invoked outside of a cdktf project [\#854](https://github.com/hashicorp/terraform-cdk/pull/854)
- fix(cli): dont compile cdktf output directory [\#754](https://github.com/hashicorp/terraform-cdk/pull/754)
- fix(cli): dont upload .terraform folders [\#758](https://github.com/hashicorp/terraform-cdk/pull/758)
- fix(cli): polish user interaction by switching libraries [\#850](https://github.com/hashicorp/terraform-cdk/pull/850)
- fix(cli): update hint for tfstate file [\#756](https://github.com/hashicorp/terraform-cdk/pull/756)
- fix(cli): parse JSON output [\#774](https://github.com/hashicorp/terraform-cdk/pull/774)
- fix(hcl2cdk): exclude non-registry modules from the cdktf.json [\#847](https://github.com/hashicorp/terraform-cdk/pull/847)
- fix(hcl2cdk): adjust link for label renaming [\#852](https://github.com/hashicorp/terraform-cdk/pull/852)
- fix(hcl2cdk): only run get conditionally [\#846](https://github.com/hashicorp/terraform-cdk/pull/846)
- fix(hcl2cdk): camelCase backend properties [\#862](https://github.com/hashicorp/terraform-cdk/pull/862)
- fix(hcl2cdk): suffix variables and locals [\#845](https://github.com/hashicorp/terraform-cdk/pull/845)
- fix(tests): make less assumptions about environment in config.test.ts [\#832](https://github.com/hashicorp/terraform-cdk/pull/832)
- fix(lib): Add in new optional AWS route attributes [\#821](https://github.com/hashicorp/terraform-cdk/pull/821)

**Chores**

- chore(deps): use nodejs v14 version of aws jsii/superchain image [\#843](https://github.com/hashicorp/terraform-cdk/pull/843)
- chore(deps): add gcc and gcc-c++ to Dockerfile required for node-gyp [\#849](https://github.com/hashicorp/terraform-cdk/pull/849)
- chore(deps): Upgrade eslint to v7 [\#819](https://github.com/hashicorp/terraform-cdk/pull/819)
- chore(deps): bump ws from 7.4.2 to 7.4.6 [\#747](https://github.com/hashicorp/terraform-cdk/pull/747)
- chore(deps): bump y18n from 4.0.0 to 4.0.3 [\#777](https://github.com/hashicorp/terraform-cdk/pull/777)
- chore(cli): send telemetry on errors [\#829](https://github.com/hashicorp/terraform-cdk/pull/829)
- chore(cli): lint tsx files and clean up React Hooks code [\#818](https://github.com/hashicorp/terraform-cdk/pull/818)
- chore(cli): add prettier [\#793](https://github.com/hashicorp/terraform-cdk/pull/793)
- chore(lib): track overrides and backend types in stack [\#830](https://github.com/hashicorp/terraform-cdk/pull/830)
- chore(tests): Provide global PR workflow status [\#781](https://github.com/hashicorp/terraform-cdk/pull/781)

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
- Set NODE_ENV for CLI [\#129](https://github.com/hashicorp/terraform-cdk/issues/129)
- Make local state persistent [\#116](https://github.com/hashicorp/terraform-cdk/issues/116)
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
