#!/usr/bin/env node

const rosetta = require("jsii-rosetta");
const fs = require("fs");
const path = require("path");

const fileName = path.resolve(__dirname, "typescript", "edge", "main.ts");
const fileContent = fs.readFileSync(fileName, { encoding: "utf-8" });

const LANGUAGES = [
  {visitor: rosetta.PythonVisitor, targetPath: path.resolve(__dirname, "python", "edge", "translated.py")},
  {visitor: rosetta.JavaVisitor, targetPath: path.resolve(__dirname, "java", "edge", "Translated.java")},
  {visitor: rosetta.CSharpVisitor, targetPath: path.resolve(__dirname, "csharp", "edge", "Translated.cs")},
  {visitor: rosetta.GoVisitor, targetPath: path.resolve(__dirname, "go", "edge", "translated.go")},
];

LANGUAGES.map(({visitor, targetPath}) => {
  const { translation } = rosetta.translateTypeScript(
    {
      contents: fileContent,
      fileName: fileName,
    },
    new visitor()
  );
  
    fs.writeFileSync(targetPath, translation);

});