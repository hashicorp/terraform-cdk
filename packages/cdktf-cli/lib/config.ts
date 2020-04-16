import * as fs from 'fs-extra';
import { Language } from './get/base';

const CONFIG_FILE = 'cdktf.json';

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output?: string;
  readonly terraformProviders?: string[];
  readonly terraformModules?: string[];
}

const DEFAULTS: Config = {
  output: 'dist'
};

export function readConfigSync(): Config {
  let config: Config = DEFAULTS;
  if (fs.existsSync(CONFIG_FILE)) {
    config = {
      ...config,
      ...JSON.parse(CONFIG_FILE)
    };
  }

  return config;
}