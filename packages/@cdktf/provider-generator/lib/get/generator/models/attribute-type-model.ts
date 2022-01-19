import { Struct } from "./struct";

export interface AttributeTypeModelOptions {
  struct?: Struct;
  isList?: boolean;
  isSet?: boolean;
  isComputed?: boolean;
  isOptional?: boolean;
  isRequired?: boolean;
  isSingleItem?: boolean;
  isMap?: boolean;
  level?: number;
}

export enum TokenizableTypes {
  STRING = "string",
  STRING_LIST = "string[]",
  NUMBER = "number",
  NUMBER_LIST = "number[]",
  BOOLEAN = "boolean",
}

export interface ComputedComplexOptions {
  name: string;
  type: string;
}

export class AttributeTypeModel {
  public isList: boolean;
  public isSet: boolean;
  public isComputed: boolean;
  public isOptional: boolean;
  public isRequired?: boolean;
  public isSingleItem?: boolean; // a block with max one item in it
  public isMap: boolean;
  public struct?: Struct;
  public level?: number;
  public typeName: string;

  constructor(private _type: string, options: AttributeTypeModelOptions) {
    this.typeName = _type;
    this.isList = !!options.isList;
    this.isSet = !!options.isSet;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.isRequired = !!options.isRequired;
    this.isSingleItem = !!options.isSingleItem;
    this.level = options.level;
    this.struct = options.struct;
    if (options.struct) {
      options.struct.isSingleItem = this.isSingleItem || false;
    }
  }

  public get name(): string {
    // computed map wrappers
    if (this.isComputedStringMap) return `cdktf.StringMap`;
    if (this.isComputedNumberMap) return `cdktf.NumberMap`;
    if (this.isComputedBooleanMap) return `cdktf.BooleanMap`;
    if (this.isComputedAnyMap) return `cdktf.AnyMap`;

    // map of booleans has token support, but booleans don't
    if (this.isBooleanMap)
      return `{ [key: string]: (${this._type} | cdktf.IResolvable) }`;

    // other maps with token support
    if (this.isTokenizableMap) return `{ [key: string]: ${this._type} }`;

    // maps without token support
    if (this.isMap)
      return `{ [key: string]: ${this._type} } | cdktf.IResolvable`;

    const hasListRepresentation = this.isList || this.isSet;

    // single item list
    if (hasListRepresentation && !this.isComputed && this.isSingleItem)
      return `${this._type}`;

    // neither boolean nor boolean[] is tokenizable, so both parts need IResolvable
    if (hasListRepresentation && this._type === TokenizableTypes.BOOLEAN)
      return "Array<boolean | cdktf.IResolvable> | cdktf.IResolvable";

    // non-computed list of primitives
    if (hasListRepresentation && !this.isComputed && this.isPrimitive)
      return `${this._type}[]`;

    // non-computed list of non-primitives
    if (hasListRepresentation && !this.isComputed && !this.isPrimitive)
      return `${this._type}[] | cdktf.IResolvable`;

    // computed lists of primitive types
    if (hasListRepresentation && this.isComputed && this.isPrimitive)
      return `${this._type}[]`;

    // computed lists of simple types
    if (hasListRepresentation && this.isComputed && !this.struct?.isClass)
      return `${this._type}[] | cdktf.IResolvable`;

    // complex computed list
    if (hasListRepresentation && this.isComputed && this.isComplex)
      return `${this._type}`;

    // boolean
    if (this._type === TokenizableTypes.BOOLEAN)
      return `boolean | cdktf.IResolvable`;

    // custom structs
    if (this.isComplex && !this.struct?.isClass && !this.isSingleItem) {
      return `${this._type} | cdktf.IResolvable`;
    }

    // all other types
    return this._type;
  }

  public get storedName(): string {
    let name = this.name;

    return `${name}${this.isOptional ? " | undefined" : ""}`;
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

  public get isStringSet(): boolean {
    return this.isSet && this.name === TokenizableTypes.STRING_LIST;
  }

  public get isNumberSet(): boolean {
    return this.isSet && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanSet(): boolean {
    return this.isSet && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isStringList(): boolean {
    return this.isList && this.name === TokenizableTypes.STRING_LIST;
  }

  public get isNumberList(): boolean {
    return this.isList && this._type === TokenizableTypes.NUMBER;
  }

  public get isBooleanList(): boolean {
    return this.isList && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isBoolean(): boolean {
    return (
      this._type === TokenizableTypes.BOOLEAN && !this.isList && !this.isMap
    );
  }

  public get isStringMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.STRING;
  }

  public get isComputedStringMap(): boolean {
    return this.isStringMap && this.isComputed && !this.isOptional;
  }

  public get isNumberMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.NUMBER;
  }

  public get isComputedNumberMap(): boolean {
    return this.isNumberMap && this.isComputed && !this.isOptional;
  }

  public get isBooleanMap(): boolean {
    return this.isMap && this._type === TokenizableTypes.BOOLEAN;
  }

  public get isComputedBooleanMap(): boolean {
    return this.isBooleanMap && this.isComputed && !this.isOptional;
  }

  public get isAnyMap(): boolean {
    return this.isMap && this._type === "any";
  }

  public get isComputedAnyMap(): boolean {
    return this.isAnyMap && this.isComputed && !this.isOptional;
  }

  public get isTokenizableMap(): boolean {
    return (
      this.isMap &&
      !this.isList &&
      (Object.values(TokenizableTypes).includes(
        this._type as TokenizableTypes
      ) ||
        this._type === "any")
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
