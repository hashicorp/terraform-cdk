import { Construct, IConstruct } from "constructs";
import * as fs from "fs";
import { version } from "../package.json";
import { DISABLE_STACK_TRACE_IN_METADATA } from "./annotations";
import { Manifest } from "./manifest";
import { ISynthesisSession } from "./synthesize";
import { TerraformStack } from "./terraform-stack";

const APP_SYMBOL = Symbol.for("cdktf/App");
export const CONTEXT_ENV = "CDKTF_CONTEXT_JSON";
export interface AppOptions {
  /**
   * The directory to output Terraform resources.
   *
   * @default - CDKTF_OUTDIR if defined, otherwise "cdktf.out"
   */
  readonly outdir?: string;
  readonly stackTraces?: boolean;

  /**
   * Additional context values for the application.
   *
   * Context set by the CLI or the `context` key in `cdktf.json` has precedence.
   *
   * Context can be read from any construct using `node.getContext(key)`.
   *
   * @default - no additional context
   */
  readonly context?: { [key: string]: any };

  /**
   * Whether to skip the validation during synthesis of the app
   *
   * @default - false
   */
  readonly skipValidation?: boolean;
}

/**
 * Represents a cdktf application.
 */
export class App extends Construct {
  /**
   * The output directory into which resources will be synthesized.
   */
  public readonly outdir: string;

  /**
   * The stack which will be synthesized. If not set, all stacks will be synthesized.
   */
  public readonly targetStackId: string | undefined;

  public readonly manifest: Manifest;

  /**
   * Whether to skip the validation during synthesis of the app
   */
  public readonly skipValidation?: boolean;

  /**
   * Defines an app
   * @param options configuration options
   */
  constructor(options: AppOptions = {}) {
    super(undefined as any, "");
    Object.defineProperty(this, APP_SYMBOL, { value: true });

    this.outdir = process.env.CDKTF_OUTDIR ?? options.outdir ?? "cdktf.out";
    this.targetStackId = process.env.CDKTF_TARGET_STACK_ID;
    this.skipValidation = options.skipValidation;

    this.loadContext(options.context);

    const node = this.node;
    if (options.stackTraces === false) {
      node.setContext(DISABLE_STACK_TRACE_IN_METADATA, true);
    }

    node.setContext("cdktfVersion", version);

    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir);
    }
    this.manifest = new Manifest(version, this.outdir);
  }

  public static isApp(x: any): x is App {
    return x !== null && typeof x === "object" && APP_SYMBOL in x;
  }

  public static of(construct: IConstruct): App {
    return _lookup(construct);

    function _lookup(c: IConstruct): App {
      if (App.isApp(c)) {
        return c;
      }

      const node = c.node;

      if (!node.scope) {
        throw new Error(
          `No app could be identified for the construct at path '${construct.node.path}'`
        );
      }

      return _lookup(node.scope);
    }
  }

  /**
   * Synthesizes all resources to the output directory
   */
  public synth(): void {
    const session: ISynthesisSession = {
      outdir: this.outdir,
      skipValidation: this.skipValidation,
      manifest: this.manifest,
    };

    const stacks = this.node
      .findAll()
      .filter<TerraformStack>(
        (c): c is TerraformStack => c instanceof TerraformStack
      );

    stacks.forEach((stack) => stack.prepareStack());
    stacks.forEach((stack) => stack.synthesizer.synthesize(session));

    this.manifest.writeToFile();
  }

  private loadContext(defaults: { [key: string]: string } = {}) {
    const node = this.node;

    // prime with defaults passed through constructor
    for (const [k, v] of Object.entries(defaults)) {
      node.setContext(k, v);
    }

    // read from environment
    const contextJson = process.env[CONTEXT_ENV];
    const contextFromEnvironment = contextJson ? JSON.parse(contextJson) : {};

    for (const [k, v] of Object.entries(contextFromEnvironment)) {
      node.setContext(k, v);
    }
  }
}
