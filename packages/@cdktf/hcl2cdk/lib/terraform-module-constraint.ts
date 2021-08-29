import * as path from "path";
import { isRegistryModule } from "./expressions";
import { TerraformDependencyConstraint } from "./terraform-dependency-constraint";

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

    const localMatch = this.getLocalMatch(this.source);
    if (localMatch) {
      this.localSource = `file://${path.join(process.cwd(), this.source)}`;
    }
  }

  private getLocalMatch(source: string): RegExpMatchArray | null {
    return source.match(/^(\.\/|\.\.\/|\.\\\\|\.\.\\\\)(.*)/);
  }

  private parseDependencyConstraint(
    item: string
  ): TerraformDependencyConstraint {
    const localMatch = this.getLocalMatch(item);
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
        fqn: source.replace("//", "/"),
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
