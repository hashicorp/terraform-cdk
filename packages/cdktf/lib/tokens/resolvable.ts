// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// Copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/resolvable.ts
import { IConstruct } from "constructs";
import { TokenString } from "./private/encoding";
import { TokenMap } from "./private/token-map";
import { TokenizedStringFragments } from "./string-fragments";

/**
 * Current resolution context for tokens
 */
export interface IResolveContext {
  /**
   * The scope from which resolution has been initiated
   */
  readonly scope: IConstruct;

  /**
   * True when we are still preparing, false if we're rendering the final output
   */
  readonly preparing: boolean;

  /**
   * True when ${} should be ommitted (because already inside them), false otherwise
   */
  suppressBraces?: boolean;

  /**
   * True when ${} should not be parsed, and treated as literals
   */
  ignoreEscapes?: boolean;

  /**
   * True when ${} should not be included in the string to be resolved, outputs a warning.
   * Default: false
   */
  warnEscapes?: boolean;

  /**
   * TerraformIterators can be passed for block attributes and normal list attributes
   * both require different handling when the iterable variable is accessed
   * e.g. a dynamic block needs each.key while a for expression just needs key
   */
  iteratorContext?: "DYNAMIC_BLOCK" | "FOR_EXPRESSION";

  /**
   * Resolve an inner object
   */
  resolve(x: any): any;

  /**
   * Use this postprocessor after the entire token structure has been resolved
   */
  registerPostProcessor(postProcessor: IPostProcessor): void;
}

/**
 * Interface for values that can be resolvable later
 *
 * Tokens are special objects that participate in synthesis.
 */
export interface IResolvable {
  /**
   * The creation stack of this resolvable which will be appended to errors
   * thrown during resolution.
   *
   * If this returns an empty array the stack will not be attached.
   */
  readonly creationStack: string[];

  /**
   * Produce the Token's value at resolution time
   */
  resolve(context: IResolveContext): any;

  /**
   * Return a string representation of this resolvable object.
   *
   * Returns a reversible string representation.
   */
  toString(): string;
}

/**
 * A Token that can post-process the complete resolved value, after resolve() has recursed over it
 */
export interface IPostProcessor {
  /**
   * Process the completely resolved value, after full recursion/resolution has happened
   */
  postProcess(input: any, context: IResolveContext): any;
}

/**
 * How to resolve tokens
 */
export interface ITokenResolver {
  /**
   * Resolve a single token
   */
  resolveToken(
    t: IResolvable,
    context: IResolveContext,
    postProcessor: IPostProcessor
  ): any;

  /**
   * Resolve a string with at least one stringified token in it
   *
   * (May use concatenation)
   */
  resolveString(s: TokenizedStringFragments, context: IResolveContext): any;

  /**
   * Resolve a tokenized list
   */
  resolveList(l: string[], context: IResolveContext): any;

  /**
   * Resolve a tokenized number list
   */
  resolveNumberList(l: number[], context: IResolveContext): any;

  /**
   * Resolve a tokenized map
   */
  resolveMap(m: { [key: string]: any }, context: IResolveContext): any;
}

/**
 * Function used to concatenate symbols in the target document language
 *
 * Interface so it could potentially be exposed over jsii.
 *
 * @experimental
 */
export interface IFragmentConcatenator {
  /**
   * Join the fragment on the left and on the right
   */
  join(left: any | undefined, right: any | undefined): any;
}

/**
 * Converts all fragments to strings and concats those
 *
 * Drops 'undefined's.
 */
export class StringConcat implements IFragmentConcatenator {
  /**
   * Concatenates string fragments
   */
  public join(left: any | undefined, right: any | undefined): any {
    if (left === undefined) {
      return right !== undefined ? `${right}` : undefined;
    }
    if (right === undefined) {
      return `${left}`;
    }
    return `${left}${right}`;
  }
}

/**
 * Default resolver implementation
 *
 * @experimental
 */
export class DefaultTokenResolver implements ITokenResolver {
  /**
   * Resolves tokens
   */
  constructor(private readonly concat: IFragmentConcatenator) {}

  /**
   * Default Token resolution
   *
   * Resolve the Token, recurse into whatever it returns,
   * then finally post-process it.
   */
  public resolveToken(
    t: IResolvable,
    context: IResolveContext,
    postProcessor: IPostProcessor
  ) {
    try {
      let resolved = t.resolve(context);

      // The token might have returned more values that need resolving, recurse
      resolved = context.resolve(resolved);
      resolved = postProcessor.postProcess(resolved, context);
      return resolved;
    } catch (e) {
      const err = e as any;
      let message = `Resolution error: ${err.message}.`;
      if (t.creationStack && t.creationStack.length > 0) {
        message += `\nObject creation stack:\n  at ${t.creationStack.join(
          "\n  at "
        )}`;
      }

      err.message = message;
      throw err;
    }
  }

  /**
   * Resolve string fragments to Tokens
   */
  public resolveString(
    fragments: TokenizedStringFragments,
    context: IResolveContext
  ) {
    return fragments.mapTokens(context).join(this.concat);
  }

  /**
   * Resolves a list of string
   */
  public resolveList(xs: string[], context: IResolveContext) {
    // Must be a singleton list token, because concatenation is not allowed.
    if (xs.length !== 1) {
      throw new Error(
        `Cannot add elements to list token, got: ${xs}. You tried to add a value to a referenced list, instead use Fn.concat([yourReferencedList, ["my", "new", "items"]]).`
      );
    }

    const str = TokenString.forListToken(xs[0]);
    const tokenMap = TokenMap.instance();
    const fragments = str.split(tokenMap.lookupToken.bind(tokenMap));
    if (fragments.length !== 1) {
      throw new Error(
        `Cannot concatenate strings in a tokenized string array, got: ${xs[0]}`
      );
    }

    return fragments.mapTokens(context).firstValue;
  }

  /**
   * Resolves a list of numbers
   */
  public resolveNumberList(xs: number[], context: IResolveContext) {
    // Must be a singleton list token, because concatenation is not allowed.
    if (xs.length !== 1) {
      throw new Error(
        `Cannot add elements to list token, got: ${xs}. You tried to add a value to a referenced list, instead use Fn.concat([yourReferencedList, [42, 43, 44]]).`
      );
    }

    const token = TokenMap.instance().lookupNumberList(xs);
    if (token === undefined) {
      return xs;
    }
    return context.resolve(token);
  }

  /**
   * Resolves a map token
   */
  public resolveMap(xs: { [key: string]: any }, context: IResolveContext) {
    const keys = Object.keys(xs);
    if (keys.length !== 1) {
      throw new Error(
        `Cannot add elements to map token, got: ${JSON.stringify(
          xs
        )}. You tried to add a value to a referenced map, instead use Fn.mergeMaps([yourReferencedMap, { your: 'value' }]).`
      );
    }

    const str = TokenString.forMapToken(keys[0]);
    const tokenMap = TokenMap.instance();
    const fragments = str.split(tokenMap.lookupToken.bind(tokenMap));
    if (fragments.length !== 1) {
      throw new Error(
        `Cannot concatenate strings in a tokenized map, got: ${xs[0]}`
      );
    }

    return fragments.mapTokens(context).firstValue;
  }
}
