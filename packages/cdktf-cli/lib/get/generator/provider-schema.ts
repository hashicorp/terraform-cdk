import * as fs from 'fs-extra';
import * as path from 'path';
import { promisify } from 'util';
import { exec, withTempDir } from '../../util';

const writeFile = promisify(fs.writeFile);
const terraformBinaryName = process.env.TERRAFORM_BINARY_NAME || 'terraform'

export interface ProviderSchema {
  format_version: '1.0';
  provider_schemas?: { [type: string]: Provider };
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

export async function readSchema(providers: string[]): Promise<ProviderSchema> {
  const provider: { [name: string]: {} } = {};
  const requiredProviders: { [name: string]: { source?: string;  version?: string } } = { };

  for (const p of providers) {
    const [ fqname, version ] = p.split('@');
    const name = fqname.split('/').pop()
    if (!name) { throw new Error(`Provider name should be properly set in ${p}`) }

    provider[name] = {};
    requiredProviders[name] = { version, source: fqname };
  }
  let schema = '';

  await withTempDir('fetchSchema', async () => {
    const outdir = process.cwd();
    const filePath = path.join(outdir, 'providers.tf.json');
    // eslint-disable-next-line @typescript-eslint/camelcase
    await writeFile(filePath, JSON.stringify({ provider, terraform: { required_providers: requiredProviders }}));

    // todo: when implementing logging, we need to make sure we can show the terraform init
    // output if the log level is set to debug
    await exec(terraformBinaryName, [ 'init' ], { cwd: outdir });
    schema = await exec(terraformBinaryName, ['providers', 'schema', '-json'], { cwd: outdir });
    fs.unlinkSync(filePath)
  })

  return JSON.parse(schema);
}
