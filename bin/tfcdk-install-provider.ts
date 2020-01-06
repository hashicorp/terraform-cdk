// generates constructs from terraform providers schema
import { spawn, SpawnOptions } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { TerraformGenerator } from './provider-generator';
import { ProviderSchema } from './provider-schema';

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

async function main() {
  const providers = process.argv.splice(2);
  if (providers.length === 0) {
    const progname = path.basename(process.argv[1]);
    console.error(`usage: ${progname} PROVIDER [PROVIDER ...]`);
    console.error(`example: ${progname} aws google`)
    process.exit(1);
  }
  const outdir = 'cdk.out';
  await mkdir(outdir, { recursive: true });

  const schema = await readSchema(outdir, providers);
  const gen = new TerraformGenerator(schema);
  await gen.save('.gen/providers');
}

async function readSchema(outdir: string, providers: string[]): Promise<ProviderSchema> {
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

async function exec(command: string, args: string[], options?: SpawnOptions): Promise<string> {
  return new Promise((ok, ko) => {
    const child = spawn(command, args, options);
    const out = new Array<Buffer>();
    child.stdout?.on('data', chunk => out.push(chunk));
    child.stderr?.on('data', chunk => process.stderr.write(chunk));
    child.once('error', err => ko(err));
    child.once('close', code => {
      if (code !== 0) {
        return ko(new Error(`non-zero exit code ${code}`));
      }
      
      return ok(Buffer.concat(out).toString('utf-8'));
    });
  });
}

main().catch((err: Error) => {
  console.error(err);
  process.exit(1);
});