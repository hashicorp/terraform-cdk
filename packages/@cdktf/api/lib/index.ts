// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// import { App } from "cdktf";
import { InlineApp } from "./InlineApp";
type App = any;

export interface IMetadata {
  stack?: string;
}
export interface ILogCallback {
  (message: string, metadata: IMetadata): void;
}

export interface ICdktfApplicationOptions {
  readonly logCallback?: ILogCallback;
  readonly logToStdOut?: boolean;
}

export interface IInlineProgram extends ICdktfApplicationOptions {
  /**
   * Produce a cdktf program
   */
  readonly program: IProgramProducer;
}

export interface ILocalProgram extends ICdktfApplicationOptions {
  /**
   * Path to cdktf directory
   */
  readonly cwd: string;
}

/**
 * Controls synth / plan / deploy for a CDKTF application
 */
export class CdktfApplication {
  constructor(private opts: IProgramProducer | ILocalProgram) {
    console.log(this.opts);
  }

  public synth(): Promise<SynthesizedApplication> {
    let cdktfSynthDir: string | undefined;
    if ("produce" in this.opts) {
      const app = new InlineApp();
      cdktfSynthDir = app.outdir;
      this.opts.produce(app);
      app.synth();
    }

    if ("cwd" in this.opts) {
      cdktfSynthDir = this.opts.cwd;
      // TODO: execute cdktf synth
    }

    if (!cdktfSynthDir) {
      throw new Error("Invalid");
    }

    return Promise.resolve(new SynthesizedApplication({ cdktfSynthDir }));
  }
}

export interface IResult {}
export interface ISynthesizedApplicationOptions {
  readonly logCallback?: ILogCallback;
  readonly logToStdOut?: boolean;
  readonly cdktfSynthDir: string;
}
type StackName = string;

/**
 * Represents a synthesized CDKTF application
 */
export class SynthesizedApplication {
  public readonly stacks: Record<StackName, SynthesizedStack> = {};

  constructor(private opts: ISynthesizedApplicationOptions) {
    console.log(this.opts);
    this.stacks["my-stack"] = new SynthesizedStack({
      name: "my-stack",
      logCallback: this.opts.logCallback,
    });
  }
}

export interface ISynthesizedStackOptions {
  readonly name: string;
  readonly logCallback?: ILogCallback;
  readonly logToStdOut?: boolean;
}
// TODO: should a plan be a second phase?
export interface ITerraformPlan {}

/**
 * Represents a synthesized CDKTF stack
 */
export class SynthesizedStack {
  public readonly name: string;
  constructor(private opts: ISynthesizedStackOptions) {
    console.log(this.opts);
    this.name = opts.name;
  }

  private log(message: string) {
    if (this.opts.logCallback) {
      this.opts.logCallback(message, { stack: this.name });
    }

    if (this.opts.logToStdOut) {
      console.log(`[${this.name}]: ${message}`);
    }
  }

  public plan(): Promise<ITerraformPlan> {
    this.log("planning");
    return Promise.resolve({});
  }

  public deploy(): Promise<void> {
    this.log("deploying");
    return Promise.resolve();
  }

  public destroy(): Promise<void> {
    this.log("destroying");
    return Promise.resolve();
  }
}

export interface IProviderConstraint {}
export interface IModuleConstraint {}
export interface IProgramProducer {
  produce(app: App): void;
}

/**
 * API for interacting with Terraform CDK
 */
export class Api {
  /**
   * Create a new CDKTF application from a local directory including a cdktf.json
   */
  public static localApp(
    cwd: string,
    opts: ICdktfApplicationOptions = {}
  ): CdktfApplication {
    return new CdktfApplication({ cwd, ...opts });
  }

  /**
   * Create a new CDKTF application from an inline program
   */
  public static inlineApp(config: IInlineProgram): CdktfApplication {
    const { program, ...opts } = config;
    return new CdktfApplication({ produce: program.produce, ...opts });
  }

  /**
   * Generate cdktf bindings
   */
  public static get(
    targetDirectory: string,
    providers: Array<string | IProviderConstraint>,
    modules: Array<string | IModuleConstraint>
  ): Promise<void> {
    console.log(targetDirectory, providers, modules);
    return Promise.resolve();
  }
}
