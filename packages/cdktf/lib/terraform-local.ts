// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import { Token } from "./tokens";
import { ref } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";
import { ITerraformAddressable } from "./terraform-addressable";

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformLocal
  extends TerraformElement
  implements ITerraformAddressable
{
  private _expression: any;

  constructor(scope: Construct, id: string, expression: any) {
    super(scope, id, "local");

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

  public get asStringMap(): { [key: string]: string } {
    return Token.asStringMap(this.interpolation());
  }

  public get asNumberMap(): { [key: string]: number } {
    return Token.asNumberMap(this.interpolation());
  }

  public get asBooleanMap(): { [key: string]: boolean } {
    return Token.asBooleanMap(this.interpolation());
  }

  public get asAnyMap(): { [key: string]: any } {
    return Token.asAnyMap(this.interpolation());
  }

  public get asBoolean(): IResolvable {
    return this.interpolation();
  }

  private interpolation(): any {
    return ref(`local.${this.friendlyUniqueId}`, this.cdktfStack);
  }

  public toHclTerraform(): any {
    return {
      locals: {
        [this.friendlyUniqueId]: {
          value: this._expression,
          isBlock: false,
          type: "any",
        },
      },
    };
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

  /**
   * @returns a string token referencing the value of this local
   */
  toString(): string {
    return this.asString;
  }
}
