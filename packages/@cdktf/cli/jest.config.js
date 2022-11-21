module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
}
