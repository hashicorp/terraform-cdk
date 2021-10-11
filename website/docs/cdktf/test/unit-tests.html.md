---
layout: "docs"
page_title: "Unit Tests"
sidebar_current: "cdktf"
description: "Write assertions and snapshot tests for your CDK for Terraform application."
---

# Unit Tests

Testing your application can give you faster feedback cycles and guard you against unwanted changes. Currently, testing in Typescript with jest is best supported, but refer to [write your own adapter](#write-your-own-adapter) to see how you can use your favorite test framework.

We generate all files necessary to run jest when you run `cdktf init` so that you can start writing tests right away. If you want to add jest to an existing project, please [follow their guide](https://jestjs.io/docs/getting-started). Then, you need to add these lines in a [setup file](https://jestjs.io/docs/configuration#setupfiles-array):

```js
const cdktf = require("cdktf");
cdktf.Testing.setupJest();
```

### Write Assertions

The example below uses `Testing.synthScope` to test a part of the application. This creates a scope to test a subset of the application and returns a JSON string representing the synthesized HCL-JSON. Then it uses custom matchers to verify the code acts as intended.

- `toHaveResource`: Checks if a certain resource exists
- `toHaveResourceWithProperties`: Checks if a certain resource exists with all properties passed
- `toHaveDataSource`: Checks if a certain data source exists
- `toHaveDataSourceWithProperties`: Checks if a certain data source exists with all properties passed

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

### Snapshot Testing

Snapshot tests are useful when you want to make sure your infrastructure does not change unexpectedly. You can read more about them in the [Jest docs](https://jestjs.io/docs/snapshot-testing).

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

You can produce invalid Terraform configuration if you are using escape hatches in your CDK for Terraform application. You may use an escape hatch when setting up a [remote backend](/docs/cdktf/concepts/fundamentals/remote-backend.html) or when [overriding resource attributes](/docs/cdktf/concepts/fundamentals/providers.html#escape-hatch)

To test this, you can assert that [`terraform validate`](https://www.terraform.io/docs/cli/commands/validate.html) or [`terraform plan`](https://www.terraform.io/docs/cli/commands/plan.html) run successfully on all or part of your application before running `cdktf plan` or `cdktf deploy`

```ts
import { Testing } from "cdktf";

describe("Checking validity", () => {
  it("check if the produced terraform configuration is valid", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const myAbstraction = new MyApplicationsAbstraction(stack, "my-app", {});
    myAbstraction.addEndpoint("127.0.0.1"); // This could be a method your class exposes

    // We need to do a full synth to validate the terraform configuration
    expect(Testing.fullSynth(stack)).toBeValidTerraform();
  });

  it("check if this can be planned", () => {
    const app = Testing.app();
    const stack = new TerraformStack(app, "test");

    const myAbstraction = new MyApplicationsAbstraction(stack, "my-app", {});
    myAbstraction.addEndpoint("127.0.0.1"); // This could be a method your class exposes

    // We need to do a full synth to plan the terraform configuration
    expect(Testing.fullSynth(stack)).toPlanSuccessfully();
  });
});
```

## Write Your Own Adapter

We export the matchers so that you can use them in the context of your preferred testing framework. You can import the object `testingMatchers` / `testing_matchers` (for Python) and use the matchers (e.g. `toPlanSuccessfully` / `to_plan_successfully`) directly as functions.

This is an example of how this might look in Python. Please be aware that this is untested code.

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

CDK for Terraform does not currently offer many helpers for integration testing, but you can create them for your use cases. Here is a recent example: [CDK Day 2021](https://github.com/ansgarm/talk-cdkday-2021/tree/master/test).
