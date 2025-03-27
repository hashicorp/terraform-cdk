// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { CodeMaker } from "codemaker";
import { AttributeModel } from "../models";
import { CUSTOM_DEFAULTS } from "../custom-defaults";

function titleCase(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}

export class AttributesEmitter {
  constructor(private code: CodeMaker) {}

  public emit(att: AttributeModel, escapeReset: boolean, escapeInput: boolean) {
    this.code.line();
    this.code.line(
      `// ${att.terraformName} - computed: ${att.computed}, optional: ${att.isOptional}, required: ${att.isRequired}`,
    );

    const isStored = att.isStored;
    const hasResetMethod =
      isStored && !att.isRequired && att.setterType._type !== "none";
    const hasInputMethod = isStored && att.setterType._type !== "none";

    const getterType = att.getterType;

    if (getterType._type === "stored_class") {
      this.code.line(
        `private ${att.storageName} = ${this.storedClassInit(att)};`,
      );
    } else if (isStored) {
      this.code.line(
        `private ${att.storageName}?: ${att.type.inputTypeDefinition}; `,
      );
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
          }`,
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
          `public set ${att.name}(value: ${setterType.type})`,
        );
        this.code.line(`this.${att.storageName} = value;`);
        this.code.closeBlock();
        break;

      case "put":
        this.code.openBlock(
          `public put${titleCase(att.name)}(value: ${setterType.type})`,
        );
        this.code.line(`this.${att.storageName} = value;`);
        this.code.closeBlock();
        break;

      case "stored_class":
        this.code.openBlock(
          `public put${titleCase(att.name)}(value: ${setterType.type})`,
        );
        this.code.line(`this.${att.storageName}.internalValue = value;`);
        this.code.closeBlock();
        break;
    }

    if (hasResetMethod) {
      this.code.openBlock(
        `public ${this.getResetName(att.name, escapeReset)}()`,
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
        `public get ${this.getInputName(att, escapeInput)}()`,
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
    return att.type.getStoredClassInitializer(att.terraformName);
  }

  public determineGetAttCall(att: AttributeModel): string {
    if (att.isProvider) {
      return `this.${att.storageName}`;
    }

    return att.type.getAttributeAccessFunction(att.terraformName);
  }

  public needsInputEscape(
    att: AttributeModel,
    attributes: AttributeModel[],
  ): boolean {
    return (
      attributes.find((a) =>
        a.terraformName.match(`^${att.terraformName}_input$`),
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
    attributes: AttributeModel[],
  ): boolean {
    return (
      attributes.find((a) =>
        a.terraformName.match(`^reset_${att.terraformName}$`),
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

  public emitToHclTerraform(att: AttributeModel, isStruct: boolean) {
    const type = att.type;
    const context = isStruct ? "struct!" : "this";
    const name = isStruct ? att.name : att.storageName;
    const customDefault = CUSTOM_DEFAULTS[att.terraformFullName];

    const varReference = `${context}.${name}${
      !isStruct &&
      type.isComplex &&
      !att.isProvider &&
      (type.struct?.isClass || att.getterType._type === "stored_class")
        ? ".internalValue"
        : ""
    }`;
    const defaultCheck =
      customDefault !== undefined
        ? `${varReference} === undefined ? ${customDefault} : `
        : "";

    const value = `${defaultCheck}${type.toHclTerraformFunction}(${varReference})`;
    const isBlock = att.type.isComplex;
    const tt = att.type.typeModelType;

    this.code.open(`${att.terraformName}: {`);
    this.code.line(`value: ${value},`);
    this.code.line(`isBlock: ${isBlock},`);
    this.code.line(`type: "${tt}",`);
    this.code.line(`storageClassType: "${att.type.storedClassType}",`);
    this.code.close("},");
  }

  public emitToTerraform(att: AttributeModel, isStruct: boolean) {
    const type = att.type;
    const context = isStruct ? "struct!" : "this";
    const name = isStruct ? att.name : att.storageName;
    const customDefault = CUSTOM_DEFAULTS[att.terraformFullName];

    const varReference = `${context}.${name}${
      !isStruct &&
      type.isComplex &&
      !att.isProvider &&
      (type.struct?.isClass || att.getterType._type === "stored_class")
        ? ".internalValue"
        : ""
    }`;
    const defaultCheck =
      customDefault !== undefined
        ? `${varReference} === undefined ? ${customDefault} : `
        : "";

    this.code.line(
      `${att.terraformName}: ${defaultCheck}${type.toTerraformFunction}(${varReference}),`,
    );
  }
}
