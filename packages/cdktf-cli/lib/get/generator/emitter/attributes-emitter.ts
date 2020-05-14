import { CodeMaker } from 'codemaker';
import { AttributeModel } from "../models";

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel) {
    this.code.line();
    this.code.line(`// ${att.terraformName} - computed: ${att.computed}, optional: ${att.isOptional}, required: ${att.isRequired}`);

    switch (true) {
      case (att.computed && !att.isOptional && att.type.isComputedComplex && att.type.isList): return this.emitComputedComplexList(att);
      case (att.computed && att.isOptional && att.type.isComputedComplex && att.type.isList): return this.emitComputedComplexOptional(att);
      case (att.computed && !att.isOptional && att.type.isComputedComplex && att.type.isMap): return this.emitComputedComplexMap(att);
      case (att.computed && att.isOptional && att.type.isComputedComplex && att.type.isMap): return this.emitComputedComplexOptional(att);
      case (att.computed && att.isOptional): return this.emitOptionalComputed(att);
      case (att.computed): return this.emitComputed(att);
      case (att.isOptional): return this.emitOptional(att);
      case (att.isRequired): return this.emitRequired(att);
    }
  }

  private emitOptional(att: AttributeModel) {
    this.code.line(`private ${att.storageName}?: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name} | undefined)`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitOptionalComputed(att: AttributeModel) {
    this.code.line(`private ${att.storageName}?: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return this.${att.storageName} ?? ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name} | undefined)`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitComputed(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();
  }

  private emitRequired(att: AttributeModel) {
    this.code.line(`private ${att.storageName}: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitComputedComplexList(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(index: string)`);
      this.code.line(`return new ${att.type.name}(this, '${att.terraformName}', index);`);
    this.code.closeBlock();
  }

  private emitComputedComplexOptional(att: AttributeModel) {
    this.code.line(`private ${att.storageName}?: ${att.type.name}`);
    this.code.openBlock(`public get ${att.name}(): ${att.type.name} | undefined`);
      this.code.line(`return this.${att.storageName}; // Getting the computed value is not yet implemented`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name} | undefined)`);
      this.code.line(`this.${att.storageName} = value;`);
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
    if (process.env.DEBUG) {
      console.error(`The attribute ${JSON.stringify(att)} isn't implemented yet`)
    }
    return `'not implemented' as any`
  }
}
