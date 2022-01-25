import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("two providers with same resource name do not collide", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "unique-resources-per-provider.test")
  );
  console.log("workdir", workdir);
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "unique-resources-per-provider.text.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);

  const providerOneOutput = fs.readFileSync(
    path.join(workdir, "providers/provider_one/resource-name.ts"),
    "utf-8"
  );
  expect(providerOneOutput).toMatchSnapshot();

  const providerTwoOutput = fs.readFileSync(
    path.join(workdir, "providers/provider_two/resource-name.ts"),
    "utf-8"
  );
  expect(providerTwoOutput).toMatchSnapshot();
});
