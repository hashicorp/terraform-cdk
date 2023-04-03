// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ref } from "./tfExpression";
import { Token } from "./tokens";
const COUNT_SYMBOL = Symbol.for("cdktf/TerraformCount");

/**
 * Iterator for the Terraform count property
 */
export class TerraformCount {
  static of(count: number): TerraformCount {
    return new TerraformCount(count);
  }
  public static isTerraformCount(x: any): x is TerraformCount {
    return x !== null && typeof x === "object" && COUNT_SYMBOL in x;
  }

  private constructor(private readonly count: number) {
    Object.defineProperty(this, COUNT_SYMBOL, { value: true });
  }

  public get index(): number {
    return Token.asNumber(ref("count.index"));
  }

  public toTerraform(): number {
    return this.count;
  }

  public toString(): string {
    return this.count.toString();
  }
}
