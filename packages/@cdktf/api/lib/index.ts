// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// import { App } from "cdktf";
type App = any;
export interface ICdktfApplicationOptions {}

export interface IInlineProgram extends ICdktfApplicationOptions {
  /**
   * Produce a cdktf program
   */
  program: IProgramProducer;
}

export interface ILocalProgram extends ICdktfApplicationOptions {
  /**
   * Path to cdktf directory
   */
  cwd: string;
}

/**
 * Controls synth / plan / deploy for a CDKTF application
 */
export class CdktfApplication {
  constructor(private opts: IProgramProducer | ILocalProgram) {
    console.log(this.opts);
  }

  public synth(): Promise<SynthesizedApplication> {
    return Promise.resolve(new SynthesizedApplication({}));
  }
}

export interface IResult {}
export interface ISynthesizedApplicationOptions {}
type StackName = string;

/**
 * Represents a synthesized CDKTF application
 */
export class SynthesizedApplication {
  public readonly stacks: Record<StackName, SynthesizedStack> = {
    "my-stack": new SynthesizedStack({}),
  };

  constructor(private opts: ISynthesizedApplicationOptions) {
    console.log(this.opts);
  }
}

export interface ISynthesizedStackOptions {}
export interface ITerraformPlan {}

/**
 * Represents a synthesized CDKTF stack
 */
export class SynthesizedStack {
  constructor(private opts: ISynthesizedStackOptions) {
    console.log(this.opts);
  }

  public plan(): Promise<ITerraformPlan> {
    return Promise.resolve({});
  }

  public deploy(): Promise<void> {
    return Promise.resolve();
  }

  public destroy(): Promise<void> {
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
   * Create a new CDKTF application
   */
  public static localApp(cwd: string): CdktfApplication {
    return new CdktfApplication({ cwd });
  }

  /**
   * Create a new CDKTF application
   */
  public static inlineApp({ produce }: IProgramProducer): CdktfApplication {
    return new CdktfApplication({ produce });
  }

  /**
   * Generate cdktf bindings
   */
  public static get(
    providers: Array<string | IProviderConstraint>,
    modules: Array<string | IModuleConstraint>
  ): Promise<void> {
    console.log(providers, modules);
    return Promise.resolve();
  }
}
