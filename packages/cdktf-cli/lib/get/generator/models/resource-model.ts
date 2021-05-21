import { toSnakeCase } from 'codemaker';
import { Schema } from '../provider-schema';
import { AttributeModel } from './attribute-model';
import { Struct, ConfigStruct } from './struct';

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
  terraformSchemaType: string;
  configStructName: string;
}

export class ResourceModel {
  public terraformType: string;
  public className: string;
  public baseName: string;
  public provider: string;
  public providerVersionConstraint?: string;
  public terraformProviderSource?: string;
  public fileName: string;
  public filePath: string;
  public attributes: AttributeModel[];
  public schema: Schema;
  private _structs: Struct[];
  private dependencies: string[];
  private terraformSchemaType: string;
  private configStructName: string;

  constructor(options: ResourceModelOptions) {
    this.terraformType = options.terraformType
    this.className = options.className
    this.baseName = options.baseName
    this.attributes = options.attributes
    this.schema = options.schema
    this.provider = options.provider
    this.fileName = options.fileName;
    this.filePath = options.filePath;
    this._structs = options.structs;
    this.terraformSchemaType = options.terraformSchemaType;
    this.configStructName = options.configStructName;
    this.dependencies = [
      `import { Construct } from 'constructs';`,
      `import * as cdktf from 'cdktf';`
    ]
  }

  public get structs(): Struct[] {
    return [this.configStruct, ...this._structs]
  }

  public get configStruct() {
    return new ConfigStruct(this.configStructName, this.attributes)
  }

  public get synthesizableAttributes(): AttributeModel[] {
    return this.configStruct.assignableAttributes
  }

  public get importStatements(): string[] {
    return this.dependencies;
  }

  public get schemaAsJson(): string {
    return this.escapeSchema(JSON.stringify(this.schema, undefined, 2))
  }

  public get linkToDocs(): string {
    return `https://www.terraform.io/docs/providers/${this.provider}/r/${toSnakeCase(this.className)}.html`
  }

  public get isProvider(): boolean {
    return this.terraformSchemaType === 'provider'
  }

  public get isDataSource(): boolean {
    return this.terraformSchemaType === 'data_source'
  }

  public get parentClassName(): string {
    return this.isProvider ? 'TerraformProvider' : this.isDataSource ? 'TerraformDataSource' : 'TerraformResource'
  }

  public get terraformResourceType(): string {
    return this.isProvider ? this.provider : this.isDataSource ? this.terraformType.replace(/^data_/, '') : this.terraformType
  }

  private escapeSchema(schema: string): string {
    return schema.replace(/(\*\/)/gi, `*\\/`)
  }
}