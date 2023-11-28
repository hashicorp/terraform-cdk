// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/private/resolve.ts
import { IConstruct } from "constructs";
import {
  DefaultTokenResolver,
  IPostProcessor,
  IResolvable,
  IResolveContext,
  ITokenResolver,
  StringConcat,
} from "../resolvable";
import { TokenizedStringFragments } from "../string-fragments";
import {
  containsStringListTokenElement,
  TokenString,
  unresolved,
  containsNumberListTokenElement,
  containsMapToken,
} from "./encoding";
import { TokenMap } from "./token-map";
import { Token } from "../token";

const LIST_ERROR_EXPLANATION = `In CDKTF we represent lists where the value is only known at runtime (versus compile / synth time) as
Arrays with a single element that is a string token, e.g. ["Token.1"]. This is because at compile time we
don't know the length of the list, so far CDKTF did not invoke Terraform to communicate with the cloud provider.
This is done at a later stage on the synthesized static JSON file.
As we don't know the length of the list not the content we can not differentiate if the list was accessed at the first index,
the last index, or as part of a loop. To avoid this ambiguity:

- If you want to access a singular item use 'Fn.element(list, 0)' (not 'list[0]')
- If you want to loop over the list use 'TerraformIterator.fromList(list)' (not 'for (const item of list)' or 'list.forEach(item => ...)')

To learn more about tokens see https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
To learn more about iterators see https://developer.hashicorp.com/terraform/cdktf/concepts/iterators`;

const MAP_ERROR_EXPLANATION = `In CDKTF we represent maps where the value is only known at runtime (versus compile / synth time) as
objects with a single key-value pair where the value is a string token, e.g. { "&{TfToken[Token.1]}": "String Map Token Value" }. This is because at compile time we
don't know the contents of the map, so far CDKTF did not invoke Terraform to communicate with the cloud provider.
This is done at a later stage on the synthesized static JSON file.
As we don't know the contents of the map we do not know which key was accessed, or if the map was accessed as part of a loop.
To avoid this ambiguity:

- If you want to access a singular item use 'Fn.lookup(map, key)' (not 'map[key]')
- If you want to loop over the map use 'TerraformIterator.fromMap(map)' (not 'for (const [key, value] of map)' or 'Object.entries(map).forEach((key, value) => ...)')

To learn more about tokens see https://developer.hashicorp.com/terraform/cdktf/concepts/tokens
To learn more about iterators see https://developer.hashicorp.com/terraform/cdktf/concepts/iterators`;

// This file should not be exported to consumers, resolving should happen through Construct.resolve()

const tokenMap = TokenMap.instance();

/**
 * Options to the resolve() operation
 *
 * NOT the same as the ResolveContext; ResolveContext is exposed to Token
 * implementors and resolution hooks, whereas this struct is just to bundle
 * a number of things that would otherwise be arguments to resolve() in a
 * readable way.
 */
export interface IResolveOptions {
  scope: IConstruct;
  preparing: boolean;
  resolver: ITokenResolver;
  prefix?: string[];
  previousContext?: IResolveContext;
}

/**
 * Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.
 * Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.
 *
 * @param obj The object to resolve.
 * @param prefix Prefix key path components for diagnostics.
 */
