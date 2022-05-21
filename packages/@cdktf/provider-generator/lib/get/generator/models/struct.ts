import { AttributeModel } from "./attribute-model";
import { downcaseFirst } from "../../../util";
export class Struct {
  constructor(
    public readonly name: string,
    public readonly attributes: AttributeModel[],
    public readonly isClass = false,
    public readonly isAnonymous = false,
    public isSingleItem = false,
    public readonly nestingMode: string = ""
  ) {}

  public get assignableAttributes(): AttributeModel[] {
    return this.attributes.filter((attribute) => attribute.isAssignable);
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

  public get assignable() {
    return !this.isClass || this.assignableAttributes.length > 0;
  }

  public get extends(): string {
    return "";
  }

  public get mapperName(): string {
    return `${downcaseFirst(this.name)}ToTerraform`;
  }

  public get outputReferenceName(): string {
    return `${this.name}OutputReference`;
  }

  public get listName(): string {
    return `${this.name}List`;
  }

  public get mapName(): string {
    return `${this.name}Map`;
  }

  public get isProvider(): boolean {
    return this.attributes.some((att) => att.isProvider);
  }

  public get referencedTypes(): string[] {
    const types: string[] = [];

    this.attributes.forEach((att) => {
      const attReferences = att.getReferencedTypes(false); // This may be a config struct, but still need the references in this context
      if (attReferences) {
        types.push(...attReferences);
      }
    });

    return types;
  }

  public get exportCount(): number {
    let count = 1; // self
    count += 1; // toTerraform function

    if (
      this.nestingMode === "list" ||
      this.nestingMode === "set" ||
      this.nestingMode === "map"
    ) {
      count += 1; // output reference

      if (!this.isSingleItem) {
        count += 1; // complex collection
      }
    }

    return count;
  }
}

export class ConfigStruct extends Struct {
  public get extends(): string {
    return ` extends cdktf.TerraformMetaArguments`;
  }
}
