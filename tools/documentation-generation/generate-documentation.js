#!/usr/bin/env node
/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as fs from "fs";
import * as path from "path";

import { Documentation, Language } from "jsii-docgen";

(async function () {
  const remarkParse = (await import("remark-parse")).default;
  const remarkStringify = (await import("remark-stringify")).default;
  const visit = (await import("unist-util-visit")).visit;
  const unified = (await import("unified")).unified;

  const rootFolder = process.argv[2];
  if (!rootFolder) {
    throw new Error(
      "Please provide the root repository folder as the first argument"
    );
  }

  const sourceFolder = path.resolve(rootFolder, "packages", "cdktf");
  if (!fs.existsSync(sourceFolder)) {
    throw new Error(
      "Expected " +
        sourceFolder +
        " to be the source directory of the cdktf package, but it does not exist"
    );
  }

  const targetFolder = path.resolve(
    rootFolder,
    "website",
    "docs",
    "cdktf",
    "api-reference"
  );
  if (!fs.existsSync(targetFolder)) {
    throw new Error(
      "Expected " +
        targetFolder +
        " to be the directory containing the api reference, but it does not exist"
    );
  }

  /**
   * If the documentation code has generics they are denoted in the hand-written
   * documentation as <>, e.g. Record<string, string>. Some other documentation parts
   * use <thing> to signal something needs to be filled in here
   *
   * In a markdown context these get interpretet as an HTML tag, this is why we break them up here
   * <thing> becomes < thing > which is no longer an HTML tag.
   */
  function replaceAngleBracketsInDocumentation(docs) {
    const lines = docs.split("\n");
    const sanitizedLines = lines.map((doc) => {
      const htmlTags = doc.split("<");

      const sanitizedTags = htmlTags.map((tag) => {
        if (
          ["code", "a", "sup"].some(
            (item) =>
              (tag.startsWith(item) || tag.startsWith(`/${item}`)) &&
              tag.includes(">")
          )
        ) {
          return tag;
        }

        const fullTag = tag.substring(0, tag.indexOf(">"));

        return tag.replace(fullTag, ` ${fullTag} `);
      });

      return sanitizedTags.join("<");
    });
    return sanitizedLines.join("\n");
  }

  async function filterByTopicAndRemoveAnchors(content, topic) {
    let startPosition = undefined;
    let endPosition = undefined;

    function filterByTopic() {
      function isH2(node) {
        return node.type === "heading" && "depth" in node && node.depth === 2;
      }

      function hasContent(node, content) {
        return (
          "children" in node &&
          Array.isArray(node.children) &&
          node.children.length > 0 &&
          "value" in node.children[0] &&
          node.children[0].value.startsWith(content)
        );
      }

      return function (tree) {
        // This assumes we visit the tree in order
        visit(tree, function (node) {
          // We already found the topic
          if (startPosition != undefined) {
            // We want to stop on the next h2
            if (isH2(node) && endPosition == undefined) {
              endPosition = node.position.start.offset - 1;
            }
          } else {
            if (isH2(node) && hasContent(node, topic)) {
              // We found the topic we are looking for, start taking in nodes
              // We don't need the header though
              startPosition = node.position.start.offset;
            }
          }
        });
      };
    }

    // We don't mutate through the plugin API, it's harder than just doing it manually
    // in the input string
    await unified()
      .use(remarkParse)
      .use(filterByTopic)
      .use(remarkStringify) // This is just needed so that the process run works fine
      .process(content);

    const output = content.substring(startPosition, endPosition);
    return output.replace(
      `  ${topic} <a name="${topic}" id="${topic}"></a>`,
      ""
    );
  }

  const compose = (lang, topic, content) => `---
page_title: ${lang} Reference for ${topic}
description: CDKTF Core API Reference for ${topic} in ${lang}.
---

<!-- This file is generated through yarn generate-docs -->

${replaceAngleBracketsInDocumentation(
  content.replace(
    `## ${topic} <a name="${topic}" id="${topic}"></a>`,
    `# ${lang}: ${topic} <a name="${topic}" id="${topic}"></a>`
  )
)}
`;

  const assembliesDir = path.resolve(
    rootFolder,
    "tools",
    "documentation-generation",
    "node_modules"
  );

  Documentation.forProject(path.resolve(sourceFolder), {
    assembliesDir,
  }).then(async (docs) => {
    const languages = {
      Typescript: Language.TYPESCRIPT,
      Python: Language.PYTHON,
      Java: Language.JAVA,
      CSharp: Language.CSHARP,
      Go: Language.GO,
    };

    for (const entry of Object.entries(languages)) {
      const [lang, key] = entry;
      const markdown = await docs.toMarkdown({
        language: key,
        readme: false,
        allSubmodules: true,
      });
      const rendered = markdown
        .render()
        .replace(
          `# API Reference <a name="API Reference" id="api-reference"></a>`,
          ""
        );

      // These are rather static so we can just hard-code them here
      const topics = ["Constructs", "Structs", "Classes", "Protocols", "Enums"];
      const langFolder = path.resolve(targetFolder, lang.toLowerCase());
      fs.mkdirSync(langFolder, {
        recursive: true,
      });

      await Promise.all(
        topics.map(async (topic) => {
          fs.writeFileSync(
            path.resolve(langFolder, `${topic.toLowerCase()}.mdx`),
            compose(
              lang,
              topic,
              await filterByTopicAndRemoveAnchors(rendered, topic)
            ),
            "utf-8"
          );
        })
      );
    }
  });
})();
