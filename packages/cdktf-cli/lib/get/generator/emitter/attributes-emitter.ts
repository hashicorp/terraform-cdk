import { CodeMaker } from "codemaker";
import { AttributeModel } from "../models";
import { CUSTOM_DEFAULTS } from "../custom-defaults";

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel) {
    this.code.line();
    this.code.line(
      `// ${att.terraformName} - computed: ${att.computed}, optional: ${att.isOptional}, required: ${att.isRequired}`
    );

    switch (true) {
      case att.isProvider && att.isOptional:
        return this.emitProviderOptional(att);
      case att.isProvider:
        return this.emitProviderRequired(att);
      case att.computed &&
        att.optional &&
        !att.isRequired &&
        att.isConfigIgnored:
        return this.emitOptionalComputedIgnored(att);
      case att.computed && att.isOptional:
        return this.emitOptional(att);
      case att.computed:
        return this.emitComputed(att);
      case att.isOptional:
        return this.emitOptional(att);
      case att.isRequired:
        return this.emitRequired(att);
    }
  }

  private emitProviderOptional(att: AttributeModel) {
    this.code.line(`private ${att.storageName}?: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(
      `public set ${att.name}(value: ${att.type.name} | undefined)`
    );
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitProviderRequired(att: AttributeModel) {
    this.code.line(`private ${att.storageName}: ${att.type.name};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(`public set ${att.name}(value: ${att.type.name})`);
    this.code.line(`this.${att.storageName} = value;`);
    this.code.closeBlock();
  }

  private emitOptional(att: AttributeModel) {
    this.code.line(`private ${att.storageName}!: ${att.type.attributeName};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(
      `public ${this.getPutName(att)}(value: ${att.type.name} | undefined)`
    );
    this.code.openBlock(`if (value === undefined)`);
    this.code.line(`this.${att.storageName}.reset();`);
    this.code.closeBlock();
    this.code.openBlock(`else`);
    this.code.line(
      `this.${att.storageName} = ${att.type.attributeName}.create(this, '${att.terraformName}', value);`
    );
    this.code.closeBlock();
    this.code.closeBlock();
  }

  private emitOptionalComputedIgnored(att: AttributeModel) {
    this.code.line(`private ${att.storageName}: ${att.type.attributeName};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();
  }

  private emitComputed(att: AttributeModel) {
    this.code.line(`private ${att.storageName}: ${att.type.attributeName};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();
  }

  private emitRequired(att: AttributeModel) {
    this.code.line(`private ${att.storageName}!: ${att.type.attributeName};`);
    this.code.openBlock(`public get ${att.name}()`);
    this.code.line(`return this.${att.storageName};`);
    this.code.closeBlock();

    this.code.openBlock(
      `public ${this.getPutName(att)}(value: ${att.type.name})`
    );
    this.code.line(
      `this.${att.storageName} = ${att.type.attributeName}.create(this, '${att.terraformName}', value);`
    );
    this.code.closeBlock();
  }

  public emitInitializer(att: AttributeModel) {
    if (att.isProvider) {
      this.code.line(`this.${att.storageName} = config.${att.name};`);
    } else if (!att.isAssignable || att.isConfigIgnored) {
      this.code.line(
        `this.${att.storageName} = new ${att.type.attributeName}(this, '${
          att.terraformName
        }', ${CUSTOM_DEFAULTS[att.terraformFullName]})`
      );
    } else if (att.isRequired) {
      this.code.line(`this.${this.getPutName(att)}(config.${att.name});`);
    } else {
      this.code.line(
        `this.${this.getPutName(att)}(config.${att.name} ?? new ${
          att.type.attributeName
        }(this, '${att.terraformName}', ${
          CUSTOM_DEFAULTS[att.terraformFullName]
        }));`
      );
    }
  }

  private getPutName(att: AttributeModel): string {
    return `put${att.name[0].toUpperCase() + att.name.slice(1)}`;
  }

  public determineMapType(att: AttributeModel): string {
    const type = att.type;
    if (type.isStringMap) {
      return `string`;
    }
    if (type.isNumberMap) {
      return `number`;
    }
    if (type.isBooleanMap) {
      return `boolean`;
    }
    if (process.env.DEBUG) {
      console.error(
        `The attribute ${JSON.stringify(att)} isn't implemented yet`
      );
    }
    return `any`;
  }

  public emitToTerraform(att: AttributeModel, isStruct: boolean) {
    const context = isStruct ? "struct!" : "this";

    if (att.isProvider) {
      //TODO this is wrong
      this.code.line(
        `${att.terraformName}: ${context}.${att.storageName}.toTerraform(),`
      );
    } else {
      this.code.line(
        `${att.terraformName}: ${context}.${att.storageName}.toTerraform(),`
      );
    }
  }

  // public emitToTerraform(att: AttributeModel, isStruct: boolean) {
  //   const type = att.type;
  //   const context = isStruct ? 'struct!' : 'this';
  //   const name = isStruct ? att.name : att.storageName;
  //   const customDefault = CUSTOM_DEFAULTS[att.terraformFullName];

  //   const varReference= `${context}.${name}`;
  //   const defaultCheck = customDefault !== undefined ? `${varReference} === undefined ? ${customDefault} : ` : '';

  //   switch (true) {
  //     case (type.isList && type.isMap):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.hashMapper(cdktf.${this.determineMapType(att)}ToTerraform))(${varReference}),`);
  //       break;
  //     case (type.isStringList || type.isNumberList || type.isBooleanList):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.${downcaseFirst(type.innerType)}ToTerraform)(${varReference}),`);
  //       break;
  //     case (type.isList):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.listMapper(${downcaseFirst(type.innerType)}ToTerraform)(${varReference}),`);
  //       break;
  //     case (type.isMap):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.hashMapper(cdktf.${this.determineMapType(att)}ToTerraform)(${varReference}),`);
  //       break;
  //     case (type.isString):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.stringToTerraform(${varReference}),`);
  //       break;
  //     case (type.isNumber):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.numberToTerraform(${varReference}),`);
  //       break;
  //     case (type.isBoolean):
  //       this.code.line(`${att.terraformName}: ${defaultCheck}cdktf.booleanToTerraform(${varReference}),`);
  //       break;
  //     default:
  //       this.code.line(`${att.terraformName}: ${defaultCheck}${downcaseFirst(type.name)}ToTerraform(${varReference}),`);
  //       break;
  //   }
  // }
}
