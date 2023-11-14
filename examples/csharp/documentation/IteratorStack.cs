// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: MPL-2.0


using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using Constructs;
using HashiCorp.Cdktf;
using aws.Provider;
using aws.S3Bucket;
using aws.Instance;
using github.Provider;
using github.DataGithubOrganization;
using github.Team;
using github.TeamMembers;

namespace Examples
{
    class IteratorStack : TerraformStack
    {
        public IteratorStack(Construct scope, string name) : base(scope, name)
        {
            new AwsProvider(this, "aws", new AwsProviderConfig
            {
                Region = "eu-central-1"
            });

            // DOCS_BLOCK_START:iterators-define-iterators
            TerraformVariable list = new TerraformVariable(this, "list", new TerraformVariableConfig
            {
                Type = "list(string)"
            });

            ListTerraformIterator iterator = ListTerraformIterator.FromList(list.ListValue);
            S3Bucket s3Bucket = new S3Bucket(this, "value-bucket", new S3BucketConfig
            {
                ForEach = iterator,
                Bucket = Token.AsString(iterator.Value)
            });
            // DOCS_BLOCK_END:iterators-define-iterators


            // DOCS_BLOCK_START:iterators-iterators-complex-types
            // We need a local to be able to pass the list to the iterator
            TerraformLocal complexLocal = new TerraformLocal(this, "complex_local", new Dictionary<string, object> {
                {
                    "website ",
                    new Dictionary<string, object> {
                        { "name", "website-static-files" },
                        { "tags", new Dictionary<string, string> {
                            { "app", "website" }
                        }}
                    }
                },
                {
                    "images",
                    new Dictionary<string, object> {
                        { "name", "images" },
                        { "tags", new Dictionary<string, string> {
                            { "app", "image-converter" }
                        }}
                    }
                }
            });
            MapTerraformIterator mapIterator = MapTerraformIterator.FromMap(complexLocal.AsAnyMap);
            new S3Bucket(this, "tag-bucket", new S3BucketConfig
            {
                ForEach = mapIterator,
                Bucket = mapIterator.GetString("name"),
                Tags = mapIterator.GetStringMap("tags")
            });
            // DOCS_BLOCK_END:iterators-iterators-complex-types
            // DOCS_BLOCK_START:iterators-list-attributes
            var orgName = "my-org";

            new GithubProvider(this, "github", new GithubProviderConfig
            {
                Organization = orgName
            });

            var team = new Team(this, "core-team", new TeamConfig
            {
                Name = "core"
            });

            var orgMembers = new DataGithubOrganization(this, "org", new DataGithubOrganizationConfig
            {
                Name = orgName
            });

            ListTerraformIterator orgMemberIterator = TerraformIterator.FromList(orgMembers.Members);

            new TeamMembers(this, "members", new TeamMembersConfig
            {
                TeamId = team.Id,
                Members = orgMemberIterator.Dynamic(new Dictionary<string, object> {
                    { "username", Token.AsString(orgMemberIterator.Value) },
                    { "role", "maintainer" }
                })
            });
            // DOCS_BLOCK_END:iterators-list-attributes

            // DOCS_BLOCK_START:iterators-count
            var servers = new TerraformVariable(this, "servers", new TerraformVariableConfig {
                Type = "number"
            });
            var count = TerraformCount.Of(servers.NumberValue);
            new Instance(this, "server", new InstanceConfig {
                Count = count,
                Ami = "ami-a1b2c3d4",
                InstanceType = "t2.micro",
                Tags = new Dictionary<string, string> {
                    { "Name", "Server ${" + count.Index + "}" }
                }
            });
            // DOCS_BLOCK_END:iterators-count

            // DOCS_BLOCK_START:iterators-chain
            // We need a local to be able to pass the list to the iterator
            TerraformLocal configuration = new TerraformLocal(this, "configuration", new Dictionary<string, object> {
                {
                    "website ",
                    new Dictionary<string, object> {
                        { "name", "website-static-files" },
                        { "tags", new Dictionary<string, string> {
                            { "app", "website" }
                        }}
                    }
                },
                {
                    "images",
                    new Dictionary<string, object> {
                        { "name", "images" },
                        { "tags", new Dictionary<string, string> {
                            { "app", "image-converter" }
                        }}
                    }
                }
            });
            MapTerraformIterator s3BucketConfigurationIterator = MapTerraformIterator.FromMap(configuration.AsAnyMap);
            S3Bucket s3Buckets = new S3Bucket(this, "complex-iterator-buckets", new S3BucketConfig
            {
                ForEach = s3BucketConfigurationIterator,
                Bucket = s3BucketConfigurationIterator.GetString("name"),
                Tags = s3BucketConfigurationIterator.GetMap("tags")
            });

            // This would be TerraformIterator.fromDataSources for data_sources
            TerraformIterator s3BucketsIterator = TerraformIterator.FromResources(s3Buckets);
            TerraformAsset helpFile = new TerraformAsset(this, "help", new TerraformAssetConfig
            {
                Path = "./help"
            });
            new S3BucketObject(this, "object", new S3BucketObjectConfig
            {
                ForEach = s3BucketsIterator,
                Bucket = s3BucketsIterator.GetString("id"),
                Key = "help",
                Source = helpFile.Path
            });
            // // DOCS_BLOCK_END:iterators-chain
        }
    }
}
