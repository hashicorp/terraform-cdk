import { CodeMaker } from "codemaker";
import { AttributeModel } from "../models";
import { CUSTOM_DEFAULTS } from "../custom-defaults";
import { downcaseFirst } from "../../../util";

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
    const name = isStruct ? att.name : att.storageName;
    const varReference = `${context}.${name}`;

    if (att.isProvider) {
      this.code.line(
        `${
          att.terraformName
        }: ${varReference} instanceof cdktf.TerraformAttribute ? ${varReference}.toTerraform() : ${this.getToTerraform(
          att,
          varReference
        )},`
      );
    } else {
      this.code.line(`${att.terraformName}: ${varReference}.toTerraform(),`);
    }
  }

  private getToTerraform(att: AttributeModel, varReference: string) {
    const type = att.type;

    switch (true) {
      case type.isList && type.isMap:
        return `cdktf.listMapper(cdktf.hashMapper(cdktf.${this.determineMapType(
          att
        )}ToTerraform))(${varReference})`;
      case type.isStringList || type.isNumberList || type.isBooleanList:
        return `cdktf.listMapper(cdktf.${downcaseFirst(
          type.innerType
        )}ToTerraform)(${varReference})`;
      case type.isList:
        return `cdktf.listMapper(${downcaseFirst(
          type.innerType
        )}ToTerraform)(${varReference})`;
      case type.isMap:
        return `cdktf.hashMapper(cdktf.${this.determineMapType(
          att
        )}ToTerraform)(${varReference})`;
      case type.isString:
        return `cdktf.stringToTerraform(${varReference})`;
      case type.isNumber:
        return `cdktf.numberToTerraform(${varReference})`;
      case type.isBoolean:
        return `cdktf.booleanToTerraform(${varReference})`;
      default:
        return `${downcaseFirst(type.name)}ToTerraform(${varReference})`;
    }
  }
}
