import { Construct } from "constructs";
import { App, TerraformStack, Testing, TerraformAsset } from "cdktf";
import * as path from "path";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new TerraformAsset(this, "local-asset", {
      path: path.resolve(__dirname, "local-asset.txt"),
    });

    new TerraformAsset(this, "fixtures", {
      path: path.resolve(__dirname, "fixtures"),
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "stack");
app.synth();
