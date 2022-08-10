// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Originally from aws-cdk v2 because with constructs v10 addMessage was removed
// in favor of Annotations in the AWS CDK
// https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/annotations.ts
import { IConstruct } from "constructs";

export enum AnnotationMetadataEntryType {
  INFO = "@cdktf/info",
  WARN = "@cdktf/warn",
  ERROR = "@cdktf/error",
}

export const DISABLE_STACK_TRACE_IN_METADATA =
  "@cdktf/disable_stack_trace_in_metadata";

/**
 * Includes API for attaching annotations such as warning messages to constructs.
 */
export class Annotations {
  /**
   * Returns the annotations API for a construct scope.
   * @param scope The scope
   */
  public static of(scope: IConstruct) {
    return new Annotations(scope);
  }

  private readonly stackTraces: boolean;

  private constructor(private readonly scope: IConstruct) {
    const disableTrace =
      scope.node.tryGetContext(DISABLE_STACK_TRACE_IN_METADATA) || false;

    this.stackTraces = !disableTrace;
  }

  /**
   * Adds a warning metadata entry to this construct.
   *
   * The CLI will display the warning when an app is synthesized.
   * In a future release the CLI might introduce a --strict flag which
   * will then fail the synthesis if it encounters a warning.
   *
   * @param message The warning message.
   */
  public addWarning(message: string) {
    this.addMessage(AnnotationMetadataEntryType.WARN, message);
  }

  /**
   * Adds an info metadata entry to this construct.
   *
   * The CLI will display the info message when apps are synthesized.
   *
   * @param message The info message.
   */
  public addInfo(message: string): void {
    this.addMessage(AnnotationMetadataEntryType.INFO, message);
  }

  /**
   * Adds an { "error": <message> } metadata entry to this construct.
   * The toolkit will fail synthesis when errors are reported.
   * @param message The error message.
   */
  public addError(message: string) {
    this.addMessage(AnnotationMetadataEntryType.ERROR, message);
  }

  /**
   * Adds a message metadata entry to the construct node, to be displayed by the CDK CLI.
   * @param level The message level
   * @param message The message itself
   */
  private addMessage(level: AnnotationMetadataEntryType, message: string) {
    this.scope.node.addMetadata(level, message, {
      stackTrace: this.stackTraces,
    });
  }
}
