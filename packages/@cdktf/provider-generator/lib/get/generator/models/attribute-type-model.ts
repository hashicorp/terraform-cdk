// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Struct } from "./struct";
import { uppercaseFirst, downcaseFirst } from "../../../util";

export interface AttributeTypeModel {
  readonly struct?: Struct; // complex object type contained within the type
  readonly isComplex: boolean; // basically the same as having a struct
  getStoredClassInitializer(name: string): string; // initializer for keeping class needed to keep track of reference access
  readonly storedClassType: string; // used mainly by collection types to generate their stored class initializer
  readonly inputTypeDefinition: string; // this is the type used for inputting values
  getAttributeAccessFunction(name: string): string; // this is for getting reference for simple types
  readonly toTerraformFunction: string; // this is for converting input values to Terraform syntax
  readonly toHclTerraformFunction: string; // this is for converting input values to Terraform syntax in HCL
  readonly typeModelType: string; // so we don't need to use instanceof
  readonly hasReferenceClass: boolean; // used to determine if a stored_class getter should be used
  readonly isTokenizable: boolean; // can the type be represented by a token type
}

export class SkippedAttributeTypeModel implements AttributeTypeModel {
  constructor() {}

  get typeModelType() {
    return "simple";
  }

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
    return "any";
  }

  get inputTypeDefinition() {
    return "any";
  }

  getAttributeAccessFunction(name: string) {
    return `this.interpolationForAttribute('${name}')`;
  }

  get toTerraformFunction() {
    return `cdktf.anyToTerraform`;
  }

  get toHclTerraformFunction() {
    return `cdktf.anyToHclTerraform`;
  }

  get hasReferenceClass() {
    return false;
  }

  get isTokenizable() {
    return false;
  }
}

export class SimpleAttributeTypeModel implements AttributeTypeModel {
  constructor(public readonly type: string) {}

  get typeModelType() {
    return "simple";
  }

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

  get toHclTerraformFunction() {
    return `cdktf.${this.type}ToHclTerraform`;
  }

  get hasReferenceClass() {
    return false;
  }

  get isTokenizable() {
    return true;
  }
}

export class StructAttributeTypeModel implements AttributeTypeModel {
  constructor(public readonly struct: Struct) {}

  get typeModelType() {
    return "struct";
  }

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
    return this.struct.name;
  }

  getAttributeAccessFunction(name: string) {
    // This shouln't actually be called
    return `this.interpolationForAttribute('${name}')`;
  }

  get toTerraformFunction() {
    return `${downcaseFirst(this.struct.name)}ToTerraform`;
  }

  get toHclTerraformFunction() {
    return `${downcaseFirst(this.struct.name)}ToHclTerraform`;
  }

  get hasReferenceClass() {
    return true;
  }

  get isTokenizable() {
    return false;
  }
}

export interface CollectionAttributeTypeModel extends AttributeTypeModel {
  elementType: AttributeTypeModel;
}

export class ListAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(
    public readonly elementType: AttributeTypeModel,
    public readonly isSingleItem: boolean,
    private readonly isBlock: boolean,
  ) {
    if (this.struct) {
      this.struct.isSingleItem = this.isSingleItem || false;
    }
  }

  get typeModelType() {
    return "list";
  }

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
          this.storedClassType,
        )}(this, "${name}", false)`;
      }
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}List`;
  }

  get inputTypeDefinition() {
    if (this.isSingleItem) {
      return this.elementType.inputTypeDefinition;
    } else if (this.elementType.storedClassType === "boolean") {
      return "Array<boolean | cdktf.IResolvable> | cdktf.IResolvable";
    } else if (this.isComplex) {
      return `${this.elementType.storedClassType}[] | cdktf.IResolvable`;
    } else if (this.elementType.typeModelType !== "simple") {
      return `${this.elementType.inputTypeDefinition}[] | cdktf.IResolvable`;
    } else {
      return `${this.elementType.inputTypeDefinition}[]`;
    }
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
    }
    return `cdktf.listMapper(${this.elementType.toTerraformFunction}, ${this.isBlock})`;
  }

  get toHclTerraformFunction() {
    if (this.isSingleItem) {
      return this.elementType.toHclTerraformFunction;
    }

    return `cdktf.listMapperHcl(${this.elementType.toHclTerraformFunction}, ${this.isBlock})`;
  }

  get hasReferenceClass() {
    return this.isSingleItem || this.isComplex;
  }

  get isTokenizable() {
    switch (this.elementType.storedClassType) {
      case "string":
        return true;
      case "number":
        return true;
      default:
        return false;
    }
  }
}

