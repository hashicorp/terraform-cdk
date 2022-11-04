const rosetta = require("jsii-rosetta");
const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "..", "example.ts");
const fileContent = fs.readFileSync(fileName, { encoding: "utf-8" });

const LANGUAGES = [
  rosetta.PythonVisitor,
  rosetta.JavaVisitor,
  rosetta.CSharpVisitor,
  rosetta.GoVisitor,
];

const translations = LANGUAGES.map((Visitor) => {
  const { translation } = rosetta.translateTypeScript(
    {
      contents: fileContent,
      fileName: fileName,
    },
    new Visitor()
  );
  return translation;
});

fs.writeFileSync(
  path.resolve(__dirname, "..", "EXAMPLE.md"),
  `# Example

__Generated from ./example.ts__

## Typescript

\`\`\`ts
${fileContent}
\`\`\`

## Python

\`\`\`python
${translations[0]}
\`\`\`

## Java

\`\`\`java
${translations[1]}
\`\`\`

## C#

\`\`\`csharp
${translations[2]}
\`\`\`


## Go

\`\`\`go
${translations[2]}
\`\`\`
`
);