import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

// this is a workaround for a bug introduced in TS 3.9.x and seems to be unlikely to get fixed.
// Since jsii relies on TS < 4 at the moment we can't use newer TS versions which have this fixed (^4.1).
// see https://github.com/hashicorp/terraform-cdk/pull/1248 for more context
test("shard exports across multiple files to avoid generating files with more than a 1000 exports", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "export-sharding.test")
  );

  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "aws_wafv2_web_acl.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/wafv2/wafv2-web-acl.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot(`wafv2-web-acl-resource`);

  const outputIndex = fs.readFileSync(
    path.join(workdir, "providers/aws/wafv2/index.ts"),
    "utf-8"
  );
  expect(outputIndex).toMatchSnapshot(`index`);

  const outputStructsIndex = fs.readFileSync(
    path.join(workdir, "providers/aws/wafv2/wafv2-web-acl-structs/index.ts"),
    "utf-8"
  );
  expect(outputStructsIndex).toMatchSnapshot(`structs-index`);

  const outputStructs0 = fs.readFileSync(
    path.join(workdir, "providers/aws/wafv2/wafv2-web-acl-structs/structs0.ts"),
    "utf-8"
  );
  expect(outputStructs0).toMatchSnapshot(`structs0`);

  const outputStructs400 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs400.ts"
    ),
    "utf-8"
  );
  expect(outputStructs400).toMatchSnapshot(`structs400`);

  const outputStructs800 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs800.ts"
    ),
    "utf-8"
  );
  expect(outputStructs800).toMatchSnapshot(`structs800`);

  const outputStructs1200 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs1200.ts"
    ),
    "utf-8"
  );
  expect(outputStructs1200).toMatchSnapshot(`structs1200`);

  const outputStructs1600 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs1600.ts"
    ),
    "utf-8"
  );
  expect(outputStructs1600).toMatchSnapshot(`structs1600`);

  const outputStructs2000 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs2000.ts"
    ),
    "utf-8"
  );
  expect(outputStructs2000).toMatchSnapshot(`structs2000`);

  const outputStructs2400 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs2400.ts"
    ),
    "utf-8"
  );
  expect(outputStructs2400).toMatchSnapshot(`structs2400`);

  const outputStructs2800 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs2800.ts"
    ),
    "utf-8"
  );
  expect(outputStructs2800).toMatchSnapshot(`structs2800`);

  const outputStructs3200 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs3200.ts"
    ),
    "utf-8"
  );
  expect(outputStructs3200).toMatchSnapshot(`structs3200`);

  const outputStructs3600 = fs.readFileSync(
    path.join(
      workdir,
      "providers/aws/wafv2/wafv2-web-acl-structs/structs3600.ts"
    ),
    "utf-8"
  );
  expect(outputStructs3600).toMatchSnapshot(`structs3600`);
});

test("shard exports across multiple files to avoid generating files with more than a 1000 exports in a provider without namespaces", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "export-sharding-no-namespace.test")
  );

  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "datadog_dashboard.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/datadog/dashboard.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot(`dashboard-resource`);

  const outputStructsIndex = fs.readFileSync(
    path.join(workdir, "providers/datadog/dashboard-structs/index.ts"),
    "utf-8"
  );
  expect(outputStructsIndex).toMatchSnapshot(`structs-index`);

  const outputStructs0 = fs.readFileSync(
    path.join(workdir, "providers/datadog/dashboard-structs/structs0.ts"),
    "utf-8"
  );
  expect(outputStructs0).toMatchSnapshot(`structs0`);

  const outputStructs400 = fs.readFileSync(
    path.join(workdir, "providers/datadog/dashboard-structs/structs400.ts"),
    "utf-8"
  );
  expect(outputStructs400).toMatchSnapshot(`structs400`);
});
