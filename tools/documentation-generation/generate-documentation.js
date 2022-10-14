#!/usr/bin/env node

const fs = require("fs-extra");
const {
  Documentation,
  Language,
  MarkdownDocument,
} = require("../../../jsii-docgen");
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

function indexPage(name) {
  const item = new MarkdownDocument({ id: name });
  item.section(new MarkdownDocument({ header: { title: name } }));
  return item;
}

// { title: string, path: string }[]
const navigationEntries = [];
const pagePerGroupRoutes = [
  { title: "Overview", path: `api-reference/page-per-group` },
];
const pagePerClassRoutes = [
  {
    title: "Overview",
    path: `api-reference/page-per-class`,
  },
];
navigationEntries.push(
  {
    title: "Page per Group",
    routes: pagePerGroupRoutes,
  },
  {
    title: "Page per Class",
    routes: pagePerClassRoutes,
  }
);
fs.mkdirpSync(path.resolve(targetFolder, "page-per-group"));
fs.writeFileSync(
  path.resolve(targetFolder, "page-per-group", "index.mdx"),
  makeMdxCompatible(indexPage("page-per-group"))
);
fs.mkdirpSync(path.resolve(targetFolder, "page-per-class"));
fs.writeFileSync(
  path.resolve(targetFolder, "page-per-class", "index.mdx"),
  makeMdxCompatible(indexPage("page-per-class"))
);

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

function makeMdxCompatible(md) {
  const rendered = md.render();

  return `---
page_title: API Reference for ${md.id}
description: >-
  The CDKTF Core API Reference for ${md.id}.
---

<!-- This file is generated through yarn generate-docs -->

# API Reference for ${md.id}

${replaceAngleBracketsInDocumentation(
  rendered.replace(
    `# API Reference <a name="API Reference" id="api-reference"></a>`,
    ""
  )
)}
`;
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

    fs.writeFileSync(
      path.resolve(targetFolder, `${lang.toLowerCase()}.mdx`),
      makeMdxCompatible(markdown),
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

    const groupRoutes = [];
    pagePerGroupRoutes.push({
      title: lang,
      routes: groupRoutes,
    });
    groupRoutes.push({
      title: lang,
      path: `api-reference/page-per-group/${lang.toLowerCase()}`,
    });
    fs.writeFileSync(
      path.resolve(
        targetFolder,
        "page-per-group",
        lang.toLowerCase(),
        "index.mdx"
      ),
      makeMdxCompatible(indexPage(lang))
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
        makeMdxCompatible(group)
      );

      groupRoutes.push({
        title: group.id,
        path: `api-reference/page-per-group/${lang.toLowerCase()}/${group.id.toLowerCase()}`,
      });
    }

    const classRoutes = [];
    pagePerClassRoutes.push({
      title: lang,
      routes: classRoutes,
    });
    classRoutes.push({
      title: lang,
      path: `api-reference/page-per-class/${lang.toLowerCase()}`,
    });
    fs.mkdirpSync(
      path.resolve(targetFolder, "page-per-class", lang.toLowerCase())
    );
    fs.writeFileSync(
      path.resolve(
        targetFolder,
        "page-per-class",
        lang.toLowerCase(),
        "index.mdx"
      ),
      makeMdxCompatible(indexPage(lang))
    );

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

      const groupRoutes = [];
      classRoutes.push({
        title: group.id,
        routes: groupRoutes,
      });
      groupRoutes.push({
        title: lang,
        path: `api-reference/page-per-class/${lang.toLowerCase()}/${group.id.toLowerCase()}`,
      });
      fs.writeFileSync(
        path.resolve(
          targetFolder,
          "page-per-class",
          lang.toLowerCase(),
          group.id.toLowerCase(),
          "index.mdx"
        ),
        makeMdxCompatible(indexPage(group.id))
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
          makeMdxCompatible(section)
        );

        groupRoutes.push({
          title: section.id,
          path: `api-reference/page-per-class/${lang.toLowerCase()}/${group.id.toLowerCase()}/${section.id.toLowerCase()}`,
        });
      }
    }
  }

  updateNavigationEntries();
});
