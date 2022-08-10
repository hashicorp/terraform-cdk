// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import {
  parseConstraint,
  versionMatchesConstraint,
} from "../../../lib/dependencies/version-constraints";

describe("version constraints", () => {
  describe("parseConstraint", () => {
    it.each(
      [
        // no operator
        {
          input: "4.12.1",
          operator: "=",
          version: "4.12.1",
        },
        // = operator
        {
          input: "=4.12",
          operator: "=",
          version: "4.12",
        },
        // != operator
        {
          input: "!=4",
          operator: "!=",
          version: "4",
        },
        // ~> operator
        {
          input: "~>4.12.1",
          operator: "~>",
          version: "4.12.1",
        },
        // >= operator
        {
          input: ">=4.12.1",
          operator: ">=",
          version: "4.12.1",
        },
        // > operator
        {
          input: ">4.12.1",
          operator: ">",
          version: "4.12.1",
        },
        // <= operator
        {
          input: "<=4.12.1",
          operator: "<=",
          version: "4.12.1",
        },
        // < operator
        {
          input: "<4.12.1",
          operator: "<",
          version: "4.12.1",
        },
        // whitespace
        {
          input: ">= 4.12.1",
          operator: ">=",
          version: "4.12.1",
        },
        {
          input: "  >=  4.12.1  ",
          operator: ">=",
          version: "4.12.1",
        },
      ].map((testCase) => [testCase.input, testCase.operator, testCase.version])
    )(
      "parsing '%s' returns operator '%s' and version '%s'",
      (input, operator, version) => {
        const result = parseConstraint(input);
        expect(result.operator).toBe(operator);
        expect(result.version).toBe(version);
      }
    );
  });
  describe("versionMatchesConstraint", () => {
    it.each(
      [
        // no operator => "="
        { constraint: "4.0", version: "4", matches: true },
        { constraint: "4.0", version: "4.0", matches: true },
        { constraint: "4.0", version: "4.0.0", matches: true },
        { constraint: "4.0", version: "4.0.1", matches: false },
        { constraint: "4.0", version: "4.1", matches: false },
        { constraint: "4.0", version: "5", matches: false },

        // = operator
        { constraint: "4.0", version: "4", matches: true },
        { constraint: "4.0", version: "4.0", matches: true },
        { constraint: "4.0", version: "4.0.0", matches: true },
        { constraint: "4.0", version: "4.0.1", matches: false },
        { constraint: "4.0", version: "4.1", matches: false },
        { constraint: "4.0", version: "5", matches: false },

        // != operator
        { constraint: "!=4", version: "4", matches: false },
        { constraint: "!=4.1", version: "4.1", matches: false },
        { constraint: "!=4.1", version: "4", matches: true },
        { constraint: "!=4", version: "4", matches: false },

        // > operator
        { constraint: ">4", version: "4", matches: false },
        { constraint: ">4.1", version: "4.1", matches: false },
        { constraint: ">4.1", version: "4.2", matches: true },

        // >= operator
        { constraint: ">=4", version: "4", matches: true },
        { constraint: ">=4.1", version: "4.1", matches: true },
        { constraint: ">=4.1", version: "4.2", matches: true },
        { constraint: ">=4.1", version: "4", matches: false },

        // < operator
        { constraint: "<4", version: "4", matches: false },
        { constraint: "<4.1", version: "4.1", matches: false },
        { constraint: "<4.1", version: "4.0", matches: true },

        // <= operator
        { constraint: "<=4", version: "4", matches: true },
        { constraint: "<=4.1", version: "4.1", matches: true },
        { constraint: "<=4.1", version: "4.0", matches: true },
        { constraint: "<=4.1", version: "4.2", matches: false },

        // ~> operator
        { constraint: "~>4.0", version: "4.0", matches: true },
        { constraint: "~>4.0", version: "4.1", matches: true },
        { constraint: "~>4.1.0", version: "4.1.0", matches: true },
        { constraint: "~>4.1.0", version: "4.1.5", matches: true },
        { constraint: "~>4.1.0", version: "4.2", matches: false },
        { constraint: "~>4.1.0", version: "4.2.1", matches: false },
        { constraint: "~>4", version: "4", matches: true },
        { constraint: "~>4", version: "4.0.1", matches: true },
        { constraint: "~>4", version: "4.2", matches: true },
        { constraint: "~>4", version: "4.2.5", matches: true },
        { constraint: "~>4", version: "5", matches: false },

        // whitespace is ignored
        { constraint: " = 4.0 ", version: "  4   ", matches: true },

        // multiple operators
        { constraint: ">=4.0,<=5.0", version: "4.0", matches: true },
        { constraint: ">=4.0,<=5.0,!=4.3", version: "5.0", matches: true },
        { constraint: ">=4.0,<=5.0,!=4.3", version: "4.0", matches: true },
        { constraint: ">=4.0,<=5.0,!=4.3", version: "4.3", matches: false },
        { constraint: ">=4.0,<=5.0,!=4.3", version: "4.3.0", matches: false },
      ].map((o) => [o.constraint, o.version, o.matches] as const)
    )("%s matches %s returns %s", (constraint, version, matches) => {
      expect(versionMatchesConstraint(version, constraint)).toBe(matches);
    });
  });
});
