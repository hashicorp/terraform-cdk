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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-optional-complex.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-complex.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/computed-complex-nested.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/string-list.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/number-list.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/boolean-list.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/string-map.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/number-map.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/boolean-map.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/deeply-nested-block-types.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/single-block-type.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/block-type-set-list.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/block-type-nested-computed-list.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-string.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-number.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-boolean.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/primitive-dynamic.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/ignored-attributes.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/incompatible-attribute-names.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/list-of-string-map.ts"),
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
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/name-conflict.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});
