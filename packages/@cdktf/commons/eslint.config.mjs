/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { fixupConfigRules } from "@eslint/compat";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import prettierConfig from "eslint-plugin-prettier/recommended";
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
      "**/*.d.ts",
      "**/*.js",
    ],
  },
  ...tseslint.config(eslint.configs.recommended, tseslint.configs.recommended),
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  react.configs.flat.recommended,
  ...fixupConfigRules(compat.extends("plugin:react-hooks/recommended")).map(
    (config) => ({
      ...config,
      files: ["**/*.ts", "**/*.tsx"],
    }),
  ),
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
      "react/no-unescaped-entities": 0,
      "no-sequences": "error",
      "no-unused-vars": "warn",

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
