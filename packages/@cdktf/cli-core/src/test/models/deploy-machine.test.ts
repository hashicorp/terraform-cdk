import { interpret } from "xstate";
import { spawnPty } from "../../lib/models/pty-process";
import {
  deployMachine,
  extractVariableNameFromPrompt,
  terraformPtyService,
  handleLineReceived,
} from "../../lib/models/deploy-machine";

describe("extractVariableNameFromPrompt", () => {
  it.each([
    [
      `content`,
      `var.content
        Enter a value:`,
    ],
    [
      `SCREAM_CASE`,
      `var.SCREAM_CASE
        Enter a value:`,
    ],
    [
      `nested_content_578CD0EA`,
      `var.nested_content_578CD0EA
          Enter a value:`,
    ],
    [
      `with-dashes`,
      `var.with-dashes
            Enter a value:`,
    ],
  ])(
    `should extract variable '%s' name from prompt '%s'`,
    (expected, prompt) => {
      expect(extractVariableNameFromPrompt(prompt)).toBe(expected);
    }
  );
});

describe("transitions", () => {
  it("reaches the running state after initial", async () => {
    const actualState = deployMachine.transition("idle", "START");

    expect(actualState.matches("running")).toBe(true);
  });

  it("transitions to processing upon external approval", (done) => {
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: () => (send) => {
          setTimeout(() => {
            send({ type: "REQUEST_APPROVAL" });

            setTimeout(() => {
              send({ type: "APPROVED_EXTERNALLY" });
            }, 100);
          }, 100);
        },
      },
    });

    const ptyService = interpret(mockDeployMachine).onTransition((state) => {
      if (
        state.matches({ running: "processing" }) &&
        state.event?.type === "APPROVED_EXTERNALLY"
      ) {
        done();
      }
    });

    ptyService.start();

    ptyService.send({
      type: "START",
      pty: {
        file: "",
        args: [],
        options: {
          cwd: "",
        },
      },
    });
  });
});

function mockPty(ptyEvents: string[]): typeof spawnPty {
  const actions = {
    write: jest.fn(),
    writeLine: jest.fn(),
    stop: jest.fn(),
  };
  return (_config: any, onData: (data: string) => void) => {
    ptyEvents.forEach((event, index) => {
      setTimeout(() => {
        onData(event);
      }, 100 * (index + 1));
    });

    return {
      actions,
      progress: new Promise((resolve) => {
        setTimeout(() => resolve(), ptyEvents.length * 200);
      }),
      exitCode: new Promise((resolve) => {
        setTimeout(() => resolve(0), ptyEvents.length * 200);
      }),
    };
  };
}

describe("pty events", () => {
  it("transitions when pty receives an approval question", (done) => {
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: (context, event) =>
          terraformPtyService(
            context,
            event,
            mockPty([`Do you want to perform these actions\nEnter a value:`])
          ),
      },
    });

    const ptyService = interpret(mockDeployMachine).onTransition((state) => {
      if (state.matches({ running: "awaiting_approval" })) {
        done();
      }
    });

    ptyService.start();

    ptyService.send({
      type: "START",
      pty: {
        file: "",
        args: [],
        options: {
          cwd: "",
        },
      },
    });
  });

  it("transitions when pty receives an override question", (done) => {
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: (context, event) =>
          terraformPtyService(
            context,
            event,
            mockPty([
              `Do you want to override the soft failed policy check?
          Only 'override' will be accepted to override.
          
          Enter a value:`,
            ])
          ),
      },
    });

    const ptyService = interpret(mockDeployMachine).onTransition((state) => {
      if (state.matches({ running: "awaiting_sentinel_override" })) {
        done();
      }
    });

    ptyService.start();

    ptyService.send({
      type: "START",
      pty: {
        file: "",
        args: [],
        options: {
          cwd: "",
        },
      },
    });
  });

  it("transitions to rejected state when done externally", (done) => {
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: (context, event) =>
          terraformPtyService(
            context,
            event,
            mockPty([
              `Do you want to override the soft failed policy check?
          Only 'override' will be accepted to override.
          
          Enter a value:`,
              `discarded using the UI or API`,
            ])
          ),
      },
    });

    let enteredAwaiting = false;
    const states: string[] = [];
    const ptyService = interpret(mockDeployMachine).onTransition((state) => {
      if (state.event?.type) states.push(state.event.type);

      if (enteredAwaiting && state.matches("exited")) {
        expect(states).toEqual(
          expect.arrayContaining(["OVERRIDE_REJECTED_EXTERNALLY"])
        );
        done();
      }
      if (state.matches({ running: "awaiting_sentinel_override" })) {
        enteredAwaiting = true;
      }
    });

    ptyService.start();

    ptyService.send({
      type: "START",
      pty: {
        file: "",
        args: [],
        options: {
          cwd: "",
        },
      },
    });
  });
});

describe("handleLineReceived", () => {
  it("should forward the line", () => {
    const send = jest.fn();
    handleLineReceived(send)("foo");
    expect(send).toHaveBeenCalledWith({
      type: "OUTPUT_RECEIVED",
      output: "foo",
    });
  });

  it("should hide the line if a variable is missing", () => {
    const send = jest.fn();
    const input = `
        var.my_var
        Enter a value:
    `;
    handleLineReceived(send)(input);
    expect(send).not.toHaveBeenCalledWith({
      type: "OUTPUT_RECEIVED",
      output: input,
    });
    expect(send).toHaveBeenCalledWith({
      type: "VARIABLE_MISSING",
      variableName: "my_var",
    });
  });

  it("should detect destroy all resources in workspace message on windows", () => {
    const send = jest.fn();
    const input = `\u001b[25
         l\u001b[m\n\u001b[1m\u001b[97mDo you really want to destroy all resources in workspace \\"windows-node-test\\"?   \u001b[2
    `;
    handleLineReceived(send)(input);
    expect(send).toHaveBeenCalledWith({
      type: "REQUEST_APPROVAL",
    });
  });
});
