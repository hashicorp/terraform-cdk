import { projectExecutionMachine, guards } from "../../lib/project-execution";
import { interpret, InterpreterFrom } from "xstate";

function createStub(returnValue: any) {
  return jest.fn(() => Promise.resolve(returnValue));
}

describe.skip("projectExecutionMachine", () => {
  let synthProject: jest.Mock;
  let diff: jest.Mock;
  let execute: jest.Mock;
  let stateMachine: InterpreterFrom<typeof projectExecutionMachine>;

  beforeEach(() => {
    synthProject = createStub(null);
    diff = createStub(null);
    execute = createStub(null);
    stateMachine = interpret(
      projectExecutionMachine
        .withContext({
          onProgress: jest.fn(),
          synthCommand: "synth",
          targetDir: "/tmp/cdktf-project",
        })
        .withConfig({
          services: {
            synthProject,
            diff,
            execute,
          },
          guards: guards as any,
        })
    );
    stateMachine.start();
  });

  it("synth", async () => {
    stateMachine.send({
      type: "START",
      targetAction: "synth",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(synthProject).toHaveBeenCalled();
    expect(diff).not.toHaveBeenCalled();
    expect(execute).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  it("diff", async () => {
    stateMachine.send({
      type: "START",
      targetAction: "diff",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(synthProject).toHaveBeenCalled();
    expect(diff).toHaveBeenCalled();
    expect(execute).not.toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  it("deploy with auto approve", async () => {
    stateMachine.machine.context.autoApprove = true;
    stateMachine.send({
      type: "START",
      targetAction: "deploy",
    });

    await new Promise((resolve) => stateMachine.onDone(resolve));
    expect(synthProject).toHaveBeenCalled();
    expect(diff).toHaveBeenCalled();
    expect(execute).toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });

  it("deploy without auto approve", async () => {
    stateMachine.machine.context.autoApprove = false;
    stateMachine.send({
      type: "START",
      targetAction: "deploy",
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
    expect(execute).not.toHaveBeenCalled();

    stateMachine.send({
      type: "APPROVAL_GIVEN",
    });
    await new Promise((resolve) => stateMachine.onDone(resolve));

    expect(synthProject).toHaveBeenCalled();
    expect(diff).toHaveBeenCalled();
    expect(execute).toHaveBeenCalled();
    expect(stateMachine.state.matches("done")).toBe(true);
  });
});
