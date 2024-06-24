/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as fs from "fs";
import * as path from "path";

import { Documentation, Language } from "jsii-docgen";
import type { Transformer } from "unified";
import type { Node } from "unist";

(async function () {
  const remarkParse = (await import("remark-parse")).default;
  const remarkStringify = (await import("remark-stringify")).default;
  const visit = (await import("unist-util-visit")).visit;
  const unified = (await import("unified")).unified;

  const sourceFolder = process.argv[2];
  if (!sourceFolder) {
    throw new Error("Please provide a source folder as the first argument");
  }

  const targetFolder = process.argv[3];
  if (!targetFolder) {
    throw new Error("Please provide a target folder as the second argument");
  }
  /**
   * If the documentation code has generics they are denoted in the hand-written
   * documentation as <>, e.g. Record<string, string>. Some other documentation parts
   * use <thing> to signal something needs to be filled in here
   *
   * In a markdown context these get interpretet as an HTML tag, this is why we break them up here
   * <thing> becomes < thing > which is no longer an HTML tag.
   */
  function replaceAngleBracketsInDocumentation(docs: string) {
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

  async function filterByTopic(
    content: string,
    topic: string
  ): Promise<string> {
    function filterByTopic(): Transformer {
      function isH2(node: Node) {
        return node.type === "heading" && "depth" in node && node.depth === 2;
      }
      function hasContent(node: Node, content: string) {
        return (
          "children" in node &&
          Array.isArray(node.children) &&
          node.children.length > 0 &&
          "value" in node.children[0] &&
          node.children[0].value.startsWith(content)
        );
      }
      return function (tree: Node) {
        let takeIn = false;
        let returnNodes: Node[] = [];
        // This assumes we visit the tree in order
        visit(tree, function (node: Node): void {
          // We already found the topic
          if (takeIn) {
            // We want to stop on the next h2
            if (isH2(node)) {
              takeIn = false;
            }
            returnNodes.push(node);
          } else {
            if (isH2(node) && hasContent(node, topic)) {
              // We found the topic we are looking for, start taking in nodes
              // We don't need the header though
              takeIn = true;
            }
          }
        });

        (tree as any).children = returnNodes;
      };
    }

    const file = await unified()
      .use(remarkParse)
      .use(filterByTopic)
      .use(remarkStringify)
      .process(content);

    return String(file);
  }

  const compose = (lang: string, topic: string, content: string) => `---
page_title: ${lang} Reference for ${topic}
description: >-
CDKTF Core API Reference for ${topic} in ${lang}.
---

<!-- This file is generated through yarn generate-docs -->

# ${topic} Reference for ${lang}

${replaceAngleBracketsInDocumentation(content)}
`;

  const assembliesDir = path.resolve(
    path.dirname(process.argv[1]),
    "node_modules"
  );
  Documentation.forProject(path.resolve(sourceFolder), {
    assembliesDir,
  }).then(async (docs: Documentation) => {
    const languages = {
      Typescript: Language.TYPESCRIPT,
      Python: Language.PYTHON,
      Java: Language.JAVA,
      CSharp: Language.CSHARP,
      Go: Language.GO,
    } as const;

    for (const entry of Object.entries(languages)) {
      const [lang, key] = entry as [string, Language];
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
            compose(lang, topic, await filterByTopic(rendered, topic)),
            "utf-8"
          );
        })
      );
    }
  });
})();
