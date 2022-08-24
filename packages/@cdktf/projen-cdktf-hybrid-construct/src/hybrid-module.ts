import * as path from "path";
import { FileBase, IResolver, Project, SampleDir } from "projen";
import { JsiiProject, ConstructLibraryOptions } from "projen/lib/cdk";
import { defaults } from "./defaults";

export interface ConstructExamplesOption {
  // If set construct examples will be rendered
  readonly enabled: boolean;
  // Path for the construct examples
  readonly folder?: string;
}

export interface TerraformExamplesOption {
  // If set terraform examples will be rendered
  readonly enabled: boolean;
  // Path for the terraform examples
  readonly folder?: string;
  // The HCL config file to use for the terraform provider
  readonly providerConfig?: string;
  // HCL example config
  readonly exampleCode?: string;
}

export interface HybridModuleOptions extends ConstructLibraryOptions {
  /**
   * Minimum target version of this library.
   * @default "^0.10.1"
   * @featured
   */
  readonly cdktfVersion?: string;

  /**
   * Construct version to use
   * @default "^10.0.12"
   */
  readonly constructVersion?: string;

  /**
   * If set a terraform examples folder will be created
   * @default undefined
   * @featured
   */
  readonly terraformExamples?: TerraformExamplesOption;

  /**
   * If set a construct examples folder will be created
   * @default undefined
   * @featured
   */
  readonly constructExamples?: ConstructExamplesOption;

  /**
   * If set a terraform examples folder will be created
   *Defaults to a uuid string as cdktf would
   * Mostly used for testing to have a predictable result
   */
  readonly projectId?: string;

  /**
   * If set a terraform plan is being run as part of the tests
   */
  readonly runPlan?: boolean;
}

const constructSrcCode = `
import { Construct } from "constructs";

export interface MyConstructOptions {
  readonly propertyA: string;
}

export class MyConstruct extends Construct {
  constructor(scope: Construct, id: string, public config: MyConstructOptions) {
    super(scope, id);
  }
}
`;

const constructTestCode = `
import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { MyConstruct } from "../";

// To learn more about testing see cdk.tf/testing
describe("MyConstruct", () => {
  it("should synthesize", () => {
    expect(
      Testing.synthScope((scope) => {
        new MyConstruct(scope, "my-construct", {
          propertyA: "valueA",
        });
      })
    ).toMatchSnapshot();
  });
});
`;

const moduleSrcCode = `
import { App } from "cdktf";
import { Construct } from "constructs";
import { TFModuleStack } from "cdktf-tf-module-stack";
import { MyConstruct } from "./index";

class MyAwesomeModule extends TFModuleStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new MyConstruct(this, "my-construct", {
      propertyA: "valueA",
    });
  }
}

const app = new App();
// This is the name the module can be found under. 
// We expect a "my-awesome-module.md" file in this directory.
// The README.md file will be generated from this file.
new MyAwesomeModule(app, "my-awesome-module");
app.synth();
`;

const terraformReadmeDocs = `
# Please add here some pure HCL tests for your modules in order to test HCL Interoperability

Examples:

module "my_awesome_test" {
  source = "../modules/my-awesome-modules"
  ...variables...
}
    `;

class ScriptFile extends FileBase {
  constructor(project: Project, filePath: string, private content: string) {
    super(project, filePath, {
      executable: true,
    });
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    return this.content;
  }
}

class HCLFile extends FileBase {
  constructor(project: Project, filePath: string, private content: string) {
    super(project, filePath, {
      executable: false,
      committed: true,
      readonly: false, // terraform fmt might want to overwrite it
    });
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    return `# This file is managed by projen. Do not edit, change the .projenrc file instead.
${this.content}`;
  }
}

/**
 * Hybrid CDKTF Construct / Terraform Module
 *
 * @pjid hybrid-module
 */
