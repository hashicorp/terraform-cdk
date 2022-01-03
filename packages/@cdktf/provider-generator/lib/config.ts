import * as fs from "fs-extra";
import * as path from "path";
import { Language } from "./get/constructs-maker";
import { env } from "process";
import { isRegistryModule } from "./get/module";
import { toPascalCase } from "codemaker";

const CONTEXT_ENV = "CDKTF_CONTEXT_JSON";

const CONFIG_FILE = "cdktf.json";
const DEFAULTS = {
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

  constructor(item: TerraformDependencyConstraint | string) {
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
  checkCodeMakerOutput?: boolean;
  readonly context?: { [key: string]: any };
}

export const parseConfig = (configJSON?: string) => {
  const config: Config = {
    ...DEFAULTS,
    ...JSON.parse(configJSON || "{}"),
  };

  config.checkCodeMakerOutput =
    isPresent(config.terraformModules) || isPresent(config.terraformProviders);

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
