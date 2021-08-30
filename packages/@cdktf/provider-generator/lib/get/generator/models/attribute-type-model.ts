import { Struct } from "./struct";

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
  STRING = "string",
  STRING_LIST = "string[]",
  NUMBER = "number",
  BOOLEAN = "boolean",
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
  // FIXME: do we need an isNested here? maybe for creating different outcomes for the TF JSON?

  constructor(private _type: string, options: AttributeTypeModelOptions) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.isRequired = !!options.isRequired;
    this.level = options.level;
    this.struct = options.struct;
  }

  public get name(): string {
    if (this.isStringMap) return `cdktf.StringMap`;
    if (this.isNumberMap) return `cdktf.NumberMap`;
    if (this.isBooleanMap) return `cdktf.BooleanMap`;
    if (this.isMap)
      return `{ [key: string]: ${this._type} } | cdktf.IResolvable`;
    if (this.isList && !this.isComputed) return `${this._type}[]`;
    if (
      this.isList &&
      this.isComputed &&
      (this.isPrimitive || !this.struct?.isClass)
    )
      return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isComplex)
      return `${this._type}`;

    if (this._type === TokenizableTypes.BOOLEAN)
      return `boolean | cdktf.IResolvable`;
    return this._type;
  }

  public get isComplex(): boolean {
    return !!this.struct || (this.isMap && this.isComputed);
  }

  public get isPrimitive(): boolean {
    return !this.isComplex;
  }

  public get isString(): boolean {
    return this.name === TokenizableTypes.STRING;
  }

  public get isNumber(): boolean {
    return this.name === TokenizableTypes.NUMBER;
  }

  public get isStringList(): boolean {
    return this.name === TokenizableTypes.STRING_LIST;
  }

  public get isNumberList(): boolean {
    return this.isList && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanList(): boolean {
    return this.isList && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isBoolean(): boolean {
    return this._type === TokenizableTypes.BOOLEAN || this.isBooleanMap;
  }

  public get isStringMap(): boolean {
    return (
      !this.isOptional &&
      this.isMap &&
      this._type === TokenizableTypes.STRING &&
      this.isComputed
    );
  }

  public get isNumberMap(): boolean {
    return (
      !this.isOptional &&
      this.isMap &&
      this._type === TokenizableTypes.NUMBER &&
      this.isComputed
    );
  }

  public get isBooleanMap(): boolean {
    return (
      !this.isOptional &&
      this.isMap &&
      this._type === TokenizableTypes.BOOLEAN &&
      this.isComputed
    );
  }

  public get isComputedComplex(): boolean {
    return this.isRootType && this.isComputed && this.isComplex;
  }

  public get isRootType(): boolean {
    return this.level === 2;
  }

  public get isComputedPrimitive(): boolean {
    return this.isComputed && this.isPrimitive;
  }

  public get isTokenizable(): boolean {
    return Object.values(TokenizableTypes).includes(
      this.name as TokenizableTypes
    );
  }

  public get innerType() {
    return this._type;
  }
}
