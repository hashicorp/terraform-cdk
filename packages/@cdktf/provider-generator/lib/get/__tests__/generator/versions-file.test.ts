import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { TerraformProviderGenerator } from "../../generator/provider-generator";
import { CodeMaker } from "codemaker";
import { ConstructsMakerTarget, Language } from "../../constructs-maker";

test("generates a versions file", async () => {
  const code = new CodeMaker();
  const workdir = fs.mkdtempSync(path.join(os.tmpdir(), "versions-file.test"));
  const spec = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "fixtures", "versions-file.test.fixture.json"),
      "utf-8"
    )
  );
  new TerraformProviderGenerator(code, spec, [
    ConstructsMakerTarget.from(
      {
        fqn: "hashicorp/aws",
        name: "aws",
        source: "hashicorp/aws",
      },
      Language.TYPESCRIPT
    ),
    ConstructsMakerTarget.from(
      {
        fqn: "hashicorp/random",
        name: "random",
        source: "hashicorp/random",
      },
      Language.TYPESCRIPT
    ),
    ConstructsMakerTarget.from(
      {
        fqn: "kreuzwerker/docker",
        name: "docker",
        source: "kreuzwerker/docker",
      },
      Language.TYPESCRIPT
    ),
  ]);
  await code.save(workdir);

  const output = fs.readFileSync(path.join(workdir, "versions.json"), "utf-8");
  expect(output).toMatchSnapshot();
});
