import { AttributeTypeModel } from './attribute-type-model';

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
}

export class AttributeModel {
  public storageName: string; // private property
  private _name: string;
  public type: AttributeTypeModel;
  public optional: boolean;
  public computed: boolean;
  public terraformName: string;
  public terraformFullName: string;
  public description?: string;

  constructor(options: AttributeModelOptions) {
    this.storageName = options.storageName;
    this._name = options.name;
    this.type = options.type;
    this.optional = options.optional;
    this.computed = options.computed;
    this.terraformName = options.terraformName;
    this.terraformFullName = options.terraformFullName;
    this.description = options.description;
  }

  public get typeDefinition() {
    const optional = this.optional ? '?' : '';
    return `${this.name}${optional}: ${this.type.name}`;
  }

  public get isAssignable() {
    return !this.computed;
  }

  public get isOptional(): boolean {
    return this.optional
  }

  public get isRequired(): boolean {
    return !this.isOptional
  }

  public get isTokenizable(): boolean {
    return this.type.isTokenizable
  }

  public get name(): string {
    // `self` doesn't work in as property name in Python
    if (this._name === 'self') return `${this._name}Attribute`;
    // jsii can't handle `getFoo` properties, since it's incompatible with Java
    if (this._name.match(/^get[A-Z]+/)) return this._name.replace('get', 'fetch');
    return this._name
  }
}
