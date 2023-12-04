// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/private/token-map.ts
import { unknownNumberTokenFound, unrecognizedTokenKey } from "../../errors";
import { IResolvable } from "../resolvable";
import { TokenizedStringFragments } from "../string-fragments";
import {
  BEGIN_LIST_TOKEN_MARKER,
  BEGIN_STRING_TOKEN_MARKER,
  createTokenDouble,
  END_TOKEN_MARKER,
  extractTokenDouble,
  TokenString,
  VALID_KEY_CHARS,
  BEGIN_MAP_TOKEN_MARKER,
} from "./encoding";

const glob = global as any;

const STRING_SYMBOL = Symbol.for("@cdktf/core.TokenMap.STRING");
const LIST_SYMBOL = Symbol.for("@cdktf/core.TokenMap.LIST");
const NUMBER_SYMBOL = Symbol.for("@cdktf/core.TokenMap.NUMBER");
const NUMBER_LIST_SYMBOL = Symbol.for("@cdktf/core.TokenMap.NUMBER_LIST");
const MAP_SYMBOL = Symbol.for("@cdktf/core.TokenMap.MAP");

/**
 * Central place where we keep a mapping from Tokens to their String representation
 *
 * The string representation is used to embed token into strings,
 * and stored to be able to reverse that mapping.
 *
 * All instances of TokenStringMap share the same storage, so that this process
 * works even when different copies of the library are loaded.
 */
export class TokenMap {
  /**
   * Singleton instance of the token string map
   */
  public static instance(): TokenMap {
    if (!glob.__cdktfTokenMap) {
      glob.__cdktfTokenMap = new TokenMap();
    }
    return glob.__cdktfTokenMap;
  }

  private readonly stringTokenMap = new Map<string, IResolvable>();
  private readonly numberTokenMap = new Map<number, IResolvable>();
  private tokenCounter = 0;

  /**
   * Generate a unique string for this Token, returning a key
   *
   * Every call for the same Token will produce a new unique string, no
   * attempt is made to deduplicate. Token objects should cache the
   * value themselves, if required.
   *
   * The token can choose (part of) its own representation string with a
   * hint. This may be used to produce aesthetically pleasing and
   * recognizable token representations for humans.
   */
  public registerString(token: IResolvable, displayHint?: string): string {
    return cachedValue(token, STRING_SYMBOL, () => {
      const key = this.registerStringKey(token, displayHint);
      return `${BEGIN_STRING_TOKEN_MARKER}${key}${END_TOKEN_MARKER}`;
    });
  }

  /**
   * Generate a unique string for this Token, returning a key
   */
  public registerList(token: IResolvable, displayHint?: string): string[] {
    return cachedValue(token, LIST_SYMBOL, () => {
      const key = this.registerStringKey(token, displayHint);
      return [`${BEGIN_LIST_TOKEN_MARKER}${key}${END_TOKEN_MARKER}`];
    });
  }

  /**
   * Create a unique number representation for this Token and return it
   */
  public registerNumberList(token: IResolvable): number[] {
    return cachedValue(token, NUMBER_LIST_SYMBOL, () => {
      const key = this.registerNumberKey(token, true);
      return [key];
    });
  }

  /**
   * Create a unique number representation for this Token and return it
   */
  public registerNumber(token: IResolvable): number {
    return cachedValue(token, NUMBER_SYMBOL, () => {
      return this.registerNumberKey(token, false);
    });
  }

  /**
   * Generate a unique string for this Token, returning a key
   */
  public registerMap<V>(
    token: IResolvable,
    mapValue: V,
    displayHint?: string
  ): { [key: string]: V } {
    return cachedValue(token, MAP_SYMBOL, () => {
      const key = this.registerStringKey(token, displayHint);
      return {
        [`${BEGIN_MAP_TOKEN_MARKER}${key}${END_TOKEN_MARKER}`]: mapValue,
      };
    });
  }

  /**
   * Reverse a string representation into a Token object
   */
  public lookupString(s: string): IResolvable | undefined {
    const fragments = this.splitString(s);
    if (fragments.tokens.length > 0 && fragments.length === 1) {
      return fragments.firstToken;
    }
    return undefined;
  }

  /**
   * Reverse a string representation into a Token object
   */
  public lookupList(xs: string[]): IResolvable | undefined {
    if (xs.length !== 1) {
      return undefined;
    }
    const str = TokenString.forListToken(xs[0]);
    const fragments = str.split(this.lookupToken.bind(this));
    if (fragments.length === 1) {
      return fragments.firstToken;
    }
    return undefined;
  }

  /**
   * Reverse a string representation into a Token object
   */
  public lookupMap(xs: { [key: string]: any }): IResolvable | undefined {
    const keys = Object.keys(xs);
    if (keys.length !== 1) {
      return undefined;
    }
    const str = TokenString.forMapToken(keys[0]);
    const fragments = str.split(this.lookupToken.bind(this));
    if (fragments.length === 1) {
      return fragments.firstToken;
    }
    return undefined;
  }

  /**
   * Split a string into literals and Tokens
   */
  public splitString(s: string): TokenizedStringFragments {
    const str = TokenString.forString(s);
    return str.split(this.lookupToken.bind(this));
  }

  /**
   * Reverse a number encoding into a Token, or undefined if the number wasn't a Token
   */
  public lookupNumberToken(x: number): IResolvable | undefined {
    const tokenIndex = extractTokenDouble(x, false);
    if (tokenIndex === undefined) {
      return undefined;
    }
    const t = this.numberTokenMap.get(tokenIndex);
    if (t === undefined) {
      throw unknownNumberTokenFound();
    }
    return t;
  }

  /**
   * Reverse a number encoding into a Token, or undefined if the number wasn't a Token
   */
  public lookupNumberList(xs: number[]): IResolvable | undefined {
    if (xs.length !== 1) {
      return undefined;
    }
    const tokenIndex = extractTokenDouble(xs[0], true);
    if (tokenIndex === undefined) {
      return undefined;
    }
    const t = this.numberTokenMap.get(tokenIndex);
    if (t === undefined) {
      throw unknownNumberTokenFound();
    }
    return t;
  }

  /**
   * Find a Token by key.
   *
   * This excludes the token markers.
   */
  public lookupToken(key: string): IResolvable {
    const token = this.stringTokenMap.get(key);
    if (!token) {
      throw unrecognizedTokenKey(key);
    }
    return token;
  }

  private registerStringKey(token: IResolvable, displayHint?: string): string {
    const counter = this.tokenCounter++;
    const representation = (displayHint || `TOKEN`).replace(
      new RegExp(`[^${VALID_KEY_CHARS}]`, "g"),
      "."
    );
    const key = `${representation}.${counter}`;
    this.stringTokenMap.set(key, token);
    return key;
  }

  private registerNumberKey(token: IResolvable, list: boolean): number {
    const counter = this.tokenCounter++;
    this.numberTokenMap.set(counter, token);
    return createTokenDouble(counter, list);
  }
}

/**
 * Get a cached value for an object, storing it on the object in a symbol
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function cachedValue<A extends object, B>(x: A, sym: symbol, prod: () => B) {
  let cached = (x as any)[sym as any];
  if (cached === undefined) {
    cached = prod();
    Object.defineProperty(x, sym, { value: cached });
  }
  return cached;
}
