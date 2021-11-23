import { CodeMaker } from "codemaker";
import { ResourceModel } from "../models";
import { AttributesEmitter } from "./attributes-emitter";

export class ResourceEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  public emit(resource: ResourceModel) {
    this.code.line();
    this.code.line(`/**`);
    this.code.line(
      `* Represents a {@link ${resource.linkToDocs} ${resource.terraformResourceType}}`
    );
    this.code.line(`*/`);
    this.code.openBlock(
      `export class ${resource.className} extends cdktf.${resource.parentClassName}`
    );

    this.emitHeader("STATIC PROPERTIES");
    this.emitStaticProperties(resource);

    this.emitHeader("INITIALIZER");
    this.emitInitializer(resource);

    this.emitHeader("ATTRIBUTES");
    this.emitResourceAttributes(resource);

    // synthesis
    this.emitHeader("SYNTHESIS");
    this.emitResourceSynthesis(resource);

    this.code.closeBlock(); // construct
  }

  private emitHeader(title: string) {
    this.code.line();
    this.code.line("// " + "=".repeat(title.length));
    this.code.line(`// ${title}`);
    this.code.line("// " + "=".repeat(title.length));
  }

  private emitStaticProperties(resource: ResourceModel) {
    this.code.line(
      `public static readonly tfResourceType: string = "${resource.terraformResourceType}";`
    );
  }

  private emitResourceSynthesis(resource: ResourceModel) {
    this.code.line();
    this.code.openBlock(
      `protected synthesizeAttributes(): { [name: string]: any }`
    );
    this.code.open(`return {`);

    for (const att of resource.synthesizableAttributes) {
      this.attributesEmitter.emitToTerraform(att, false);
    }

    this.code.close(`};`);
    this.code.closeBlock();
  }

  private emitResourceAttributes(resource: ResourceModel) {
    for (const att of resource.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, resource.attributes),
        this.attributesEmitter.needsInputEscape(att, resource.attributes)
      );
    }
  }

  private emitInitializer(resource: ResourceModel) {
    this.code.line();
    this.code.line(`/**`);
    this.code.line(
      `* Create a new {@link ${resource.linkToDocs} ${
        resource.terraformResourceType
      }} ${resource.isDataSource ? "Data Source" : "Resource"}`
    );
    this.code.line(`*`);
    this.code.line(
      `* @param scope The scope in which to define this construct`
    );
    this.code.line(
      `* @param id The scoped construct ID. Must be unique amongst siblings in the same scope`
    );
    this.code.line(`* @param options ${resource.configStruct.attributeType}`);
    this.code.line(`*/`);
    this.code.openBlock(
      `public constructor(scope: Construct, id: string, config: ${resource.configStruct.attributeType})`
    );

    resource.isProvider
      ? this.emitProviderSuper(resource)
      : this.emitResourceSuper(resource);

    // initialize config properties
    for (const att of resource.configStruct.assignableAttributes) {
      if (att.setterType._type === "stored_class") {
        this.code.line(
          `this.${att.storageName}.internalValue = config.${att.name};`
        );
      } else {
        this.code.line(`this.${att.storageName} = config.${att.name};`);
      }
    }

    this.code.closeBlock();
  }

  private emitResourceSuper(resource: ResourceModel) {
    this.code.open(`super(scope, id, {`);
    this.code.line(
      `terraformResourceType: '${resource.terraformResourceType}',`
    );
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
    this.code.line(
      `terraformResourceType: '${resource.terraformResourceType}',`
    );
    this.code.open(`terraformGeneratorMetadata: {`);
    this.code.line(`providerName: '${resource.provider}',`);
    this.code.line(
      `providerVersionConstraint: '${resource.providerVersionConstraint}'`
    );
    this.code.close(`},`);
    this.code.line(
      `terraformProviderSource: '${resource.terraformProviderSource}'`
    );
    this.code.close(`});`);
  }
}
