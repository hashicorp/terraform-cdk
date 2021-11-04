import execa from "execa";
import path from "path";
import { promises as fs } from "fs";
import { mkdtemp } from "../../lib/util";

const cdktfBin = path.resolve(__dirname, "../../bin/cdktf");
const input = `
resource "null_resource" "dummy" {}
`;

describe("convert command", () => {
  it("proposes specifying a provider version", async () => {
    await mkdtemp(async (cwd) => {
      await fs.writeFile(
        path.resolve(cwd, "cdktf.json"),
        JSON.stringify({ terraformProviders: [] })
      );
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly: null.`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);
  it("reads provider version from existing cdktf.json", async () => {
    await mkdtemp(async (cwd) => {
      await fs.writeFile(
        path.resolve(cwd, "cdktf.json"),
        JSON.stringify({ terraformProviders: ["hashicorp/null@~> 2.0"] })
      );
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).not.toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly: null.`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);
  it("works if no cdktf.json could be found", async () => {
    await mkdtemp(async (cwd) => {
      const result = await execa(cdktfBin, ["convert"], {
        stdio: "pipe",
        cwd,
        input,
      });
      expect(result.stderr).toEqual("");
      expect(result.stdout).toContain(
        `The following providers are missing schema information and might need manual adjustments to synthesize correctly: null.`
      );
      expect(result.stdout).toContain(
        `import * as NullProvider from "./.gen/providers/null";`
      );
      expect(result.stdout).toContain(
        `new NullProvider.Resource(this, "dummy", {});`
      );
    });
  }, 30_000);
});
