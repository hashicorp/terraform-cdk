/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Expression, OperatorExpression } from "./tfExpression";
import { Token } from "./tokens";
import { IResolvable } from "./tokens/resolvable";

/**
 * This class contains static functions for all arithmetical and logical operators
 * in the Terraform configuration language.
 */
export class Op {
  /**
   * Renders !expression
   */
  public static not(expression: Expression): IResolvable {
    return new OperatorExpression("!", expression);
  }

  /**
   * Renders -expression
   */
  public static negate(expression: Expression): number {
    return Token.asNumber(new OperatorExpression("-", expression));
  }

  /**
   * Renders left * right
   */
  public static mul(left: Expression, right: Expression): number {
    return Token.asNumber(new OperatorExpression("*", left, right));
  }

  /**
   * Renders left / right
   */
  public static div(left: Expression, right: Expression): number {
    return Token.asNumber(new OperatorExpression("/", left, right));
  }

  /**
   * Renders left % right
   */
  public static mod(left: Expression, right: Expression): number {
    return Token.asNumber(new OperatorExpression("%", left, right));
  }

  /**
   * Renders left + right
   */
  public static add(left: Expression, right: Expression): number {
    return Token.asNumber(new OperatorExpression("+", left, right));
  }

  /**
   * Renders left - right
   */
  public static sub(left: Expression, right: Expression): number {
    return Token.asNumber(new OperatorExpression("-", left, right));
  }

  /**
   * Renders left > right
   */
  public static gt(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression(">", left, right);
  }

  /**
   * Renders left >= right
   */
  public static gte(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression(">=", left, right);
  }

  /**
   * Renders left < right
   */
  public static lt(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("<", left, right);
  }

  /**
   * Renders left <= right
   */
  public static lte(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("<=", left, right);
  }

  /**
   * Renders left == right
   */
  public static eq(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("==", left, right);
  }

  /**
   * Renders left != right
   */
  public static neq(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("!=", left, right);
  }

  /**
   * Renders left && right
   */
  public static and(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("&&", left, right);
  }

  /**
   * Renders left || right
   */
  public static or(left: Expression, right: Expression): IResolvable {
    return new OperatorExpression("||", left, right);
  }
}
