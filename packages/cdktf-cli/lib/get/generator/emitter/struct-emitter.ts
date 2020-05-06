import { CodeMaker } from 'codemaker';
import { ResourceModel, Struct } from "../models"
import { AttributesEmitter } from './attributes-emitter'

export class StructEmitter {
  attributesEmitter: AttributesEmitter

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code)
  }

  public emit(resource: ResourceModel) {
    resource.structs.forEach(struct => {
      if (struct.isClass) {
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
  }

  private emitClass(struct: Struct) {
    this.code.openBlock(`export class ${struct.name} extends ComplexComputedList`);
    for (const att of struct.attributes) {
      this.attributesEmitter.emit(att)
    }
    this.code.closeBlock();
  }
}
