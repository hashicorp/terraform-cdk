import { AttributeModel } from './attribute-model';

export class Struct {
  constructor(public readonly name: string, public readonly attributes: AttributeModel[], public readonly isClass = false, public readonly isAnonymous = false) {}

  public attributeName(attributeName: string): string {
    return `${this.allAttributesComputed ? '_' : ''}${attributeName}`;
  }

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

  private get allAttributesComputed(): boolean {
    const computedAttributes = this.attributes.filter(a => a.computed)
    return computedAttributes.length === this.attributes.length
  }

  public get attributeType() {
    return `${this.name}${this.allOptional ? ' = {}' : ''}`
  }

  protected filterIgnoredAttributes(attributes: AttributeModel[]): AttributeModel[] {
    return attributes
  }
}

export class ConfigStruct extends Struct {
  protected filterIgnoredAttributes(attributes: AttributeModel[]): AttributeModel[] {
    const ignoreList = ['arn', 'id']
    return attributes.filter(attribute => !(ignoreList.includes(attribute.name) && !attribute.isRequired))
  }
}
