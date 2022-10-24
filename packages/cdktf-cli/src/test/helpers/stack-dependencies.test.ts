// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { StackDependencies } from "../../bin/cmds/helper/stack-dependencies";
import { SynthesizedStack } from "../../lib/synth-stack";

function createStack(
  name: string,
  dependencies: string[] = []
): SynthesizedStack {
  return {
    name,
    dependencies,
    annotations: [],
    content: "irrelevant",
    constructPath: ".",
    synthesizedStackPath: ".",
    workingDirectory: ".",
  };
}

describe("StackDependencies", () => {
  it("returns all stacks if there are no dependencies", () => {
    const stacks = [
      createStack("stack1"),
      createStack("stack2"),
      createStack("stack3"),
    ];

    expect(new StackDependencies(stacks).pendingDeployableStacks).toEqual(
      stacks
    );
  });

  it("returns all available stacks", () => {
    const stack1 = createStack("stack1");
    const stack2 = createStack("stack2", [stack1.name]);
    const stack3 = createStack("stack3", [stack2.name]);

    expect(
      new StackDependencies([stack1, stack2, stack3]).pendingDeployableStacks
    ).toEqual([stack1]);
  });

  it("lets stacks become available once they are done", () => {
    const stack1 = createStack("stack1");
    const stack2 = createStack("stack2", [stack1.name]);
    const stack3 = createStack("stack3", [stack2.name]);

    const stackDependencies = new StackDependencies([stack1, stack2, stack3]);
    expect(stackDependencies.pendingDeployableStacks).toEqual([stack1]);

    stackDependencies.startRun(stack1);
    expect(stackDependencies.pendingDeployableStacks).toEqual([]);

    stackDependencies.finishRun(stack1);
    expect(stackDependencies.pendingDeployableStacks).toEqual([stack2]);
  });

  it("can return multiple available stacks", () => {
    const stack1 = createStack("stack1");
    const stack2 = createStack("stack2");
    const stack3 = createStack("stack3");
    const stack4 = createStack("stack4", [stack3.name]);
    const stack5 = createStack("stack5", [stack3.name, stack4.name]);
    const stackDependencies = new StackDependencies([
      stack1,
      stack2,
      stack3,
      stack4,
      stack5,
    ]);

    expect(stackDependencies.pendingDeployableStacks).toEqual([
      stack1,
      stack2,
      stack3,
    ]);
  });

  it("stacks with multiple dependencies are not deployable when one is done", () => {
    const stack1 = createStack("stack1");
    const stack2 = createStack("stack2");
    const stack3 = createStack("stack3", [stack1.name, stack2.name]);

    const stackDependencies = new StackDependencies([stack1, stack2, stack3]);
    stackDependencies.startRun(stack1);
    stackDependencies.finishRun(stack1);

    expect(stackDependencies.pendingDeployableStacks).toEqual([stack2]);
  });
});
