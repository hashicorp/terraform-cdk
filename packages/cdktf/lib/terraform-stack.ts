import { Construct, IConstruct, Node } from "constructs";
import { resolve } from "./_tokens";

import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";
import { TerraformProvider } from "./terraform-provider";
import {
  EXCLUDE_STACK_ID_FROM_LOGICAL_IDS,
  ALLOW_SEP_CHARS_IN_LOGICAL_IDS,
} from "./features";
import { makeUniqueId } from "./private/unique";
import { IStackSynthesizer } from "./synthesize/types";
import { StackSynthesizer } from "./synthesize/synthesizer";

const STACK_SYMBOL = Symbol.for("cdktf/TerraformStack");
import { ValidateProviderPresence } from "./validations";
import { App } from "./app";
import { TerraformBackend } from "./terraform-backend";

export interface TerraformStackMetadata {
  readonly stackName: string;
  readonly version: string;
  readonly backend: string;
}

export class TerraformStack extends Construct {
  private readonly rawOverrides: any = {};
  private readonly cdktfVersion: string;
  public synthesizer: IStackSynthesizer;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.cdktfVersion = this.node.tryGetContext("cdktfVersion");
    this.synthesizer = new StackSynthesizer(
      this,
      process.env.CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS !== undefined
    );
    Object.defineProperty(this, STACK_SYMBOL, { value: true });
    this.node.addValidation(new ValidateProviderPresence(this));
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

      const node = c.node;

      if (!node.scope) {
        let hint = "";
        if (
          construct.node.scope === c &&
          c instanceof App &&
          construct instanceof TerraformBackend
        ) {
          // the scope of the originally passed construct equals the construct c
          // which has no scope (i.e. has no parent construct) and c is an App
          // and our construct is a Backend
          hint = `. You seem to have passed your root App as scope to a TerraformBackend construct. Pass a stack as scope to your backend instead.`;
        }

        throw new Error(
          `No stack could be identified for the construct at path '${construct.node.path}'${hint}`
        );
      }

      return _lookup(node.scope);
    }
  }

  public prepareStack() {
    // A preparing resolve run might add new resources to the stack, e.g. for cross stack references.
    terraformElements(this).forEach((e) =>
      resolve(this, e.toTerraform(), true)
    );
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
      tfElement instanceof TerraformElement ? tfElement.node : tfElement;
    const stack =
      tfElement instanceof TerraformElement ? tfElement.cdktfStack : this;

    let stackIndex;
    if (node.tryGetContext(EXCLUDE_STACK_ID_FROM_LOGICAL_IDS)) {
      stackIndex = node.scopes.indexOf(stack);
    } else {
      stackIndex = 0;
    }

    const components = node.scopes.slice(stackIndex + 1).map((c) => c.node.id);
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

      for (const child of node.node.children) {
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
      stackName: this.node.id,
      backend: "local", // overwritten by backend implementations if used
      ...(Object.keys(this.rawOverrides).length > 0
        ? { overrides: { stack: Object.keys(this.rawOverrides) } }
        : {}),
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
}

function terraformElements(
  node: IConstruct,
  into: TerraformElement[] = []
): TerraformElement[] {
  if (node instanceof TerraformElement) {
    into.push(node);
  }

  for (const child of node.node.children) {
    // Don't recurse into a substack
    if (TerraformStack.isStack(child)) {
      continue;
    }

    terraformElements(child, into);
  }

  return into;
}
