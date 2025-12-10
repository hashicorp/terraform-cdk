/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MPL-2.0
 */

import generate from "@babel/generator";
import * as t from "@babel/types";

export function astToCode(e: t.Expression): string {
  return generate(e as any).code;
}
