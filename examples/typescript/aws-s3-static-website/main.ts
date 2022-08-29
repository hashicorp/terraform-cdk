import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput, TerraformVariable } from "cdktf";
import { AwsProvider, s3 } from '@cdktf/provider-aws';


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Template Variables
    const awsRegion = new TerraformVariable(this, 'awsRegion', {
      type: 'string',
      default: 'us-east-1',
      description: 'The AWS Region to be use'
    });

    const bucketName = new TerraformVariable(this, 'bucketName', {
      type: 'string',
      default: 'test-bucket',
      description: 'The name-prefix of the S3 bucket to be use'
    });

    // Provider Configuration
    new AwsProvider(this, "aws", {
      region: awsRegion.value,
    });

    // Create S3 Bucket
    const s3bucket = new s3.S3Bucket(this, 'bucket', {
      bucketPrefix: bucketName.value+'-',
      tags: {
        Name: bucketName.value,
      },
      forceDestroy: true
    });

    // Create S3 Bucket Policy to allow public access
    new s3.S3BucketAcl(this, 'bucketAcl', {
      bucket: s3bucket.id,
      acl: 'public-read'
    });

    // Upload files to S3 Website
    new s3.S3Object(this, 'indexObject', {
      bucket: s3bucket.id,
      contentType: "text/html",
      key: 'index.html',
      source: './website/index.html'
    });

    new s3.S3Object(this, 'errorObject', {
      bucket: s3bucket.id,
      contentType: "text/html",
      key: 'error.html',
      source: './website/error.html'
    });

    // Enable S3 Website
    new s3.S3BucketWebsiteConfiguration(this, 's3bucket', {
      bucket: s3bucket.id,
      indexDocument: {
        suffix: 'index.html',
      },
      errorDocument: {
        key: 'error.html',
      },
      });

    // S3 Bucket Policy to allow public read access
    new s3.S3BucketPolicy(this, 'bucketPolicy', {
      bucket: s3bucket.id,
      policy: JSON.stringify({
        "Version": "2012-10-17",    
    "Statement": [        
      {            
          "Sid": "PublicReadGetObject",            
          "Effect": "Allow",            
          "Principal": "*",            
          "Action": [                
             "s3:GetObject"            
          ],            
          "Resource": [
             "arn:aws:s3:::"+s3bucket.id+"/*"            
          ]        
      }    
    ]
      })});

      // Output the S3 Website URL
      new TerraformOutput(this, "aws_s3_bucket", {
        value: s3bucket.websiteEndpoint,
      });
  }
}

const app = new App();
new MyStack(app, "cdktf");
app.synth();
