module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
}
