// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
//  Originally from aws-cdk v2 because with constructs v10 Aspects where moved to the AWS CDK
//  https://github.com/aws/aws-cdk/blob/dcae3eead0dbf9acb1ed80ba95bb104c64cb1bd7/packages/@aws-cdk/core/lib/aspect.ts
import { IConstruct } from "constructs";

const ASPECTS_SYMBOL = Symbol("cdktf-aspects");

/**
 * Represents an Aspect
 */
export interface IAspect {
  /**
   * All aspects can visit an IConstruct
   */
  visit(node: IConstruct): void;
}

/**
 * Aspects can be applied to CDK tree scopes and can operate on the tree before
 * synthesis.
 */
export class Aspects {
  /**
   * Returns the `Aspects` object associated with a construct scope.
   * @param scope The scope for which these aspects will apply.
   */
  public static of(scope: IConstruct): Aspects {
    let aspects = (scope as any)[ASPECTS_SYMBOL];
    if (!aspects) {
      aspects = new Aspects();

      Object.defineProperty(scope, ASPECTS_SYMBOL, {
        value: aspects,
        configurable: false,
        enumerable: false,
      });
    }
    return aspects;
  }

  private readonly _aspects: IAspect[];

  private constructor() {
    this._aspects = [];
  }

  /**
   * Adds an aspect to apply this scope before synthesis.
   * @param aspect The aspect to add.
   */
  public add(aspect: IAspect) {
    this._aspects.push(aspect);
  }

  /**
   * The list of aspects which were directly applied on this scope.
   */
  public get all(): IAspect[] {
    return [...this._aspects];
  }
}
