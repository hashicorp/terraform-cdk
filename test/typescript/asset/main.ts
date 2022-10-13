// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import {
  App,
  TerraformStack,
  Testing,
  TerraformAsset,
  TerraformOutput,
  AssetType,
  LocalBackend,
} from "cdktf";
import * as path from "path";
import { NullProvider } from "./.gen/providers/null/provider";
import { Resource as NullResource } from "./.gen/providers/null/resource";

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

  const relativeAsset = new TerraformAsset(scope, "relative-asset", {
    path: "relative-asset.txt",
    ...assetOverrides,
  });

  const relativeAssets = new TerraformAsset(scope, "relative", {
    path: "./relative",
    ...assetOverrides,
  });

  return {
    localAsset,
    fixtures,
    zippedFixtures,
    relativeAsset,
    relativeAssets,
  };
}

export class FixedHash extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    const {
      localAsset,
      fixtures,
      zippedFixtures,
      relativeAsset,
      relativeAssets,
    } = assets(this, {
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

    new TerraformOutput(this, "relative-asset-name", {
      value: relativeAsset.fileName,
    });

    new TerraformOutput(this, "relative-assets-name", {
      value: relativeAssets.fileName,
    });
  }
}

export class NormalHash extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new LocalBackend(this, {
      path: "terraform.tfstate",
    });

    new NullProvider(this, "null", {});
    const {
      localAsset,
      fixtures,
      zippedFixtures,
      relativeAsset,
      relativeAssets,
    } = assets(this);

    new NullResource(this, "resource", {
      triggers: {
        localAssetAssetHash: localAsset.assetHash,
        localAssetPath: localAsset.path,
        fixturesAssetHash: fixtures.assetHash,
        fixturesPath: fixtures.path,
        zippedFixturesAssetHash: zippedFixtures.assetHash,
        zippedFixturesPath: zippedFixtures.path,
        relativeAssetAssetHash: relativeAsset.assetHash,
        relativeAssetAssetPath: relativeAsset.path,
        relativeAssestsAssetHash: relativeAssets.assetHash,
        relativeAsssetsAssetPath: relativeAssets.path,
      },
    });
  }
}

const app = Testing.stubVersion(new App({ stackTraces: false }));
new FixedHash(app, "fixed");
new NormalHash(app, "normal");
app.synth();
