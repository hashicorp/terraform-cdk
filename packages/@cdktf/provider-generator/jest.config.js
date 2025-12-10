/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = {
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
}
