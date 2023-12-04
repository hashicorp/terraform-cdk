// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { ok } from "assert";
import { Construct } from "constructs";
import { Token } from ".";
import { TerraformStack } from "./terraform-stack";
import { ref } from "./tfExpression";
import { unresolvedToken } from "./errors";

const TERRAFORM_ELEMENT_SYMBOL = Symbol.for("cdktf/TerraformElement");

export interface TerraformElementMetadata {
  readonly path: string;
  readonly uniqueId: string;
  readonly stackTrace: string[];
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformElement extends Construct {
  protected readonly rawOverrides: any = {};

  /**
   * An explicit logical ID provided by `overrideLogicalId`.
   */
  private _logicalIdOverride?: string;

  /**
   * Type of this element, used for fqn.
   * This is undefined for
   * - elements not referable, like TerraformOutput
   * - elements using their own fqn implementation, like TerraformProvider
   */
  private readonly _elementType?: string;

  constructor(scope: Construct, id: string, elementType?: string) {
    super(scope, id);
    Object.defineProperty(this, TERRAFORM_ELEMENT_SYMBOL, { value: true });
    this._elementType = elementType;

    if (Token.isUnresolved(id)) {
      throw unresolvedToken();
    }

    this.node.addMetadata("stacktrace", "trace");
  }

  public get cdktfStack(): TerraformStack {
    return TerraformStack.of(this);
  }

  public static isTerraformElement(x: any): x is TerraformElement {
    return x !== null && typeof x === "object" && TERRAFORM_ELEMENT_SYMBOL in x;
  }

  public toTerraform(): any {
    return {};
  }

  public toMetadata(): any {
    return {};
  }

  private _fqnToken?: string;

  public get fqn() {
    if (!this._fqnToken) {
      ok(!!this._elementType, "Element type not set");
      this._fqnToken = Token.asString(
        ref(`${this._elementType}.${this.friendlyUniqueId}`, this.cdktfStack)
      );
    }
    return this._fqnToken;
  }

  private _friendlyUniqueId?: string;

  public get friendlyUniqueId() {
    if (!this._friendlyUniqueId) {
      if (this._logicalIdOverride) {
        this._friendlyUniqueId = this._logicalIdOverride;
      } else {
        this._friendlyUniqueId = this.cdktfStack.getLogicalId(this);
      }
    }
    return this._friendlyUniqueId;
  }
  /**
   * Overrides the auto-generated logical ID with a specific ID.
   * @param newLogicalId The new logical ID to use for this stack element.
   */
  public overrideLogicalId(newLogicalId: string) {
    ok(
      !this._fqnToken,
      "Logical ID may not be overridden once .fqn has been requested. Make sure to override the id before passing the construct to other constructs."
    );
    this._logicalIdOverride = newLogicalId;
  }

  /**
   * Resets a previously passed logical Id to use the auto-generated logical id again
   */
  public resetOverrideLogicalId() {
    ok(
      !this._fqnToken,
      "Logical ID may not be overridden once .fqn has been requested. You can only reset the override before you pass the construct to other constructs."
    );
    this._logicalIdOverride = undefined;
  }

  public addOverride(path: string, value: any) {
    const parts = path.split(".");
    let curr: any = this.rawOverrides;

    while (parts.length > 1) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const key = parts.shift()!;

      // if we can't recurse further or the previous value is not an
      // object overwrite it with an object.
      const isObject =
        curr[key] != null &&
        typeof curr[key] === "object" &&
        !Array.isArray(curr[key]);
      if (!isObject) {
        curr[key] = {};
      }

      curr = curr[key];
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastKey = parts.shift()!;
    curr[lastKey] = value;
  }

  protected get constructNodeMetadata(): { [key: string]: any } {
    return {
      metadata: {
        path: this.node.path,
        uniqueId: this.friendlyUniqueId,
        stackTrace: this.node.metadata.find((e) => e.type === "stacktrace")
          ?.trace,
      } as TerraformElementMetadata,
    };
  }
}
