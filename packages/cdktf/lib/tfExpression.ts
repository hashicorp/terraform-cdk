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
