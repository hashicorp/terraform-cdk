import { ITerraformIterator } from "./terraform-iterator";
import { IResolvable, Token } from "./tokens";
import { captureStackTrace } from "./tokens/private/stack-trace";

const DYNAMIC_BLOCK_SYMBOL = Symbol.for("cdktf/TerraformDynamicBlock");

export class TerraformDynamicBlock implements IResolvable {
  public readonly creationStack: string[];
  public readonly forEach: ITerraformIterator;
  public readonly iterator = "each"; // name of temporary variable used in iteration, needed in the future when allowing nesting iterators
  public readonly content: { [key: string]: any };
  // labels: TODO: support labels, but they seem to be quite rare (see https://discuss.hashicorp.com/t/labels-in-dynamic-block/21461/5)

  constructor(args: {
    forEach: ITerraformIterator;
    content: { [key: string]: any };
  }) {
    Object.defineProperty(this, DYNAMIC_BLOCK_SYMBOL, { value: true });
    this.creationStack = captureStackTrace();
    this.forEach = args.forEach;
    this.content = args.content;
  }

  public resolve(): any {
    throw new Error(
      `Tried to directly resolve a TerraformDynamicBlock which is not supported.
This can happen if you pass the result of iterator.dynamic() to a Terraform function or to a property or construct that does not support dynamic blocks.
Dynamic blocks are only supported on block attributes of resources, data sources and providers at the moment`
    );
  }

  public toTerraform() {
    return {
      for_each: this.forEach._getForEachExpression(),
      iterator: this.iterator,
      content: this.content,
    };
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
