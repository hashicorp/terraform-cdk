// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

/**
 * There are large attributes on little used resources that blow up the
 * size and compile time of the generated providers by a lot.
 * To mitigate this issue we replace their entire tree of attributes with
 * a single any attribute. This can still be used, although less conveniently.
 */
export const SKIPPED_ATTRIBUTES: string[] = [
  "aws.quicksight_template.definition",
];
