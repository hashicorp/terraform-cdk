import * as fs from 'fs-extra';
import * as path from 'path';
import { promisify } from 'util';
import { exec, withTempDir } from '../../util';

const writeFile = promisify(fs.writeFile);
const mkdirp = promisify(fs.mkdirp);

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
  const requiredProviders: { [name: string]: { source?: string,  version?: string } } = { };

  for (const p of providers) {
    const [ fqname, version ] = p.split('@');
    const name = fqname.split('/').pop()
    if (!name) { throw new Error(`Provider name should be properly set in ${p}`) }

    provider[name] = {};
    requiredProviders[name] = { version, source: fqname };
  }
  let schema = '';
  const workDir = process.cwd()

  await withTempDir('fetchSchema', async () => {
    const outdir = process.cwd();
    const filePath = path.join(outdir, 'providers.tf.json');
    await writeFile(filePath, JSON.stringify({ provider, terraform: { required_providers: requiredProviders }}));

    const env = process.env['TF_PLUGIN_CACHE_DIR'] ? process.env : Object.assign({}, process.env, { 'TF_PLUGIN_CACHE_DIR': await cacheDir(workDir) })

    // todo: when implementing logging, we need to make sure we can show the terraform init
    // output if the log level is set to debug
    await exec('terraform', [ 'init' ], { cwd: outdir, env });
    schema = await exec('terraform', ['providers', 'schema', '-json'], { cwd: outdir, env });
    fs.unlinkSync(filePath)
  })

  return JSON.parse(schema);
}

async function cacheDir(workDir: string) {
  const cacheDir = path.join(workDir, '.terraform/plugins');
  await mkdirp(cacheDir);
  return cacheDir
}
