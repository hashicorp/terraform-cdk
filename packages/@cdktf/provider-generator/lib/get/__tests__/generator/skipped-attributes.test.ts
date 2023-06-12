// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("skips attributes in the disallow list", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "skip-attributes.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "aws_quicksight_template.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/quicksight-template/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot(`quicksight-template`);

  // There should also be no index structs
  expect(
    fs.existsSync(
      path.join(workdir, "providers/aws/quicksight-template/index-structs")
    )
  ).toBe(false);
});
