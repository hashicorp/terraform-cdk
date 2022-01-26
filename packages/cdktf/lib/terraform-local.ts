import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { Token } from "./tokens";
import { ref } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";
import { ITerraformAddressable } from "./terraform-addressable";

export class TerraformLocal
  extends TerraformElement
  implements ITerraformAddressable
{
  private _expression: any;
  public readonly fqn: string;

  constructor(scope: Construct, id: string, expression: any) {
    super(scope, id);

    this._expression = expression;
    this.fqn = Token.asString(
      ref(`local.${this.friendlyUniqueId}`, this.cdktfStack)
    );
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

  public get asBoolean(): IResolvable {
    return this.interpolation();
  }

  private interpolation(): any {
    return ref(`local.${this.friendlyUniqueId}`, this.cdktfStack);
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
