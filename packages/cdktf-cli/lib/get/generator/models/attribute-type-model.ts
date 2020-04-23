import { Struct } from './struct'

export class AttributeTypeModelOptions {
  public struct?: Struct;
  public isList?: boolean;
  public isComputed?: boolean;
  public isMap?: boolean;
}

export enum TokenizableTypes {
  STRING = 'string',
  NUMBER = 'number'
}

export interface ComputedComplexListOptions {
  name: string;
  type: string;
}

export class AttributeTypeModel {
  public isList: boolean;
  public isComputed: boolean;
  public isMap: boolean;
  public struct?: Struct;

  constructor(private _type: string, options: AttributeTypeModelOptions = {}) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.struct = options.struct;
  }

  public get type(): string {
    if (this.isMap) return `{ [key: string]: ${this._type} }`;
    if (this.isList && !this.isComputed) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isPrimitive) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isComplex) return `${this._type}`;
    return this._type
  }

  public determineGetAttCall(terraformAttributeName: string): string {
    if (this.type === TokenizableTypes.STRING) {
      return this.isList ? this.getListAttribute(terraformAttributeName) : this.getStringAttribute(terraformAttributeName)
    }
    if (this.type === TokenizableTypes.NUMBER) { return this.getNumberAttribute(terraformAttributeName) }
    return 'any'
  }

  public computedComplexList(argument: ComputedComplexListOptions): string {
    return `new ${this.type}(${argument.name})`
  }

  public get isComplex(): boolean {
    return !!this.struct
  }

  public get isPrimitive(): boolean {
    return !this.isComplex
  }

  public get isComputedComplexList(): boolean {
    return this.isList && this.isComputed && this.isComplex
  }

  public get isInterpolatable(): boolean {
    return Object.values(TokenizableTypes).includes(this.type as TokenizableTypes)
  }

  private getListAttribute(name: string): string {
    return `this.getListAttribute('${name}')`
  }

  private getStringAttribute(name: string): string {
    return `this.getStringAttribute('${name}')`
  }

  private getNumberAttribute(name: string): string {
    return `this.getNumberAttribute('${name}')`
  }
}