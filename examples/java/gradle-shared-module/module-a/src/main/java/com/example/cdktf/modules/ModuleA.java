package com.example.cdktf.modules;

import com.example.cdktf.common.BaseApplicationModule;
import com.hashicorp.cdktf.App;
import imports.aws.AwsProvider;
import imports.aws.SecretsmanagerSecret;
import software.constructs.Construct;

public class ModuleA extends BaseApplicationModule {

  public ModuleA(Construct scope, String id) {
    super(scope, id);

    final var providerExternalAwsAccount = AwsProvider.Builder
        .create(this, "aws-external")
        .region("us-west-1")
        .alias("external")
        .skipRequestingAccountId(true)
        .profile("external")
        .build();

    final var resourceInternalAwsSecret = SecretsmanagerSecret.Builder
        .create(this, "local-secret")
        .name("internal-secret")
        // Here we're referencing a provider inherited from the BaseApplicationModule
        .provider(getProviderAws())
        .build();

    final var resourceExternalAwsSecret = SecretsmanagerSecret.Builder
        .create(this, "external-secret")
        .name("external-secret")
        .provider(providerExternalAwsAccount)
        .build();

  }

  public static void main(String[] args) {
    final App app = new App();
    new ModuleA(app, "module-a");
    app.synth();
  }
}
