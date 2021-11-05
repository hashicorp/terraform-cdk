import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";
import {
  ConstructsMakerProviderTarget,
  determineGoModuleName,
  Language,
} from "../constructs-maker";

describe("constructsMaker", () => {
  describe("determineGoModuleName", () => {
    let tmpDir: string;
    let emptySubDir: string, validSubdir: string, invalidSubdir: string;

    beforeAll(async () => {
      tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf.test"));
      /* test directory layout
       * <tmpDir>
       * ├── go.mod
       * └── subdir
       *     ├── empty
       *     ├── valid
       *     │   └── go.mod
       *     └── invalid
       *         └── go.mod
       */
      emptySubDir = path.join(tmpDir, "subdir", "empty");
      validSubdir = path.join(tmpDir, "subdir", "valid");
      invalidSubdir = path.join(tmpDir, "subdir", "invalid");

      await fs.mkdirs(emptySubDir);
      await fs.mkdirs(validSubdir);
      await fs.mkdirs(invalidSubdir);

      const root = `module cdk.tf/test/go`;
      const valid = `module cdk.tf/test/go-valid-subdir`;
      const invalid = `malformed go mod`;

      await fs.writeFile(path.join(tmpDir, "go.mod"), root);
      await fs.writeFile(path.join(validSubdir, "go.mod"), valid);
      await fs.writeFile(path.join(invalidSubdir, "go.mod"), invalid);
    });

    afterAll(async () => {
      // await fs.remove(tmpDir);
    });

    it("works in root directory", async () => {
      const moduleName = await determineGoModuleName(tmpDir);
      expect(moduleName).toBe("cdk.tf/test/go");
    });

    it("can walk upwards from empty directory", async () => {
      const moduleName = await determineGoModuleName(emptySubDir);
      expect(moduleName).toBe("cdk.tf/test/go/subdir/empty");
    });

    it("works in subdirectory with go.mod", async () => {
      const moduleName = await determineGoModuleName(validSubdir);
      expect(moduleName).toBe("cdk.tf/test/go-valid-subdir");
    });

    it("throws if go.mod is invalid", async () => {
      await expect(determineGoModuleName(invalidSubdir)).rejects.toThrow(
        `Could not determine the root Go module name. Found ${path.join(
          invalidSubdir,
          "go.mod"
        )} but failed to regex match the module name directive`
      );
    });

    it("works from subdirectory that does not exist yet", async () => {
      const moduleName = await determineGoModuleName(
        path.join(tmpDir, "subdir", "that", "does", "not", "exist", "yet")
      );
      expect(moduleName).toBe("cdk.tf/test/go/subdir/that/does/not/exist/yet");
    });

    it("throws if nothing could be found", async () => {
      const dir = "/cdktf-test/this/dir/does/not/exist"; //... and has no go.mod in any parent dir
      await expect(determineGoModuleName(dir)).rejects.toThrow(
        `Could not determine the root Go module name. No go.mod found in ${dir} and any parent directories`
      );
    });
  });
  describe("ConstructsMakerProviderTarget", () => {
    it("returns valid package name for Go", () => {
      const target = new ConstructsMakerProviderTarget(
        {
          name: "google-beta",
          fqn: "google-beta",
          source: "google-beta",
          version: "~> 4.0",
        },
        Language.GO
      );
      expect(target.srcMakName).toEqual("google_beta");
    });
  });
});
