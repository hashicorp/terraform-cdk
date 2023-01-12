import { interpret } from "xstate";
import {
  deployMachine,
  extractVariableNameFromPrompt,
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
});

describe("pty events", () => {
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
