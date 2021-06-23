# Escape Hatch

Escape hatches refer to objects that can add to or override existing resources.
Use escape hatches for overrides and additions such as:

- Passing meta-arguments to resources not natively supported or implemented
- Passing remote backend information

Escape hatches **must not** have empty arguments or objects, as they will be
removed from the synthesized JSON configuration.

## Stack Escape Hatch

For anything on the top-level `terraform` block that is not natively
implemented, use the **stack escape hatch** to define a configuration. For example,
define remote backend using the `addOverride` method in TypeScript.

```typescript
stack.addOverride("terraform.backend", {
  remote: {
    organization: "test",
    workspaces: {
      name: "test",
    },
  },
});
```

This will synthesize a Terraform configuration with the remote backend included in
the `terraform` block.

```json
{
  "terraform": {
    "required_providers": {
      "aws": "~> 2.0"
    },
    "backend": {
      "remote": {
        "organization": "test",
        "workspaces": {
          "name": "test"
        }
      }
    }
  }
}
```

## Resource Escape Hatch

Terraform supports meta-arguments for changing behavior of resources, including:

- `count`
- `provisioner`
- `for_each`

In addition to Terraform [resource meta-arguments](https://www.terraform.io/docs/configuration/resources.html#meta-arguments),
you may want to override resource attributes that cannot be fully expressed by the CDK for Terraform.

To facilitate the addition of meta-arguments and attributes, you can use an **escape hatch** that will add to
or override the Terraform JSON configuration. Use the escape hatch to add meta-arguments or attributes released
in new versions of Terraform and its providers.

For TypeScript, define a provisioner for a resource using the `addOverride` method.

```typescript
const tableName = "my-table";

const table = new DynamodbTable(this, "Hello", {
  name: tableName,
  hashKey: "id",
  attribute: [{ name: "id", type: "S" }],
});

table.addOverride("provisioner", [
  {
    "local-exec": {
      command: `aws dynamodb create-backup --table-name ${tableName} --backup-name ${tableName}-backup`,
    },
  },
]);
```

This will synthesize a Terraform configuration with the [provisioner added to the JSON object](https://www.terraform.io/docs/configuration/syntax-json.html#nested-block-mapping).

```json
{
  "resource": {
    "aws_dynamodb_table": {
      "helloterraHello69872235": {
        "hash_key": "temp",
        "name": "my-table",
        "attribute": [
          {
            "name": "id",
            "type": "S"
          }
        ],
        "provisioner": [
          {
            "local-exec": {
              "command": "aws dynamodb create-backup --table-name my-table --backup-name my-table-backup"
            }
          }
        ]
      }
    }
  }
}
```

To override an attribute, include the resource attribute key in `addOverride`. Note the attribute in the
escape hatch is in snake case. This is because the Terraform JSON configuration uses snake case instead of
camel case.

```typescript
const topic = new SnsTopic(this, "Topic", {
  displayName: "will-be-overwritten",
});
topic.addOverride("display_name", "my-topic");
```

This will synthesize a Terraform configuration with the value overwritten.

```json
{
  "resource": {
    "aws_sns_topic": {
      "helloterraTopic6609C1D4": {
        "display_name": "my-topic"
      }
    }
  }
}
```
