/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { Expression } from "./tfExpression";

export interface TerraformCondition {
  /**
   *  This is a boolean expression that should return true if the intended assumption or guarantee is fulfilled or false if it does not.
   */
  readonly condition: Expression;
  /**
   * This contains the text that Terraform will include as part of error messages when it detects an unmet condition.
   */
  readonly errorMessage: string;
}

/**
 * Terraform checks a precondition before evaluating the object it is associated with.
 */
export interface Precondition extends TerraformCondition {}

/**
 * Terraform checks a postcondition after evaluating the object it is associated with.
 */
export interface Postcondition extends TerraformCondition {}

/**
 * Add one or more validation blocks within the variable block to specify custom conditions
 */
export interface TerraformVariableValidationConfig extends TerraformCondition {}
