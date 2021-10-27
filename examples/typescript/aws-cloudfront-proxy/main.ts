import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { CloudFront, AwsProvider, Route53, ACM } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    const originId = "myS3Origin";
    const domainName = "www.example.com";
    const proxyTarget = "example.com";

    new AwsProvider(this, "aws", {
      region: "eu-central-1",
    });

    const provider = new AwsProvider(this, "aws.route53", {
      region: "us-east-1",
      alias: "route53",
    });

    const cert = new ACM.AcmCertificate(this, "cert", {
      domainName,
      validationMethod: "DNS",
      provider,
    });

    // const zone = new DataAwsRoute53Zone(this, 'zone', {
    //   name: 'example.com.',
    //   privateZone: false
    // })

    const record = new Route53.Route53Record(this, "CertValidationRecord", {
      name: cert.domainValidationOptions("0").resourceRecordName,
      type: cert.domainValidationOptions("0").resourceRecordType,
      records: [cert.domainValidationOptions("0").resourceRecordValue],
      // zoneId: zone.zoneId,
      zoneId: "123",
      ttl: 60,
      allowOverwrite: true,
    });

    new ACM.AcmCertificateValidation(this, "certvalidation", {
      certificateArn: cert.arn,
      validationRecordFqdns: [record.fqdn],
      provider,
    });

    const distribution = new CloudFront.CloudfrontDistribution(
      this,
      "cloudfront",
      {
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
      }
    );

    new Route53.Route53Record(this, "distribution_domain", {
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
