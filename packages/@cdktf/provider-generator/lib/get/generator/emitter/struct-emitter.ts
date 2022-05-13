import { CodeMaker } from "codemaker";
import { ResourceModel, Struct, ConfigStruct } from "../models";
import { AttributesEmitter } from "./attributes-emitter";
import { downcaseFirst } from "../../../util";
import * as path from "path";
import { STRUCT_SHARDING_THRESHOLD } from "../models/resource-model";
import { AttributeModel } from "../models/attribute-model";
export class StructEmitter {
  attributesEmitter: AttributesEmitter;

  constructor(private readonly code: CodeMaker) {
    this.attributesEmitter = new AttributesEmitter(this.code);
  }

  public emit(resource: ResourceModel) {
    if (resource.structsRequireSharding) {
      this.emitNamespacedStructs(resource);
    } else {
      this.emitStructs(resource);
    }
  }

  // Due to https://github.com/hashicorp/terraform-plugin-sdk/commit/2387eb85e32c064b4a62718c9f5c80bf00dc7fb9 all
  // resources from providers using the old SDK have the id field by default
  // We have no way to distinguish them through the provider schema, so a word of warning for our users
  private warnAboutIdField(att: AttributeModel) {
    if (att.name === "id") {
      this.code.line(`*`);
      this.code.line(
        `* Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.`
      );
      this.code.line(
        `* If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.`
      );
    }
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
        this.warnAboutIdField(att);
        this.code.line(`*/`);
      } else {
        this.code.line(`/**`);
        this.code.line(
          `* Docs at Terraform Registry: {@link ${resource.linkToDocs}#${att.terraformName} ${resource.className}#${att.terraformName}}`
        );
        this.warnAboutIdField(att);
        this.code.line(`*/`);
      }

