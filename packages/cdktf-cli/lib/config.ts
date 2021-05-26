import * as fs from 'fs-extra';
import * as path from 'path';
import { Language } from './get/constructs-maker';
import { env } from 'process';
import { CONTEXT_ENV } from 'cdktf';

const CONFIG_FILE = 'cdktf.json'
const DEFAULTS = {
  output: 'cdktf.out',
  codeMakerOutput: '.gen'
}

const parseDependencyConstraint = (item: string) => {
  const [ fqn, version ] = item.split('@');
  const nameParts = fqn.split('/');
  const name = nameParts.pop();
  const namespace = nameParts.pop();
  if (!name) { throw new Error(`Provider name should be properly set in ${item}`) }

  return {
    name,
    source: fqn,
    version,
    fqn,
    namespace,
  }
}

function isPresent(input: any[] | undefined): boolean {
  return Array.isArray(input) && input.length > 0
}
export interface TerraformDependencyConstraint {
  readonly name: string;
  readonly source: string;
  readonly version?: string;
  readonly fqn: string;
  readonly namespace?: string;
}

export class TerraformModuleConstraint implements TerraformDependencyConstraint {
  public readonly name: string;
  public readonly source: string;
  public readonly localSource?: string;
  public readonly fqn: string;
  public readonly version?: string;

  constructor(item: TerraformDependencyConstraint | string) {
    if (typeof(item) === 'string') {
      const parsed = parseDependencyConstraint(item);
      this.name = parsed.name
      this.source = parsed.source
      this.fqn = parsed.fqn
      this.version = parsed.version
    } else {
      if (item.source.startsWith('./') || item.source.startsWith('../')) {
        this.source = item.source
        this.localSource = `file://${path.join(process.cwd(), item.source)}`
      } else {
        this.source = item.source;
      }
      this.name = item.name;
      this.fqn = item.name;
      this.version = item.version;
    }
  }
}

export class TerraformProviderConstraint implements TerraformDependencyConstraint{
  public readonly name: string;
  public readonly source: string;
  public readonly version?: string;
  public readonly fqn: string;
  public readonly namespace?: string;

  constructor(item: TerraformDependencyConstraint | string) {
    if (typeof(item) === 'string') {
      const parsed = parseDependencyConstraint(item);
      this.name = parsed.name
      this.fqn = parsed.fqn
      this.source = parsed.fqn
      this.version = parsed.version
      this.namespace = parsed.namespace
    } else {
      this.name = item.name;
      this.fqn = item.name;
      this.version = item.version;
      this.source = item.source;
      this.namespace = item.namespace;
    }
  }
}

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output: string;
  readonly codeMakerOutput: string;
  terraformProviders?: TerraformProviderConstraint[];
  terraformModules?: TerraformModuleConstraint[];
  checkCodeMakerOutput?: boolean;
  readonly context?: {[key: string]: any};
}

export const parseConfig = (configJSON?: string) => {
  const config: Config = {
    ...DEFAULTS,
    ...JSON.parse(configJSON || '{}')
  };

  config.checkCodeMakerOutput = isPresent(config.terraformModules) || isPresent(config.terraformProviders)

  if (isPresent(config.terraformModules)) {
    config.terraformModules = config.terraformModules?.map(mod => new TerraformModuleConstraint(mod))
  }

  if (isPresent(config.terraformProviders)) {
    config.terraformProviders = config.terraformProviders?.map(provider => new TerraformProviderConstraint(provider))
  }


  if(config.context) {
    env[CONTEXT_ENV] = JSON.stringify(config.context);
  }

  return config;
}

export function readConfigSync(configFile = path.join(process.cwd(), CONFIG_FILE)): Config {
  let configFileContent: string | undefined;

  if (fs.existsSync(configFile)) {
    configFileContent = fs.readFileSync(configFile).toString()
  }

  return parseConfig(configFileContent);
}