# Contributing

To build and install `terraform-cdk` locally you need to install:

- Node version 14.0+
- Go 1.16+
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

If the example shouldn't be run as part of the build pipeline, a `"private": true` entry can be added to `package.json`. Please make sure to add the ignore reason as JSON comment to `package.json` (e.g. `"//": "This example takes ages to build").

## Development

For development, you'd likely want to run:

```shell
$ yarn watch
```

This will watch for changes for the packages `cdktf` and `cdktf-cli`.

## Tests

If you just want to run the tests:

```shell
$ yarn test
```

To run integration tests, package and run integration tests.

```shell
$ yarn package
$ yarn integration
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

We recommend enabling logging when you develop new features. To get detailed information about CDKTF operations, set `CDKTF_LOG_LEVEL` to `verbose`.

## Releasing

(this section is work in progress, but contains useful information)

### Steps

#### Terraform CDK

1. Create a new branch (e.g. `prepare-release-0.9.0`)
2. Update the [CHANGELOG](./CHANGELOG.md)
3. Update the version in the root `package.json`
4. Write an [upgrade guide](website/docs/cdktf/release/)
5. Create a PR to merge the new branch into `main`
6. Merge the PR
7. A new release will be build and published because the version changed
8. Update the prebuilt provider repository [like this](https://github.com/hashicorp/cdktf-repository-manager/pull/48) (If the release contains breaking changes the commit message needs to have a `!` after the scope so that the minor version is bumped. Example: `chore!: update cdktf version`)
9. Run the [prebuilt provider upgrade workflow](https://github.com/hashicorp/cdktf-repository-manager/actions/workflows/upgrade-repositories.yml)
10. Update the learn examples and the end to end examples
11. Check if there are PRs left behind on our [triage board](https://github.com/orgs/hashicorp/projects/125/views/4)

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
