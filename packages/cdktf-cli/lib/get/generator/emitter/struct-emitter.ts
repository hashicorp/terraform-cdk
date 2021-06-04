import { CodeMaker } from 'codemaker';
import { ResourceModel, Struct, ConfigStruct } from "../models"
import { AttributesEmitter } from './attributes-emitter'
import { downcaseFirst } from '../../../util';

export class StructEmitter {
  attributesEmitter: AttributesEmitter

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code)
  }

  public emit(resource: ResourceModel) {
    resource.structs.forEach(struct => {
      if (struct.isAttribute) {
        this.emitClass(struct)
      } else {
        this.emitInterface(resource, struct)
      }
    })
  }

  private emitInterface(resource: ResourceModel, struct: Struct) {
    if (resource.isProvider) {
      this.code.openBlock(`export interface ${struct.name}`);
    } else {
      this.code.openBlock(`export interface ${struct.name}${struct.extends}`);
    }

    for (const att of struct.assignableAttributes) {
      if (att.description) {
        this.code.line(`/** ${att.description} */`);
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
      this.emitConstructor(struct);

      if (!struct.isReadOnly) {
        this.emitValue(struct);
        this.emitConstruct(struct);
      }

      this.emitValueToTerraform(struct);

      for (const att of struct.attributes) {
        this.attributesEmitter.emitAttributeAccessor(att, struct.isReadOnly);
      }

      this.emitCollectionAccessors(struct);

    this.code.closeBlock();
    this.code.line();

    if (!struct.isReadOnly) {
      this.code.line(`export type ${struct.attributeTypeAlias} = ${struct.attributeValueType} | ${struct.name};`);
      this.code.line();
    }
  }

  private emitConstructor(struct: Struct) {
    this.code.openBlock(`public constructor(parent: cdktf.ITerraformAddressable, terraformAttribute: string, value?: ${struct.attributeValueType}, options?: cdktf.TerraformAttributeOptions)`);
      this.code.line('super(parent, terraformAttribute, value, options);');
    this.code.closeBlock();
    this.code.line();
  }

  private emitValue(struct: Struct) {
    this.code.openBlock(`public get internalValue(): ${struct.attributeValueType} | undefined`);
      this.code.line('return this.realValue;');
    this.code.closeBlock();
    this.code.line();
  }

  private emitConstruct(struct: Struct) {
    this.code.openBlock(`public static construct(parent: cdktf.ITerraformAddressable, terraformAttribute: string, value: ${struct.attributeTypeAlias} | undefined)`);
      this.code.openBlock(`if (!(value instanceof ${struct.name}))`);
        this.code.line(`return new ${struct.name}(parent, terraformAttribute, value);`);
      this.code.closeBlock();
      this.code.openBlock(`else if (value.terraformParent === parent)`);
        this.code.line(`return value;`);
      this.code.closeBlock();
      this.code.openBlock(`else`);
        this.code.line(`return new ${struct.name}(parent, terraformAttribute, value.internalValue, { nested: value });`);
      this.code.closeBlock();
    this.code.closeBlock();
    this.code.line();
  }

  private emitValueToTerraform(struct: Struct) {
    this.code.openBlock(`protected valueToTerraform(): any`);
      if (struct.isReadOnly) {
        this.code.line('return undefined;');
      }
      else {
        this.code.line(`return ${this.attributesEmitter.getTypeToTerraform(struct.attributeTypeModel, 'this.internalValue')};`);
      }
    this.code.closeBlock();
    this.code.line();
  }

  private emitCollectionAccessors(struct: Struct) {
    switch (struct.attributeBase) {
      case 'List':
        this.code.openBlock(`public get(index: number): ${struct.attributeValueAttribute}`);
          this.code.line(`return new ${struct.attributeValueAttribute}(this, index.toString());`);
        this.code.closeBlock();
        break;
      case 'Set':
        this.code.openBlock(`public toList(): ${struct.name.replace('SetAttribute', 'ListAttribute')}`);
          this.code.line(`return new ${struct.name.replace('SetAttribute', 'ListAttribute')}(this.terraformParent, this.terraformAttribute, ${struct.isReadOnly ? 'undefined' : 'this.internalValue'}, { nested: this.nested, _operation: (fqn: string) => \`tolist(\${fqn})\` });`);
        this.code.closeBlock();
        break;
      case 'Map':
        this.code.openBlock(`public get(key: string): ${struct.attributeValueAttribute}`);
          this.code.line(`return new ${struct.attributeValueAttribute}(this, \`\${key}\`);`);
        this.code.closeBlock();
        break;
    }
  }

  private emitToTerraformFuction(struct: Struct) {
    this.code.line();
    this.code.openBlock(`function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${struct.name}): any`);
    this.code.line(`if (!cdktf.canInspect(struct)) { return struct; }`);
    this.code.openBlock('return');
    for (const att of struct.assignableAttributes) {
      this.attributesEmitter.emitToTerraform(att, true);
    }
    this.code.closeBlock(';');
    this.code.closeBlock();
    this.code.line();
  }
}
