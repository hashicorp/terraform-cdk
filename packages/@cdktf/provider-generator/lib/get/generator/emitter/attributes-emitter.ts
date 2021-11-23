import { CodeMaker } from "codemaker";
import { AttributeModel } from "../models";
import { downcaseFirst } from "../../../util";
import { CUSTOM_DEFAULTS } from "../custom-defaults";

function titleCase(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line();
    this.code.line(
      `// ${att.terraformName} - computed: ${att.computed}, optional: ${att.isOptional}, required: ${att.isRequired}`
    );

    const isStored = att.isStored;
    const hasResetMethod = isStored && !att.isRequired;
    const hasInputMethod = isStored;

    const getterType = att.getterType;

    if (isStored) {
      if (getterType._type === "stored_class") {
        this.code.line(
          `private ${att.storageName} = ${this.storedClassInit(att)};`
        );
      } else {
        this.code.line(`private ${att.storageName}?: ${att.type.name}; `);
      }
    }

    switch (getterType._type) {
      case "plain":
        this.code.openBlock(`public get ${att.name}()`);
        this.code.line(`return ${this.determineGetAttCall(att)};`);
        this.code.closeBlock();
        break;

      case "args":
        this.code.openBlock(
          `public ${att.name}(${getterType.args})${
            getterType.returnType ? ": " + getterType.returnType : ""
          }`
        );
        this.code.line(`return ${getterType.returnStatement};`);
        this.code.closeBlock();
        break;

      case "stored_class":
        this.code.openBlock(`public get ${att.name}()`);
        this.code.line(`return this.${att.storageName};`);
        this.code.closeBlock();
        break;
    }

    const setterType = att.setterType;

    switch (setterType._type) {
      case "set":
        this.code.openBlock(
          `public set ${att.name}(value: ${setterType.type})`
        );
        this.code.line(`this.${att.storageName} = value;`);
        this.code.closeBlock();
        break;

      case "put":
        this.code.openBlock(
          `public put${titleCase(att.name)}(value: ${setterType.type})`
        );
        this.code.line(`this.${att.storageName} = value;`);
        this.code.closeBlock();
        break;

      case "stored_class":
        this.code.openBlock(
          `public put${titleCase(att.name)}(value: ${setterType.type})`
        );
        this.code.line(`this.${att.storageName}.internalValue = value;`);
        this.code.closeBlock();
        break;
    }

    if (hasResetMethod) {
      this.code.openBlock(
        `public ${this.getResetName(att.name, escapeReset)}()`
      );

      if (setterType._type === "stored_class") {
        this.code.line(`this.${att.storageName}.internalValue = undefined;`);
      } else {
        this.code.line(`this.${att.storageName} = undefined;`);
      }

      this.code.closeBlock();
    }

    if (hasInputMethod) {
      this.code.line(`// Temporarily expose input value. Use with caution.`);
      this.code.openBlock(
        `public get ${this.getInputName(att, escapeInput)}()`
      );

      if (setterType._type === "stored_class") {
        this.code.line(`return this.${att.storageName}.internalValue;`);
      } else {
        this.code.line(`return this.${att.storageName};`);
      }

      this.code.closeBlock();
    }
  }

  // returns an invocation of a stored class, e.g. 'new DeplotmentMetadataOutput(this as any, "metadata", true)'
  private storedClassInit(att: AttributeModel) {
    return `new ${att.type.name}${
      att.type.isSingleItem ? "OutputReference" : ""
    }(this as any, "${att.terraformName}", ${
      att.type.isSingleItem ? "true" : "false"
    })`;
  }

  public determineGetAttCall(att: AttributeModel): string {
    if (att.isProvider) {
      return `this.${att.storageName}`;
    }

    const type = att.type;
    if (type.isString) {
      return `this.getStringAttribute('${att.terraformName}')`;
    }
    if (type.isStringList) {
      return `this.getListAttribute('${att.terraformName}')`;
    }
    if (type.isNumber) {
      return `this.getNumberAttribute('${att.terraformName}')`;
    }
    if (type.isBoolean) {
      return `this.getBooleanAttribute('${att.terraformName}') as any`;
    }
    if (process.env.DEBUG) {
      console.error(
        `The attribute ${JSON.stringify(att)} isn't implemented yet`
      );
    }

    this.code.line(`// Getting the computed value is not yet implemented`);
    return `this.interpolationForAttribute('${att.terraformName}') as any`;
  }

  public needsInputEscape(
    att: AttributeModel,
    attributes: AttributeModel[]
  ): boolean {
    return (
      attributes.find((a) =>
        a.terraformName.match(`^${att.terraformName}_input$`)
      ) instanceof AttributeModel
    );
  }

  public getInputName(att: AttributeModel, escape: boolean) {
    if (escape) {
      return `${att.name}TfInput`;
    } else {
      return `${att.name}Input`;
    }
  }

  public needsResetEscape(
    att: AttributeModel,
    attributes: AttributeModel[]
  ): boolean {
    return (
      attributes.find((a) =>
        a.terraformName.match(`^reset_${att.terraformName}$`)
      ) instanceof AttributeModel
    );
  }

  public getResetName(name: string, escape: boolean) {
    if (!name) return name;
    if (escape) {
      return `resetTf${titleCase(name)}`;
    } else {
      return `reset${titleCase(name)}`;
    }
  }

  public emitToTerraform(att: AttributeModel, isStruct: boolean) {
    const type = att.type;
    const context = isStruct ? "struct!" : "this";
    const name = isStruct ? att.name : att.storageName;
    const customDefault = CUSTOM_DEFAULTS[att.terraformFullName];

    const varReference = `${context}.${name}`;
    const defaultCheck =
      customDefault !== undefined
        ? `${varReference} === undefined ? ${customDefault} : `
        : "";

    switch (true) {
      case type.isList && type.isMap:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.hashMapper(cdktf.${att.mapType}ToTerraform))(${varReference}),`
        );
        break;
      case type.isStringList || type.isNumberList || type.isBooleanList:
        this.code.line(
          `${
            att.terraformName
          }: ${defaultCheck}cdktf.listMapper(cdktf.${downcaseFirst(
            type.innerType
          )}ToTerraform)(${varReference}),`
        );
        break;
      case type.isList && !type.isSingleItem:
        this.code.line(
          `${
            att.terraformName
          }: ${defaultCheck}cdktf.listMapper(${downcaseFirst(
            type.innerType
          )}ToTerraform)(${varReference}),`
        );
        break;
      case type.isMap:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.hashMapper(cdktf.${att.mapType}ToTerraform)(${varReference}),`
        );
        break;
      case type.isString:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.stringToTerraform(${varReference}),`
        );
        break;
      case type.isNumber:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.numberToTerraform(${varReference}),`
        );
        break;
      case type.isBoolean:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.booleanToTerraform(${varReference}),`
        );
        break;
      case !isStruct && att.getterType._type === "stored_class":
        this.code.line(
          `${att.terraformName}: ${defaultCheck}${downcaseFirst(
            type.name
          )}ToTerraform(${varReference}.internalValue),`
        );
        break;
      default:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}${downcaseFirst(
            type.name
          )}ToTerraform(${varReference}),`
        );
        break;
    }
  }
}
