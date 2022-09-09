// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// recurse through all docs files
import { promisify } from "util";
import path from "path";
import fs from "fs/promises";
import g from "glob";
import execa from "execa";
const glob = promisify(g);

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const resolveRepoPath = (...parts: string[]) =>
  path.resolve(REPO_ROOT, ...parts);
const DOCS_DIRECTORY = resolveRepoPath("website/docs");

// CODE BLOCK TARGETS
// we use the global flag to traverse through multiple matches within the same content (= same file), so we create a new regex for each file
const createCodeBlockRegex = () =>
  /<!--\s*#NEXT_CODE_BLOCK_SOURCE:(?<language>[\w]*)\s*(?<sourcePath>[^#]*)#(?<snippetId>[^ ]*)\s*-->/g;
const createCodeSnippetRegex = (language: string) =>
  new RegExp(`\`\`\`${language}.*?\`\`\``, "s"); // s lets . match newlines as well, ? makes it non greedy to only match until the next "```"

type CodeBlockTarget = {
  language: string; // as used in the next codeblock e.g. "```ts"
  sourcePath: string; // path to the directory to collect the code snippets from
  snippetId: string; // identifier of the snippet to retrieve
  docsFileName: string; // name of the *.mdx file in which the code block should be replaced
  replaceAfterCharIndex: number; // replace the next code block (matching the language) after this index;
};

// CODE BLOCK SOURCES
// e.g. DOCS_BLOCK_END:constructs
// e.g. DOCS_BLOCK_START:assets,constructs
const CODE_BLOCK_SOURCE_PREFIX = "DOCS_BLOCK_"; // used to indicate that those will be used in the docs, should make it clear to users browsing the examples
const CODE_BLOCK_SOURCE_START = `${CODE_BLOCK_SOURCE_PREFIX}START`;
const CODE_BLOCK_SOURCE_END = `${CODE_BLOCK_SOURCE_PREFIX}END`;
const CODE_BLOCK_START_REGEX = new RegExp(
  `${CODE_BLOCK_SOURCE_START}:(?<snippetIds>[^ ]*)*\s*`
);
const CODE_BLOCK_END_REGEX = new RegExp(
  `${CODE_BLOCK_SOURCE_END}:(?<snippetIds>[^ ]*)*\s*`
);

// returns an async iterator that re-reads the file for every new match.
// This allows us to retrieve the first target block config position, replace the next following code block according to the instructions and afterwards
// query for the next target block config (the comment string indicating what to replace) while automatically keeping track where we already were
// (as the file length could change, well only after our lastIndex, but still the "tail" of the file can change and mix up things)
async function* allCodeBlockTargetsInFile(
  filename: string
): AsyncIterable<CodeBlockTarget> {
  let lastIndex = 0;

  while (true) {
    const content = (await fs.readFile(filename)).toString();
    const codeBlockRegex = createCodeBlockRegex();
    codeBlockRegex.lastIndex = lastIndex;
    const result = codeBlockRegex.exec(content);

    if (!result) return; // stop iterating as we have no more match

    lastIndex = result.index + result[0].length; // start after the result index the next time
    const block: CodeBlockTarget = {
      docsFileName: filename,
      language: result.groups!.language,
      snippetId: result.groups!.snippetId,
      sourcePath: result.groups!.sourcePath,
      replaceAfterCharIndex: result.index,
    };
    yield block;
  }
}

async function findCodeBlockTargetsInFile(
  filename: string
): Promise<CodeBlockTarget[]> {
  const blocks: CodeBlockTarget[] = [];
  for await (const i of allCodeBlockTargetsInFile(filename)) blocks.push(i);
  return blocks;
}

async function getAllCodeBlockTargets(): Promise<CodeBlockTarget[]> {
  const files = await glob(`${DOCS_DIRECTORY}/**/*.mdx`);
  const targets: CodeBlockTarget[] = [];
  for (const filename of files) {
    targets.push(...(await findCodeBlockTargetsInFile(filename)));
  }
  return targets;
}

// used to return all examples that should be queried for code snippets
// this ensures that we don't go through all examples even if they are not referenced in code block comments
function getAllUniqueSourcePaths(targets: CodeBlockTarget[]): string[] {
  return Array.from(new Set(targets.map((t) => t.sourcePath)));
}

function getAllUniqueTargetDocsFileNames(targets: CodeBlockTarget[]): string[] {
  return Array.from(new Set(targets.map((t) => t.docsFileName)));
}

function getSnippedIdsReferencedInSourcePath(
  targets: CodeBlockTarget[],
  sourcePath: string
) {
  return Array.from(
    new Set(
      targets.filter((t) => t.sourcePath === sourcePath).map((t) => t.snippetId)
    )
  );
}

