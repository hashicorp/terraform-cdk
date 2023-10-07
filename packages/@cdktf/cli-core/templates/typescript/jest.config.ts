import type { Config } from "jest";

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
  testEnvironment: "node",
  testMatch: ["**/test/**/*.ts", "**/?(*.)+(spec|test).ts"],
  testPathIgnorePatterns: ["/node_modules/", ".d.ts", ".js"],
};

export default config;
