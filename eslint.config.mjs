/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import monorepo from "eslint-plugin-monorepo";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/coverage",
      "**/*.d.ts",
      "**/*.js",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      monorepo,
    },

    languageOptions: {
      parser: tsParser,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "monorepo/no-relative-import": "error",
    },
  },
];
