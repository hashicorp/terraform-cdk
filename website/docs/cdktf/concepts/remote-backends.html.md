---
layout: "docs"
page_title: "Remote Backends"
sidebar_current: "cdktf"
description: "Configure a remote backend where Terraform can store infrastructure state files remotely."
---

# Remote Backends

Terraform stores [state](https://www.terraform.io/docs/language/state/index.html) about managed infrastructure to map real-world resources to the configuration, keep track of metadata, and improve performance. Terraform stores this state in a local file by default, but you can also use a Terraform [remote backend](https://www.terraform.io/docs/backends/types/remote.html) to store state remotely.

You can configure your remote backend to be [Terraform Cloud](https://www.terraform.io/docs/cloud/index.html), another Terraform (CDKTF) [supported backend](#supported-backends), or a custom location.

## When to Use Remote Backends

Consider using a remote backend when multiple individuals or teams need access to your infrastructure state data.

[Remote state](https://www.terraform.io/docs/language/state/remote.html) makes it easier for teams to work together because all members have access to the latest state data in the remote store. It also allows you to share output values with other configurations, allowing groups to share infrastructure resources. For example, a core infrastructure team can handle building the core machines, networking, etc. and can expose some information to other teams to run their own infrastructure.

## Define Remote Backends

You can define a [JSON configuration for a remote backend](https://www.terraform.io/docs/configuration/syntax-json.html#terraform-blocks)
with a `TerraformBackend` subclass or a JSON configuration file.

The TypeScript example below uses the `TerraformBackend` subclass `RemoteBackend`.

```typescript
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new RemoteBackend(this, {
      hostname: "app.terraform.io",
      organization: "company",
      workspaces: {
        name: "my-app-prod",
      },
    });

    new TerraformOutput(this, "dns-server", {
      value: "hello-world",
    });
  }
}

const app = new App();
new Mystack(app, "hello-terraform");
```

When you call `cdktf synth`, CDKTF generates a JSON file called `remote.tf.json` in the `cdktf.out` stack sub-directory containing the synthesized CDKTF code. For example, CDKTF creates the output for a stack called `hello-terraform` in `cdktf.out/stacks/hello-terraform`.

Below is the stack output directory.

```bash
tree .
.
├── cdk.tf.json
└── remote.tf.json
```

Below is the generated `remote.tf.json` file.

```json
{
  "terraform": {
    "backend": {
      "remote": {
        "hostname": "app.terraform.io",
        "organization": "company",
        "workspaces": {
          "name": "my-app-prod"
        }
      }
    }
  }
}
```

## Initialize Remote Backends

All `cdktf` operations perform an automatic `terraform init`, but you can also initialize manually.

To initialize a remote backend, go to the corresponding stack output directory in the `cdktf.out` folder and run `terraform init`.

```shell
$ cd cdkf.out/stacks/hello-terraform
$ terraform init
```

## Migrate Local State Storage to Remote

After you define your remote backend, you can migrate existing local state files to the designated remote location. This requires moving Terraform state files to the CDK for Terraform output directory.

Consider an example project called `hello-terraform` that is using local storage to store the Terraform state. To migrate the local stage files to the remote backend:

1. Navigate into the main project directory.
2. Use `RemoteBackend` to add a new remote backend.

   ```typescript
   const stack = new MyStack(app, "hello-terraform");
   new RemoteBackend(stack, {
     hostname: "app.terraform.io",
     organization: "company",
     workspaces: {
       name: "my-app-prod",
     },
   });
   ```

3. Run `cdktf synth` to generate the Terraform configuration file.
4. Move the Terraform state file into the output directory.

   ```bash
   mv terraform.hello-terraform.tfstate cdktf.out/stacks/hello-terraform
   ```

5. Navigate to `cdktf.out/stacks/hello-terraform` and run `terraform init`. CDKTF prints the following output:

   ```
   Initializing the backend...
   Do you want to copy existing state to the new backend?
     Pre-existing state was found while migrating the previous "local" backend to the
     newly configured "remote" backend. No existing state was found in the newly
     configured "remote" backend. Do you want to copy this state to the new "remote"
     backend? Enter "yes" to copy and "no" to start with an empty state.

     Enter a value: yes

     Successfully configured the backend "remote"! Terraform will automatically
     use this backend unless the backend configuration changes.

     Initializing provider plugins...

     .....
     Terraform has been successfully initialized!

     You may now begin working with Terraform. Try running "terraform plan" to see
     any changes that are required for your infrastructure. All Terraform commands
     should now work.

     If you ever set or change modules or backend configuration for Terraform, 
     other cdktf cli commands will detect the change and prompt you to rerun this command if necessary.

   ```

6. Run`cdktf diff` in the root `hello-terraform` directory to validate state migration. CDKTF prints the following output:

   ```bash
   Stack: hello-terraform

   Diff: 0 to create, 0 to update, 0 to delete.

   ```

   With the remote backend type in this example, a diff would indicate that the state was not migrated properly. There are no changes to the stack, which means the migration was successful. Consult the documentation for the remote backend you are using to understand how to validate state migration.

# Supported Backends

In addition to Terraform Cloud, Terraform and CDKTF support the following backends.

- [local](https://www.terraform.io/docs/backends/types/local.html)
  ```typescript
  new LocalBackend(stack, {...});
  ```
- [artifactory](https://www.terraform.io/docs/backends/types/artifactory.html)
  ```typescript
  new ArtifactoryBackend(stack, {...});
  ```
- [azurerm](https://www.terraform.io/docs/backends/types/azurerm.html)
  ```typescript
  new AzurermBackend(stack, {...});
  ```
- [consul](https://www.terraform.io/docs/backends/types/consul.html)
  ```typescript
  new ConsulBackend(stack, {...});
  ```
- [cos](https://www.terraform.io/docs/backends/types/cos.html)
  ```typescript
  new CosBackend(stack, {...});
  ```
- [etcd](https://www.terraform.io/docs/backends/types/etcd.html)
  ```typescript
  new EtcdBackend(stack, {...});
  ```
- [etcdv3](https://www.terraform.io/docs/backends/types/etcdv3.html)
  ```typescript
  new EtcdV3Backend(stack, {...});
  ```
- [gcs](https://www.terraform.io/docs/backends/types/gcs.html)
  ```typescript
  new GcsBackend(stack, {...});
  ```
- [http](https://www.terraform.io/docs/backends/types/http.html)
  ```typescript
  new HttpBackend(stack, {...});
  ```
- [manta](https://www.terraform.io/docs/backends/types/manta.html)
  ```typescript
  new MantaBackend(stack, {...});
  ```
- [oss](https://www.terraform.io/docs/backends/types/oss.html)
  ```typescript
  new OssBackend(stack, {...});
  ```
- [pg](https://www.terraform.io/docs/backends/types/pg.html)
  ```typescript
  new PgBackend(stack, {...});
  ```
- [s3](https://www.terraform.io/docs/backends/types/s3.html)
  ```typescript
  new S3Backend(stack, {...});
  ```
- [swift](https://www.terraform.io/docs/backends/types/swift.html)
  ```typescript
  new SwiftBackend(stack, {...});
  ```

## Escape Hatches

Escape hatches can add to or override existing resources, and you can use them for backends or backend constructs that CDKTF does not natively support. Escape hatch methods have an `Override` suffix (e.g., `addOverride`).

The example below uses an escape hatch to add an unsupported remote backend on a Stack object.

```typescript
stack.addOverride("terraform.backend", {
  atlas: {
    name: "example_corp/networking-prod",
    address: "https://app.terraform.io",
  },
});
```
