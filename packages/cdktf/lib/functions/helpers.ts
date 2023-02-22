// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Tokenization, Token } from "../tokens/token";
import { call } from "../tfExpression";
import { IResolvable } from "../tokens/resolvable";
import { TokenString, extractTokenDouble } from "../tokens/private/encoding";

// We use branding here to ensure we internally only handle validated values
// this allows us to catch usage errors before terraform does in some cases
type TFValue = any & { __type: "tfvalue" };
type TFValueValidator = (value: any) => TFValue;

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
export function anyValue(value: any): any {
  return value;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function mapValue(value: any): any {
  return value;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function stringValue(value: any): any {
  if (typeof value !== "string" && !Tokenization.isResolvable(value)) {
    throw new Error(`'${value}' is not a valid string nor a token`);
  }

  if (typeof value === "string" && hasUnescapedDoubleQuotes(value)) {
    throw new Error(
      `'${value}' can not be used as value directly since it has unescaped double quotes in it. To safely use the value please use Fn.rawString on your string.`
    );
  }

  return value;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function numericValue(value: any): any {
  if (typeof value !== "number" && !Tokenization.isResolvable(value)) {
    throw new Error(`${value} is not a valid number nor a token`);
  }
  return value;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export function listOf(type: TFValueValidator): TFValueValidator {
  return (value: any) => {
    if (Tokenization.isResolvable(value)) {
      return value;
    }

    if (!Array.isArray(value)) {
      //   throw new Error(`${value} is not a valid list`);
      return value;
    }

    return value
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
          throw new Error(
            `Element in list ${value} at position ${i} is not of the right type: ${error}`
          );
        }
      });
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
  argValidators: TFValueValidator | TFValueValidator[]
): ExecutableTfFunction {
  return function (...args: any[]) {
    if (Array.isArray(argValidators)) {
      if (args.length !== argValidators.length) {
        throw new Error(
          `${name} takes ${argValidators.length} arguments, but ${args.length} were provided`
        );
      }
      return call(
        name,
        args.map((arg, i) => {
          try {
            return argValidators[i](arg);
          } catch (error) {
            throw new Error(
              `Argument ${i} of ${name} failed the validation: ${error}`
            );
          }
        })
      );
    } else {
      return call(name, argValidators(args));
    }
  };
}
