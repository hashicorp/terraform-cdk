import { toCamelCase, toPascalCase, toSnakeCase } from "codemaker";
import {
  Attribute,
  AttributeNestedType,
  AttributeType,
  Block,
  BlockType,
  isAttributeNestedType,
  isNestedTypeAttribute,
  Schema,
} from "./provider-schema";
import {
  ResourceModel,
  AttributeTypeModel,
  Struct,
  Scope,
  AttributeModel,
} from "./models";

const isReservedClassName = (className: string): boolean => {
  return ["string"].includes(className.toLowerCase());
};

class Parser {
  private structs = new Array<Struct>();

  constructor(private classNames: string[]) {}

  private uniqueClassName(className: string): string {
    if (this.classNames.includes(className)) {
      className = `${className}A`;
    }
    this.classNames.push(className);
    return className;
  }

  public resourceFrom(
    provider: string,
    type: string,
    schema: Schema,
    terraformSchemaType: string
  ): ResourceModel {
    let baseName = type;
    if (baseName.startsWith(`${provider}_`)) {
      baseName = baseName.substr(provider.length + 1);
    }

    const isProvider = terraformSchemaType === "provider";
    if (isProvider) {
      baseName = `${provider}_${baseName}`;
      if (!("attributes" in schema.block)) {
        schema.block = { attributes: {}, block_types: {} };
      }
      // somehow missing from provider schema
      schema.block.attributes["alias"] = {
        type: "string",
        description: "Alias name",
        optional: true,
        computed: false,
      };
    }

    if (isReservedClassName(baseName)) {
      baseName = `${baseName}_resource`;
    }

    const className = this.uniqueClassName(toPascalCase(baseName));
    // avoid naming collision - see https://github.com/hashicorp/terraform-cdk/issues/299
    const configStructName = this.uniqueClassName(`${className}Config`);
    const fileName =
      baseName === "index"
        ? "index-resource.ts"
        : `${toSnakeCase(baseName).replace(/_/g, "-")}.ts`;
    const filePath = `providers/${toSnakeCase(provider)}/${fileName}`;
    const attributes = this.renderAttributesForBlock(
      new Scope({
        name: baseName,
        isProvider,
        parent: isProvider
          ? undefined
          : new Scope({ name: provider, isProvider: true }),
      }),
      schema.block
    );

    const resourceModel = new ResourceModel({
      terraformType: type,
      baseName,
      fileName,
      filePath,
      className,
      schema,
      provider,
      attributes,
      terraformSchemaType,
      structs: this.structs,
      configStructName,
    });

    return resourceModel;
  }

