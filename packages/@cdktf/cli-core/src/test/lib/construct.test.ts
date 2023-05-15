import * as fs from "fs-extra";
import path from "path";
import * as os from "os";
import { addConstruct } from "../../lib";

describe("construct subcommand", () => {
  describe("construct add", () => {
    function generateProject(): string {
      const projectDir = fs.mkdtempSync(
        path.join(os.tmpdir(), "construct-test-")
      );

      fs.writeFileSync(
        path.resolve(projectDir, "cdktf.json"),
        JSON.stringify({ language: "typescript" }, null, 2)
      );

      return projectDir;
    }

    describe("typescript", () => {
      it("creates a new file & directory for constructs", async () => {
        const dir = generateProject();
        await addConstruct("best-construct", dir);

        expect(
          fs.readFileSync(
            path.join(dir, "constructs/best-construct.ts"),
            "utf8"
          )
        ).toEqual(
          expect.stringContaining(
            "export class BestConstruct extends Construct {"
          )
        );
      });
    });
  });
});
