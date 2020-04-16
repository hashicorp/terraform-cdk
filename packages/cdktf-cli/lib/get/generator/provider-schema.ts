import * as fs from 'fs';
import * as path from 'path';
import { spawn, SpawnOptions } from 'child_process';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

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

export async function readSchema(outdir: string, providers: string[]): Promise<ProviderSchema> {
  const provider: { [name: string]: { version?: string } } = { };
  for (const p of providers) {
    const [ name, version ] = p.split('@');
    provider[name] = { version };
  }
  const filePath = path.join(outdir, 'providers.tf.json');
  await writeFile(filePath, JSON.stringify({ provider }));
  await exec('terraform', [ 'init' ], { cwd: outdir, stdio: [ 'inherit', 'inherit', 'inherit' ] });
  const schema = await exec('terraform', ['providers', 'schema', '-json'], { cwd: outdir });
  return JSON.parse(schema);
}

async function exec(command: string, args: string[], options: SpawnOptions = {}): Promise<string> {
  return new Promise((ok, ko) => {
    const child = spawn(command, args, options);
    const out = new Array<Buffer>();
    child.stdout?.on('data', (chunk: Buffer) => out.push(chunk));
    child.stderr?.on('data', (chunk: string | Uint8Array) => process.stderr.write(chunk));
    child.once('error', (err: any) => ko(err));
    child.once('close', (code: number) => {
      if (code !== 0) {
        return ko(new Error(`non-zero exit code ${code}`));
      }

      return ok(Buffer.concat(out).toString('utf-8'));
    });
  });
}
