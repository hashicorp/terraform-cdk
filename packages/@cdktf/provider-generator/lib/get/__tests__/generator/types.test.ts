// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("computed optional complex attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "computed-complex-option.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "computed-optional-complex.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-optional-complex/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("computed complex attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "computed-complex.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "computed-complex.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-complex/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("computed complex nested attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "computed-complex-nested.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "computed-complex-nested.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-complex-nested/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("string list attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "string-list.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "string-list.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/string-list/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("number list attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "number-list.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "number-list.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/number-list/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("boolean list attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "boolean-list.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "boolean-list.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/boolean-list/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("string map attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "string-map.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "string-map.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/string-map/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("number map attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "number-map.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "number-map.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/number-map/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("boolean map attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "boolean-map.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "boolean-map.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/boolean-map/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("deeply nested block types", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "block-types.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "deeply-nested-block-types.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/deeply-nested-block-types/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("single block type", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "single-block-type.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "single-block-type.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/single-block-type/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("set / list block type", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "set-list-block.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "block-type-set-list.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/block-type-set-list/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("computed nested complex list block type", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "nested-computed-list-block.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "block-type-nested-computed-list.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/block-type-nested-computed-list/index.ts"
    ),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("primitive string", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "primitive-string.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "primitive-string.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-string/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("primitive number", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "primitive-number.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "primitive-number.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-number/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("primitive boolean", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "primitive-boolean.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "primitive-boolean.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-boolean/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("primitive dynamic", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "primitive-dynamic.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "primitive-dynamic.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-dynamic/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("ignored attributes", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "ignored-attributes.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "ignored-attributes.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/ignored-attributes/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("incompatible attribute names", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "incompatible-attribute-names.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "incompatible-attribute-names.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/incompatible-attribute-names/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("incompatible resource names", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "incompatible-resource-names.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "incompatible-resource-names.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const files = fs.readdirSync(path.join(workdir, "providers/test"));
  expect(files).toMatchInlineSnapshot(`
    Array [
      "function-resource",
      "index.ts",
      "object-resource",
      "static-resource",
      "string-resource",
    ]
  `);

  for (const file of files) {
    const output = fs.readFileSync(
      path.join(
        workdir,
        "providers/test/",
        file,
        file !== "index.ts" ? "index.ts" : ""
      ),
      "utf-8"
    );
    expect(output).toMatchSnapshot(file); // use filename as snapshot indicator to not depend on order of files (e.g. if new file appears)
  }
});

test("list of string map attribute", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "list-of-string-map.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "list-of-string-map.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/list-of-string-map/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

test("reset and input name conflicts", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "name-conflict.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "name-conflict.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec).generateAll();
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/name-conflict/index.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});
