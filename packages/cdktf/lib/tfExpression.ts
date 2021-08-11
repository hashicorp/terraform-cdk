import { IResolvable, IResolveContext } from "./tokens/resolvable";
import { Intrinsic } from "./tokens/private/intrinsic";
import { Tokenization } from "./tokens";

export class TFExpression extends Intrinsic {
  public isInnerTerraformExpression = false;
}

export class Reference extends TFExpression {
  constructor(private identifier: string) {
    super(identifier);
  }

  public resolve(): string {
    return this.isInnerTerraformExpression
      ? this.identifier
      : `\${${this.identifier}}`;
  }
}
export function ref(identifier: string): Reference {
  return new Reference(identifier);
}

export class FunctionCall extends TFExpression {
  constructor(private name: string, private args: Expression[]) {
    super({ name, args });

    this.args.forEach((arg) => {
      if (arg instanceof TFExpression) {
        arg.isInnerTerraformExpression = true;
      }
    });
  }

  public resolve(context: IResolveContext): string {
    const expr = `${this.name}(${this.args
      .map((arg) => {
        if (Tokenization.isResolvable(arg)) {
          return arg.resolve(context);
        }

        return typeof arg === "string" ? `"${arg}"` : arg;
      })
      .join(", ")})`;

    return this.isInnerTerraformExpression ? expr : `\${${expr}}`;
  }
}
export function call(name: string, args: Expression[]): FunctionCall {
  return new FunctionCall(name, args);
}

export type Expression =
  | Reference
  | FunctionCall
  | string
  | number
  | boolean
  | IResolvable;
