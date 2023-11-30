// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct, IConstruct } from "constructs";
import * as fs from "fs";
import { version } from "../package.json";
import { DISABLE_STACK_TRACE_IN_METADATA } from "./annotations";
import { Manifest } from "./manifest";
import { ISynthesisSession } from "./synthesize";
import { TerraformStack } from "./terraform-stack";

const APP_SYMBOL = Symbol.for("cdktf/App");
export const CONTEXT_ENV = "CDKTF_CONTEXT_JSON";
export interface AppConfig {
  /**
   * The directory to output Terraform resources.
   *
   * @default - CDKTF_OUTDIR if defined, otherwise "cdktf.out"
   */
  readonly outdir?: string;
  readonly stackTraces?: boolean;

  readonly hclOutput?: boolean;

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
   * Whether to skip all validations during synthesis of the app
   *
   * @default - false
   */
  readonly skipValidation?: boolean;

  /**
   * Whether to skip backend validation during synthesis of the app
   *
   * @default - false
   */
  readonly skipBackendValidation?: boolean;
}

/**
 * Represents a cdktf application.
 */
export class App extends Construct {
  /**
   * The output directory into which resources will be synthesized.
   */
  public readonly outdir: string;

  public readonly hclOutput: boolean;

  /**
   * The stack which will be synthesized. If not set, all stacks will be synthesized.
   */
  public readonly targetStackId: string | undefined;

  public readonly manifest: Manifest;

  /**
   * Whether to skip all validations during synthesis of the app
   */
  public readonly skipValidation: boolean;

  /**
   * Whether to skip backend validation during synthesis of the app
   */
  public readonly skipBackendValidation: boolean;

  /**
   * Defines an app
   * @param config configuration
   */
  constructor(config: AppConfig = {}) {
    super(undefined as any, "");
    Object.defineProperty(this, APP_SYMBOL, { value: true });

    this.outdir = process.env.CDKTF_OUTDIR ?? config.outdir ?? "cdktf.out";
    const envHclOutput = process.env.CDKTF_HCL_OUTPUT;
    let hclOutput = config.hclOutput || false;
    if (envHclOutput !== undefined) {
      hclOutput = envHclOutput === "true";
    }

    this.hclOutput = hclOutput;
    this.targetStackId = process.env.CDKTF_TARGET_STACK_ID;
    this.skipValidation = config.skipValidation || false;
    this.skipBackendValidation = config.skipBackendValidation || false;

    this.loadContext(config.context);

    const node = this.node;
    if (config.stackTraces === false) {
      node.setContext(DISABLE_STACK_TRACE_IN_METADATA, true);
    }

    node.setContext("cdktfVersion", version);

    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir);
    }
    this.manifest = new Manifest(version, this.outdir, this.hclOutput);
  }

  public static isApp(x: any): x is App {
    return x !== null && typeof x === "object" && APP_SYMBOL in x;
  }

  public static of(construct: IConstruct): App {
    return _lookup(construct);

    // eslint-disable-next-line jsdoc/require-jsdoc
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
      .filter<TerraformStack>(TerraformStack.isStack);

    stacks.forEach((stack) => stack.prepareStack());
    stacks.forEach((stack) => stack.synthesizer.synthesize(session));

    if (!this.skipValidation) {
      const validations = this.node.validate();
      if (validations.length) {
        const errorList = validations.join("\n  ");
        throw new Error(
          `App level validation failed with the following errors:\n  ${errorList}`
        );
      }
    }

    this.manifest.writeToFile();
  }

  /**
   * Creates a reference from one stack to another, invoked on prepareStack since it creates extra resources
   */
  public crossStackReference(
    fromStack: TerraformStack,
    toStack: TerraformStack,
    identifier: string
  ): string {
    toStack.addDependency(fromStack);
    const outputId =
      fromStack.registerOutgoingCrossStackReference(
        identifier
      ).friendlyUniqueId;

    const remoteState = toStack.registerIncomingCrossStackReference(fromStack);

    return remoteState.getString(outputId);
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
