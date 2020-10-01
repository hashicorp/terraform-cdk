import { Struct } from './struct'

export interface AttributeTypeModelOptions {
  struct?: Struct;
  isList?: boolean;
  isComputed?: boolean;
  isOptional?: boolean;
  isRequired?: boolean;
  isMap?: boolean;
  level?: number;
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
  public isRequired?: boolean;
  public isMap: boolean;
  public struct?: Struct;
  public level?: number;

  constructor(private _type: string, options: AttributeTypeModelOptions) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.isRequired = !!options.isRequired;
    this.level = options.level
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

  public get dependencies(): string[] | undefined {
    if (this.isComputedComplex && !this.isOptional) {
      if (!!this.isRequired || this.isOptional) {
        if (this.isStringMap) return [`import { StringMap } from "cdktf";`, `import { hashMapper } from "cdktf";`];
        if (this.isNumberMap) return [`import { NumberMap } from "cdktf";`, `import { hashMapper } from "cdktf";`];
        if (this.isBooleanMap) return [`import { BooleanMap } from "cdktf";`, `import { hashMapper } from "cdktf";`];
        if (this.isStringList) return [`import { listMapper } from "cdktf";`, `import { stringToTerraform } from "cdktf";`];
        if (this.isNumberList) return [`import { listMapper } from "cdktf";`, `import { numberToTerraform } from "cdktf";`];
      }
      else {
        if (this.isStringMap) return [`import { StringMap } from "cdktf";`];
        if (this.isNumberMap) return [`import { NumberMap } from "cdktf";`];
        if (this.isBooleanMap) return [`import { BooleanMap } from "cdktf";`];
      }
      if (this.isList) return [`import { ComplexComputedList } from "cdktf";`];
    }
    if (!!this.isRequired || this.isOptional) {
      if (this.isString) return [`import { stringToTerraform } from "cdktf";`];
      if (this.isNumber) return [`import { numberToTerraform } from "cdktf";`];
      if (this.isBoolean) return [`import { booleanToTerraform } from "cdktf";`];
      if (this.isList && this.isMap) return [`import { listMapper } from "cdktf";`, `import { hashMapper } from "cdktf";`, `import { anyToTerraform } from "cdktf";`];
      if (this.isMap) return [`import { hashMapper } from "cdktf";`, `import { anyToTerraform } from "cdktf";`];
      if (this.isStringList) return [`import { listMapper } from "cdktf";`, `import { stringToTerraform } from "cdktf";`];
      if (this.isNumberList) return [`import { listMapper } from "cdktf";`, `import { numberToTerraform } from "cdktf";`];
      if (this.isList) return [`import { listMapper } from "cdktf";`];
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

  public get isNumberList(): boolean {
    return this.isList && this._type === TokenizableTypes.NUMBER;
  }

  public get isBoolean(): boolean {
    return this.name === TokenizableTypes.BOOLEAN || this.isBooleanMap
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
    return this.isRootType && this.isComputed && this.isComplex
  }

  public get isRootType(): boolean {
    return this.level === 2
  }

  public get isComputedPrimitive(): boolean {
    return this.isComputed && this.isPrimitive
  }

  public get isTokenizable(): boolean {
    return Object.values(TokenizableTypes).includes(this.name as TokenizableTypes)
  }

  public get innerType() {
    return this._type;
  }
}