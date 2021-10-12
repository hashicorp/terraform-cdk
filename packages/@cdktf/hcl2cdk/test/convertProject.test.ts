import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { execSync } from "child_process";
import { convertProject, getTerraformConfigFromDir } from "../lib";
import {
  readSchema,
  ConstructsMakerProviderTarget,
  LANGUAGES,
  config,
} from "@cdktf/provider-generator";

const providerRequirements = ["kreuzwerker/docker@ ~>2.15.0"];
const createFiles = (cwd: string, files: [string, string][]) => {
  files.forEach(([p, content]) => {
    fs.writeFileSync(path.resolve(cwd, p), content, "utf8");
  });
};

const createTSCdkProject = (cwd: string) =>
  createFiles(cwd, [
    [
      "cdktf.json",
      `{
"language": "typescript",
"app": "npm run --silent compile && node main.js",
"terraformProviders": [],
"terraformModules": [],
"context": {}}`,
    ],
    [
      "main.ts",
      `import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";


class MyStack extends TerraformStack {
    constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    }
}

const app = new App();
new MyStack(app, "converted");
app.synth();`,
    ],
    [
      "package.json",
      `{
        "name": "converted",
        "version": "1.0.0",
        "main": "main.js",
        "types": "main.ts",
        "license": "MPL-2.0",
        "private": true,
        "scripts": {
          "get": "cdktf get",
          "build": "tsc",
          "synth": "cdktf synth",
          "compile": "tsc --pretty",
          "watch": "tsc -w",
          "test": "echo ok",
          "upgrade": "npm i cdktf@latest cdktf-cli@latest",
          "upgrade:next": "npm i cdktf@next cdktf-cli@next"
        },
        "engines": {
          "node": ">=10.12"
        },
        "dependencies": {
          "cdktf": "next",
          "constructs": "^10.0.5"
        },
        "devDependencies": {
          "@types/node": "^14.0.26",
          "typescript": "^3.9.7",
          "cdktf-cli": "next"
        }
      }`,
    ],
    [
      "tsconfig.json",
      `{
        "compilerOptions": {
          "alwaysStrict": true,
          "charset": "utf8",
          "declaration": true,
          "experimentalDecorators": true,
          "inlineSourceMap": true,
          "inlineSources": true,
          "lib": [
            "es2018"
          ],
          "module": "CommonJS",
          "noEmitOnError": true,
          "noFallthroughCasesInSwitch": true,
          "noImplicitAny": true,
          "noImplicitReturns": true,
          "noImplicitThis": true,
          "noUnusedLocals": true,
          "noUnusedParameters": true,
          "resolveJsonModule": true,
          "strict": true,
          "strictNullChecks": true,
          "strictPropertyInitialization": true,
          "stripInternal": true,
          "target": "ES2018"
        },
        "include": [
          "**/*.ts"
        ],
        "exclude": [
          "node_modules"
        ]
      }`,
    ],
  ]);

const terraformProject = (files: [string, string][]) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cdktf-convert."));
  createFiles(dir, files);

  return {
    importPath: dir,
    targetPath: fs.mkdtempSync(path.join(os.tmpdir(), "cdktf-converted.")),
  };
};

const exec = (command: string, cwd: string) =>
  execSync(command, {
    cwd,
    ...(process.env.VERBOSE === "true" ? { stdio: "inherit" } : {}),
  });

const getTerraformPlan = (cwd: string) => {
  exec(`terraform init`, cwd);
  exec(`terraform plan -out planfile`, cwd);
  exec(`terraform show -json planfile > plan.json`, cwd);

  return JSON.parse(fs.readFileSync(path.resolve(cwd, "plan.json"), "utf8"));
};

const getCdkPlan = (cwd: string) => {
  exec(`npm install`, cwd);
  exec(`npm run get`, cwd);
  exec(`npm run synth`, cwd);

  return getTerraformPlan(path.resolve(cwd, "cdktf.out/stacks/converted/"));
};

function resources(plan: any) {
  return plan.planned_values.root_module.resources.map((item: any) => ({
    type: item.type,
    provider_name: item.provider_name,
    values: item.values,
  }));
}

let cachedProviderSchema: any;
describe("convertProject", () => {
  beforeAll(async () => {
    // Get all the provider schemas
    const { providerSchema } = await readSchema(
      providerRequirements.map((spec) =>
        ConstructsMakerProviderTarget.from(
          new config.TerraformProviderConstraint(spec),
          LANGUAGES[0]
        )
      )
    );
    cachedProviderSchema = providerSchema;
  });
  it("has a similar plan", async () => {
    const { importPath, targetPath } = terraformProject([
      [
        "main.tf",
        `terraform {
        required_providers {
          docker = {
            source  = "kreuzwerker/docker"
            version = "2.14.0"
          }
        }
      }
      
      provider "docker" {
        host = "unix:///var/run/docker.sock"
      }`,
      ],
      [
        "container.tf",
        `resource "docker_image" "ubuntu" {
            name = "ubuntu:latest"
          }
          
          resource "docker_container" "foo" {
            image = docker_image.ubuntu.latest
            name  = "foo"
          }`,
      ],
      [
        "cluster.tf",
        `module "k3s" {
        source  = "camptocamp/k3s/docker"
        version = "0.11.0"
        
        cluster_endpoint = ""
        cluster_name = "cdktf"
        network_name = ""
      }`,
      ],
    ]);

    const previousPlan = getTerraformPlan(importPath);
    createTSCdkProject(targetPath);
    const mainTs = fs.readFileSync(path.resolve(targetPath, "main.ts"), "utf8");

    const { code, cdktfJson } = await convertProject(
      getTerraformConfigFromDir(importPath),
      mainTs,
      require(path.resolve(targetPath, "cdktf.json")),
      {
        language: "typescript",
        providerSchema: cachedProviderSchema,
      }
    );

    fs.writeFileSync(path.resolve(targetPath, "main.ts"), code, "utf8");
    fs.writeFileSync(
      path.resolve(targetPath, "cdktf.json"),
      JSON.stringify(cdktfJson),
      "utf8"
    );

    const currentPlan = getCdkPlan(targetPath);

    expect(resources(currentPlan)).toEqual(resources(previousPlan));
  });
});
