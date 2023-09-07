// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { convert } from "../../lib/index";
import * as fs from "fs-extra";
import * as path from "path";
import * as os from "os";
import { execSync } from "child_process";
import execa from "execa";
import {
  ConstructsMakerProviderTarget,
  LANGUAGES,
  TerraformModuleConstraint,
  TerraformProviderConstraint,
} from "@cdktf/commons";
import { readSchema } from "@cdktf/provider-schema";
import deepmerge from "deepmerge";

const includeSynthTests = Boolean(process.env.CI);

// Polyfill for older TS versions
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type SchemaPromise = ReturnType<typeof readSchema>;
export enum Synth {
  yes_all_languages, // Synth and snapshot all languages
  yes,
  yes_but_only_typescript_right_now_because_it_breaks,
  no_cant_resolve_construct,
  no_missing_map_access, // See https://github.com/hashicorp/terraform-cdk/issues/2670
  no_missing_type_coercion, // We don't type coerce numbers yet
  never, // Some examples are built so that they will never synth but test a specific generation edge case
}
export enum Snapshot {
  yes_all_languages, // Synth and snapshot all languages
  yes,
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
    fqn: "hashicorp/aws@=5.11.0",
    type: ProviderType.provider,
    path: "providers/aws",
  },
  docker: {
    fqn: "kreuzwerker/docker@=3.0.1",
    type: ProviderType.provider,
    path: "providers/docker",
  },
  null: {
    fqn: "hashicorp/null@=3.2.1",
    type: ProviderType.provider,
    path: "providers/null",
  },
  google: {
    fqn: "hashicorp/google@=4.55.0",
    type: ProviderType.provider,
    path: "providers/google",
  },
  azuread: {
    fqn: "hashicorp/azuread@=2.36.0",
    type: ProviderType.provider,
    path: "providers/azuread",
  },
  local: {
    fqn: "hashicorp/local@=2.3.0",
    type: ProviderType.provider,
    path: "providers/local",
  },
  auth0: {
    fqn: "alexkappa/auth0@=0.26.2",
    type: ProviderType.provider,
    path: "providers/auth0",
  },
  datadog: {
    fqn: "DataDog/datadog@=3.21.0",
    type: ProviderType.provider,
    path: "providers/datadog",
  },
  kubernetes: {
    fqn: "hashicorp/kubernetes@=2.18.0",
    type: ProviderType.provider,
    path: "providers/kubernetes",
  },
  scaleway: {
    fqn: "scaleway/scaleway@ ~>2.10.0",
    type: ProviderType.provider,
    path: "providers/scaleway",
  },
  external: {
    fqn: "hashicorp/external@=2.3.1",
    type: ProviderType.provider,
    path: "providers/external",
  },
  awsVpc: {
    fqn: "terraform-aws-modules/vpc/aws@=3.19.0",
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
const prepareBaseProject = (language: string) =>
  new Promise<string>(async (resolve) => {
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
        `--template=${language}`,
        "--enable-crash-reporting=false",
      ],
      {
        cwd: projectDir,
      }
    );

    resolve(projectDir);
  });

const requiredLanguages = includeSynthTests
  ? ["typescript", "python", "csharp"]
  : ["typescript"];
const baseProjectPromisePerLanguage = requiredLanguages.reduce(
  (acc, language) => ({ ...acc, [language]: prepareBaseProject(language) }),
  {} as Record<string, Promise<string>>
);

const fileEndings: Record<string, string> = {
  typescript: ".ts",
  python: ".py",
  csharp: ".cs",
};

const getFileContent: Record<
  string,
  (
    code: { all: string; code: string; imports: string },
    stackName: string
  ) => string
> = {
  typescript: ({ all }, stackName) => `
${all}
import { App } from "cdktf";
const app = new App();
new MyConvertedCode(app, "${stackName}");
app.synth();`,
  python: ({ all }, stackName) => `
${all}

app = App()
MyConvertedCode(app, "${stackName}")
app.synth()
`,

  csharp: ({ all }, stackName) => {
    const endOfStack = all.lastIndexOf("}");
    const stack = all.substring(0, endOfStack);
    return `
    ${stack}
     public static void Main(string[] args)
        {
            App app = new App();
            new MyConvertedCode(app, "${stackName}");
            app.Synth();
        }
}
    `;
  },
};

const getAppCommand: Record<string, (stackName: string) => string> = {
  typescript: (stackName) => `npx ts-node ${stackName}.ts`,
  python: (stackName) => `pipenv run python ${stackName}.py`,
  csharp: (stackName) => `dotnet run --project ${stackName}.csproj`,
};

const preSynth: Record<
  string,
  (
    stackName: string,
    projectDir: string,
    providers: ProviderDefinition[]
  ) => Promise<void> | undefined
