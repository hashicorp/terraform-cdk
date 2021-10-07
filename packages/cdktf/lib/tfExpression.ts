import { IResolvable, IResolveContext } from "./tokens/resolvable";
import { Intrinsic } from "./tokens/private/intrinsic";
import { Tokenization } from "./tokens/token";

class TFExpression extends Intrinsic implements IResolvable {
  public isInnerTerraformExpression = false;

  protected resolveArg(context: IResolveContext, arg: any): string {
    const resolvedArg = context.resolve(arg);
    if (Tokenization.isResolvable(arg)) {
      return resolvedArg;
    }

    if (typeof arg === "string") {
      return this.resolveString(arg, resolvedArg);
    }

    if (Array.isArray(resolvedArg)) {
      return `[${resolvedArg.join(", ")}]`;
    }

    if (typeof resolvedArg === "object") {
      return `{${Object.keys(resolvedArg)
        .map((key) => `${key} = ${this.resolveArg(context, arg[key])}`)
        .join(", ")}}`;
    }

    return resolvedArg;
  }

  private resolveString(str: string, resolvedArg: any) {
    const tokenList = Tokenization.reverseString(str);
    const numberOfTokens = tokenList.tokens.length + tokenList.intrinsic.length;

    // String literal
    if (numberOfTokens === 0) {
      return resolvedArg.startsWith('"') && resolvedArg.endsWith('"')
        ? resolvedArg
        : `"${resolvedArg}"`;
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
export function ref(identifier: string): IResolvable {
  return new Reference(identifier);
}

function markAsInner(arg: any) {
  if (arg instanceof TFExpression) {
    arg.isInnerTerraformExpression = true;
    return;
  }

  // reverese tokens here and set inner tf expression flag
  Tokenization.reverse(arg).map((resolvable) => {
    if (resolvable instanceof TFExpression) {
      resolvable.isInnerTerraformExpression = true;
    }
  });

  if (typeof arg === "object") {
    if (Array.isArray(arg)) {
      arg.forEach(markAsInner);
    } else {
      Object.keys(arg).forEach((key) => markAsInner(arg[key]));
    }
  }
}

class FunctionCall extends TFExpression {
  constructor(private name: string, private args: Expression[]) {
    super({ name, args });
  }

  public resolve(context: IResolveContext): string {
    this.args.forEach(markAsInner);

    const serializedArgs = this.args
      .map((arg) => this.resolveArg(context, arg))
      .join(", ");

    const expr = `${this.name}(${serializedArgs})`;

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}
export function call(name: string, args: Expression[]) {
  return new FunctionCall(name, args) as IResolvable;
}

export const FOR_EXPRESSION_KEY = ref("key");
export const FOR_EXPRESSION_VALUE = ref("val");

/**
 * https://www.terraform.io/docs/language/expressions/for.html
 */
class ForExpression extends TFExpression {
  constructor(
    private input: Expression,
    private valueExpression: Expression,
    private keyExpression?: Expression
  ) {
    super({ input, valueExpression, keyExpression });
  }

  public resolve(context: IResolveContext): string {
    markAsInner(this.input);
    markAsInner(this.valueExpression);
    if (this.keyExpression) markAsInner(this.keyExpression);

    const key = this.resolveArg(context, FOR_EXPRESSION_KEY);
    const value = this.resolveArg(context, FOR_EXPRESSION_VALUE);
    const input = this.resolveArg(context, this.input);
    const valueExpr = this.resolveArg(context, this.valueExpression);
    const keyExpr = this.keyExpression
      ? this.resolveArg(context, this.keyExpression)
      : undefined;

    let expr: string;
    if (keyExpr) {
      expr = `{ for ${key}, ${value} in ${input}: ${keyExpr} => ${valueExpr} }`;
    } else {
      expr = `[ for ${key}, ${value} in ${input}: ${valueExpr}]`;
    }

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}

/**
 * Creates a for expression, used for advanced internal use cases (e.g. in the @cdktf/aws-adapter)
 * @param input the input for the expression e.g. a list or an object
 * @param valueExpression will express the value e.g. [ for i in &lt;input&gt; : &lt;valueExpression&gt; ]
 * @param keyExpression if set will return an object e.g. { for k,v in &lt;input&gt; : &lt;keyExpression&gt; => &lt;valueExpression&gt;}
 * @returns a for expression
 *
 * The variables for key (for maps) / index (for lists) and value that are valid in the key- and valueExpression
 * can be referenced by using these constants: FOR_EXPRESSION_KEY and FOR_EXPRESSION_VALUE.
 *
 * Currently nesting for expressions is not supported due to this simplification.
 *
 * Currently does not support filtering elements (if clause) or grouping results
 */
export function forExpression(
  input: Expression,
  valueExpression: Expression,
  keyExpression?: Expression
) {
  return new ForExpression(
    input,
    valueExpression,
    keyExpression
  ) as IResolvable;
}

export type Expression =
  | Reference
  | FunctionCall
  | string
  | number
  | boolean
  | IResolvable;
