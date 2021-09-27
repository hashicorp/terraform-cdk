/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  testMatch: ['**/*.test.ts'],
  preset: "ts-jest",
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ["./setupJest.js"],
};  
