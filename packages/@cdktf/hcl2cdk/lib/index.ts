import { parse } from "@cdktf/hcl2json";
import { isRegistryModule, ProviderSchema } from "@cdktf/provider-generator";
import * as t from "@babel/types";
import prettier from "prettier";
import * as path from "path";
import * as glob from "glob";
import * as fs from "fs";
import { DirectedGraph } from "graphology";
import * as rosetta from "jsii-rosetta";
import * as z from "zod";

import { schema } from "./schema";
import { findUsedReferences } from "./expressions";
import {
  backendToExpression,
  cdktfImport,
  gen,
  local,
  moduleImports,
  modules,
  output,
  provider,
  providerImports,
  resource,
  variable,
} from "./generation";
import { TerraformResourceBlock, Scope } from "./types";
import {
  forEachProvider,
  forEachGlobal,
  forEachNamespaced,
  resourceStats,
} from "./iteration";
import { getProviderRequirements } from "./provider";

export async function getParsedHcl(hcl: string) {
  // Get the JSON representation of the HCL
  let json: Record<string, unknown>;
  try {
    json = await parse("terraform.tf", hcl);
  } catch (err) {
    throw new Error(
      `Error: Could not parse HCL, this means either that the HCL passed is invalid or that you found a bug. If the HCL seems valid, please file a bug under https://cdk.tf/bugs/new/convert`
    );
  }

  // Ensure the JSON representation matches the expected structure
  let plan: z.infer<typeof schema>;
  try {
    plan = schema.parse(json);
  } catch (err) {
    throw new Error(`Error: HCL-JSON does not conform to schema. This is not expected, please file a bug under https://cdk.tf/bugs/new/convert
Please include this information:
${JSON.stringify((err as z.ZodError).errors)}`);
  }

  return plan;
}

export async function parseProviderRequirements(hcl: string) {
  const plan = await getParsedHcl(hcl);
  return getProviderRequirements(plan);
}

