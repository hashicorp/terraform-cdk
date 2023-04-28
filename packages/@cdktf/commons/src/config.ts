/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as fs from "fs-extra";
import * as path from "path";
import { env } from "process";
import { toPascalCase } from "codemaker";
import { logger } from "./logging";
import { isRegistryModule } from "./terraform-module";
import { Errors } from "./errors";

export enum Language {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  CSHARP = "csharp",
  JAVA = "java",
  GO = "go",
}

export const LANGUAGES = [
  Language.TYPESCRIPT,
  Language.PYTHON,
  Language.JAVA,
  Language.CSHARP,
  Language.GO,
];

const CONTEXT_ENV = "CDKTF_CONTEXT_JSON";

const CONFIG_FILE = "cdktf.json";
export const CONFIG_DEFAULTS = {
  output: "cdktf.out",
  codeMakerOutput: ".gen",
};

function isPresent(input: any[] | undefined): boolean {
  return Array.isArray(input) && input.length > 0;
}
export interface TerraformDependencyConstraint {
  readonly name: string;
  readonly source: string;
  readonly version?: string;
  readonly fqn: string;
  readonly namespace?: string;
}

function getLocalMatch(source: string): RegExpMatchArray | null {
  return source.match(/^(\.\/|\.\.\/|\.\\\\|\.\.\\\\)(.*)/);
}

export function isLocalModule(source: string): boolean {
  return getLocalMatch(source) !== null;
}

export class TerraformModuleConstraint
  implements TerraformDependencyConstraint
{
  public readonly name: string;
  public readonly source: string;
  public readonly localSource?: string;
  public readonly fqn: string;
  public readonly version?: string;
  public readonly namespace?: string;

  constructor(item: TerraformDependencyConstraint | string) {
    if (typeof item === "string") {
      const parsed = this.parseDependencyConstraint(item);
      this.name = parsed.name;
      this.source = parsed.source;
      this.fqn = parsed.fqn;
      this.version = parsed.version;
      this.namespace = parsed.namespace;
    } else {
      this.source = item.source;
      this.name = item.name;
      this.fqn = item.name;
      this.version = item.version;
      this.namespace = item.namespace;
    }

    const localMatch = getLocalMatch(this.source);
    if (localMatch) {
      this.localSource = `file://${path.join(process.cwd(), this.source)}`;
    }
  }

  public get className() {
    return toPascalCase(this.name.replace(/[-/.]/g, "_"));
  }

  public get fileName() {
    return this.namespace ? `${this.namespace}/${this.name}` : this.name;
  }

  private parseDependencyConstraint(
    item: string
  ): TerraformDependencyConstraint {
    const localMatch = getLocalMatch(item);
    if (localMatch) {
      const fqn = localMatch[2];
      const nameParts = fqn.split("/");
      const name = nameParts.pop() ?? fqn;
      const namespace = nameParts.pop();

      return {
        name,
        fqn,
        source: item,
        namespace,
      };
    }

    const [source, version] = item.split("@");
    let moduleParts = source.split("//");
    if (isRegistryModule(moduleParts[0])) {
      const nameParts = moduleParts[0].split("/");
      const provider = nameParts.pop(); // last part is the provider
      let name = nameParts.pop() ?? source;
      let namespace = `${nameParts.pop()}/${provider}`;

      if (moduleParts.length > 1) {
        const moduleNameParts = moduleParts[1].split("/");
        const moduleName = moduleNameParts.pop();
        namespace = `${namespace}/${name}/${moduleNameParts.join("/")}`;
        name = moduleName ?? name;
      }

      return {
        name,
        source,
        version,
        namespace,
        fqn: source.replace("//", "/").replace(/\./g, "-"),
      };
    }

    let toProcess = item; // process one part at a time

    // strip off any prefix
    const prefixMatch = toProcess.match(/^([a-zA-Z0-9]*)::(.*)/);
    if (prefixMatch) {
      toProcess = prefixMatch[2];
    }

    // strip off any protocl
    const protocolMatch = toProcess.match(/^([a-zA-Z]*):\/\/(.*)/);
    if (protocolMatch) {
      toProcess = protocolMatch[2];
    }

    // anything before last ':' won't contribute
    const colonParts = toProcess.split(":");
    toProcess = colonParts.pop() ?? toProcess;

    // strip off any port
    const portMatch = toProcess.match(/^[\d]*(.*)/);
    if (portMatch) {
      toProcess = portMatch[1];
    }

    // strip off any hostname
    const hostMatch = toProcess.match(/[^/]*\.[^/]*\/(.*)/);
    if (hostMatch) {
      toProcess = hostMatch[1];
    }

    // strip off any arguments
    const argumentMatch = toProcess.match(/(.*)\?.*/);
    if (argumentMatch) {
      toProcess = argumentMatch[1];
    }

    // strip off any types
    toProcess = toProcess.replace(/\.git|\.hg|\.zip/, "");

    moduleParts = toProcess.split("//");
    const nameParts = moduleParts[0].split("/");
    let name = nameParts.pop();
    let namespace = nameParts.pop();
    if (!name) {
      throw new Error(`Module name should be properly set in ${item}`);
    }

    if (moduleParts.length > 1) {
      const moduleNameParts = moduleParts[1].split("/");
      const moduleName = moduleNameParts.pop();
      if (namespace) {
        namespace = `${namespace}/${name}/${moduleNameParts.join("/")}`;
      } else {
        namespace = `${name}/${moduleNameParts.join("/")}`;
      }
      name = moduleName ?? name;
    }

    return {
      name,
      source: item,
      fqn: toProcess.replace("//", "/"),
      namespace,
    };
  }
}

