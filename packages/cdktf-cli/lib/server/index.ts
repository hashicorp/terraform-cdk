// spawns a server which serves a GraphQL api which is used inside the cdktf watch command
// heavily inspired by https://github.com/gatsbyjs/gatsby/blob/2b672fcdd7cb6e75b9ae640d6bd475a612f4d723/packages/gatsby-recipes/src/graphql-server/index.js
import detectPort from "detect-port";
import fetch from "cross-fetch";
import execa from "execa";
import { logger, getLogger } from "../logging";

const serverLogger = getLogger("cli-server");

export async function startServer(): Promise<{
  port: number;
  stop: () => Promise<void>;
}> {
  logger.debug("Starting Server for CLI");

  const port = await detectPort(40000);

  const subprocess = execa(
    `node`,
    [require.resolve(`./server.js`), String(port)],
    { env: process.env }
  );

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
