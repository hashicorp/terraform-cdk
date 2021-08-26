module.exports = {
    roots: [
      "<rootDir>"
    ],
    collectCoverage: true,
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
  