export async function convertToTypescript(
  hcl: string,
  providerSchema: ProviderSchema
) {
  const plan = await getParsedHcl(hcl);

  // Each key in the scope needs to be unique, therefore we save them in a set
  // Each variable needs to be unique as well, we save them in a record so we can identify if two variables are the same
  const scope: Scope = {
    providerSchema,
    constructs: new Set<string>(),
    variables: {},
  };

  // Get all items in the JSON as a map of id to function that generates the AST
  // We will use this to construct the nodes for a dependency graph
  // We need to use a function here because the same node has different representation based on if it's referenced by another one
  const nodeMap = {
    ...forEachProvider(scope, plan.provider, provider),
    ...forEachGlobal(scope, "var", plan.variable, variable),
    // locals are a special case
    ...forEachGlobal(
      scope,
      "local",
      Array.isArray(plan.locals)
        ? plan.locals.reduce((carry, locals) => ({ ...carry, ...locals }), {})
        : {},
      local
    ),
    ...forEachGlobal(scope, "out", plan.output, output),
    ...forEachGlobal(scope, "module", plan.module, modules),
    ...forEachNamespaced(scope, plan.resource, resource),
    ...forEachNamespaced(scope, plan.data, resource, "data"),
  };

  const graph = new DirectedGraph();
  // Add all nodes to the dependency graph so we can detect if an edge is added for an unknown link
  Object.entries(nodeMap).forEach(([key, value]) =>
    graph.addNode(key, { code: value })
  );

  // Finding references becomes easier of the to be referenced ids are already known
  const nodeIds = Object.keys(nodeMap);
  function addEdges(id: string, value: TerraformResourceBlock) {
    findUsedReferences(nodeIds, value).forEach((ref) => {
      if (
        !graph.hasDirectedEdge(ref.referencee.id, id) &&
        graph.hasNode(ref.referencee.id) // in case the referencee is a dynamic variable
      ) {
        if (!graph.hasNode(id)) {
          throw new Error(
            `The dependency graph is expected to link from ${
              ref.referencee.id
            } to ${id} but ${id} does not exist. 
            These nodes exist: ${graph.nodes().join("\n")}`
          );
        }
        graph.addDirectedEdge(ref.referencee.id, id, { ref });
      }
    });
  }

  // We recursively inspect each resource value to find references to other values
  // We add these to a dependency graph so that the programming code has the right order
  function addGlobalEdges(
    _scope: Scope,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    addEdges(id, value);
  }
  function addProviderEdges(
    _scope: Scope,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    addEdges(id, value);
  }
  function addNamespacedEdges(
    _scope: Scope,
    _type: string,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    addEdges(id, value);
  }

  Object.values({
    ...forEachProvider(scope, plan.provider, addProviderEdges),
    ...forEachGlobal(scope, "var", plan.variable, addGlobalEdges),
    // locals are a special case
    ...forEachGlobal(
      scope,
      "local",
      Array.isArray(plan.locals)
        ? plan.locals.reduce((carry, locals) => ({ ...carry, ...locals }), {})
        : {},
      addGlobalEdges
    ),
    ...forEachGlobal(scope, "out", plan.output, addGlobalEdges),
    ...forEachGlobal(scope, "module", plan.module, addGlobalEdges),
    ...forEachNamespaced(scope, plan.resource, addNamespacedEdges),
    ...forEachNamespaced(scope, plan.data, addNamespacedEdges, "data"),
  }).forEach((addEdgesToGraph) => addEdgesToGraph(graph));

  // We traverse the dependency graph to get the unordered JSON nodes into an ordered array
  // where no node is referenced before it's defined
  // As we check that the nodes on both ends of an edge exist we can be sure
  // that no infinite loop exists, there can be no stray dependency on a node
  const expressions: t.Statement[] = [];
  let nodesToVisit = [...nodeIds];
  // This ensures we detect cycles and don't end up in an endless loop
  let nodesVisitedThisIteration = 0;
  do {
    nodesVisitedThisIteration = 0;
    graph.forEachNode((nodeId) => {
      if (!nodesToVisit.includes(nodeId)) {
        return;
      }

      const unresolvedDependencies = graph
        .inNeighbors(nodeId)
        .filter((item) => nodesToVisit.includes(item));

      if (unresolvedDependencies.length === 0) {
        nodesToVisit = nodesToVisit.filter((id) => nodeId !== id);
        nodesVisitedThisIteration = nodesVisitedThisIteration + 1;

        const list = graph.getNodeAttribute(nodeId, "code")(graph);
        (Array.isArray(list) ? list : [list]).forEach((item) =>
          expressions.push(item)
        );
      }
    });
  } while (nodesToVisit.length > 0 && nodesVisitedThisIteration != 0);

  const backendExpressions = plan.terraform?.reduce(
    (carry, terraform) => [
      ...carry,
      ...backendToExpression(scope, terraform.backend, nodeIds),
    ],
    [] as t.Statement[]
  );

  // We collect all module sources
  const moduleRequirements = [
    ...new Set(
      Object.values(plan.module || {}).reduce(
        (carry, moduleBlock) => [
          ...carry,
          ...moduleBlock.reduce(
            (arr, { source, version }) => [
              ...arr,
              version ? `${source}@${version}` : source,
            ],
            [] as string[]
          ),
        ],
        [] as string[]
      ) || []
    ),
  ];

  // Variables, Outputs, and Backends are defined in the CDKTF project so we need to import from it
  // If none are used we don't want to leave a stray import
  const cdktfImports =
    plan.terraform?.some((tf) => Object.keys(tf.backend || {}).length > 0) ||
    Object.keys({ ...plan.variable, ...plan.output }).length > 0
      ? [cdktfImport]
      : ([] as t.Statement[]);

  if (Object.keys(plan.variable || {}).length > 0 && expressions.length > 0) {
    expressions[0] = t.addComment(
      expressions[0],
      "leading",
      `Terraform Variables are not always the best fit for getting inputs in the context of Terraform CDK.
You can read more about this at https://cdk.tf/variables`
    );
  }

  const providerRequirements = getProviderRequirements(plan);

  const providers = providerImports(Object.keys(providerRequirements));
  if (providers.length > 0) {
    providers[0] = t.addComment(
      providers[0],
      "leading",
      `Provider bindings are generated by running cdktf get.
See https://cdk.tf/provider-generation for more details.`
    );
  }

  // We add a comment if there are providers with missing schema information
  const providersLackingSchema = Object.keys(providerRequirements).filter(
    (providerName) =>
      !Object.keys(providerSchema.provider_schemas || {}).some((schemaName) =>
        schemaName.endsWith(providerName)
      )
  );
  if (providersLackingSchema.length > 0) {
    expressions[0] = t.addComment(
      expressions[0],
      "leading",
      `The following providers are missing schema information and might need manual adjustments to synthesize correctly: ${providersLackingSchema.join(
        ", "
      )}.
For a more precise conversion please use the --provider flag in convert.`
    );
  }

  // We split up the generated code so that users can have more control over what to insert where
  return {
    all: gen([
      ...cdktfImports,
      ...providers,
      ...moduleImports(plan.module),
      ...((backendExpressions || []) as any),
      ...expressions,
    ]),
    imports: gen([
      ...cdktfImports,
      ...providers,
      ...moduleImports(plan.module),
    ]),
    code: gen([...((backendExpressions || []) as any), ...expressions]),
    providers: Object.entries(providerRequirements).map(([source, version]) =>
      version === "*" ? source : `${source}@${version}`
    ),
    modules: moduleRequirements,
    // We track some usage data to make it easier to understand what is used
    stats: {
      numberOfModules: moduleRequirements.length,
      numberOfProviders: Object.keys(providerRequirements).length,
      resources: resourceStats(plan.resource || {}),
      data: resourceStats(plan.data || {}),
      convertedLines: hcl.split("\n").length,
    },
  };
}

