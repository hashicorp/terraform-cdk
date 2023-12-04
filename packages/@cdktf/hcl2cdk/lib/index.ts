// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { parse } from "@cdktf/hcl2json";
import {
  isRegistryModule,
  TerraformProviderGenerator,
  CodeMaker,
} from "@cdktf/provider-generator";

import * as t from "@babel/types";
import prettier from "prettier";
import * as path from "path";
import * as glob from "glob";
import * as fs from "fs";
import { DirectedGraph } from "graphology";
import * as rosetta from "jsii-rosetta";
import * as z from "zod";

import { schema } from "./schema";
import { findUsedReferences } from "./references";
import {
  backendToExpression,
  gen,
  local,
  moduleImports,
  modules,
  output,
  provider,
  resource,
  variable,
  wrapCodeInConstructor,
  addImportForCodeContainer,
  buildImports,
  generateConfigType,
} from "./generation";
import { TerraformResourceBlock, ProgramScope } from "./types";
import {
  forEachProvider,
  forEachGlobal,
  forEachNamespaced,
  resourceStats,
} from "./iteration";
import { getProviderRequirements } from "./provider";
import { logger } from "./utils";
import { FQPN } from "@cdktf/provider-schema";
import { attributeNameToCdktfName } from "./generation";
import {
  replaceCsharpImports,
  replaceGoImports,
  replaceJavaImports,
  replacePythonImports,
} from "./jsii-rosetta-workarounds";
import { ProviderSchema } from "@cdktf/commons";

export const CODE_MARKER = "// define resources here";

