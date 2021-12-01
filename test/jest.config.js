module.exports = {
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/*test.js'],
  moduleFileExtensions: [
    "js",
    "ts",
  ],
  testTimeout: 300000
}
