// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Manifest } from "../manifest";

/**
 * Encodes information how a certain Stack should be deployed
 * inspired by AWS CDK v2 implementation (synth functionality was removed in constructs v10)
 */
export interface IStackSynthesizer {
  /**
   * Synthesize the associated stack to the session
   */
  synthesize(session: ISynthesisSession): void;
}

/**
 * Represents a single session of synthesis. Passed into `TerraformStack.onSynthesize()` methods.
 * originally from aws/constructs lib v3.3.126 (synth functionality was removed in constructs v10)
 */
export interface ISynthesisSession {
  /**
   * The output directory for this synthesis session.
   */
  readonly outdir: string;

  readonly skipValidation?: boolean;

  readonly manifest: Manifest;

  /**
   * Additional context passed to synthesizeNode through `sessionContext`.
   */
  [key: string]: any;
}
