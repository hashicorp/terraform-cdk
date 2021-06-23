# cdktf Integration Tests

This directory contains integration tests for the cdktf project.

Each subdirectory represents a target language, where each test is another nested folder, with an entrypoint of `test.ts`.
Tests are written in Typescript and Jest and can simulate user activity.

## Running Tests

You can either run individual tests by executing their entrypoint directly (e.g.
`npx jest --runInBand typescript/synth-app/test.ts`) or run all tests by executing `npx jest --runInBand`.

Tests assume the `cdktf` CLI is installed and in the PATH, and will use the same
version of the `cdktf` module (this is the behavior of `cdktf init`).

You can also execute a test (or all of them) against the `dist` build artifact:

```shell
$ yarn install
$ yarn build
$ yarn run package # creates "dist/"
$ cd test
$ ./run-against-dist npx jest --runInBand
```

## Writing Tests

1. Create a new subdirectory in the directory of your target language.
2. Create a file named `test.ts`

Test Environment:

- The test script is executed within a temporary working directory under
  /tmp/xxxx/test (where xxxx is some random tmp file).
- See existing tests as examples on how to bring in auxiliary files to the test.
- Test MUST NOT install any dependencies or the `cdktf` CLI. They can expect it
  to be available in the environment.
- To install dependencies from pacakge managers, use `yarn`, `npm`, `pipenv`,
  `mvn` and `nuget`. Those programs will be shimmed to allow consuming local
  dependencies.
