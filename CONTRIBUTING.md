# Contributing

To build and install `terraform-cdk` locally, Node version 12.16+

Clone the repository:

```shell
$ git clone https://github.com/hashicorp/terraform-cdk.git
```

To compile the `terraform-cdk` binary for your local machine:

```shell
$ yarn install
$ yarn build
```

If you just want to run the tests:

```shell
$ yarn test
```

To run integration tests, package and run integration tests.

```shell
$ yarn package
$ yarn integration
```

### Rebasing contributions against master

PRs in this repo are merged using the [`rebase`](https://git-scm.com/docs/git-rebase) method. This keeps
the git history clean by adding the PR commits to the most recent end of the commit history. It also has
the benefit of keeping all the relevant commits for a given PR together, rather than spread throughout the
git history based on when the commits were first created.

If the changes in your PR do not conflict with any of the existing code in the project, then Github supports
automatic rebasing when the PR is accepted into the code. However, if there are conflicts (there will be
a warning on the PR that reads "This branch cannot be rebased due to conflicts"), you will need to manually
rebase the branch on master, fixing any conflicts along the way before the code can be merged.
