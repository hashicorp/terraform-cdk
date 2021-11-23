import { AttributeModel } from "./attribute-model";
import { downcaseFirst } from "../../../util";
export class Struct {
  constructor(
    public readonly name: string,
    public readonly attributes: AttributeModel[],
    public readonly isClass = false,
    public readonly isAnonymous = false,
    public isSingleItem = false
  ) {}

  public get assignableAttributes(): AttributeModel[] {
    const attributes = this.isAnonymous
      ? this.attributes
      : this.attributes.filter((attribute) => attribute.isAssignable);
    return this.filterIgnoredAttributes(attributes);
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
    return "";
  }

  public get attributeTypeNames(): string[] {
    return this.attributes.map((a) => a.type.typeName);
  }

  public get mapperName(): string {
    return `${downcaseFirst(this.name)}ToTerraform`;
  }

  public get outputReferenceName(): string {
    return `${this.name}OutputReference`;
  }

  public get isProvider(): boolean {
    return this.attributes.some((att) => att.isProvider);
  }

  public get attributeTypeNamesFromClasses(): string[] {
    return this.attributes
      .filter((a) => a.type.struct?.isClass)
      .map((a) => a.type.typeName);
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
