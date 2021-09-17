---
layout: "docs"
page_title: "Modules"
sidebar_current: "cdktf"
description: "TODO: describe me"
---

# Modules

[Terraform Modules](https://www.terraform.io/docs/language/modules/index.html) are a single directory that contains one or more configuration files.

Modules let you reuse configurations across projects and teams, saving time, enforcing consistency, and reducing errors. For example, you could create a module to describe the configuration for all of your organization's public website buckets. When you package and share this module, other users can incorporate it into their configurations. As requirements evolve, you can make changes to your module once, release a new version, and apply those changes everywhere that module is used.

CDK for Terraform (CDKTF) lets you specify existing public or private modules in your `cdktf.json` file and then generates the necessary bindings so that you can use the module in your CDKTF application.

## Install Modules

CDKTF lets you use modules from the [Terraform Registry](https://registry.terraform.io/) and other sources like GitHub local, etc. in your application. For example, this TypeScript project has a `main.ts` file that defines AWS resources and uses the XX module:

```typescript
**TODO**: Please add an example similar to the one that's currently on the providers.html page
```

### Add Module to `cdktf.json`

To use a new module, first add it to the "terraformModules" array in `cdktf.json`.

To add a module from the Terraform Registry or a private registry, provide a fully qualified name `registry-namespace/module-name` :

```
TODO: Please add an Example
```

For local modules, use the object format:

```json
{
  "language": "typescript",
  "app": "npm run --silent compile && node main.js",
  "terraformProviders": ["aws@~> 2.0"],
  "terraformModules": [
      {
        "name": "my-local-module",
        "source": "./path/to/local/terraform/module" // relative to cdktf.json file
      }
    ],
}
```

-> **Note**: The [`cdktf.json` specification](../../../cdktf/cli-reference/configuration.html) contains syntax requirements for specifying a module version.


### Generate Module Bindings

Go to the working directory and run `cdktf get` to create the appropriate module bindings in the `./.gen` directory automatically. You can then use them in your application.

```
TODO: Please provide an example of using a module in an application
```



## Work with Module Outputs

Module [output values](/fundamentals/outputs.html) return data that can be used elsewhere in your configuration. CDK
for Terraform lets you use interpolated module outputs as inputs to other modules or resources.

To access outputs, use the `_output` suffix for python and the `Output` suffix for other languages.

### Output Types

The return type of the outputs is always string because the output returns an HCL expression representing the underlying Terraform resource.

When `TerraformOutput` is any other type than string you must add a typecast to compile the application (e.g. `mod.numberOutput as number`). If a module returns a list, you must use an escape hatch to access items or loop over it. An escape hatch is an object that can add to or override existing resources.

**TODO**: Can we include a real-world example of how to use an escape hatch here?

-> The [Resources](/docs/cdktf/concepts/fundamentals/resources.html) page includes more information about how to use escape hatches.

### Examples

Typescript / Java / C# / Go

**TODO**: Please write a description of what is happening below.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
// This module can come from a registry or through a local / remote reference
import MyLocalModule from "./.gen/modules/my-local-module";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const localModule = new MyLocalModule(this, "local-module", {
      ipAddress: "127.0.0.1",
    });

    new TerraformOutput(this, "dns-server", {
      value: localModule.dnsServerOutput,
    });
  }
}
```

Python

**TODO**: Please write a description of what is happening below.

```python
#!/usr/bin/env python

from constructs import Construct
from cdktf import App, TerraformStack, TerraformOutput
# This module can come from a registry or through a local / remote reference
from imports.my_local_module import MyLocalModule


class MyStack(TerraformStack):
    def __init__(self, scope: Construct, ns: str):
        super().__init__(scope, ns)

        localModule = MyLocalModule(self, "local-module", ip_address='127.0.0.1')
        TerraformOutput(self, "dns-server", value=localModule.dns_server_output)
```


## Create Modules

**TODO**: Is this another way that folks can get/use existing modules, or is it a way for them to create their own modules from inside a CDKTF App? I copyedited assuming that this was the latter, but please fix if I'm wrong.

Use `TerraformHclModule` to create Terraform modules using your chosen programming language. Once you create the module, you can reference it throughout the rest of your configuration.

-> **Note**: This doesn't have type safe inputs/outputs.


**TODO**: Can we explain what happens to these when the code gets synthesized? Does this create this configuration in a separate directory?


TypeScript example:

**TODO**: Please make this into a real-world example, rather than using "test" and "foo".

```typescript
const provider = new TestProvider(stack, "provider", {
  accessKey: "key",
  alias: "provider1",
});

const module = new TerraformHclModule(stack, "test", {
  source: "./foo",
  variables: {
    param1: "value1",
  },
  providers: [provider],
});

new TestResource(stack, "resource", {
  name: module.getString("name"),
});
```