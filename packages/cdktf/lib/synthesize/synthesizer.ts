// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as path from "path";
import * as fs from "fs";
import stringify = require("json-stable-stringify");
import { TerraformStack } from "../terraform-stack";
import { IStackSynthesizer, ISynthesisSession } from "./types";
import { AnnotationMetadataEntryType, Annotations } from "../annotations";
import { ConstructOrder, IConstruct, MetadataEntry } from "constructs";
import { Aspects, IAspect } from "../aspect";
import { StackAnnotation } from "../manifest";
import { ValidateTerraformVersion } from "../validations/validate-terraform-version";

// eslint-disable-next-line jsdoc/require-jsdoc
export class StackSynthesizer implements IStackSynthesizer {
  /**
   * @param stack the stack to synthesize
   * @param continueOnErrorAnnotations if set to true, `synthesize()` will not throw an error
   * if it encounters an error Annotation. However, it will still add all errors to the manifest
   * file. The cdktf-cli uses this flag to print the errors itself.
   */
  constructor(
    protected stack: TerraformStack,
    private continueOnErrorAnnotations = false
  ) {}

  synthesize(session: ISynthesisSession) {
    invokeAspects(this.stack);

    if (this.stack.hasResourceMove()) {
      this.stack.node.addValidation(
        new ValidateTerraformVersion(
          ">=1.5",
          `Resource move functionality is only supported for Terraform >=1.5. Please upgrade your Terraform version.`
        )
      );
    }

    if (!session.skipValidation) {
      this.stack.runAllValidations();
    }

    const manifest = session.manifest;
    const stackManifest = manifest.forStack(this.stack);

    const workingDirectory = path.join(
      session.outdir,
      stackManifest.workingDirectory
    );
    if (!fs.existsSync(workingDirectory)) fs.mkdirSync(workingDirectory);

    // call custom synthesis on child nodes (leafs first)
    this.stack.node
      .findAll(ConstructOrder.POSTORDER)
      .forEach((node) => getCustomSynthesis(node)?.onSynthesize(session));

    // collect Annotations into Manifest
    const annotations = this.stack.node
      .findAll()
      .map((node) => ({
        node,
        metadatas: node.node.metadata.filter(isAnnotationMetadata),
      }))
      .map<StackAnnotation[]>(({ node, metadatas }) =>
        metadatas.map((metadata) => ({
          constructPath: node.node.path,
          level: metadata.type as AnnotationMetadataEntryType,
          message: metadata.data,
          stacktrace: metadata.trace,
        }))
      )
      .reduce((list, metadatas) => [...list, ...metadatas], []); // Array.flat()

    // it is readonly but this is the place where we are allowed to write to it
    (stackManifest.annotations as any) = annotations;

    // abort if one or more error annotations have been encountered
    if (
      !this.continueOnErrorAnnotations &&
      annotations.some(isErrorAnnotation)
    ) {
      throw new Error(
        `Encountered Annotations with level "ERROR":\n${annotations
          .filter(isErrorAnnotation)
          .map((a) => `[${a.constructPath}] ${a.message}`)
          .join("\n")}`
      );
    }

    const tfConfig = this.stack.toTerraform();

    fs.writeFileSync(
      path.join(session.outdir, stackManifest.synthesizedStackPath),
      stringify(tfConfig, { space: 2 })
    );
  }
}

/**
 * Invoke aspects on the given construct tree.
 *
 * originally from https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/private/synthesis.ts#L99-L137
 */
export function invokeAspects(root: IConstruct) {
  const invokedByPath: { [nodePath: string]: IAspect[] } = {};

  let nestedAspectWarning = false;
  recurse(root, []);

  // eslint-disable-next-line jsdoc/require-jsdoc
  function recurse(construct: IConstruct, inheritedAspects: IAspect[]) {
    const node = construct.node;
    const aspects = Aspects.of(construct);
    const allAspectsHere = [...(inheritedAspects ?? []), ...aspects.all];
    const nodeAspectsCount = aspects.all.length;
    for (const aspect of allAspectsHere) {
      let invoked = invokedByPath[node.path];
      if (!invoked) {
        invoked = invokedByPath[node.path] = [];
      }

      if (invoked.includes(aspect)) {
        continue;
      }

      aspect.visit(construct);

      // if an aspect was added to the node while invoking another aspect it will not be invoked, emit a warning
      // the `nestedAspectWarning` flag is used to prevent the warning from being emitted for every child
      if (!nestedAspectWarning && nodeAspectsCount !== aspects.all.length) {
        Annotations.of(construct).addWarning(
          "We detected an Aspect was added via another Aspect, and will not be applied"
        );
        nestedAspectWarning = true;
      }

      // mark as invoked for this node
      invoked.push(aspect);
    }

    for (const child of construct.node.children) {
      recurse(child, allAspectsHere);
    }
  }
}

const annotationMetadataEntryTypes = [
  AnnotationMetadataEntryType.INFO,
  AnnotationMetadataEntryType.WARN,
  AnnotationMetadataEntryType.ERROR,
] as string[];

// eslint-disable-next-line jsdoc/require-jsdoc
function isAnnotationMetadata(metadata: MetadataEntry): boolean {
  return annotationMetadataEntryTypes.includes(metadata.type);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function isErrorAnnotation(annotation: StackAnnotation): boolean {
  return annotation.level === AnnotationMetadataEntryType.ERROR;
}

// originally from https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/%40aws-cdk/core/lib/private/synthesis.ts#L52
const CUSTOM_SYNTHESIS_SYM = Symbol.for("cdktf/customSynthesis");

/**
 * Interface for constructs that want to do something custom during synthesis
 *
 * This feature is intended for use by the CDKTF only; 3rd party
 * library authors and CDK users should not use this function.
 */
export interface ICustomSynthesis {
  /**
   * Called when the construct is synthesized
   */
  onSynthesize(session: ISynthesisSession): void;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function addCustomSynthesis(
  construct: IConstruct,
  synthesis: ICustomSynthesis
): void {
  Object.defineProperty(construct, CUSTOM_SYNTHESIS_SYM, {
    value: synthesis,
    enumerable: false,
  });
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getCustomSynthesis(
  construct: IConstruct
): ICustomSynthesis | undefined {
  return (construct as any)[CUSTOM_SYNTHESIS_SYM];
}