      this.code.line(`readonly ${att.typeDefinition};`);
    }
    this.code.closeBlock();

    if (!(struct instanceof ConfigStruct)) {
      this.emitToTerraformFunction(struct);
    }
  }

  private emitStructs(resource: ResourceModel) {
    resource.structs.forEach((struct) => {
      if (struct instanceof ConfigStruct) {
        this.emitInterface(resource, struct);
      } else {
        // We use the interface here for the configuration / inputs of a resource / nested block
        this.emitInterface(resource, struct);
        // And we use the class for the attributes / outputs of a resource / nested block
        if (!struct.isProvider) {
          this.emitClass(struct);
        }
      }
    });
  }

  private emitNamespacedStructs(resource: ResourceModel) {
    // iterate over all structs in batches of 400 to avoid too many exports (> 1200)
    const structImports: Record<string, string> = {};

    // drop configStruct from resource.structs to avoid double import
    const structsWithoutConfigStruct = resource.structs.slice(1);

    const structSplits: Struct[][] = [[]];
    const splitCounts: number[] = [0];
    structsWithoutConfigStruct.forEach((struct) => {
      if (
        splitCounts[splitCounts.length - 1] + struct.exportCount <=
        STRUCT_SHARDING_THRESHOLD
      ) {
        structSplits[structSplits.length - 1].push(struct);
        splitCounts[splitCounts.length - 1] += struct.exportCount;
      } else {
        structSplits.push([struct]);
        splitCounts.push(struct.exportCount);
      }
    });

    const structPaths = [];
    for (let i = 0; i < structSplits.length; i++) {
      const structsToImport: Record<string, string[]> = {};
      const structs = structSplits[i];
      const structFilename = `structs${i * STRUCT_SHARDING_THRESHOLD}.ts`;
      structPaths.push(structFilename);

      // find all structs that need to be imported in this file
      structs.forEach((struct) => {
        struct.attributes.forEach((att) => {
          const structTypeName = att.type.typeName;
          const fileToImport = structImports[structTypeName];

          if (fileToImport) {
            const attTypeStruct = att.type.struct;
            if (!attTypeStruct)
              throw new Error(`${structTypeName} is not a struct`);

            structsToImport[fileToImport] ??
              (structsToImport[fileToImport] = []);

            const attReferences = att.getReferencedTypes(
              struct instanceof ConfigStruct
            );
            if (attReferences) {
              structsToImport[fileToImport].push(...attReferences);
            }
          }
        });
      });

      // associate current structs batch with the file it will be written to
      // to find it in subsequent files for importing
      structs.map((struct) => (structImports[struct.name] = structFilename));

      const namespacedFilePath = path.join(
        resource.structsFolderPath,
        structFilename
      );

      this.code.openFile(namespacedFilePath);
      // the structs only makes use of cdktf not constructs
      this.code.line(`import * as cdktf from 'cdktf';`);
      Object.entries(structsToImport).forEach(([fileToImport, structs]) => {
        this.code.line(
          `import { ${structs.join(",\n")} } from './${path.basename(
            fileToImport,
            ".ts"
          )}'`
        );
      });

      structs.forEach((struct) => {
        if (struct instanceof ConfigStruct) {
          this.emitInterface(resource, struct);
        } else {
          // We use the interface here for the configuration / inputs of a resource / nested block
          this.emitInterface(resource, struct);
          // And we use the class for the attributes / outputs of a resource / nested block
          if (!struct.isProvider) {
            this.emitClass(struct);
          }
        }
      });
      this.code.closeFile(namespacedFilePath);
    }

    // emit the index file that exports all the struct files we've just generated
    const indexFilePath = path.join(resource.structsFolderPath, "index.ts");

    this.code.openFile(indexFilePath);
    structPaths.forEach((structPath) => {
      this.code.line(`export * from './${path.basename(structPath, ".ts")}'`);
    });
    this.code.closeFile(indexFilePath);
  }

  private emitClass(struct: Struct) {
    this.code.openBlock(
      `export class ${struct.outputReferenceName} extends cdktf.ComplexObject`
    );

    this.code.line("private isEmptyObject = false;");
    if (!struct.isClass) {
      this.code.line("private resolvableValue?: cdktf.IResolvable;");
    }
    this.code.line();

    this.code.line(`/**`);
    this.code.line(`* @param terraformResource The parent resource`);
    this.code.line(
      `* @param terraformAttribute The attribute on the parent resource this class is referencing`
    );
    if (struct.isSingleItem) {
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string)`
      );
      this.code.line(`super(terraformResource, terraformAttribute, false, 0);`);
      this.code.closeBlock();
    } else if (
      struct.nestingMode === "single" ||
      struct.nestingMode === "object"
    ) {
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string)`
      );
      this.code.line(`super(terraformResource, terraformAttribute, false);`);
      this.code.closeBlock();
    } else if (struct.nestingMode === "map") {
      this.code.line(
        `* @param complexObjectKey the key of this item in the map`
      );
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)`
      );
      this.code.line(
        `super(terraformResource, terraformAttribute, false, complexObjectKey);`
      );
      this.code.closeBlock();
    } else {
      this.code.line(
        `* @param complexObjectIndex the index of this item in the list`
      );
      this.code.line(
        `* @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`
      );
      this.code.line(`*/`);
      this.code.openBlock(
        `public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)`
      );
      this.code.line(
        `super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);`
      );
      this.code.closeBlock();
    }

    this.code.line();
    this.emitInternalValueGetter(struct);
    this.code.line();
    this.emitInternalValueSetter(struct);

    for (const att of struct.attributes) {
      this.attributesEmitter.emit(
        att,
        this.attributesEmitter.needsResetEscape(att, struct.attributes),
        this.attributesEmitter.needsInputEscape(att, struct.attributes)
      );
    }

    this.code.closeBlock();

    if (
      !struct.isSingleItem &&
      (struct.nestingMode === "list" || struct.nestingMode === "set")
    ) {
      this.emitComplexListClass(struct);
    } else if (struct.nestingMode === "map") {
      this.emitComplexMapClass(struct);
    }
  }

  private emitComplexListClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `export class ${struct.listName} extends cdktf.ComplexList`
    );

    if (struct.assignable) {
      this.code.line(
        `public internalValue? : ${struct.name}[] | cdktf.IResolvable`
      );
    }

    this.code.line();
    this.code.line(`/**`);
    this.code.line(`* @param terraformResource The parent resource`);
    this.code.line(
      `* @param terraformAttribute The attribute on the parent resource this class is referencing`
    );
    this.code.line(
      `* @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)`
    );
    this.code.line(`*/`);
    this.code.openBlock(
      `constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean)`
    );
    this.code.line(`super(terraformResource, terraformAttribute, wrapsSet)`);
    this.code.closeBlock();

    this.code.line();
    this.code.line(`/**`);
    this.code.line(`* @param index the index of the item to return`);
    this.code.line(`*/`);
    this.code.openBlock(
      `public get(index: number): ${struct.outputReferenceName}`
    );
    this.code.line(
      `return new ${struct.outputReferenceName}(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);`
    );
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitComplexMapClass(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `export class ${struct.mapName} extends cdktf.ComplexMap`
    );

    if (struct.assignable) {
      this.code.line(
        `public internalValue? : { [key: string]: ${struct.name} } | cdktf.IResolvable`
      );
    }

    this.code.line();
    this.code.line(`/**`);
    this.code.line(`* @param terraformResource The parent resource`);
    this.code.line(
      `* @param terraformAttribute The attribute on the parent resource this class is referencing`
    );
    this.code.line(`*/`);
    this.code.openBlock(
      `constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string)`
    );
    this.code.line(`super(terraformResource, terraformAttribute)`);
    this.code.closeBlock();

    this.code.line();
    this.code.line(`/**`);
    this.code.line(`* @param key the key of the item to return`);
    this.code.line(`*/`);
    this.code.openBlock(
      `public get(key: string): ${struct.outputReferenceName}`
    );
    this.code.line(
      `return new ${struct.outputReferenceName}(this.terraformResource, this.terraformAttribute, key);`
    );
    this.code.closeBlock();

    this.code.closeBlock();
  }

  private emitInternalValueGetter(struct: Struct) {
    this.code.openBlock(
      `public get internalValue(): ${struct.name}${
        !struct.isClass ? " | cdktf.IResolvable" : ""
      } | undefined`
    );

    if (!struct.isClass) {
      this.code.openBlock("if (this.resolvableValue)");
      this.code.line("return this.resolvableValue;");
      this.code.closeBlock();
    }

    this.code.line("let hasAnyValues = this.isEmptyObject;");
    this.code.line("const internalValueResult: any = {};");
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.getterType._type === "stored_class") {
          this.code.openBlock(
            `if (this.${att.storageName}?.internalValue !== undefined)`
          );
        } else {
          this.code.openBlock(`if (this.${att.storageName} !== undefined)`);
        }
        this.code.line("hasAnyValues = true;");
        if (att.getterType._type === "stored_class") {
          this.code.line(
            `internalValueResult.${att.name} = this.${att.storageName}?.internalValue;`
          );
        } else {
          this.code.line(
            `internalValueResult.${att.name} = this.${att.storageName};`
          );
        }
        this.code.closeBlock();
      }
    }
    this.code.line("return hasAnyValues ? internalValueResult : undefined;");
    this.code.closeBlock();
  }

  private emitInternalValueSetter(struct: Struct) {
    this.code.openBlock(
      `public set internalValue(value: ${struct.name}${
        !struct.isClass ? " | cdktf.IResolvable" : ""
      } | undefined)`
    );

    this.code.openBlock("if (value === undefined)");
    this.code.line("this.isEmptyObject = false;");
    if (!struct.isClass) {
      this.code.line("this.resolvableValue = undefined;");
    }
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.setterType._type === "stored_class") {
          this.code.line(`this.${att.storageName}.internalValue = undefined;`);
        } else if (att.setterType._type !== "none") {
          this.code.line(`this.${att.storageName} = undefined;`);
        }
      }
    }
    this.code.closeBlock();
    if (!struct.isClass) {
      this.code.openBlock("else if (cdktf.Tokenization.isResolvable(value))");
      this.code.line("this.isEmptyObject = false;");
      this.code.line("this.resolvableValue = value;");
      this.code.closeBlock();
    }
    this.code.openBlock("else");
    this.code.line("this.isEmptyObject = Object.keys(value).length === 0;");
    if (!struct.isClass) {
      this.code.line("this.resolvableValue = undefined;");
    }
    for (const att of struct.attributes) {
      if (att.isStored) {
        if (att.setterType._type === "stored_class") {
          this.code.line(
            `this.${att.storageName}.internalValue = value.${att.name};`
          );
        } else if (att.setterType._type !== "none") {
          this.code.line(`this.${att.storageName} = value.${att.name};`);
        }
      }
    }
    this.code.closeBlock();
    this.code.closeBlock();
  }

  private emitToTerraformFunction(struct: Struct) {
    this.code.line();
    this.code.openBlock(
      `export function ${downcaseFirst(struct.name)}ToTerraform(struct?: ${
        struct.isSingleItem && !struct.isProvider
          ? `${struct.name}OutputReference | `
          : ""
      }${struct.name}${!struct.isClass ? " | cdktf.IResolvable" : ""}): any`
    );
    this.code.line(
      `if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }`
    );
    this.code.openBlock(`if (cdktf.isComplexElement(struct))`);
    this.code.line(
      `throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");`
    );
    this.code.closeBlock();

    this.code.openBlock("return");
    for (const att of struct.assignableAttributes) {
      this.attributesEmitter.emitToTerraform(att, true);
    }
    this.code.closeBlock(";");
    this.code.closeBlock();
    this.code.line();
  }
}
