import { Construct, Node, ConstructMetadata } from 'constructs';
import * as fs from 'fs';
import { TerraformStack } from './terraform-stack';
import { version } from '../package.json';
import * as path from 'path';
export const CONTEXT_ENV = 'CDKTF_CONTEXT_JSON';
export interface StackManifest {
  readonly name: string;
  readonly constructPath: string;
  readonly synthesizedStackPath: string;
  readonly workingDirectory: string;
}

export class Manifest {
  public static readonly fileName = 'manifest.json';
  public static readonly stacksFolder = 'stacks';
  public static readonly stackFileName = 'cdk.tf.json';

  public readonly stacks: StackManifest[] = [];

  constructor(public readonly version: string, public readonly outdir: string) {
    fs.mkdirSync(this.outdir, Manifest.stacksFolder)
  }

  public forStack(stack: TerraformStack): StackManifest {
    const node = Node.of(stack)
    const manifest = {
      name: node.id,
      constructPath: node.path,
      workingDirectory: path.join(Manifest.stacksFolder, node.id),
      synthesizedStackPath: path.join(Manifest.stacksFolder, node.id, Manifest.stackFileName)
    }
    this.stacks.push(manifest)

    return manifest;
  }

  public buildManifest(): any {
    return {
      version: this.version,
      stacks: this.stacks.reduce((newObject: Record<string, StackManifest>, stack: StackManifest) => {
        newObject[stack.name] = stack;
        return newObject
      }, {})
    }
  }

  public writeToFile() {
    fs.writeFileSync(path.join(this.outdir, Manifest.fileName), JSON.stringify(this.buildManifest(), undefined, 2));
  }
}

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
    public readonly targetStackId: string | undefined

    /**
     * Defines an app
     * @param options configuration options
     */
    constructor(options: AppOptions = {}) {
        super(undefined as any, '');
        this.outdir = process.env.CDKTF_OUTDIR ?? options.outdir ?? 'cdktf.out';
        this.targetStackId = process.env.CDKTF_TARGET_STACK_ID

        this.loadContext(options.context);

        const node = Node.of(this)
        if (options.stackTraces === false) {
            node.setContext(ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA, true);
        }

        node.setContext('cdktfVersion', version)
    }

    /**
     * Synthesizes all resources to the output directory
     */
    public synth(): void {
      if (!fs.existsSync(this.outdir)) {
        fs.mkdirSync(this.outdir);
      }

      const manifest = new Manifest(version, this.outdir)

      Node.of(this).synthesize({
        outdir: this.outdir,
        sessionContext: {
          manifest
        }
      });

      manifest.writeToFile();
    }

    private loadContext(defaults: { [key: string]: string } = { }) {
        const node = Node.of(this)

        // prime with defaults passed through constructor
        for (const [k, v] of Object.entries(defaults)) {
          node.setContext(k, v);
        }

        // read from environment
        const contextJson = process.env[CONTEXT_ENV];
        const contextFromEnvironment = contextJson
          ? JSON.parse(contextJson)
          : { };

        for (const [k, v] of Object.entries(contextFromEnvironment)) {
          node.setContext(k, v);
        }
      }
}