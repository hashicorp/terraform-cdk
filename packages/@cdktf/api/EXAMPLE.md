# Example

**Generated from ./example.ts**

## Typescript

```ts
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformOutput } from "cdktf";
import { Api } from "./lib";

const dirApp = Api.localApp(process.cwd());

dirApp.synth().then(async (synthedDirApp) => {
  const stack = synthedDirApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();
});

const inlineApp = Api.inlineApp({
  produce(app) {
    const stack = new TerraformStack(app, "my-stack");
    new TerraformOutput(stack, "my-output", {
      value: "my-value",
    });
  },
});

inlineApp.synth().then(async (synthedInlineApp) => {
  const stack = synthedInlineApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();

  // Run some tests
  await stack.destroy();
});
```

## Python

```python
# Copyright (c) HashiCorp, Inc
# SPDX-License-Identifier: MPL-2.0
from cdktf import TerraformStack, TerraformOutput
from cdktf_api import Api

dir_app = Api.local_app(process.cwd())

dir_app.synth().then(async (synthedDirApp) => {
      const stack = synthedDirApp.stacks["my-stack"];

      const plan = await stack.plan();
      console.log(plan);
      await stack.deploy();
    })

inline_app = Api.inline_app({
    def produce(app):
        stack = TerraformStack(app, "my-stack")
        TerraformOutput(stack, "my-output",
            "value"="my-value"
        )
})

inline_app.synth().then(async (synthedInlineApp) => {
      const stack = synthedInlineApp.stacks["my-stack"];

      const plan = await stack.plan();
      console.log(plan);
      await stack.deploy();

      // Run some tests
      await stack.destroy();
    })
```

## Java

```java
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf_api.Api;

CdktfApplication dirApp = Api.localApp(process.cwd());

dirApp.synth().then(async (synthedDirApp) => {
  const stack = synthedDirApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();
});

CdktfApplication inlineApp = Api.inlineApp(Map.of(
        public void produce(Object app) {
            TerraformStack stack = new TerraformStack(app, "my-stack");
            TerraformOutput.Builder.create(stack, "my-output")
                    "value", "my-value"
                    .build();
        }));

inlineApp.synth().then(async (synthedInlineApp) => {
  const stack = synthedInlineApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();

  // Run some tests
  await stack.destroy();
});
```

## C#

```csharp
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
using HashiCorp.Cdktf;
using HashiCorp.CdktfApi;

CdktfApplication dirApp = Api.LocalApp(process.Cwd());

dirApp.Synth().Then(async (synthedDirApp) => {
  const stack = synthedDirApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();
});

CdktfApplication inlineApp = Api.InlineApp(new Dictionary<string, object> {
    public void Produce(void app)
    {
        TerraformStack stack = new TerraformStack(app, "my-stack");
        new TerraformOutput(stack, "my-output", new TerraformOutputConfig {
            { "value", "my-value" }
        });
    }
});

inlineApp.Synth().Then(async (synthedInlineApp) => {
  const stack = synthedInlineApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();

  // Run some tests
  await stack.destroy();
});
```

## Go

```go
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
using HashiCorp.Cdktf;
using HashiCorp.CdktfApi;

CdktfApplication dirApp = Api.LocalApp(process.Cwd());

dirApp.Synth().Then(async (synthedDirApp) => {
  const stack = synthedDirApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();
});

CdktfApplication inlineApp = Api.InlineApp(new Dictionary<string, object> {
    public void Produce(void app)
    {
        TerraformStack stack = new TerraformStack(app, "my-stack");
        new TerraformOutput(stack, "my-output", new TerraformOutputConfig {
            { "value", "my-value" }
        });
    }
});

inlineApp.Synth().Then(async (synthedInlineApp) => {
  const stack = synthedInlineApp.stacks["my-stack"];

  const plan = await stack.plan();
  console.log(plan);
  await stack.deploy();

  // Run some tests
  await stack.destroy();
});
```
