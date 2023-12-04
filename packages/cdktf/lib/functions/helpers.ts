// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Tokenization, Token } from "../tokens/token";
import { call } from "../tfExpression";
import { IResolvable } from "../tokens/resolvable";
import { TokenString, extractTokenDouble } from "../tokens/private/encoding";
import {
  functionArgumnetValidationFailure,
  functionRecievedWrongNumberOfArgs,
  listElementIsOfWrongType,
  valueContainsUnescapedQuotes,
  valueIsInvalidNumberOrToken,
  valueIsInvalidStringOrToken,
} from "../errors";

type TFValue<T> = { variadic?: boolean; value: T };
type TFValueValidator<T> = (value: T) => TFValue<T>;

type ExecutableTfFunction = (...args: any[]) => IResolvable;

/**
 * Determines if given str has unescaped double quotes
 * @param str String to test
 * @returns Boolean
 */
function hasUnescapedDoubleQuotes(str: string) {
  return /(^|[^\\])([\\]{2})*"/.test(str);
}

// Validators
// eslint-disable-next-line jsdoc/require-jsdoc
export function anyValue<T>(value: T): TFValue<T> {
  return { value };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function mapValue<T>(value: T): TFValue<T> {
  return { value };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function stringValue<T extends string>(value: T): TFValue<T> {
  if (typeof value !== "string" && !Tokenization.isResolvable(value)) {
    throw valueIsInvalidStringOrToken(value);
  }

  if (typeof value === "string" && hasUnescapedDoubleQuotes(value)) {
    throw valueContainsUnescapedQuotes(value);
  }

  return { value };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function numericValue<T>(value: T): TFValue<T> {
  if (typeof value !== "number" && !Tokenization.isResolvable(value)) {
    throw valueIsInvalidNumberOrToken(value as string);
  }
  return { value };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function listOf<T>(type: TFValueValidator<T>): TFValueValidator<T[]> {
  return (value: any) => {
    if (Tokenization.isResolvable(value)) {
      return { value };
    }

    if (!Array.isArray(value)) {
      //   throw new Error(`${value} is not a valid list`);
      return { value };
    }

    return {
      value: value
        .filter((item) => item !== undefined && item !== null)
        .map((item, i) => {
          if (Tokenization.isResolvable(item)) {
            return item;
          }

          if (TokenString.forListToken(item).test()) {
            return item;
          }

          if (extractTokenDouble(item, true) !== undefined) {
            return item;
          }

          if (TokenString.forMapToken(item).test()) {
            return item;
          }

          if (typeof item === "string") {
            const tokenList = Tokenization.reverseString(item);
            const numberOfTokens =
              tokenList.tokens.length + tokenList.intrinsic.length;
            if (numberOfTokens === 1 && tokenList.literals.length === 0) {
              return item;
            }
          }

          try {
            type(item);
            return typeof item === "string" ? `"${item}"` : item;
          } catch (error) {
            throw listElementIsOfWrongType(value, i, error);
          }
        }),
    };
  };
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function variadic<T>(type: TFValueValidator<T>): TFValueValidator<T[]> {
  return (value: any) => {
    // we use the list validator and set variadic to true in order to have it expanded in the args passed to the TF function
    return { value: listOf(type)(value).value, variadic: true };
  };
}

// Tokenization
// eslint-disable-next-line jsdoc/require-jsdoc
export function asString(value: IResolvable) {
  return Token.asString(value);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function asNumber(value: IResolvable) {
  return Token.asNumber(value);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function asList(value: IResolvable) {
  return Token.asList(value);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function asStringMap(value: IResolvable) {
  return Token.asStringMap(value);
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function asBoolean(value: IResolvable) {
  return value; // Booleans can not be represented as a token
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function asAny(value: IResolvable) {
  // Ordinarily casting to any can cause issues, but
  // in this case it makes using functions a bit easier in TS
  // and doesn't really harm other languages.
  // Jsii has issues when returning the value directly,
  // so wrap as a string.
  return asString(value) as any;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function terraformFunction(
  name: string,
  argValidators: TFValueValidator<any>[]
): ExecutableTfFunction {
  return function (...args: any[]) {
    if (args.length !== argValidators.length) {
      throw functionRecievedWrongNumberOfArgs(
        name,
        argValidators.length,
        args.length
      );
    }
    return call(
      name,
      // We use flatMap now, since listOf() wraps everything in an extra array but variadic() does not
      // This enables us to have variadic pass multiple args into the call() from a single array
      args.reduce((carry, arg, i) => {
        try {
          const val = argValidators[i](arg);
          if (val.variadic) return [...carry, ...val.value];
          else return [...carry, val.value];
        } catch (error) {
          throw functionArgumnetValidationFailure(i, name, error);
        }
      }, [])
    );
  };
}