export async function getParsedHcl(hcl: string) {
  logger.debug(`Parsing HCL: ${hcl}`);
  // Get the JSON representation of the HCL
  let json: Record<string, unknown>;
  try {
    json = await parse("terraform.tf", hcl);
  } catch (err) {
    logger.error(`Failed to parse HCL: ${err}`);
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
  logger.debug("Parsing provider requirements");
  const plan = await getParsedHcl(hcl);
  return getProviderRequirements(plan);
}

export async function convertToTypescript(
  hcl: string,
  providerSchema: ProviderSchema,
  codeContainer: string
) {
  logger.debug("Converting to typescript");
  const plan = await getParsedHcl(hcl);

  // Each key in the scope needs to be unique, therefore we save them in a set
  // Each variable needs to be unique as well, we save them in a record so we can identify if two variables are the same
  const scope: ProgramScope = {
    providerSchema,
    providerGenerator: Object.keys(
      providerSchema.provider_schemas || {}
    ).reduce((carry, fqpn) => {
      const providerGenerator = new TerraformProviderGenerator(
        new CodeMaker(),
        providerSchema
      );
      providerGenerator.buildResourceModels(fqpn as FQPN); // can't use that type on the keys yet, since we are not on TS >=4.4 yet :sadcat:
      return { ...carry, [fqpn]: providerGenerator };
    }, {}),
    constructs: new Set<string>(),
    variables: {},
    hasTokenBasedTypeCoercion: false,
    nodeIds: [],
    importables: [],
    topLevelConfig: {},
  };

  const graph = new DirectedGraph<{
    code: (
      g: DirectedGraph<any>
    ) => Promise<Array<t.Statement | t.VariableDeclaration>>;
  }>();

  // Get all items in the JSON as a map of id to function that generates the AST
  // We will use this to construct the nodes for a dependency graph
  // We need to use a function here because the same node has different representation based on if it's referenced by another one
  const nodeMap: Record<
    string,
    (g: typeof graph) => Promise<Array<t.Statement | t.VariableDeclaration>>
  > = {
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

  // Add all nodes to the dependency graph so we can detect if an edge is added for an unknown link
  Object.entries(nodeMap).forEach(([key, value]) => {
    logger.debug(`Adding node '${key}' to graph`);
    graph.addNode(key, { code: value });
  });

  // Finding references becomes easier of the to be referenced ids are already known
  const nodeIds = Object.keys(nodeMap);
  scope.nodeIds = nodeIds;
  async function addEdges(id: string, value: TerraformResourceBlock) {
    (await findUsedReferences(nodeIds, value)).forEach((ref) => {
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

        // The graph should have no self-references
        if (id === ref.referencee.id) {
          logger.debug(`Skipping self-reference for ${id}`);
          return;
        }

        logger.debug(`Adding edge from ${ref.referencee.id} to ${id}`);
        graph.addDirectedEdge(ref.referencee.id, id, { ref });
      }
    });
  }

  // We recursively inspect each resource value to find references to other values
  // We add these to a dependency graph so that the programming code has the right order
  async function addGlobalEdges(
    _scope: ProgramScope,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    await addEdges(id, value);
  }
  async function addProviderEdges(
    _scope: ProgramScope,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    await addEdges(id, value);
  }
  async function addNamespacedEdges(
    _scope: ProgramScope,
    _type: string,
    _key: string,
    id: string,
    value: TerraformResourceBlock
  ) {
    await addEdges(id, value);
  }

  await Promise.all(
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
    }).map((addEdgesToGraph) => addEdgesToGraph(graph))
  );

  logger.debug(`Graph: ${JSON.stringify(graph, null, 2)}`);
  logger.debug(`Starting to assemble the typescript code`);
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

    // Find next nodes to visit
    const nodeExpressionGenerators = graph.mapNodes((nodeId, { code }) => {
      if (!nodesToVisit.includes(nodeId)) {
        return undefined;
      }

      const unresolvedDependencies = graph
        .inNeighbors(nodeId)
        .filter((item) => nodesToVisit.includes(item));

      if (unresolvedDependencies.length === 0) {
        nodesToVisit = nodesToVisit.filter((id) => nodeId !== id);
        nodesVisitedThisIteration = nodesVisitedThisIteration + 1;

        logger.debug(`Visiting node ${nodeId}`);
        return code;
      }
      return undefined;
    });

    // Generate the code for the nodes
    for (const code of nodeExpressionGenerators) {
      if (code) {
        expressions.push(...(await code(graph)));
      }
    }

    logger.debug(
      `${nodesToVisit.length} unvisited nodes: ${nodesToVisit.join(", ")}`
    );
  } while (nodesToVisit.length > 0 && nodesVisitedThisIteration != 0);

  if (nodesToVisit.length > 0) {
    throw new Error(
      `There are ${
        nodesToVisit.length
      } terraform elements that could not be visited. 
      This is likely due to a cycle in the dependency graph. 
      These nodes are: ${nodesToVisit.join(", ")}`
    );
  }

  logger.debug(
    `${nodesToVisit.length} unvisited nodes: ${nodesToVisit.join(", ")}`
  );

  const backendExpressions = (
    await Promise.all(
      plan.terraform?.map((terraform) =>
        backendToExpression(scope, terraform.backend)
      ) || [Promise.resolve([])]
    )
  ).reduce((carry, item) => [...carry, ...item], []);

  logger.debug(
    `Using these backend expressions: ${JSON.stringify(
      backendExpressions,
      null,
      2
    )}`
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

  logger.debug(
    `Found these modules: ${JSON.stringify(moduleRequirements, null, 2)}`
  );

  if (Object.keys(plan.variable || {}).length > 0 && expressions.length > 0) {
    expressions[0] = t.addComment(
      expressions[0],
      "leading",
      `Terraform Variables are not always the best fit for getting inputs in the context of Terraform CDK.
You can read more about this at https://cdk.tf/variables`
    );
  }

  const providerRequirements = getProviderRequirements(plan);
  logger.debug(
    `Found these provider requirements: ${JSON.stringify(
      providerRequirements,
      null,
      2
    )}`
  );

  // We add a comment if there are providers with missing schema information
  const providersLackingSchema = Object.keys(providerRequirements).filter(
    (providerName) =>
      providerName !== "terraform" &&
      !Object.keys(providerSchema.provider_schemas || {}).some((schemaName) =>
        schemaName.endsWith(providerName)
      )
  );
  logger.debug(
    `${
      providersLackingSchema.length
    } providers lack schema information: ${providersLackingSchema.join(", ")}`
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

  // Always add constructs
  scope.importables.push({
    constructName: "Construct",
    provider: "constructs",
  });

  if (scope.hasTokenBasedTypeCoercion) {
    scope.importables.push({
      constructName: "Token",
      provider: "cdktf",
    });
  }

  // Add specific import for codeContainer
  addImportForCodeContainer(scope, codeContainer);
  const constructImports = buildImports(scope.importables);

  const code = [...(backendExpressions || []), ...expressions];
  const configTypeName =
    Object.keys(scope.topLevelConfig).length > 0 ? "MyConfig" : undefined;

  const classConfig = configTypeName
    ? [generateConfigType(configTypeName, scope.topLevelConfig)]
    : [];

  // We split up the generated code so that users can have more control over what to insert where
  return {
    // TODO: Remove imports and code because rosetta won't be able to translate them
    all: await gen([
      ...constructImports,
      ...moduleImports(plan.module),
      ...classConfig,
      wrapCodeInConstructor(
        codeContainer,
        code,
        "MyConvertedCode",
        configTypeName
      ),
    ]),
    imports: await gen([...constructImports, ...moduleImports(plan.module)]),
    code: await gen(code),
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
const translators = {
  python: {
    visitor: () => new rosetta.PythonVisitor(),
    postTranslationMutation: replacePythonImports,
  },
  java: {
    visitor: () => new rosetta.JavaVisitor(),
    postTranslationMutation: replaceJavaImports,
  },
  csharp: {
    visitor: () => new rosetta.CSharpVisitor(),
    postTranslationMutation: replaceCsharpImports,
  },
  go: {
    visitor: () => new rosetta.GoVisitor(),
    postTranslationMutation: replaceGoImports,
  },
};

function translatorForLanguage(language: keyof typeof translators) {
  return (file: File, throwOnTranslationError: boolean) => {
    const { visitor, postTranslationMutation } = translators[language];
    const { translation, diagnostics } = rosetta.translateTypeScript(
      file,
      visitor(),
      throwOnTranslationError ? { includeCompilerDiagnostics: true } : {}
    );

    if (
      throwOnTranslationError &&
      diagnostics.filter((diag) => diag.isError).length > 0
    ) {
      logger.debug(`Could not translate TS to ${language}:\n${file.contents}`);
      throw new Error(
        `Could not translate TS to ${language}: ${diagnostics
          .map((diag) => diag.formattedMessage)
          .join("\n")}`
      );
    }

    return postTranslationMutation(translation);
  };
}

type ConvertOptions = {
  /**
   * The language to convert to
   */
  language: keyof typeof translators | "typescript";
  /**
   * The provider schema to use for conversion
   */
  providerSchema: ProviderSchema;
  /**
   * The base class to extend from. Defaults to `constructs.Construct`
   */
  codeContainer?: string;
  /**
   * Whether to throw an error if the translation fails
   * Defaults to false
   */
  throwOnTranslationError?: boolean;
};

export async function convert(
  hcl: string,
  {
    language,
    providerSchema,
    throwOnTranslationError = false,
    codeContainer = "cdktf.TerraformStack",
  }: ConvertOptions
) {
  const fileName = "terraform.tf";
  const translater =
    language === "typescript"
      ? (file: File, _throwOnTranslationError: boolean) => file.contents
      : translatorForLanguage(language);

  if (!translater) {
    throw new Error("Unsupported language used: " + language);
  }

  const tsCode = await convertToTypescript(hcl, providerSchema, codeContainer);

  return {
    ...tsCode,
    all: translater(
      { fileName, contents: tsCode.all },
      throwOnTranslationError
    ),
    imports: translater({ fileName, contents: tsCode.imports }, false),
    code: translater({ fileName, contents: tsCode.code }, false),
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

  return {
    code: (inputMainFile: string) => {
      const importMainFile = [imports, inputMainFile].join("\n");
      const outputMainFile = importMainFile.replace(CODE_MARKER, code);
      return prettier.format(outputMainFile, { parser: "babel" });
    },
    cdktfJson: (inputCdktfJson: CdktfJson) => {
      const cdktfJson = { ...inputCdktfJson };
      cdktfJson.terraformProviders = providers;
      cdktfJson.terraformModules = tfModules;
      return cdktfJson;
    },
    stats,
  };
}

export { isRegistryModule, attributeNameToCdktfName };
