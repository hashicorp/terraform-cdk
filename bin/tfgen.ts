// generates constructs from terraform providers schema
import { spawn } from 'child_process';
import { CodeMaker, toCamelCase, toPascalCase, toSnakeCase } from 'codemaker';
import { Attribute, AttributeType, Provider, ProviderSchema, Schema } from './schema';

async function main() {
  const schema = await getSchema();
  const gen = new TerraformGenerator(schema);
  await gen.save('.gen');
}

interface Struct {
  readonly name: string;
  readonly attributes: AttributeModel[];
}

class TerraformGenerator {
  private readonly code = new CodeMaker();
  private anonymousStructs = new Array<Struct>();

  constructor(schema: ProviderSchema) {
    this.code.indentation = 2;
    
    for (const [name, provider] of Object.entries(schema.provider_schemas)) {
      this.emitProvider(name, provider);
    }
  }
  
  public async save(outdir: string) {
    await this.code.save(outdir);
  }

  private emitProvider(name: string, provider: Provider) {
    for (const [type, resource] of Object.entries(provider.resource_schemas)) {
      this.emitResource(type, resource);
    }
  }

  private emitResource(type: string, schema: Schema) {
    const resource = this.parseResource(type, schema);

    this.code.openFile(resource.fileName);

    this.code.line(`// generated from terraform resource schema`);
    this.code.line();
    this.code.line(`import { Construct } from '@aws-cdk/core';`);
    this.code.line(`import { TerraformResource } from '../../lib';`);

    this.code.line();
    this.code.line(`// Configuration`)
    this.code.line();
    this.emitStruct({ name: resource.configName, attributes: resource.attributes });

    for (const struct of this.anonymousStructs) {
      this.emitStruct(struct);
    }

    this.anonymousStructs = [];

    this.code.line();
    this.code.line(`// Resource`)
    this.code.line();
    this.code.openBlock(`export class ${resource.className} extends TerraformResource`);

    this.emitHeader('INITIALIZER');
    this.emitInitializer(resource);

    this.emitHeader('ATTRIBUTES');
    this.emitResourceAttributes(resource);

    // synthesis
    this.emitHeader('SYNTHESIS');
    this.emitResourceSynthesis(resource);

    this.code.closeBlock(); // construct

    this.code.closeFile(resource.fileName);
  }

  private emitHeader(title: string) {
    this.code.line();
    this.code.line('// ' + '='.repeat(title.length));
    this.code.line(`// ${title}`);
    this.code.line('// ' + '='.repeat(title.length));
  }

  private emitResourceSynthesis(resource: ResourceModel) {
    this.code.line();
    this.code.openBlock(`public synthesizeAttributes()`);
    this.code.open(`return {`);
    
    for (const att of resource.attributes) {
      if (att.computed) { continue; }
      this.code.line(`${att.terraformName}: this.${att.storageName},`);
    }

    this.code.close(`};`);
    this.code.closeBlock();
  }

  private emitResourceAttributes(resource: ResourceModel) {
    for (const att of resource.attributes) {
      this.code.line();
      this.code.line(`// ${att.terraformName}`);
      
      if (!att.computed) {
        this.emitAttribute(att);
      } else {
        this.emitComputedAttribute(att);
      }
    }
  }

