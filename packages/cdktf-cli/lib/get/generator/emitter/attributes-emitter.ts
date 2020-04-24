import { CodeMaker } from 'codemaker';
import { AttributeModel, TokenizableTypes } from "../models";

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel) {
    this.code.line();
    this.code.line(`// ${att.terraformName}`);

    if (att.computed) {
      if (att.type.isComputedComplex) {
        this.emitComputedComplex(att)
      } else {
        this.emitTokenizable(att)
      }
    } else {
      this.code.line(`private ${att.storageName}?: ${att.type.type};`);
      if (att.isOptional && att.isTokenizable) {
        this.emitTokenizableOptional(att)
      } else {
        this.emitOptional(att)
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

  private emitTokenizableOptional(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName} ?? ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.type})`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitTokenizable(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();
  }

  private emitComputedComplex(att: AttributeModel) {
    if (att.type.isList) return this.emitComputedComplexList(att);
    if (att.type.isMap) return this.emitComputedComplexMap(att);
  }

  private emitComputedComplexList(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(index: string)`);
      this.code.line(`return new ${att.type.type}(this, '${att.terraformName}', index);`);
    this.code.closeBlock();
  }

  private emitComputedComplexMap(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(key: string)`);
      this.code.line(`return new ${att.type.type}(this, '${att.terraformName}').lookup(key);`);
    this.code.closeBlock();
  }


  public determineGetAttCall(att: AttributeModel): string {
    const type = att.type
    if (type.type === TokenizableTypes.STRING) { return `this.getStringAttribute('${att.terraformName}')` }
    if (type.type === TokenizableTypes.STRING_LIST) { return `this.getListAttribute('${att.terraformName}')` }
    if (type.type === TokenizableTypes.NUMBER) { return `this.getNumberAttribute('${att.terraformName}')` }
    console.log(`${att.name} is'n tokenizable`)
    return 'any'
  }
}
