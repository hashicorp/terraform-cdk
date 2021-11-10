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
import { Resource as NullResource, NullProvider } from "./.gen/providers/null";

function assets(scope: Construct, assetOverrides = {}) {
  const localAsset = new TerraformAsset(scope, "local-asset", {
    path: path.resolve(__dirname, "local-asset.txt"),
    ...assetOverrides,
  });

  const fixtures = new TerraformAsset(scope, "fixtures", {
    path: path.resolve(__dirname, "fixtures"),
    ...assetOverrides,
  });

  const zippedFixtures = new TerraformAsset(scope, "zipped-fixtures", {
    path: path.resolve(__dirname, "fixtures"),
    ...assetOverrides,
    type: AssetType.ARCHIVE,
  });

  return {
    localAsset,
    fixtures,
    zippedFixtures,
  };
}

export class FixedHash extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const { localAsset, fixtures, zippedFixtures } = assets(this, {
      assetHash: "hash",
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

export class NormalHash extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NullProvider(this, "null", {});
    const { localAsset, fixtures, zippedFixtures } = assets(this);

    new NullResource(this, "resource", {
      triggers: {
        localAssetAssetHash: localAsset.assetHash,
        localAssetPath: localAsset.path,
        fixturesAssetHash: fixtures.assetHash,
        fixturesPath: fixtures.path,
        zippedFixturesAssetHash: zippedFixtures.assetHash,
        zippedFixturesPath: zippedFixtures.path,
      },
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new FixedHash(app, "fixed");
new NormalHash(app, "normal");
app.synth();
