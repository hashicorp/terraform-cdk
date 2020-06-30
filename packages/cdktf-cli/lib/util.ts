import * as http from 'http';
import * as https from 'https';
import { spawn, SpawnOptions } from 'child_process';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import { processLogger } from './logging';

export async function shell(program: string, args: string[] = [], options: SpawnOptions = { }) {
  return new Promise((ok, ko) => {
    const child = spawn(program, args, { stdio: 'inherit', ...options });
    child.once('error', ko);
    child.once('exit', code => {
      if (code === 0) { return ok(); }
      else { return ko(new Error(`non-zero exit code ${code}`)); }
    });
  });
}

export async function withTempDir(dirname: string, closure: () => Promise<void>) {
  const prevdir = process.cwd();
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'cdktf.'));
  const workdir = path.join(parent, dirname);
  await fs.mkdirp(workdir);
  try {
    process.chdir(workdir);
    await closure();
  } finally {
    process.chdir(prevdir);
    await fs.remove(parent);
  }
}

async function get(url: string, protocol: typeof http | typeof https = https): Promise<string> {
  return new Promise((ok, ko) => {
    const req = protocol.get(url, res => {
      if (res.statusCode !== 200) {
        throw new Error(`${res.statusMessage}: ${url}`);
      }
      const data = new Array<Buffer>();
      res.on('data', chunk => data.push(chunk));
      res.once('end', () => ok(Buffer.concat(data).toString('utf-8')));
      res.once('error', ko);
    });

    req.once('error', ko);
    req.end();
  });
}

export async function httpGet(url: string): Promise<string> {
  return get(url, http)
}

export async function httpsGet(url: string): Promise<string> {
  return get(url)
}

export const exec = async (command: string, args: string[], options: SpawnOptions, stdout?: (chunk: Buffer) => any): Promise<string> => {
  return new Promise((ok, ko) => {
    const child = spawn(command, args, options);
    const out = new Array<Buffer>();
    if (stdout !== undefined) {
      child.stdout?.on('data', (chunk: Buffer) => { processLogger(chunk) ; stdout(chunk) });
    } else {
      child.stdout?.on('data', (chunk: Buffer) =>  { processLogger(chunk) ; out.push(chunk) } );
    }
    child.stderr?.on('data', (chunk: string | Uint8Array) => { processLogger(chunk) ; process.stderr.write(chunk) });
    child.once('error', (err: any) => ko(err));
    child.once('close', (code: number) => {
      if (code !== 0) {
        return ko(new Error(`non-zero exit code ${code}`));
      }
      return ok(Buffer.concat(out).toString('utf-8'));
    });
  });
}
