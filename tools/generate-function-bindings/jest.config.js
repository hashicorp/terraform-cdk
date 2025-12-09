/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: ['**/*.test.ts'],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
  ],
}