  private emitAttribute(att: AttributeModel) {
    this.code.line(`private ${att.storageName}?: ${att.type};`);

    // if we dont have a getAtt call, we will emit an optional attribute, since "undefined"
    // indicates this value is not specified.
    if (!att.getAttCall) {
      this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return this.${att.storageName};`);
      this.code.closeBlock();

      this.code.openBlock(`public set ${att.name}(value: ${att.type} | undefined)`);
      this.code.line(`this.${att.storageName} = value;`);
      this.code.closeBlock();
      return;
    }

    // otherwise, there is always a value - it will either be the value explicitly set
    // or the late-bound value through interpolation.
    
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName} ?? ${att.getAttCall};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type})`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitComputedAttribute(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    if (att.getAttCall) {
      this.code.line(`return ${att.getAttCall};`);
    } else {
      const message = `computed attribute "$${att.terraformFullName}" has unsupported type "${att.type}"`;
      this.code.line(`throw new Error('${message}');`);
      console.error(`warning: ${message}`);
    }
    this.code.closeBlock();
  }

  private emitInitializer(resource: ResourceModel) {
    this.code.line();

    const requiredAttributes = resource.attributes.filter(a => !a.optional && !a.computed);
    const allOptionals = requiredAttributes.length > 0 ? '' : ` = {}`;

    this.code.openBlock(`public constructor(scope: Construct, id: string, config: ${resource.configName}${allOptionals})`);
    
    // invoke super ctor with the terraform resource type
    this.code.open(`super(scope, id, {`);
    this.code.line(`type: '${resource.terraformType}',`);
    this.code.close(`});`);

    // initialize config properties
    for (const att of resource.attributes) {
      if (att.computed) {
        continue;
      }

      this.code.line(`this.${att.storageName} = config.${att.name};`);
    }

    this.code.closeBlock();
  }

  private emitStruct(struct: Struct) {
    this.code.openBlock(`export interface ${struct.name}`);
    for (const att of struct.attributes) {
      // skip computed attributes
      if (att.computed) {
        continue;
      }

      if (att.metadata.description) {
        this.code.line(`/** ${att.metadata.description} */`);
      }
      
      this.code.line(`readonly ${this.renderAttributeProperty(att)};`);
    }
    this.code.closeBlock();
  }

  //
  // name conversions

  private renderAttributeProperty(attribute: AttributeModel) {
    const optional = attribute.optional ? '?' : '';
    return `${attribute.name}${optional}: ${attribute.type}`;
  }

  private renderAttributeType(scope: string[], attributeType: AttributeType): string {
    if (typeof(attributeType) === 'string') {
      switch (attributeType) {
        case 'bool': return 'boolean';
        case 'string': return 'string';
        case 'number': return 'number';
        default: throw new Error(`invalid primitive type ${attributeType}`);
      }
    }

    if (Array.isArray(attributeType)) {
      if (attributeType.length !== 2) {
        throw new Error(`unexpected array`);
      }

      const [ kind, type ] = attributeType;

      if (kind === 'set' || kind === 'list') {
        return this.renderAttributeType(scope, type as AttributeType) + '[]';
      }

      if (kind === 'map') {
        const valueType: string = this.renderAttributeType(scope, type as AttributeType);
        return `{ [key: string]: ${valueType} }`;
      }

      if (kind === 'object') {
        const objAttributes = type as { [name: string]: AttributeType };
        const attributes: { [name: string]: Attribute } = { };
        for (const [ name, type ] of Object.entries(objAttributes)) {
          attributes[name] = { type }
        }
        const struct = this.addAnonymousStruct(scope, attributes);
        return struct.name;
      }

      throw new Error(`unexpected kind ${kind} with ${JSON.stringify(type)}`);
    }

    throw new Error(`unknown type ${attributeType}`);
  }

  private parseResource(terraformType: string, schema: Schema): ResourceModel {
    const baseName = terraformType.replace(/^aws_/, '');
    const className = toPascalCase(baseName);
    const fileName = `${toSnakeCase(baseName).replace(/_/g, '-')}.ts`;
    const configName = `${className}Config`;

    const attributes = new Array<AttributeModel>();

    const resource: ResourceModel = {
      terraformType,
      className, 
      fileName, 
      configName,
      attributes
    }

    for (const [ terraformAttributeName, att ] of Object.entries(schema.block.attributes)) {
      const type = this.renderAttributeType([ terraformType, terraformAttributeName ], att.type);
      const name = toCamelCase(terraformAttributeName);
      attributes.push({
        getAttCall: determineGetAttCall(type, terraformAttributeName),
        terraformFullName: `${terraformType}.${terraformAttributeName}`,
        metadata: att,
        name,
        storageName: `_${name}`,
        computed: !!att.computed,
        optional: !att.computed && !!att.optional,
        terraformName: terraformAttributeName,
        type
      })
    }

    return resource;

    function determineGetAttCall(type: string, terraformAttributeName: string) {
      if (type === 'string') { return `this.getStringAttribute('${terraformAttributeName}')`; }
      if (type === 'number') { return `this.getNumberAttribute('${terraformAttributeName}')`; }
      if (type === 'string[]') { return `this.getListAttribute('${terraformAttributeName}')`; }
      return undefined;
    }
  }

  private addAnonymousStruct(scope: string[], attrs: { [name: string]: Attribute }) {
    const attributes = new Array<AttributeModel>();
    for (const [ terraformName, att ] of Object.entries(attrs)) {
      const name = toCamelCase(terraformName);
      attributes.push({
        name,
        storageName: `_${name}`,
        computed: false,
        metadata: att,
        optional: true,
        terraformName,
        terraformFullName: [ ...scope, terraformName ].join('_'),
        type: this.renderAttributeType([ ...scope, terraformName ], att.type),
      });
    }
    const s = {
      name: toPascalCase(scope.map(x => toSnakeCase(x)).join('_')),
      attributes
    }
    this.anonymousStructs.push(s);
    return s;
  }
}

interface AttributeModel {
  storageName: string; // private property
  name: string;
  type: string;
  optional: boolean;
  computed: boolean;
  terraformName: string;
  terraformFullName: string;
  metadata: Attribute;
  getAttCall?: string;
}

interface ResourceModel {
  terraformType: string;
  className: string;
  fileName: string;
  configName: string;
  attributes: AttributeModel[];
}

async function getSchema(): Promise<ProviderSchema> {
  return new Promise((ok, ko) => {
    const child = spawn('terraform', ['providers', 'schema', '-json']);
    const out = new Array<Buffer>();
    child.stdout.on('data', chunk => out.push(chunk));
    child.stderr.on('data', chunk => process.stderr.write(chunk));
    child.once('error', err => ko(err));
    child.once('close', code => {
      if (code !== 0) {
        return ko(new Error(`non-zero exit code ${code}`));
      }
      
      return ok(JSON.parse(Buffer.concat(out).toString('utf-8')))
    });
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
})