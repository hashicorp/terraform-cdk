module.exports = {
  "roots": [
    "<rootDir>/test"
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx"
  ],
}
