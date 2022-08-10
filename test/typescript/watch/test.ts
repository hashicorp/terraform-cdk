// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { TestDriver } from "../../test-helper";
import { IPty, IDisposable } from "node-pty";
import stripAnsi = require("strip-ansi");

const onPosix = process.platform !== "win32" ? test : test.skip;

describe.skip("full watch integration test", () => {
  let driver: TestDriver;
  let child: IPty;
  let childStopped: Promise<any> | undefined;

  beforeAll(async () => {
    driver = new TestDriver(__dirname, {
      // CDKTF_LOG_LEVEL: "all", // useful for debugging this testcase
      CI: "", // watch is supposed to be interactive
      GITHUB_ACTIONS: "", // overwrite this aswell
    });
    await driver.setupTypescriptProject();
    driver.copyFiles(".gitignore");
  });

  afterAll(async () => {
    child.kill();
    await childStopped;
  });

  onPosix(
    "synthesizes and deploys",
    async () => {
      child = driver.watch();

      const { waitForLine } = screenOutput(child);

      childStopped = new Promise((resolve) => child.onExit(resolve));

      let line = await waitForLine(
        (line) => line.includes("Synthesizing hello-deploy"),
        120_000
      ); // longer timeout for start of watch
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
    },
    240_000
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
    timeout = 30_000
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      let timeoutId: NodeJS.Timeout; // timeout must be cancelled to allow Jest to terminate
      const subscription = (line: string | undefined, exit: boolean) => {
        if (exit) {
          reject(new Error("exited before waitForLine finished"));
          clearTimeout(timeoutId);
        } else if (line && check(stripAnsi(line))) {
          subscriber = undefined; // unsubscribe
          resolve(stripAnsi(line));
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
