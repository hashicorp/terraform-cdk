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
  private dependencies: string[];

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
    return new ConfigStruct(`${this.className}Config`, this.attributes)
  }

  public get synthesizableAttributes(): AttributeModel[] {
    return this.configStruct.assignableAttributes
  }

  public get importStatements(): string[] {
    const attributeDependencies = this.attributes.map(attr => attr.type.dependencies).filter(Boolean) as string[];
    return [...this.dependencies, ...attributeDependencies].filter(onlyUnique);

    function onlyUnique(value: string, index: number, self: string[]) {
      return self.indexOf(value) === index;
    }
  }

  public get schemaAsJson(): string {
    return JSON.stringify(this.schema, undefined, 2)
  }
}