# Testing CDK Applications

Testing your application can give you faster feedback cycles and guard you against unwanted changes.
Currently testing in Typescript with jest is best supported, see [Writing your own adapter](#own-adapter) to see how you can wire in your favorite test framework.

## Unit Tests

We generate all files necessary to run jest when you run `cdktf init` so that you can start writing tests right away. If you want to add jest to an existing project, please [follow their guide](https://jestjs.io/docs/getting-started). Once done you need to add these lines in a [setup file](https://jestjs.io/docs/configuration#setupfiles-array):

```js
const cdktf = require("cdktf");
cdktf.Testing.setupJest();
```

### Writing Assertions

```ts
import { Testing } from "cdktf";
import { Image, Container } from "../.gen/providers/docker";
import MyApplicationsAbstraction from "../app"; // Could be a class extending from cdktf.Resource

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

### Snapshot Testing

Snapshot tests are a very useful tool whenever you want to make sure your infrastructure does not change unexpectedly. You can read more about them in the [Jest docs](https://jestjs.io/docs/snapshot-testing).

```ts
import { Testing } from "cdktf";
import { Image, Container } from "../.gen/providers/docker";
import MyApplicationsAbstraction from "../app"; // Could be a class extending from cdktf.Resource

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

## Writing your own adapter <a name="own-adapter"></a>

There are so many great test runners across all our supported languages that it's next to impossible to support them all.
To enable you to use the testing framework of your choice we export the matchers so that you can use them in the context of your framework.
You can import the object `testingMatchers` / `testing_matchers` (for Python) and use the matchers (e.g. `toPlanSuccessfully` / `to_plan_successfully`) directly as functions.

This is how it might look like in python, please be aware that this is untested code:

```py
from cdktf import testing, testing_matchers
from . import MyStack, MyResource
from imports.aws import SnsTopic

def test_my_resource_has_sns_topic():
    synthesized = testing.synthScope(lambda scope: MyResource(scope, "my-resource", "my-param"))
    assertion = testing_matchers.toHaveResourceWithProperties(synthesized, SnsTopic)
    assert assertion.pass
```

## Integration Testing

While we currently don't have many helpers for integration testing there are some examples one can take as inspiration:

- [CDK Day 2021](https://github.com/ansgarm/talk-cdkday-2021/tree/master/test)
