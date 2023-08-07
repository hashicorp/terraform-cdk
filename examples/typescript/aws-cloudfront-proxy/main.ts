// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "./.gen/providers/aws/provider";
import { AcmCertificate } from "./.gen/providers/aws/acm-certificate";
import { Route53Record } from "./.gen/providers/aws/route53-record";
import { Wafv2WebAcl } from "./.gen/providers/aws/wafv2-web-acl";
import { CloudfrontDistribution } from "./.gen/providers/aws/cloudfront-distribution";
import { AcmCertificateValidation } from "./.gen/providers/aws/acm-certificate-validation";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const originId = "myS3Origin";
    const domainName = "www.example.com";
    const proxyTarget = "example.com";

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    const usEastProvider = new AwsProvider(this, "aws.route53", {
      region: "us-east-1",
      alias: "route53",
    });

    new Wafv2WebAcl(this, "wafv2", {
      defaultAction: {
        allow: {},
      },
      name: "managed-rule-example",
      scope: "REGIONAL",
      visibilityConfig: {
        cloudwatchMetricsEnabled: true,
        metricName: "managed-rule-example",
        sampledRequestsEnabled: true,
      },
      rule: [
        {
          name: "managed-rule-example",
          priority: 1,
          overrideAction: {
            count: {},
          },
          visibilityConfig: {
            cloudwatchMetricsEnabled: true,
            metricName: "managed-rule-example",
            sampledRequestsEnabled: true,
          },
          statement: {
            managedRuleGroupStatement: {
              name: "managed-rule-example",
              vendorName: "AWS",
              excludedRule: [
                {
                  name: "SizeRestrictions_QUERYSTRING",
                },
                { name: "SQLInjection_QUERYSTRING" },
              ],
              scopeDownStatement: {
                geoMatchStatement: {
                  countryCodes: ["US"],
                },
              },
            },
          },
        },
      ],
    });

    const cert = new AcmCertificate(this, "cert", {
      domainName,
      validationMethod: "DNS",
      provider: usEastProvider,
    });

    // const zone = new DataAwsRoute53Zone(this, 'zone', {
    //   name: 'example.com.',
    //   privateZone: false
    // })

    const record = new Route53Record(this, "CertValidationRecord", {
      name: cert.domainValidationOptions.get(0).resourceRecordName,
      type: cert.domainValidationOptions.get(0).resourceRecordType,
      records: [cert.domainValidationOptions.get(0).resourceRecordValue],
      // zoneId: zone.zoneId,
      zoneId: "123",
      ttl: 60,
      allowOverwrite: true,
    });

    new AcmCertificateValidation(this, "certvalidation", {
      certificateArn: cert.arn,
      validationRecordFqdns: [record.fqdn],
      provider: usEastProvider,
    });

    const distribution = new CloudfrontDistribution(this, "cloudfront", {
      enabled: true,
      isIpv6Enabled: true,

      viewerCertificate: {
        acmCertificateArn: cert.arn,
        sslSupportMethod: "sni-only",
      },

      restrictions: {
        geoRestriction: {
          restrictionType: "none",
        },
      },

      origin: [
        {
          originId,
          domainName: proxyTarget,
          customOriginConfig: {
            httpPort: 80,
            httpsPort: 443,
            originProtocolPolicy: "http-only",
            originSslProtocols: ["TLSv1.2", "TLSv1.1"],
          },
        },
      ],

      aliases: [domainName],

      defaultCacheBehavior: {
        minTtl: 0,
        defaultTtl: 60,
        maxTtl: 86400,
        allowedMethods: [
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
        ],
        cachedMethods: ["GET", "HEAD"],
        targetOriginId: originId,
        viewerProtocolPolicy: "redirect-to-https",
        forwardedValues: {
          cookies: {
            forward: "all",
          },
          headers: [
            "Host",
            "Accept-Datetime",
            "Accept-Encoding",
            "Accept-Language",
            "User-Agent",
            "Referer",
            "Origin",
            "X-Forwarded-Host",
          ],
          queryString: true,
        },
      },
    });

    new Route53Record(this, "distribution_domain", {
      name: domainName,
      type: "A",
      // zoneId: zone.zoneId,
      zoneId: "123",
      alias: [
        {
          name: distribution.domainName,
          zoneId: distribution.hostedZoneId,
          evaluateTargetHealth: true,
        },
      ],
    });

    new TerraformOutput(this, "distribution_domain_name", {
      value: distribution.domainName,
    });
  }
}

const app = new App();
new MyStack(app, "typescript-aws-cloudfront-proxy");
app.synth();
