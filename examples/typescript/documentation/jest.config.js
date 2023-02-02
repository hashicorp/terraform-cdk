/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setup.js"],
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/examples/typescript/documentation/__tests__/*.ts"
  ],
  testPathIgnorePatterns: ["/node_modules/", ".d.ts", ".js"],
};
