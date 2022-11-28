// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import * as core from "@cdktf/cli-core";
import { AbortController } from "node-abort-controller";
import { InlineApp } from "./InlineApp";

export { InlineApp };

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
    // this.abort = new AbortController();
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
      // TODO: support this using SynthStack.synth
    }

    if (!cdktfSynthDir) {
      throw new Error("Invalid");
    }

    return Promise.resolve(
      new SynthesizedApplication({ ...this.opts, cdktfSynthDir })
    );
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

  constructor(public opts: ISynthesizedApplicationOptions) {
    const stacks = core.SynthStack.loadStacksFromOutdir(opts.cdktfSynthDir);
    this.stacks = stacks.reduce(
      (acc, stack) => ({
        ...acc,
        [stack.name]: new SynthesizedStack({ ...this.opts, stack }),
      }),
      {}
    );
  }
}

export interface ISynthesizedStackOptions {
  readonly stack: core.SynthesizedStack;
  readonly logCallback?: ILogCallback;
  readonly logToStdOut?: boolean;
}

/**
 * Represents a synthesized CDKTF stack
 */
export class SynthesizedStack {
  public readonly stack: core.CdktfStack;
  public get name() {
    return this.stack.stack.name;
  }
  public readonly logs: Array<core.StackUpdate | core.StackApprovalUpdate> = [];
  constructor(private opts: ISynthesizedStackOptions) {
    this.stack = new core.CdktfStack({
      stack: opts.stack,
      onUpdate: (event) => {
        this.logs.push(event);

        switch (event.type) {
          // This case should not happen, we force auto-approve to prevent this friction
          case "waiting for stack approval":
            this.log(`approval required, stopping execution`);
            break;
        }
      },
      onLog: (event) => {
        event.isError
          ? this.log(`ERR: ${event.message}`)
          : this.log(event.message);
      },
      autoApprove: true,
      abortSignal: new AbortController().signal,
    });
  }

  private log(message: string) {
    if (this.opts.logCallback) {
      this.opts.logCallback(message, { stack: this.name });
    }

    if (this.opts.logToStdOut) {
      console.log(`[${this.name}]: ${message}`);
    }
  }

  public async plan(): Promise<void> {
    await this.stack.diff();
  }

  public async deploy(): Promise<void> {
    await this.stack.deploy();
  }

  public async destroy(): Promise<void> {
    await this.stack.destroy();
  }

  public async outputs(): Promise<Record<string, any>> {
    return (await this.stack.fetchOutputs()) || {};
  }
}

export interface IProviderConstraint {}
export interface IModuleConstraint {}
export interface IProgramProducer {
  produce(app: InlineApp): void;
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
