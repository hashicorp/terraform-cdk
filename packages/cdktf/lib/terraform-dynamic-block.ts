// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { dynamicBlockNotSupported } from "./errors";
import { TerraformDynamicExpression } from "./terraform-dynamic-expression";
import { ITerraformIterator } from "./terraform-iterator";
import { IResolvable, IResolveContext, Lazy, Token } from "./tokens";
import { captureStackTrace } from "./tokens/private/stack-trace";

const DYNAMIC_BLOCK_SYMBOL = Symbol.for("cdktf/TerraformDynamicBlock");

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformDynamicBlock implements IResolvable {
  public readonly creationStack: string[];
  public readonly forEach: ITerraformIterator;
  public readonly iterator = "each"; // name of temporary variable used in iteration, needed in the future when allowing nesting iterators
  public readonly content: { [key: string]: any };
  // labels: TODO: support labels, but they seem to be quite rare (issue: https://github.com/hashicorp/terraform-cdk/issues/1939)

  private constructor(args: {
    forEach: ITerraformIterator;
    content: { [key: string]: any };
  }) {
    Object.defineProperty(this, DYNAMIC_BLOCK_SYMBOL, { value: true });
    this.creationStack = captureStackTrace();
    this.forEach = args.forEach;
    this.content = args.content;
  }

  public static fromDynamicExpression(
    expr: TerraformDynamicExpression
  ): TerraformDynamicBlock {
    return new TerraformDynamicBlock({
      forEach: expr.iterator,
      content: expr.content,
    });
  }

  public resolve(): any {
    throw dynamicBlockNotSupported(this.forEach._getForEachExpression());
  }

  public toTerraformDynamicBlockJson(): IResolvable {
    return Lazy.anyValue({
      produce: (context: IResolveContext) => {
        context.iteratorContext = "DYNAMIC_BLOCK"; // resolve nested Lazy values (within this.content) as dynamic block expressions

        return {
          for_each: this.forEach._getForEachExpression(),
          iterator: this.iterator,
          content: context.resolve(this.content),
        };
      },
    });
  }

  toString(): string {
    return Token.asString(this);
  }

  /**
   * Turn this Dynamic Block into JSON
   *
   * Called automatically when JSON.stringify() is called on this.
   */
  toJSON(): any {
    return "<unresolved-terraform-dynamic-block>";
  }

  public static isTerraformDynamicBlock(x: any): x is TerraformDynamicBlock {
    return x !== null && typeof x === "object" && DYNAMIC_BLOCK_SYMBOL in x;
  }
}
