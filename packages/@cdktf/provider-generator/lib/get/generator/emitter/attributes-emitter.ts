import { CodeMaker } from "codemaker";
import { AttributeModel } from "../models";
import { downcaseFirst, uppercaseFirst } from "../../../util";
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
    const hasResetMethod =
      isStored && !att.isRequired && att.setterType._type !== "none";
    const hasInputMethod = isStored && att.setterType._type !== "none";

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
        if ((att.type.isList || att.type.isSet) && !att.type.isSingleItem) {
          this.code.line(`this.${att.storageName}[0].internalValue = value;`);
        } else {
          this.code.line(`this.${att.storageName}.internalValue = value;`);
        }
        this.code.closeBlock();
        break;
    }

    if (hasResetMethod) {
      this.code.openBlock(
        `public ${this.getResetName(att.name, escapeReset)}()`
      );

      if (setterType._type === "stored_class") {
        if ((att.type.isList || att.type.isSet) && !att.type.isSingleItem) {
          this.code.line(
            `this.${att.storageName}[0].internalValue = undefined;`
          );
        } else {
          this.code.line(`this.${att.storageName}.internalValue = undefined;`);
        }
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

  // returns an invocation of a stored class, e.g. 'new DeplotmentMetadataOutputReference(this, "metadata")'
  private storedClassInit(att: AttributeModel) {
    if (att.type.isSingleItem) {
      return `new ${att.type.name}OutputReference(this, "${att.terraformName}")`;
    } else {
      // list
      return `new ${att.type.name}List(this, "${att.terraformName}", ${att.type.isSet})`;
    }
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
    if (type.isNumberList) {
      return `this.getNumberListAttribute('${att.terraformName}')`;
    }
    if (type.isStringSet) {
      return `cdktf.Fn.tolist(this.getListAttribute('${att.terraformName}'))`;
    }
    if (type.isNumberSet) {
      return `cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('${att.terraformName}')))`;
    }
    if (type.isNumber) {
      return `this.getNumberAttribute('${att.terraformName}')`;
    }
    if (type.isBoolean) {
      return `this.getBooleanAttribute('${att.terraformName}')`;
    }
    if (type.isMap) {
      return `this.get${uppercaseFirst(att.mapType)}MapAttribute('${
        att.terraformName
      }')`;
    }
    if (process.env.DEBUG) {
      console.error(
        `The attribute ${JSON.stringify(att)} isn't implemented yet`
      );
    }

    this.code.line(`// Getting the computed value is not yet implemented`);
    if (type.isSet) {
      // Token.asAny is required because tolist returns an Array encoded token which the listMapper
      // would try to map over when this is passed to another resource. With Token.asAny() it is left
      // as is by the listMapper and is later properly resolved to a reference
      // (this only works in TypeScript currently, same as for referencing lists
      // [see "interpolationForAttribute(...)" further below])
      return `cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('${att.terraformName}')))`;
    }
    return `this.interpolationForAttribute('${att.terraformName}')`;
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
      case type.isSet && type.isMap:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.hashMapper(cdktf.${att.mapType}ToTerraform))(${varReference}),`
        );
        break;
      case type.isList && type.isMap:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}cdktf.listMapper(cdktf.hashMapper(cdktf.${att.mapType}ToTerraform))(${varReference}),`
        );
        break;
      case type.isStringSet || type.isNumberSet || type.isBooleanSet:
        this.code.line(
          `${
            att.terraformName
          }: ${defaultCheck}cdktf.listMapper(cdktf.${downcaseFirst(
            type.innerType
          )}ToTerraform)(${varReference}),`
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
      case type.isSet && !type.isSingleItem:
        this.code.line(
          `${
            att.terraformName
          }: ${defaultCheck}cdktf.listMapper(${downcaseFirst(
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
        const index =
          (att.type.isList || att.type.isSet) && !att.type.isSingleItem
            ? "[0]"
            : "";
        this.code.line(
          `${att.terraformName}: ${defaultCheck}${downcaseFirst(
            type.name
          )}ToTerraform(${varReference}${index}.internalValue),`
        );
        break;
      case type.isComplex && !type.struct?.isClass && !type.isSingleItem:
        this.code.line(
          `${att.terraformName}: ${defaultCheck}${downcaseFirst(
            type.struct!.name
          )}ToTerraform(${varReference}),`
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
