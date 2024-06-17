// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformModuleUserConfig, TerraformModule } from "../../lib";
import { Construct } from "constructs";

export interface TestModuleConfig extends TerraformModuleUserConfig {
  readonly moduleParameter: string;
  readonly inputs?: { [name: string]: any };
}

export class TestModule extends TerraformModule {
  private readonly inputs: { [name: string]: any } = {};

  public constructor(scope: Construct, id: string, options: TestModuleConfig) {
    super(scope, id, {
      ...options,
      source: "my-module",
      version: "1.0",
    });
    this.inputs = options.inputs || {};
    this.moduleParameter = options.moduleParameter;
  }

  public get moduleParameter(): string {
    return this.inputs["module_parameter"] as string;
  }

  public set moduleParameter(value: string) {
    this.inputs["module_parameter"] = value;
  }

  protected synthesizeAttributes() {
    return this.inputs;
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return this.inputs;
  }
}
