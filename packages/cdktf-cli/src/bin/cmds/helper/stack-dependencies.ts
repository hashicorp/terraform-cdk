// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { SynthesizedStack } from "../../../lib/synth-stack";

export class StackDependencies {
  public pendingStacks: SynthesizedStack[] = [];
  public inflightStacks: SynthesizedStack[] = [];
  public deployedStacks: SynthesizedStack[] = [];

  constructor(private readonly stacks: SynthesizedStack[]) {
    this.pendingStacks = [...this.stacks];
  }

  public startRun(stack: SynthesizedStack): void {
    this.pendingStacks = this.pendingStacks.filter(
      (item) => item.name !== stack.name
    );
    this.inflightStacks.push(stack);
  }

  public finishRun(stack: SynthesizedStack): void {
    this.inflightStacks = this.inflightStacks.filter(
      (item) => item.name !== stack.name
    );
    this.deployedStacks.push(stack);
  }

  public get pendingDeployableStacks(): SynthesizedStack[] {
    return this.pendingStacks.filter((pendingStack) => {
      const unmetDependencies = pendingStack.dependencies.filter(
        (dependency) => {
          return !this.deployedStacks.some((deployedStack) => {
            return deployedStack.name === dependency;
          });
        }
      );

      return unmetDependencies.length === 0;
    });
  }
}
