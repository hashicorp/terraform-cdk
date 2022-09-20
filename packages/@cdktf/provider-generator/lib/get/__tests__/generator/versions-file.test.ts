// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformDependencyConstraint } from "../../../config";
import { ConstructsMaker, Language, GetOptions } from "../../constructs-maker";

jest.setTimeout(600_000);

test("generates a versions file", async () => {
  const workdir = await fs.mkdtempSync(
    path.join(os.tmpdir(), "versions-file.test")
  );

  const options: GetOptions = {
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
  };
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
  const constructMaker = new ConstructsMaker(options, constraints);
  await constructMaker.generate();

  const output = fs.readFileSync(path.join(workdir, "versions.json"), "utf-8");
  expect(Object.keys(JSON.parse(output))).toEqual(
    expect.arrayContaining(
      constraints.map((c) => `registry.terraform.io/${c.fqn}`)
    )
  );
});
