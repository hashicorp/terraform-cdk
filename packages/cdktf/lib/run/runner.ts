import { TerraformStack } from "../terraform-stack";
import { IStackRunner } from "./types";

/**
 *
 */
export class StackRunner implements IStackRunner {
  public constructor(protected readonly stack: TerraformStack) {}

  public async run(): Promise<any> {
    console.log("Running stack: " + this.stack.node.id);

    return this.stack.run();
  }
}
