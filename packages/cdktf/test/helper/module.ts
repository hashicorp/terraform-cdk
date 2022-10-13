// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TerraformModuleUserOptions, TerraformModule } from "../../lib";
import { Construct } from "constructs";

export interface TestModuleOptions extends TerraformModuleUserOptions {
  readonly moduleParameter: string;
}

export class TestModule extends TerraformModule {
  private readonly inputs: { [name: string]: any } = {};

  public constructor(scope: Construct, id: string, options: TestModuleOptions) {
    super(scope, id, {
      ...options,
      source: "my-module",
      version: "1.0",
    });
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
}
