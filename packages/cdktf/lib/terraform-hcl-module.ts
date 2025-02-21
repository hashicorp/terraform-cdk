// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformModuleConfig, TerraformModule } from "./terraform-module";
import { Token, IResolvable } from "./tokens";

export interface TerraformHclModuleConfig extends TerraformModuleConfig {
  readonly variables?: { [key: string]: any };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformHclModule extends TerraformModule {
  private _variables?: { [key: string]: any };

  constructor(scope: Construct, id: string, options: TerraformHclModuleConfig) {
    super(scope, id, options);

    this._variables = options.variables;
  }

  public get variables() {
    return this._variables;
  }

  public set(variable: string, value: any) {
    if (!this._variables) {
      this._variables = {};
    }
    this._variables[variable] = value;
  }

  public get(output: string): any {
    return Token.asAny(this.interpolationForOutput(output));
  }

  public getNumber(output: string): number {
    return Token.asNumber(this.interpolationForOutput(output));
  }

  public getBoolean(output: string): IResolvable {
    return this.interpolationForOutput(output);
  }

  public getList(output: string): string[] {
    return Token.asList(this.interpolationForOutput(output));
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return { ...this.variables };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    if (!this.variables) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(this.variables as any).map(([key, variable]) => {
        return [
          key,
          {
            value: variable,
            type: "any",
          },
        ];
      }),
    );
  }
}
