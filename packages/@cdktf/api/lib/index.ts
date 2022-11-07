// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

// import { App } from "cdktf";
type App = any;
export interface ICdktfApplicationOptions {
  /**
   * Produce a cdktf program, forbidden if cwd is provided?
   */
  program?(app: App): void; // TODO: can this be Promise<void>?

  /**
   * Path to cdktf directory (optional if program is provided)
   */
  cwd?: string;
}

/**
 * Controls synth / plan / deploy for a CDKTF application
 */
export class CdktfApplication {
  constructor(private opts: ICdktfApplicationOptions) {
    console.log(this.opts);
  }

  public synth(): SynthesizedApplication {
    return new SynthesizedApplication({});
  }
}

export interface IResult {}
export interface ISynthesizedApplicationOptions {}
/**
 * Controls synth / plan / deploy for a CDKTF application
 */
export class SynthesizedApplication {
  constructor(private opts: ISynthesizedApplicationOptions) {
    console.log(this.opts);
  }

  public plan(): boolean {
    return true;
  }

  public deploy(): boolean {
    return true;
  }

  public destroy(): boolean {
    return true;
  }
}
