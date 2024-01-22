// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { TerraformRemoteState } from "./terraform-remote-state";
import { TerraformElement } from "./terraform-element";
import { deepMerge } from "./util";

const BACKEND_SYMBOL = Symbol.for("cdktf/TerraformBackend");

// eslint-disable-next-line jsdoc/require-jsdoc
export abstract class TerraformBackend extends TerraformElement {
  constructor(scope: Construct, id: string, protected readonly name: string) {
    super(scope, id);
    Object.defineProperty(this, BACKEND_SYMBOL, { value: true });
  }

  public static isBackend(x: any): x is TerraformBackend {
    return x !== null && typeof x === "object" && BACKEND_SYMBOL in x;
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    return {};
  }

  /**
   * Creates a TerraformRemoteState resource that accesses this backend.
   */
  public abstract getRemoteStateDataSource(
    scope: Construct,
    name: string,
    fromStack: string
  ): TerraformRemoteState;

  public toHclTerraform(): any {
    const backendConfig = deepMerge(
      this.synthesizeHclAttributes(),
      this.rawOverrides
    );

    const variables = this.detectVariables(backendConfig);

    if (variables.length > 0) {
      throw new Error(
        [
          "Terraform does not support interpolated values within backends.",
          "Interpolations found in the following configuration backend attributes:",
          ...variables.map((v) => `\t${this.constructor.name}: "${v}"`),
        ].join("\n")
      );
    }
    return {
      terraform: {
        backend: {
          [this.name]: backendConfig,
        },
      },
    };
  }

  private detectVariables(obj: any, parentKey?: string): string[] {
    const hasVariableRegex = /var\.(\w+)/g;

    if (typeof obj === "string") {
      const matches = hasVariableRegex.test(obj);
      if (matches) {
        if (parentKey) {
          return [parentKey];
        }
      }

      return [];
    } else if (typeof obj === "object") {
      // References
      if (obj.value && typeof obj.value === "string") {
        return this.detectVariables(obj.value, parentKey);
      }

      const foundKeys = Object.keys(obj).filter((key) => {
        return (
          this.detectVariables(
            obj[key],
            parentKey ? `${parentKey}.${key}` : key
          ).length > 0
        );
      });

      return foundKeys.flat(0);
    } else if (Array.isArray(obj)) {
      const foundIndices = obj.filter((v, i) =>
        this.detectVariables(v, `${parentKey}[${i}]`)
      );

      return foundIndices.flat(0);
    } else {
      return [];
    }
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    const backendConfig = deepMerge(
      this.synthesizeAttributes(),
      this.rawOverrides
    );

    const variables = this.detectVariables(backendConfig);

    if (variables.length > 0) {
      throw new Error(
        [
          "Terraform does not support interpolated values within backends.",
          "Interpolations found in the following configuration backend attributes:",
          ...variables.map((v) => `\t${this.constructor.name}: "${v}"`),
        ].join("\n")
      );
    }

    return {
      terraform: {
        backend: {
          [this.name]: backendConfig,
        },
      },
    };
  }

  public toMetadata(): any {
    return {
      backend: this.name,
      ...(Object.keys(this.rawOverrides).length > 0
        ? { overrides: { backend: Object.keys(this.rawOverrides) } }
        : {}),
    };
  }
}
