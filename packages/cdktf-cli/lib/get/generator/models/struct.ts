import { AttributeModel } from "./attribute-model";

export class Struct {
  constructor(
    public readonly name: string,
    public readonly attributes: AttributeModel[],
    public readonly isClass = false,
    public readonly isComputed = false
  ) {}

  public get assignableAttributes(): AttributeModel[] {
    const attributes = this.attributes.filter(
      (attribute) => attribute.isAssignable
    );
    return this.filterIgnoredAttributes(attributes);
  }

  public get nonAssignableAttributes(): AttributeModel[] {
    const attributes = this.attributes.filter(
      (attribute) => !attribute.isAssignable
    );
    return this.filterIgnoredAttributes(attributes);
  }

  public get accessibleAttributes(): AttributeModel[] {
    return this.filterIgnoredAttributes(this.attributes);
  }

  public get optionalAttributes(): AttributeModel[] {
    return this.attributes.filter((attribute) => attribute.optional);
  }

  public get allOptional(): boolean {
    return (
      this.attributes.filter(
        (attribute) => !attribute.optional && !attribute.computed
      ).length == 0
    );
  }

  public get attributeType() {
    return `${this.name}${this.allOptional ? " = {}" : ""}`;
  }

  protected filterIgnoredAttributes(
    attributes: AttributeModel[]
  ): AttributeModel[] {
    return attributes;
  }

  public get extends(): string {
    return this.isComputed
      ? ` extends ${this.name.replace("Computed", "")}`
      : "";
  }
}

export class ConfigStruct extends Struct {
  protected filterIgnoredAttributes(
    attributes: AttributeModel[]
  ): AttributeModel[] {
    return attributes.filter((attribute) => !attribute.isConfigIgnored);
  }

  public get extends(): string {
    return ` extends cdktf.TerraformMetaArguments`;
  }
}
