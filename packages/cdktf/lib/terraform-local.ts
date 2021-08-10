import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { Token } from "./tokens";

export class TerraformLocal extends TerraformElement {
  private _expression: any;

  constructor(scope: Construct, id: string, expression: any) {
    super(scope, id);

    this._expression = expression;
  }

  public set expression(value: any) {
    this._expression = value;
  }

  public get expression() {
    return Token.asAny(this.interpolation());
  }

  public get asString(): string {
    return Token.asString(this.interpolation());
  }

  public get asNumber(): number {
    return Token.asNumber(this.interpolation());
  }

  public get asList(): string[] {
    return Token.asList(this.interpolation());
  }

  public get asBoolean(): boolean {
    return Token.asString(this.interpolation()) as any as boolean;
  }

  private interpolation(): any {
    return `\${local.${this.friendlyUniqueId}}`;
  }

  public toTerraform(): any {
    return {
      locals: {
        [this.friendlyUniqueId]: this._expression,
      },
    };
  }
  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        local: Object.keys(this.rawOverrides),
      },
    };
  }
}
