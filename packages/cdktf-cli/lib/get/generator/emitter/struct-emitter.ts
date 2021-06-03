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
      if (struct.isAttribute) {
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

    if (!(struct instanceof ConfigStruct) && !struct.isAttribute) {
      this.emitToTerraformFuction(struct);
    }
  }

  private emitClass(struct: Struct) {
    this.code.openBlock(`export class ${struct.name}${struct.extends}`);
    this.code.openBlock(
      `public constructor(parent: cdktf.ITerraformAddressable, terraformAttribute: string, value?: ${struct.attributeValueType}, options?: cdktf.TerraformAttributeOptions)`
    );
    this.code.line("super(parent, terraformAttribute, value, options);");
    this.code.closeBlock();
    this.code.line();

    this.code.openBlock(
      `public get value(): ${struct.attributeValueType} | undefined`
    );
    this.code.line("return this.realValue;");
    this.code.closeBlock();
    this.code.line();

    this.code.openBlock(
      `public static create(parent: cdktf.ITerraformAddressable, terraformAttribute: string, value: ${struct.attributeTypeAlias} | undefined)`
    );
    this.code.openBlock(`if (!(value instanceof ${struct.name}))`);
    this.code.line(
      `return new ${struct.name}(parent, terraformAttribute, value);`
    );
    this.code.closeBlock();
    this.code.openBlock(`else if (value.parent === parent)`);
    this.code.line(`return value;`);
    this.code.closeBlock();
    this.code.openBlock(`else`);
    this.code.line(
      `return new ${struct.name}(parent, terraformAttribute, value.value, { nested: value });`
    );
    this.code.closeBlock();
    this.code.closeBlock();
    this.code.line();

    switch (struct.attributeBase) {
      case "List":
        this.code.openBlock(
          `public get(index: number): ${struct.attributeValueAttribute}`
        );
        this.code.line(
          `return new ${struct.attributeValueAttribute}(this, index.toString());`
        );
        this.code.closeBlock();
        break;
      case "Set":
        this.code.openBlock(
          `public toList(): ${struct.name.replace("Set", "List")}`
        );
        this.code.line(
          `return new ${struct.name.replace(
            "Set",
            "List"
          )}(this.parent, this.attribute, this.value, { nested: this.nested, _operation: (fqn: string) => \`tolist(\${fqn})\` });`
        );
        this.code.closeBlock();
        break;
      case "Map":
        this.code.openBlock(
          `public get(key: string): ${struct.attributeValueAttribute}`
        );
        this.code.line(
          `return new ${struct.attributeValueAttribute}(this, \`\${key}\`);`
        );
        this.code.closeBlock();
        this.code.closeBlock();
        this.code.line();

        this.code.openBlock(`protected valueToTerraform()`);
        this.code.line(
          `return ${this.attributesEmitter.getTypeToTerraform(
            struct.attributeTypeModel,
            "this.value"
          )};`
        );
        this.code.closeBlock();
        this.code.line();

        for (const att of struct.attributes) {
          this.attributesEmitter.emitAttributeAccessor(att);
        }

        switch (struct.attributeBase) {
          case "List":
            this.code.openBlock(
              `public get(index: number): ${struct.attributeValueAttribute}`
            );
            this.code.line(
              `return new ${struct.attributeValueAttribute}(this, index.toString());`
            );
            this.code.closeBlock();
            break;
          case "Set":
            this.code.openBlock(
              `public toList(): ${struct.name.replace(
                "SetAttribute",
                "ListAttribute"
              )}`
            );
            this.code.line(
              `return new ${struct.name.replace(
                "SetAttribute",
                "ListAttribute"
              )}(this.parent, this.attribute, this.value, { nested: this.nested, _operation: (fqn: string) => \`tolist(\${fqn})\` });`
            );
            this.code.closeBlock();
            break;
          case "Map":
            this.code.openBlock(
              `public get(key: string): ${struct.attributeValueAttribute}`
            );
            this.code.line(
              `return new ${struct.attributeValueAttribute}(this, \`\${key}\`);`
            );
            this.code.closeBlock();
            break;
        }

        this.code.closeBlock();
        this.code.line();

        this.code.line(
          `export type ${struct.attributeTypeAlias} = ${struct.attributeValueType} | ${struct.name};`
        );
        this.code.line();
    }
  }

  private emitToTerraformFuction(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${
        struct.name
      }): any`
    );
    this.code.line(`if (!cdktf.canInspect(struct)) { return struct; }`);
    this.code.openBlock("return");
    for (const att of struct.assignableAttributes) {
      this.attributesEmitter.emitToTerraform(att, true);
    }
    this.code.closeBlock(";");
    this.code.closeBlock();
    this.code.line();
  }
}
