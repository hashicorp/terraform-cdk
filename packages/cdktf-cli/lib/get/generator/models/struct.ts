import { AttributeModel } from './attribute-model';

export class Struct {
  constructor(public readonly name: string, public readonly attributes: AttributeModel[], public readonly isClass = false, public readonly isAnonymous = false) {}

  public get assignableAttributes(): AttributeModel[] {
    const attributes = this.isAnonymous ? this.attributes : this.attributes.filter(attribute => (!attribute.computed || (attribute.computed && attribute.optional)))
    return this.filterIgnoredAttributes(attributes)
  }

  public get optionalAttributes(): AttributeModel[] {
    return this.attributes.filter(attribute => attribute.optional)
  }

  public get allOptional(): boolean {
    return this.attributes.filter(attribute => !attribute.optional && !attribute.computed).length == 0
  }

  public get attributeType() {
    return `${this.name}${this.allOptional ? ' = {}' : ''}`
  }

  protected filterIgnoredAttributes(attributes: AttributeModel[]): AttributeModel[] {
    return attributes
  }

  public get extends(): string {
    return '';
  }
}

export class ConfigStruct extends Struct {
  protected filterIgnoredAttributes(attributes: AttributeModel[]): AttributeModel[] {
    const ignoreList = ['arn', 'id']
    return attributes.filter(attribute => !(ignoreList.includes(attribute.name) && !attribute.isRequired))
  }

  public get extends(): string {
    return ` extends TerraformMetaArguments`
  }
}