export function resolve(obj: any, options: IResolveOptions): any {
  const prefix = options.prefix || [];
  const pathName = "/" + prefix.join("/");

  /**
   * Make a new resolution context
   */
  function makeContext(appendPath?: string): [IResolveContext, IPostProcessor] {
    const newPrefix =
      appendPath !== undefined ? prefix.concat([appendPath]) : options.prefix;

    let postProcessor: IPostProcessor | undefined;

    const context: IResolveContext = {
      preparing: options.preparing,
      scope: options.scope,
      suppressBraces: options.previousContext?.suppressBraces,
      ignoreEscapes: options.previousContext?.ignoreEscapes,
      warnEscapes: options.previousContext?.warnEscapes,
      iteratorContext: options.previousContext?.iteratorContext,
      registerPostProcessor(pp) {
        postProcessor = pp;
      },
      resolve(x: any) {
        return resolve(x, {
          ...options,
          prefix: newPrefix,
          previousContext: context,
        });
      },
    };

    return [
      context,
      {
        postProcess(x) {
          return postProcessor ? postProcessor.postProcess(x, context) : x;
        },
      },
    ];
  }

  // protect against cyclic references by limiting depth.
  if (prefix.length > 200) {
    throw new Error(`Unable to resolve object tree with circular reference at '${pathName}'.
This error is thrown if the depth of the object tree is greater than 200 to protect against cyclic references.
To resolve this inspect the construct creating the cyclic reference (most likely in '${pathName}') and make sure
it does not create an infinite construct nesting.`);
  }

  //
  // undefined
  //

  if (typeof obj === "undefined") {
    return undefined;
  }

  //
  // null
  //

  if (obj === null) {
    return null;
  }

  //
  // functions - not supported (only tokens are supported)
  //

  if (typeof obj === "function") {
    throw new Error(
      `Trying to resolve a non-data object (e.g. a function) at '${pathName}': ${obj}. Only tokens are supported for lazy evaluation.
If you want to have a lazily computed value, please use the Lazy class, e.g. Lazy.stringValue({ produce: () => "Hello World" })`
    );
  }

  //
  // string - potentially replace all stringified Tokens
  //
  if (typeof obj === "string") {
    // If this is a "list element" Token, it should never occur by itself in string context
    if (TokenString.forListToken(obj).test()) {
      throw new Error(`Found an encoded list token string in a scalar string context.
${LIST_ERROR_EXPLANATION}`);
    }

    if (
      obj === Token.STRING_MAP_TOKEN_VALUE ||
      obj === Token.ANY_MAP_TOKEN_VALUE
    ) {
      throw new Error(
        `Found an encoded map token in a scalar string context.
${MAP_ERROR_EXPLANATION}`
      );
    }

    let str: string = obj;

    const context = makeContext()[0];
    const tokenStr = TokenString.forString(
      str,
      !context.ignoreEscapes,
      context.warnEscapes
    );
    if (tokenStr.test()) {
      const fragments = tokenStr.split(tokenMap.lookupToken.bind(tokenMap));
      str = options.resolver.resolveString(fragments, makeContext()[0]);
    }

    // replace concatenated token numbers
    const tokenNumberStr = TokenString.forNumbers(str);
    if (tokenNumberStr.test()) {
      const fragments = tokenNumberStr.split((id) => {
        return TokenMap.instance().lookupNumberToken(parseFloat(id));
      });

      const context = makeContext()[0];
      str = fragments.mapTokens(context).join(new StringConcat());
    }

    return str;
  }

  //
  // number - potentially decode Tokenized number
  //
  if (typeof obj === "number") {
    if (obj === Token.NUMBER_MAP_TOKEN_VALUE) {
      throw new Error(
        `Found an encoded map token in a scalar number context.
${MAP_ERROR_EXPLANATION}`
      );
    }

    return resolveNumberToken(obj, makeContext()[0]);
  }

  //
  // primitives - as-is
  //

  // eslint-disable-next-line no-instanceof/no-instanceof
  if (typeof obj !== "object" || obj instanceof Date) {
    return obj;
  }

  //
  // arrays - resolve all values, remove undefined and remove empty arrays
  //

  if (Array.isArray(obj)) {
    if (containsStringListTokenElement(obj)) {
      return options.resolver.resolveList(obj, makeContext()[0]);
    }

    if (containsNumberListTokenElement(obj)) {
      return options.resolver.resolveNumberList(obj, makeContext()[0]);
    }

    const arr = obj
      .map((x, i) => makeContext(`${i}`)[0].resolve(x))
      .filter((x) => typeof x !== "undefined");

    return arr;
  }

  // check for tokenized map
  if (containsMapToken(obj)) {
    return options.resolver.resolveMap(obj, makeContext()[0]);
  }

  //
  // tokens - invoke 'resolve' and continue to resolve recursively
  //

  if (unresolved(obj)) {
    const [context, postProcessor] = makeContext();
    return options.resolver.resolveToken(obj, context, postProcessor);
  }

  //
  // objects - deep-resolve all values
  //

  // Must not be a Construct at this point, otherwise you probably made a typo
  // mistake somewhere and resolve will get into an infinite loop recursing into
  // child.parent <---> parent.children
  if (isConstruct(obj)) {
    throw new Error(`Trying to resolve() a Construct at '${pathName}'. 
This often means that there is an unintended cyclic dependency in your construct tree.
This leads to the resolution being stuck in an infinite loop and will eventually fail.`);
  }

  const result: any = {};
  for (const key of Object.keys(obj)) {
    const resolvedKey = makeContext()[0].resolve(key);
    if (typeof resolvedKey !== "string") {
      throw new Error(
        `At "${pathName}" the key "${key}" is used in a map so it must resolve to a string, but it resolves to a ${typeof resolvedKey}: ${JSON.stringify(
          resolvedKey
        )}`
      );
    }

    const value = makeContext(key)[0].resolve(obj[key]);

    // skip undefined
    if (typeof value === "undefined") {
      continue;
    }

    result[resolvedKey] = value;
  }

  return result;
}

/**
 * Find all Tokens that are used in the given structure
 */
export function findTokens(scope: IConstruct, fn: () => any): IResolvable[] {
  const resolver = new RememberingTokenResolver(new StringConcat());

  resolve(fn(), { scope, prefix: [], resolver, preparing: true });

  return resolver.tokens;
}

/**
 * Remember all Tokens encountered while resolving
 */
export class RememberingTokenResolver extends DefaultTokenResolver {
  private readonly tokensSeen = new Set<IResolvable>();

  public resolveToken(
    t: IResolvable,
    context: IResolveContext,
    postProcessor: IPostProcessor
  ) {
    this.tokensSeen.add(t);
    return super.resolveToken(t, context, postProcessor);
  }

  public resolveString(s: TokenizedStringFragments, context: IResolveContext) {
    const ret = super.resolveString(s, context);
    return ret;
  }

  public get tokens(): IResolvable[] {
    return Array.from(this.tokensSeen);
  }
}

/**
 * Determine whether an object is a Construct
 *
 * Not in 'construct.ts' because that would lead to a dependency cycle via 'uniqueid.ts',
 * and this is a best-effort protection against a common programming mistake anyway.
 */
function isConstruct(x: any): boolean {
  return x._children !== undefined && x._metadata !== undefined;
}

/**
 * Resolves a number token
 */
function resolveNumberToken(x: number, context: IResolveContext): any {
  const token = TokenMap.instance().lookupNumberToken(x);
  if (token === undefined) {
    return x;
  }
  return context.resolve(token);
}
