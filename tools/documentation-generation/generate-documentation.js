#!/usr/bin/env node

const fs = require("fs");
const { Documentation, Language } = require("jsii-docgen");
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

function replaceSquareBrackets(docs) {
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

# API Reference for ${lang}

${replaceSquareBrackets(
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
  }
});
