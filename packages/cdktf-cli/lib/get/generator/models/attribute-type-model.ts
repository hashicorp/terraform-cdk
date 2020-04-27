import { Struct } from './struct'

export class AttributeTypeModelOptions {
  public struct?: Struct;
  public isList?: boolean;
  public isComputed?: boolean;
  public isOptional?: boolean;
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
  public isOptional: boolean;
  public isMap: boolean;
  public struct?: Struct;

  constructor(private _type: string, options: AttributeTypeModelOptions = {}) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.struct = options.struct;
  }

  public get name(): string {
    if (this.isStringMap) return `StringMap`;
    if (this.isNumberMap) return `NumberMap`;
    if (this.isBooleanMap) return `BooleanMap`;
    if (this.isMap) return `{ [key: string]: ${this._type} }`;
    if (this.isList && !this.isComputed) return `${this._type}[]`;
    if (this.isList && this.isComputed && (this.isPrimitive || !this.struct?.isClass)) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isComplex) return `${this._type}`;
    return this._type
  }

  public get dependencies(): string | undefined {
    if (this.isComputedComplex && !this.isOptional) {
      if (this.isStringMap) return `import { StringMap } from "cdktf";`
      if (this.isNumberMap) return `import { NumberMap } from "cdktf";`
      if (this.isBooleanMap) return `import { BooleanMap } from "cdktf";`
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

  public get isString(): boolean {
    return this.name === TokenizableTypes.STRING
  }

  public get isNumber(): boolean {
    return this.name === TokenizableTypes.NUMBER
  }

  public get isStringList(): boolean {
    return this.name === TokenizableTypes.STRING_LIST
  }

  public get isBoolean(): boolean {
    return this.name === TokenizableTypes.BOOLEAN
  }

  public get isStringMap(): boolean {
    return !this.isOptional && this.isMap && this._type === TokenizableTypes.STRING && this.isComputed
  }

  public get isNumberMap(): boolean {
    return !this.isOptional && this.isMap && this._type === TokenizableTypes.NUMBER && this.isComputed
  }

  public get isBooleanMap(): boolean {
    return !this.isOptional && this.isMap && this._type === TokenizableTypes.BOOLEAN && this.isComputed
  }

  public get isComputedComplex(): boolean {
    return this.isComputed && this.isComplex
  }

  public get isComputedPrimitive(): boolean {
    return this.isComputed && this.isPrimitive
  }

  public get isTokenizable(): boolean {
    return Object.values(TokenizableTypes).includes(this.name as TokenizableTypes)
  }
}