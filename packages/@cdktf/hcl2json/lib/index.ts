// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0

export {
  parse,
  convertFiles,
  getReferencesInExpression,
  getExpressionAst,
} from "./bridge";

export { wrapTerraformExpression } from "./util";

export * as TFExpressionSyntaxTree from "./syntax-tree";
