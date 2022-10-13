// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { Token } from "./tokens";
import { TerraformElement } from "./terraform-element";
import { TerraformProvider } from "./terraform-provider";
import { keysToSnakeCase, deepMerge, processDynamicAttributes } from "./util";
import { ITerraformDependable } from "./terraform-dependable";
import { ref, dependable } from "./tfExpression";
import { IResolvable } from "./tokens/resolvable";
import { IInterpolatingParent } from "./terraform-addressable";
import { ITerraformIterator } from "./terraform-iterator";
import {
  SSHProvisionerConnection,
  WinrmProvisionerConnection,
} from "./terraform-provisioner";
import assert = require("assert");
import {
  FileProvisioner,
  LocalExecProvisioner,
  RemoteExecProvisioner,
} from "./terraform-provisioner";

export interface ITerraformResource {
  readonly terraformResourceType: string;
  readonly fqn: string;
  readonly friendlyUniqueId: string;

  dependsOn?: string[];
  count?: number;
  provider?: TerraformProvider;
  lifecycle?: TerraformResourceLifecycle;
  forEach?: ITerraformIterator;

  interpolationForAttribute(terraformAttribute: string): IResolvable;
}

export interface TerraformResourceLifecycle {
  readonly createBeforeDestroy?: boolean;
  readonly preventDestroy?: boolean;
  readonly ignoreChanges?: string[] | "all";
}

export interface TerraformMetaArguments {
  readonly dependsOn?: ITerraformDependable[];
  readonly count?: number;
  readonly provider?: TerraformProvider;
  readonly lifecycle?: TerraformResourceLifecycle;
  readonly forEach?: ITerraformIterator;
  readonly provisioners?: Array<
    FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner
  >;
  readonly connection?: SSHProvisionerConnection | WinrmProvisionerConnection;
}

export interface TerraformProviderGeneratorMetadata {
  readonly providerName: string;
  readonly providerVersionConstraint?: string;
  readonly providerVersion?: string;
}

export interface TerraformResourceConfig extends TerraformMetaArguments {
  readonly terraformResourceType: string;
  readonly terraformGeneratorMetadata?: TerraformProviderGeneratorMetadata;
}

// eslint-disable-next-line jsdoc/require-jsdoc
export class TerraformResource
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
  public connection?: SSHProvisionerConnection | WinrmProvisionerConnection;
  public provisioners?: Array<
    FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner
  >;

  constructor(scope: Construct, id: string, config: TerraformResourceConfig) {
    super(scope, id, config.terraformResourceType);

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
    this.provisioners = config.provisioners;
    this.connection = config.connection;
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
      `forEach and count are both set, but they are mutually exclusive. You can only use either of them. Check the resource at path: ${this.node.path}`
    );
    return {
      dependsOn: this.dependsOn,
      count: this.count,
      provider: this.provider?.fqn,
      lifecycle: this.lifecycle,
      forEach: this.forEach?._getForEachExpression(),
      connection: this.connection,
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
      {
        provisioner: this.provisioners?.map(({ type, ...props }) => ({
          [type]: keysToSnakeCase(props),
        })),
      },
      this.rawOverrides
    );

    attributes["//"] = {
      ...(attributes["//"] ?? {}),
      ...this.constructNodeMetadata,
    };

    return {
      resource: {
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
      `${this.terraformResourceType}.${this.friendlyUniqueId}.${terraformAttribute}`,
      this.cdktfStack
    );
  }
}
