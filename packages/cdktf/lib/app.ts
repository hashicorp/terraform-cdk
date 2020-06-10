import { Construct, Node, ConstructMetadata } from 'constructs';
import fs = require('fs');

export interface AppOptions {
    /**
     * The directory to output Terraform resources.
     *
     * @default - CDKTF_OUTDIR if defined, otherwise "cdktf.out"
     */
    readonly outdir?: string;
    readonly stackTraces?: boolean;
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
     * Defines an app
     * @param options configuration options
     */
    constructor(options: AppOptions = {}) {
        super(undefined as any, '');
        this.outdir = process.env.CDKTF_OUTDIR ?? options.outdir ?? 'cdktf.out';

        if (options.stackTraces === false) {
            Node.of(this).setContext(ConstructMetadata.DISABLE_STACK_TRACE_IN_METADATA, true);
        }
    }

    /**
     * Synthesizes all resources to the output directory
     */
    public synth(): void {
        if (!fs.existsSync(this.outdir)) {
            fs.mkdirSync(this.outdir);
        }

        Node.of(this).synthesize({
            outdir: this.outdir
        });
    }
}