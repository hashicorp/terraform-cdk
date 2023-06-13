// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

/**
 * There are large attributes on little used resources that blow up the
 * size and compile time of the generated providers by a lot.
 * To mitigate this issue we replace their entire tree of attributes with
 * a single any attribute. This can still be used, although less conveniently.
 */
const SKIPPED_ATTRIBUTES: string[] = [
  "aws.quicksight_template.definition",
  "aws.quicksight_dashboard.definition",
  "aws.quicksight_analysis.definition",
];

/**
 * We skip some deeply nested attributes to shorten the generated code.
 */
export function shouldSkipAttribute(terraformFullName: string) {
  return SKIPPED_ATTRIBUTES.includes(terraformFullName);
}
