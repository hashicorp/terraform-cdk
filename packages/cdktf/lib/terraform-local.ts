import { Construct } from "constructs";
import { TerraformElement } from "./terraform-element";
import {
  TerraformAny,
  TerraformAnyAttribute,
  TerraformStringAttribute,
  TerraformNumberAttribute,
  TerraformStringListAttribute,
  TerraformAnyListAttribute,
  TerraformBooleanAttribute,
} from "./attributes";
import { ITerraformAddressable } from "./terraform-addressable";

export class TerraformLocal
  extends TerraformElement
  implements ITerraformAddressable
{
  private _expression!: TerraformAnyAttribute;

  constructor(scope: Construct, id: string, expression: TerraformAny) {
    super(scope, id);

    this.putExpression(expression);
  }

  public putExpression(value: TerraformAny) {
    this._expression = TerraformAnyAttribute.construct(this, "", value);
  }

  public get expression() {
    return this._expression;
  }

  public get asString() {
    return new TerraformStringAttribute(
      this,
      "",
      this.expression.internalValue,
      { nested: this.expression }
    );
  }

  public get asNumber() {
    return new TerraformNumberAttribute(
      this,
      "",
      this.expression.internalValue,
      { nested: this.expression }
    );
  }

  public get asStringList() {
    return new TerraformStringListAttribute(
      this,
      "",
      this.expression.internalValue,
      { nested: this.expression }
    );
  }

  public get asList() {
    return new TerraformAnyListAttribute(
      this,
      "",
      this.expression.internalValue,
      { nested: this.expression }
    );
  }

  public get asBoolean() {
    return new TerraformBooleanAttribute(
      this,
      "",
      this.expression.internalValue,
      { nested: this.expression }
    );
  }

  public get fqn() {
    return `local.${this.friendlyUniqueId}`;
  }

  public toTerraform(): any {
    return {
      locals: {
        [this.friendlyUniqueId]: this._expression.toTerraform(),
      },
    };
  }
}
