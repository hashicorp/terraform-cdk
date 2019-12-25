import { App, Construct } from "@aws-cdk/core";
import { TerraformStack } from "../lib";
import { S3Bucket } from './.gen/s3-bucket';
import { S3BucketObject } from './.gen/s3-bucket-object';
import { SnsTopic } from './.gen/sns-topic';
import { SnsTopicSubscription } from './.gen/sns-topic-subscription';
import { SqsQueue } from './.gen/sqs-queue';

class MyTerraformStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const queue = new SqsQueue(this, 'MyQueue', {
      visibilityTimeoutSeconds: 500,
      tags: {
        FOO: 'bar'
      }
    });

    const topic = new SnsTopic(this, 'MyTopic', {
      displayName: queue.name,
    });

    new SnsTopicSubscription(this, 'Subscription', {
      topicArn: topic.arn,
      protocol: 'sqs',
      endpoint: queue.arn
    });

    const bucket = new S3Bucket(this, 'MyBucket');
    new S3BucketObject(this, 'BucketObject', {
      bucket: bucket.id,
      key: 'foo.txt',
      content: 'hello, world'
    });
  }
}

const app = new App({ outdir: 'cdk.out' });
new MyTerraformStack(app, 'MyStack');
app.synth();