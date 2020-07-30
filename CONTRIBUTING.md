# Contributing

To build and install `terraform-cdk` locally, Node version 12.16+

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

This will also build all [Typescript examples](./examples/typescript).

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

Since Python packges are referenced from `./dist`, there's no symlinking possible for live code updates. You'll have to explictly run `yarn package` to create new packages to be referenced in the Pipefile.

### Outside of this Monorepo

If you want to use the libraries and cli from the repo for local development, you can make use of `yarn link`. 

### Setup

Unfortunately, there's an [issue](https://github.com/yarnpkg/yarn/issues/891) with globally linked binaries. This requires you to run the following:

```
yarn config set prefix $(npm config get prefix)
```

If you'd want this permanently, you can add this line to your profile settings (`~/.bashrc`, `~/.zshrc`, or `~/.profile`, etc.)

### Create link

```shell
$ cd packages/cdktf-cli
$ yarn link
$ cd -
$ cdktf --version
0.0.0
```

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

Please not, that this will reference the built packages in `$CDKTF_DIST`. This means, it will reflect code changes only after repeating `yarn build && yarn package` and running an explicit `yarn install` again.

To reference the `cdktf` package directly, let's create another link:

```shell
$ cd packages/cdktf
$ yarn link
```

And reference this link in our newly created project:

```shell
$ cd ~/my-local-cdktf-example
$ yarn link "cdktf"
```

From here on both, the `cli` and the `cdktf` packages are linked and changes will be reflected immediatlely.

## Rebasing contributions against master

PRs in this repo are merged using the [`rebase`](https://git-scm.com/docs/git-rebase) method. This keeps
the git history clean by adding the PR commits to the most recent end of the commit history. It also has
the benefit of keeping all the relevant commits for a given PR together, rather than spread throughout the
git history based on when the commits were first created.

If the changes in your PR do not conflict with any of the existing code in the project, then Github supports
automatic rebasing when the PR is accepted into the code. However, if there are conflicts (there will be
a warning on the PR that reads "This branch cannot be rebased due to conflicts"), you will need to manually
rebase the branch on master, fixing any conflicts along the way before the code can be merged.
