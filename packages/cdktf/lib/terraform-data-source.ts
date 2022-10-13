// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { Token } from "./tokens";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import {
  TerraformProviderGeneratorMetadata,
  TerraformResourceConfig,
  TerraformResourceLifecycle,
  ITerraformResource,
} from "./terraform-resource";
import { keysToSnakeCase, deepMerge, processDynamicAttributes } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { ref, dependable } from "./tfExpression";
import { IInterpolatingParent } from "./terraform-addressable";
import { ITerraformIterator } from "./terraform-iterator";
import assert = require("assert");

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformDataSource
  extends TerraformElement
  implements ITerraformResource, ITerraformDependable, IInterpolatingParent
{
  public readonly terraformResourceType: string;
  public readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;

  // TerraformMetaArguments

  public dependsOn?: string[];
  public count?: number;
  public provider?: TerraformProvider;
  public lifecycle?: TerraformResourceLifecycle;
  public forEach?: ITerraformIterator;

  constructor(scope: Construct, id: string, config: TerraformResourceConfig) {
    super(scope, id, `data.${config.terraformResourceType}`);

    this.terraformResourceType = config.terraformResourceType;
    this.terraformGeneratorMetadata = config.terraformGeneratorMetadata;
    if (Array.isArray(config.dependsOn)) {
      this.dependsOn = config.dependsOn.map((dependency) =>
        dependable(dependency)
      );
    }
    this.count = config.count;
    this.provider = config.provider;
    this.lifecycle = config.lifecycle;
    this.forEach = config.forEach;
  }

  public getStringAttribute(terraformAttribute: string) {
    return Token.asString(this.interpolationForAttribute(terraformAttribute));
  }

  public getNumberAttribute(terraformAttribute: string) {
    return Token.asNumber(this.interpolationForAttribute(terraformAttribute));
  }

  public getListAttribute(terraformAttribute: string) {
    return Token.asList(this.interpolationForAttribute(terraformAttribute));
  }

  public getBooleanAttribute(terraformAttribute: string) {
    return this.interpolationForAttribute(terraformAttribute);
  }

  public getNumberListAttribute(terraformAttribute: string) {
    return Token.asNumberList(
      this.interpolationForAttribute(terraformAttribute)
    );
  }

  public getStringMapAttribute(terraformAttribute: string) {
    return Token.asStringMap(
      this.interpolationForAttribute(terraformAttribute)
    );
  }

  public getNumberMapAttribute(terraformAttribute: string) {
    return Token.asNumberMap(
      this.interpolationForAttribute(terraformAttribute)
    );
  }

  public getBooleanMapAttribute(terraformAttribute: string) {
    return Token.asBooleanMap(
      this.interpolationForAttribute(terraformAttribute)
    );
  }

  public getAnyMapAttribute(terraformAttribute: string) {
    return Token.asAnyMap(this.interpolationForAttribute(terraformAttribute));
  }

  public get terraformMetaArguments(): { [name: string]: any } {
    assert(
      !this.forEach || typeof this.count === "undefined",
      `forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the data source at path: ${this.node.path}`
    );
    return {
      dependsOn: this.dependsOn,
      count: this.count,
      provider: this.provider?.fqn,
      lifecycle: this.lifecycle,
      forEach: this.forEach?._getForEachExpression(),
    };
  }

  // jsii can't handle abstract classes?
  protected synthesizeAttributes(): { [name: string]: any } {
    return {};
  }

  /**
   * Adds this resource to the terraform JSON output.
   */
  public toTerraform(): any {
    const attributes = deepMerge(
      processDynamicAttributes(this.synthesizeAttributes()),
      keysToSnakeCase(this.terraformMetaArguments),
      this.rawOverrides
    );

    attributes["//"] = this.constructNodeMetadata;

    return {
      data: {
        [this.terraformResourceType]: {
          [this.friendlyUniqueId]: attributes,
        },
      },
    };
  }
  public toMetadata(): any {
    if (!Object.keys(this.rawOverrides).length) {
      return {};
    }

    return {
      overrides: {
        [this.terraformResourceType]: Object.keys(this.rawOverrides),
      },
    };
  }

  public interpolationForAttribute(terraformAttribute: string) {
    return ref(
      `data.${this.terraformResourceType}.${this.friendlyUniqueId}.${terraformAttribute}`,
      this.cdktfStack
    );
  }
}
