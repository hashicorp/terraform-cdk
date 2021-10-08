import { IResolvable, IResolveContext } from "./tokens/resolvable";
import { Intrinsic } from "./tokens/private/intrinsic";
import { Tokenization } from "./tokens/token";
import { LazyBase } from ".";

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
    } else if (resolvable instanceof LazyBase) {
      resolvable.addPostProcessor({
        postProcess: (value) => {
          markAsInner(value);
          return value;
        },
      });
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

class PropertyAccess extends TFExpression {
  constructor(private target: Expression, private args: Expression[]) {
    super({ target, args });
  }

  public resolve(context: IResolveContext): string {
    markAsInner(this.target);
    this.args.forEach(markAsInner);

    const serializedArgs = this.args
      .map((arg) => this.resolveArg(context, arg))
      .map((a) => `[${a}]`) // property access
      .join("");

    const expr = `${this.target}${serializedArgs}`;

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}

export function propertyAccess(target: Expression, args: Expression[]) {
  return new PropertyAccess(target, args) as IResolvable;
}

class ConditionalExpression extends TFExpression {
  constructor(
    private condition: Expression,
    private trueValue: Expression,
    private falseValue: Expression
  ) {
    super({ condition, trueValue, falseValue });
  }

  public resolve(context: IResolveContext): string {
    markAsInner(this.condition);
    markAsInner(this.trueValue);
    markAsInner(this.falseValue);

    const condition = this.resolveArg(context, this.condition);
    const trueValue = this.resolveArg(context, this.trueValue);
    const falseValue = this.resolveArg(context, this.falseValue);

    const expr = `${condition} ? ${trueValue} : ${falseValue}`;

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}

/**
 * creates an expression like `true ? 1 : 0`
 */
export function conditional(
  condition: Expression,
  trueValue: Expression,
  falseValue: Expression
) {
  return new ConditionalExpression(condition, trueValue, falseValue);
}

// https://www.terraform.io/docs/language/expressions/operators.html
export type Operator =
  | "!"
  | "-"
  | "*"
  | "/"
  | "%"
  | "+"
  | ">"
  | ">="
  | "<"
  | "<="
  | "=="
  | "!="
  | "&&"
  | "||";
export class OperatorExpression extends TFExpression {
  constructor(
    private operator: Operator,
    private left: Expression,
    private right?: Expression // optional for ! and - operator
  ) {
    super({ operator, leftValue: left, rightValue: right });
  }

  public resolve(context: IResolveContext): string {
    markAsInner(this.left);
    if (this.right) markAsInner(this.right);
    const left = this.resolveArg(context, this.left);
    const right = this.right ? this.resolveArg(context, this.right) : undefined;

    let expr = "";
    switch (this.operator) {
      case "!": {
        expr = `!${left}`; // no braces needed as ! has highest precedence
        break;
      }
      case "-": {
        if (right) {
          // subtraction
          expr = `(${left} - ${right})`;
        } else {
          // negation
          expr = `-${left}`; // no braces needed as - has highest precedence
        }
        break;
      }
      default: {
        expr = `(${left} ${this.operator} ${right})`;
      }
    }

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }

  public static not(expression: Expression) {
    return new OperatorExpression("!", expression) as IResolvable;
  }

  public static negate(expression: Expression) {
    return new OperatorExpression("-", expression) as IResolvable;
  }

  public static mul(left: Expression, right: Expression) {
    return new OperatorExpression("*", left, right) as IResolvable;
  }

  public static div(left: Expression, right: Expression) {
    return new OperatorExpression("/", left, right) as IResolvable;
  }

  public static mod(left: Expression, right: Expression) {
    return new OperatorExpression("%", left, right) as IResolvable;
  }

  public static add(left: Expression, right: Expression) {
    return new OperatorExpression("+", left, right) as IResolvable;
  }

  public static sub(left: Expression, right: Expression) {
    return new OperatorExpression("-", left, right) as IResolvable;
  }

  public static gt(left: Expression, right: Expression) {
    return new OperatorExpression(">", left, right) as IResolvable;
  }

  public static gte(left: Expression, right: Expression) {
    return new OperatorExpression(">=", left, right) as IResolvable;
  }

  public static lt(left: Expression, right: Expression) {
    return new OperatorExpression("<", left, right) as IResolvable;
  }

  public static lte(left: Expression, right: Expression) {
    return new OperatorExpression("<=", left, right) as IResolvable;
  }

  public static eq(left: Expression, right: Expression) {
    return new OperatorExpression("==", left, right) as IResolvable;
  }

  public static neq(left: Expression, right: Expression) {
    return new OperatorExpression("!=", left, right) as IResolvable;
  }

  public static and(left: Expression, right: Expression) {
    return new OperatorExpression("&&", left, right) as IResolvable;
  }

  public static or(left: Expression, right: Expression) {
    return new OperatorExpression("||", left, right) as IResolvable;
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

export type Expression =
  | Reference
  | FunctionCall
  | string
  | string[]
  | number
  | boolean
  | IResolvable;
