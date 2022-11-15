// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/token.ts
import { IConstruct } from "constructs";
import { Lazy } from "./lazy";
import { unresolved } from "./private/encoding";
import { Intrinsic } from "./private/intrinsic";
import { resolve } from "./private/resolve";
import { TokenMap } from "./private/token-map";
import { IResolvable, ITokenResolver } from "./resolvable";
import { TokenizedStringFragments } from "./string-fragments";

/**
 * Represents a special or lazily-evaluated value.
 *
 * Can be used to delay evaluation of a certain value in case, for example,
 * that it requires some context or late-bound data. Can also be used to
 * mark values that need special processing at document rendering time.
 *
 * Tokens can be embedded into strings while retaining their original
 * semantics.
 */
export class Token {
  /**
   * Returns true if obj represents an unresolved value
   *
   * One of these must be true:
   *
   * - `obj` is an IResolvable
   * - `obj` is a string containing at least one encoded `IResolvable`
   * - `obj` is either an encoded number or list
   *
   * This does NOT recurse into lists or objects to see if they
   * containing resolvables.
   *
   * @param obj The object to test.
   */
  public static isUnresolved(obj: any): boolean {
    return unresolved(obj);
  }

  /**
   * Return a reversible string representation of this token
   *
   * If the Token is initialized with a literal, the stringified value of the
   * literal is returned. Otherwise, a special quoted string representation
   * of the Token is returned that can be embedded into other strings.
   *
   * Strings with quoted Tokens in them can be restored back into
   * complex values with the Tokens restored by calling `resolve()`
   * on the string.
   */
  public static asString(value: any, options: EncodingOptions = {}): string {
    if (typeof value === "string") {
      return value;
    }

    return TokenMap.instance().registerString(
      Token.asAny(value),
      options.displayHint
    );
  }

  /**
   * Return a reversible number representation of this token
   */
  public static asNumber(value: any): number {
    if (typeof value === "number") {
      return value;
    }
    return TokenMap.instance().registerNumber(Token.asAny(value));
  }

  /**
   * Return a reversible list representation of this token
   */
  public static asList(value: any, options: EncodingOptions = {}): string[] {
    if (Array.isArray(value) && value.every((x) => typeof x === "string")) {
      return value;
    }
    return TokenMap.instance().registerList(
      Token.asAny(value),
      options.displayHint
    );
  }

  /**
   * Return a reversible list representation of this token
   */
  public static asNumberList(value: any): number[] {
    if (Array.isArray(value) && value.every((x) => typeof x === "number")) {
      return value;
    }
    return TokenMap.instance().registerNumberList(Token.asAny(value));
  }

  /**
   * Return a reversible map representation of this token
   */
  public static asMap(
    value: any,
    mapValue: any,
    options: EncodingOptions = {}
  ): { [key: string]: any } {
    // since the return value is basically an object, just encode always
    return TokenMap.instance().registerMap(
      Token.asAny(value),
      mapValue,
      options.displayHint
    );
  }

  /**
   * String Map token value representation
   */
  public static readonly STRING_MAP_TOKEN_VALUE = "String Map Token Value";

  /**
   * Return a reversible map representation of this token
   */
  public static asStringMap(
    value: any,
    options: EncodingOptions = {}
  ): { [key: string]: string } {
    return this.asMap(value, Token.STRING_MAP_TOKEN_VALUE, options);
  }

  /**
   * Number Map token value representation
   */
  public static readonly NUMBER_MAP_TOKEN_VALUE = -123456789;

  /**
   * Return a reversible map representation of this token
   */
  public static asNumberMap(
    value: any,
    options: EncodingOptions = {}
  ): { [key: string]: number } {
    return this.asMap(value, Token.NUMBER_MAP_TOKEN_VALUE, options);
  }

  /**
   * Return a reversible map representation of this token
   */
  public static asBooleanMap(
    value: any,
    options: EncodingOptions = {}
  ): { [key: string]: boolean } {
    return this.asMap(value, true, options);
  }

  /**
   * Any map token representation
   */
  public static readonly ANY_MAP_TOKEN_VALUE = "Any Map Token Value";

  /**
   * Return a reversible map representation of this token
   */
  public static asAnyMap(
    value: any,
    options: EncodingOptions = {}
  ): { [key: string]: any } {
    return this.asMap(value, Token.ANY_MAP_TOKEN_VALUE, options);
  }

  /**
   * Return a resolvable representation of the given value
   */
  public static asAny(value: any): IResolvable {
    return Tokenization.isResolvable(value) ? value : new Intrinsic(value);
  }

