#!/usr/bin/env node

const fs = require("fs-extra");
const { Documentation, Language } = require("../../../jsii-docgen");
const path = require("path");

const targetFolder = path.resolve(
  __dirname,
  "..",
  "..",
  "website",
  "docs",
  "cdktf",
  "api-reference"
);
/**
 * If the documentation code has geerics they are denoted in the hand-written
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

// { title: string, path: string }[]
const navigationEntries = [];

function updateNavigationEntries() {
  const navDataPath = path.resolve(
    __dirname,
    "..",
    "..",
    "website",
    "data",
    "cdktf-nav-data.json"
  );
  const input = JSON.parse(fs.readFileSync(navDataPath, "utf-8"));

  // TODO: we need to have an overview page for each language / etc
  input.find((item) => item.title === "API Reference").routes =
    navigationEntries;

  fs.writeFileSync(navDataPath, JSON.stringify(input, null, 2));
}

Documentation.forProject(
  path.resolve(__dirname, "..", "..", "packages", "cdktf"),
  {
    assembliesDir: path.resolve(__dirname, "node_modules"),
  }
).then(async (docs) => {
  const languages = {
    Typescript: Language.TYPESCRIPT,
    Python: Language.PYTHON,
    Java: Language.JAVA,
    CSharp: Language.CSHARP,
    Go: Language.GO,
  };

  // Current one page per language implementation
  for ([lang, key] of Object.entries(languages)) {
    const markdown = await docs.toMarkdown({
      language: key,
      readme: false,
      allSubmodules: true,
    });
    const rendered = markdown.render();

    const composed = `---
page_title: API Reference for ${lang}
description: >-
  The CDKTF Core API Reference for ${lang}.
---

<!-- This file is generated through yarn generate-docs -->

# API Reference for ${lang}

${replaceAngleBracketsInDocumentation(
  rendered.replace(
    `# API Reference <a name="API Reference" id="api-reference"></a>`,
    ""
  )
)}
`;

    fs.writeFileSync(
      path.resolve(targetFolder, `${lang.toLowerCase()}.mdx`),
      composed,
      "utf-8"
    );
    navigationEntries.push({
      title: lang,
      path: `api-reference/${lang.toLowerCase()}`,
    });

    const content = markdown.sections[0];
    // One page per group
    fs.mkdirpSync(
      path.resolve(targetFolder, "page-per-group", lang.toLowerCase())
    );
    const groups = content.sections;
    for (const group of groups) {
      fs.writeFileSync(
        path.resolve(
          targetFolder,
          "page-per-group",
          lang.toLowerCase(),
          `${group.id.toLowerCase()}.mdx`
        ),
        group.render()
      );

      navigationEntries.push({
        title: lang,
        path: `api-reference/page-per-group/${lang.toLowerCase()}/${group.id.toLowerCase()}`,
      });
    }

    // One page per class

    for (const group of groups) {
      fs.mkdirpSync(
        path.resolve(
          targetFolder,
          "page-per-class",
          lang.toLowerCase(),
          group.id.toLowerCase()
        )
      );
      for (const section of group.sections) {
        fs.writeFileSync(
          path.resolve(
            targetFolder,
            "page-per-class",
            lang.toLowerCase(),
            group.id.toLowerCase(),
            `${section.id.toLowerCase()}.mdx`
          ),
          section.render()
        );

        navigationEntries.push({
          title: lang,
          path: `api-reference/page-per-class/${lang.toLowerCase()}/${group.id.toLowerCase()}/${section.id.toLowerCase()}`,
        });
      }
    }
  }

  updateNavigationEntries();
});
