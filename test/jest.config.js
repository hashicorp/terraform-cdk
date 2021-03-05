module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    "<rootDir>"
  ],
  testMatch: ['**/*test.ts'],
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  runner: "groups"
}
