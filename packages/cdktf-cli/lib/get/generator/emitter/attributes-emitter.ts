import { CodeMaker } from 'codemaker';
import { AttributeModel, TokenizableTypes } from "../models";

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel) {
    this.code.line();
    this.code.line(`// ${att.terraformName}`);

    if (att.computed) {
      if (att.type.isComputedComplexList) {
        this.emitComputedComplex(att)
      } else {
        this.emitComputedPrimitive(att)
      }
    } else {
      this.code.line(`private ${att.storageName}?: ${att.type.type};`);
      // if we dont have a getAtt call, we will emit an optional attribute, since "undefined"
      // indicates this value is not specified.
      if (att.isOptional) {
        this.emitOptional(att)
      } else {
        // otherwise, there is always a value - it will either be the value explicitly set
        // or the late-bound value through interpolation.
        this.emitRequired(att)
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

  private emitRequired(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName} ?? ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.type})`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitComputedPrimitive(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)}`);
    this.code.closeBlock();
  }

  private emitComputedComplex(att: AttributeModel) {
    const argument = {
      name: 'index',
      type: 'string'
    }

    this.code.openBlock(`public ${att.name}(${argument.name}: ${argument.type})`);
      this.code.line(`return ${att.type.computedComplexList(argument)};`);
    this.code.closeBlock();
  }

  public determineGetAttCall(att: AttributeModel): string {
    const type = att.type
    if (type.type === TokenizableTypes.STRING) { return `this.getStringAttribute('${att.terraformName}');` }
    if (type.type === TokenizableTypes.STRING_LIST) { return `this.getListAttribute('${att.terraformName}');` }
    if (type.type === TokenizableTypes.NUMBER) { return `this.getNumberAttribute('${att.terraformName}');` }
    console.log({att, type})
    return 'any'
  }
}