  private renderAttributeType(
    scope: Scope[],
    attributeType: AttributeType | AttributeNestedType,
    parentKind?: string
  ): AttributeTypeModel {
    const parent = scope[scope.length - 1];
    const level = scope.length;
    const isComputed = !!scope.find((e) => e.isComputed === true);
    const isOptional = parent.isOptional;
    const isRequired = parent.isRequired;

    if (typeof attributeType === "string") {
      switch (attributeType) {
        case "bool":
          return new AttributeTypeModel("boolean", {
            isComputed,
            isOptional,
            isRequired,
            level,
          });
        case "string":
          return new AttributeTypeModel("string", {
            isComputed,
            isOptional,
            isRequired,
            level,
          });
        case "number":
          return new AttributeTypeModel("number", {
            isComputed,
            isOptional,
            isRequired,
            level,
          });
        case "dynamic":
          return new AttributeTypeModel("any", {
            isComputed,
            isOptional,
            isRequired,
            level,
            isMap: true,
          });
        default:
          throw new Error(`invalid primitive type ${attributeType}`);
      }
    }

    if (Array.isArray(attributeType)) {
      if (attributeType.length !== 2) {
        throw new Error(`unexpected array`);
      }

      const [kind, type] = attributeType;

      if (kind === "set" || kind === "list") {
        const attrType = this.renderAttributeType(
          scope,
          type as AttributeType,
          kind
        );
        attrType.isList = kind === "list";
        attrType.isSet = kind === "set";
        attrType.isComputed = isComputed;
        attrType.isOptional = isOptional;
        attrType.isRequired = isRequired;
        attrType.level = level;
        return attrType;
      }

      if (kind === "map") {
        const valueType = this.renderAttributeType(
          scope,
          type as AttributeType,
          kind
        );
        valueType.isMap = true;
        valueType.isComputed = isComputed;
        valueType.isOptional = isOptional;
        valueType.isRequired = isRequired;
        valueType.level = level;
        return valueType;
      }

      if (kind === "object") {
        const objAttributes = type as { [name: string]: AttributeType };
        const attributes: { [name: string]: Attribute } = {};
        for (const [name, type] of Object.entries(objAttributes)) {
          attributes[name] = { type };
        }
        const struct = this.addAnonymousStruct(
          scope,
          attributes,
          parentKind ?? kind
        );
        const model = new AttributeTypeModel(struct.name, {
          struct,
          isComputed,
          isOptional,
          isRequired,
          level,
        });
        return model;
      }
    }

    if (isAttributeNestedType(attributeType)) {
      let isList = undefined;
      let isSet = undefined;
      let isMap = undefined;
      switch (attributeType.nesting_mode) {
        case "list":
          isList = true;
          break;
        case "set":
          isSet = true;
          break;
        case "map":
          isMap = true;
          break;
        case "single":
          break;
        default: {
          throw new Error(
            `nested_type with nesting_mode "${
              attributeType.nesting_mode
            }" not supported (attribute scope: ${scope
              .map((s) => s.fullName)
              .join(",")}`
          );
        }
      }
      const struct = this.addAnonymousStruct(
        scope,
        attributeType.attributes,
        attributeType.nesting_mode
      );
      const model = new AttributeTypeModel(struct.name, {
        struct,
        isComputed,
        isOptional,
        isRequired,
        level,
        isList,
        isSet,
        isMap,
        isNested: true,
      });
      return model;
    }

    throw new Error(`unknown type ${JSON.stringify(attributeType)}`);
  }

