// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/private/encoding.ts
import {
  canOnlyEncodePositiveIntegers,
  indexTooLargeToEncode,
} from "../../errors";
import { IFragmentConcatenator, IResolvable } from "../resolvable";
import { TokenizedStringFragments } from "../string-fragments";
import { Tokenization } from "../token";

type LookupFunction = (id: string) => IResolvable | undefined;

// Details for encoding and decoding Tokens into native types; should not be exported

export const BEGIN_STRING_TOKEN_MARKER = "${TfToken[";
export const BEGIN_LIST_TOKEN_MARKER = "#{TfToken[";
export const BEGIN_MAP_TOKEN_MARKER = "&{TfToken[";
export const END_TOKEN_MARKER = "]}";

export const VALID_KEY_CHARS = "a-zA-Z0-9:._-";

const QUOTED_BEGIN_STRING_TOKEN_MARKER = regexQuote(BEGIN_STRING_TOKEN_MARKER);
const QUOTED_BEGIN_LIST_TOKEN_MARKER = regexQuote(BEGIN_LIST_TOKEN_MARKER);
const QUOTED_BEGIN_MAP_TOKEN_MARKER = regexQuote(BEGIN_MAP_TOKEN_MARKER);
const QUOTED_END_TOKEN_MARKER = regexQuote(END_TOKEN_MARKER);

const STRING_TOKEN_REGEX = new RegExp(
  `${QUOTED_BEGIN_STRING_TOKEN_MARKER}([${VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`,
  "g"
);
const LIST_TOKEN_REGEX = new RegExp(
  `${QUOTED_BEGIN_LIST_TOKEN_MARKER}([${VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`,
  "g"
);
const MAP_TOKEN_REGEX = new RegExp(
  `${QUOTED_BEGIN_MAP_TOKEN_MARKER}([${VALID_KEY_CHARS}]+)${QUOTED_END_TOKEN_MARKER}`,
  "g"
);

const NUMBER_TOKEN_REGEX = new RegExp(
  "[-|\\d|.\\+]+(e[-|\\d|.|e|E|\\+]+)",
  "g"
);

