# Upgrading to CDKTF version 0.7

## AWS Provider has namespaced resources

The AWS Provider has a size that makes it hard to navigate in editors, especially in languages that compile it to a single file like Python. We implemented namespaces that hold Resources and Data Sources the same category together, the categories can be found on the [AWS Provider page](https://registry.terraform.io/providers/hashicorp/aws/latest/docs).
If you don't use the AWS provider no action is needed, if you do you need to adjust your import statements to match the namespaces.

### Typescript

For Typescript you need to change the imports and reference the namespace

```ts
// Before
import { CloudFrontDistribution, AwsProvider, Route53Record, AcmCertificateValidation } from "./.gen/providers/aws";

// After
import { CloudFront, AwsProvider, Route53, ACM } from "./.gen/providers/aws";

// Before
new Route53Record(this, "CertValidationRecord", ...)

// After
new Route53.Route53Record(this, "CertValidationRecord", ...)
```

Alternatively you can deconstruct the namespace:

```ts
// Before
import {
  CloudFrontDistribution,
  AwsProvider,
  Route53Record,
  AcmCertificateValidation,
} from "./.gen/providers/aws";

// After
import { CloudFront, AwsProvider, Route53, ACM } from "./.gen/providers/aws";
const { CloudFrontDistribution } = CloudFront;
const { Route53Record } = Route53;
const { AcmCertificateValidation } = ACM;
```

### Python

For Python only the imports need to be changed:

```py
# Before
from imports.aws import AwsProvider, SnsTopic
# After
from imports.aws import AwsProvider
from imports.aws.sns import SnsTopic
```

### C#

For C# only the imports need to be changed:

```csharp
// Before
using aws;

// After
using aws;
using aws.sns;
```

### Java

For Java only the imports need to be changed:

```java
// Before
import imports.aws.AwsProvider;
import imports.aws.SnsTopic;

// After
import imports.aws.AwsProvider;
import imports.aws.sns.SnsTopic;
```

### Go

For Go only the imports need to be changed:

```go

// Before

import (
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)


// After
import (
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws"
	"github.com/hashicorp/terraform-cdk/examples/go/aws/generated/hashicorp/aws/ec2"

	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/hashicorp/terraform-cdk-go/cdktf"
)

```

### Simplify Provider API Surface

When generating the provider bindings we previously translated any block to an array of a certain type, both in configuration and as properties on the resource / data source instances. For blocks that can only appear once at most this is making the API harder to use. From this version on these blocks are going to be just the type instead of an array of a certain type.

To migrate you need to update the `cdktf` and `cdktf-cli` version you are using to 0.7 and run `cdktf get` in your project. The new bindings might use fewer arrays in the configuration than before, depending on the schema of the providers you use. The typesystem and `cdktf synth` will guide your migration.

The benefit of this change is that object properties can be accessed directly, e.g.

```ts
// Before
const development = new Namespace(this, "development", {
  metadata: [
    {
      name: "development",
    },
  ],
});
const deploy = new Deployment(this, "nginx", {
  metadata: [
    {
      namespace: "setViaOverride",
      name: "nginx",
    },
  ],
  //   ...
});
deploy.addOverride(
  "metadata.0.namespace",
  `\${${development.fqn}.metadata.0.name}`
);

// After
const development = new Namespace(this, "development", {
  metadata: {
    name: "development",
  },
});
new Deployment(this, "nginx", {
  metadata: {
    namespace: development.metadata.namespace,
    name: "nginx",
  },
  //   ...
});
```
