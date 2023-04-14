/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

export default {
  preset: 'base-docs',
  rules: {
    // We are disabling this rule until links to terraform.io in the generated api-reference documentation are updated
    'ensure-valid-link-format': 'off'
  }
}
