import { IResolvable, IResolveContext } from "./tokens/resolvable";
import { Intrinsic } from "./tokens/private/intrinsic";
import { Tokenization } from "./tokens/token";

class TFExpression extends Intrinsic implements IResolvable {
  public isInnerTerraformExpression = false;
}

class Reference extends TFExpression {
  constructor(private identifier: string) {
    super(identifier);
  }

  public resolve(): string {
    return this.isInnerTerraformExpression
      ? this.identifier
      : `\${${this.identifier}}`;
  }
}
export function ref(identifier: string) {
  return new Reference(identifier) as IResolvable;
}

function markAsInner(arg: any) {
  if (arg instanceof TFExpression) {
    arg.isInnerTerraformExpression = true;
  }

  // reverese tokens here and set inner tf expression flag
  Tokenization.reverse(arg).map((resolvable) => {
    if (resolvable instanceof TFExpression) {
      resolvable.isInnerTerraformExpression = true;
    }
  });

  if (Array.isArray(arg)) {
    arg.forEach(markAsInner);
  }
}

class FunctionCall extends TFExpression {
  constructor(private name: string, private args: Expression[]) {
    super({ name, args });

    this.args.forEach(markAsInner);
  }

  public resolve(context: IResolveContext): string {
    const serializedArgs = this.args
      .map((arg) => {
        const resolvedArg = context.resolve(arg);
        if (Tokenization.isResolvable(arg)) {
          return resolvedArg;
        }

        if (typeof arg === "string") {
          const tokenList = Tokenization.reverseString(arg);
          const numberOfTokens =
            tokenList.tokens.length + tokenList.intrinsic.length;

          // String literal
          if (numberOfTokens === 0) {
            return `"${resolvedArg}"`;
          }

          // Only a token reference
          if (tokenList.literals.length === 0 && numberOfTokens === 1) {
            return resolvedArg;
          }

          // String literal + token reference combination
          return `"${tokenList.join({
            join: (left, right) => {
              const leftTokens = Tokenization.reverse(left);
              const rightTokens = Tokenization.reverse(right);

              const leftValue =
                leftTokens.length === 0 ? left : `\${${leftTokens[0]}}`;

              const rightValue =
                rightTokens.length === 0 ? right : `\${${rightTokens[0]}}`;

              return `${leftValue}${rightValue}`;
            },
          })}"`;
        }

        if (Array.isArray(resolvedArg)) {
          return `[${resolvedArg.join(", ")}]`;
        }

        return resolvedArg;
      })
      .join(", ");

    const expr = `${this.name}(${serializedArgs})`;

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}
export function call(name: string, args: Expression[]) {
  return new FunctionCall(name, args) as IResolvable;
}

export type Expression =
  | Reference
  | FunctionCall
  | string
  | number
  | boolean
  | IResolvable;
