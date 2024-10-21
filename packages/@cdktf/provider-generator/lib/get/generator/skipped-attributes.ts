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
  "aws.data_aws_quicksight_analysis.definition",
  "aws.wafv2_web_acl.wafv2_web_acl_rule.statement",
  "aws.wafv2_rule_group.wafv2_rule_group_rule.statement",

  "oci.data_oci_objectstorage_private_endpoint.fqdns",
  "oci.data_oci_objectstorage_private_endpoint_summaries.private_endpoint_summaries.fqdns",
];

/**
 * We skip some deeply nested attributes to shorten the generated code.
 */
export function shouldSkipAttribute(terraformFullName: string) {
  return SKIPPED_ATTRIBUTES.includes(terraformFullName);
}
