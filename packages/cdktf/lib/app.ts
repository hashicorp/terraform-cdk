import { Construct, Node } from 'constructs';
import fs = require('fs');

export interface AppOptions {
    /**
     * The directory to output Terraform resources.
     *
     * @default - CDKTF_OUTDIR if defined, otherwise "cdktf.out"
     */
    readonly outdir?: string;
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
        this.outdir = options.outdir ?? process.env.CDKTF_OUTDIR ?? 'cdktf.out';
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