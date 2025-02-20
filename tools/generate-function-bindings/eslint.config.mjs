/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-plugin-prettier/recommended";

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
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-sequences": "error",

      "no-irregular-whitespace": [
        "error",
        {
          skipTemplates: true,
        },
      ],
    },
  },
  prettierConfig,
];
