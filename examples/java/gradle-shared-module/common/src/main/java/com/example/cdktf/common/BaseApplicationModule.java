package com.example.cdktf.common;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformVariable;
import imports.aws.AwsProvider;
import software.constructs.Construct;

public abstract class BaseApplicationModule extends TerraformStack {

  private final TerraformVariable varEnvironment;
  private final TerraformVariable varAwsRegion;
  private final TerraformVariable varAwsProfile;
  private final AwsProvider providerAws;

  public BaseApplicationModule(final Construct scope, final String id) {
    super(scope, id);

    varEnvironment = buildVarEnvironment();
    varAwsRegion = buildVarAwsRegion();
    varAwsProfile = buildVarAwsProfile();
    providerAws = buildDefaultAwsProvider();

  }

  protected TerraformVariable buildVarEnvironment(){
    return TerraformVariable.Builder
        .create(this, "environment")
        .type("string")
        .build();
  }

  public TerraformVariable getVarEnvironment() {
    return varEnvironment;
  }

  protected TerraformVariable buildVarAwsRegion(){
     return TerraformVariable.Builder
        .create(this, "aws_region")
        .type("string")
        .defaultValue("us-east-1")
        .build();
  }

  public TerraformVariable getVarAwsRegion() {
    return varAwsRegion;
  }

  protected TerraformVariable buildVarAwsProfile(){
    return TerraformVariable.Builder
        .create(this, "aws_profile")
        .type("string")
        .build();
  }

  public TerraformVariable getVarAwsProfile() {
    return varAwsProfile;
  }

  protected AwsProvider buildDefaultAwsProvider(){
    return AwsProvider.Builder
        .create(this,"aws-default")
        .region(varAwsRegion.getStringValue())
        .profile(varAwsProfile.getStringValue())
        .alias("default")
        .build();
  }

  public AwsProvider getProviderAws(){
    return providerAws;
  }

  public static void main(String[] args) {
    final App app = new App();
    new BaseApplicationModule(app, "base-application-module") {};
    app.synth();
  }

}