import * as fs from "fs-extra";
import * as path from "path";
import { generateProviderBindingsFromSchema } from "..";
import { mkdtemp } from "../util";
import { edgeSchema } from "./edge-provider-schema";

describe("Edge Provider Schema", () => {
  it("compiles to Typescript", async () => {
    return mkdtemp(async (dir) => {
      await generateProviderBindingsFromSchema(dir, edgeSchema);

      fs.readdirSync(path.join(dir, "providers", "edge")).forEach((file) => {
        if (!file.endsWith(".ts")) {
          return;
        }
        expect(
          fs.readFileSync(path.join(dir, "providers", "edge", file), "utf8")
        ).toMatchSnapshot(file);
      });
    });
  });
});
