import { TerraformStack, Manifest, App, Annotations, Testing } from "../lib";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

test("filename", () => {
  expect(Manifest.fileName).toEqual("manifest.json");
});

test("stacksFolder", () => {
  expect(Manifest.stacksFolder).toEqual("stacks");
});

test("stacksFilename", () => {
  expect(Manifest.stackFileName).toEqual("cdk.tf.json");
});

test("create stacks folder", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  new Manifest("0.0.0", outdir);
  expect(fs.existsSync(path.join(outdir, Manifest.stacksFolder))).toBeTruthy();
});

test("get stack manifest", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const manifest = new Manifest("0.0.0", outdir);

  const app = new App();
  const stackManifest = manifest.forStack(
    new TerraformStack(app, "this-is-a-stack")
  );

  expect(stackManifest).toMatchInlineSnapshot(`
    Object {
      "annotations": Array [],
      "constructPath": "this-is-a-stack",
      "dependencies": Array [],
      "name": "this-is-a-stack",
      "synthesizedStackPath": "stacks/this-is-a-stack/cdk.tf.json",
      "workingDirectory": "stacks/this-is-a-stack",
    }
  `);
});

test("write manifest", () => {
  const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
  const manifest = new Manifest("0.0.0", outdir);

  const app = new App();
  manifest.forStack(new TerraformStack(app, "this-is-a-stack"));

  manifest.writeToFile();

  expect(fs.readFileSync(path.join(outdir, Manifest.fileName)).toString())
    .toMatchInlineSnapshot(`
    "{
      \\"version\\": \\"0.0.0\\",
      \\"stacks\\": {
        \\"this-is-a-stack\\": {
          \\"name\\": \\"this-is-a-stack\\",
          \\"constructPath\\": \\"this-is-a-stack\\",
          \\"workingDirectory\\": \\"stacks/this-is-a-stack\\",
          \\"synthesizedStackPath\\": \\"stacks/this-is-a-stack/cdk.tf.json\\",
          \\"annotations\\": [],
          \\"dependencies\\": []
        }
      }
    }"
  `);
});

describe("manifest annotations", () => {
  beforeAll(
    () => (process.env.CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS = "true")
  );
  afterAll(() => delete process.env.CDKTF_CONTINUE_SYNTH_ON_ERROR_ANNOTATIONS);

  test("exist after synth", () => {
    const outdir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf.outdir."));
    const app = Testing.stubVersion(new App({ outdir, stackTraces: false }));
    const stack = new TerraformStack(app, "this-is-a-stack");
    Annotations.of(stack).addInfo("an info");
    Annotations.of(stack).addWarning("a warning");
    Annotations.of(stack).addError("an error");

    app.synth();

    expect(fs.readFileSync(path.join(outdir, Manifest.fileName)).toString())
      .toMatchInlineSnapshot(`
      "{
        \\"version\\": \\"stubbed\\",
        \\"stacks\\": {
          \\"this-is-a-stack\\": {
            \\"name\\": \\"this-is-a-stack\\",
            \\"constructPath\\": \\"this-is-a-stack\\",
            \\"workingDirectory\\": \\"stacks/this-is-a-stack\\",
            \\"synthesizedStackPath\\": \\"stacks/this-is-a-stack/cdk.tf.json\\",
            \\"annotations\\": [
              {
                \\"constructPath\\": \\"this-is-a-stack\\",
                \\"level\\": \\"@cdktf/info\\",
                \\"message\\": \\"an info\\"
              },
              {
                \\"constructPath\\": \\"this-is-a-stack\\",
                \\"level\\": \\"@cdktf/warn\\",
                \\"message\\": \\"a warning\\"
              },
              {
                \\"constructPath\\": \\"this-is-a-stack\\",
                \\"level\\": \\"@cdktf/error\\",
                \\"message\\": \\"an error\\"
              }
            ],
            \\"dependencies\\": []
          }
        }
      }"
    `);
  });
});
