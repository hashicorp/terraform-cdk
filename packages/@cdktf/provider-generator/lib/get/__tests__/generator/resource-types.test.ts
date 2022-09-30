// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("generate a cloudfront distribution resource", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "cloudfront.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "aws_cloudfront_distribution.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/cloudfront-distribution/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot("cloudfront");
});

test("generate a s3 bucket resource", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "s3.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "aws_s3_bucket.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/s3-bucket/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("generate a fms admin account with an empty options interface", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "fms.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "aws_fms_admin_account.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/fms-admin-account/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("generate a security group", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "sg.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "aws_security_group.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/security-group/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});
