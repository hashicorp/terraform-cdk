import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("broken attribute description comments", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "description-escaping.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "description-escaping.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/google/description-escaping.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});

// That popped up in the google-beta provider which transforms markdown fenced
// code blocks from the actual markdown docs to the provider schema (``` => ''')
// see
//  - https://raw.githubusercontent.com/hashicorp/terraform-provider-google-beta/4094e3bdd530ca853a046a6d938807f8a131c7c7/website/docs/r/iam_workload_identity_pool_provider.html.markdown
//  - https://github.com/hashicorp/terraform-provider-google-beta/blob/4094e3bdd530ca853a046a6d938807f8a131c7c7/google-beta/resource_iam_beta_workload_identity_pool_provider.go

test("malformed code blocks which break in python rst", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "markdown-description-with-code-blocks.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "markdown-description-with-code-blocks.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const output = fs.readFileSync(
    path.join(workdir, "providers/aws/code-blocks.ts"),
    "utf-8"
  );
  expect(output).toMatchSnapshot();
});
