import { CodeMaker } from 'codemaker';
import { AttributeModel } from "../models";

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
      this.code.line(`private ${att.storageName}?: ${att.type.name};`);
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

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name} | undefined)`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitTokenizableOptional(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName} ?? ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
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
      this.code.line(`return new ${att.type.name}(this, '${att.terraformName}', index);`);
    this.code.closeBlock();
  }

  private emitComputedComplexMap(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(key: string): string`);
      this.code.line(`return new ${att.type.name}(this, '${att.terraformName}').lookup(key);`);
    this.code.closeBlock();
  }

  public determineGetAttCall(att: AttributeModel): string {
    const type = att.type
    if (type.isString) { return `this.getStringAttribute('${att.terraformName}')` }
    if (type.isStringList) { return `this.getListAttribute('${att.terraformName}')` }
    if (type.isNumber) { return `this.getNumberAttribute('${att.terraformName}')` }
    if (type.isBoolean) { return `this.getBooleanAttribute('${att.terraformName}')` }
    console.log({att})
    return 'any'
  }
}
