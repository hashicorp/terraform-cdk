import * as fs from 'fs-extra';
import * as path from 'path';
import { Language } from './get/base';

const CONFIG_FILE = 'cdktf.json'
const DEFAULTS = {
  output: 'cdktf.out',
  codeMakerOutput: '.gen'
}

function isPresent(input: string[] | undefined): boolean {
  return Array.isArray(input) && input.length > 0
}

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output: string;
  readonly codeMakerOutput: string;
  readonly terraformProviders?: string[];
  readonly terraformModules?: string[];
  checkCodeMakerOutput?: boolean;
}

export function readConfigSync(): Config {
  const configFile = path.join(process.cwd(), CONFIG_FILE)
  let config: Config = DEFAULTS;
  if (fs.existsSync(configFile)) {
    config = {
      ...config,
      ...JSON.parse(fs.readFileSync(configFile).toString())
    };
  }

  config.checkCodeMakerOutput = isPresent(config.terraformModules) || isPresent(config.terraformProviders)

  return config;
}