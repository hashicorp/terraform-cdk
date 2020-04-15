
import fs = require('fs');
import path = require('path');
import os = require('os');
import { App } from '../lib';
import { TerraformStack } from './terraform-stack';

/**
 * Testing utilities for tfcdk applications.
 */
export class Testing {
    /**
     * Returns an app for testing with the following properties:
     * - Output directory is a temp dir.
     */
    public static app() {
        const outdir = fs.mkdtempSync(path.join(os.tmpdir(), 'tfcdk.outdir.'));
        return new App({ outdir });
    }

    /**
     * Returns the Terraform synthesized JSON.
     */
    public static synth(stack: TerraformStack) {
        return stack.toString();
    }

    /* istanbul ignore next */
    private constructor() {
        return;
    }
}