  /**
   * Return a Token containing a `null` value
   *
   * Note: This is different than `undefined`, `nil`, `None` or similar
   * as it will end up in the Terraform config and can be used to explicitly
   * not set an attribute (which is sometimes required by Terraform providers)
   *
   * @returns a Token resolving to `null` as understood by Terraform
   */
  public static nullValue(): IResolvable {
    // passing null works in Typescript, this is why we can do this here
    // but users wouldn't be able to call e.g. Token.as_any(None) in Python
    return Token.asAny(null);
  }
}

/**
 * Less oft-needed functions to manipulate Tokens
 */
export class Tokenization {
  /**
   * Reverse any value into Resolvables, if possible
   */
  public static reverse(x: any): IResolvable[] {
    if (Tokenization.isResolvable(x)) {
      return [x];
    }
    if (typeof x === "string") {
      const reversedString = Tokenization.reverseString(x);
      return [...reversedString.tokens, ...reversedString.intrinsic];
    }
    if (Array.isArray(x)) {
      const reversedList = Tokenization.reverseList(x);
      if (reversedList) {
        return [reversedList];
      }

      const reversedNumberList = Tokenization.reverseNumberList(x);
      return reversedNumberList ? [reversedNumberList] : [];
    }
    if (typeof x === "number") {
      const reversedNumber = Tokenization.reverseNumber(x);
      return reversedNumber ? [reversedNumber] : [];
    }
    if (typeof x === "object" && x !== null) {
      const reversedMap = Tokenization.reverseMap(x);
      return reversedMap ? [reversedMap] : [];
    }

    return []; // null or undefined cannot be reversed
  }

  /**
   * Un-encode a string potentially containing encoded tokens
   */
  public static reverseString(s: string): TokenizedStringFragments {
    return TokenMap.instance().splitString(s);
  }

  /**
   * Un-encode a Tokenized value from a number
   */
  public static reverseNumber(n: number): IResolvable | undefined {
    return TokenMap.instance().lookupNumberToken(n);
  }

  /**
   * Un-encode a Tokenized value from a list
   */
  public static reverseList(l: string[]): IResolvable | undefined {
    return TokenMap.instance().lookupList(l);
  }

  /**
   * Un-encode a Tokenized value from a list
   */
  public static reverseNumberList(l: number[]): IResolvable | undefined {
    return TokenMap.instance().lookupNumberList(l);
  }

  /**
   * Un-encode a Tokenized value from a map
   */
  public static reverseMap(m: { [key: string]: any }): IResolvable | undefined {
    return TokenMap.instance().lookupMap(m);
  }

  /**
   * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
   * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
   *
   * @param obj The object to resolve.
   * @param options Prefix key path components for diagnostics.
   */
  public static resolve(obj: any, options: ResolveOptions): any {
    return resolve(obj, {
      scope: options.scope,
      resolver: options.resolver,
      preparing: options.preparing !== undefined ? options.preparing : false,
    });
  }

  /**
   * Return whether the given object is an IResolvable object
   *
   * This is different from Token.isUnresolved() which will also check for
   * encoded Tokens, whereas this method will only do a type check on the given
   * object.
   */
  public static isResolvable(obj: any): obj is IResolvable {
    return (
      typeof obj === "object" &&
      obj !== null &&
      typeof obj.resolve === "function"
    );
  }

  /**
   * Stringify a number directly or lazily if it's a Token. If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.
   */
  public static stringifyNumber(x: number) {
    // only convert numbers to strings so that Refs, conditions, and other things don't end up synthesizing as [object object]

    if (Token.isUnresolved(x)) {
      return Lazy.stringValue({
        produce: (context) => {
          const resolved = context.resolve(x);
          return typeof resolved !== "number" ? resolved : `${resolved}`;
        },
      });
    } else {
      return typeof x !== "number" ? x : `${x}`;
    }
  }
}

/**
 * Options to the resolve() operation
 *
 * NOT the same as the ResolveContext; ResolveContext is exposed to Token
 * implementors and resolution hooks, whereas this struct is just to bundle
 * a number of things that would otherwise be arguments to resolve() in a
 * readable way.
 */
export interface ResolveOptions {
  /**
   * The scope from which resolution is performed
   */
  readonly scope: IConstruct;

  /**
   * The resolver to apply to any resolvable tokens found
   */
  readonly resolver: ITokenResolver;

  /**
   * Whether the resolution is being executed during the prepare phase or not.
   * @default false
   */
  readonly preparing?: boolean;
}

/**
 * Properties to string encodings
 */
export interface EncodingOptions {
  /**
   * A hint for the Token's purpose when stringifying it
   * @default - no display hint
   */
  readonly displayHint?: string;
}
