# Example

**Generated from ./example.ts**

## Typescript

```ts
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformStack, TerraformOutput } from "cdktf";
import { CdktfApplication } from "./lib";

const dirApp = new CdktfApplication({
  cwd: process.cwd(),
});

const synthedDirApp = dirApp.synth();
synthedDirApp.plan();
synthedDirApp.deploy();

const inlineApp = new CdktfApplication({
  program(app) {
    const stack = new TerraformStack(app, "my-stack");
    new TerraformOutput(stack, "my-output", {
      value: "my-value",
    });
  },
});
const synthedInlineApp = inlineApp.synth();
synthedInlineApp.plan();
synthedInlineApp.deploy();
```

## Python

```python
# Copyright (c) HashiCorp, Inc
# SPDX-License-Identifier: MPL-2.0
from cdktf import TerraformStack, TerraformOutput
from cdktf_api import CdktfApplication

dir_app = CdktfApplication({
    "cwd": process.cwd()
})

synthed_dir_app = dir_app.synth()
synthed_dir_app.plan()
synthed_dir_app.deploy()

inline_app = CdktfApplication({
    def program(app):
        stack = TerraformStack(app, "my-stack")
        TerraformOutput(stack, "my-output",
            "value"="my-value"
        )
})
synthed_inline_app = inline_app.synth()
synthed_inline_app.plan()
synthed_inline_app.deploy()
```

## Java

```java
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformOutput;
import com.hashicorp.cdktf_api.CdktfApplication;

CdktfApplication dirApp = new CdktfApplication(Map.of(
        "cwd", process.cwd()));

SynthesizedApplication synthedDirApp = dirApp.synth();
synthedDirApp.plan();
synthedDirApp.deploy();

CdktfApplication inlineApp = new CdktfApplication(Map.of(
        public void program(Object app) {
            TerraformStack stack = new TerraformStack(app, "my-stack");
            TerraformOutput.Builder.create(stack, "my-output")
                    "value", "my-value"
                    .build();
        }));
SynthesizedApplication synthedInlineApp = inlineApp.synth();
synthedInlineApp.plan();
synthedInlineApp.deploy();
```

## C#

```csharp
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
using HashiCorp.Cdktf;
using HashiCorp.CdktfApi;

CdktfApplication dirApp = new CdktfApplication(new Dictionary<string, string?> {
    { "cwd", process.Cwd() }
});

SynthesizedApplication synthedDirApp = dirApp.Synth();
synthedDirApp.Plan();
synthedDirApp.Deploy();

CdktfApplication inlineApp = new CdktfApplication(new Dictionary<string, object> {
    public void Program(void app)
    {
        TerraformStack stack = new TerraformStack(app, "my-stack");
        new TerraformOutput(stack, "my-output", new TerraformOutputConfig {
            { "value", "my-value" }
        });
    }
});
SynthesizedApplication synthedInlineApp = inlineApp.Synth();
synthedInlineApp.Plan();
synthedInlineApp.Deploy();
```

## Go

```go
// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
using HashiCorp.Cdktf;
using HashiCorp.CdktfApi;

CdktfApplication dirApp = new CdktfApplication(new Dictionary<string, string?> {
    { "cwd", process.Cwd() }
});

SynthesizedApplication synthedDirApp = dirApp.Synth();
synthedDirApp.Plan();
synthedDirApp.Deploy();

CdktfApplication inlineApp = new CdktfApplication(new Dictionary<string, object> {
    public void Program(void app)
    {
        TerraformStack stack = new TerraformStack(app, "my-stack");
        new TerraformOutput(stack, "my-output", new TerraformOutputConfig {
            { "value", "my-value" }
        });
    }
});
SynthesizedApplication synthedInlineApp = inlineApp.Synth();
synthedInlineApp.Plan();
synthedInlineApp.Deploy();
```