export class TerraformProviderConstraint
  implements TerraformDependencyConstraint
{
  public readonly name: string;
  public readonly source: string;
  public readonly version?: string;
  public readonly fqn: string;
  public readonly namespace?: string;

  constructor(item: Omit<TerraformDependencyConstraint, "fqn"> | string) {
    if (typeof item === "string") {
      const parsed = this.parseDependencyConstraint(item);
      this.name = parsed.name;
      this.fqn = parsed.fqn;
      this.source = parsed.fqn;
      this.version = parsed.version;
      this.namespace = parsed.namespace;
    } else {
      this.name = item.name;
      this.fqn = item.name;
      this.version = item.version;
      this.source = item.source;
      this.namespace = item.namespace;
    }
  }

  private parseDependencyConstraint(
    item: string
  ): TerraformDependencyConstraint {
    const [fqn, version] = item.split("@");
    const nameParts = fqn.split("/");
    const name = nameParts.pop();
    const namespace = nameParts.pop();
    if (!name) {
      throw new Error(`Provider name should be properly set in ${item}`);
    }

    return {
      name,
      source: fqn,
      version,
      fqn,
      namespace,
    };
  }
}

export interface Config {
  readonly app?: string;
  readonly language?: Language;
  readonly output: string;
  readonly codeMakerOutput: string;
  terraformProviders?: TerraformProviderConstraint[];
  terraformModules?: TerraformModuleConstraint[];
  readonly context?: { [key: string]: any };
}

export const parseConfig = (configJSON?: string) => {
  const config: Config = {
    ...CONFIG_DEFAULTS,
    ...JSON.parse(configJSON || "{}"),
  };

  if (isPresent(config.terraformModules)) {
    config.terraformModules = config.terraformModules?.map(
      (mod) => new TerraformModuleConstraint(mod)
    );
  }

  if (isPresent(config.terraformProviders)) {
    config.terraformProviders = config.terraformProviders?.map(
      (provider) => new TerraformProviderConstraint(provider)
    );
  }

  if (config.context) {
    env[CONTEXT_ENV] = JSON.stringify(config.context);
  }

  return config;
};

export function readConfigSync(
  configFile = path.join(process.cwd(), CONFIG_FILE)
): Config {
  let configFileContent: string | undefined;

  if (fs.existsSync(configFile)) {
    configFileContent = fs.readFileSync(configFile).toString();
  }

  return parseConfig(configFileContent);
}

export function shouldCheckCodeMakerOutput(config: Config): boolean {
  return (
    isPresent(config.terraformModules) || isPresent(config.terraformProviders)
  );
}

export function logTimespan(message: string) {
  logger.debug(`Start timer for ${message}...`);
  const start = Date.now();

  return function logTimespanEnd() {
    const end = Date.now();
    const duration = end - start;
    logger.debug(`${message} took ${duration}ms`);
  };
}

function findFileAboveCwd(
  file: string,
  rootPath = process.cwd()
): string | null {
  const fullPath = path.resolve(rootPath, file);
  if (fs.existsSync(fullPath)) {
    return fullPath;
  }

  const parentDir = path.resolve(rootPath, "..");
  if (fs.existsSync(parentDir) && parentDir !== rootPath) {
    return findFileAboveCwd(file, parentDir);
  }

  return null;
}
export class CdktfConfig {
  constructor(private cdktfConfigPath: string) {}

  private readCdktfConfig(): Record<string, unknown> {
    const cdktfConfig = require(this.cdktfConfigPath);
    if (typeof cdktfConfig !== "object" || cdktfConfig === null) {
      throw Errors.External(
        "cdktf.json is malformed. The root must be a JSON object."
      ); // TODO: define a schema and validate against it
    }
    return cdktfConfig;
  }

  private writeCdktfConfig(cdktfConfig: Record<string, unknown>) {
    const cdktfConfigString = JSON.stringify(cdktfConfig, null, 2);
    fs.writeFileSync(this.cdktfConfigPath, cdktfConfigString);
  }

  private getProperty(property: string): unknown {
    const cdktfConfig = this.readCdktfConfig();
    return cdktfConfig[property] || (CONFIG_DEFAULTS as any)[property];
  }

  public get language(): Language {
    const rawLanguage = this.getProperty("language");
    const language = Object.values(Language).find(
      (value) => value === rawLanguage
    );
    if (!language)
      throw Errors.Usage(
        `${rawLanguage} is not a valid language. It must be one of ${Object.values(
          Language
        )}`
      );

    return language;
  }

  public get codeMakerOutput(): string {
    return this.getProperty("codeMakerOutput") as string;
  }

  public get terraformProviders(): (TerraformDependencyConstraint | string)[] {
    const providers = this.getProperty("terraformProviders");
    if (!Array.isArray(providers)) return [];
    return providers;
  }

  public writeTerraformProviders(
    providers: (TerraformDependencyConstraint | string)[]
  ) {
    const cdktfConfig = this.readCdktfConfig();
    cdktfConfig.terraformProviders = providers;
    this.writeCdktfConfig(cdktfConfig);
  }

  public get projectDirectory(): string {
    return path.dirname(this.cdktfConfigPath);
  }

  public static read(path: string = process.cwd()): CdktfConfig {
    const cdktfConfigPath = findFileAboveCwd("cdktf.json", path);
    if (!cdktfConfigPath) {
      throw Errors.External(
        "Could not find cdktf.json. Make sure there is a cdktf.json file in the current directory or one of its parents."
      );
    }
    logger.trace(`cdktf.json found at ${cdktfConfigPath}`);

    return new CdktfConfig(cdktfConfigPath);
  }
}
