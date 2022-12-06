// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { convert } from "../../lib/index";
import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import { execSync } from "child_process";
import execa from "execa";
import {
  LANGUAGES,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
} from "@cdktf/commons";
import {
  ConstructsMakerProviderTarget,
  readSchema,
} from "@cdktf/provider-generator";

import deepmerge from "deepmerge";

// Polyfill for older TS versions
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type SchemaPromise = ReturnType<typeof readSchema>;
export enum Synth {
  yes,
  never, // Some examples are built so that they will never synth but test a specific generation edge case
}

type PathToCopy = string;
type ProviderFqn = string;
enum ProviderType {
  provider,
  module,
}

type ProviderDefinition = {
  fqn: ProviderFqn;
  type: ProviderType;
  path: PathToCopy;
};

type SchemaFilter = {
  resources?: string[];
  dataSources?: string[];
};

const cdktfBin = path.join(__dirname, "../../../../cdktf-cli/bundle/bin/cdktf");
const cdktfDist = path.join(__dirname, "../../../../../dist");

export const binding = {
  aws: {
    fqn: "hashicorp/aws@ ~>3.74.0",
    type: ProviderType.provider,
    path: "providers/aws",
  },
  docker: {
    fqn: "kreuzwerker/docker@ ~>2.15.0",
    type: ProviderType.provider,
    path: "providers/docker",
  },
  null: {
    fqn: "hashicorp/null@ ~>3.2.1",
    type: ProviderType.provider,
    path: "providers/null",
  },
  google: {
    fqn: "hashicorp/google@ ~>3.87.0",
    type: ProviderType.provider,
    path: "providers/google",
  },
  azuread: {
    fqn: "hashicorp/azuread@ ~>2.17.0",
    type: ProviderType.provider,
    path: "providers/azuread",
  },
  local: {
    fqn: "hashicorp/local@ ~>2.1.0",
    type: ProviderType.provider,
    path: "providers/local",
  },
  auth0: {
    fqn: "alexkappa/auth0@ ~>0.26.2",
    type: ProviderType.provider,
    path: "providers/auth0",
  },
  datadog: {
    fqn: "DataDog/datadog@ ~>3.8.1",
    type: ProviderType.provider,
    path: "providers/datadog",
  },
  kubernetes: {
    fqn: "hashicorp/kubernetes@ ~>2.11.0",
    type: ProviderType.provider,
    path: "providers/kubernetes",
  },
  awsVpc: {
    fqn: "terraform-aws-modules/vpc/aws@ ~>3.11.5",
    type: ProviderType.module,
    path: "modules/terraform-aws-modules/aws",
  },
};

type AbsolutePath = string;
const providerBindingCache: Record<
  ProviderFqn,
  Promise<AbsolutePath> | undefined
> = {};
const providerSchemaCache: Record<ProviderFqn, SchemaPromise | undefined> = {};

async function generateBindings(
  binding: ProviderDefinition
): Promise<AbsolutePath> {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "cdktf-provider-"));
  await fs.writeFile(
    path.resolve(tempDir, "cdktf.json"),
    JSON.stringify({
      language: "typescript",
      app: "npx ts-node main.ts",
      terraformProviders:
        binding.type === ProviderType.provider ? [binding.fqn] : [],
      terraformModules:
        binding.type === ProviderType.module ? [binding.fqn] : [],
    })
  );
  await execa(cdktfBin, ["get"], { cwd: tempDir });

  return path.resolve(tempDir, ".gen", binding.path);
}

async function copyBindingsForProvider(
  binding: ProviderDefinition,
  targetDirectory: AbsolutePath
) {
  const absoluteBindingPathPromise = providerBindingCache[binding.fqn]
    ? providerBindingCache[binding.fqn]
    : generateBindings(binding);

  providerBindingCache[binding.fqn] = absoluteBindingPathPromise;

  const target = path.resolve(targetDirectory, ".gen", binding.path);
  await fs.mkdirp(target);
  const absolutePath = await absoluteBindingPathPromise;

  await fs.copy(absolutePath!, target);
}

// Prepare for tests / warm up cache
const baseProjectPromise = new Promise<string>(async (resolve) => {
  const projectDir = await fs.mkdtemp(
    path.join(os.tmpdir(), "cdktf-convert-base-")
  );
  await execa(
    cdktfBin,
    [
      "init",
      "--local",
      `--dist=${cdktfDist}`,
      "--project-name='hello'",
      "--project-description='world'",
      "--template=typescript",
      "--enable-crash-reporting=false",
    ],
    {
      cwd: projectDir,
    }
  );

  resolve(projectDir);
});
// getProviderSchema(Object.values(binding));

