import {
  projectExecutionMachine,
  services,
  guards,
} from "../../lib/project-execution";
import { interpret } from "xstate";

function mockAsyncFunction(returnValue: any) {
  return jest.fn(() => Promise.resolve(returnValue));
}

type StateMachineConfig = typeof services & typeof guards;
function getStateMachine({
  synthProject = mockAsyncFunction(null),
  diff = mockAsyncFunction({ needsApply: true }),
  deploy = mockAsyncFunction(null),
  destroy = mockAsyncFunction(null),
  gatherOutput = mockAsyncFunction({ outputs: {}, outputsByConstructId: {} }),
  onTargetAction = guards.onTargetAction,
  autoApprove = guards.autoApprove,
  planNeedsNoApply = guards.planNeedsNoApply,
}: Partial<StateMachineConfig>) {
  const stateMachine = interpret(
    projectExecutionMachine
      .withContext({
        onProgress: jest.fn(),
        synthCommand: "npx ts-node my-app.ts",
        targetDir: "/tmp/cdktf-project",
      })
      .withConfig({
        services: {
          synthProject,
          diff,
          deploy,
          destroy,
          gatherOutput,
        },
        guards: {
          onTargetAction: onTargetAction as any, // since it's a custom guard
          autoApprove,
          planNeedsNoApply: planNeedsNoApply as any, // needs a second arg, types are off here
        },
      })
  );
  stateMachine.start();
  return stateMachine;
}

describe("projectExecutionMachine", () => {
  it("synth", async () => {
    const synthProject = mockAsyncFunction(null);
    const diff = mockAsyncFunction({ needsApply: true });
    const stateMachine = getStateMachine({ synthProject, diff });
    stateMachine.send({
      type: "START",
      targetAction: "synth",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(synthProject).toHaveBeenCalled();
    expect(diff).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  it("diff", async () => {
    const synthProject = mockAsyncFunction(null);
    const diff = mockAsyncFunction({ needsApply: true });
    const deploy = mockAsyncFunction(null);
    const stateMachine = getStateMachine({ synthProject, diff, deploy });
    stateMachine.send({
      type: "START",
      targetAction: "diff",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(synthProject).toHaveBeenCalled();
    expect(diff).toHaveBeenCalled();
    expect(deploy).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  describe("autoApprove", () => {
    describe.each(["deploy", "destroy"])("%s", (targetAction) => {
      it("with auto approve", async () => {
        const synthProject = mockAsyncFunction(null);
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          synthProject,
          diff,
          [targetAction]: execution,
        });
        stateMachine.machine.context.autoApprove = true;
        stateMachine.send({
          type: "START",
          targetAction: targetAction as any,
        });

        await new Promise((resolve) => stateMachine.onDone(resolve));
        expect(synthProject).toHaveBeenCalled();
        expect(diff).toHaveBeenCalled();
        expect(execution).toHaveBeenCalled();
        expect(stateMachine.state.matches("done")).toBe(true);
      });

      it("without auto approve", async () => {
        const synthProject = mockAsyncFunction(null);
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          synthProject,
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
        const synthProject = mockAsyncFunction(null);
        const diff = mockAsyncFunction({ needsApply: true });
        const execution = mockAsyncFunction(null);
        const stateMachine = getStateMachine({
          synthProject,
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
    const synthProject = mockAsyncFunction(null);
    const diff = mockAsyncFunction({ needsApply: false });
    const deploy = mockAsyncFunction(null);
    const stateMachine = getStateMachine({
      synthProject,
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
    expect(synthProject).toHaveBeenCalled();
    expect(diff).toHaveBeenCalled();
    expect(deploy).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });
});
