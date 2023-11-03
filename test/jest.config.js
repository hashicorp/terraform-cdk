/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*test.ts'],
  modulePathIgnorePatterns: ["main-test.ts"],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true
  },
  testTimeout: 300000
}
