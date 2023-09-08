// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";
import { Language, TerraformDependencyConstraint } from "@cdktf/commons";
import { ConstructsMaker, GetOptions } from "../../constructs-maker";

jest.setTimeout(600_000);
global.setImmediate =
  global.setImmediate ||
  ((fn: any, ...args: any[]) => global.setTimeout(fn, 0, ...args));

describe("versions.json file generation", () => {
  const languages = [Language.TYPESCRIPT, Language.PYTHON];

  const constraints: TerraformDependencyConstraint[] = [
    {
      fqn: "hashicorp/aws",
      name: "aws",
      source: "hashicorp/aws",
      version: "4.0.0",
    },
    {
      fqn: "hashicorp/random",
      name: "random",
      source: "hashicorp/random",
      version: "3.1.3",
    },
    {
      fqn: "kreuzwerker/docker",
      name: "docker",
      source: "kreuzwerker/docker",
      version: "2.16.0",
    },
  ];

  beforeAll(() => {});

  test.each(languages)(
    "generates a file for the %s language",
    async (language) => {
      const workdir = fs.mkdtempSync(
        path.join(os.tmpdir(), "versions-file.test")
      );

      const options: GetOptions = {
        codeMakerOutput: workdir,
        targetLanguage: language,
      };

      // Ignore warnings to pop up from the generate function
      process.env.NODE_OPTIONS = "--max-old-space-size=16384";
      const constructMaker = new ConstructsMaker(options);
      constructMaker.getSchemas = jest.fn().mockImplementation(async () => {
        return JSON.parse(
          fs.readFileSync(
            path.join(__dirname, "fixtures", "versions-file.test.fixture.json"),
            "utf8"
          )
        );
      });
      await constructMaker.generate(constraints);

      const output = fs.readFileSync(
        path.join(workdir, "versions.json"),
        "utf-8"
      );
      expect(Object.keys(JSON.parse(output))).toEqual(
        expect.arrayContaining(
          constraints.map((c) => `registry.terraform.io/${c.fqn}`)
        )
      );
    }
  );
});