export class HybridModule extends JsiiProject {
  constructor(options: HybridModuleOptions) {
    super({
      ...defaults,
      ...options,
      eslintOptions: Object.assign({}, options.eslintOptions, {
        lintProjenRc: false,
      }),
      postBuildSteps: [],
    });
    const constructVersion = options.constructVersion || "^10.0.107";
    const cdktfVersion = options.cdktfVersion || "^0.10.1";

    this.addPeerDeps(`constructs@${constructVersion}`, `cdktf@${cdktfVersion}`);
    this.addDevDeps(`cdktf-cli@${cdktfVersion}`, "ts-node");
    this.addKeywords("cdk", "cdktf", "cdktf-hybrid", "terraform");
    this.setScript("terraform:test", "./scripts/tf-module-test.sh");

    // Module Entrypoint
    this.addDeps("cdktf-tf-module-stack");
    const moduleDocs = `
# My Awesome Module

## Usage

\`\`\`hcl
module "eks_managed_node_group" {
  source = "${
    options.repositoryUrl
      ?.replace("https://github.com/", "")
      .replace("http://github.com/", "")
      .replace("github.com/", "") || "my-github-repo"
  }//modules/my-awesome-module"

}
\`\`\`
    `;

    new SampleDir(this, this.srcdir, {
      files: {
        "index.ts": constructSrcCode.trim(),
        "tfModules.ts": moduleSrcCode.trim(),
        "my-awesome-module.md": moduleDocs.trim(),
        "cdktf.json": JSON.stringify(
          {
            language: "typescript",
            app: "npx ts-node tfModules.ts",
            terraformProviders: ["hashicorp/null@3.1.1"], // We need at least a provider for get to succeed
            terraformModules: [],
            output: "modules",
            projectId:
              options.projectId ||
              "hybrid-module-fb734dba-eac9-466c-96bb-7eb9c406c28a",
          },
          null,
          2
        ),
        "__tests__/index-test.ts": constructTestCode.trim(),
      },
    });

    if (options.terraformExamples && options.terraformExamples.enabled) {
      const providerConfig =
        options.terraformExamples.providerConfig ||
        `
terraform {
  # Terraform binary version constraint
  required_version = "~> 1.1.0"

  # Define all needed providers here, you can find all available providers here:
  # https://registry.terraform.io/
  required_providers {}
}

# Initialize your provider here

`.trim();
      const examplesFolder =
        options.terraformExamples.folder || "terraform-examples";

      new SampleDir(this, examplesFolder, {
        files: {
          "main.tf":
            options.terraformExamples.exampleCode ||
            `# Configure you module here`,
          "README.md": terraformReadmeDocs.trim(),
        },
      });

      new HCLFile(
        this,
        path.join(examplesFolder, "provider.tf"),
        providerConfig
      );

      this.gitignore.addPatterns(
        `${examplesFolder}/.terraform`,
        `${examplesFolder}/.terraform.lock.hcl`
      );

      new ScriptFile(
        this,
        "./scripts/tf-module-test.sh",
        `#!/bin/bash
# This script is created by projen, do not edit it directly.
set -e

terraform -chdir=${examplesFolder} init --upgrade
terraform -chdir=${examplesFolder} fmt
terraform -chdir=${examplesFolder} validate
${options.runPlan ? `terraform -chdir=${examplesFolder} plan` : ""}
          `
      );

      this.testTask.exec("./scripts/tf-module-test.sh");
      this.jest?.addIgnorePattern(`<rootDir>/${examplesFolder}`);
    }

    if (options.constructExamples && options.constructExamples.enabled) {
      const constructExampleFolder =
        options.constructExamples.folder || "construct-examples";

      const levels = constructExampleFolder
        .split("/")
        .splice(0, 1)
        .map(() => "..")
        .join("/");

      const constructReadmeDocs = `
# Construct Examples

Example use-cases for the Construct library.

- [Basic Usage](./basic.ts)

To ensure all examples are working, please make sure the [index.ts](./index.ts) file is importing all of them.
`;

      const constructExampleCode = `
import { TerraformStack } from "cdktf";
import { Construct } from "constructs";

import { MyConstruct } from "${levels}/src/";

export class BasicExample extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new MyConstruct(this, "my-construct", {
      propertyA: "valueA",
    });
  }
}


`;

      const exampleCollectionCode = `
// This file will be synthesized to check if all examples are working

import { App } from "cdktf";
// All examples need to be imported here
import { BasicExample } from "./basic";

const app = new App();

// All examples need to be initialized here
new BasicExample(app, "basic-example");
app.synth();
`;

      new SampleDir(this, constructExampleFolder, {
        files: {
          "index.ts": exampleCollectionCode.trim(),
          "basic.ts": constructExampleCode.trim(),
          "cdktf.json": JSON.stringify(
            {
              language: "typescript",
              app: `npx ts-node --project ${levels}/tsconfig.dev.json index.ts`,
              projectId:
                options.projectId ||
                "hybrid-module-fb734dba-eac9-466c-96bb-7eb9c406c28a",
            },
            null,
            2
          ),
          "README.md": constructReadmeDocs.trim(),
        },
      });

      this.testTask.exec(`cdktf synth`, {
        cwd: constructExampleFolder,
      });
      this.gitignore.addPatterns(`${constructExampleFolder}/cdktf.out`);
    }

    this.gitignore.addPatterns("src/.gen", "src/cdktf.out", "src/modules");
    this.compileTask.prependExec("cdktf get", {
      cwd: this.srcdir,
    });
    this.compileTask.exec("cdktf synth", {
      cwd: this.srcdir,
      name: "Synthesize module HCL",
    });

    new ScriptFile(
      this,
      "scripts/copy-modules.sh",
      `
#!/bin/bash
# This script is created by projen, do not edit it directly.
set -e

SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

# check if the module folder has been generated as expected
MODULES_FOLDER=$( cd -- "$SCRIPTPATH/../src/modules/stacks" >/dev/null 2>&1 ; pwd -P )
SRC_FOLDER=$( cd -- "$SCRIPTPATH/../src/" >/dev/null 2>&1 ; pwd -P )
TARGET_FOLDER="$SCRIPTPATH/../modules"

if [ ! -d "$MODULES_FOLDER" ]; then
  echo "Expected module folder to exist at $MODULES_FOLDER"
  exit 1
fi

cd "$MODULES_FOLDER"
for d in */ ; do
    [ -L "\${d%/}" ] && continue

    dirname="\${d%/}"


    # Check if everything is in place
    if [ ! -f "$MODULES_FOLDER/$dirname/cdk.tf.json" ]; then
      echo "Expected code for $dirname at cdk.tf.json to exist at $MODULES_FOLDER/$dirname"
      exit 1
    fi

    if [ ! -f "$SRC_FOLDER/$dirname.md" ]; then
      echo "Expected Documentation for $dirname at $dirname.md to exist at $SRC_FOLDER/$dirname.md"
      exit 1
    fi

    # Copy module and readme together
    echo "Copying Code and README for module $dirname"
    mkdir -p "$TARGET_FOLDER"
    mkdir -p "$TARGET_FOLDER/$dirname"
    cp "$MODULES_FOLDER/$dirname/cdk.tf.json" "$TARGET_FOLDER/$dirname/cdk.tf.json"
    cp "$SRC_FOLDER/$dirname.md" "$TARGET_FOLDER/$dirname/README.md"

    # Add README hcl docs
    if which terraform-docs >/dev/null; then
      terraform-docs markdown table --output-file "$TARGET_FOLDER/$dirname/README.md" "$TARGET_FOLDER/$dirname" 
    else
      docker run --rm --volume "$SCRIPTPATH/../modules:/terraform-docs" -u $(id -u) quay.io/terraform-docs/terraform-docs:0.16.0 markdown table --output-file "/terraform-docs/$dirname/README.md" /terraform-docs/$dirname
    fi
done
`.trim()
    );
    this.compileTask.exec("./scripts/copy-modules.sh", {
      name: "Copy HCL Modules",
    });

    // ignore dist in tests
    this.jest?.addIgnorePattern("dist");
  }
}
