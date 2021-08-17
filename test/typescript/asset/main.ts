import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformAsset,
  TerraformOutput,
  AssetType,
} from "cdktf";
import * as path from "path";

export class HelloTerra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const localAsset = new TerraformAsset(this, "local-asset", {
      path: path.resolve(__dirname, "local-asset.txt"),
      assetHash: "hash",
    });

    const fixtures = new TerraformAsset(this, "fixtures", {
      path: path.resolve(__dirname, "fixtures"),
      assetHash: "hash",
    });

    const zippedFixtures = new TerraformAsset(this, "zipped-fixtures", {
      path: path.resolve(__dirname, "fixtures"),
      assetHash: "hash",
      type: AssetType.ARCHIVE,
    });

    new TerraformOutput(this, "local-asset-name", {
      value: localAsset.fileName,
    });

    new TerraformOutput(this, "fixtures-name", {
      value: fixtures.fileName,
    });

    new TerraformOutput(this, "zipped-fixtures-name", {
      value: zippedFixtures.fileName,
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new HelloTerra(app, "stack");
app.synth();
