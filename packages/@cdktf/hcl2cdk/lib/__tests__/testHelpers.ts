/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import generate from "@babel/generator";
import * as t from "@babel/types";

export function astToCode(e: t.Expression): string {
  return generate(e as any).code;
}
