/*
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

package com.mycompany.app.providers;

// DOCS_BLOCK_START:providers-import-classes
import com.hashicorp.cdktf.TerraformVariableConfig;
import software.constructs.Construct;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformVariable;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.dnsimple.provider.DnsimpleProvider;
import imports.dnsimple.provider.DnsimpleProviderConfig;
import imports.dnsimple.zone_record.ZoneRecord;
import imports.dnsimple.zone_record.ZoneRecordConfig;

public class MainImportClasses extends TerraformStack {

    public MainImportClasses(Construct scope, String id){
        super(scope, id);

        new AwsProvider(this, "aws", AwsProviderConfig.builder()
                .region("us-east-1")
                .build()
        );

        Instance instance = new Instance(this, "Hello", InstanceConfig.builder()
                .ami("ami-2757f631")
                .instanceType("t2.micro")
                .build()
        );

        TerraformVariable dnsimpleToken = new TerraformVariable(this, "dnsimpleToken", TerraformVariableConfig.builder()
                .type("string")
                .description("dnsimple token")
                .sensitive(true)
                .build()
        );

        TerraformVariable dnsimpleAccount = new TerraformVariable(this, "dnsimpleAccount", TerraformVariableConfig.builder()
                .type("string")
                .description("dnsimple account")
                .sensitive(true)
                .build()
        );

        new DnsimpleProvider(this, "dnsimple", DnsimpleProviderConfig.builder()
                .token(dnsimpleToken.getStringValue())
                .account(dnsimpleAccount.getStringValue())
                .build()
        );

        new ZoneRecord(this, "web-www", ZoneRecordConfig.builder()
                .zoneName("example.com")
                .name("web")
                .value(instance.getPublicIp())
                .type("A")
                .build()
        );
    }

    // DOCS_BLOCK_END:providers-import-classes
    /**
     // DOCS_BLOCK_START:providers-import-classes
     public static void main(String[] args) {
     final App app = new App();
     new MainImportClasses(app, "hello-terraform");
     app.synth();
     }
     // DOCS_BLOCK_END:providers-import-classes
     */
    // DOCS_BLOCK_START:providers-import-classes
}
// DOCS_BLOCK_END:providers-import-classes