import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { StepFunctionsStack } from "./main";

describe("typescript-state-machine", () => {
  it("should synthesize", () => {
    const stack = new StepFunctionsStack(Testing.app(), "test");

    // Aspects are currently not invoked via Testing.synth / Testing.synthScope
    // This makes sure the AWS Adapter converts all constructs to cdktf
    Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot();
  });
});
