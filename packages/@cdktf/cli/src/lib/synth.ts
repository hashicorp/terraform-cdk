// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { SynthesizedStack } from "./synth-stack";
import { AnnotationMetadataEntryType } from "cdktf";
import * as chalk from "chalk";

const chalkColour = new chalk.Instance();

/**
 * prints annotations via console
 * @throws Error if an Annotation with level === ERROR has been encountered
 */
export function printAnnotations(stacks: SynthesizedStack[]) {
  let encounteredAnnotationError = false;

  stacks.forEach((stack) =>
    (stack.annotations || []).forEach((annotation) => {
      if (annotation.level === AnnotationMetadataEntryType.ERROR)
        encounteredAnnotationError = true;

      let color = chalkColour.whiteBright;
      let level: string = annotation.level;
      switch (annotation.level) {
        case AnnotationMetadataEntryType.INFO: {
          level = "INFO";
          break;
        }
        case AnnotationMetadataEntryType.WARN: {
          color = chalkColour.hex("#FFA500"); // orange
          level = "WARN";
          break;
        }
        case AnnotationMetadataEntryType.ERROR: {
          color = chalkColour.redBright;
          level = "ERROR";
          break;
        }
      }
      console.log(
        color(`${level} [${annotation.constructPath}]: ${annotation.message}`)
      );
      if (
        annotation.level === AnnotationMetadataEntryType.ERROR &&
        annotation.stacktrace
      )
        console.log(chalkColour.gray(annotation.stacktrace.join("\n")));
    })
  );

  if (encounteredAnnotationError) {
    throw new Error(
      "While synthesizing one or more error annotations have been encountered. Please check the log output above."
    );
  }
}
