import { Schema } from './provider-schema';

export class Scope {
  constructor(public readonly name: string, public isComputed = false) {}
}

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
  public name: string;
  public type: AttributeTypeModel;
  public optional: boolean;
  public computed: boolean;
  public terraformName: string;
  public terraformFullName: string;
  public description?: string;
  public getAttCall?: string;

  constructor(options: AttributeModelOptions) {
    this.storageName = options.storageName;
    this.name = options.name;
    this.type = options.type;
    this.optional = options.optional;
    this.computed = options.computed;
    this.terraformName = options.terraformName;
    this.terraformFullName = options.terraformFullName;
    this.description = options.description;
    this.getAttCall = options.getAttCall;
  }

  public get typeDefinition() {
    const optional = this.optional ? '?' : '';
    return `${this.name}${optional}: ${this.type.type}`;
  }

  public getterFunctionHeader() {
    return `public get ${this.name}()`
  }

  public getterFunctionBody() {
    if (this.getAttCall) return `return ${this.type.determineGetAttCall(this.name)};`;
    if (!this.getAttCall) return `return this.${this.storageName};`;
    return 'throw new Error("not implemented");'
  }

  public get isAssignable() {
    return !this.computed
  }

  public get isOptional() {
    return this.optional
  }
}

interface ResourceModelOptions {
  terraformType: string;
  className: string;
  baseName: string;
  fileName: string;
  filePath: string;
  attributes: AttributeModel[];
  structs: Struct[];
  provider: string;
  schema: Schema;
}

export class ResourceModel {
  public terraformType: string;
  public className: string;
  public baseName: string;
  public provider: string;
  public fileName: string;
  public filePath: string;
  public attributes: AttributeModel[];
  public schema: Schema;
  private _structs: Struct[];
  private dependencies: string[]

  constructor(options: ResourceModelOptions) {
    this.terraformType = options.terraformType
    this.className = options.className
    this.baseName = options.baseName
    this.attributes = options.attributes
    this.schema = options.schema
    this.provider = options.provider
    this.fileName = options.fileName;
    this.filePath = options.filePath;
    this._structs = options.structs

    this.dependencies = [
      `import { Construct } from 'constructs';`,
      `import { TerraformResource } from 'cdktf';`
    ]
  }

  public get structs(): Struct[] {
    return [this.configStruct, ...this._structs]
  }

  public get configStruct() {
    return new Struct(`${this.className}Config`, this.attributes)
  }

  public get assignableAttributes(): AttributeModel[] {
    return this.attributes.filter(attribute => !attribute.computed)
  }

  public get importStatements(): string[] {
    return this.dependencies
  }

  public get schemaAsJson(): string {
    return JSON.stringify(this.schema, undefined, 2)
  }
}

export class Struct {
  constructor(public readonly name: string, public readonly attributes: AttributeModel[], public readonly isComputed = false) {}

  public attributeName(attributeName: string): string {
    return `${this.allAttributesComputed ? '_' : ''}${attributeName}`;
  }

  public get assignableAttributes(): AttributeModel[] {
    return this.attributes.filter(attribute => !attribute.computed)
  }

  private get allAttributesOptional(): boolean {
    return this.requiredAttributes.length > 0
  }

  private get allAttributesComputed(): boolean {
    const computedAttributes = this.attributes.filter(a => a.computed)
    return computedAttributes.length === this.attributes.length
  }

  private get requiredAttributes(): AttributeModel[] {
    return this.attributes.filter(a => !a.optional && !a.computed);
  }

  public get attributeType() {
    return `${this.name}${this.allAttributesOptional ? ' = {}' : ''}`
  }
}

export class AttributeTypeModelOptions {
  public struct?: Struct;
  public isList?: boolean;
  public isComputed?: boolean;
  public isMap?: boolean;
}

export enum TokenizableTypes {
  STRING = 'string',
  NUMBER = 'number'
}

export interface ComputedComplexListOptions {
  name: string;
  type: string;
}

export class AttributeTypeModel {
  public isList: boolean;
  public isComputed: boolean;
  public isMap: boolean;
  public struct?: Struct;

  constructor(private _type: string, options: AttributeTypeModelOptions = {}) {
    this.isList = !!options.isList;
    this.isMap = !!options.isMap;
    this.isComputed = !!options.isComputed;
    this.struct = options.struct;
  }

  public get type(): string {
    if (this.isMap) return `{ [key: string]: ${this._type} }`;
    if (this.isList && !this.isComputed) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isPrimitive) return `${this._type}[]`;
    if (this.isList && this.isComputed && this.isComplex) return `${this._type}`;
    return this._type
  }

  public determineGetAttCall(terraformAttributeName: string): string {
    if (this.type === TokenizableTypes.STRING) {
      return this.isList ? this.getListAttribute(terraformAttributeName) : this.getStringAttribute(terraformAttributeName)
    }
    if (this.type === TokenizableTypes.NUMBER) { return this.getNumberAttribute(terraformAttributeName) }
    return 'any'
  }

  public computedComplexList(argument: ComputedComplexListOptions): string {
    return `new ${this.type}(${argument.name})`
  }

  public get isComplex(): boolean {
    return !!this.struct
  }

  public get isPrimitive(): boolean {
    return !this.isComplex
  }

  public get isComputedComplexList(): boolean {
    return this.isList && this.isComputed && this.isComplex
  }

  public get isInterpolatable(): boolean {
    return Object.values(TokenizableTypes).includes(this.type as TokenizableTypes)
  }

  private getListAttribute(name: string): string {
    return `this.getListAttribute('${name}')`
  }

  private getStringAttribute(name: string): string {
    return `this.getStringAttribute('${name}')`
  }

  private getNumberAttribute(name: string): string {
    return `this.getNumberAttribute('${name}')`
  }
}