import { Construct } from 'constructs';
import { App, TerraformStack, S3Backend } from 'cdktf';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // Only one backend is supported by Terraform

    // S3 Backend - https://www.terraform.io/docs/backends/types/s3.html
    new S3Backend(this, {
      bucket: "mybucket",
      key: "path/to/my/key",
      region: "us-east-1"
    });

    // define resources here

  }
}

const app = new App();
new MyStack(app, 'typescript-backends');
app.synth();
