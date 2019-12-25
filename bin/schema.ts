
export interface ProviderSchema {
  format_version: '1.0';
  provider_schemas: { [type: string]: Provider };
}

export interface Provider {
  provider: Schema;
  resource_schemas: { [type: string]: Schema };
  data_source_schemas: { [type: string]: Schema };
}

export interface Schema {
  version: number;
  block: Block;
}

export interface Attribute {
  type: AttributeType;
  description?: string;
  required?: boolean;
  optional?: boolean;
  computed?: boolean;
  sensitive?: boolean;
}

export type AttributeType = 
  'string' 
  | 'bool' 
  | 'number'
  | [ 'set', AttributeType ] 
  | [ 'map', AttributeType ] 
  | [ 'list', AttributeType ] 
  | [ 'object', { [attribute: string]: AttributeType } ];

export type BlockType = {
  nesting_mode: 'single' | 'map';
  block: Block;
} | {
  nesting_mode: 'list' | 'set';
  block: Block;
  min_items?: number;
  max_items?: number;
}

export interface Block {
  attributes: { [name: string]: Attribute };
  block_types: { [name: string]: BlockType };
}