async function getProjectDirectory(providers: ProviderDefinition[]) {
  const baseDir = await baseProjectPromise;
  const projectDir = await fs.mkdtemp(
    path.join(os.tmpdir(), "cdktf-convert-test-")
  );

  await Promise.all([
    fs.copy(baseDir, projectDir),
    ...providers.map((provider) =>
      copyBindingsForProvider(provider, projectDir)
    ),
  ]);

  return projectDir;
}

async function getProviderSchema(providers: ProviderDefinition[]) {
  const providerSchemaPromises = providers.map((provider) => {
    if (providerSchemaCache[provider.fqn]) {
      return providerSchemaCache[provider.fqn];
    }

    const providerSchema = readSchema([
      ConstructsMakerProviderTarget.from(
        ProviderType.provider === provider.type
          ? new TerraformProviderConstraint(provider.fqn)
          : new TerraformModuleConstraint(provider.fqn),
        LANGUAGES[0]
      ),
    ]);

    providerSchemaCache[provider.fqn] = providerSchema;

    return providerSchema;
  });

  const subSchemas = await Promise.all(providerSchemaPromises);

  return deepmerge.all([
    { providerSchema: { provider_schemas: {} }, moduleSchema: {} },
    ...(subSchemas.filter((s) => s !== undefined) as Awaited<SchemaPromise>[]),
  ]) as any;
}

function filterSchema(providerSchema: any, schemaFilter: SchemaFilter) {
  if (!schemaFilter) return providerSchema;

  const { resources, dataSources } = schemaFilter;

  const providerSchemaKey = Object.keys(providerSchema.provider_schemas)[0];
  const actualSchema = providerSchema.provider_schemas[providerSchemaKey];

  let filteredDataSourceSchemas = {};
  let filteredResourceSchemas = {};

  if (resources && resources.length > 0) {
    filteredResourceSchemas = Object.fromEntries(
      Object.entries(actualSchema.resource_schemas).filter(([resourceName]) =>
        resources?.includes(resourceName)
      )
    );
  }

  if (dataSources && dataSources.length > 0) {
    filteredDataSourceSchemas = Object.fromEntries(
      Object.entries(actualSchema.data_source_schemas).filter(
        ([dataSourceName]) => dataSources?.includes(dataSourceName)
      )
    );
  }

  return {
    provider_schemas: {
      [providerSchemaKey]: {
        provider: providerSchema.provider_schemas[providerSchemaKey].provider,
        resource_schemas: filteredResourceSchemas,
        data_source_schemas: filteredDataSourceSchemas,
      },
    },
  };
}

const createTestCase =
  (opts: { skip?: true; only?: true }) =>
  (
    name: string,
    hcl: string,
    providers: ProviderDefinition[],
    shouldSynth: Synth,
    schemaFilter?: SchemaFilter
  ) => {
    if (opts.skip) {
      describe.skip(name, () => {});
      return;
    }

    const testBody = () => {
      let convertResult: any;
      beforeAll(async () => {
        let { providerSchema } = await getProviderSchema(providers);
        if (schemaFilter) {
          providerSchema = filterSchema(providerSchema, schemaFilter);
        }
        convertResult = await convert(hcl, {
          language: "typescript",
          providerSchema,
        });
      }, 500_000);

      it("snapshot", async () => {
        expect(convertResult.all).toMatchSnapshot();
      }, 500_000);

      if (shouldSynth === Synth.yes) {
        it("synth", async () => {
          const filename = name.replace(/\s/g, "-");
          const projectDirPromise = getProjectDirectory(providers);
          const { imports, code } = convertResult;
          const projectDir = await projectDirPromise;
          // Have a before all somewhere above bootstrap a TS project
          // __dirname should be replaceed by the bootstrapped directory
          const pathToThisProjectsFile = path.join(
            projectDir,
            filename + ".ts"
          );
          const fileContent = `
        import { Construct } from "constructs";
        import { App, TerraformStack } from "cdktf";
        ${imports}

        class MyStack extends TerraformStack {
          constructor(scope: Construct, name: string) {
            super(scope, name);

            ${code}

          }
        }

        const app = new App();
        new MyStack(app, "${filename}");
        app.synth();
        `;

          fs.writeFileSync(pathToThisProjectsFile, fileContent, "utf8");

          const stdout = execSync(
            `${cdktfBin} synth -a 'npx ts-node ${filename}.ts' -o ./${filename}-output`,
            { cwd: projectDir }
          );
          expect(stdout.toString()).toEqual(
            expect.stringContaining(`Generated Terraform code for the stacks`)
          );
        }, 500_000);
      }
    };

    if (opts.only) {
      describe.only(name, testBody);
      return;
    }
    describe(name, testBody);
  };

export const testCase = {
  test: createTestCase({}),
  skip: createTestCase({ skip: true }),
  only: createTestCase({ only: true }),
};