async function fileContainsCodeBlockSources(
  filename: string
): Promise<boolean> {
  try {
    const content = (await fs.readFile(filename)).toString();
    if (content.includes(CODE_BLOCK_SOURCE_PREFIX)) {
      if (
        content.includes(CODE_BLOCK_SOURCE_START) &&
        content.includes(CODE_BLOCK_SOURCE_END)
      ) {
        return true;
      }
      throw new Error(
        `file ${filename} seems to contain a code block source (starting with "${CODE_BLOCK_SOURCE_PREFIX}") but does not contain at least one start and one end comment`
      );
    }
    return false;
  } catch (e) {
    console.warn(
      `Warning: Could not read file "${filename}". Maybe it was recently deleted and Git does not know about this yet. Skipping that file`
    );
    return false;
  }
}

type Snippet = {
  sourcePath: string; // the sourcePath this snippet is for (e.g. examples/typescript/documentation)
  snippetId: string; // the id of this snippet, as referenced in the code block target comment
  content: string; // the content to put into the target source code block
};

async function collectSnippetsFromFile(
  filename: string,
  sourcePath: string
): Promise<Snippet[]> {
  const content = (await fs.readFile(filename)).toString();
  const lines = content.split("\n");

  const snippetsMap: {
    [id: string]: { active: boolean; lines: string[] };
  } = {};

  // Go through the content line by line
  for (const [index, line] of lines.entries()) {
    // START MARKER
    if (line.includes(CODE_BLOCK_SOURCE_START)) {
      const res = CODE_BLOCK_START_REGEX.exec(line);
      for (const id of res!.groups!.snippetIds.split(",")) {
        if (snippetsMap[id]) {
          // snippet exists
          if (!snippetsMap[id].active) {
            // snippet is not active currently
            snippetsMap[id].active = true;
          } else {
            throw new Error(
              `Encountered ${CODE_BLOCK_SOURCE_START} in line ${
                index + 1
              } of ${filename} containing snippet id "${id}" which most recently already had a START marker. Did you forget to close the previous one?\nFull line:\n${line}`
            );
          }
        } else {
          // first start marker for this snippet, create it as active
          snippetsMap[id] = { active: true, lines: [] };
        }
      }
    } else if (line.includes(CODE_BLOCK_SOURCE_END)) {
      // END MARKER
      const res = CODE_BLOCK_END_REGEX.exec(line);
      for (const id of res!.groups!.snippetIds.split(",")) {
        if (snippetsMap[id]) {
          // snippet is known
          if (snippetsMap[id].active) {
            // snippet is active
            snippetsMap[id].active = false;
          } else {
            throw new Error(
              `Encountered ${CODE_BLOCK_SOURCE_START} in line ${
                index + 1
              } of ${filename} containing snippet id "${id}" which most recently already had an END marker. Did you forget to open the snippet again?\nFull line:\n${line}`
            );
          }
        } else {
          throw new Error(
            `Encountered ${CODE_BLOCK_SOURCE_START} in line ${
              index + 1
            } of ${filename} containing snippet id "${id}" which did not had a START marker yet. Did you forget to start the snippet capture for this id?\nFull line:\n${line}`
          );
        }
      }
    } else {
      // ORDINARY LINE
      // add to all active snippets
      for (const snippet of Object.values(snippetsMap)) {
        if (snippet.active) snippet.lines.push(line);
      }
    }
  }

  // Ensure all snippets are closed
  for (const [id, snippet] of Object.entries(snippetsMap)) {
    if (snippet.active)
      throw new Error(
        `The snippet with the id ${id} is not closed properly. Missing an END marker for it in file ${filename}`
      );
  }

  // join lines of the snippets and make sure there is no unnecessary leading whitespace
  const snippets: Snippet[] = Object.entries(snippetsMap).map(
    ([id, snippet]) => {
      // calculate common leading whitespace
      const whiteSpacesToRemove = snippet.lines.reduce((currentMin, line) => {
        const leadingWhitespace = line.length - line.trimStart().length;
        return Math.min(leadingWhitespace, currentMin);
      }, Number.MAX_VALUE);

      return {
        snippetId: id,
        content: snippet.lines
          .map((line) => line.substring(whiteSpacesToRemove))
          .join("\n"),
        sourcePath,
      };
    }
  );

  return snippets;
}

