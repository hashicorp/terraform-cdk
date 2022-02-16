# Building a serverless application with CDK for Terraform using TypeScript

This guide walks you through a codebase that uses the CDK for Terraform to
deploy a serverless application to AWS. The application features a small
frontend written in [React](https://reactjs.org/) that connects to an API
powered by AWS APIGateway and AWS Lambda.

The repository can be found here:
https://github.com/hashicorp/cdktf-integration-serverless-example  
(includes screenshots)

There are also examples available using Docker containers on
[AWS ECS](https://github.com/hashicorp/docker-on-aws-ecs-with-terraform-cdk-using-typescript)
or [GCP K8S](https://github.com/hashicorp/kubernetes-on-gcp-with-terraform-cdk).

## Preface

This guide assumes basic familiarity with the CDK for Terraform and that you have
it installed already. If you are new to the CDKTF it is recommended to first
have a look at the [getting started guide](../getting-started/typescript.md)
which explains the CDK for Terraform itself in more detail and the commands used
to deploy infrastructure. This guide will mainly explain the codebase of the
serverless example and what it does.  
For a simpler serverless example there is also a step by step tutorial on
[HashiCorp Learn](https://learn.hashicorp.com/tutorials/terraform/cdktf-assets-stacks-lambda).

## Further requirements

- [`aws` CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)  
  The deployment of the frontend requires the AWS CLI to be installed on your
  system.

## Init

The project was initialized using the following `cdktf init` command:

```
cdktf init --local --template=typescript
```

You can either clone the whole
[repository](https://github.com/hashicorp/cdktf-integration-serverless-example)
or initialize a new one with the aforementioned command and copy the code from
the example repo as we move along and discuss it.

### AWS Credentials

The example uses environment variables to configure the access credentials for
the AWS Terraform provider. You can refer to
[its docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#environment-variables)
to see which variables to set.

## Stacks

in the root directory of the example you can find the `main.ts` file which
contains the configuration for the stacks that are going to be deployed. A stack
has its own Terraform state and is deployed separately from other stacks.  
The example consists of three stacks:

- FrontendStack
- PostsStack
- PreviewStack

For the `FrontendStack` and the `PostsStack` there are two instances each, one for each environment (`dev` and `prod`).

### FrontendStack

The frontend stack manages infrastructure for a statically hosted web frontend
and deploys that frontend via a short script.  
The frontend itself is set up with
[Create React App](https://create-react-app.dev/) inside the `frontend/code`
directory and its build output is by default written into the
`frontend/code/dist` directory. This guide will not cover the React frontend
itself. See the "Frontend" section below for specifics.

### PostsStack

The posts stack manages the required infrastructure making up the serverless
posts api. Its implementation is located inside the `posts` directory and is
described in detail in the "Posts API" section below.

### PreviewStack

The preview stack is not yet used but is supposed to show that both the frontend
and the posts API could be deployed at once while sharing a single Terraform
state. This will make it simpler to deploy the whole infrastructure at once in
CI for implementing a pull request preview feature. However the required CI
configuration does not exist yet and will be part of a future iteration on this
example.

## Frontend

The frontend is located inside the `frontend` directory. It is hosted via an AWS
S3 Bucket and AWS CloudFront.

The infrastructure for the frontend is defined in `frontend/index.ts`. That file
exports a `Frontend` class which extends the `Resource` construct from CDKTF. We
use this pattern to create new building blocks, that can be added to a
`TerraformStack` (see root `main.ts` that uses our new `Frontend` resource).

The `Frontend` constructor gets passed an `options` object which passes down the
current `environment` (e.g. `dev`) and the `apiEndpoint` for the posts api
(covered later) which is required in the build process of the frontend as it
needs to be injected into the static output.

Inside the constructor a few resources are defined that are required for the
frontend to be deployed.

**`aws.S3Bucket`**  
The AWS S3 Bucket is used to host the files for the frontend (i.e. HTML, JS and
some CSS files). We enable the
[website hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
capabilities of the S3 Bucket to serve our `index.html` for any route that might
have been requested.

**`aws.S3BucketPolicy`**  
The bucket policy makes it possible to make contents of the S3 bucket publicly
available. It is required as by default nobody would be allowed to access our
files.

**`aws.CloudfrontDistribution`**  
AWS CloudFront is a content delivery network (CDN) which we use to deliver our
files faster to any location worldwide. We configure it to respond with data
from the S3 website endpoint url (`bucket.websiteEndpoint`). Our hosted website
will be available via the domain name of this CloudFront Distribution for now.
In a future iteration of this guide, we might add a custom domain name to it.

**`File`**  
We use Terraform to write the `.env.production.local` file into our React
frontend directory (`frontend/code`). This file is used by Create React App when
building our application to inject the `REACT_APP_API_ENDPOINT` environment
variable into our frontend build. Create React App will only inject environment
variables with the prefix `REACT_APP_` into static files to not accidentally
expose secrets from environment variables.  
Furthermore we write the name of the S3 Bucket we use into this file as well to
be able to use that bucket as a target when we deploy the frontend (explained
later).

**`TerraformOutput`**  
We define an output with the name `frontend_domainname` which exposes the domain
name from our CloudFront Distribution and prints it in the shell after deploying
our infrastructure. This makes it easy for us to know where our frontend can be
reached after we deployed it as that domain is generated automatically.

### Frontend Deployment

As mentioned before we let Terraform write the `.env.production.local` file. The
deployment of the frontend can be triggered via `npm run deploy` inside our
`frontend/code` directory. This will execute a build via the `predeploy` step
defined in the `frontend/code/package.json` file and afterwards execute a small
deployment script that can be found in `frontend/code/scripts`. This script
requires the
[AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
to be installed and will spawn the `aws s3 sync` command to copy the build
output to our S3 bucket.

## Posts API

The infrastructure and code for the serverless function for the posts api are
defined inside the `posts` directory.

The infrastructure code is split into multiple files. The main entrypoint is
`posts/index.ts` which only combines the groups of resources the posts api
consists of into a single resource named `Posts`.

### **`PostsStorage`**

The posts storage custom resource is located inside the `posts/storage.ts` file
and currently only defines a single `DynamodbTable` resource which is used for
storing the posts.

### **`PostsApi`**

The post api custom resource can be found in the furtherly nested
`posts/api/index.ts` file and contains resources required for the serverless
infrastructure and the code for the deployed AWS Lambda function (in
`posts/api/lambda`).

In the constructor the following resources are defined for the infrastructure:

**`NodejsFunction`**  
This resource is a custom one that is defined in `lib/nodejs-function.ts` and
described in the section "Posts API deployment" below. It compiles and bundles
the TypeScript code for the AWS Lambda function and makes it available to
Terraform via the `cdktf.Asset` construct.

**`aws.IamRole`**  
Creates an IAM role for the AWS Lambda function which allows it to access the
DynamoDB Table used to store the posts.

**`aws.IamRolePolicyAttachment`**  
Attaches the AWS managed default IAM policy `AWSLambdaBasicExecutionRole` to the
aforementioned IAM role which e.g. allows the Lambda to write its logs to
CloudWatch.

**`aws.LambdaFunction`**  
The heart of our API. It handles the following requests:

```
GET /posts
GET /posts/:id/detail
POST /posts
```

The code for the lambda function itself is compiled via the custom
`NodejsFunction` resource and its source can be found inside `posts/api/lambda`.
We pass the name of the DynamoDB Table (used for storing the posts) as the
environment variable `DYNAMODB_TABLE_NAME` to the Lambda function.

**`aws.Apigatewayv2Api`**  
The API Gateway is the publicly accessible endpoint for our posts API, which has
the lambda defined as a `target` so it gets invoked for requests that hit the
api.  
We also configure CORS to allow requests from any origin here as we don't have
dedicated domain names yet.

**`aws.LambdaPermission`**  
This resource is required to allow the API Gateway to invoke the Lambda function
for incoming requests.

### **`PostsGenerator`**

The generator is currently empty and has no effect on the infrastructure but
will in the future be extended to create some dummy posts in a regular interval
via some "cloud native" / serverless cron definition.

### Posts API deployment

There is no additional script required as is for the frontend. The AWS Lambda
function which handles the api requests and connects to DynamoDB to store and
retrieve posts is deployed automatically via the CDK for Terraform
(`cdktf deploy`).  
For this to work, we have defined a utility in `lib/nodejs-function.ts` that
uses [`esbuild`](https://github.com/evanw/esbuild) to compile the function
synchronously while the TypeScript code is synthesized (`cdktf synth`) to the
JSON output (`cdk.tf.json`) that is later used with Terraform.  
The build output is uploaded and linked to the Lambda function by Terraform.

The posts API is located inside the `posts` directory. Naming it after its
business domain was inspired by the style of the
[AWS ecommerce platform example](https://github.com/aws-samples/aws-serverless-ecommerce-platform).

## Feedback

If you encounter any issues with the CDK for Terraform don't hesitate to get in
touch with us:

- Ask a question on the HashiCorp [Discuss](https://discuss.hashicorp.com/)
  using the
  [terraform-cdk](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/)
  category.
- Report a
  [bug](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=bug&template=bug-report.md&title=)
  or request a new
  [feature](https://github.com/hashicorp/terraform-cdk/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=).
- Browse all [open issues](https://github.com/hashicorp/terraform-cdk/issues).
