/**
 * Testing a full cycle of cdktf watch
 */
import { TestDriver } from "../../test-helper";
import { IPty, IDisposable } from "node-pty";

const onPosix = process.platform !== "win32" ? test : test.skip;

describe("full watch integration test", () => {
  let driver: TestDriver;

  beforeAll(async () => {
    driver = new TestDriver(__dirname, {
      // CDKTF_LOG_LEVEL: "all", // useful for debugging this testcase
      CI: "false", // watch is supposed to be interactive
    });
    await driver.setupTypescriptProject();
    driver.copyFiles(".gitignore");
  });

  onPosix(
    "synthesizes and deploys",
    async () => {
      const child = driver.watch();

      const { waitForLine } = screenOutput(child);

      const childStopped = new Promise((resolve) => child.onExit(resolve));

      let line = await waitForLine((line) =>
        line.includes("Synthesizing hello-deploy")
      );
      expect(line).toContain("Synthesizing hello-deploy");

      line = await waitForLine((line) =>
        line.includes("Deploying hello-deploy")
      );
      expect(line).toContain("Deploying hello-deploy");

      line = await waitForLine((line) => line.includes("+ null_resource.test"));
      expect(line).toContain("+ null_resource.test");

      line = await waitForLine((line) =>
        line.includes("Deployment done. Watching hello-deploy for changes")
      );
      expect(line).toContain(
        "Deployment done. Watching hello-deploy for changes"
      );

      child.kill();
      await childStopped;
    },
    60_000
  );
});

const screenOutput = (
  pty: IPty
): {
  waitForLine: (
    check: (line: string) => boolean,
    timeout?: number
  ) => Promise<string>;
} => {
  let disposables: IDisposable[] = [];
  let subscriber:
    | ((line: string | undefined, exit: boolean) => void)
    | undefined;
  let lines: string[] = [];
  let exited: boolean = false;

  disposables.push(
    pty.onData((line) => {
      // buffer until we get a new subscriber
      if (subscriber === undefined) lines.push(line);
      else subscriber(line, false);
    })
  );
  disposables.push(
    pty.onExit(() => {
      if (subscriber === undefined) exited = true;
      else subscriber(undefined, true);
      disposables.forEach((d) => d.dispose());
    })
  );

  const waitForLine = async (
    check: (line: string) => boolean,
    timeout = 10000
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      let timeoutId: NodeJS.Timeout; // timeout must be cancelled to allow Jest to terminate
      const subscription = (line: string | undefined, exit: boolean) => {
        if (exit) {
          reject(new Error("exited before waitForLine finished"));
          clearTimeout(timeoutId);
        }
        if (check(line)) {
          subscriber = undefined; // unsubscribe
          resolve(line);
          clearTimeout(timeoutId);
        }
      };
      timeoutId = setTimeout(() => {
        reject(new Error("waitForLine timed out"));
      }, timeout);
      subscriber = subscription;
      // replay old lines that already happened
      const oldLines = lines;
      lines = []; // clear for the next waitForLine() call
      const found = oldLines.find(check);
      if (found) {
        subscriber = undefined; // unsubscribe
        resolve(found);
        clearTimeout(timeoutId);
      }
      if (exited) {
        reject(new Error("exited before waitForLine finished"));
        clearTimeout(timeoutId);
      }
    });
  };

  return {
    waitForLine,
  };
};
