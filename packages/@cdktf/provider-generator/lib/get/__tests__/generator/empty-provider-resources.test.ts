import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";

test("provider with no resources", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(
    path.join(os.tmpdir(), "empty-provider-resources.test")
  );
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        "fixtures",
        "empty-provider-resources.test.fixture.json"
      ),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec);
  await code.save(workdir);
});
