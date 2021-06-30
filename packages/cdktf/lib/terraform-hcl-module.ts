import { Construct } from "constructs";
import { TerraformModuleOptions, TerraformModule } from "./terraform-module";
import {
  TerraformAnyAttribute,
  TerraformStringAttribute,
  TerraformNumberAttribute,
  TerraformBooleanAttribute,
  TerraformStringListAttribute,
  TerraformAnyListAttribute,
} from "./attributes";

export interface TerraformHclModuleOptions extends TerraformModuleOptions {
  readonly variables?: { [key: string]: any };
}

export class TerraformHclModule extends TerraformModule {
  private _variables?: { [key: string]: any };

  constructor(
    scope: Construct,
    id: string,
    options: TerraformHclModuleOptions
  ) {
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

  public get(output: string) {
    return new TerraformAnyAttribute(this, output);
  }

  public getString(output: string) {
    return new TerraformStringAttribute(this, output);
  }

  public getNumber(output: string) {
    return new TerraformNumberAttribute(this, output);
  }

  public getBoolean(output: string) {
    return new TerraformBooleanAttribute(this, output);
  }

  public getStringList(output: string) {
    return new TerraformStringListAttribute(this, output);
  }

  public getList(output: string) {
    return new TerraformAnyListAttribute(this, output);
  }

  protected synthesizeAttributes(): { [name: string]: any } {
    return { ...this.variables };
  }
}
