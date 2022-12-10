// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Struct } from "./struct";
import { uppercaseFirst, downcaseFirst } from "../../../util";

export interface NewAttributeTypeModel {
  readonly struct?: Struct; // complex object type contained within the type
  readonly isComplex: boolean; // basically the same as having a struct
  getStoredClassInitializer(name: string): string; // initializer for keeping class needed to keep track of reference access
  readonly storedClassType: string; // used mainly by collection types to generate their stored class initializer
  readonly inputTypeDefinition: string; // this is the type used for inputting values
  getAttributeAccessFunction(name: string): string; // this is for getting reference for simple types
  readonly toTerraformFunction: string; // this is for converting input values to Terraform syntax
}

export class SimpleAttributeTypeModel implements NewAttributeTypeModel {
  constructor(public readonly type: string) {}

  get struct() {
    return undefined;
  }

  get isComplex() {
    return false;
  }

  getStoredClassInitializer(_name: string) {
    // not used
    return "";
  }

  get storedClassType() {
    return this.type;
  }

  get inputTypeDefinition() {
    if (this.type === "boolean") {
      return "boolean | cdktf.IResolvable";
    } else {
      return this.type;
    }
  }

  getAttributeAccessFunction(name: string) {
    return `this.get${uppercaseFirst(this.type)}Attribute('${name}')`;
  }

  get toTerraformFunction() {
    return `cdktf.${this.type}ToTerraform`;
  }
}

export class StructAttributeTypeModel implements NewAttributeTypeModel {
  constructor(public readonly struct: Struct) {}

  get isComplex() {
    return true;
  }

  getStoredClassInitializer(name: string) {
    return `new ${this.struct.outputReferenceName}(this, "${name}")`;
  }

  get storedClassType() {
    return this.struct.name;
  }

  get inputTypeDefinition() {
    if (this.struct.isClass) {
      return this.struct.name;
    } else {
      return `${this.struct.name} | cdktf.IResolvable`;
    }
  }

  getAttributeAccessFunction(name: string) {
    // This shouln't actually be called
    return `this.interpolationForAttribute('${name}')`;
  }

  get toTerraformFunction() {
    return `${downcaseFirst(this.struct.name)}ToTerraform`;
  }
}

export interface CollectionAttributeTypeModel extends NewAttributeTypeModel {
  elementType: NewAttributeTypeModel;
}

export class ListAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(
    public readonly elementType: NewAttributeTypeModel,
    public readonly isSingleItem: boolean,
    private readonly isBlock: boolean
  ) {}

  get struct() {
    return this.elementType.struct;
  }

  get isComplex() {
    return this.elementType.isComplex;
  }

  getStoredClassInitializer(name: string) {
    if (this.isSingleItem) {
      return `new ${this.elementType.storedClassType}OutputReference(this, "${name}")`;
    } else {
      if (this.isComplex) {
        return `new ${this.storedClassType}(this, "${name}", false)`;
      } else {
        return `new cdktf.${uppercaseFirst(
          this.storedClassType
        )}(this, "${name}", false)`;
      }
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}List`;
  }

  get inputTypeDefinition() {
    return "TODO"; //TODO implement
  }

  getAttributeAccessFunction(name: string) {
    switch (this.elementType.storedClassType) {
      case "string":
        return `this.getListAttribute('${name}')`;
      case "number":
        return `this.getNumberListAttribute('${name}')`;
    }

    return `this.interpolationForAttribute('${name}')`;
  }

  get toTerraformFunction() {
    if (this.isSingleItem) {
      return this.elementType.toTerraformFunction;
    } else {
      return `cdktf.listMapper(${this.elementType.toTerraformFunction}, ${this.isBlock})`;
    }
  }
}

export class SetAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(
    public readonly elementType: NewAttributeTypeModel,
    public readonly isSingleItem: boolean,
    private readonly isBlock: boolean
  ) {}

  get struct() {
    return this.elementType.struct;
  }

  get isComplex() {
    return this.elementType.isComplex;
  }

  getStoredClassInitializer(name: string) {
    if (this.isSingleItem) {
      return `new ${this.elementType.storedClassType}OutputReference(this, "${name}")`;
    } else {
      if (this.isComplex) {
        return `new ${this.storedClassType}(this, "${name}", true)`;
      } else {
        return `new cdktf.${uppercaseFirst(
          this.storedClassType
        )}(this, "${name}", true)`;
      }
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}List`;
  }

  get inputTypeDefinition() {
    return "TODO"; //TODO implement
  }

  getAttributeAccessFunction(name: string) {
    switch (this.elementType.storedClassType) {
      case "string":
        return `cdktf.Fn.tolist(this.getListAttribute('${name}'))`;
      case "number":
        return `cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('${name}')))`;
    }

    // Token.asAny is required because tolist returns an Array encoded token which the listMapper
    // would try to map over when this is passed to another resource. With Token.asAny() it is left
    // as is by the listMapper and is later properly resolved to a reference
    // (this only works in TypeScript currently, same as for referencing lists
    // [see "interpolationForAttribute(...)" further below])
    return `cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('${name}')))`;
  }

  get toTerraformFunction() {
    if (this.isSingleItem) {
      return this.elementType.toTerraformFunction;
    } else {
      return `cdktf.listMapper(${this.elementType.toTerraformFunction}, ${this.isBlock})`;
    }
  }
}

export class MapAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(public readonly elementType: NewAttributeTypeModel) {}

  get struct() {
    return this.elementType.struct;
  }

  get isComplex() {
    return this.elementType.isComplex;
  }

  getStoredClassInitializer(name: string) {
    if (this.isComplex) {
      return `new ${this.storedClassType}(this, "${name}")`;
    } else {
      return `new cdktf.${uppercaseFirst(
        this.storedClassType
      )}(this, "${name}")`;
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}Map`;
  }

  get inputTypeDefinition() {
    return "TODO"; //TODO implement
  }

  getAttributeAccessFunction(name: string) {
    return `this.get${uppercaseFirst(
      this.storedClassType
    )}Attribute('${name}')`;
  }

  get toTerraformFunction() {
    return `cdktf.hashMapper(${this.elementType.toTerraformFunction})`;
  }
}

export interface AttributeTypeModelOptions {
  isBlock?: boolean;
  struct?: Struct;
  isList?: boolean;
  isSet?: boolean;
  isComputed?: boolean;
  isOptional?: boolean;
  isRequired?: boolean;
  isSingleItem?: boolean;
  isMap?: boolean;
  level?: number;
  isNested?: boolean;
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
  public isBlock?: boolean;
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
  public isNested?: boolean;

  constructor(private _type: string, options: AttributeTypeModelOptions) {
    this.typeName = _type;
    this.isBlock = !!options.isBlock;
    this.isList = !!options.isList;
    this.isSet = !!options.isSet;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.isOptional = !!options.isOptional;
    this.isRequired = !!options.isRequired;
    this.isSingleItem = !!options.isSingleItem;
    this.level = options.level;
    this.struct = options.struct;
    this.isNested = !!options.isNested;
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
      return `${this._type}[]`;

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
    return !!this.struct;
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
    return this.isComputed && this.isComplex;
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
