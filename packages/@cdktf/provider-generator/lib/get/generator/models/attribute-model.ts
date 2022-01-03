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

    if (
      // Complex Computed List Map
      this.computed &&
      !this.isOptional &&
      this.type.isComputedComplex &&
      this.type.isList &&
      this.type.isMap
    ) {
      getterType = {
        _type: "args",
        args: "index: string, key: string",
        returnType: this.mapType,
        returnStatement: `new ${this.type.name}(this, \`${this.terraformName}.\${index}\`).lookup(key)`,
      };
    } else if (
      // Complex Computed List
      this.computed &&
      !this.isOptional &&
      this.type.isComputedComplex &&
      this.type.isList
    ) {
      getterType = {
        _type: "args",
        args: "index: string",
        returnStatement: `new ${this.type.name}(this, '${this.terraformName}', index)`,
      };
    } else if (
      // Complex Computed Map
      this.computed &&
      !this.isOptional &&
      this.type.isComputedComplex &&
      this.type.isMap
    ) {
      getterType = {
        _type: "args",
        args: "key: string",
        returnType: this.mapType,
        returnStatement: `new ${this.type.name}(this, '${this.terraformName}').lookup(key)`,
      };
    }

    if (this.type.isSingleItem && this.type.isComplex && !this.isProvider) {
      getterType = { _type: "stored_class" };
    }

    return getterType;
  }

  public get mapType(): string {
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
    if (process.env.DEBUG) {
      console.error(
        `The attribute ${JSON.stringify(this)} isn't implemented yet`
      );
    }
    return `any`;
  }

  public get isStored(): boolean {
    return (
      (this.isAssignable && !this.isConfigIgnored) ||
      this.getterType._type === "stored_class"
    );
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
    // `self` and `build` doesn't work in as property name in Python
    if (this._name === "self" || this._name === "build")
      return `${this._name}Attribute`;
    // jsii can't handle `getFoo` properties, since it's incompatible with Java
    if (this._name.match(/^get[A-Z]+/))
      return this._name.replace("get", "fetch");
    // `equals` is a prohibited name in jsii
    if (this._name === "equals") return "equalTo";
    // `node` is already used by the Constructs base class
    if (this._name === "node") return "nodeAttribute";
    // `System` shadows built-in types in CSharp (see #1420)
    if (this._name === "system") return "systemAttribute";
    // `tfResourceType` is already used by resources to distinguish between different resource types
    if (this._name === "tfResourceType") return `${this._name}Attribute`;
    return this._name;
  }

  public get description(): string | undefined {
    return this._description
      ?.replace(/(\*\/)/gi, `*\\/`)
      .replace(/'''/gi, "```");
  }

  public get isConfigIgnored(): boolean {
    if (this.isAssignable && !this.computed) {
      return false;
    }
    const ignoreList = ["arn", "id"];
    return ignoreList.includes(this.name);
  }
}
