import { paramCase } from "change-case";
import * as fs from "fs";
import path = require("path");
import { S3Bucket, S3BucketConfig, S3BucketWebsite } from "@cdktf/provider-aws";
import { registerMapping } from "../index";
import { Writeable } from "../../type-utils";

// load all other files in this directory
fs.readdirSync(__dirname).forEach((file) => {
  if (file.endsWith(".js") && file !== "index.js") {
    require(path.resolve(__dirname, file));
  }
});

registerMapping("AWS::S3::Bucket", {
  resource: (scope, id, props) => {
    const config: Writeable<S3BucketConfig> = {};

    // versioninng
    if (props.VersioningConfiguration?.Status === "Enabled") {
      config.versioning = [{ enabled: true }];

      delete props.VersioningConfiguration;
    }

    const enc =
      props.BucketEncryption?.ServerSideEncryptionConfiguration?.[0]
        ?.ServerSideEncryptionByDefault;
    if (enc) {
      config.serverSideEncryptionConfiguration = [
        {
          rule: [
            {
              applyServerSideEncryptionByDefault: [
                {
                  sseAlgorithm: enc.SSEAlgorithm,
                  kmsMasterKeyId: enc.KMSMasterKeyID,
                },
              ],
            },
          ],
        },
      ];

      delete props.BucketEncryption;
    }

    const acl = props.AccessControl;
    delete props.AccessControl;
    if (acl) {
      config.acl = paramCase(acl);
    }

    const website = props.WebsiteConfiguration;

    if (website) {
      const websiteConfig: Writeable<S3BucketWebsite> = {};
      config.website = [websiteConfig];

      config.website = [
        {
          indexDocument: website.IndexDocument,
          errorDocument: website.ErrorDocument,
          redirectAllRequestsTo: website.RedirectAllRequestsTo
            ? (website.RedirectAllRequestsTo.Protocol
                ? website.RedirectAllRequestsTo.Protocol + "://"
                : "") + website.RedirectAllRequestsTo.HostName
            : undefined,
        },
      ];
    }

    const bucketName = props.BucketName;
    delete props.BucketName;
    if (bucketName) {
      config.bucket = bucketName;
    }

    return new S3Bucket(scope, id, config);
  },
  attributes: {},
});
