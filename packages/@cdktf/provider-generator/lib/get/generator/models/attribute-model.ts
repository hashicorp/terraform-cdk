// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { AttributeTypeModel } from "./attribute-type-model";

export type GetterType =
  | { _type: "plain" }
  | {
      _type: "args";
      args: string;
      returnType?: string;
      returnStatement: string;
    }
  | {
      _type: "stored_class";
    };

export type SetterType =
  | { _type: "none" }
  | { _type: "set"; type: string }
  | { _type: "put"; type: string }
  | { _type: "stored_class"; type: string };

export interface AttributeModelOptions {
  storageName: string; // private property
  name: string;
  type: AttributeTypeModel;
  optional: boolean;
  computed: boolean;
  terraformName: string;
  terraformFullName: string;
  description?: string;
  getAttCall?: string;
  provider: boolean;
  required: boolean;
  forcePlainGetterType?: boolean; // used for skipping attribute type attributes that use the SkippedAttributeTypeModel which returns an interpolation and has no stored type
}

export function escapeAttributeName(name: string) {
  // `self` and `build` doesn't work in as property name in Python
  if (name === "self" || name === "build") return `${name}Attribute`;
  // jsii can't handle `getFoo` properties, since it's incompatible with Java
  if (name.match(/^get[A-Za-z]+/)) return name.replace("get", "fetch");
  // `equals` is a prohibited name in jsii
  if (name === "equals") return "equalTo";
  // `node` is already used by the Constructs base class
  if (name === "node") return "nodeAttribute";
  // `System` shadows built-in types in CSharp (see #1420)
  if (name === "system") return "systemAttribute";
  // `tfResourceType` is already used by resources to distinguish between different resource types
  if (name === "tfResourceType") return `${name}Attribute`;
  // `importFrom` has potential for common name collision with providers
  if (name === "importFrom") return `${name}Attribute`;
  // `move` could have common name collision with providers
  if (name === "moveTo") return `${name}Attribute`;
  // `software` attribute can be confused with the JSII Java runtime package (see #3115)
  if (name === "software") return `${name}Attribute`;
  return name;
}

export class AttributeModel {
  public storageName: string; // private property
  private _name: string;
  public type: AttributeTypeModel;
  public optional: boolean;
  public computed: boolean;
  public terraformName: string;
  public terraformFullName: string;
  private _description?: string;
  public provider: boolean;
  public required: boolean;
  public forcePlainGetterType?: boolean;

  constructor(options: AttributeModelOptions) {
    this.storageName = options.storageName;
    this._name = options.name;
    this.type = options.type;
    this.optional = options.optional;
    this.computed = options.computed;
    this.terraformName = options.terraformName;
    this.terraformFullName = options.terraformFullName;
    this._description = options.description;
    this.provider = options.provider;
    this.required = options.required;
    this.forcePlainGetterType = options.forcePlainGetterType;
  }

  public get typeDefinition() {
    const optional = this.optional ? "?" : "";
    return `${this.name}${optional}: ${this.type.inputTypeDefinition}`;
  }

  public get isAssignable() {
    return this.required || this.optional;
  }

  public get isOptional(): boolean {
    return this.optional;
  }

  public get isRequired(): boolean {
    return this.required;
  }

  public get isProvider(): boolean {
    return this.provider;
  }

  public get getterType(): GetterType {
    let getterType: GetterType = { _type: "plain" };

    if (this.forcePlainGetterType) {
      return getterType;
    }

    if (this.isProvider) {
      return getterType;
    }

    if (this.type.hasReferenceClass) {
      getterType = {
        _type: "stored_class",
      };
    } else if (
      this.computed &&
      !this.isAssignable &&
      (!this.type.isTokenizable || this.type.typeModelType === "map")
    ) {
      getterType = {
        _type: "stored_class",
      };
    }

    return getterType;
  }

  public get isStored(): boolean {
    return this.isAssignable;
  }

  public get setterType(): SetterType {
    if (!this.isStored) {
      return { _type: "none" };
    }

    if (this.getterType._type === "stored_class") {
      return {
        _type: "stored_class",
        type: this.type.inputTypeDefinition,
      };
    }

    return {
      _type: "set",
      type: `${this.type.inputTypeDefinition}${
        this.isProvider ? " | undefined" : ""
      }`,
    };
  }

  public get name(): string {
    return AttributeModel.escapeName(this._name);
  }

  public static escapeName(name: string): string {
    return escapeAttributeName(name);
  }

  public get description(): string | undefined {
    return this._description?.replace(/'''/gi, "```");
  }

  public getReferencedTypes(isConfigStruct: boolean): string[] | undefined {
    const attTypeStruct = this.type.struct;
    if (!attTypeStruct) {
      return undefined;
    }

    const types: string[] = [];

    if (this.isAssignable) {
      types.push(attTypeStruct.name);
      types.push(attTypeStruct.mapperName);
      types.push(attTypeStruct.hclMapperName);
    }

    if (
      !attTypeStruct.isSingleItem &&
      (attTypeStruct.nestingMode === "list" ||
        attTypeStruct.nestingMode === "set")
    ) {
      types.push(attTypeStruct.listName);
    } else if (attTypeStruct.nestingMode === "map") {
      types.push(attTypeStruct.mapName);
    } else if (attTypeStruct.nestingMode === "maplist") {
      types.push(attTypeStruct.mapListName);
    } else if (attTypeStruct.nestingMode === "mapset") {
      types.push(attTypeStruct.mapListName);
    } else if (attTypeStruct.nestingMode === "listmap") {
      types.push(attTypeStruct.listMapName);
    } else if (attTypeStruct.nestingMode === "setmap") {
      types.push(attTypeStruct.listMapName);
    } else if (
      attTypeStruct.nestingMode === "listlist" ||
      attTypeStruct.nestingMode === "listset" ||
      attTypeStruct.nestingMode === "setlist" ||
      attTypeStruct.nestingMode == "setset"
    ) {
      types.push(attTypeStruct.listListName);
    } else if (!isConfigStruct) {
      types.push(attTypeStruct.outputReferenceName);
    }
    // other types of nested collections aren't supported

    return types;
  }
}
