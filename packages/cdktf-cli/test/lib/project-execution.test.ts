import {
  stackExecutionMachine,
  services,
  guards,
} from "../../lib/stack-execution";
import { interpret } from "xstate";
import { AbortController } from "node-abort-controller"; // polyfill until we update to node 16

function mockAsyncFunction(returnValue: any) {
  return jest.fn(() => Promise.resolve(returnValue));
}

type StateMachineConfig = typeof services & typeof guards;
function getStateMachine({
  initializeTerraform = mockAsyncFunction(null),
  diff = mockAsyncFunction({ needsApply: true }),
  deploy = mockAsyncFunction(null),
  destroy = mockAsyncFunction(null),
  gatherOutputs = mockAsyncFunction({ outputs: {}, outputsByConstructId: {} }),
  targetActionIs = guards.targetActionIs,
  autoApprove = guards.autoApprove,
  planNeedsNoApply = guards.planNeedsNoApply,
}: Partial<StateMachineConfig>) {
  const abort = new AbortController();
  const stateMachine = interpret(
    stackExecutionMachine
      .withContext({
        abortSignal: abort.signal,
        onProgress: jest.fn(),
        stack: {
          name: "StackA",
          constructPath: "A",
          synthesizedStackPath: "B",
          workingDirectory: "C",
          content: "null",
          annotations: [],
          dependencies: [],
        },
      })
      .withConfig({
        services: {
          initializeTerraform,
          diff,
          deploy,
          destroy,
          gatherOutputs,
        },
        guards: {
          targetActionIs: targetActionIs as any, // since it's a custom guard
          autoApprove,
          planNeedsNoApply: planNeedsNoApply as any, // needs a second arg, types are off here
        },
      })
  );
  stateMachine.start();
  return stateMachine;
}

describe("stackExecutionMachine", () => {
  it("diff", async () => {
    const diff = mockAsyncFunction({ needsApply: true });
    const deploy = mockAsyncFunction(null);
    const stateMachine = getStateMachine({ diff, deploy });
    stateMachine.send({
      type: "START",
      targetAction: "diff",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(diff).toHaveBeenCalled();
    expect(deploy).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  describe("autoApprove", () => {
    describe.each(["deploy", "destroy"])("%s", (targetAction) => {
      it("with auto approve", async () => {
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          diff,
          [targetAction]: execution,
        });
        stateMachine.machine.context.autoApprove = true;
        stateMachine.send({
          type: "START",
          targetAction: targetAction as any,
        });

        await new Promise((resolve) => stateMachine.onDone(resolve));
        expect(diff).toHaveBeenCalled();
        expect(execution).toHaveBeenCalled();
        expect(stateMachine.state.matches("done")).toBe(true);
      });

      it("without auto approve", async () => {
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          diff,
          [targetAction]: execution,
        });
        stateMachine.send({
          type: "START",
          targetAction: targetAction as any,
        });

        await new Promise((resolve, reject) =>
          stateMachine.onTransition((state) => {
            if (state.matches("waitingForApproval")) {
              resolve(null);
            }
            if (state.matches("execute")) {
              reject("should not be in execute state");
            }
          })
        );
        expect(execution).not.toHaveBeenCalled();

        const promise = new Promise((resolve) => stateMachine.onDone(resolve));
        stateMachine.send({
          type: "APPROVAL_GIVEN",
        });
        await promise;

        expect(execution).toHaveBeenCalled();
        expect(stateMachine.state.matches("done")).toBe(true);
      });

      it("without auto approve and no approval", async () => {
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          diff,
          [targetAction]: execution,
        });
        stateMachine.send({
          type: "START",
          targetAction: targetAction as any,
        });

        await new Promise((resolve, reject) =>
          stateMachine.onTransition((state) => {
            if (state.matches("waitingForApproval")) {
              resolve(null);
            }
            if (state.matches("execute")) {
              reject("should not be in execute state");
            }
          })
        );
        expect(execution).not.toHaveBeenCalled();

        const promise = new Promise((resolve) => stateMachine.onDone(resolve));
        stateMachine.send({
          type: "APPROVAL_ABORTED",
        });
        await promise;

        expect(execution).not.toHaveBeenCalled();
        expect(stateMachine.state.matches("done")).toBe(true);
      });
    });
  });

  it("does not deploy if the plan needs no apply", async () => {
    const diff = mockAsyncFunction({ needsApply: false });
    const deploy = mockAsyncFunction(null);
    const stateMachine = getStateMachine({
      diff,
      deploy,
      planNeedsNoApply: function (context: any, event: any) {
        return guards.planNeedsNoApply(context, event);
      },
    });
    stateMachine.send({
      type: "START",
      targetAction: "deploy",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(diff).toHaveBeenCalled();
    expect(deploy).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });
});