  public renderAttributesForBlock(parentType: Scope, block: Block) {
    const attributes = new Array<AttributeModel>();

    for (const [terraformAttributeName, att] of Object.entries(
      block.attributes || {}
    )) {
      const type = this.renderAttributeType(
        [
          parentType,
          new Scope({
            name: terraformAttributeName,
            parent: parentType,
            isProvider: parentType.isProvider,
            isComputed: !!att.computed,
            isOptional: !!att.optional,
            isRequired: !!att.required,
            isNestedType: isNestedTypeAttribute(att),
          }),
        ],
        att.type || att.nested_type
      );
      const name = toCamelCase(terraformAttributeName);

      attributes.push(
        new AttributeModel({
          terraformFullName: parentType.fullName(terraformAttributeName),
          description: att.description,
          name,
          storageName: `_${name}`,
          computed: !!att.computed,
          optional: !!att.optional,
          terraformName: terraformAttributeName,
          type,
          provider: parentType.isProvider,
          required: !!att.required,
        })
      );
    }

    for (const [blockTypeName, blockType] of Object.entries(
      block.block_types || {}
    )) {
      // create a struct for this block
      const blockAttributes = this.renderAttributesForBlock(
        new Scope({
          name: `${parentType.name}_${blockTypeName}`,
          parent: parentType,
          isProvider: parentType.isProvider,
          inBlockType: true,
        }),
        blockType.block
      );
      const blockStruct = this.addStruct(
        [
          parentType,
          new Scope({
            name: blockTypeName,
            parent: parentType,
            isProvider: parentType.isProvider,
          }),
        ],
        blockAttributes,
        blockType.nesting_mode,
        (blockType.nesting_mode === "list" ||
          blockType.nesting_mode === "set") &&
          blockType.max_items === 1
      );

      // define the attribute
      attributes.push(
        attributeForBlockType(
          blockTypeName,
          blockType,
          blockStruct,
          parentType.isProvider,
          parentType
        )
      );
    }

    return attributes;

    function attributeForBlockType(
      terraformName: string,
      blockType: BlockType,
      struct: Struct,
      isProvider: boolean,
      parent: Scope
    ): AttributeModel {
      const name = toCamelCase(terraformName);
      let optional: boolean;
      let required: boolean;
      switch (blockType.nesting_mode) {
        case "single":
          optional = !struct.attributes.some((x) => !x.optional);
          required = !struct.attributes.some((x) => !x.required);
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, {
              struct,
              isOptional: optional,
              isRequired: required,
              isSingleItem: true,
              isBlock: true,
            }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional,
            computed: false,
            provider: isProvider,
            required,
          });

        case "map":
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, {
              struct,
              isMap: true,
              isBlock: true,
            }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional: false,
            computed: false,
            provider: isProvider,
            required: false,
          });

        case "list":
        case "set":
          optional =
            blockType.min_items === undefined ? true : blockType.min_items < 1;
          required =
            blockType.min_items === undefined ? false : blockType.min_items > 0;
          return new AttributeModel({
            name,
            terraformName: terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, {
              struct,
              isList: blockType.nesting_mode === "list",
              isSet: blockType.nesting_mode === "set",
              isOptional: optional,
              isRequired: required,
              isSingleItem: blockType.max_items === 1,
              isBlock: true,
            }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional,
            computed: false,
            provider: isProvider,
            required,
          });
      }
    }
  }
  private addAnonymousStruct(
    scope: Scope[],
    attrs: { [name: string]: Attribute },
    nesting_mode: string
  ) {
    const attributes = new Array<AttributeModel>();
    const parent = scope[scope.length - 1];
    for (const [terraformName, att] of Object.entries(attrs)) {
      // nested types support computed, optional and required on attribute level
      // if parent is computed, child always is computed as well
      const computed =
        !!parent.isComputed || (parent.isNestedType && !!att.computed);
      const optional = parent.isNestedType
        ? !!att.optional
        : !!parent.isOptional;
      const required = parent.isNestedType
        ? !!att.required
        : !!parent.isRequired;
      const name = toCamelCase(terraformName);
      attributes.push(
        new AttributeModel({
          name,
          storageName: `_${name}`,
          computed: computed,
          description: att.description,
          optional: optional,
          terraformName,
          terraformFullName: parent.fullName(terraformName),
          type: this.renderAttributeType(
            [
              ...scope,
              new Scope({
                name: terraformName,
                parent,
                isProvider: parent.isProvider,
                isComputed: computed,
                isOptional: optional,
                isRequired: required,
                isNestedType: parent.isNestedType,
              }),
            ],
            att.type || att.nested_type
          ),
          provider: parent.isProvider,
          required: required,
        })
      );
    }

    return this.addStruct(scope, attributes, nesting_mode);
  }

  private addStruct(
    scope: Scope[],
    attributes: AttributeModel[],
    nesting_mode: string,
    isSingleItem = false
  ) {
    const name = this.uniqueClassName(
      toPascalCase(scope.map((x) => toSnakeCase(x.name)).join("_"))
    );
    const parent = scope[scope.length - 1];
    // blockType.nesting_mode => list/set & blockType.max_items === 1,
    const isClass = (parent.isComputed && !parent.isOptional) || isSingleItem;
    const isAnonymous = true;
    const s = new Struct(
      name,
      attributes,
      isClass,
      isAnonymous,
      isSingleItem,
      nesting_mode
    );
    this.structs.push(s);
    return s;
  }
}

export class ResourceParser {
  private uniqueClassnames: string[] = [];
  private resources: Record<string, ResourceModel> = {};

  public parse(
    provider: string,
    type: string,
    schema: Schema,
    terraformType: string
  ): ResourceModel {
    if (this.resources[type]) {
      return this.resources[type];
    }

    const parser = new Parser(this.uniqueClassnames);
    const resource = parser.resourceFrom(provider, type, schema, terraformType);
    this.resources[type] = resource;
    return resource;
  }

  // Used by convert to determine the right name for a class
  public getClassNameForResource(terraformType: string) {
    const resource = this.resources[terraformType];
    return resource ? resource.className : "";
  }
}
