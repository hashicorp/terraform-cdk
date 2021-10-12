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
