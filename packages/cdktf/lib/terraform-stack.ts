import { Construct, IConstruct, ISynthesisSession, Node } from "constructs";
import { resolve } from "./_tokens";
import * as fs from "fs";
import * as path from "path";
import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";
import { TerraformProvider } from "./terraform-provider";
import {
  EXCLUDE_STACK_ID_FROM_LOGICAL_IDS,
  ALLOW_SEP_CHARS_IN_LOGICAL_IDS,
} from "./features";
import { makeUniqueId } from "./private/unique";
import { Manifest } from "./manifest";

const STACK_SYMBOL = Symbol.for("ckdtf/TerraformStack");

export interface TerraformStackMetadata {
  readonly stackName: string;
  readonly version: string;
  readonly backend: string;
}

export class TerraformStack extends Construct {
  private readonly rawOverrides: any = {};
  private readonly cdktfVersion: string;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.cdktfVersion = Node.of(this).tryGetContext("cdktfVersion");

    Object.defineProperty(this, STACK_SYMBOL, { value: true });
  }

  public static isStack(x: any): x is TerraformStack {
    return x !== null && typeof x === "object" && STACK_SYMBOL in x;
  }

  public static of(construct: IConstruct): TerraformStack {
    return _lookup(construct);

    function _lookup(c: IConstruct): TerraformStack {
      if (TerraformStack.isStack(c)) {
        return c;
      }

      const node = Node.of(c);

      if (!node.scope) {
        throw new Error(
          `No stack could be identified for the construct at path '${
            Node.of(construct).path
          }'`
        );
      }

      return _lookup(node.scope);
    }
  }

  public addOverride(path: string, value: any) {
    const parts = path.split(".");
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject =
        curr[key] != null &&
        typeof curr[key] === "object" &&
        !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  public getLogicalId(tfElement: TerraformElement | Node): string {
    // wrap the allocation for future renaming support
    return this.allocateLogicalId(tfElement);
  }

  /**
   * Returns the naming scheme used to allocate logical IDs. By default, uses
   * the `HashedAddressingScheme` but this method can be overridden to customize
   * this behavior.
   *
   * @param tfElement The element for which the logical ID is allocated.
   */
  protected allocateLogicalId(tfElement: TerraformElement | Node): string {
    const node =
      tfElement instanceof TerraformElement
        ? tfElement.constructNode
        : tfElement;
    const stack =
      tfElement instanceof TerraformElement ? tfElement.cdktfStack : this;

    let stackIndex;
    if (node.tryGetContext(EXCLUDE_STACK_ID_FROM_LOGICAL_IDS)) {
      stackIndex = node.scopes.indexOf(stack);
    } else {
      stackIndex = 0;
    }

    const components = node.scopes
      .slice(stackIndex + 1)
      .map((c) => Node.of(c).id);
    return components.length > 0
      ? makeUniqueId(
          components,
          node.tryGetContext(ALLOW_SEP_CHARS_IN_LOGICAL_IDS)
        )
      : "";
  }

  public allProviders(): TerraformProvider[] {
    const providers: TerraformProvider[] = [];

    const visit = async (node: IConstruct) => {
      if (node instanceof TerraformProvider) {
        providers.push(node);
      }

      for (const child of Node.of(node).children) {
        visit(child);
      }
    };

    visit(this);

    return resolve(this, providers);
  }

  public toTerraform(): any {
    const tf = {};

    const metadata: TerraformStackMetadata = {
      version: this.cdktfVersion,
      stackName: Node.of(this).id,
      backend: "local", // overwritten by backend implementations if used
    };

    const elements = terraformElements(this);

    const metadatas = elements.map((e) => resolve(this, e.toMetadata()));
    for (const meta of metadatas) {
      deepMerge(metadata, meta);
    }

    (tf as any)["//"] = { metadata };

    const fragments = elements.map((e) => resolve(this, e.toTerraform()));
    for (const fragment of fragments) {
      deepMerge(tf, fragment);
    }

    deepMerge(tf, this.rawOverrides);

    return resolve(this, tf);
  }

  protected onSynthesize(session: ISynthesisSession) {
    const manifest = session.manifest as Manifest;
    const stackManifest = manifest.forStack(this);

    const workingDirectory = path.join(
      session.outdir,
      stackManifest.workingDirectory
    );
    if (!fs.existsSync(workingDirectory)) fs.mkdirSync(workingDirectory);

    fs.writeFileSync(
      path.join(session.outdir, stackManifest.synthesizedStackPath),
      JSON.stringify(this.toTerraform(), undefined, 2)
    );
  }
}

function terraformElements(
  node: IConstruct,
  into: TerraformElement[] = []
): TerraformElement[] {
  if (node instanceof TerraformElement) {
    into.push(node);
  }

  for (const child of Node.of(node).children) {
    // Don't recurse into a substack
    if (TerraformStack.isStack(child)) {
      continue;
    }

    terraformElements(child, into);
  }

  return into;
}
