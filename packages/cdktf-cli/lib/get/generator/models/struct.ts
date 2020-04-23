import { AttributeModel } from './attribute-model';

export class Struct {
  constructor(public readonly name: string, public readonly attributes: AttributeModel[], public readonly isComputed = false) {}

  public attributeName(attributeName: string): string {
    return `${this.allAttributesComputed ? '_' : ''}${attributeName}`;
  }

  public get assignableAttributes(): AttributeModel[] {
    return this.attributes.filter(attribute => !attribute.computed)
  }

  private get allAttributesOptional(): boolean {
    return this.requiredAttributes.length > 0
  }

  private get allAttributesComputed(): boolean {
    const computedAttributes = this.attributes.filter(a => a.computed)
    return computedAttributes.length === this.attributes.length
  }

  private get requiredAttributes(): AttributeModel[] {
    return this.attributes.filter(a => !a.optional && !a.computed);
  }

  public get attributeType() {
    return `${this.name}${this.allAttributesOptional ? ' = {}' : ''}`
  }
}
