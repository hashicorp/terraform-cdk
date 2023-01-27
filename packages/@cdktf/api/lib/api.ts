// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

import * as core from "@cdktf/cli-core";
import { AbortController } from "node-abort-controller";
import { InlineApp } from "./InlineApp";
import * as path from "path";
import { readConfigSync } from "@cdktf/commons";

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

  private log(message: string, metadata: IMetadata = {}) {
    if (this.opts.logCallback) {
      this.opts.logCallback(message, metadata);
    }
    if (this.opts.logToStdOut) {
      console.log(message);
    }
  }

  public synth(): Promise<SynthesizedApplication> {
    if ("produce" in this.opts) {
      const app = new InlineApp();
      const cdktfSynthDir = app.outdir;
      this.opts.produce(app);
      app.synth();
      return Promise.resolve(
        new SynthesizedApplication({ ...this.opts, cdktfSynthDir })
      );
    }

    if ("cwd" in this.opts) {
      const config = readConfigSync(path.resolve(this.opts.cwd, "cdktf.json"));
      const project = new core.CdktfProject({
        workingDirectory: this.opts.cwd,
        synthCommand: config.app || "",
        outDir: config.output || "",
        onUpdate: () => {},
        onLog: ({ message, stackName }) => {
          this.log(message, { stack: stackName });
        },
      });

      const cdktfSynthDir = path.join(this.opts.cwd, config.output);
      return project
        .synth()
        .then(
          () => new SynthesizedApplication({ ...this.opts, cdktfSynthDir })
        );
    }

    throw new Error("Invalid: Neither cwd nor produce was specified");
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

  public getStack(name: string): SynthesizedStack {
    const stack = this.stacks[name];
    if (!stack) {
      throw new Error("Could not find stack with name: " + name);
    }

    return stack;
  }
}

export interface ISynthesizedStackOptions {
  readonly stack: any; // core.SynthesizedStack;
  readonly logCallback?: ILogCallback;
  readonly logToStdOut?: boolean;
}

/**
 * Represents a synthesized CDKTF stack
 */
export class SynthesizedStack {
  private readonly stack: any; //core.CdktfStack;
  public get name() {
    return this.stack.stack.name;
  }
  public readonly events: Array<any> = [];
  private logs: string[] = [];
  constructor(private opts: ISynthesizedStackOptions) {
    this.stack = new core.CdktfStack({
      stack: opts.stack,
      onUpdate: (event) => {
        this.events.push(event);

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
    this.logs.push(message);

    if (this.opts.logCallback) {
      this.opts.logCallback(message, { stack: this.name });
    }

    if (this.opts.logToStdOut) {
      console.log(`[${this.name}]: ${message}`);
    }
  }

  // Returns the logs because if nothing is returned, JSII will fail
  public async plan(): Promise<string> {
    console.log("plan invoked");
    await this.stack.diff();
    console.log("plan done");
    return this.logs.join("\n");
  }

  public async deploy(): Promise<string> {
    console.log("deploy invoked");
    await this.stack.deploy();
    console.log("deploy done");
    return this.logs.join("\n");
  }

  public async destroy(): Promise<string> {
    console.log("destroy invoked");
    await this.stack.destroy();
    console.log("destroy done");
    return this.logs.join("\n");
  }

  public async outputs(): Promise<Record<string, any>> {
    return (await this.stack.fetchOutputs()) || {};
  }
}

export interface IProviderConstraint {}
export interface IModuleConstraint {}
export interface IProgramProducer extends ICdktfApplicationOptions {
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