async function main() {
  console.log(
    `Looking for #NEXT_CODE_BLOCK_SOURCE comments in all *.mdx files in: ${DOCS_DIRECTORY}\n`
  );

  const codeBlockTargets = await getAllCodeBlockTargets();
  const sourcePaths = getAllUniqueSourcePaths(codeBlockTargets);
  const requestedSnippets: { sourcePath: string; snippetIds: string[] }[] =
    sourcePaths.map((sourcePath) => ({
      sourcePath,
      snippetIds: getSnippedIdsReferencedInSourcePath(
        codeBlockTargets,
        sourcePath
      ),
    }));

  console.log(
    `The code block targets found are expecting snippets in the following directories:
${requestedSnippets
  .map((s) => `${s.sourcePath} (ids: ${s.snippetIds.join(",")})`)
  .join("\n")}\n`
  );

  console.log("Trying to collect the aforementioned snippets..");

  const sourceFilesWithCodeBlock: { sourcePath: string; filename: string }[] =
    [];

  for (const repoLocalSourcePath of sourcePaths) {
    const sourcePath = resolveRepoPath(repoLocalSourcePath);
    const files = (await execa("git", ["ls-files"], { cwd: sourcePath })).stdout
      .split("\n")
      .map((f) => `${sourcePath}/${f}`);

    for (const filename of files) {
      const containsSources = await fileContainsCodeBlockSources(filename);
      if (containsSources) {
        sourceFilesWithCodeBlock.push({
          filename,
          sourcePath: repoLocalSourcePath,
        });
      }
    }
  }
  console.log(
    `Found ${
      sourceFilesWithCodeBlock.length
    } source files with code blocks:\n${sourceFilesWithCodeBlock
      .map((sf) => sf.filename)
      .join("\n")}\n`
  );

  console.log("Parsing the content of files with source for code blocks..");

  const snippets: Snippet[] = [];
  for (const file of sourceFilesWithCodeBlock) {
    const newSnippets = await collectSnippetsFromFile(
      file.filename,
      file.sourcePath
    );

    // validate if new snippets that come in don't overwrite an existing snippet
    const alreadyExists = newSnippets.find((n) =>
      snippets.find(
        (s) => n.snippetId === s.snippetId && n.sourcePath === s.sourcePath
      )
    );
    if (alreadyExists) {
      throw new Error(
        `The snippet id "${alreadyExists.snippetId}" appears in multiple files in sourcePath ${alreadyExists.sourcePath}. Snippets can only be defined in a single of those files at the moment.`
      );
    }

    snippets.push(...newSnippets);
  }

  console.log(`Parsing returned ${snippets.length} snippets\n`);

  // validate if all snippets that were requested have a fill
  for (const req of requestedSnippets) {
    for (const id of req.snippetIds) {
      if (
        !snippets.find(
          (snip) => snip.snippetId === id && snip.sourcePath === req.sourcePath
        )
      ) {
        throw new Error(
          `Snippet with id "${id}" was expected to exist in ${req.sourcePath} but hasn't been found.`
        );
      }
    }
  }

  const getSnippet = (id: string, sourcePath: string): Snippet => {
    const snippet = snippets.find(
      (s) => s.snippetId === id && s.sourcePath === sourcePath
    );
    if (!snippet)
      throw new Error(
        `Unexpected error: Could not find snippet with id ${id} and sourcePath ${sourcePath}, although it should be there.`
      );
    return snippet;
  };

  console.log(
    "Updating all code block targets with data collected for the snippets.."
  );
  // Update all code block targets with the data collected for the snippets

  const docFiles = getAllUniqueTargetDocsFileNames(codeBlockTargets);

  for (const docFile of docFiles) {
    console.log(`\nReplacing code snippets in ${docFile}:`);

    const iterator = allCodeBlockTargetsInFile(docFile);

    // makes sure to re-read the file after each iteration which allows us to change the underlying file while iterating
    for await (const target of iterator) {
      const snippet = getSnippet(target.snippetId, target.sourcePath);
      const content = await (await fs.readFile(target.docsFileName)).toString();

      const codeSnippetRegex = createCodeSnippetRegex(target.language);
      codeSnippetRegex.lastIndex = target.replaceAfterCharIndex;
      const res = codeSnippetRegex.exec(content);
      if (!res) {
        throw new Error(
          `Expected to find code block after index ${target.replaceAfterCharIndex} in file ${target.docsFileName} but could not find a code block for language ${target.language}`
        );
      }
      const start = res.index;
      const end = start + res[0].length;
      const oldCode = res[0];
      const newCode =
        "```" + target.language + "\n" + snippet.content + "\n" + "```";

      if (oldCode === newCode) {
        console.log(
          `Snippet with id ${target.snippetId} for language ${target.language} did not change`
        );
      } else {
        const newContent =
          content.substring(0, start) + newCode + content.substring(end);
        await fs.writeFile(target.docsFileName, newContent);
        console.log(
          `Snippet with id ${target.snippetId} for language ${target.language} has been updated`
        );
      }
    }
  }

  console.log("\nDone.");
}

(async function () {
  try {
    await main();
  } catch (e) {
    console.log();
    console.error(e);
    process.exit(1);
  }
})();
