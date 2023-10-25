import { LiveRunner } from "../live-runner";
import { TerraformStack } from "../terraform-stack";
import { IStackRunner } from "./types";

/**
 *
 */
export class StackRunner implements IStackRunner {
  public constructor(protected readonly stack: TerraformStack) {}

  public async run(): Promise<any> {
    console.log("Running stack: " + this.stack.node.id);

    await LiveRunner.session.initialize();
    const result = await this.stack.run();

    if (result && typeof result === "object") {
      await LiveRunner.session.clearTemporaryOutputs(this.stack);
      await LiveRunner.session.createOutputs(result, this.stack);

      console.log("Stack outputs:");

      const stateOuts = await LiveRunner.session.outputsFromState();

      // print out outputs as simple key values
      for (const [name, value] of Object.entries(stateOuts)) {
        console.log(
          `${name} = ${value.sensitive ? "(sensitive value)" : value.value}`
        );
      }
    }

    // move created state to local folder
    await LiveRunner.session.saveState();

    return result;
  }
}
