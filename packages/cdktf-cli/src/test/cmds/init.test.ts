// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import execa from "execa";
import path from "path";
import { mkdtemp } from "@cdktf/commons";

const cdktfBin = path.resolve(__dirname, "../../../bundle/bin/cdktf");
const cdktfDist = path.join(__dirname, "../../../../../dist");

describe("init command", () => {
  it("accepts no as a reasonable answer to using remote terraform", async () => {
    await mkdtemp(async (cwd) => {
      const input = "n\n";
      const result = await execa(
        cdktfBin,
        [
          "init",
          `--dist=${cdktfDist}`,
          "--template=typescript",
          "--project-name=test",
          "--project-description=foo",
          "--from-terraform-project=false",
          "--enable-crash-reporting=false",
        ],
        {
          stdio: "pipe",
          cwd,
          input,
        },
      );
      // we expect either empty error output or every line beginning with "npm WARN"
      if (result.stderr.length > 0) {
        const lines = result.stderr.split("\n");
        for (const line of lines) {
          expect(line.toLowerCase()).toContain("npm warn");
        }
      } else {
        expect(result.stderr).toEqual("");
      }

      expect(result.stdout).not.toContain(
        `opening webpage using your browser.`,
      );
      expect(result.stdout).not.toContain(`Detected Terraform Cloud token.`);
    });
  }, 30_000);
});
