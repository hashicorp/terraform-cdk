import { interpret } from "xstate";
import { IPty } from "node-pty-prebuilt-multiarch";
import {
  DeployEvent,
  deployMachine,
  extractVariableNameFromPrompt,
  terraformPtyService,
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

describe("pty events", () => {
  it("transitions when pty receives an approval question", (done) => {
    function mockPty(_event: DeployEvent) {
      const onDataListeners: any[] = [];
      const onExitListeners: any[] = [];
      const pty = {
        onData: (listener: (e: string) => any) =>
          onDataListeners.push(listener),
        onExit: (listener: (e: string) => any) =>
          onExitListeners.push(listener),
      } as unknown as IPty;

      setTimeout(() => {
        onDataListeners.forEach((listener) =>
          listener(`Do you want to perform these actions\nEnter a value:`)
        );
      }, 100);

      return pty;
    }
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: (context, event) =>
          terraformPtyService(context, event, mockPty),
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
    function mockPty(_event: DeployEvent) {
      const onDataListeners: any[] = [];
      const onExitListeners: any[] = [];
      const pty = {
        onData: (listener: (e: string) => any) =>
          onDataListeners.push(listener),
        onExit: (listener: (e: string) => any) =>
          onExitListeners.push(listener),
      } as unknown as IPty;

      setTimeout(() => {
        onDataListeners.forEach((listener) =>
          listener(`Do you want to override the soft failed policy check?
          Only 'override' will be accepted to override.
          
          Enter a value:`)
        );
      }, 100);

      return pty;
    }
    const mockDeployMachine = deployMachine.withConfig({
      services: {
        runTerraformInPty: (context, event) =>
          terraformPtyService(context, event, mockPty),
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
});
