// Copyright (c) HashiCorp, Inc // SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("generate a resource with attribute that's a list of a map of an object", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "deep-nested-attributes.test"),
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "stripe-schema.test.fixture.json"),
      "utf-8",
    ),
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/stripe/invoiceitems/index.ts"),
    "utf-8",
  );

  expect(output).toEqual(
    expect.stringContaining(
      `export class InvoiceitemsDiscountsMapList extends cdktf.MapList {`,
    ),
  );
});

test("generate a resource with attribute that's a map of a list of an object", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "deep-nested-attributes-list.test"),
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "deep-attributes.test.fixture.json"),
      "utf-8",
    ),
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/stripe/invoiceitems/index.ts"),
    "utf-8",
  );

  expect(output).toEqual(
    expect.stringContaining(
      `export class InvoiceitemsDiscountsListMap extends cdktf.ComplexMap {`,
    ),
  );
});
