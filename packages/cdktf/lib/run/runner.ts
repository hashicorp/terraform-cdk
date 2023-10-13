import { TerraformStack } from "../terraform-stack";
import { IStackRunner } from "./types";

/**
 *
 */
export class StackRunner implements IStackRunner {
  public constructor(protected readonly stack: TerraformStack) {}

  public run() {
    console.log("Running stack: " + this.stack.node.id);
  }
}
