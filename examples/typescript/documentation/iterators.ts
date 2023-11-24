// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { GithubProvider } from "@cdktf/provider-github/lib/provider";
import { Team } from "@cdktf/provider-github/lib/team";
import { DataGithubOrganization } from "@cdktf/provider-github/lib/data-github-organization";
import { TeamMembers } from "@cdktf/provider-github/lib/team-members";
// DOCS_BLOCK_START:iterators,iterators-complex-types
import {
  TerraformIterator,
  TerraformLocal,
  TerraformOutput,
  TerraformStack,
  TerraformVariable,
} from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

// DOCS_BLOCK_END:iterators,iterators-complex-types
import { TerraformAsset } from "cdktf";
import { S3BucketObject } from "@cdktf/provider-aws/lib/s3-bucket-object";
// DOCS_BLOCK_START:iterators,iterators-complex-types
export class IteratorsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-west-2",
    });

    // DOCS_BLOCK_END:iterators,iterators-complex-types

    // DOCS_BLOCK_START:iterators-list-attributes
    const orgName = "my-org";

    new GithubProvider(this, "github", {
      organization: orgName,
    });

    const team = new Team(this, "core-team", {
      name: "core",
    });

    const orgMembers = new DataGithubOrganization(this, "org", {
      name: orgName,
    });

    const orgMemberIterator = TerraformIterator.fromList(orgMembers.members);

    new TeamMembers(this, "members", {
      teamId: team.id,
      members: orgMemberIterator.dynamic({
        username: orgMemberIterator.value,
        role: "maintainer",
      }),
    });
    // DOCS_BLOCK_END:iterators-list-attributes

    // DOCS_BLOCK_START:iterators
    const list = new TerraformVariable(this, "list", {
      type: "list(string)",
    });

    const simpleIterator = TerraformIterator.fromList(list.listValue);

    new S3Bucket(this, "iterator-bucket", {
      forEach: simpleIterator,
      bucket: simpleIterator.value,
    });
    // DOCS_BLOCK_END:iterators

    // DOCS_BLOCK_START:iterators-complex-types
    const complexIterator = TerraformIterator.fromMap({
      website: {
        name: "website-static-files",
        tags: { app: "website" },
      },
      images: {
        name: "images",
        tags: { app: "image-converter" },
      },
    });

    new S3Bucket(this, "complex-iterator-bucket", {
      forEach: complexIterator,
      bucket: complexIterator.getString("name"),
      tags: complexIterator.getStringMap("tags"),
    });
    // DOCS_BLOCK_END:iterators-complex-types

    // DOCS_BLOCK_START:iterators-chain
    const s3BucketConfigurationIterator = TerraformIterator.fromMap({
      website: {
        name: "website-static-files",
        tags: { app: "website" },
      },
      images: {
        name: "images",
        tags: { app: "image-converter" },
      },
    });

    const s3Buckets = new S3Bucket(this, "complex-iterator-buckets", {
      forEach: s3BucketConfigurationIterator,
      bucket: s3BucketConfigurationIterator.getString("name"),
      tags: s3BucketConfigurationIterator.getStringMap("tags"),
    });

    // This would be TerraformIterator.fromDataSources for data_sources
    const s3BucketsIterator = TerraformIterator.fromResources(s3Buckets);
    const helpFile = new TerraformAsset(this, "help", {
      path: "./help",
    });
    new S3BucketObject(this, "object", {
      forEach: s3BucketsIterator,
      bucket: s3BucketsIterator.getString("id"),
      key: "help",
      source: helpFile.path,
    });
    // DOCS_BLOCK_END:iterators-chain

    // DOCS_BLOCK_START:iterators-for-expression
    const mapIterator = TerraformIterator.fromMap({
      website: {
        name: "website-static-files",
        tags: { app: "website" },
        included: true,
      },
      images: {
        name: "images",
        tags: { app: "image-converter" },
      },
    });
    new TerraformLocal(this, "list-of-keys", mapIterator.keys());
    new TerraformLocal(this, "list-of-values", mapIterator.values());
    new TerraformLocal(
      this,
      "list-of-names",
      mapIterator.pluckProperty("name")
    );
    new TerraformLocal(
      this,
      "list-of-names-of-included",
      mapIterator.forExpressionForList("val.name if val.included")
    );
    new TerraformLocal(
      this,
      "map-with-names-as-key-and-tags-as-value-of-included",
      mapIterator.forExpressionForMap("val.name", "val.tags if val.included")
    );
    // DOCS_BLOCK_END:iterators-for-expression

    // DOCS_BLOCK_START:iterators,iterators-complex-types
  }
}
// DOCS_BLOCK_END:iterators,iterators-complex-types
