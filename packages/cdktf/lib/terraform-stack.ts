import { Construct, IConstruct, Node } from "constructs";
import { resolve } from "./_tokens";

import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";
import { TerraformProvider } from "./terraform-provider";
import { LocalBackend } from "./backends/local-backend";
import { ref } from "./tfExpression";
import { TerraformOutput } from "./terraform-output";
import { TerraformRemoteState } from "./terraform-remote-state";
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

// eslint-disable-next-line @typescript-eslint/ban-types
type Constructor<T> = Function & { prototype: T };
type StackIdentifier = string;
type OutputIdMap =
  | { [constructId: string]: string }
  | { [stackOrConstructId: string]: OutputIdMap };

export interface TerraformStackMetadata {
  readonly stackName: string;
  readonly version: string;
  readonly backend: string;
}

function throwIfIdIsGlobCharacter(str: string): void {
  const err = (char: string) =>
    `Can not create Terraform stack with id "${str}". It contains a glob character: "${char}"`;

  ["*", "?", "[", "]", "{", "}", "!"].forEach((char) => {
    if (str.includes(char)) {
      throw new Error(err(char));
    }
  });
}

function throwIfIdContainsWhitespace(str: string): void {
  if (/\s/.test(str)) {
    throw new Error(
      `Can not create TerraformStack with id "${str}". It contains a whitespace character.`
    );
  }
}

export class TerraformStack extends Construct {
  private readonly rawOverrides: any = {};
  private readonly cdktfVersion: string;
  private crossStackOutputs: Record<StackIdentifier, TerraformOutput> = {};
  private crossStackDataSources: Record<StackIdentifier, TerraformRemoteState> =
    {};
  public synthesizer: IStackSynthesizer;
  public dependencies: TerraformStack[] = [];

  constructor(scope: Construct, id: string) {
    super(scope, id);

    throwIfIdIsGlobCharacter(id);
    throwIfIdContainsWhitespace(id);
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

  private findAll<T>({
    byConstructor: ClassConstructor,
    byPredicate,
  }: {
    byConstructor?: Constructor<T>;
    byPredicate?: (node: unknown) => boolean;
  }): T[] {
    const predicate = ClassConstructor
      ? (x: unknown) => x instanceof ClassConstructor
      : byPredicate;

    if (!predicate) {
      throw new Error("Either byConstructor or byPredicate must be provided");
    }

    const items: T[] = [];

    const visit = async (node: IConstruct) => {
      if (predicate(node)) {
        items.push(node as unknown as T);
      }

      for (const child of node.node.children) {
        visit(child);
      }
    };

    visit(this);

    return items;
  }

  public prepareStack() {
    // Ensure we have a backend configured
    this.ensureBackendExists();
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
    return this.findAll({ byConstructor: TerraformProvider });
  }

  public ensureBackendExists(): TerraformBackend {
    const backends = this.findAll<TerraformBackend>({
      byPredicate: (item: unknown) => TerraformBackend.isBackend(item),
    });
    return backends[0] || new LocalBackend(this, {});
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

    const outputs: OutputIdMap = elements.reduce((carry, item) => {
      if (!TerraformOutput.isTerrafromOutput(item)) {
        return carry;
      }

      deepMerge(
        carry,
        item.node.path.split("/").reduceRight((innerCarry, part) => {
          if (Object.keys(innerCarry).length === 0) {
            return { [part]: item.friendlyUniqueId };
          }
          return { [part]: innerCarry };
        }, {})
      );

      return carry;
    }, {});

    (tf as any)["//"] = { metadata, outputs };

    const fragments = elements.map((e) => resolve(this, e.toTerraform()));
    for (const fragment of fragments) {
      deepMerge(tf, fragment);
    }

    deepMerge(tf, this.rawOverrides);

    return resolve(this, tf);
  }

  public registerOutgoingCrossStackReference(identifier: string) {
    if (this.crossStackOutputs[identifier]) {
      return this.crossStackOutputs[identifier];
    }

    const output = new TerraformOutput(
      this,
      `cross-stack-output-${identifier}`,
      {
        value: ref(identifier, this),
        sensitive: true,
      }
    );

    this.crossStackOutputs[identifier] = output;
    return output;
  }

  public registerIncomingCrossStackReference(fromStack: TerraformStack) {
    if (this.crossStackDataSources[String(fromStack)]) {
      return this.crossStackDataSources[String(fromStack)];
    }
    const originBackend = fromStack.ensureBackendExists();
    const originPath = fromStack.node.path;

    const remoteState = originBackend.getRemoteStateDataSource(
      this,
      `cross-stack-reference-input-${originPath}`,
      originPath
    );

    this.crossStackDataSources[originPath] = remoteState;
    return remoteState;
  }

  // Check here for loops in the dependency graph
  public dependsOn(stack: TerraformStack): boolean {
    return (
      this.dependencies.includes(stack) ||
      this.dependencies.some((d) => d.dependsOn(stack))
    );
  }

  public addDependency(dependency: TerraformStack) {
    if (dependency.dependsOn(this)) {
      throw new Error(
        `Can not add dependency ${dependency} to ${this} since it would result in a loop`
      );
    }

    if (this.dependencies.includes(dependency)) {
      return;
    }

    this.dependencies.push(dependency);
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
