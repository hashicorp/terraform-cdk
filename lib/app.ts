import { Construct, Node } from 'constructs';
import fs = require('fs');

export interface AppOptions {
    /**
     * The directory to output Kubernetes manifests.
     * 
     * @default - CDK8S_OUTDIR if defined, otherwise "dist"
     */
    readonly outdir?: string;
}

/**
 * Represents a cdk8s application.
 */
export class App extends Construct {
    /**
     * The output directory into which manifests will be synthesized.
     */
    public readonly outdir: string;

    /**
     * Defines an app
     * @param options configuration options
     */
    constructor(options: AppOptions = {}) {
        super(undefined as any, '');
        this.outdir = options.outdir ?? process.env.CDK8S_OUTDIR ?? 'dist';
    }

    /**
     * Synthesizes all manifests to the output directory
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