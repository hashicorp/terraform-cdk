// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
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
} from "@cdktf/commons";
import { ProviderName, FQPN, parseFQPN } from "@cdktf/provider-schema";
import {
  ResourceModel,
  AttributeTypeModel,
  Struct,
  Scope,
  AttributeModel,
  SimpleAttributeTypeModel,
  ListAttributeTypeModel,
  SetAttributeTypeModel,
  MapAttributeTypeModel,
  StructAttributeTypeModel,
  SkippedAttributeTypeModel,
} from "./models";
import { detectAttributeLoops } from "./loop-detection";
import { shouldSkipAttribute } from "./skipped-attributes";
import { Errors } from "@cdktf/commons";

// Can't be used in expressions like "export * as <keyword> from ... "
// filtered from all keywords from: https://github.com/microsoft/TypeScript/blob/503604c884bd0557c851b11b699ef98cdb65b93b/src/compiler/types.ts#L114-L197
const RESERVED_KEYWORDS_FOR_NAMESPACES = [
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "await",
];

const COLLIDING_NAMESPACE_NAMES = [
  // e.g. hashicorp/consul – collides with the LICENSE file on case-insensitive filesystems in the Go package (#2627)
  "license",
];

const isReservedClassOrNamespaceName = (className: string): boolean => {
  return [
    "string",
    "object",
    "function",
    ...RESERVED_KEYWORDS_FOR_NAMESPACES,
    ...COLLIDING_NAMESPACE_NAMES,
  ].includes(className.toLowerCase());
};

const isReservedStructClassName = (className: string): boolean => {
  return className.toLowerCase().endsWith("list");
};

const getFileName = (provider: ProviderName, baseName: string): string => {
  if (baseName === "index") {
    return "index-resource/index.ts";
  }

  if (baseName === `${provider}_provider`) {
    return "provider/index.ts";
  }

  return `${toSnakeCase(baseName).replace(/_/g, "-")}/index.ts`;
};