const ESCAPE_TOKEN_BEGIN_REGEX = /\$\{(?!TfToken\[)/g;
const ESCAPE_TOKEN_END_REGEX = /\}/g;

/**
 * A string with markers in it that can be resolved to external values
 */
export class TokenString {
  /**
   * Returns a `TokenString` for this string.
   *
   * @param s The string to tokenize
   * @param includeEscapeSequences Whether to include escape sequences in the tokenization
   * @param warnIfEscapeSequences Whether to warn if escape sequences are found
   */
  public static forString(
    s: string,
    includeEscapeSequences = false,
    warnIfEscapeSequences = false
  ) {
    return new TokenString(
      s,
      STRING_TOKEN_REGEX,
      1,
      includeEscapeSequences,
      warnIfEscapeSequences
    );
  }

  /**
   * Returns a `TokenString` for this string (must be the first string element of the list)
   */
  public static forListToken(s: string) {
    return new TokenString(s, LIST_TOKEN_REGEX);
  }

  /**
   * Returns a `TokenString` for this string that handles encoded numbers
   */
  public static forNumbers(s: string) {
    return new TokenString(s, NUMBER_TOKEN_REGEX, 0);
  }

  /**
   * Returns a `TokenString` for this string that handles encoded maps
   */
  public static forMapToken(s: string) {
    return new TokenString(s, MAP_TOKEN_REGEX);
  }

  constructor(
    private readonly str: string,
    private readonly re: RegExp,
    private readonly regexMatchIndex: number = 1,
    private readonly includeEscapeSequences: boolean = false,
    private readonly warnIfEscapeSequences: boolean = false
  ) {}

  private testForEscapeTokens(startIndex: number, maxIndex: number): boolean {
    ESCAPE_TOKEN_BEGIN_REGEX.lastIndex = startIndex;
    let startMatch = ESCAPE_TOKEN_BEGIN_REGEX.exec(this.str);

    if (startMatch && startMatch.index >= maxIndex) {
      startMatch = null;
    }

    return !!startMatch;
  }

  private nextEscapeToken(
    fragments: TokenizedStringFragments,
    startIndex: number,
    escapeDepth: number,
    maxIndex: number
  ) {
    ESCAPE_TOKEN_BEGIN_REGEX.lastIndex = startIndex;
    ESCAPE_TOKEN_END_REGEX.lastIndex = startIndex;
    let startMatch = ESCAPE_TOKEN_BEGIN_REGEX.exec(this.str);
    let endMatch = ESCAPE_TOKEN_END_REGEX.exec(this.str);

    if (startMatch && startMatch.index >= maxIndex) {
      startMatch = null;
    }
    if (endMatch && endMatch.index >= maxIndex) {
      endMatch = null;
    }

    if (!startMatch && !endMatch) {
      return {
        index: -1,
        escapeDepth: escapeDepth,
      };
    }

    if (startMatch && endMatch) {
      if (startMatch.index > startIndex && startMatch.index > startIndex) {
        const lede = this.str.substring(
          startIndex,
          Math.min(startMatch.index, endMatch.index)
        );
        fragments.addLiteral(lede);
      }

      if (startMatch.index < endMatch.index) {
        fragments.addEscape("open");

        return {
          index: ESCAPE_TOKEN_BEGIN_REGEX.lastIndex,
          escapeDepth: escapeDepth + 1,
        };
      }

      fragments.addEscape("close");
      return {
        index: ESCAPE_TOKEN_END_REGEX.lastIndex,
        escapeDepth: escapeDepth - 1,
      };
    }

    if (startMatch) {
      if (startMatch.index > startIndex) {
        const lede = this.str.substring(startIndex, startMatch.index);
        fragments.addLiteral(lede);
      }

      fragments.addEscape("open");

      return {
        index: ESCAPE_TOKEN_BEGIN_REGEX.lastIndex,
        escapeDepth: escapeDepth + 1,
      };
    }

    if (endMatch) {
      if (endMatch.index > startIndex) {
        const lede = this.str.substring(startIndex, endMatch.index);
        fragments.addLiteral(lede);
      }

      fragments.addEscape("close");

      return {
        index: ESCAPE_TOKEN_END_REGEX.lastIndex,
        escapeDepth: escapeDepth - 1,
      };
    }

    return {
      index: -1,
      escapeDepth: escapeDepth,
    };
  }

  private tokenizeNext(
    lookup: LookupFunction,
    fragments: TokenizedStringFragments,
    startIndex: number,
    escapeDepth: number
  ): { index: number; escapeDepth: number } {
    this.re.lastIndex = startIndex;
    if (startIndex >= this.str.length) {
      return {
        index: -1,
        escapeDepth,
      };
    }
    const match = this.re.exec(this.str);

    if (!match) {
      if (this.includeEscapeSequences) {
        const next = this.nextEscapeToken(
          fragments,
          startIndex,
          escapeDepth,
          this.str.length
        );
        if (next.index === -1) {
          fragments.addLiteral(this.str.substring(startIndex));
          return {
            index: -1,
            escapeDepth,
          };
        } else {
          return next;
        }
      }

      fragments.addLiteral(this.str.substring(startIndex));
      return {
        index: -1,
        escapeDepth: escapeDepth,
      };
    }

    if (match.index > startIndex) {
      if (this.includeEscapeSequences) {
        const next = this.nextEscapeToken(
          fragments,
          startIndex,
          escapeDepth,
          match.index
        );
        if (next.index === -1) {
          fragments.addLiteral(this.str.substring(startIndex, match.index));
          return {
            index: match.index,
            escapeDepth: escapeDepth,
          };
        } else {
          return next;
        }
      }

      const lede = this.str.substring(startIndex, match.index);
      fragments.addLiteral(lede);

      return {
        index: match.index,
        escapeDepth,
      };
    }

    const token = lookup(match[this.regexMatchIndex]);
    if (token) {
      fragments.addToken(token);
    } else {
      fragments.addLiteral(this.str.substring(match.index, this.re.lastIndex));
    }

    const nextIndex = this.re.lastIndex;

    return {
      index: nextIndex,
      escapeDepth,
    };
  }

  /**
   * Split string on markers, substituting markers with Tokens
   */
  public split(lookup: LookupFunction): TokenizedStringFragments {
    const ret = new TokenizedStringFragments();

    let index = 0;
    let escapeDepth = 0;
    if (
      this.warnIfEscapeSequences &&
      this.testForEscapeTokens(0, this.str.length)
    ) {
      // Only print warning and act as if escape sequences are ignored
      console.warn(
        "You're using escape sequences (${...}) with CDKTF Built-in functions. This is not supported yet, and the output may be incorrect."
      );
      console.warn(this.str);
    }
    while (index >= 0) {
      const iter = this.tokenizeNext(lookup, ret, index, escapeDepth);
      index = iter.index;
      escapeDepth = iter.escapeDepth;
    }

    return ret;
  }

  /**
   * Indicates if this string includes tokens.
   */
  public test(): boolean {
    this.re.lastIndex = 0; // Reset
    return this.re.test(this.str);
  }
}

/**
 * Quote a string for use in a regex
 */
export function regexQuote(s: string) {
  return s.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

/**
 * Concatenator that disregards the input
 *
 * Can be used when traversing the tokens is important, but the
 * result isn't.
 */
export class NullConcat implements IFragmentConcatenator {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public join(_left: any | undefined, _right: any | undefined): any {
    return undefined;
  }
}

/**
 * Returns true if argument contains a string list token
 */
export function containsStringListTokenElement(xs: any[]) {
  return xs.some(
    (x) => typeof x === "string" && TokenString.forListToken(x).test()
  );
}

/**
 * Returns true if argument contains a number list token
 */
export function containsNumberListTokenElement(xs: any[]) {
  return xs.some(
    (x) => typeof x === "number" && extractTokenDouble(x, true) !== undefined
  );
}

/**
 * Returns true if argument contains a string map token
 */
export function containsMapToken(xs: { [key: string]: any }) {
  return Object.keys(xs).some(
    (x) => typeof x === "string" && TokenString.forMapToken(x).test()
  );
}

/**
 * Returns true if argument is a complex element
 */
export function isComplexElement(xs: any) {
  return (
    typeof xs === "object" &&
    xs !== null &&
    "withinArray" in xs &&
    "interpolationAsList" in xs
  );
}

/**
 * Returns true if list contains a complex element
 */
export function containsComplexElement(xs: any) {
  return xs.length > 0 && isComplexElement(xs[0]);
}

/**
 * Returns true if obj is a token (i.e. has the resolve() method or is a string
 * that includes token markers), or it's a listifictaion of a Token string.
 *
 * @param obj The object to test.
 */
export function unresolved(obj: any): boolean {
  if (typeof obj === "string") {
    return TokenString.forString(obj).test();
  } else if (typeof obj === "number") {
    return extractTokenDouble(obj, false) !== undefined;
  } else if (Array.isArray(obj) && obj.length === 1) {
    return (
      (typeof obj[0] === "string" && TokenString.forListToken(obj[0]).test()) ||
      (typeof obj[0] === "number" &&
        extractTokenDouble(obj[0], true) !== undefined)
    );
  } else if (obj != null && containsMapToken(obj)) {
    return true;
  } else {
    return Tokenization.isResolvable(obj);
  }
}

/**
 * Bit pattern in the top 16 bits of a double to indicate a Token
 *
 * An IEEE double in LE memory order looks like this (grouped
 * into octets, then grouped into 32-bit words):
 *
 * mmmmmmmm.mmmmmmmm.mmmmmmmm.mmmmmmmm | mmmmmmmm.mmmmmmmm.EEEEmmmm.sEEEEEEE
 *
 * - m: mantissa (52 bits)
 * - E: exponent (11 bits)
 * - s: sign (1 bit)
 *
 * We put the following marker into the top 16 bits (exponent and sign), and
 * use the mantissa part to encode the token index. To save some bit twiddling
 * we use all top 16 bits for the tag. That loses us 4 mantissa bits to store
 * information in but we still have 48, which is going to be plenty for any
 * number of tokens to be created during the lifetime of any CDK application.
 *
 * Can't have all bits set because that makes a NaN, so unset the least
 * significant exponent bit.
 *
 * Currently not supporting BE architectures.
 */
// tslint:disable-next-line:no-bitwise
const DOUBLE_TOKEN_MARKER_BITS = 0xfdff << 16;

// tslint:disable-next-line:no-bitwise
const DOUBLE_LIST_TOKEN_MARKER_BITS = 0xfbff << 16;

/**
 * Highest encodable number
 */
const MAX_ENCODABLE_INTEGER = Math.pow(2, 48) - 1;

/**
 * Get 2^32 as a number, so we can do multiplication and div instead of bit shifting
 *
 * Necessary because in JavaScript, bit operations implicitly convert
 * to int32 and we need them to work on "int64"s.
 *
 * So instead of x >> 32, we do Math.floor(x / 2^32), and vice versa.
 */
const BITS32 = Math.pow(2, 32);

/**
 * Return a special Double value that encodes the given nonnegative integer
 *
 * We use this to encode Token ordinals.
 */
export function createTokenDouble(x: number, list: boolean) {
  if (Math.floor(x) !== x || x < 0) {
    throw canOnlyEncodePositiveIntegers();
  }
  if (x > MAX_ENCODABLE_INTEGER) {
    throw indexTooLargeToEncode(x);
  }

  const buf = new ArrayBuffer(8);
  const ints = new Uint32Array(buf);

  // tslint:disable:no-bitwise
  ints[0] = x & 0x0000ffffffff; // Bottom 32 bits of number

  // This needs an "x >> 32" but that will make it a 32-bit number instead
  // of a 64-bit number.
  ints[1] =
    (shr32(x) & 0xffff) |
    (list ? DOUBLE_LIST_TOKEN_MARKER_BITS : DOUBLE_TOKEN_MARKER_BITS); // Top 16 bits of number and the mask
  // tslint:enable:no-bitwise

  return new Float64Array(buf)[0];
}

/**
 * Shift a 64-bit int right 32 bits
 */
function shr32(x: number) {
  return Math.floor(x / BITS32);
}

/**
 * Shift a 64-bit left 32 bits
 */
function shl32(x: number) {
  return x * BITS32;
}

/**
 * Extract the encoded integer out of the special Double value
 *
 * Returns undefined if the float is a not an encoded token.
 */
export function extractTokenDouble(
  encoded: number,
  list: boolean
): number | undefined {
  const buf = new ArrayBuffer(8);
  new Float64Array(buf)[0] = encoded;

  const ints = new Uint32Array(buf);

  // tslint:disable:no-bitwise
  if (
    (ints[1] & 0xffff0000) !==
    (list ? DOUBLE_LIST_TOKEN_MARKER_BITS : DOUBLE_TOKEN_MARKER_BITS)
  ) {
    return undefined;
  }

  // Must use + instead of | here (bitwise operations
  // will force 32-bits integer arithmetic, + will not).
  return ints[0] + shl32(ints[1] & 0xffff);
  // tslint:enable:no-bitwise
}
