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
$ yarn edge:install
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

## Edge Provider Tests

To test all edge cases without building all providers we create an edge provider that contains all these edge cases.
The provider lives under `packages/@cdktf/provider-generator/lib/__tests__/edge-provider-schema` and the provider bindings are tested there through snapshots.
We generate the schema into `packages/@cdktf/provider-generator/edge-provider-bindings` on build and copy them through GH Actions or the `edge:install` command.

We also build a helper to translate an initial version of these tests through the different languages, `edge:translateTests` takes the typescript `main.ts` and translates it to the other languages. The translation is not perfect, but a good start.
