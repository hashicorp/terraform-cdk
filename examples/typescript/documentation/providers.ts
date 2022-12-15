// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// DOCS_BLOCK_START:providers-import,providers-import-classes
import { Construct } from "constructs";
import { TerraformStack, Token } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/aws-provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
// DOCS_BLOCK_END:providers-import,providers-import-classes

// DOCS_BLOCK_START:providers-import-classes
import { DnsimpleProvider } from "@cdktf/provider-dnsimple/lib/provider";
import { Record } from "@cdktf/provider-dnsimple/lib/record";
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
    new DnsimpleProvider(this, "dnsimple", {
      token: Token.asString(process.env.DNSIMPLE_TOKEN),
      account: Token.asString(process.env.DNSIMPLE_ACCOUNT),
    });

    new Record(this, "web-www", {
      domain: "example.com",
      name: "web",
      value: instance.publicIp,
      type: "A",
    });
    // DOCS_BLOCK_END:providers-import-classes

    // DOCS_BLOCK_START:providers-import,providers-import-classes
  }
}
// DOCS_BLOCK_END:providers-import,providers-import-classes
