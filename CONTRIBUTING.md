# Contributing

This repository contains Terraform CDK (CDKTF)– this includes the CDKTF CLI and [*CDKTF package, Convert stuff, provider generator - not sure how to list or whats immediately relevant*]. Prebuilt providers are housed in separate repositories under the [HashiCorp CDKTF organization](https://github.com/cdktf)

This document aims to provide guidance on recommended contribution practices as well as an introduction to common workflows when contributing.

Note: All communication on GitHub, the community forum, and other HashiCorp-provided communication channels is subject to the [HashiCorp community guidelines](https://www.hashicorp.com/community-guidelines).

## Questions

For general problems you encounter that may not require a core maintainer to answer, post your question in our [community forum]("https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/"). Otherwise if you believe the problem stems from a bug, please feel free to create a new issue describing the problem.

## Issues

This section goes over what we are looking for in regards to reported issues.

### Reporting an Issue

If you encounter a bug you can help us by submitting an issue, though make sure it is not covered by an existing Github issue. If you feel inclined to solve this issue yourself you can always submit a Pull Request with the fix– though be sure to create a separate issue (if one does not exist) containing the problem that can then be linked in your Pull Request.

When reporting a bug we ask that you include:

- CDKTF & language versions being used
- Affected Resource(s)
- Github Gist containing the Debug output
- Expected Behavior vs. Actual Behavior
- Steps to reproduce the issue
- Other important info about the issue
- Any relevant Github issues, pull requests, and/or documentation that provides greater context

### Proposing a Feature

In order to be respectful of the time of community contributors, we aim to discuss new potential feature and changes in GitHub issues prior to their implementation. This allows us to vet the potential utility of the change, as well as discuss how it could potentially fit into work currently being done, or a future milestone.

When proposing a feature we ask that you include:

- A description of the feature to add
- Any relevant Github issues, pull requests, blog posts, and/or documentation that provides greater context

## Pull Requests

Your pull request should have a description of what it accomplishes. If applicable, PRs should include testing that validate correctness. In all cases the existing tests must pass.

### Guidelines

Before you submit your Pull Request (PR) consider the following guidelines:

- Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.
- Be sure that an existing issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design upfront helps to ensure that we're ready to accept your work. Make sure that this issue is referenced in your PR– this can be done by including `Closes: #[issue number]` in the PR's description.
- Please sign our Contributor License Agreement (CLA) before sending PRs. We cannot accept code without a signed CLA. Make sure you author all contributed Git commits with email address associated with your CLA signature.

### Style

It is recommended that Pull Request titles follow the following format:

**Type(Affected_Component): Short description of PR**

#### Type:

- feat(Affected_Component): A addition of a feature within the Affected Component
- fix(Affected_Component): A bug fix within the Affected Component
- refactor(Affected_Component): A refactor within the Affected Component
- chore: Updates to docs, CI work, and more generally work that does not fall under the previous categories

#### Affected Component:

- cli
- cdktf
- hcl2cdk
- provider-generator
- examples

Ensuring your PR titles follow this format helps us quickly identify the purpose of the PR and scope in which it contributes.

### Pull Request Lifecycle

1. You are welcome to submit an initial draft pull request for commentary before it is fully completed. It's also helpful to include comments on items you'd like feedback on or feel needs further discussion. Once you believe your pull request is ready to be merged you can set your pull request to open.
2. When time permits, Terraform CDK team members will review your PR. From here the pull request will either be merged, or additional changed may be requested in comments. We may also have questions that we need answered about the code, due to something that needs greater clarification or just because we want to better understand your thought process.
3. When we request changes, you have two options. You can either make those changes or, if you disagree with the suggested changes, a conversation can be had about our respective reasoning's where we can then agree on a path forward. In many instances this may be a multi-step process. Pull requests are a great venue for the team and our community to collaborate, and we welcome conversations about how to improve things.
4. Once all outstanding comments and checklist items have been addressed, your contribution will be merged!

## Prerequisites

To build and install `terraform-cdk` locally you need to install:

- Node version 14.0+
- Go 1.18
- dotnet (v3.1.0)
- mvn
- pipenv

Alternatively you can work on the CDK from within a docker container with the image `docker.mirror.hashicorp.services/hashicorp/jsii-terraform`, e.g.:

```shell
$ docker run -it --rm -w=/home -v (pwd):/home docker.mirror.hashicorp.services/hashicorp/jsii-terraform
```

or through [Visual Studio Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers).

## Getting Started

Clone the repository:

```shell
$ git clone https://github.com/hashicorp/terraform-cdk.git
```

To compile the `terraform-cdk` binary for your local machine:

```shell
$ yarn install
$ yarn build
```

## Examples

We run the examples as part of our integration tests for each Pull Request. To support this, each example needs a `package.json` with at least a minmal config like this:

```json
{
  "name": "@examples/[LANGUAGE]-[EXAMPLE_NAME]",
  "version": "0.0.0",
  "license": "MPL-2.0",
  "scripts": {
    "reinstall": "rm Pipfile.lock && pipenv --rm && pipenv install", // Python only
    "build": "cdktf get",
    "synth": "cdktf synth"
  }
}
```

If the example shouldn't be run as part of the build pipeline, a `"private": true` entry can be added to `package.json`. Please make sure to add the ignore reason as JSON comment to `package.json` (e.g. `"//": "This example takes ages to build"`).

## Development

For development, you'd likely want to run:

```shell
$ yarn watch
```

This will watch for changes in all packages.

**Note (for cdktf-cli only):** We're using [esbuild](https://esbuild.github.io/) for transpilation and bundling of the Typescript code. However, `esbuild` only transpiles, but doesn't do any type checking. That's why we've added an extra step as a pre-commit hook which transpiles the code with `tsc` to ensure commits don't have type errors.

### CLI changes

If your changes target only CLI and packages used by the CLI, running `yarn watch` will be sufficient. Although it's technically a bit different from what we ship you should be able to use a direct path to our binary entry point to execute commands. You can put this in a shell alias like this:

```shell
alias cdktfl='/path/to/terraform-cdk/packages/cdktf-cli/bundle/bin/cdktf' # For running cdktf locally
alias cdktfld='node --inspect-brk /path/to/terraform-cdk/packages/cdktf-cli/bundle/bin/cdktf.js' # For running cdktf locally with debugging

$ cdktfl get
```

### Library changes

If you make changes to the library you need to run `yarn build && yarn package` to run tests against the new version. You should be able to use the typescript examples by just running `yarn watch`.

## Tests

If you just want to run the tests:

```shell
$ yarn test # to run all tests at once
$ yarn test:watch # to run all tests in watch mode
```

To run integration tests, package and run integration tests.

```shell
$ yarn package
$ yarn integration # For all integration tests
$ yarn integration:single -- typescript/synth-app # For a single integration test
```

````

If you need to update the snapshot tests, please run this for the unit tests:

```shell
$ yarn test:update
````

To update the integration tests, please run this:

```shell
$ yarn integration:update # For all integration tests
$ yarn integration:single -- -u typescript/synth-app # For a single integration test
```

## Local Usage

### Monorepo Examples

The easiest way to use this locally is using one of the [examples](./examples). They are setup as part of the monorepo and reference the local packages.

#### Typescript

All Typescript [examples](./examples/typescript) leverage yarn workspaces to directly reference symlinked packages. If you don't have `./node_modules/.bin` in your `$PATH`, you can use `$(yarn bin)/cdktf` to use the symlinked CLI.

#### Python

For Python [examples](./examples/python), packages are referenced from `./dist`, there's no symlinking possible for live code updates. You'll have to explictly run `yarn package` to create new packages to be referenced in the Pipefile.

#### Java

For Java [examples](./examples/java), packages are referenced from `./dist`, there's no symlinking possible for live code updates. You'll have to explictly run `yarn package` to create new packages to be referenced in the pom.

#### C#

For C# [examples](./examples/csharp), packages are referenced from `./dist`, there's no symlinking possible for live code updates. You'll have to explictly run `yarn package` to create new packages to be referenced in the project.

Sometimes, after re-packaging the cdktf package for C#, an already initialized example might not update that package even when running yarn reinstall. In that case you can clear your local cache by running `dotnet nuget locals all --clear` and after a `yarn reinstall` it should all be updated.

### Outside of this Monorepo

If you want to use the libraries and cli from the repo for local development, you can make use of `yarn link`.

### Setup

Unfortunately, there's an [issue](https://github.com/yarnpkg/yarn/issues/891) with globally linked binaries. This requires you to run the following:

```
yarn config set prefix $(npm config get prefix)
```

If you'd want this permanently, you can add this line to your profile settings (`~/.bashrc`, `~/.zshrc`, or `~/.profile`, etc.)

### Create link

Let's link `cdktf` and `cdktf-cli`, run the following the repository root folder:

```shell
$ yarn link-packages
$ cdktf --version
0.0.0
```

When the version equals `0.0.0` everything worked as expected. If you see another version, try uninstalling `cdktf-cli` with `npm` or `yarn`.

### Build & Package

```shell
$ yarn build && yarn package
$ export CDKTF_DIST=$(pwd)/dist
```

### Create local project

```shell
$ mkdir ~/my-local-cdktf-example
$ cd ~/my-local-cdktf-example
$ cdktf init --template typescript --local
```

Please note, that this will reference the built packages in `$CDKTF_DIST`. This means, it will reflect code changes only after repeating `yarn build && yarn package` and running an explicit `yarn install` again.

Reference the previously [linked](#create-link) `cdktf` package in our newly created project:

```shell
$ cd ~/my-local-cdktf-example
$ yarn link "cdktf"
```

From here on both, the `cli` and the `cdktf` packages are linked and changes will be reflected immediatlely.

### Known errors

#### Python

If you get this error message when trying to use a local build of `cdktf`:

> ERROR: THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE. If you have updated the package versions, please update the hashes. Otherwise, examine the package contents carefully; someone may have tampered with them.

Run:

```
./tools/align-version.sh -dev.111212112 && yarn build && yarn package
```

This builds a package with a development version which skips the tamper check in Python. (We once accidentally released `cdktf 0.0.0` which is the reason why Python knows some valid hashes for that `0.0.0` version and will fail as they won't match.)

## Rebasing contributions against main

PRs in this repo are merged using the [`rebase`](https://git-scm.com/docs/git-rebase) method. This keeps
the git history clean by adding the PR commits to the most recent end of the commit history. It also has
the benefit of keeping all the relevant commits for a given PR together, rather than spread throughout the
git history based on when the commits were first created.

If the changes in your PR do not conflict with any of the existing code in the project, then Github supports
automatic rebasing when the PR is accepted into the code. However, if there are conflicts (there will be
a warning on the PR that reads "This branch cannot be rebased due to conflicts"), you will need to manually
rebase the branch on main, fixing any conflicts along the way before the code can be merged.

## Feature Flags

Sometimes we want to introduce new breaking behavior because we believe this is
the correct default behavior for the CDK for Terraform. The problem of course is that breaking
changes are only allowed in major versions and those are rare.

To address this need, we have a feature flags pattern/mechanism. It allows us to
introduce new breaking behavior which is disabled by default (so existing
projects will not be affected) but enabled automatically for new projects
created through `cdktf init`.

The pattern is simple:

1. Define a new const under
   [cdktf/lib/features.ts](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf/lib/features.ts)
   with the name of the context key that **enables** this new feature (for
   example, `EXCLUDE_STACK_ID_FROM_LOGICAL_IDS`).
2. Use `node.tryGetContext(ENABLE_XXX)` to check if this feature is enabled
   in your code. If it is not defined, revert to the legacy behavior.
3. Add your feature flag to the `FUTURE_FLAGS` map in
   [cdktf/lib/features.ts](https://github.com/hashicorp/terraform-cdk/blob/main/packages/cdktf/lib/features.ts).
   This map is inserted to generated `cdktf.json` files for new projects created
   through `cdktf init`.
4. In your PR title (which goes into CHANGELOG), add a `(under feature flag)` suffix. e.g:

   ```
   fix(core): top level constructs should omit stack id from name (under feature flag)
   ```

5. Under `BREAKING CHANGES` in your commit message describe this new behavior:

   ```
   BREAKING CHANGE: top level resource names for new projects created through "cdktf init"
   will omit the stack id from their name. This is enabled through the flag
   `excludeStackIdFromLogicalIds` in newly generated `cdktf.json` files.
   ```

In the next major version of the
CDKTF we will either remove the
legacy behavior or flip the logic for all these features and then
reset the `FEATURE_FLAGS` map for the next cycle.

## Debugging

We recommend enabling logging when you develop new features. To get detailed information about CDKTF operations, set `CDKTF_LOG_LEVEL` to `debug`.

### JSII

To enable debug output of JSII, set `JSII_DEBUG` to e.g. `1`. There's also `JSII_DEBUG_TIMING` which can be set to e.g. `1` as well.

## Releasing

### Steps

#### Before the release

Most of our tests are automated but there are some workflows we need to manually test for now.

- Test `cdktf` against Terraform Enterprise

#### Terraform CDK

1. Create a new branch (e.g. `prepare-release-0.9.0`)
2. Update the [CHANGELOG](./CHANGELOG.md): `./tools/create-changelog.sh` should get you a good start
3. Update the version in the root `package.json`
4. Write an [upgrade guide](website/docs/cdktf/release/) (for major releases)
5. Run `yarn generate-docs` to bring our api documentation up to date
6. Create a PR to merge the new branch into `main`
7. Merge the PR, a new release will be build and published because the version changed

#### After the release

- Update the prebuilt provider repository [like this](https://github.com/hashicorp/cdktf-repository-manager/pull/48) (If the release contains breaking changes the commit message needs to have a `!` after the scope so that the minor version is bumped. Example: `chore!: update cdktf version`) and run the [prebuilt provider upgrade workflow](https://github.com/hashicorp/cdktf-repository-manager/actions/workflows/upgrade-repositories.yml)
- Update the learn examples and the end to end examples
- Check if there are PRs left behind on our [triage board](https://github.com/orgs/hashicorp/projects/125/views/4)

#### Retrying a broken deployment

The release workflow uses sentry as the source of truth for releases. The downside of that, however, is that if the release is broken at some point and a new release is required, it will not be possible to run the release workflow. In order to work around that, the sentry release needs to be reverted.

```sh
# Install Sentry CLI and login
npm i -g @sentry/cli
sentry-cli login
# List all releases (optional)
sentry-cli releases list --org hashicorp
# Delete the release, Note: there will be no confirmation for deleting the release!
sentry-cli releases delete --org hashicorp <release> # e.g. cdktf-cli-0.14.0
```

### Repositories to update

- [Docker E2E](https://github.com/hashicorp/docker-on-aws-ecs-with-terraform-cdk-using-typescript)
- [Serverless E2E](https://github.com/hashicorp/cdktf-integration-serverless-example)
- [Learn Lambda Demo](https://github.com/hashicorp/learn-cdktf-assets-stacks-lambda)
- [AWS Adapter](https://github.com/hashicorp/cdktf-aws-cdk)

### Helper for creating the changelog

Just run the following script before bumping the version, it'll create a ready to copy markdown formatted changelog.

```
./tools/create-changelog.sh
```

Other than that, you can get a list of commits since the last release you can e.g. visit a link like this: `https://github.com/hashicorp/terraform-cdk/compare/v0.4.1...main`. You'll find the PR numbers there as links.

## Backporting releases

The following section describes how to release a fix without releasing everything that had been merged to `main` since the previous release. If you want to backport a fix to an earlier major version, you can skip the last step that brings `main` back in sync with after releasing a version that `main` would normally have released to next.

You should always base your backported release on the previous release tag.

Create a branch for the new release (in this case it's going to become v0.10.4) based on the tag of the previous release (v0.10.3)

```
git checkout -b backport-release-0.10.4 v0.10.3
```

Push the newly created branch

```
git push --set-upstream origin backport-release-0.10.4
```

Create a new branch based of that backport branch to cherry pick your fixes into

```
gco -b backport-pr-1767-stop-pinning-jest
```

Add your fixes (you can use `git cherry-pick` or you can manually edit code and create commits)

```
git cherry-pick c59e5b342a4a264869c1327e64ecd6ac3010bf46 # commit hash from pr-1767
```

Create a PR against the backport-release branch (e.g. using the Github CLI)

```
gh pr create --base backport-release-0.10.4
```

It is recommended to include something along the lines of "Backported from #1767." in the PR description for future reference.

Have coworkers review the branch & merge it.

Create a release PR as you normally would do for regular releases **except basing it on your backport-release branch (e.g. `gh pr create --base backport-release-0.10.4`) and adjusting the changelog to only include backported fixes**.

Merge the Release PR and make sure that it is released successfully before proceeding with the next step.

To bring the version number back in sync with the main branch, post a PR against the `main` branch containing the changelog and incremented version from this release. Make sure that you don't drop possible "unreleased" entries (i.e. notes about breaking behaviour) that have been added to the `main` branch in the meantime. You really only want to bring the `CHANGELOG.md` and the version number in the `package.json` on `main` back in sync, so that future Release PRs will already be based on the correct version that was last released (e.g. the `create-changelog.sh` script depends on that version to be correct). The Release Github Action will only release if the version did not exist yet, so you don't need to be scared to overwrite an existing release (but also, you wouldn't be able to release another version if you tried to use the version of a backported release as that will already exist).

### Example

You can have a look at this branch and its commits / PRs for an example: [backport-release-0.10.4](https://github.com/hashicorp/terraform-cdk/commits/backport-release-0.10.4)

## Issue Grooming

To ensure we can properly prioritize new features and bugs we aim to keep our issues prioritized and sorted. We label new issues both in size (`size/small`, ..., `size/x-large`) and priority (`priority/awaiting-more-evidence`, ..., `priority/critical-urgent`) and we add labels for the affected part of the code base / effect (`cdktf-cli`, ..., `ux/cli`).

Here are GitHub links that help this process:

- [All new issues](https://github.com/hashicorp/terraform-cdk/issues?q=is%3Aopen+is%3Aissue+label%3Anew)
- [All unprioritized issues (that are not waiting for an answer)](https://github.com/hashicorp/terraform-cdk/issues?q=is%3Aopen+is%3Aissue+-label%3Apriority%2Fawaiting-more-evidence+-label%3Apriority%2Fbacklog+-label%3Apriority%2Fcritical-urgent+-label%3Apriority%2Fimportant-longterm+-label%3Apriority%2Fimportant-soon+-label%3Aneeds-priority+-label%3Awaiting-on-answer+-label%3Anew)
- [Issues to follow up on](https://github.com/hashicorp/terraform-cdk/issues?q=is%3Aopen+is%3Aissue+label%3Awaiting-on-answer+updated%3A%3C2021-11-01) (Query needs manual adjustment of the date)

## Reproducing Bugs on Windows

A good way to tackle windows related things is to use an AWS EC2 instance running Windows. Here's a Terraform repo with a bit of guideline on how to connect via Remote Desktop or VS Code Remote SSH https://github.com/skorfmann/windows-test-machine

## Documentation

The markdown files containing the documentation for CDK for Terraform are in the [`/website`](./website) directory. Refer to the [website README](./website/README.md) for more information.
