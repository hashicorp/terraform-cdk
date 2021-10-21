import { IResolvable, IResolveContext } from "./tokens/resolvable";
import { Intrinsic } from "./tokens/private/intrinsic";
import { Tokenization } from "./tokens/token";
import { App, TerraformStack } from ".";

class TFExpression extends Intrinsic implements IResolvable {
  protected resolveArg(context: IResolveContext, arg: any): string {
    console.log(
      `Resolve Arg is called on ${this} for ${arg} with context ${
        context.inTerraformExpression ? "in TFE" : "not in TFE"
      }`
    );
    const resolvedArg = context.resolve(arg);
    console.log(`Preliminary resolvedArg ${resolvedArg}`);
    if (Tokenization.isResolvable(arg)) {
      console.log(`Arg is resolvable, done here`);
      return resolvedArg;
    }

    if (typeof arg === "string") {
      console.log(
        `Arg is string, resolving string ${this.resolveString(
          context,
          arg,
          resolvedArg
        )}`
      );
      return this.resolveString(context, arg, resolvedArg);
    }

    if (Array.isArray(resolvedArg)) {
      return `[${resolvedArg
        .map((_, index) => this.resolveArg(context, arg[index]))
        .join(", ")}]`;
    }

    if (typeof resolvedArg === "object") {
      return `{${Object.keys(resolvedArg)
        .map((key) => `${key} = ${this.resolveArg(context, arg[key])}`)
        .join(", ")}}`;
    }

    return resolvedArg;
  }

  /**
   * Escape string removes characters from the string that are not allowed in Terraform or JSON
   * It must only be used on non-token values
   */
  protected escapeString(str: string) {
    return str
      .replace(/\n/g, "\\n") // escape newlines
      .replace(/\${/g, "$$${"); // escape ${ to $${
  }

  private resolveString(
    context: IResolveContext,
    str: string,
    resolvedArg: any
  ) {
    console.log(
      `ResolveString called with ${str} and  resolvedArg ${resolvedArg}, in ${
        context.inTerraformExpression ? "in TFE" : "not in TFE"
      }`
    );
    const tokenList = Tokenization.reverseString(str);
    const numberOfTokens = tokenList.tokens.length + tokenList.intrinsic.length;

    // String literal
    if (numberOfTokens === 0) {
      return resolvedArg !== `"` &&
        resolvedArg.startsWith('"') &&
        resolvedArg.endsWith('"')
        ? this.escapeString(resolvedArg)
        : `"${this.escapeString(resolvedArg)}"`;
    }

    // Only a token reference
    if (tokenList.literals.length === 0 && numberOfTokens === 1) {
      return resolvedArg;
    }

    // String literal + token reference combination
    return `"${tokenList.join({
      join: (left, right) => {
        const leftTokens = Tokenization.reverse(left);
        const leftTokenList = Tokenization.reverseString(left);
        const rightTokens = Tokenization.reverse(right);

        const leftTokenCount =
          leftTokenList.intrinsic.length + leftTokenList.tokens.length;

        // if left is mixed, needs to be left alone (because it's a result of a previous join iteration)
        let leftValue = left;

        // if left is a string literal, then we need to escape it
        if (leftTokenList.literals.length === 1 && leftTokenCount === 0) {
          leftValue = this.escapeString(left);
        }

        // if left is only a token, needs to be wrapped as terraform expression
        if (leftTokenList.literals.length === 0 && leftTokenCount === 1) {
          leftValue = `\${${leftTokens[0]}}`;
        }

        const rightValue =
          rightTokens.length === 0
            ? this.escapeString(right)
            : `\${${rightTokens[0]}}`;

        return `${leftValue}${rightValue}`;
      },
    })}"`;
  }

  public resolveExpr(context: IResolveContext, tfExpression: string) {
    console.log(
      `resolveExpr called with ${tfExpression} ${
        context.inTerraformExpression ? "in TFE" : "not in TFE"
      }`
    );
    return this.isInsideTerraformExpression(context)
      ? tfExpression
      : `\${${tfExpression}}`;
  }

  public isInsideTerraformExpression(context: IResolveContext) {
    return context.inTerraformExpression;
  }
}

// A string that represents an input value to be escaped
class RawString extends TFExpression {
  constructor(private readonly str: string) {
    super(str);
  }

  public resolve(context: IResolveContext) {
    const qts = this.isInsideTerraformExpression(context) ? `"` : ``;
    return `${qts}${this.escapeString(this.str).replace(/\"/g, '\\"')}${qts}`; // eslint-disable-line no-useless-escape
  }

  public toString() {
    return this.str;
  }
}

export function rawString(str: string): IResolvable {
  return new RawString(str);
}

class Reference extends TFExpression {
  private crossStackIdentifier: Record<string, string> = {};
  constructor(private identifier: string, private originStack: TerraformStack) {
    super(identifier);
  }

  private referenceIdentifier(stackName: string): string {
    return this.crossStackIdentifier[stackName] ?? this.identifier;
  }

