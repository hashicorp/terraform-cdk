import { AttributeModel } from "./attribute-model";
import { AttributeTypeModel } from "./attribute-type-model";

export class Struct {
  constructor(
    public readonly name: string,
    public readonly attributes: AttributeModel[],
    public readonly isAttribute = false,
    private readonly baseName: string = "",
    public readonly isReadOnly = true,
    public readonly attributeBase = "Object"
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
    return this.isAttribute
      ? ` extends cdktf.Terraform${this.attributeBase}Attribute`
      : "";
  }

  public get attributeValueType() {
    switch (true) {
      case this.isReadOnly:
        return "any";
      case this.attributeBase === "Object":
        return this.baseName;
      case this.attributeBase === "List":
        return `${this.baseName}[]`;
      case this.attributeBase === "Set":
        return `${this.baseName}[]`; //jsii doesn't support sets currently
      case this.attributeBase === "Map":
        return `{ [key: string]: ${this.baseName} }`;
      default:
        return ""; //this case shouldn't happen
    }
  }

  public get attributeValueAttribute() {
    switch (true) {
      case this.attributeBase === "Object":
        return this.baseName;
      case this.attributeBase === "List":
        return `Terraform${this.baseName}Attribute`;
      case this.attributeBase === "Set":
        return `Terraform${this.baseName}Attribute`;
      case this.attributeBase === "Map":
        return `Terraform${this.baseName}Attribute`;
      default:
        return ""; //this case shouldn't happen
    }
  }

  public get attributeTypeAlias() {
    switch (true) {
      case this.attributeBase === "Object":
        return `Terraform${this.baseName}`;
      case this.attributeBase === "List":
        return `Terraform${this.baseName}List`;
      case this.attributeBase === "Set":
        return `Terraform${this.baseName}Set`;
      case this.attributeBase === "Map":
        return `Terraform${this.baseName}Map`;
      default:
        return ""; //this case shouldn't happen
    }
  }

  public get attributeTypeModel() {
    switch (true) {
      case this.attributeBase === "Object":
        return new AttributeTypeModel(this.baseName, {});
      case this.attributeBase === "List":
        return new AttributeTypeModel(this.baseName, { isList: true });
      case this.attributeBase === "Set":
        return new AttributeTypeModel(this.baseName, { isSet: true });
      case this.attributeBase === "Map":
        return new AttributeTypeModel(this.baseName, { isMap: true });
      default:
        return new AttributeTypeModel(this.baseName, {}); //this case shouldn't happen
    }
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
