/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

import monorepo from "eslint-plugin-monorepo";
import tsParser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

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

    plugins: {
      monorepo,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      "monorepo/no-relative-import": "error",

      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/explicit-module-boundary-types": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "no-sequences": "error",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-useless-escape": "warn",

      "no-irregular-whitespace": [
        "error",
        {
          skipTemplates: true,
        },
      ],
    },
  },
];
