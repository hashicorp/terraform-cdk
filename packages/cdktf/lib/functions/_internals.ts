import { Tokenization } from "../tokens/token";
import { Lazy } from "../tokens/lazy";

// We use branding here to ensure we internally only handle validated values
// this allows us to catch usage errors before terraform does in some cases
type TFValue = any & { __type: "tfvalue" };
type TFValueValidator = (value: any) => TFValue;

type ExecutableTfFuncction = (...args: any[]) => any;

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
): ExecutableTfFuncction {
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

      return Lazy.stringValue({
        produce: () => `${name}(${validatedArgs.join(",")})`,
      });
    } else {
      // Used for spreadable arguments
      return Lazy.stringValue({
        produce: () => `${name}(${argValidators(argValidators(args))})`,
      });
    }
  };
}
