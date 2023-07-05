// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { Language, TerraformModuleConstraint } from "@cdktf/commons";
import { ConstructsMaker } from "../../constructs-maker";
import { expectModuleToMatchSnapshot } from "../util";

test("generate some modules", async () => {
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "module-generator.test")
  );
  const constraint = new TerraformModuleConstraint(
    "terraform-aws-modules/eks/aws@7.0.1"
  );

  const maker = new ConstructsMaker({
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
  });
  await maker.generate([constraint]);

  const output = fs.readFileSync(
    path.join(workdir, "modules/terraform-aws-modules/aws/eks.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
}, 120000);

expectModuleToMatchSnapshot("no module outputs", "generator", [
  "module-no-outputs.test.fixture.tf",
]);

expectModuleToMatchSnapshot("typeless variables", "generator", [
  "module-no-variable-type.test.fixture.tf",
]);

expectModuleToMatchSnapshot("no newline", "generator", [
  "module-no-newline-1.test.fixture.tf",
  "module-no-newline-2.test.fixture.tf",
]);

test("generate multiple aws modules", async () => {
  jest.setTimeout(120000);

  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "module-generator-aws.test")
  );
  const constraints = [
    new TerraformModuleConstraint("terraform-aws-modules/vpc/aws@2.78.0"),
    new TerraformModuleConstraint("terraform-aws-modules/rds-aurora/aws@4.1.0"),
  ];

  const maker = new ConstructsMaker({
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
  });
  await maker.generate(constraints);

  const vpcOutput = fs.readFileSync(
    path.join(workdir, "modules/terraform-aws-modules/aws/vpc.ts"),
    "utf-8"
  );
  expect(vpcOutput).toMatchSnapshot();

  const rdsOutput = fs.readFileSync(
    path.join(workdir, "modules/terraform-aws-modules/aws/rds-aurora.ts"),
    "utf-8"
  );
  expect(rdsOutput).toMatchSnapshot();
}, 120000);

test("generate nested module", async () => {
  jest.setTimeout(120000);

  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "module-generator-nested.test")
  );
  const constraint = new TerraformModuleConstraint(
    "terraform-aws-modules/vpc/aws//modules/vpc-endpoints@3.19.0"
  );

  const maker = new ConstructsMaker({
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
  });
  await maker.generate([constraint]);

  const output = fs.readFileSync(
    path.join(
      workdir,
      "modules/terraform-aws-modules/aws/vpc/modules/vpc-endpoints.ts"
    ),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

expectModuleToMatchSnapshot("getX variables", "generator", [
  "module-get-x.test.fixture.tf",
]);

expectModuleToMatchSnapshot(
  "handle */* in module variable default string",
  "generator",
  ["module-with-star-default.test.fixture.tf"]
);

test("generate module that can't be initialized", async () => {
  jest.setTimeout(120000);

  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "module-generator.test-no-init")
  );
  const constraint = new TerraformModuleConstraint(
    "milliHQ/next-js/aws@1.0.0-canary.5"
  );

  const maker = new ConstructsMaker({
    codeMakerOutput: workdir,
    targetLanguage: Language.TYPESCRIPT,
  });
  await maker.generate([constraint]);

  const output = fs.readFileSync(
    path.join(workdir, "modules/milliHQ/aws/next-js.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
}, 120000);
