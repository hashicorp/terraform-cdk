/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

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
  
