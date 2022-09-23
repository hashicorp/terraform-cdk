package com.example.cdktf.modules;

import com.example.cdktf.common.BaseApplicationModule;
import com.hashicorp.cdktf.App;
import imports.vsphere.provider.VsphereProvider;
import imports.vsphere.virtual_machine.VirtualMachine;
import software.constructs.Construct;

public class ModuleA extends BaseApplicationModule {

  public ModuleA(Construct scope, String id) {
    super(scope, id);

    final var providerExternal = VsphereProvider.Builder
        .create(this, "vsphere-external")
        .user(getVarUser().getStringValue())
        .password(getVarPassword().getStringValue())
        .vsphereServer(getVarServer().getStringValue())
        .build();

    final var resourceInternalVm = VirtualMachine.Builder
        .create(this, "local-vm")
        .name("internal-vm")
        .resourcePoolId("42")
        // Here we're referencing a provider inherited from the BaseApplicationModule
        .provider(getProviderVsphere())
        .build();

    final var resourceExternalVm = VirtualMachine.Builder
        .create(this, "external-vm")
        .name("external-vm")
        .resourcePoolId("42")
        .provider(providerExternal)
        .build();

  }

  public static void main(String[] args) {
    final App app = new App();
    new ModuleA(app, "module-a");
    app.synth();
  }
}
