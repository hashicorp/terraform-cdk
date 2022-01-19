// spawns a server which serves a GraphQL api which is used inside the cdktf watch command
// heavily inspired by https://github.com/gatsbyjs/gatsby/blob/2b672fcdd7cb6e75b9ae640d6bd475a612f4d723/packages/gatsby-recipes/src/graphql-server/index.js
import detectPort from "detect-port";
import fetch from "cross-fetch";
import execa from "execa";
import { logger, getLogger } from "../logging";
import * as path from "path";
import * as fs from "fs-extra";
import { projectRootPath } from "../../bin/cmds/helper/utilities";

const serverLogger = getLogger("cli-server");

const loadFile = (file: string) => {
  // if file exists relative to this file return its file path
  // otherwise return the file path relative to the project root
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    return filePath;
  }
  return path.join(projectRootPath(), "bundle", "lib", "server", file);
};

export async function startServer(): Promise<{
  port: number;
  stop: () => Promise<void>;
}> {
  logger.debug("Starting Server for CLI");

  const port = await detectPort(40000);

  const subprocess = execa(`node`, [loadFile("server.js"), String(port)], {
    env: process.env,
  });

  subprocess.stderr?.on("data", (chunk) =>
    serverLogger.error(chunk.toString())
  );
  subprocess.stdout?.on("data", (chunk) =>
    serverLogger.debug(chunk.toString())
  );

  // wait for server to be running
  const waitForServer = async (
    retries = 10,
    waitTime = 500
  ): Promise<boolean> => {
    try {
      await fetch(`http://localhost:${port}/up`);
      return true;
    } catch (e) {
      if (e.code !== "ECONNREFUSED") throw e;
      if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        return waitForServer(retries - 1, waitTime);
      }
      return false;
    }
  };
  logger.debug("Waiting for server to become available..");
  const running = await waitForServer();
  logger.debug(
    running
      ? "Server is up"
      : "Server did not manage to start up within alloted time"
  );

  ["exit"].forEach((signal) => {
    process.on(signal, () => {
      console.log(`${signal} signal called. killing subprocess..`);
      subprocess.kill(`SIGTERM`, {
        forceKillAfterTimeout: 2000,
      });
    });
  });

  const stop = async () => {
    subprocess.kill("SIGTERM", {
      forceKillAfterTimeout: 2000,
    });
  };

  return { port, stop };
}
