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
  testTimeout: 300000
}