export class SetAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(
    public readonly elementType: AttributeTypeModel,
    public readonly isSingleItem: boolean,
    private readonly isBlock: boolean,
  ) {
    if (this.struct) {
      this.struct.isSingleItem = this.isSingleItem || false;
    }
  }

  get typeModelType() {
    return "set";
  }

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
          this.storedClassType,
        )}(this, "${name}", true)`;
      }
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}List`;
  }

  get inputTypeDefinition() {
    if (this.isSingleItem) {
      return this.elementType.inputTypeDefinition;
    } else if (this.elementType.storedClassType === "boolean") {
      return "Array<boolean | cdktf.IResolvable> | cdktf.IResolvable";
    } else if (this.isComplex) {
      return `${this.elementType.storedClassType}[] | cdktf.IResolvable`;
    } else if (this.elementType.typeModelType !== "simple") {
      return `${this.elementType.inputTypeDefinition}[] | cdktf.IResolvable`;
    } else {
      return `${this.elementType.inputTypeDefinition}[]`;
    }
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

  get toHclTerraformFunction() {
    if (this.isSingleItem) {
      return this.elementType.toHclTerraformFunction;
    }
    return `cdktf.listMapperHcl(${this.elementType.toHclTerraformFunction}, ${this.isBlock})`;
  }

  get hasReferenceClass() {
    return this.isSingleItem || this.isComplex;
  }

  get isTokenizable() {
    switch (this.elementType.storedClassType) {
      case "string":
        return true;
      case "number":
        return true;
      default:
        return false;
    }
  }
}

export class MapAttributeTypeModel implements CollectionAttributeTypeModel {
  constructor(public readonly elementType: AttributeTypeModel) {}

  get typeModelType() {
    return "map";
  }

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
        this.storedClassType,
      )}(this, "${name}")`;
    }
  }

  get storedClassType() {
    return `${this.elementType.storedClassType}Map`;
  }

  get inputTypeDefinition() {
    // map of booleans has token support, but booleans don't
    if (this.elementType.storedClassType === "boolean") {
      return `{ [key: string]: (${this.elementType.storedClassType} | cdktf.IResolvable) }`;
    } else if (this.isComplex) {
      return `{ [key: string]: ${this.elementType.storedClassType} } | cdktf.IResolvable`;
    } else if (this.elementType.typeModelType !== "simple") {
      return `{ [key: string]: ${this.elementType.inputTypeDefinition} } | cdktf.IResolvable`;
    } else {
      return `{ [key: string]: ${this.elementType.storedClassType} }`;
    }
  }

  getAttributeAccessFunction(name: string) {
    if (!this.isComplex && this.elementType.typeModelType !== "simple") {
      return `this.interpolationForAttribute('${name}')`;
    }

    return `this.get${uppercaseFirst(
      this.storedClassType,
    )}Attribute('${name}')`;
  }

  get toTerraformFunction() {
    return `cdktf.hashMapper(${this.elementType.toTerraformFunction})`;
  }

  get toHclTerraformFunction() {
    return `cdktf.hashMapperHcl(${this.elementType.toHclTerraformFunction})`;
  }

  get hasReferenceClass() {
    return this.isComplex;
  }

  get isTokenizable() {
    switch (this.elementType.storedClassType) {
      case "string":
        return true;
      case "number":
        return true;
      case "boolean":
        return true;
      case "any":
        return true;
      default:
        return false;
    }
  }
}