type File = { contents: string; fileName: string };
const translations = {
  typescript: (file: File) => file.contents,
  python: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.PythonVisitor()).translation,
  java: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.JavaVisitor()).translation,
  csharp: (file: File) =>
    rosetta.translateTypeScript(file, new rosetta.CSharpVisitor()).translation,
};

type ConvertOptions = {
  language: keyof typeof translations;
  providerSchema: ProviderSchema;
};

export async function convert(
  hcl: string,
  { language, providerSchema }: ConvertOptions
) {
  const fileName = "terraform.tf";
  const translater = translations[language];

  if (!translater) {
    throw new Error("Unsupported language used: " + language);
  }
  const tsCode = await convertToTypescript(hcl, providerSchema);
  return {
    ...tsCode,
    all: translater({ fileName, contents: tsCode.all }),
    imports: translater({ fileName, contents: tsCode.imports }),
    code: translater({ fileName, contents: tsCode.code }),
    stats: { ...tsCode.stats, language },
  };
}

export function getTerraformConfigFromDir(importPath: string) {
  const absPath = path.resolve(importPath);
  const fileContents = glob
    .sync("./*.tf", { cwd: absPath })
    .map((p) => fs.readFileSync(path.resolve(absPath, p), "utf8"));

  return fileContents.join("\n");
}

type CdktfJson = Record<string, unknown> & {
  terraformProviders: any[];
  terraformModules: any[];
};
export async function convertProject(
  combinedHcl: string,
  inputMainFile: string,
  inputCdktfJson: CdktfJson,
  { language, providerSchema }: ConvertOptions
) {
  if (language !== "typescript") {
    throw new Error("Unsupported language used: " + language);
  }

  const {
    imports,
    code,
    providers,
    modules: tfModules,
    stats,
  } = await convert(combinedHcl, {
    language,
    providerSchema,
  });
  const importMainFile = [imports, inputMainFile].join("\n");
  const outputMainFile = importMainFile.replace(
    "// define resources here",
    code
  );

  const cdktfJson = { ...inputCdktfJson };
  cdktfJson.terraformProviders = providers;
  cdktfJson.terraformModules = tfModules;

  return {
    code: prettier.format(outputMainFile, { parser: "babel" }),
    cdktfJson,
    stats,
  };
}

export { isRegistryModule };
