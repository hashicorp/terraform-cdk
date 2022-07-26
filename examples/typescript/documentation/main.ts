import { Construct } from "constructs";
import { App, TerraformStack, TerraformAsset, AssetType } from "cdktf";
import { AwsProvider, s3 } from "./.gen/providers/aws";
import * as kubernetes from "./.gen/providers/kubernetes";
import * as path from "path";

// concepts/constructs.mdx
import { KubernetesWebAppDeployment } from "./custom-constructs";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    // concepts/assets.mdx
    const bucket = new s3.S3Bucket(this, "bucket", {
      bucket: "demo",
    });

    const asset = new TerraformAsset(this, "lambda-asset", {
      path: path.resolve(__dirname, "../lambda"),
      type: AssetType.ARCHIVE, // if left empty it infers directory and file
    });

    new s3.S3BucketObject(this, "lambda-archive", {
      bucket: bucket.bucket,
      key: asset.fileName,
      source: asset.path, // returns a posix path
    });

    // concepts/constructs.mdx
    new kubernetes.KubernetesProvider(this, "kind", {
      configPath: path.join(__dirname, "../kubeconfig.yaml"),
    });

    new KubernetesWebAppDeployment(this, "deployment", {
      image: "nginx:latest",
      replicas: 2,
      app: "myapp",
      component: "frontend",
      environment: "dev",
    });
  }
}

const app = new App();
new MyStack(app, "typescript-documentation");
app.synth();
