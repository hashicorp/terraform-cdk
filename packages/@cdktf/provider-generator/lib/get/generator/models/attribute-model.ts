import { AttributeTypeModel } from "./attribute-type-model";

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
    // `tfResourceType` is already used by resources to distinguish between different resource types
    if (this._name === "tfResourceType") return `${this._name}Attribute`;
    // FIXME: this is only temporary and will not work when this attribute is actually used.
    if (this._name === "provider") return "providerAttribute";
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
