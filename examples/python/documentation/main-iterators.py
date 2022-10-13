from cdktf import TerraformStack, Token
from constructs import Construct
import imports.github as github
# DOCS_BLOCK_START:iterators-define-iterators,iterators-iterators-complex-types
import imports.aws as aws
from cdktf import TerraformIterator, TerraformVariable
# DOCS_BLOCK_END:iterators-define-iterators,iterators-iterators-complex-types     

class TestStack(TerraformStack):
    def __init__(self, scope: Construct, id: str):
        super().__init__(scope, id)

        # DOCS_BLOCK_START:iterators-iterators-complex-types
        iterator = TerraformIterator.from_list(
            list = [
                {
                    "name": "website-static-files",
                    "tags": {"app": "website"}
                },
                {
                    "name": "images",
                    "tags": {"app": "image-converter"}
                }
            ]
        )

        s3Bucket = aws.s3_bucket.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.getString("name"),
            tags = iterator.getString("tags")
        )
        # DOCS_BLOCK_END:iterators-iterators-complex-types

        # DOCS_BLOCK_START:iterators-define-iterators
        list = TerraformVariable(self, "list", 
            type = "list(string)"
        )

        iterator = TerraformIterator.from_list(list.list_value)

        s3Bucket = aws.s3_bucket.S3Bucket(self, "bucket",
            for_each = iterator,
            name = iterator.value
        )
        # DOCS_BLOCK_END:iterators-define-iterators

        # DOCS_BLOCK_START:iterators-list-attributes
        org_name = "my-org"

        github.provider.GithubProvider(self, "github",
            organization=org_name
        )

        github_team = github.team.Team(self, "core-team",
            name="core"
        )

        org_members = github.data_github_organization.DataGithubOrganization(self, "org",
            name=org_name
        )

        org_member_iterator = TerraformIterator.from_list(org_members.members)

        github.team_members.TeamMembers(self, "members",
            team_id=github_team.id,
            members=org_member_iterator.dynamic({
                "username": Token().as_string(org_member_iterator.value),
                "role": "maintainer"
            })
        )
        # DOCS_BLOCK_END:iterators-list-attributes