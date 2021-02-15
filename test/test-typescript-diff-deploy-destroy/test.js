const { execSync } = require("child_process");
const os = require("os");
const path = require("path");
const fs = require("fs");

const env = Object.assign({}, process.env);
// Disable spinner even when we have a TTY
env["CI"] = "1";

describe("full integration test", () => {
  let folder, projectPath;
  const scriptdir = __dirname;

  beforeAll(() => {
    projectPath = path.join(os.tmpdir(), "test");
    folder = fs.mkdtempSync(projectPath);
    process.chdir(folder);
    // initialize an empty project
    execSync(
      `cdktf init --template typescript --project-name="typescript-test" --project-description="typescript test app" --local`,
      { stdio: "inherit", env }
    );
    // put some code in it
    fs.copyFileSync(path.join(scriptdir, "main.ts"), "main.ts");
    // add null provider
    fs.copyFileSync(path.join(scriptdir, "cdktf.json"), "cdktf.json");
    execSync(`cdktf get`, { stdio: "inherit", env });
  });

  test("diff", () => {
    const ouput = execSync(`cdktf diff`, { env }).toString();
    expect(ouput).toMatchInlineSnapshot(`
      "Stack: hello-deploy
      Resources
       + NULL_RESOURCE       test                null_resource.test


      Diff: 1 to create, 0 to update, 0 to delete.
      "
    `);
  });

  test("deploy", () => {
    const ouput = execSync(`cdktf deploy --auto-approve`, { env }).toString();
    expect(ouput).toMatchInlineSnapshot(`
      "Deploying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 created, 0 updated, 0 destroyed.
      "
    `);
  });

  test("destroy", () => {
    const ouput = execSync(`cdktf destroy --auto-approve`, { env }).toString();
    expect(ouput).toMatchInlineSnapshot(`
      "Destroying Stack: hello-deploy
      Resources
       ✔ NULL_RESOURCE       test                null_resource.test


      Summary: 1 destroyed.
      "
    `);
  });
});
