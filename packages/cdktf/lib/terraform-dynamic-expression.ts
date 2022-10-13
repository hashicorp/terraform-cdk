// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ITerraformIterator } from "./terraform-iterator";
import { forExpression } from ".";
import { IResolvable, Lazy, Token } from "./tokens";
import { captureStackTrace } from "./tokens/private/stack-trace";

const DYNAMIC_EXPRESSION_SYMBOL = Symbol.for("cdktf/TerraformDynamicBlock");

/**
 * A TerraformDynamicExpression is returned by TerraformIterator.dynamic
 * and can be passed to list attributes of e.g. TerraformResources
 * As it resolves to a for expression, it can be used directly on attributes of
 * a list(object) type (or similar) and in Terraform functions that take a list.
 * When used in attributes that are of a block type which need to be modeled as
 * a dynamic block, the listMapper for that attribute will change this to a
 * TerraformDynamicBlock, which in turn will be properly handled by the
 * processDynamicAttributes() utility function.
 */
export class TerraformDynamicExpression implements IResolvable {
  public readonly creationStack: string[];
  public readonly iterator: ITerraformIterator;
  public readonly content: { [key: string]: any };

  constructor(args: {
    iterator: ITerraformIterator;
    content: { [key: string]: any };
  }) {
    Object.defineProperty(this, DYNAMIC_EXPRESSION_SYMBOL, { value: true });
    this.creationStack = captureStackTrace();
    this.iterator = args.iterator;
    this.content = args.content;
  }

  /**
   * resolves this as a Terraform for expression.
   * This allows using iterator.dynamic() on attributes that are not blocks but
   * lists of objects (which is not visible to the user when working with provider
   * mappings as it is abstracted away)
   */
  public resolve(): any {
    return Lazy.anyValue({
      produce: (context) => {
        // resolve nested Lazy values (within this.content) for a for expression
        context.iteratorContext = "FOR_EXPRESSION";
        // returns [ for key, value in forEachExpr : content ]
        // context.resolve is required for the iteratorContext to be correctly passed
        // to Lazy values within this.content
        return context.resolve(
          forExpression(this.iterator._getForEachExpression(), this.content)
        );
      },
    });
  }

  toString(): string {
    return Token.asString(this);
  }

  /**
   * Turn this Dynamic Expression into JSON
   *
   * Called automatically when JSON.stringify() is called on this.
   */
  toJSON(): any {
    return "<unresolved-terraform-dynamic-expression>";
  }

  public static isTerraformDynamicExpression(
    x: any
  ): x is TerraformDynamicExpression {
    return (
      x !== null && typeof x === "object" && DYNAMIC_EXPRESSION_SYMBOL in x
    );
  }
}
