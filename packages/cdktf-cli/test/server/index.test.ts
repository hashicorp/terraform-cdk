import { startServer } from "../../lib/server";
import fetch from "cross-fetch";

describe("startServer", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let stop = async () => {};

  // makes sure this also runs in case of an error
  afterAll(async () => {
    await stop();
  });

  it("starts a GraphQL server", async () => {
    const opts = await startServer();
    stop = opts.stop;
    const res = await fetch(`http://localhost:${opts.port}/up`);
    expect(res.status).toBe(200);
  }, 30_000);
});
