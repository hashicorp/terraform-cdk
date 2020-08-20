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
    this.code.openBlock(`export class ${resource.className} extends ${resource.parentClassName}`);

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
    this.code.openBlock(`protected synthesizeAttributes(): { [name: string]: any }`);
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
    this.code.line();
    this.code.openBlock(`public constructor(scope: Construct, id: string, config: ${resource.configStruct.attributeType})`);

    resource.isProvider ? this.emitProviderSuper(resource) : this.emitResourceSuper(resource)

    // initialize config properties
    for (const att of resource.configStruct.assignableAttributes) {
      this.code.line(`this.${att.storageName} = config.${att.name};`);
    }

    this.code.closeBlock();
  }

  private emitResourceSuper(resource: ResourceModel) {
    this.code.open(`super(scope, id, {`);
      this.code.line(`terraformResourceType: '${resource.terraformResourceType}',`);
      this.code.open(`terraformGeneratorMetadata: {`);
        this.code.line(`providerName: '${resource.provider}'`);
      this.code.close(`},`);
      this.code.line(`provider: config.provider,`);
      this.code.line(`dependsOn: config.dependsOn,`);
      this.code.line(`count: config.count,`);
      this.code.line(`lifecycle: config.lifecycle`);
    this.code.close(`});`);
  }

  private emitProviderSuper(resource: ResourceModel) {
    this.code.open(`super(scope, id, {`);
      this.code.line(`terraformResourceType: '${resource.terraformResourceType}',`);
      this.code.open(`terraformGeneratorMetadata: {`);
        this.code.line(`providerName: '${resource.provider}',`);
        this.code.line(`providerVersionConstraint: '${resource.providerVersionConstraint}'`);
        this.code.close(`},`);
      this.code.line(`terraformProviderSource: '${resource.terraformProviderSource}'`);
    this.code.close(`});`);
  }
}