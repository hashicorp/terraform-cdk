// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/string-fragments.ts
import {
  IFragmentConcatenator,
  IResolvable,
  IResolveContext,
} from "./resolvable";
import { Tokenization } from "./token";

/**
 * Result of the split of a string with Tokens
 *
 * Either a literal part of the string, or an unresolved Token.
 */
type LiteralFragment = { type: "literal"; lit: any };
type TokenFragment = { type: "token"; token: IResolvable };
type IntrinsicFragment = { type: "intrinsic"; value: any };
type EscapeFragment = { type: "escape"; kind: "open" | "close" };
type Fragment =
  | LiteralFragment
  | TokenFragment
  | IntrinsicFragment
  | EscapeFragment;

/**
 * Fragments of a concatenated string containing stringified Tokens
 * @experimental
 */
export class TokenizedStringFragments {
  /**
   * Fragments in the tokenized string
   */
  private readonly fragments = new Array<Fragment>();

  /**
   * Returns the first token.
   */
  public get firstToken(): IResolvable | undefined {
    const first = this.fragments[0];
    if (first.type === "token") {
      return first.token;
    }
    return undefined;
  }

  /**
   * Returns the first value.
   */
  public get firstValue(): any {
    return fragmentValue(this.fragments[0]);
  }

  /**
   * Returns the number of fragments.
   */
  public get length() {
    return this.fragments.length;
  }

  /**
   * Adds a literal fragment
   * @param lit the literal to add
   */
  public addLiteral(lit: any) {
    this.fragments.push({ type: "literal", lit });
  }

  /**
   * Adds a token fragment
   * @param token the token to add
   */
  public addToken(token: IResolvable) {
    this.fragments.push({ type: "token", token });
  }

  /**
   * Adds an intrinsic fragment
   * @param value the intrinsic value to add
   */
  public addIntrinsic(value: any) {
    this.fragments.push({ type: "intrinsic", value });
  }

  public addEscape(kind: "open" | "close") {
    this.fragments.push({ type: "escape", kind });
  }

  public concat(other: TokenizedStringFragments): void {
    this.fragments.push(...other.fragments);
  }

  /**
   * Return all Tokens from this string
   */
  public get tokens(): IResolvable[] {
    const ret = new Array<IResolvable>();
    for (const f of this.fragments) {
      if (f.type === "token") {
        ret.push(f.token);
      }
    }
    return ret;
  }

  /**
   * Return all literals from this string
   */
  public get literals(): IResolvable[] {
    const ret = new Array<IResolvable>();
    for (const f of this.fragments) {
      if (f.type === "literal") {
        ret.push(f.lit);
      }
    }
    return ret;
  }

  /**
   * Return all intrinsic fragments from this string
   */
  public get intrinsic(): IResolvable[] {
    const ret = new Array<IResolvable>();
    for (const f of this.fragments) {
      if (f.type === "intrinsic") {
        ret.push(f.value);
      }
    }
    return ret;
  }

  /**
   * Return all escape fragments from this string
   */
  public get escapes(): IResolvable[] {
    const ret = new Array<IResolvable>();
    for (const f of this.fragments) {
      if (f.type === "escape") {
        if (f.kind === "open") ret.push("${" as any);
        else ret.push("}" as any);
      }
    }
    return ret;
  }

  /**
   * Apply a transformation function to all tokens in the string
   */
  public mapTokens(context: IResolveContext): TokenizedStringFragments {
    const ret = new TokenizedStringFragments();
    const originalSupressBraces = context.suppressBraces;

    for (const f of this.fragments) {
      switch (f.type) {
        case "literal":
          ret.addLiteral(f.lit);
          break;
        case "escape":
          if (context.ignoreEscapes) {
            ret.addLiteral(f.kind === "open" ? "${" : "}");
            break;
          }

          ret.addEscape(f.kind);
          if (f.kind === "open") {
            context.suppressBraces = true;
          } else {
            context.suppressBraces = originalSupressBraces;
          }
          break;
        case "token":
          // eslint-disable-next-line no-case-declarations
          const mapped = context.resolve(f.token);
          if (Tokenization.isResolvable(mapped)) {
            ret.addToken(mapped);
          } else {
            ret.addIntrinsic(mapped);
          }
          break;
        case "intrinsic":
          ret.addIntrinsic(f.value);
          break;
      }
    }

    return ret;
  }

  /**
   * Combine the string fragments using the given joiner.
   *
   * If there are any
   */
  public join(concat: IFragmentConcatenator): any {
    if (this.fragments.length === 0) {
      return concat.join(undefined, undefined);
    }
    if (this.fragments.length === 1) {
      return this.firstValue;
    }

    const values = this.fragments.map(fragmentValue);

    while (values.length > 1) {
      const prefix = values.splice(0, 2);
      values.splice(0, 0, concat.join(prefix[0], prefix[1]));
    }

    return values[0];
  }
}

/**
 * Interface to apply operation to tokens in a string
 *
 * Interface so it can be exported via jsii.
 */
export interface ITokenMapper {
  /**
   * Replace a single token
   */
  mapToken(t: IResolvable): any;
}

/**
 * Resolve the value from a single fragment
 *
 * If the fragment is a Token, return the string encoding of the Token.
 */
function fragmentValue(fragment: Fragment): any {
  switch (fragment.type) {
    case "literal":
      return fragment.lit;
    case "escape":
      return fragment.kind === "open" ? "${" : "}";
    case "token":
      return fragment.token.toString();
    case "intrinsic":
      return fragment.value;
  }
}
