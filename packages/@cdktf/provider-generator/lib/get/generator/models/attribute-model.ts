import { AttributeTypeModel } from "./attribute-type-model";
import { logger } from "../../../config";

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
  }

  public get typeDefinition() {
    const optional = this.optional ? "?" : "";
    return `${this.name}${optional}: ${this.type.name}`;
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

  public get isTokenizable(): boolean {
    return this.type.isTokenizable;
  }

  public get isProvider(): boolean {
    return this.provider;
  }

  public get getterType(): GetterType {
    let getterType: GetterType = { _type: "plain" };

    if (this.isProvider) {
      return getterType;
    }

    if (
      // Complex Computed List Map
      !this.isAssignable &&
      this.type.isComputedComplex &&
      this.type.isList &&
      this.type.isMap
    ) {
      getterType = {
        _type: "stored_class",
      };
    } else if (
      // Complex List/Set
      this.type.isComplex &&
      (this.type.isList || this.type.isSet)
    ) {
      getterType = {
        _type: "stored_class",
      };
    } else if (
      // Complex Map
      this.type.isComplex &&
      this.type.isMap
    ) {
      getterType = {
        _type: "stored_class",
      };
    } else if (
      // Computed Map
      this.type.isComputed &&
      !this.isAssignable &&
      this.type.isMap
    ) {
      getterType = {
        _type: "stored_class",
      };
    }

    if (this.type.isSingleItem) {
      getterType = { _type: "stored_class" };
    }

    if (this.type.isNested) {
      getterType = { _type: "stored_class" };
    }

    return getterType;
  }

  public get mapType() {
    const type = this.type;
    if (type.isStringMap) {
      return `string`;
    }
    if (type.isNumberMap) {
      return `number`;
    }
    if (type.isBooleanMap) {
      return `boolean`;
    }
    if (type.isAnyMap) {
      return `any`;
    }

    logger.debug(
      `The attribute isn't implemented yet: ${JSON.stringify(this)}`
    );

    return `any`;
  }

  public get mapReturnType(): string {
    const mapDataType = this.mapType;
    if (!this.isTokenizable) {
      return `${mapDataType} | cdktf.IResolvable`;
    }

    return mapDataType;
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
        type: this.type.name,
      };
    }

    return {
      _type: "set",
      type: `${this.type.name}${this.isProvider ? " | undefined" : ""}`,
    };
  }

  public get name(): string {
    return AttributeModel.escapeName(this._name);
  }

  public static escapeName(name: string): string {
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
    return name;
  }

  public get description(): string | undefined {
    return this._description
      ?.replace(/(\*\/)/gi, `*\\/`)
      .replace(/'''/gi, "```");
  }

  public getReferencedTypes(isConfigStruct: boolean): string[] | undefined {
    const attTypeStruct = this.type.struct;
    if (!attTypeStruct) {
      return undefined;
    }

    const types: string[] = [];

    if (this.isAssignable) {
      types.push(this.type.typeName);
      types.push(attTypeStruct.mapperName);
    }

    if (
      !attTypeStruct.isSingleItem &&
      (attTypeStruct.nestingMode === "list" ||
        attTypeStruct.nestingMode === "set")
    ) {
      types.push(attTypeStruct.listName);
    } else if (attTypeStruct.nestingMode === "map") {
      types.push(attTypeStruct.mapName);
    } else if (!isConfigStruct) {
      types.push(attTypeStruct.outputReferenceName);
    }

    return types;
  }
}
