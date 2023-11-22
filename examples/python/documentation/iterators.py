# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

from cdktf import TerraformStack, Token, TerraformCount, TerraformAsset
from constructs import Construct
from imports.aws.provider import AwsProvider
from imports.aws.instance import Instance
from imports.github.data_github_organization import DataGithubOrganization
from imports.github.provider import GithubProvider
from imports.github.team import Team
from imports.github.team_members import TeamMembers
from imports.aws.s3_bucket_object import S3BucketObject


# DOCS_BLOCK_START:iterators-define-iterators,iterators-iterators-complex-types
from imports.aws.s3_bucket import S3Bucket
from cdktf import TerraformIterator, TerraformVariable, TerraformLocal
# DOCS_BLOCK_END:iterators-define-iterators,iterators-iterators-complex-types


class IteratorStackOne(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        AwsProvider(self, "aws", region="us-east-1")

        # DOCS_BLOCK_START:iterators-iterators-complex-types
        map = TerraformLocal(self, "my-map", {
            "website": {
                "name": "website-static-files",
                "tags": {"app": "website"}
            },
            "images": {
                "name": "images",
                "tags": {"app": "image-converter"}
            }
        })

        iterator = TerraformIterator.from_map(
            map=map.as_any_map
        )

        s3Bucket = S3Bucket(self, "s3-bucket",
                            for_each=iterator,
                            bucket=iterator.get_string("name"),
                            tags=iterator.get_map("tags")
                            )
        # DOCS_BLOCK_END:iterators-iterators-complex-types

        # DOCS_BLOCK_START:iterators-count
        servers = TerraformVariable(self, "servers",
            type="number"
        )

        count = TerraformCount.of(servers.number_value)

        Instance(self, "server",
            count=count,
            ami="ami-a1b2c3d4",
            instance_type="t2.micro",
            tags={
                "Name": "Server ${" + Token().as_string(count.index) + "}"
            }
        )
        # DOCS_BLOCK_END:iterators-count

class IteratorStackTwo(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)
        AwsProvider(self, "aws", region="us-east-1")
        GithubProvider(self, "gh")
        # DOCS_BLOCK_START:iterators-define-iterators

        list = TerraformVariable(self, "list",
                                 type="list(string)"
                                 )

        iterator = TerraformIterator.from_list(list=list.list_value)

        s3Bucket = S3Bucket(self, "bucket",
                            for_each=iterator,
                            bucket=Token.as_string(iterator.value)
                            )
        # DOCS_BLOCK_END:iterators-define-iterators

        # DOCS_BLOCK_START:iterators-list-attributes
        org_name = "my-org"

        GithubProvider(self, "github",
                       organization=org_name
                       )

        github_team = Team(self, "core-team",
                           name="core"
                           )

        org_members = DataGithubOrganization(self, "org",
                                             name=org_name
                                             )

        org_member_iterator = TerraformIterator.from_list(org_members.members)

        TeamMembers(self, "members",
                    team_id=github_team.id,
                    members=org_member_iterator.dynamic({
                        "username": Token().as_string(org_member_iterator.value),
                        "role": "maintainer"
                    })
                    )
        # DOCS_BLOCK_END:iterators-list-attributes

        # DOCS_BLOCK_START:iterators-chain
        map = TerraformLocal(self, "my-map", {
            "website": {
                "name": "website-static-files",
                "tags": {"app": "website"}
            },
            "images": {
                "name": "images",
                "tags": {"app": "image-converter"}
            }
        })
        s3_bucket_configuration_iterator = TerraformIterator.from_map(
            map=map.as_any_map
        )
        s3_buckets = S3Bucket(self, "complex-iterator-buckets",
            for_each=s3_bucket_configuration_iterator,
            bucket=s3_bucket_configuration_iterator.get_string("name"),
            tags=s3_bucket_configuration_iterator.get_map("tags")
        )

        # This would be TerraformIterator.from_data_sources for data_sources
        s3_buckets_iterator = TerraformIterator.from_resources(s3_buckets)
        help_file = TerraformAsset(self, "help",
            path="./help"
        )
        S3BucketObject(self, "object",
            for_each=s3_buckets_iterator,
            bucket=s3_buckets_iterator.get_string("id"),
            key="help",
            source=help_file.path
        )
        # DOCS_BLOCK_END:iterators-chain


        # DOCS_BLOCK_START:iterators-for-expression
        values = TerraformLocal(self, "map-local", {
            "website": {
                "name": "website-static-files",
                "tags": {"app": "website"}
            },
            "images": {
                "name": "images",
                "tags": {"app": "image-converter"}
            }
        })
        mapIterator = TerraformIterator.from_map(
            map=values.as_any_map
        )
        TerraformLocal(self, "list-of-keys", mapIterator.map_to_key())
        TerraformLocal(self, "list-of-names", mapIterator.map_to_value_property("name"))
        TerraformLocal(self, "list-of-names-of-included", mapIterator.for_expression_for_list("val.name if val.included"))
        TerraformLocal(self, "map-with-names-as-key-and-tags-as-value-of-included", mapIterator.for_expression_for_map("val.name", "val.tags if val.included"))
        # DOCS_BLOCK_END:iterators-for-expression
