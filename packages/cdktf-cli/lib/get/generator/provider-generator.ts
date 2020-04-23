import { CodeMaker } from 'codemaker';
import { Provider, ProviderSchema } from './provider-schema';
import { ResourceModel, AttributeModel, Struct } from "./models"
import { ResourceParser } from './resource-parser'

class ResourceEmitter {
  attributesEmitter: AttributesEmitter

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code)
  }

  public emit(resource: ResourceModel) {
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

    for (const att of resource.assignableAttributes) {
      this.code.line(`${att.terraformName}: this.${att.storageName},`);
    }

    this.code.close(`};`);
    this.code.closeBlock();
  }

  private emitResourceAttributes(resource: ResourceModel) {
    for (const att of resource.attributes) {
      this.attributesEmitter.emit(att)
    }
  }

  private emitInitializer(resource: ResourceModel) {
    const configName = resource.configStruct.attributeName('config')
    this.code.line();
    this.code.openBlock(`public constructor(scope: Construct, id: string, ${configName}: ${resource.configStruct.attributeType})`);

    // invoke super ctor with the terraform resource type
    this.code.open(`super(scope, id, {`);
    this.code.line(`type: '${resource.terraformType}',`);
    this.code.close(`});`);

    // initialize config properties
    for (const att of resource.assignableAttributes) {
      this.code.line(`this.${att.storageName} = ${configName}.${att.name};`);
    }

    this.code.closeBlock();
  }
}

class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel) {
    this.code.line();
    this.code.line(`// ${att.terraformName}`);
    this.code.line(`private ${att.storageName}?: ${att.type.type};`);

    if (att.computed) {
      if (att.type.isComputedComplexList) {
        this.emitComputedComplex(att)
      } else {
        this.emitComputedPrimitive(att)
      }
    } else {
      // if we dont have a getAtt call, we will emit an optional attribute, since "undefined"
      // indicates this value is not specified.
      if (att.isOptional) {
        this.emitOptional(att)
      } else {
        // otherwise, there is always a value - it will either be the value explicitly set
        // or the late-bound value through interpolation.
        this.emitRequired(att)
      }
    }
  }

  private emitOptional(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.type} | undefined)`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitRequired(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName} ?? ${att.getAttCall};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.type})`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitComputedPrimitive(att: AttributeModel) {
    this.code.openBlock(att.getterFunctionHeader());
      this.code.line(att.getterFunctionBody());
    this.code.closeBlock();
  }

  private emitComputedComplex(att: AttributeModel) {
    const argument = {
      name: 'index',
      type: 'string'
    }

    this.code.openBlock(`public ${att.name}(${argument.name}: ${argument.type})`);
      this.code.line(`return ${att.type.computedComplexList(argument)};`);
    this.code.closeBlock();
  }
}

class StructEmitter {
  attributesEmitter: AttributesEmitter

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code)
  }

  public emit(struct: Struct) {
    if (struct.isComputed) {
      this.emitComplexType(struct)
    } else {
      this.emitInterface(struct)
    }
  }

  private emitInterface(struct: Struct) {
    this.code.openBlock(`export interface ${struct.attributeType}`);

    for (const att of struct.assignableAttributes) {
      if (att.description) {
        this.code.line(`/** ${att.description} */`);
      }

      this.code.line(`readonly ${att.typeDefinition};`);
    }
    this.code.closeBlock();
  }

  private emitComplexType(struct: Struct) {
    this.code.openBlock(`export class ${struct.name} extends ComplexComputedList`);
    this.code.openBlock(`constructor(private index: string)`);
    this.code.closeBlock();

    for (const att of struct.attributes) {
      this.attributesEmitter.emit(att)
    }

    this.code.closeBlock();
  }
}

export class TerraformGenerator {
  private resourceParser = new ResourceParser();
  private resourceEmitter:  ResourceEmitter;
  private structEmitter:  StructEmitter;

  constructor(private readonly code: CodeMaker, schema: ProviderSchema) {
    this.code.indentation = 2;
    this.resourceEmitter = new ResourceEmitter(this.code)
    this.structEmitter = new StructEmitter(this.code)

    if (!schema.provider_schemas) {
      console.error('warning: no providers');
      return;
    }

    for (const [name, provider] of Object.entries(schema.provider_schemas)) {
      this.emitProvider(name, provider);
    }
  }

  public async save(outdir: string) {
    await this.code.save(outdir);
  }

  private emitProvider(name: string, provider: Provider) {
    const files: string[] = []
    for (const [type, resource] of Object.entries(provider.resource_schemas)) {
      files.push(this.emitResourceFile(this.resourceParser.parse(name, type, resource)));
    }
    this.emitIndexFile(name, files)
  }

  private emitIndexFile(provider: string, files: string[]): void {
    const folder = `providers/${provider}`
    const filePath = `${folder}/index.ts`
    this.code.openFile(filePath);
    this.code.line('// generated by cdktf get')
    for (const file of files) {
      this.code.line(`export * from './${file.replace(`${folder}/`, '').replace('.ts', '')}';`);
    }
    this.code.line()
    this.code.closeFile(filePath)
  }

  private emitResourceFile(resource: ResourceModel): string {
    this.code.openFile(resource.filePath);
      this.emitFileHeader(resource)
      resource.structs.forEach(struct => this.structEmitter.emit(struct));
      this.resourceEmitter.emit(resource)
    this.code.closeFile(resource.filePath);

    return resource.filePath;
  }

  private emitFileHeader(resource: ResourceModel) {
    this.code.line(`// generated from terraform resource schema`);
    this.code.line();
    this.code.line('/*');
    this.code.line(resource.schemaAsJson);
    this.code.line('*/');
    resource.importStatements.forEach(statement => this.code.line(statement))
  }
}