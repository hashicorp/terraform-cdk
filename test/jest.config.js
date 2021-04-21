module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['**/*test.ts'],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  runner: "groups"
}
