import { readFileSync } from "fs-extra";
import * as path from "path";

describe("Templates", () => {
  describe("Typescript", () => {
    it("main.ts should contain the '// define resources here' mark", () => {
      expect(
        readFileSync(
          path.resolve(__dirname, "..", "templates", "typescript", "main.ts"),
          "utf8"
        )
      ).toContain("// define resources here");
    });
  });
});
