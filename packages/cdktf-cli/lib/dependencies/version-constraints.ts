// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import * as semver from "semver";
import { Errors } from "../errors";

type Operator = "=" | "!=" | "~>" | ">=" | "<=" | ">" | "<";

// constraints can be prefixed with "~>", ">", "<", "=", ">=", "<=" or "!="
// no prefix means "="
export function parseConstraint(constraint: string): {
  operator: Operator;
  version: string;
} {
  const cleaned = constraint.trim();

  const operator = (cleaned.match(/(~>|>=|<=|>|<|=|!=)/)?.[0] ||
    "=") as Operator;
  const version = cleaned.replace(operator, "").trim();

  return {
    operator,
    version,
  };
}

export function versionMatchesConstraint(
  version: string,
  constraint: string
): boolean {
  // https://www.terraform.io/language/expressions/version-constraints
  // version can contain multiple constraints split by ","

  const constraints = constraint.split(",");
  version = semver.coerce(version)?.version ?? version;

  // each constraint needs to be satisfied
  return constraints.every((c) => {
    const parsed = parseConstraint(c);

    const cleanedParsedVersion =
      semver.coerce(parsed.version)?.version ?? parsed.version;

    switch (parsed.operator) {
      case "=":
        return version === cleanedParsedVersion;
      case "!=":
        return version !== cleanedParsedVersion;
      case "~>": {
        // allows rightmost version component to increment

        // ~>2.0 which allows 2.1 and 2.1.1 needs special handling as
        // npm semver handles "~" differently for ~2.0 than for ~2 or ~2.1.0
        // So we need to use "^" (e.g. ^2.0) for this case
        // see: https://github.com/npm/node-semver/issues/11
        const allowMinorAndPatchOnly = parsed.version.split(".").length === 2;

        const range = allowMinorAndPatchOnly
          ? `^${parsed.version}`
          : `~${parsed.version}`;

        return semver.satisfies(version, range);
      }
      case ">=":
        return semver.gte(version, cleanedParsedVersion);
      case "<=":
        return semver.lte(version, cleanedParsedVersion);
      case ">":
        return semver.gt(version, cleanedParsedVersion);
      case "<":
        return semver.lt(version, cleanedParsedVersion);
      default:
        throw Errors.External(
          `Unknown constraint operator: ${parsed.operator} in version constraint ${constraint}`
        );
    }
  });
}
