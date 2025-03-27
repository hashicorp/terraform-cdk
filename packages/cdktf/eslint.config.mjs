/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsdoc from "eslint-plugin-jsdoc";
import noInstanceof from "eslint-plugin-no-instanceof";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/coverage",
      "**/test",
      "**/*.test*.ts",
      "**/*.d.ts",
      "**/*.js",
    ],
  },
  ...compat
    .extends(
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    )
    .map((config) => ({
      ...config,
      files: ["**/*.ts"],
    })),
  {
    files: ["**/*.ts"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      jsdoc,
      "no-instanceof": noInstanceof,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "no-sequences": "error",
      "no-unused-vars": "off", // Setting it back to deafult from pre eslint9
      "@typescript-eslint/no-unused-vars": "off",

      "jsdoc/require-jsdoc": [
        "error",
        {
          contexts: ["ClassDeclaration"],
        },
      ],

      "no-instanceof/no-instanceof": "error",
    },
  },
];
