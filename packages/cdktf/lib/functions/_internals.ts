import { Tokenization } from "../tokens/token";
import { Expression, call } from "../tfExpression";

// We use branding here to ensure we internally only handle validated values
// this allows us to catch usage errors before terraform does in some cases
type TFValue = any & { __type: "tfvalue" };
type TFValueValidator = (value: any) => TFValue;

type ExecutableTfFunction = (...args: any[]) => Expression;

export function anyValue(value: any): any {
  return value;
}

export function mapValue(value: any): any {
  return value;
}

export function stringValue(value: any): any {
  if (typeof value !== "string" && !Tokenization.isResolvable(value)) {
    throw new Error(`${value} is not a valid number nor a token`);
  }
  return value;
}

export function numericValue(value: any): any {
  if (typeof value !== "number" && !Tokenization.isResolvable(value)) {
    throw new Error(`${value} is not a valid number nor a token`);
  }
  return value;
}

export function listOf(type: TFValueValidator): TFValueValidator {
  return (value: any) => {
    if (Tokenization.isResolvable(value)) {
      return value;
    }

    if (!Array.isArray(value)) {
      //   throw new Error(`${value} is not a valid list`);
      return value;
    }

    value.forEach((item, i) => {
      try {
        type(item);
      } catch (error) {
        throw new Error(
          `Element in list ${value} at position ${i} is not of the right type: ${error}`
        );
      }
    });

    return value.join(",");
  };
}

export function terraformFunction(
  name: string,
  argValidators: TFValueValidator | TFValueValidator[]
): ExecutableTfFunction {
  return (...args: any[]) => {
    if (Array.isArray(argValidators)) {
      if (args.length !== argValidators.length) {
        throw new Error(
          `${name} takes ${argValidators.length} arguments, but ${args.length} were provided`
        );
      }
      const validatedArgs: TFValue[] = args.map((arg, i) =>
        argValidators[i](arg)
      );

      return call(name, validatedArgs);
    } else {
      // Used for spreadable arguments
      return call(name, argValidators(args));
    }
  };
}
