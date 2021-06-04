import { toCamelCase, toPascalCase, toSnakeCase } from 'codemaker';
import { Attribute, AttributeType, Block, BlockType, Schema } from './provider-schema';
import { ResourceModel, AttributeTypeModel, Struct, Scope, AttributeModel } from "./models"

const classNames: string[] = [];

const uniqueClassName = (className: string): string => {
  if (classNames.includes(className)) {
    className = `${className}A`
  }
  classNames.push(className)
  return className
}

class Parser {
  private structs = new Array<Struct>();

  public resourceFrom(provider: string, type: string, schema: Schema, terraformSchemaType: string): ResourceModel {
    let baseName = type;
    if (baseName.startsWith(`${provider}_`)) {
      baseName = baseName.substr(provider.length + 1);
    }

    const isProvider = terraformSchemaType === 'provider';
    if (isProvider) {
      baseName = `${provider}_${baseName}`;
      if (!('attributes' in schema.block)) {
        schema.block = {"attributes": {}, "block_types": {}}
      }
      // somehow missing from provider schema
      schema.block.attributes['alias'] = {"type":"string","description":"Alias name","optional":true,"computed":false}
    }

    const className = uniqueClassName(toPascalCase(baseName));
    // avoid naming collision - see https://github.com/hashicorp/terraform-cdk/issues/299
    uniqueClassName(toPascalCase(`${baseName}Config`));
    const fileName = baseName === 'index' ? 'index-resource.ts' : `${toSnakeCase(baseName).replace(/_/g, '-')}.ts`;
    const filePath = `providers/${toSnakeCase(provider)}/${fileName}`;
    const attributes = this.renderAttributesForBlock(new Scope({name: baseName, isProvider, parent: isProvider ? undefined : new Scope({name: provider, isProvider: true})}), schema.block)

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
      structs: this.structs
    })


    return resourceModel
  }

  private renderAttributeType(scope: Scope[], attributeType: AttributeType, parentKind: string | undefined = undefined): AttributeTypeModel {
    const parent = scope[scope.length - 1]
    const level = scope.length
    const isComputed = !!scope.find(e => e.isComputed === true);
    const isOptional = parent.isOptional
    const isRequired = parent.isRequired

    if (typeof(attributeType) === 'string') {
      switch (attributeType) {
        case 'bool': return new AttributeTypeModel('boolean', { isComputed, isOptional, isRequired, level });
        case 'string': return new AttributeTypeModel('string', { isComputed, isOptional, isRequired, level });
        case 'number': return new AttributeTypeModel('number', { isComputed, isOptional, isRequired, level });
        case 'dynamic': return new AttributeTypeModel('dynamic', { isComputed, isOptional, isRequired, level })
        default: throw new Error(`invalid primitive type ${attributeType}`);
      }
    }

    if (Array.isArray(attributeType)) {
      if (attributeType.length !== 2) {
        throw new Error(`unexpected array`);
      }

      const [ kind, type ] = attributeType;

      if (kind === 'set' || kind === 'list') {
        const attrType = this.renderAttributeType(scope, type as AttributeType, kind);
        attrType.isList = kind === 'list';
        attrType.isSet = kind === 'set';
        attrType.isComputed = isComputed
        attrType.isOptional = isOptional
        attrType.isRequired = isRequired
        attrType.level = level
        return attrType;
      }

      if (kind === 'map') {
        const valueType = this.renderAttributeType(scope, type as AttributeType, kind);
        valueType.isMap = true;
        valueType.isComputed = isComputed
        valueType.isOptional = isOptional
        valueType.isRequired = isRequired
        valueType.level = level
        return valueType
      }

      if (kind === 'object') {
        const objAttributes = type as { [name: string]: AttributeType };
        const attributes: { [name: string]: Attribute } = { };
        for (const [ name, type ] of Object.entries(objAttributes)) {
          attributes[name] = { type }
        }
        const [ struct, structName ] = this.addAnonymousStruct(scope, attributes, parentKind);
        const model = new AttributeTypeModel(structName, {struct, isComputed, isOptional, isRequired, level})
        return model
      }
    }

    throw new Error(`unknown type ${attributeType}`);
  }

  public renderAttributesForBlock(parentType: Scope, block: Block) {
    const attributes = new Array<AttributeModel>();

    for (const [ terraformAttributeName, att ] of Object.entries(block.attributes || { })) {
      const type = this.renderAttributeType([ parentType, new Scope({name: terraformAttributeName, parent: parentType, isProvider: parentType.isProvider, isComputed: !!att.computed, isOptional: !!att.optional, isRequired: !!att.required})], att.type);
      const name = toCamelCase(terraformAttributeName);

      attributes.push(new AttributeModel({
        terraformFullName: parentType.fullName(terraformAttributeName),
        description: att.description,
        name,
        storageName: `_${name}`,
        computed: !!att.computed,
        optional: !!att.optional,
        terraformName: terraformAttributeName,
        type,
        provider: parentType.isProvider,
        required: !!att.required
      }))
    }

    for (const [ blockTypeName, blockType ] of Object.entries(block.block_types || { })) {
      // create a struct for this block
      const blockAttributes = this.renderAttributesForBlock(new Scope({name: `${parentType.name}_${blockTypeName}`, parent: parentType, isProvider: parentType.isProvider, inBlockType: true}), blockType.block)
      const [ blockStruct, ] = this.addStruct([ parentType, new Scope({name: blockTypeName, parent: parentType, isProvider: parentType.isProvider}) ], blockAttributes, blockType.nesting_mode)

      // define the attribute
      attributes.push(attributeForBlockType(blockTypeName, blockType, blockStruct, parentType.isProvider, parentType));
    }

    return attributes;

    function attributeForBlockType(terraformName: string, blockType: BlockType, struct: Struct, isProvider: boolean, parent: Scope): AttributeModel {
      const name = toCamelCase(terraformName);
      let optional: boolean;
      let required: boolean;
      switch (blockType.nesting_mode) {
        case 'single':
          optional = !struct.attributes.some(x => !x.optional);
          required = !struct.attributes.some(x => !x.required);
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, { struct, isOptional: optional, isRequired: required }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional,
            computed: false,
            provider: isProvider,
            required
          });

        case 'map':
          return new AttributeModel({
            name,
            terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, { struct, isMap: true }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional: false,
            computed: false,
            provider: isProvider,
            required: false
          });

        case 'list':
        case 'set':
          optional = blockType.min_items === undefined ? true : blockType.min_items < 1;
          required = blockType.min_items === undefined ? false : blockType.min_items > 0;
          return new AttributeModel({
            name,
            terraformName: terraformName,
            terraformFullName: parent.fullName(terraformName),
            type: new AttributeTypeModel(struct.name, { struct, isList: blockType.nesting_mode === 'list', isOptional: optional, isRequired: required, isSet: blockType.nesting_mode === 'set' }),
            description: `${terraformName} block`,
            storageName: `_${name}`,
            optional,
            computed: false,
            provider: isProvider,
            required
          });
      }
    }
  }
  private addAnonymousStruct(scope: Scope[], attrs: { [name: string]: Attribute }, parentKind: string | undefined) {
    const attributes = new Array<AttributeModel>();
    const parent = scope[scope.length - 1]
    const computed = !!parent.isComputed
    const optional = !!parent.isOptional
    const required = !!parent.isRequired
    for (const [ terraformName, att ] of Object.entries(attrs)) {
      const name = toCamelCase(terraformName);
      attributes.push(new AttributeModel({
        name,
        storageName: `_${name}`,
        computed: computed,
        description: att.description,
        optional: optional,
        terraformName,
        terraformFullName: parent.fullName(terraformName),
        type: this.renderAttributeType([ ...scope, new Scope({name: terraformName, parent, isProvider: parent.isProvider, isComputed: computed, isOptional: optional, isRequired: required}) ], att.type),
        provider: parent.isProvider,
        required: required
      }));
    }

    return this.addStruct(scope, attributes, parentKind ?? 'object');
  }

  private addStruct(scope: Scope[], attributes: AttributeModel[], structContainer: string): [Struct, string] {
    const name = uniqueClassName(toPascalCase(scope.map(x => toSnakeCase(x.name)).join('_')));
    const parent = scope[scope.length - 1];
    const isClass = parent.isComputed && !parent.isOptional;
    let struct: Struct | undefined = undefined;
    if (!isClass) {
      struct = new Struct(
        name,
        attributes
      );
      this.structs.push(struct);
    }

    const attributeStruct = new Struct(
      `Terraform${name}Attribute`,
      attributes,
      true,
      name,
      isClass
    );
    this.structs.push(attributeStruct);

    switch (structContainer) {
      case 'map':
        this.structs.push(new Struct(
          `Terraform${name}MapAttribute`,
          [],
          true,
          name,
          isClass,
          'Map'
        ));
        break;
      case 'list':
        this.structs.push(new Struct(
          `Terraform${name}ListAttribute`,
          [],
          true,
          name,
          isClass,
          'List'
        ));
        break;
      case 'set':
        this.structs.push(new Struct(
          `Terraform${name}SetAttribute`,
          [],
          true,
          name,
          isClass,
          'Set'
        ));

        //because we generate a toList function
        this.structs.push(new Struct(
          `Terraform${name}ListAttribute`,
          [],
          true,
          name,
          isClass,
          'List'
        ));
        break;
    }

    if (!struct) {
      struct = attributeStruct;
    }

    return [struct, name];
  }
}

export class ResourceParser {
  public parse(provider: string, type: string, schema: Schema, terraformType: string): ResourceModel {
    const parser = new Parser()
    const resource = parser.resourceFrom(provider, type, schema, terraformType)
    return resource;
  }
}