> = {
  csharp: async (stackName, projectDir, providers) => {
    await fs.writeFile(
      path.join(projectDir, `${stackName}.csproj`),
      `<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>net6.0</TargetFramework>
    </PropertyGroup>
  
    <ItemGroup>
      <PackageReference Include="HashiCorp.Cdktf" Version="0.0.0" />
    </ItemGroup>
  
    <ItemGroup>
    ${providers
      .map((provider) => {
        const [, name] = provider.fqn.split("@")[0].split("/");
        return `<ProjectReference Include=".gen\\${
          provider.type === ProviderType.provider ? "providers" : "modules"
        }\\${name}.csproj" />`;
      })
      .join("\n")}
    </ItemGroup>
  
  </Project>`,
      "utf8"
    );

    await fs.writeFile(
      path.join(projectDir, "NuGet.Config"),
      `<?xml version="1.0" encoding="utf-8"?>
      <configuration>
        <packageSources>
          <add key="Locally Distributed Packages" value="${cdktfDist}/dotnet/" />
          <add key="NuGet official package source" value="https://api.nuget.org/v3/index.json" />
        </packageSources>
      </configuration>
`,
      "utf8"
    );
  },
};

async function synthForLanguage(
  language: string,
  name: string,
  code: { all: string; code: string; imports: string },
  providers: ProviderDefinition[] = []
) {
  const stackName = name.replace(/\s/g, "-");
  const projectDirPromise = getProjectDirectory(language, providers);
  const projectDir = await projectDirPromise;

  // Have a before all somewhere above bootstrap a TS project
  // __dirname should be replaceed by the bootstrapped directory
  const pathToThisProjectsFile = path.join(
    projectDir,
    stackName + fileEndings[language]
  );
  const fileContent = getFileContent[language](code, stackName);

  fs.writeFileSync(pathToThisProjectsFile, fileContent, "utf8");

  const runBeforeSynth = preSynth[language];
  if (runBeforeSynth) {
    await runBeforeSynth(stackName, projectDir, providers);
  }

  // TODO: would a non-sync version be better?
  const stdout = execSync(
    `${cdktfBin} synth -a '${getAppCommand[language](
      stackName
    )}' -o ./${stackName}-output`,
    { cwd: projectDir }
  );
  expect(stdout.toString()).toEqual(
    expect.stringContaining(`Generated Terraform code for the stacks`)
  );
}

// getProviderSchema(Object.values(binding));

async function getProjectDirectory(
  language: string,
  providers: ProviderDefinition[]
) {
  const baseProjectPromise = baseProjectPromisePerLanguage[language];
  if (!baseProjectPromise) {
    throw new Error(
      `Unsupported language used to synthesize code: ${language}`
    );
  }

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

  // We only copy the TS bindings, but we need to run cdktf get for the language specific ones
  if (language !== "typescript") {
    await fs.writeFile(
      path.resolve(projectDir, "cdktf.json"),
      JSON.stringify(
        {
          language,
          app: "echo 'app command should be overwritten'",
          terraformProviders: providers
            .filter((binding) => binding.type === ProviderType.provider)
            .map((binding) => binding.fqn),
          terraformModules: providers
            .filter((binding) => binding.type === ProviderType.module)
            .map((binding) => binding.fqn),
        },
        null,
        2
      )
    );
    await execa(cdktfBin, ["get", "--force"], { cwd: projectDir });
  }

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

function filterSchema(
  providerSchema: any,
  schemaFilter: SchemaFilter | undefined
) {
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
    shouldSnapshot: Snapshot,
    shouldSynth: Synth,
    schemaFilter?: SchemaFilter
  ) => {
    if (opts.skip) {
      describe.skip(name, () => {});
      return;
    }

    async function runConvert(language: string) {
      let { providerSchema } = await getProviderSchema(providers);
      if (schemaFilter) {
        // TODO: Re-enable once we can trick Terraform CLI Checksums
        providerSchema = filterSchema(providerSchema, undefined);
      }
      return await convert(hcl, {
        language: language as any,
        providerSchema,
        codeContainer: "cdktf.TerraformStack",
      });
    }

    const testBody = () => {
      describe("snapshot", () => {
        it.each(
          shouldSnapshot === Snapshot.yes_all_languages
            ? ["typescript", "python", "csharp", "java", "go"]
            : ["typescript"]
        )(
          "%s",
          async (language) => {
            const projectDir = await getProjectDirectory(
              // We need the typescript project directory to start the convert so JSII has the right types
              "typescript",
              providers
            );
            process.chdir(projectDir); // JSII rosetta needs to be run in the project directory with bindings included
            const convertResult = await runConvert(language);
            expect(convertResult.all).toMatchSnapshot();
          },
          500_000
        );
      });

      if (
        includeSynthTests &&
        [Synth.yes_all_languages, Synth.yes].includes(shouldSynth)
      ) {
        describe("synth", () => {
          it.each(
            shouldSynth === Synth.yes_all_languages
              ? ["typescript", "python", "csharp"]
              : ["typescript"]
          )(
            "%s",
            async (language) => {
              const projectDir = await getProjectDirectory(
                "typescript",
                providers
              );
              process.chdir(projectDir); // JSII rosetta needs to be run in the project directory with bindings included
              const convertResult = await runConvert(language);
              await synthForLanguage(language, name, convertResult, providers);
            },
            500_000
          );
        });
      } else {
        describe.skip("synth", () => {});
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
