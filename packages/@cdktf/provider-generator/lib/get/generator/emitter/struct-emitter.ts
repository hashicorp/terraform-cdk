import { CodeMaker } from "codemaker";
import { ResourceModel, Struct, ConfigStruct } from "../models";
import { AttributesEmitter } from "./attributes-emitter";
import { downcaseFirst } from "../../../util";
import * as path from "path";
export class StructEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  public emit(resource: ResourceModel) {
    // iterate over all structs in batches of 400 to avoid too many exports (> 1200)

    const structImports: Record<string, string> = {};
    const structNamespaceName = `${path.basename(
      resource.fileName,
      ".ts"
    )}-structs`;

    // drop first struct from resource.structs to avoid double import
    const structsWithoutConfigStruct = resource.structs.slice(1);

    const structPaths = [];
    for (let i = 0; i < structsWithoutConfigStruct.length; i += 400) {
      const structsToImport: Record<string, string[]> = {};
      const classesToImport: Record<string, string[]> = {};

      const structs = structsWithoutConfigStruct.slice(i, i + 400);
      const filePath = resource.filePath.split("/").slice(0, -1).join("/");
      const structFilename = `structs${i}.ts`;
      structPaths.push(structFilename);
      const namespacedFilePath = path.join(
        filePath,
        "wafv2",
        structNamespaceName,
        structFilename
      );

      structs.forEach((struct) => {
        struct.attributes.forEach((att) => {
          const structTypeName = att.type.typeName;
          const fileToImport = structImports[structTypeName];

          if (fileToImport) {
            structsToImport[fileToImport] ??
              (structsToImport[fileToImport] = []);
            structsToImport[fileToImport].push(structTypeName);

            if (
              structTypeName ===
              "Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement"
            ) {
              console.log({ doesntwork: JSON.stringify(att, null, 2) });
            }

            if (
              structTypeName ===
              "Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod"
            ) {
              console.log({ doeswork: JSON.stringify(att, null, 2) });
            }

            if (att.type.struct?.isClass && struct.isClass) {
              classesToImport[fileToImport] ??
                (classesToImport[fileToImport] = []);
              classesToImport[fileToImport].push(
                `${structTypeName}OutputReference`
              );
            }
          }
        });
      });

      structs.map((struct) => (structImports[struct.name] = structFilename));

      this.code.openFile(namespacedFilePath);

      this.code.line(`import * as cdktf from 'cdktf';`);
      Object.entries(structsToImport).forEach(([fileToImport, structs]) => {
        const structMapper = structs.map(
          (struct) => `${downcaseFirst(struct)}ToTerraform`
        );

        this.code.line(
          `import { ${structs.join(",\n")} } from './${path.basename(
            fileToImport,
            ".ts"
          )}'`
        );
        this.code.line(
          `import { ${structMapper.join(",\n")} } from './${path.basename(
            fileToImport,
            ".ts"
          )}'`
        );
      });

      Object.entries(classesToImport).forEach(([fileToImport, classes]) => {
        this.code.line(
          `import { ${classes.join(",\n")} } from './${path.basename(
            fileToImport,
            ".ts"
          )}'`
        );
      });

      structs.forEach((struct) => {
        if (struct.isSingleItem) {
          // We use the interface here for the configuration / inputs of a resource / nested block
          this.emitInterface(resource, struct);
          // And we use the class for the attributes / outputs of a resource / nested block
          this.emitClass(struct, `${struct.name}OutputReference`);
        } else if (struct.isClass) {
          this.emitClass(struct);
        } else {
          this.emitInterface(resource, struct);
        }
      });
      this.code.closeFile(namespacedFilePath);
    }

    const indexFilePath = path.join(
      resource.filePath.split("/").slice(0, -1).join("/"),
      "wafv2",
      structNamespaceName,
      "index.ts"
    );

    this.code.openFile(indexFilePath);
    structPaths.forEach((structPath) => {
      this.code.line(`export * from './${path.basename(structPath, ".ts")}'`);
    });
    this.code.closeFile(indexFilePath);
  }

  public emitInterface(
    resource: ResourceModel,
    struct: Struct,
    name = struct.name
  ) {
    if (resource.isProvider) {
      this.code.openBlock(`export interface ${name}`);
    } else {
      this.code.openBlock(`export interface ${name}${struct.extends}`);
    }

    for (const att of struct.assignableAttributes) {
      if (att.description) {
        this.code.line(`/**`);
        this.code.line(`* ${att.description}`);
        this.code.line(`* `);
        this.code.line(
          `* Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`
        );
        this.code.line(`*/`);
      } else {
        this.code.line(`/**`);
        this.code.line(
          `* Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`
        );
        this.code.line(`*/`);
      }

      this.code.line(`readonly ${att.typeDefinition};`);
    }
    this.code.closeBlock();

    if (!(struct instanceof ConfigStruct)) {
      this.emitToTerraformFunction(struct);
    }
  }

  private emitClass(struct: Struct, name = struct.name) {
    this.code.openBlock(
      `export class ${name} extends ${
        struct.isSingleItem
          ? "cdktf.ComplexObject"
          : "cdktf.ComplexComputedList"
      }`
    );

    if (struct.isSingleItem) {
      this.code.line(`/**`);
      this.code.line(`* @param terraformResource The parent resource`);
      this.code.line(
        `* @param terraformAttribute The attribute on the parent resource this class is referencing`
      );
      this.code.line(
        `* @param isSingleItem True if this is a block, false if it's a list`
      );
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean)`
      );
      this.code.line(
        `super(terraformResource, terraformAttribute, isSingleItem);`
      );
      this.code.closeBlock();
    }

    for (const att of struct.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, struct.attributes),
        this.attributesEmitter.needsInputEscape(att, struct.attributes)
      );
    }

    this.code.closeBlock();
  }

  private emitToTerraformFunction(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `export function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${
        struct.isSingleItem ? `${struct.name}OutputReference | ` : ""
      }${struct.name}): any`
    );
    this.code.line(`if (!cdktf.canInspect(struct)) { return struct; }`);
    this.code.openBlock(`if (cdktf.isComplexElement(struct))`);
    this.code.line(
      `throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");`
    );
    this.code.closeBlock();

    this.code.openBlock("return");
    for (const att of struct.isClass
      ? struct.attributes
      : struct.assignableAttributes) {
      if (!att.isConfigIgnored) {
        this.attributesEmitter.emitToTerraform(att, true);
      }
    }
    this.code.closeBlock(";");
    this.code.closeBlock();
    this.code.line();
  }
}
