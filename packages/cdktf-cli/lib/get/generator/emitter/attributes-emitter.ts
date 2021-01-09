import { CodeMaker } from 'codemaker';
import { AttributeModel } from "../models";
import { downcaseFirst } from '../../../util';
import { CUSTOM_DEFAULTS } from '../custom-defaults';

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line();
    this.code.line(`// ${att.terraformName} - computed: ${att.computed}, optional: ${att.isOptional}, required: ${att.isRequired}`);

    switch (true) {
      case (att.computed && !att.isOptional && att.type.isComputedComplex && att.type.isList && att.type.isMap): return this.emitComputedComplexListMap(att);
      case (att.computed && !att.isOptional && att.type.isComputedComplex && att.type.isList): return this.emitComputedComplexList(att);
      case (att.computed && att.isOptional && att.type.isComputedComplex && att.type.isList): return this.emitComputedComplexOptional(att, escapeReset, escapeInput);
      case (att.computed && !att.isOptional && att.type.isComputedComplex && att.type.isMap): return this.emitComputedComplexMap(att);
      case (att.computed && att.isOptional && att.type.isComputedComplex && att.type.isMap): return this.emitComputedComplexOptional(att, escapeReset, escapeInput);
      case (att.computed && att.optional && !att.isRequired && att.isConfigIgnored): return this.emitOptionalComputedIgnored(att);
      case (att.computed && att.isOptional): return this.emitOptionalComputed(att, escapeReset, escapeInput);
      case (att.computed): return this.emitComputed(att);
      case (att.isOptional): return this.emitOptional(att, escapeReset, escapeInput);
      case (att.isRequired): return this.emitRequired(att, escapeInput);
    }
  }

  private emitOptional(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line(`private ${att.storageName}?: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${att.isProvider ? "this." + att.storageName : this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name} ${att.isProvider ? ' | undefined' : ''})`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();

    this.code.openBlock(`public ${this.getResetName(att.name, escapeReset)}()`);
      this.code.line(`this.${att.storageName} = undefined;`);
    this.code.closeBlock();

    this.code.line(`// Temporarily expose input value. Use with caution.`);
    this.code.openBlock(`public get ${this.getInputName(att, escapeInput)}()`);
      this.code.line(`return this.${att.storageName}`);
    this.code.closeBlock();
  }

  private emitOptionalComputed(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line(`private ${att.storageName}?: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();

    this.code.openBlock(`public ${this.getResetName(att.name, escapeReset)}()`);
      this.code.line(`this.${att.storageName} = undefined;`);
    this.code.closeBlock();

    this.code.line(`// Temporarily expose input value. Use with caution.`);
    this.code.openBlock(`public get ${this.getInputName(att, escapeInput)}()`);
      this.code.line(`return this.${att.storageName}`);
    this.code.closeBlock();
  }

  private emitOptionalComputedIgnored(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();
  }

  private emitComputed(att: AttributeModel) {
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${this.determineGetAttCall(att)};`);
    this.code.closeBlock();
  }

  private emitRequired(att: AttributeModel, escapeInput: boolean) {
    this.code.line(`private ${att.storageName}: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
      this.code.line(`return ${att.isProvider ? "this." + att.storageName : this.determineGetAttCall(att)};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();

    this.code.line(`// Temporarily expose input value. Use with caution.`);
    this.code.openBlock(`public get ${this.getInputName(att, escapeInput)}()`);
      this.code.line(`return this.${att.storageName}`);
    this.code.closeBlock();
  }

  private emitComputedComplexList(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(index: string)`);
      this.code.line(`return new ${att.type.name}(this, '${att.terraformName}', index);`);
    this.code.closeBlock();
  }

  private emitComputedComplexListMap(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(index: string, key: string): ${this.determineMapType(att)}`);
      this.code.line(`return new ${att.type.name}(this, \`${att.terraformName}.\${index}\`).lookup(key);`);
    this.code.closeBlock();
  }

  private emitComputedComplexOptional(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line(`private ${att.storageName}?: ${att.type.name}`);
    this.code.openBlock(`public get ${att.name}(): ${att.type.name}`);
      this.code.line(`return this.interpolationForAttribute('${att.terraformName}') as any; // Getting the computed value is not yet implemented`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
      this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();

    this.code.openBlock(`public ${this.getResetName(att.name, escapeReset)}()`);
      this.code.line(`this.${att.storageName} = undefined;`);
    this.code.closeBlock();

    this.code.line(`// Temporarily expose input value. Use with caution.`);
    this.code.openBlock(`public get ${this.getInputName(att, escapeInput)}()`);
      this.code.line(`return this.${att.storageName}`);
    this.code.closeBlock();
  }

  private emitComputedComplexMap(att: AttributeModel) {
    this.code.openBlock(`public ${att.name}(key: string): ${this.determineMapType(att)}`);
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
    return `this.interpolationForAttribute('${att.terraformName}') as any`
  }

  public determineMapType(att: AttributeModel): string {
    const type = att.type
    if (type.isStringMap) { return `string` }
    if (type.isNumberMap) { return `number` }
    if (type.isBooleanMap) { return `boolean` }
    if (process.env.DEBUG) {
      console.error(`The attribute ${JSON.stringify(att)} isn't implemented yet`)
    }
    return `any`
  }

  public needsInputEscape(att: AttributeModel, attributes: AttributeModel[]): boolean {
    return attributes.find(a => a.terraformName.match(`^${att.terraformName}_input$`)) instanceof AttributeModel;
  }

  public getInputName(att: AttributeModel, escape: boolean) {
    if (escape) {
      return `${att.name}TfInput`;
    }
    else {
      return `${att.name}Input`;
    }
  }

  public needsResetEscape(att: AttributeModel, attributes: AttributeModel[]): boolean {
    return attributes.find(a => a.terraformName.match(`^reset_${att.terraformName}$`)) instanceof AttributeModel;
  }

  public getResetName(name: string, escape: boolean) {
    if (!name) return name;
    if (escape) {
      return `resetTf${name[0].toUpperCase() + name.slice(1)}`;
    }
    else {
      return `reset${name[0].toUpperCase() + name.slice(1)}`;
    }
  }

  public emitToTerraform(att: AttributeModel, isStruct: boolean) {
    const type = att.type;
    const context = isStruct ? 'struct!' : 'this';
    const name = isStruct ? att.name : att.storageName;
    const customDefault = CUSTOM_DEFAULTS[att.terraformFullName];

    const varReference= `${context}.${name}`;
    const defaultCheck = customDefault !== undefined ? `${varReference} === undefined ? ${customDefault} : ` : '';

    switch (true) {
      case (type.isList && type.isMap):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.hashMapper(cdktf.${this.determineMapType(att)}ToTerraform))(${varReference}),`);
        break;
      case (type.isStringList || type.isNumberList || type.isBooleanList):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.${downcaseFirst(type.innerType)}ToTerraform)(${varReference}),`);
        break;
      case (type.isList):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(${downcaseFirst(type.innerType)}ToTerraform)(${varReference}),`);
        break;
      case (type.isMap):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.hashMapper(cdktf.${this.determineMapType(att)}ToTerraform)(${varReference}),`);
        break;
      case (type.isString):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.stringToTerraform(${varReference}),`);
        break;
      case (type.isNumber):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.numberToTerraform(${varReference}),`);
        break;
      case (type.isBoolean):
        this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.booleanToTerraform(${varReference}),`);
        break;
      default:
        this.code.line(`${att.terraformName}: ${defaultCheck}${downcaseFirst(type.name)}ToTerraform(${varReference}),`);
        break;
    }
  }
}
