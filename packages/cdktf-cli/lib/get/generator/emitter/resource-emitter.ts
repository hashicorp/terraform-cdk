import { CodeMaker } from 'codemaker';
import { ResourceModel } from "../models"
import { AttributesEmitter } from './attributes-emitter'

export class ResourceEmitter {
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

    for (const att of resource.synthesizableAttributes) {
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
    for (const att of resource.configStruct.assignableAttributes) {
      this.code.line(`this.${att.storageName} = ${configName}.${att.name};`);
    }

    this.code.closeBlock();
  }
}