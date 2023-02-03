// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { GithubProvider } from "@cdktf/provider-github/lib/provider";
import { Team } from "@cdktf/provider-github/lib/team";
import { DataGithubOrganization } from "@cdktf/provider-github/lib/data-github-organization";
import { TeamMembers } from "@cdktf/provider-github/lib/team-members";
// DOCS_BLOCK_START:iterators,iterators-complex-types
import { TerraformIterator, TerraformStack, TerraformVariable } from "cdktf";
import { Construct } from "constructs";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

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
    const complexIterator = TerraformIterator.fromList([
      {
        name: "website-static-files",
        tags: { app: "website" },
      },
      {
        name: "images",
        tags: { app: "image-converter" },
      },
    ] as any);

    new S3Bucket(this, "complex-iterator-bucket", {
      forEach: complexIterator,
      bucket: complexIterator.getString("name"),
      tags: complexIterator.getStringMap("tags"),
    });
    // DOCS_BLOCK_END:iterators-complex-types

    // DOCS_BLOCK_START:iterators,iterators-complex-types
  }
}
// DOCS_BLOCK_END:iterators,iterators-complex-types
