# Contributing

To build and install `terraform-cdk` locally you need to install:

- Node version 12.16+
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

When developing new features it can be helpful to enable logging. By setting `CDKTF_LOG_LEVEL` to verbose you can see more information in general. When working with the provider generation you can set `DEBUG=true` to see which types of attributes are not supported yet.

## Releasing

(this section is work in progress, but contains useful information)

### Steps

#### Terraform CDK

1. Create a new branch (e.g. `prepare-release-0.5.0`)
2. Update the version in the root `package.json`
3. Update the [CHANGELOG](./CHANGELOG.md)
4. Create a PR to merge the new branch into `main`
5. Merge the PR
6. A new release will be build and published because the version changed

### Helper for creating the changelog

```javascript
const exec = (cmd) => require("child_process").execSync(cmd).toString();
const lastReleasedVersion = require("../package.json").version;
const prs = exec(
  `git log v${lastReleasedVersion}..HEAD | grep "Merge pull request #"`
)
  .split(" ")
  .filter((word) => word.match(/#\d*/))
  .map((word) => parseInt(word.replace("#", ""), 10));

const json = JSON.parse(
  exec("gh pr list --state merged --json number,title --limit 200")
); // just a high enough limit

function getType(prTitle) {
  if (prTitle.indexOf("(") !== -1) {
    return prTitle.slice(0, prTitle.indexOf("("));
  } else {
    return "Other";
  }
}
const titleMap = json.reduce(
  (map, pr) => ({ ...map, [pr.number]: pr.title }),
  {}
);
const typeMap = json.reduce((map, pr) => {
  const type = getType(pr.title);

  return { ...map, [type]: [...(map[type] || []), pr.number] };
}, {});

const lines = Object.entries(typeMap).map(([type, prsPerType]) => {
  const content = prsPerType
    .filter((pr) => prs.includes(pr))
    .map((num) => {
      if (titleMap[num])
        return `- ${titleMap[num]} [\\#${num}](https://github.com/hashicorp/terraform-cdk/pull/${num})`;
      else throw new Error(`no json data for PR #${num}`);
    })
    .join("\n");

  return `### ${type}\n${content}\n\n`;
});
console.log(lines.join("\n"));
```

To get a list of commits since the last release you can e.g. visit a link like this: `https://github.com/hashicorp/terraform-cdk/compare/v0.4.1...main`. You'll find the PR numbers there as links. This should probably be automated at some point – at best using existing tooling for this :)

#### Prebuilt Providers

We have a bunch of prebuilt providers which are depending on the current minor version of `cdktf`, e.g. `~> 0.5`.

Right now the upgrade is a rather manual process. However, we're aiming to improve this.

1. Update the [provider project](https://github.com/terraform-cdk-providers/cdktf-provider-project) and change the [cdktf version](https://github.com/terraform-cdk-providers/cdktf-provider-project/blob/90d8c1a873437904060b2ec51d8fe607d7170828/src/cdktf-config.ts#L16) with a pull request. Make sure the title of the PR starts with `BREAKING CHANGE:`, which will bump the version accordingly when the PR is merged. The release process after merging the PR is fully automated
2. Once the `provider project` package got published, the actual providers can be upgraded as well.

Here's an example script for the `0.5` upgrade. It assumes that the provider repositories were checked out locally relative to the script.

```js
#!/usr/bin/env node

const path = require("path");
const ps = require("child_process");

// Please check the projects at https://cdk.tf/provider to ensure all the projects are up to date.
const directories = [
  "cdktf-provider-aws",
  "cdktf-provider-azurerm",
  "cdktf-provider-docker",
  "cdktf-provider-github",
  "cdktf-provider-google",
  "cdktf-provider-kubernetes",
  "cdktf-provider-null",
  "cdktf-provider-external",
  `cdktf-provider-datadog`,
];

directories.forEach((directory) => {
  const [scope, namespace, provider] = directory.split("-");

  console.log(
    `running in ${directory} - https://cdk.tf/${namespace}/${provider}`
  );

  const workingDir = path.join(__dirname, directory);
  const prepareScript = `git reset --hard && git clean -fdx && git checkout master && git up`;
  const script = `
    git checkout -b upgrade-cdktf-0.5 && yarn add --dev @cdktf/provider-project@latest && npx projen && git commit -am "BREAKING CHANGE: Bump cdktf dependency to 0.5 \n\n See https://github.com/hashicorp/terraform-cdk/pull/857" && yarn fetch && yarn compile && yarn docgen && yarn run commit && git push --set-upstream origin upgrade-cdktf-0.5
  `;
  ps.execSync(prepareScript, { cwd: workingDir, stdio: [null, null, null] });
  ps.execSync(script, {
    cwd: workingDir,
    stdio: ["inherit", "inherit", "inherit"],
  });
});
```
