/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

export const missingVariable = (variableName: string) =>
  `Missing variable: '${variableName}'. You can provide it using the 'TF_VAR_${variableName}' environment variable.`;
