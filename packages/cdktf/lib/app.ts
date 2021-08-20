import { Construct, IConstruct, MetadataEntry } from "constructs";
import * as fs from "fs";
import { version } from "../package.json";
import {
  AnnotationMetadataEntryType,
  Annotations,
  DISABLE_STACK_TRACE_IN_METADATA,
} from "./annotations";
import { Aspects, IAspect } from "./aspect";
import { Manifest, StackAnnotation } from "./manifest";
import { ISynthesisSession } from "./synthesize";
import { TerraformStack } from "./terraform-stack";

export const CONTEXT_ENV = "CDKTF_CONTEXT_JSON";
export interface AppOptions {
  /**
   * The directory to output Terraform resources.
   *
   * @default - CDKTF_OUTDIR if defined, otherwise "cdktf.out"
   */
  readonly outdir?: string;
  readonly stackTraces?: boolean;

  /**
   * Additional context values for the application.
   *
   * Context set by the CLI or the `context` key in `cdktf.json` has precedence.
   *
   * Context can be read from any construct using `node.getContext(key)`.
   *
   * @default - no additional context
   */
  readonly context?: { [key: string]: any };

  /**
   * Whether to skip the validation during synthesis of the app
   *
   * @default - false
   */
  readonly skipValidation?: boolean;
}

/**
 * Represents a cdktf application.
 */
export class App extends Construct {
  /**
   * The output directory into which resources will be synthesized.
   */
  public readonly outdir: string;

  /**
   * The stack which will be synthesized. If not set, all stacks will be synthesized.
   */
  public readonly targetStackId: string | undefined;

  public readonly manifest: Manifest;

  /**
   * Whether to skip the validation during synthesis of the app
   */
  public readonly skipValidation?: boolean;

  /**
   * Defines an app
   * @param options configuration options
   */
  constructor(options: AppOptions = {}) {
    super(undefined as any, "");
    this.outdir = process.env.CDKTF_OUTDIR ?? options.outdir ?? "cdktf.out";
    this.targetStackId = process.env.CDKTF_TARGET_STACK_ID;
    this.skipValidation = options.skipValidation;

    this.loadContext(options.context);

    const node = this.node;
    if (options.stackTraces === false) {
      node.setContext(DISABLE_STACK_TRACE_IN_METADATA, true);
    }

    node.setContext("cdktfVersion", version);

    if (!fs.existsSync(this.outdir)) {
      fs.mkdirSync(this.outdir);
    }
    this.manifest = new Manifest(version, this.outdir);
  }

  /**
   * Synthesizes all resources to the output directory
   */
  public synth(): void {
    const session: ISynthesisSession = {
      outdir: this.outdir,
      skipValidation: this.skipValidation,
      manifest: this.manifest,
    };

    invokeAspects(this);

    const stacks = this.node
      .findAll()
      .filter<TerraformStack>(
        (c): c is TerraformStack => c instanceof TerraformStack
      );

    // collect Annotations into Manifest
    stacks.forEach((stack) => {
      const annotations = stack.node
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
      (this.manifest.forStack(stack).annotations as any) = annotations;
    });

    stacks.forEach((stack) => stack.synthesizer.synthesize(session));

    this.manifest.writeToFile();
  }

  private loadContext(defaults: { [key: string]: string } = {}) {
    const node = this.node;

    // prime with defaults passed through constructor
    for (const [k, v] of Object.entries(defaults)) {
      node.setContext(k, v);
    }

    // read from environment
    const contextJson = process.env[CONTEXT_ENV];
    const contextFromEnvironment = contextJson ? JSON.parse(contextJson) : {};

    for (const [k, v] of Object.entries(contextFromEnvironment)) {
      node.setContext(k, v);
    }
  }
}

/**
 * Invoke aspects on the given construct tree.
 *
 * originally from https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/private/synthesis.ts#L99-L137
 */
function invokeAspects(root: IConstruct) {
  const invokedByPath: { [nodePath: string]: IAspect[] } = {};

  let nestedAspectWarning = false;
  recurse(root, []);

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
function isAnnotationMetadata(metadata: MetadataEntry): boolean {
  return annotationMetadataEntryTypes.includes(metadata.type);
}