export function sanitizeClassOrNamespaceName(
  baseName: string,
  isProvider = false
) {
  const resourceIsNamedProvider = !isProvider && baseName === "provider";

  if (isReservedClassOrNamespaceName(baseName) || resourceIsNamedProvider) {
    return `${baseName}_resource`;
  } else {
    return baseName;
  }
}

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
    fqpn: FQPN,
    type: string,
    schema: Schema,
    terraformSchemaType: string
  ): ResourceModel {
    const provider = parseFQPN(fqpn).name;
    let baseName = type;
    if (baseName.startsWith(`${provider}_`)) {
      baseName = baseName.substr(provider.length + 1);
    }

    const isProvider = terraformSchemaType === "provider";
    if (isProvider) {
      baseName = `${provider}_${baseName}`;
      if (!("attributes" in schema.block)) {
        schema.block = {
          attributes: {},
          block_types: (schema.block as Block).block_types || {},
        };
      }
      // somehow missing from provider schema
      schema.block.attributes["alias"] = {
        type: "string",
        description: "Alias name",
        optional: true,
        computed: false,
      };
    }

    baseName = sanitizeClassOrNamespaceName(baseName, isProvider);

    const className = this.uniqueClassName(toPascalCase(baseName));
    // avoid naming collision - see https://github.com/hashicorp/terraform-cdk/issues/299
    const configStructName = this.uniqueClassName(`${className}Config`);
    const fileName = getFileName(provider, baseName);

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

    function getStructAttribute(
      attributes: AttributeModel[],
      path: string
    ): AttributeModel {
      const [first, ...rest] = path.split(".");
      const attribute = attributes.find((att) => {
        return att.terraformName === first;
      });
      if (!attribute)
        throw new Error(
          `Expected to find recursive attribute at path: ${path}`
        );
      if (!attribute.type.struct)
        throw new Error(
          `Expected to find struct type attribute at path: ${path} but got ${attribute.type.storedClassType}`
        );
      if (rest.length === 0) return attribute;
      return getStructAttribute(
        attribute.type.struct.attributes,
        rest.join(".")
      );
    }

    // Introduce recursion for some attributes
    const recursiveAttributePaths = detectAttributeLoops(attributes);

    Object.entries(recursiveAttributePaths).forEach(
      ([attributePath, structPath]) => {
        // TODO: build this to be a bit more defensive (e.g. remove ! operator)
        const recursionTargetStructAttribute = getStructAttribute(
          attributes,
          structPath
        );
        const parts = attributePath.split(".");
        const attributeName = parts.pop();
        const parentAttribute = getStructAttribute(attributes, parts.join("."));
        const indexToReplace =
          parentAttribute.type.struct!.attributes.findIndex(
            (att) => att.terraformName === attributeName
          );
        if (indexToReplace === -1)
          throw new Error("Can't find attribute at path " + attributePath);
        const previousAttribute =
          parentAttribute.type.struct!.attributes[indexToReplace];

        parentAttribute.type.struct!.attributes[indexToReplace] =
          recursionTargetStructAttribute; // introduce recursion

        // ugly, pls c̶a̶l̶l̶ refactor me maybe
        // we store all structs in this.structs – now we need to dispose all structs that are part of previousAttribute
        const disposeStructs = (attr: AttributeModel) => {
          if (attr.type.struct) {
            attr.type.struct.attributes.forEach(disposeStructs);
            this.structs = this.structs.filter((s) => s !== attr.type.struct);
          }
        };

        disposeStructs(previousAttribute);
      }
    );

    const resourceModel = new ResourceModel({
      terraformType: type,
      baseName,
      fileName,
      filePath,
      className,
      schema,
      fqpn,
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
    if (shouldSkipAttribute(parent.baseName)) {
      return new MapAttributeTypeModel(new SimpleAttributeTypeModel("any"));
    }

    if (typeof attributeType === "string") {
      switch (attributeType) {
        case "bool":
          return new SimpleAttributeTypeModel("boolean");
        case "string":
          return new SimpleAttributeTypeModel("string");
        case "number":
          return new SimpleAttributeTypeModel("number");
        case "dynamic":
          return new MapAttributeTypeModel(new SimpleAttributeTypeModel("any"));
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
        const elementType = this.renderAttributeType(
          scope,
          type as AttributeType,
          [kind, parentKind].join("")
        );
        return kind === "list"
          ? new ListAttributeTypeModel(elementType, false, false)
          : new SetAttributeTypeModel(elementType, false, false);
      }

      if (kind === "map") {
        const valueType = this.renderAttributeType(
          scope,
          type as AttributeType,
          [kind, parentKind].join("")
        );
        return new MapAttributeTypeModel(valueType);
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
        return new StructAttributeTypeModel(struct);
      }
    }

    if (isAttributeNestedType(attributeType)) {
      let struct = undefined;
      let typeModel = undefined;
      switch (attributeType.nesting_mode) {
        case "list":
          struct = this.addAnonymousStruct(
            scope,
            attributeType.attributes,
            attributeType.nesting_mode
          );
          typeModel = new ListAttributeTypeModel(
            new StructAttributeTypeModel(struct),
            false,
            false
          );
          break;
        case "set":
          struct = this.addAnonymousStruct(
            scope,
            attributeType.attributes,
            attributeType.nesting_mode
          );
          typeModel = new SetAttributeTypeModel(
            new StructAttributeTypeModel(struct),
            false,
            false
          );
          break;
        case "map":
          struct = this.addAnonymousStruct(
            scope,
            attributeType.attributes,
            attributeType.nesting_mode
          );
          typeModel = new MapAttributeTypeModel(
            new StructAttributeTypeModel(struct)
          );
          break;
        case "single":
          struct = this.addAnonymousStruct(
            scope,
            attributeType.attributes,
            attributeType.nesting_mode
          );
          typeModel = new StructAttributeTypeModel(struct);
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
      return typeModel;
    }

    throw new Error(`unknown type ${JSON.stringify(attributeType)}`);
  }

  public renderAttributesForBlock(parentType: Scope, block: Block) {
    const attributes = new Array<AttributeModel>();

    for (const [terraformAttributeName, att] of Object.entries(
      block.attributes || {}
    )) {
      if (shouldSkipAttribute(parentType.fullName(terraformAttributeName))) {
        throw Errors.Internal(
          `Skipping attribute ${parentType.fullName(
            terraformAttributeName
          )} is not implemented since it's an attribute and not a block type`
        );
      }
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
      if (shouldSkipAttribute(parentType.fullName(blockTypeName))) {
        const name = toCamelCase(blockTypeName);
        const parent = new Scope({
          name: blockTypeName,
          parent: parentType,
          isProvider: parentType.isProvider,
        });
        attributes.push(
          new AttributeModel({
            name,
            terraformName: blockTypeName,
            terraformFullName: parent.fullName(blockTypeName),
            type: new SkippedAttributeTypeModel(),
            description: `${blockTypeName} block`,
            storageName: `_${name}`,
            optional: true,
            computed: false,
            provider: parentType.isProvider,
            required: false,
          })
        );
        continue;
      }
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
            type: new StructAttributeTypeModel(struct),
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
            type: new MapAttributeTypeModel(
              new StructAttributeTypeModel(struct)
            ),
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
            type:
              blockType.nesting_mode === "list"
                ? new ListAttributeTypeModel(
                    new StructAttributeTypeModel(struct),
                    blockType.max_items === 1,
                    true
                  )
                : new SetAttributeTypeModel(
                    new StructAttributeTypeModel(struct),
                    blockType.max_items === 1,
                    true
                  ),
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
      const type = this.renderAttributeType(
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
      );
      attributes.push(
        new AttributeModel({
          name,
          storageName: `_${name}`,
          computed: computed,
          description: att.description,
          optional: optional,
          terraformName,
          terraformFullName: parent.fullName(terraformName),
          type,
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
    const possibleName = toPascalCase(
      scope.map((x) => toSnakeCase(x.name)).join("_")
    );
    const name = this.uniqueClassName(
      isReservedStructClassName(possibleName)
        ? `${possibleName}Struct`
        : possibleName
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
    fqpn: FQPN,
    type: string,
    schema: Schema,
    terraformType: string
  ): ResourceModel {
    if (this.resources[type]) {
      return this.resources[type];
    }

    const parser = new Parser(this.uniqueClassnames);
    const resource = parser.resourceFrom(fqpn, type, schema, terraformType);
    this.resources[type] = resource;
    return resource;
  }

  // Used by convert to determine the right name for a class
  public getClassNameForResource(terraformType: string) {
    const resource = this.resources[terraformType];
    return resource ? resource.className : "";
  }

  // Used by convert to determine the right name for a namespace
  public getNamespaceNameForResource(terraformType: string) {
    // Special case external provider since the name of resource doesn't have a prefix
    if (terraformType === "data_external_") {
      terraformType = "data_external";
    }

    const resource = this.resources[terraformType];
    if (!resource) {
      return "";
    }
    const folder = `providers/${resource.provider}`;
    return resource.filePath.replace(`${folder}/`, "").replace("/index.ts", "");
  }
}
