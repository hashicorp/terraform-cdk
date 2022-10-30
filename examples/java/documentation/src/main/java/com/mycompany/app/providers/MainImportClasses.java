package com.mycompany.app.providers;

// DOCS_BLOCK_START:providers-import-classes
import software.constructs.Construct;
import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.Token;
import imports.aws.instance.Instance;
import imports.aws.instance.InstanceConfig;
import imports.aws.provider.AwsProvider;
import imports.aws.provider.AwsProviderConfig;
import imports.dnsimple.provider.DnsimpleProvider;
import imports.dnsimple.provider.DnsimpleProviderConfig;
import imports.dnsimple.record.Record;
import imports.dnsimple.record.RecordConfig;

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

        new DnsimpleProvider(this, "dnsimple", DnsimpleProviderConfig.builder()
                .token(Token.asString(System.getenv("DNSIMPLE_TOKEN")))
                .account(Token.asString(System.getenv("DNSIMPLE_ACCOUNT")))
                .build()
        );

        new Record(this, "web-www", RecordConfig.builder()
                .domain("example.com")
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