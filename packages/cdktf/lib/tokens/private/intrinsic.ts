// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
// copied from https://github.com/aws/constructs/blob/e01e47f78ef1e9b600efcd23ff7705aa8d384017/lib/private/intrinsic.ts
import { argToIntrinsicMustBePainValue, intrinsicNewError } from "../../errors";
import { IResolvable, IResolveContext } from "../resolvable";
import { Token } from "../token";
import { captureStackTrace } from "./stack-trace";

/**
 * Token subclass that represents values intrinsic to the target document language
 *
 * WARNING: this class should not be externally exposed, but is currently visible
 * because of a limitation of jsii (https://github.com/aws/jsii/issues/524).
 *
 * This class will disappear in a future release and should not be used.
 *
 * @experimental
 * @internal
 */
export class Intrinsic implements IResolvable {
  /**
   * The captured stack trace which represents the location in which this token was created.
   */
  public readonly creationStack: string[];

  private readonly value: any;

  constructor(value: any) {
    if (isFunction(value)) {
      throw argToIntrinsicMustBePainValue(value);
    }

    this.creationStack = captureStackTrace();
    this.value = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public resolve(_context: IResolveContext) {
    return this.value;
  }

  /**
   * Convert an instance of this Token to a string
   *
   * This method will be called implicitly by language runtimes if the object
   * is embedded into a string. We treat it the same as an explicit
   * stringification.
   */
  public toString(): string {
    return Token.asString(this);
  }

  /**
   * Turn this Token into JSON
   *
   * Called automatically when JSON.stringify() is called on a Token.
   */
  public toJSON(): any {
    // We can't do the right work here because in case we contain a function, we
    // won't know the type of value that function represents (in the simplest
    // case, string or number), and we can't know that without an
    // IResolveContext to actually do the resolution, which we don't have.

    // We used to throw an error, but since JSON.stringify() is often used in
    // error messages to produce a readable representation of an object, if we
    // throw here we'll obfuscate that descriptive error with something worse.
    // So return a string representation that indicates this thing is a token
    // and needs resolving.
    return `<unresolved-token>`;
  }

  /**
   * Creates a throwable Error object that contains the token creation stack trace.
   * @param message Error message
   */
  protected newError(message: string): any {
    return intrinsicNewError(message, this.creationStack.join("\n    at "));
  }
}

/**
 * Returns true if x is a function
 */
function isFunction(x: any) {
  return typeof x === "function";
}
