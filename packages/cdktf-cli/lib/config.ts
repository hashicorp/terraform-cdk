import * as fs from 'fs-extra';
import * as path from 'path';
import { Language } from './get/base';

const CONFIG_FILE = 'cdktf.json'

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output: string;
  readonly terraformProviders?: string[];
  readonly terraformModules?: string[];
}

const DEFAULTS: Config = {
  output: 'dist'
};

export function readConfigSync(): Config {
  const configFile = path.join(process.cwd(), CONFIG_FILE)
  let config: Config = DEFAULTS;
  if (fs.existsSync(configFile)) {
    config = {
      ...config,
      ...JSON.parse(fs.readFileSync(configFile).toString())
    };
  }

  return config;
}