import {
  SynthesizedStack,
  SynthStack as OriginalSynthStack,
} from "../../bin/cmds/helper/synth-stack";

import { mocked } from "ts-jest/utils";
import { WatchClient, WatchState } from "../../lib/server/WatchClient";
import { TerraformJson } from "../../bin/cmds/ui/terraform-json";
import { TerraformCli as OriginalTerraformCli } from "../../bin/cmds/ui/models/terraform-cli";

jest.mock("../../bin/cmds/helper/synth-stack");
const SynthStack = mocked(OriginalSynthStack);

jest.mock("../../bin/cmds/ui/models/terraform-cli");
const TerraformCli = mocked(OriginalTerraformCli);

describe("WatchClient", () => {
  describe("errors", () => {
    it("throws when invoked without auto approve", () => {
      expect(
        () =>
          new WatchClient({
            synthCommand: "node main.js",
            targetDir: "/target/dir",
            autoApprove: false,
          })
      ).toThrowErrorMatchingInlineSnapshot(
        `"WatchClient does not yet support running without autoApprove"`
      );
    });
  });
  describe("returns recoverable errors", () => {
    let client: WatchClient | undefined;

    afterEach(async () => {
      await client?.stop();
    });

    it("when synth failed", async () => {
      SynthStack.synth = jest.fn().mockImplementation(() => {
        throw new Error("test synth failed");
      });
      client = new WatchClient({
        autoApprove: true,
        synthCommand: "dummy",
        targetDir: "dummy",
      });
      const { promise, subscribe } = waitForState((state) => !!state.error);
      client?.subscribe(subscribe);
      await client?.start();
      const state = await promise;
      expect(state.error).toBeDefined();
      expect(state.error?.message).toBe("test synth failed");
      expect(state.error?.origin).toBe("SYNTHESIZING");
      expect(state.error?.recoverable).toBe(true);
    });
    it("when there are no stacks", async () => {
      SynthStack.synth = jest
        .fn()
        .mockImplementation((): SynthesizedStack[] => {
          return [];
        });
      client = new WatchClient({
        autoApprove: true,
        synthCommand: "dummy",
        targetDir: "dummy",
      });
      const { promise, subscribe } = waitForState((state) => !!state.error);
      client?.subscribe(subscribe);
      await client?.start();
      const state = await promise;
      expect(state.error).toBeDefined();
      expect(state.error?.message).toBe(
        "Cannot determine target stack when there are no stacks"
      );
      expect(state.error?.origin).toBe("INITIALIZING");
      expect(state.error?.recoverable).toBe(true);
    });
    it("when supplied stack is not found", async () => {
      SynthStack.synth = jest
        .fn()
        .mockImplementation((): SynthesizedStack[] => {
          return [
            {
              name: "StackB",
              constructPath: "A",
              synthesizedStackPath: "B",
              workingDirectory: "C",
              content: "null",
              annotations: [],
              dependencies: [],
            },
          ];
        });
      client = new WatchClient({
        autoApprove: true,
        synthCommand: "dummy",
        targetDir: "dummy",
        targetStack: "StackA",
      });
      const { promise, subscribe } = waitForState((state) => !!state.error);
      client?.subscribe(subscribe);
      await client?.start();
      const state = await promise;
      expect(state.error).toBeDefined();
      expect(state.error?.message).toBe(
        "Could not find stack StackA. Found StackB"
      );
      expect(state.error?.origin).toBe("INITIALIZING");
      expect(state.error?.recoverable).toBe(true);
    });
    it("when no stack is supplied but multiple are found", async () => {
      SynthStack.synth = jest
        .fn()
        .mockImplementation((): SynthesizedStack[] => {
          return [
            {
              name: "StackA",
              constructPath: "A",
              synthesizedStackPath: "B",
              workingDirectory: "C",
              content: "null",
              annotations: [],
              dependencies: [],
            },
            {
              name: "StackB",
              constructPath: "A",
              synthesizedStackPath: "B",
              workingDirectory: "C",
              content: "null",
              annotations: [],
              dependencies: [],
            },
          ];
        });
      client = new WatchClient({
        autoApprove: true,
        synthCommand: "dummy",
        targetDir: "dummy",
      });
      const { promise, subscribe } = waitForState((state) => !!state.error);
      client?.subscribe(subscribe);
      await client?.start();
      const state = await promise;
      expect(state.error).toBeDefined();
      expect(state.error?.message).toBe(
        "Found more than one stack, please specify which stack to watch using --stack"
      );
      expect(state.error?.origin).toBe("INITIALIZING");
      expect(state.error?.recoverable).toBe(true);
    });
    it("when deploy failed", async () => {
      SynthStack.synth = jest
        .fn()
        .mockImplementation((): SynthesizedStack[] => {
          return [
            {
              name: "StackA",
              constructPath: "A",
              synthesizedStackPath: "B",
              // will be hashed by deploy but not compared, so just a valid dir is needed
              workingDirectory: __dirname,
              content: JSON.stringify({ terraform: {} } as TerraformJson),
              annotations: [],
              dependencies: [],
            },
          ];
        });
      TerraformCli.mockImplementation(() => {
        // this keeps the prototype chain intact so that instanceof checks still work
        const terraform = Object.create(TerraformCli.prototype);
        terraform.init = jest.fn();
        terraform.deploy = jest.fn().mockImplementation(() => {
          throw new Error("test deploy error");
        });
        return terraform;
      });
      client = new WatchClient({
        autoApprove: true,
        synthCommand: "dummy",
        targetDir: "dummy",
      });
      const { promise, subscribe } = waitForState(
        (state) => !!state.error,
        4000
      );
      client?.subscribe(subscribe);
      await client?.start();
      await client?.queueAction("DEPLOY");
      const state = await promise;
      expect(state.error).toBeDefined();
      expect(state.error?.message).toBe("test deploy error");
      expect(state.error?.origin).toBe("DEPLOYING");
      expect(state.error?.recoverable).toBe(true);
    });
  });
});

const waitForState = (
  shouldResolve: (state: WatchState) => boolean,
  timeout = 2000
): {
  promise: Promise<WatchState>;
  subscribe: (state: WatchState) => void;
} => {
  let resolvePromise: (state: WatchState) => void;
  const promise = new Promise<WatchState>((resolve, reject) => {
    resolvePromise = resolve;
    setTimeout(() => reject(new Error("waitForState timed out")), timeout);
  });
  const subscribe = (state: WatchState) => {
    if (shouldResolve(state)) {
      resolvePromise(state);
    }
  };

  return {
    promise,
    subscribe,
  };
};
