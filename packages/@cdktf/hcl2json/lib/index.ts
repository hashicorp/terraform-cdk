// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference lib="dom" />

// Inspired by
// https://github.com/ts-terraform/ts-terraform
// https://github.com/aaronpowell/webpack-golang-wasm-async-loader

import fs from 'fs-extra'
import path from 'path'
import { Go } from './wasm_exec'
import { deepMerge } from './deepmerge';
import { gunzipSync } from 'zlib';

interface GoBridge {
  parse: (filename: string, hcl: string) => Promise<string>
}

// eslint-disable-next-line @typescript-eslint/ban-types
const jsRoot: Record<string, Function> = {}

function sleep() {
  return new Promise(global.setImmediate)
}

function goBridge(getBytes: Promise<Buffer>) {
  let ready = false

  async function init() {
    const go = new Go()
    const bytes = await getBytes
    const result = await WebAssembly.instantiate(bytes, go.importObject)
    void go.run(result.instance, {__parse_terraform_config_wasm__: jsRoot})
    ready = true
  }

  init().catch((error) => {
    throw error
  })

  const proxy = new Proxy({} as GoBridge, {
    get: (_, key: string) => {
      return async (...args: unknown[]) => {
        while (!ready) {
          await sleep()
        }

        if (!(key in jsRoot)) {
          throw new Error(`There is nothing defined with the name "${key.toString()}"`)
        }

        if (typeof jsRoot[key] !== 'function') {
          return jsRoot[key]
        }

        return new Promise((resolve, reject) => {
          // @ts-ignore
          const cb = (err: string, ...msg: string[]) => (err ? reject(new Error(err)) : resolve(...msg))

          const run = () => {
            jsRoot[key].apply(undefined, [...args, cb])
          }

          run()
        })
      }
    },
  })

  return proxy
}

const loadWasm = async () => {
  return gunzipSync(await fs.readFile(path.join(__dirname, '..', 'main.wasm.gz')))
}

const wasm = goBridge(loadWasm())

export async function parse(filename: string, contents: string): Promise<Record<string, any>> {
  const res = await wasm.parse(filename, contents)
  return JSON.parse(res)
}

export async function convertFiles(workingDirectory: string): Promise<Record<string, any> | void> {
  let tfFileContents = '';
  const tfJSONFileContents: Record<string, any>[] = []

  for (const file of fs.readdirSync(workingDirectory)) {
    const filePath = path.resolve(workingDirectory, file)
    if (!fs.lstatSync(filePath).isDirectory()) {
      if (file.match(/\.tf$/)) {
        tfFileContents += fs.readFileSync(filePath, 'utf-8')
        tfFileContents += '\n'
      }
      else if (file.match(/\.tf\.json$/)) {
        tfJSONFileContents.push(JSON.parse(fs.readFileSync(filePath, 'utf-8')))
      }
    }
  }

  if (tfFileContents === '' && tfJSONFileContents === []) {
    console.error(`No '.tf' or '.tf.json' files found in ${workingDirectory}`)
    return;
  }

  return deepMerge(await parse('hcl2json.tf', tfFileContents), ...tfJSONFileContents)
}
