# Testing CDK Applications

Testing your application can give you faster feedback cycles and guard you against unwanted changes.

## Unit Tests

Unit testing is currently only supported for Typescript with jest.
We generate all files necessary to run jest when you run `cdktf init` so that you can start writing tests right away. If you want to add jest to an existing project, please [follow their guide](https://jestjs.io/docs/getting-started). Once done you need to add these lines in a [setup file after env](https://jestjs.io/docs/configuration#setupfilesafterenv-array) (you can configure this via the `setupFilesAfterEnv` key in your jest configuration, it takes an array of file paths as input):

```js
const cdktf = require("cdktf");
cdktf.Testing.setupJest();
```

### Writing Assertions

```ts
import { Testing } from "cdktf";
import { Image, Container } from "../.gen/providers/docker";
import MyApplicationsAbstraction from "../app"; // Could be a class extending from cdktf.Resource
import "cdktf/lib/testing/adapters/jest"; // This is needed to get Typescript types for the new matchers

describe("Unit testing using assertions", () => {
  it("should contain a container", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyApplicationsAbstraction(scope, "my-app", {});
      })
    ).toHaveResource(Container);
  });

  it("should use an ubuntu image", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyApplicationsAbstraction(scope, "my-app", {});
      })
    ).toHaveResourceWithProperties(Image, { name: "ubuntu:latest" });
  });
});
```

In the example above we use `Testing.synthScope` to test a part of the application. This creates a scope we can use to test a subset of the application and returns a JSON string representing the synthesized HCL-JSON. We can then use custom matchers to verify our code acts as intended.

- `toHaveResource`: Checks if a certain resource exists
- `toHaveResourceWithProperties`: Checks if a certain resource exists with all properties passed
- `toHaveDataSource`: Checks if a certain data source exists
- `toHaveDataSourceWithProperties`: Checks if a certain data source exists with all properties passed

Since we are using jest you can also use asymetric matchers like [`expect.anything()`](https://jestjs.io/docs/expect#expectanything), [`expect.arrayContaining([...])`](https://jestjs.io/docs/expect#expectarraycontainingarray), and [`expect.objectContaining({...})`](https://jestjs.io/docs/expect#expectobjectcontainingobject):

```ts
expect(synthesized).toHaveResourceWithProperties(aws.S3Bucket, {
  bucketPrefix: `sls-example-frontend-test`,
  website: [
    expect.objectContaining({
      indexDocument: "index.html",
      errorDocument: "index.html",
    }),
  ],
});
```

### Snapshot Testing

Snapshot tests are a very useful tool whenever you want to make sure your infrastructure does not change unexpectedly. You can read more about them in the [Jest docs](https://jestjs.io/docs/snapshot-testing).

```ts
import { Testing } from "cdktf";
import { Image, Container } from "../.gen/providers/docker";
import MyApplicationsAbstraction from "../app"; // Could be a class extending from cdktf.Resource
import "cdktf/lib/testing/adapters/jest"; // This is needed to get Typescript types for the new matchers

describe("Unit testing using snapshots", () => {
  it("Tests a custom abstraction", () => {
    expect(
      Testing.synthScope((stack) => {
        const app = new MyApplicationsAbstraction(scope, "my-app", {});
        app.addEndpoint("127.0.0.1"); // This could be a method your class exposes
      })
    ).toMatchInlineSnapshot(); // There is also .toMatchSnapshot() to write the snapshot to a file
  });
});
```

Besides `Testing.synthScope()` there is also `Testing.renderConstructTree()` which does not synthesize anything but prints a tree of the structure of your constructs. This can be used to assert an exact structure (without looking at the parameters inside).

```ts
import { Testing } from "cdktf";
import MyApp from "../app"; // could be your root cdktf.App

describe("Unit testing using snapshots", () => {
  it("Tests a constructs tree structure", () => {
    const app = new MyApp();
    expect(Testing.renderConstructTree(app)).toMatchInlineSnapshot(`
        "App
        └── MyStack (TerraformStack)
            ├── Resource1 (MyResource)
            └── Resource2 (MyResource)
        "
      `);
  });
});
```

### Integration with Terraform

When using [overrides](./escape-hatch.md) it can happen that you produce invalid Terraform configuration.
To test this before running `cdktf plan` / `cdktf deploy` you can assert that [`terraform validate`](https://www.terraform.io/docs/cli/commands/validate.html) or [`terraform plan`](https://www.terraform.io/docs/cli/commands/plan.html) run successfully (even on parts of your application).

```ts
import { Testing } from "cdktf";

describe("Checking validity", () => {
  it("check if the produced terraform configuration is valid", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const app = new MyApplicationsAbstraction(stack, "my-app", {});
    app.addEndpoint("127.0.0.1"); // This could be a method your class exposes

    // We need to do a full synth to validate the terraform configuration
    expect(Testing.fullSynth(app)).toBeValidTerraform();
  });

  it("check if this can be planned", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const app = new MyApplicationsAbstraction(stack, "my-app", {});
    app.addEndpoint("127.0.0.1"); // This could be a method your class exposes

    // We need to do a full synth to plan the terraform configuration
    expect(Testing.fullSynth(app)).toPlanSuccessfully();
  });
});
```

## Integration Testing

While we currently don't have many helpers for integration testing there are some examples one can take as inspiration:

- [CDK Day 2021](https://github.com/ansgarm/talk-cdkday-2021/tree/master/test)
