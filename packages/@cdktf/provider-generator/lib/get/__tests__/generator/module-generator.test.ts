import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { ConstructsMaker, Language } from "../../constructs-maker";
import { TerraformModuleConstraint } from "../../../config";
import { expectModuleToMatchSnapshot } from "../util";

test("generate some modules", async () => {
  jest.setTimeout(120000);

  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "module-generator.test")
  );
  const constraint = new TerraformModuleConstraint(
    "terraform-aws-modules/eks/aws@7.0.1"
  );

  const maker = new ConstructsMaker(
    { codeMakerOutput: workdir, targetLanguage: Language.TYPESCRIPT },
    [constraint]
  );
  await maker.generate();

  const output = fs.readFileSync(
    path.join(workdir, "modules/terraform-aws-modules/aws/eks.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

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

  const maker = new ConstructsMaker(
    { codeMakerOutput: workdir, targetLanguage: Language.TYPESCRIPT },
    constraints
  );
  await maker.generate();

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
});
