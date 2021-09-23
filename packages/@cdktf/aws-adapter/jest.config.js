/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ["./setupJest.js"],
  // collectCoverage: true,
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "tsx"],
};
