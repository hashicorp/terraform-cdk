// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:providers-import,providers-import-classes
import { Construct } from "constructs";
import { TerraformStack, TerraformVariable, Token } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
// DOCS_BLOCK_END:providers-import,providers-import-classes

// DOCS_BLOCK_START:providers-import-classes
import { DnsimpleProvider } from "@cdktf/provider-dnsimple/lib/provider";
import { ZoneRecord } from "@cdktf/provider-dnsimple/lib/zone-record";
// DOCS_BLOCK_END:providers-import-classes

// DOCS_BLOCK_START:providers-import,providers-import-classes

export class ProvidersStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });

    const instance = new Instance(this, "Hello", {
      ami: "ami-2757f631",
      instanceType: "t2.micro",
    });

    // DOCS_BLOCK_END:providers-import,providers-import-classes

    // DOCS_BLOCK_START:providers-import-classes
    const dnsimpleToken = new TerraformVariable(this, "dnsimpleToken", {
      type: "string",
      description: "dnsimple token",
      sensitive: true,
    });

    const dnsimpleAccount = new TerraformVariable(this, "dnsimpleAccount", {
      type: "string",
      description: "dnsimple account",
      sensitive: true,
    });

    new DnsimpleProvider(this, "dnsimple", {
      token: dnsimpleToken.stringValue,
      account: dnsimpleAccount.stringValue,
    });

    new ZoneRecord(this, "web-www", {
      zoneName: "example.com",
      name: "web",
      value: instance.publicIp,
      type: "A",
    });
    // DOCS_BLOCK_END:providers-import-classes

    // DOCS_BLOCK_START:providers-import,providers-import-classes
  }
}
// DOCS_BLOCK_END:providers-import,providers-import-classes
