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

  constructor(scope: Construct, id: string, expression: any) {
    super(scope, id);

    this._expression = expression;
  }

  public set expression(value: any) {
    this._expression = value;
  }

  public get expression() {
    return Token.asAny(ref(this.interpolation(), this.cdktfStack));
  }

  public get asString(): string {
    return Token.asString(ref(this.interpolation(), this.cdktfStack));
  }

  public get asNumber(): number {
    return Token.asNumber(ref(this.interpolation(), this.cdktfStack));
  }

  public get asList(): string[] {
    return Token.asList(ref(this.interpolation(), this.cdktfStack));
  }

  public get asBoolean(): IResolvable {
    return ref(this.interpolation(), this.cdktfStack);
  }

  private interpolation(): any {
    return `local.${this.friendlyUniqueId}`;
  }

  public get fqn() {
    return `local.${this.friendlyUniqueId}`;
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
