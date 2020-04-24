import { Struct } from './struct'

export class AttributeTypeModelOptions {
  public struct?: Struct;
  public isList?: boolean;
  public isComputed?: boolean;
  public isMap?: boolean;
}

export enum TokenizableTypes {
  STRING = 'string',
  STRING_LIST = 'string[]',
  NUMBER = 'number',
  BOOLEAN = 'boolean'
}

export interface ComputedComplexOptions {
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
    if (this.isMap && this.isComputed) return `StringMap`;
    if (this.isMap) return `{ [key: string]: ${this._type} }`;
    if (this.isList && !this.isComputed) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isPrimitive) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isComplex) return `${this._type}`;
    return this._type
  }

  public get dependencies(): string | undefined {
    if (this.isComputedComplex) {
      if (this.isMap) return `import { StringMap } from "cdktf";`
      if (this.isList) return `import { ComplexComputedList } from "cdktf";`
    }
    return undefined
  }

  public get isComplex(): boolean {
    return !!this.struct || (this.isMap && this.isComputed)
  }

  public get isPrimitive(): boolean {
    return !this.isComplex
  }

  public get isComputedComplex(): boolean {
    return this.isComputed && this.isComplex
  }

  public get isComputedPrimitive(): boolean {
    return this.isComputed && this.isPrimitive
  }

  public get isTokenizable(): boolean {
    return Object.values(TokenizableTypes).includes(this.type as TokenizableTypes)
  }
}