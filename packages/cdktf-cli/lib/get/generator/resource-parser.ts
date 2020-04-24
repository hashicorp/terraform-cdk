import { toCamelCase, toPascalCase, toSnakeCase } from 'codemaker';
import { Attribute, AttributeType, Block, BlockType, Schema } from './provider-schema';
import { ResourceModel, AttributeTypeModel, Struct, Scope, AttributeModel } from "./models"

const resources: ResourceModel[] = [];

const uniqueClassName = (className: string): string => {
  if (resources.find((resource) => (resource.className == className)) !== undefined) {
    className = `${className}A`
  }
  return className
}

class Parser {
  private structs = new Array<Struct>();

  public resourceFrom(provider: string, type: string, schema: Schema): ResourceModel {
    let baseName = type;
    if (baseName.startsWith(`${provider}_`)) {
      baseName = baseName.substr(provider.length + 1);
    }

    const className = uniqueClassName(toPascalCase(baseName));
    const fileName = `${toSnakeCase(baseName).replace(/_/g, '-')}.ts`;
    const filePath = `providers/${toSnakeCase(provider)}/${fileName}`;
    const attributes = this.renderAttributesForBlock(new Scope(baseName), schema.block)

    const resourceModel = new ResourceModel({
      terraformType: type,
      baseName,
      fileName,
      filePath,
      className,
      schema,
      provider,
      attributes,
      structs: this.structs
    })


    return resourceModel
  }

  private renderAttributeType(scope: Scope[], attributeType: AttributeType): AttributeTypeModel {
    const isComputed = !!scope.find(e => e.isComputed === true);

    if (typeof(attributeType) === 'string') {
      switch (attributeType) {
        case 'bool': return new AttributeTypeModel('boolean', { isComputed: isComputed });
        case 'string': return new AttributeTypeModel('string', { isComputed: isComputed });
        case 'number': return new AttributeTypeModel('number', { isComputed: isComputed });
        default: throw new Error(`invalid primitive type ${attributeType}`);
      }
    }

    if (Array.isArray(attributeType)) {
      if (attributeType.length !== 2) {
        throw new Error(`unexpected array`);
      }

      const [ kind, type ] = attributeType;

      if (kind === 'set' || kind === 'list') {
        const attrType = this.renderAttributeType(scope, type as AttributeType);
        attrType.isList = true;
        attrType.isComputed = isComputed
        return attrType;
      }

      if (kind === 'map') {
        const valueType = this.renderAttributeType(scope, type as AttributeType);
        valueType.isMap = true;
        valueType.isComputed = isComputed
        return valueType
      }

      if (kind === 'object') {
        const objAttributes = type as { [name: string]: AttributeType };
        const attributes: { [name: string]: Attribute } = { };
        for (const [ name, type ] of Object.entries(objAttributes)) {
          attributes[name] = { type }
        }
        const struct = this.addAnonymousStruct(scope, attributes);
        const model = new AttributeTypeModel(struct.name, {struct, isComputed: isComputed})
        return model
      }
    }

    throw new Error(`unknown type ${attributeType}`);
  }

  public renderAttributesForBlock(parentType: Scope, block: Block) {
    const attributes = new Array<AttributeModel>();

    for (const [ terraformAttributeName, att ] of Object.entries(block.attributes || { })) {
      const type = this.renderAttributeType([ parentType, new Scope(terraformAttributeName, !!att.computed)], att.type);
      const name = toCamelCase(terraformAttributeName);
      attributes.push(new AttributeModel({
        terraformFullName: `${parentType.name}.${terraformAttributeName}`,
        description: att.description,
        name,
        storageName: `_${name}`,
        computed: !!att.computed,
        optional: !att.computed && !!att.optional,
        terraformName: terraformAttributeName,
        type
      }))
    }

    for (const [ blockTypeName, blockType ] of Object.entries(block.block_types || { })) {
      // create a struct for this block
      const blockStruct = this.addStruct([ parentType, new Scope(blockTypeName) ], this.renderAttributesForBlock(new Scope(`${parentType.name}_${blockTypeName}`), blockType.block))

      // define the attribute
      attributes.push(attributeForBlockType(blockTypeName, blockType, blockStruct));
    }

    return attributes;

    function attributeForBlockType(terraformName: string, blockType: BlockType, struct: Struct): AttributeModel {
      const name = toCamelCase(terraformName);
      switch (blockType.nesting_mode) {
        case 'single':
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: terraformName,
            type: new AttributeTypeModel(struct.name, { struct }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional: !struct.attributes.some(x => !x.optional),
            computed: false,
          });

        case 'map':
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: terraformName,
            type: new AttributeTypeModel(struct.name, { struct, isMap: true }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional: false,
            computed: false,
          });

        case 'list':
        case 'set':
          return new AttributeModel({
            name,
            terraformName: terraformName,
            terraformFullName: terraformName,
            type: new AttributeTypeModel(struct.name, { struct, isList: true }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional: blockType.min_items === undefined ? true : blockType.min_items < 1,
            computed: false,
          });
      }
    }
  }
  private addAnonymousStruct(scope: Scope[], attrs: { [name: string]: Attribute }) {
    const attributes = new Array<AttributeModel>();
    const computed = !!scope.find(e => e.isComputed === true);
    for (const [ terraformName, att ] of Object.entries(attrs)) {
      const name = toCamelCase(terraformName);
      attributes.push(new AttributeModel({
        name,
        storageName: `_${name}`,
        computed,
        description: att.description,
        optional: true,
        terraformName,
        terraformFullName: [ ...scope, terraformName ].join('_'),
        type: this.renderAttributeType([ ...scope, new Scope(terraformName, computed) ], att.type),
      }));
    }

    return this.addStruct(scope, attributes);
  }

  private addStruct(scope: Scope[], attributes: AttributeModel[]) {
    const s = new Struct(
      uniqueClassName(toPascalCase(scope.map(x => toSnakeCase(x.name)).join('_'))),
      attributes,
      !!scope.find(e => e.isComputed === true)
    )
    this.structs.push(s);
    return s;
  }
}

export class ResourceParser {
  public parse(provider: string, type: string, schema: Schema): ResourceModel {
    const parser = new Parser()
    const resource = parser.resourceFrom(provider, type, schema)
    resources.push(resource)
    return resource;
  }
}
