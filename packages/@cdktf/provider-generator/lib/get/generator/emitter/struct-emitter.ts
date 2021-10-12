import { CodeMaker } from "codemaker";
import { ResourceModel, Struct, ConfigStruct } from "../models";
import { AttributesEmitter } from "./attributes-emitter";
import { downcaseFirst } from "../../../util";

export class StructEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  public emit(resource: ResourceModel) {
    resource.structs.forEach((struct) => {
      if (struct.isSingleItem) {
        this.emitInterface(resource, struct);
        this.emitClass(struct, `${struct.name}Output`);
      } else if (struct.isClass) {
        this.emitClass(struct);
      } else {
        this.emitInterface(resource, struct);
      }
    });
  }

  private emitInterface(
    resource: ResourceModel,
    struct: Struct,
    name = struct.name
  ) {
    if (resource.isProvider) {
      this.code.openBlock(`export interface ${name}`);
    } else {
      this.code.openBlock(`export interface ${name}${struct.extends}`);
    }

    for (const att of struct.assignableAttributes) {
      if (att.description) {
        this.code.line(`/**`);
        this.code.line(`* ${att.description}`);
        this.code.line(`* `);
        this.code.line(
          `* Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`
        );
        this.code.line(`*/`);
      } else {
        this.code.line(`/**`);
        this.code.line(
          `* Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`
        );
        this.code.line(`*/`);
      }

      this.code.line(`readonly ${att.typeDefinition};`);
    }
    this.code.closeBlock();

    if (!(struct instanceof ConfigStruct)) {
      this.emitToTerraformFunction(struct);
    }
  }

  private emitClass(struct: Struct, name = struct.name) {
    this.code.openBlock(
      `export class ${name} extends ${
        struct.isSingleItem
          ? "cdktf.ComplexObject"
          : "cdktf.ComplexComputedList"
      }`
    );

    if (struct.isSingleItem) {
      this.code.line(`/**`);
      this.code.line(`* @param terraformResource The parent resource`);
      this.code.line(
        `* @param terraformAttribute The attribute on the parent resource this class is referencing`
      );
      this.code.line(
        `* @param isSingleItem True if this is a block, false if it's a list`
      );
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean)`
      );
      this.code.line(
        `super(terraformResource, terraformAttribute, isSingleItem);`
      );
      this.code.closeBlock();
    }

    for (const att of struct.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, struct.attributes),
        this.attributesEmitter.needsInputEscape(att, struct.attributes)
      );
    }

    this.code.closeBlock();
  }

  private emitToTerraformFunction(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${
        struct.isSingleItem ? `${struct.name}Output | ` : ""
      }${struct.name}): any`
    );
    this.code.line(`if (!cdktf.canInspect(struct)) { return struct; }`);
    this.code.openBlock(`if (cdktf.isComplexElement(struct))`);
    this.code.line(
      `throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");`
    );
    this.code.closeBlock();

    this.code.openBlock("return");
    for (const att of struct.isClass
      ? struct.attributes
      : struct.assignableAttributes) {
      if (!att.isConfigIgnored) {
        this.attributesEmitter.emitToTerraform(att, true);
      }
    }
    this.code.closeBlock(";");
    this.code.closeBlock();
    this.code.line();
  }
}
