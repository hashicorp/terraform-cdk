import { SynthesizedStack } from "./synth-stack";
import { AnnotationMetadataEntryType, CONTEXT_ENV } from "cdktf";
import * as chalk from "chalk";
import { DEPRECATED_FLAGS } from "cdktf/lib/features";

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

export function printWarningsForDeprecatedFlags() {
  const context: Record<string, boolean | undefined> = JSON.parse(
    process.env[CONTEXT_ENV] || "{}"
  );

  // We want to print a warning for every deprecated flag that is set to false or not set
  const deprecatedFlagsInUse = DEPRECATED_FLAGS.filter(
    (flag) => context[flag] === false || context[flag] === undefined
  );

  if (deprecatedFlagsInUse.length > 0) {
    const plural = deprecatedFlagsInUse.length > 1;
    console.log(
      chalkColour.yellow(
        `WARNING: The flag${plural ? "s" : ""} ${deprecatedFlagsInUse.join(
          " & "
        )} ${
          plural ? "are" : "is"
        } deprecated and will be removed in the next minor release. Please set ${
          plural ? "them" : "it"
        } to true in your cdktf.json's context map.`
      )
    );
  }
}