  public resolve(context: IResolveContext): string {
    console.log(
      `Reference resolve called for ${this.identifier} with context ${
        context.inTerraformExpression ? "in TFE" : "not in TFE"
      }`
    );
    // We check for cross stack references on preparation, setting a new identifier
    const resolutionStack = TerraformStack.of(context.scope);

    if (context.preparing) {
      // Cross stack reference
      if (this.originStack && this.originStack !== resolutionStack) {
        const app = App.of(this.originStack);
        this.crossStackIdentifier[resolutionStack.toString()] =
          app.crossStackReference(
            this.originStack,
            resolutionStack,
            this.identifier
          );
      }
    }

    const identifier = this.referenceIdentifier(resolutionStack.toString());
    return this.resolveExpr(context, identifier);
  }
}
export function ref(identifier: string, stack: TerraformStack): IResolvable {
  return new Reference(identifier, stack);
}

class PropertyAccess extends TFExpression {
  constructor(private target: Expression, private args: Expression[]) {
    super({ target, args });
  }

  public resolve(context: IResolveContext): string {
    const insideContext = context.extend({ inTerraformExpression: true });
    const serializedArgs = this.args
      .map((arg) => this.resolveArg(insideContext, arg))
      .map((a) => `[${a}]`) // property access
      .join("");

    const expr = `${insideContext.resolve(this.target)}${serializedArgs}`;

    return this.resolveExpr(context, expr);
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
    const insideContext = context.extend({ inTerraformExpression: true });
    const condition = this.resolveArg(insideContext, this.condition);
    const trueValue = this.resolveArg(insideContext, this.trueValue);
    const falseValue = this.resolveArg(insideContext, this.falseValue);

    const expr = `${condition} ? ${trueValue} : ${falseValue}`;

    return this.resolveExpr(context, expr);
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
class OperatorExpression extends TFExpression {
  constructor(
    private operator: Operator,
    private left: Expression,
    private right?: Expression // optional for ! and - operator
  ) {
    super({ operator, leftValue: left, rightValue: right });
  }

  public resolve(context: IResolveContext): string {
    const insideContext = context.extend({ inTerraformExpression: true });
    const left = this.resolveArg(insideContext, this.left);
    const right = this.right
      ? this.resolveArg(insideContext, this.right)
      : undefined;

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

    return this.resolveExpr(context, expr);
  }
}

export function notOperation(expression: Expression) {
  return new OperatorExpression("!", expression) as IResolvable;
}

export function negateOperation(expression: Expression) {
  return new OperatorExpression("-", expression) as IResolvable;
}

export function mulOperation(left: Expression, right: Expression) {
  return new OperatorExpression("*", left, right) as IResolvable;
}

export function divOperation(left: Expression, right: Expression) {
  return new OperatorExpression("/", left, right) as IResolvable;
}

export function modOperation(left: Expression, right: Expression) {
  return new OperatorExpression("%", left, right) as IResolvable;
}

export function addOperation(left: Expression, right: Expression) {
  return new OperatorExpression("+", left, right) as IResolvable;
}

export function subOperation(left: Expression, right: Expression) {
  return new OperatorExpression("-", left, right) as IResolvable;
}

export function gtOperation(left: Expression, right: Expression) {
  return new OperatorExpression(">", left, right) as IResolvable;
}

export function gteOperation(left: Expression, right: Expression) {
  return new OperatorExpression(">=", left, right) as IResolvable;
}

export function ltOperation(left: Expression, right: Expression) {
  return new OperatorExpression("<", left, right) as IResolvable;
}

export function lteOperation(left: Expression, right: Expression) {
  return new OperatorExpression("<=", left, right) as IResolvable;
}

export function eqOperation(left: Expression, right: Expression) {
  return new OperatorExpression("==", left, right) as IResolvable;
}

export function neqOperation(left: Expression, right: Expression) {
  return new OperatorExpression("!=", left, right) as IResolvable;
}

export function andOperation(left: Expression, right: Expression) {
  return new OperatorExpression("&&", left, right) as IResolvable;
}

export function orOperation(left: Expression, right: Expression) {
  return new OperatorExpression("||", left, right) as IResolvable;
}
class FunctionCall extends TFExpression {
  constructor(private name: string, private args: Expression[]) {
    super({ name, args });
  }

  public resolve(context: IResolveContext): string {
    const serializedArgs = this.args
      .map((arg) =>
        this.resolveArg(context.extend({ inTerraformExpression: true }), arg)
      )
      .join(", ");

    const expr = `${this.name}(${serializedArgs})`;

    return this.resolveExpr(context, expr);
  }
}
export function call(name: string, args: Expression[]) {
  return new FunctionCall(name, args) as IResolvable;
}

export type Expression =
  | Reference
  | FunctionCall
  | PropertyAccess
  | ConditionalExpression
  | OperatorExpression
  | string
  | string[]
  | number
  | boolean
  | IResolvable
  | { [key: string]: any }
  | null
  | any // ultimately any valid Terraform type can be used as an expression
  | any[];
