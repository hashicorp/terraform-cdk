# cdktf Integration Tests

This directory contains integration tests for the cdktf project.

Each subdirectory represents a single test, with an entrypoint of `test.sh`.
Tests are written as simple shell scripts and can simulate user activity.

## Running Tests

You can either run individual tests by executing their entrypoint directly (e.g.
`test-python-app/test.sh`) or run all tests by executing the script
`./test-all.sh`.

Tests assume the `cdktf` CLI is installed and in the PATH, and will use the same
version of the `cdktf` module (this is the behavior of `cdktf init`).

You can also execute a test (or all of them) against the `dist` build artifact:

```shell
$ yarn install
$ yarn build
$ yarn run package # creates "dist/"
$ cd test
$ ./run-against-dist ./test-all.sh
# or
$ ./run-against-dist ./test-typescript-app/test.sh
```

## Writing Tests

1. Create a new subdirectory with a `test-` prefix.
2. Create a file named `test.sh`, make it executable.

Test Environment:
- The script `test.sh` is executed within a temporary working directory under
  /tmp/xxxx/test (where xxxx is some random tmp file).
- See existing tests as examples on how to bring in auxiliary files to the test.
- Test MUST NOT install any dependencies or the `cdktf` CLI. They can expect it
  to be available in the environment.
- To install dependencies from pacakge managers, use `yarn`, `npm`, `pipenv`,
  `mvn` and `nuget`. Those programs will be shimmed to allow consuming local
  dependencies.

