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
      if (struct.isClass) {
        this.emitClass(struct);
      } else {
        this.emitInterface(resource, struct);
      }
    });
  }

  private emitInterface(resource: ResourceModel, struct: Struct) {
    if (resource.isProvider) {
      this.code.openBlock(`export interface ${struct.name}`);
    } else {
      this.code.openBlock(`export interface ${struct.name}${struct.extends}`);
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
      this.emitToTerraformFuction(struct);
    }
  }

  private emitClass(struct: Struct) {
    this.code.openBlock(
      `export class ${struct.name} extends cdktf.ComplexComputedList`
    );
    for (const att of struct.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, struct.attributes),
        this.attributesEmitter.needsInputEscape(att, struct.attributes)
      );
    }
    this.code.closeBlock();

    // This currently emits the functions for all structs of type class
    // To silence errors about unused functions all toTerraform functions
    // are exported for now. We might want to improve the control flow
    // here in way to determine which structs need really this function
    // and which don't.
    // TODO: only do this if the parent of this struct needs it to be exported because any parent might expose it
    if (!(struct instanceof ConfigStruct)) {
      this.emitToTerraformFuction(struct);
    }
  }

  private emitToTerraformFuction(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `export function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${
        struct.name
      }): any`
    );
    this.code.line(`if (!cdktf.canInspect(struct)) { return struct; }`);
    this.code.openBlock("return");
    for (const att of struct.isClass
      ? struct.attributes
      : struct.assignableAttributes) {
      this.attributesEmitter.emitToTerraform(att, true);
    }
    this.code.closeBlock(";");
    this.code.closeBlock();
    this.code.line();
  }
}
