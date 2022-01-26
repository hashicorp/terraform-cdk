import { Construct } from "constructs";
import { TerraformModuleOptions, TerraformModule } from "./terraform-module";
import { Token, IResolvable } from "./tokens";

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
}
