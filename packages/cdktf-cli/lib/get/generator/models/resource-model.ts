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
    this.terraformSchemaType = options.terraformSchemaType
    this.dependencies = [
      `import { Construct } from 'constructs';`,
      `import { ${this.parentClassName} } from 'cdktf';`
    ]

    if (!this.isProvider) {
      this.dependencies.push(`import { TerraformMetaArguments } from 'cdktf';`)
    }
    if (this._structs.find(s => !s.isClass)) {
      this.dependencies.push(`import { canInspect } from 'cdktf';`);
    }
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
    const attributeDependencies = this.attributes.filter(a => !a.isConfigIgnored).map(attr => attr.type.dependencies).filter(Boolean) as string[][];
    const attributeDepsCollapsed = attributeDependencies.reduce((prev, cur) => prev.concat(cur), []);
    const structDependencies = this.structs.filter(s => !s.isClass).map(struct => struct.attributes.filter(a => !a.isConfigIgnored).map(attr => attr.type.dependencies).filter(Boolean)) as string[][][];
    const structDepsCollapsed = structDependencies.reduce((prev, cur) => prev.concat(cur), []).reduce((prev, cur) => prev.concat(cur), []);
    return [...this.dependencies, ...attributeDepsCollapsed, ...structDepsCollapsed].filter(onlyUnique);

    function onlyUnique(value: string, index: number, self: string[]) {
      return self.indexOf(value) === index;
    }
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