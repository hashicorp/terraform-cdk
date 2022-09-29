package com.example.cdktf.common;

import com.hashicorp.cdktf.App;
import com.hashicorp.cdktf.TerraformStack;
import com.hashicorp.cdktf.TerraformVariable;
import imports.vsphere.provider.VsphereProvider;
import software.constructs.Construct;

public abstract class BaseApplicationModule extends TerraformStack {

  private final TerraformVariable varEnvironment;
  private final TerraformVariable varUser;
  private final TerraformVariable varPassword;
  private final TerraformVariable varServer;
  private final VsphereProvider providerVsphere;

  public BaseApplicationModule(final Construct scope, final String id) {
    super(scope, id);

    varEnvironment = buildVarEnvironment();
    varUser = buildVarUser();
    varPassword = buildVarPassword();
    varServer = buildVarServer();
    providerVsphere = buildDefaultVsphereProvider();
  }


public TerraformVariable getVarEnvironment() {
    return varEnvironment;
  }

  protected TerraformVariable buildVarEnvironment(){
    return TerraformVariable.Builder
        .create(this, "environment")
        .type("string")
        .build();
  }
  

  public TerraformVariable getVarUser() {
    return varUser;
  }

  protected TerraformVariable buildVarUser(){
    return TerraformVariable.Builder
        .create(this, "user")
        .type("string")
        .build();
  }

  public TerraformVariable getVarPassword() {
    return varPassword;
  }

  protected TerraformVariable buildVarPassword(){
    return TerraformVariable.Builder
        .create(this, "password")
        .type("string")
        .build();
  }

  public TerraformVariable getVarServer() {
    return varServer;
  }

  protected TerraformVariable buildVarServer(){
    return TerraformVariable.Builder
        .create(this, "server")
        .type("string")
        .build();
  }

  protected VsphereProvider buildDefaultVsphereProvider(){
    return VsphereProvider.Builder
        .create(this,"vsphere-default")
        .user(varUser.getStringValue())
        .password(varPassword.getStringValue())
        .vsphereServer(varServer.getStringValue())
        .alias("default")
        .build();
  }

  public VsphereProvider getProviderVsphere(){
    return providerVsphere;
  }

  public static void main(String[] args) {
    final App app = new App();
    new BaseApplicationModule(app, "base-application-module") {};
    app.synth();
  }

}