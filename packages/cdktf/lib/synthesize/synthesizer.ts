import * as path from "path";
import * as fs from "fs";
import { TerraformStack } from "../terraform-stack";
import { IStackSynthesizer, ISynthesisSession } from "./types";

export class StackSynthesizer implements IStackSynthesizer {
  constructor(protected stack: TerraformStack) {}

  synthesize(session: ISynthesisSession) {
    if (!session.skipValidation) {
      const errors = this.stack.node.validate();
      if (errors.length > 0) {
        const errorList = errors
          .map((e) => `[${this.stack.node.path}] ${e}`)
          .join("\n  ");
        throw new Error(
          `Validation failed with the following errors:\n  ${errorList}`
        );
      }
    }

    const manifest = session.manifest;
    const stackManifest = manifest.forStack(this.stack);

    const workingDirectory = path.join(
      session.outdir,
      stackManifest.workingDirectory
    );
    if (!fs.existsSync(workingDirectory)) fs.mkdirSync(workingDirectory);

    const tfConfig = this.stack.toTerraform();

    fs.writeFileSync(
      path.join(session.outdir, stackManifest.synthesizedStackPath),
      JSON.stringify(tfConfig, undefined, 2)
    );
  }
}
