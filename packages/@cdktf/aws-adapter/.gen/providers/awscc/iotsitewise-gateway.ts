// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotsitewiseGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of gateway capability summaries that each contain a namespace and status.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}
  */
  readonly gatewayCapabilitySummaries?: IotsitewiseGatewayGatewayCapabilitySummaries[];
  /**
  * A unique, friendly name for the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_name IotsitewiseGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * Contains a gateway's platform information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#gateway_platform IotsitewiseGateway#gateway_platform}
  */
  readonly gatewayPlatform: IotsitewiseGatewayGatewayPlatform;
  /**
  * A list of key-value pairs that contain metadata for the gateway.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#tags IotsitewiseGateway#tags}
  */
  readonly tags?: IotsitewiseGatewayTags[];
}
export interface IotsitewiseGatewayGatewayCapabilitySummaries {
  /**
  * The JSON document that defines the gateway capability's configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#capability_configuration IotsitewiseGateway#capability_configuration}
  */
  readonly capabilityConfiguration?: string;
  /**
  * The namespace of the capability configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#capability_namespace IotsitewiseGateway#capability_namespace}
  */
  readonly capabilityNamespace: string;
}

export function iotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct?: IotsitewiseGatewayGatewayCapabilitySummaries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capability_configuration: cdktf.stringToTerraform(struct!.capabilityConfiguration),
    capability_namespace: cdktf.stringToTerraform(struct!.capabilityNamespace),
  }
}

export interface IotsitewiseGatewayGatewayPlatformGreengrass {
  /**
  * The ARN of the Greengrass group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#group_arn IotsitewiseGateway#group_arn}
  */
  readonly groupArn: string;
}

export function iotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct?: IotsitewiseGatewayGatewayPlatformGreengrass): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_arn: cdktf.stringToTerraform(struct!.groupArn),
  }
}

export interface IotsitewiseGatewayGatewayPlatform {
  /**
  * Contains the ARN of AWS IoT Greengrass Group that the gateway runs on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#greengrass IotsitewiseGateway#greengrass}
  */
  readonly greengrass: IotsitewiseGatewayGatewayPlatformGreengrass;
}

export function iotsitewiseGatewayGatewayPlatformToTerraform(struct?: IotsitewiseGatewayGatewayPlatform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    greengrass: iotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct!.greengrass),
  }
}

export interface IotsitewiseGatewayTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#key IotsitewiseGateway#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html#value IotsitewiseGateway#value}
  */
  readonly value: string;
}

export function iotsitewiseGatewayTagsToTerraform(struct?: IotsitewiseGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway}
*/
export class IotsitewiseGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_gateway.html awscc_iotsitewise_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_gateway',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gatewayCapabilitySummaries = config.gatewayCapabilitySummaries;
    this._gatewayName = config.gatewayName;
    this._gatewayPlatform = config.gatewayPlatform;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_capability_summaries - computed: false, optional: true, required: false
  private _gatewayCapabilitySummaries?: IotsitewiseGatewayGatewayCapabilitySummaries[];
  public get gatewayCapabilitySummaries() {
    return this.interpolationForAttribute('gateway_capability_summaries') as any;
  }
  public set gatewayCapabilitySummaries(value: IotsitewiseGatewayGatewayCapabilitySummaries[] ) {
    this._gatewayCapabilitySummaries = value;
  }
  public resetGatewayCapabilitySummaries() {
    this._gatewayCapabilitySummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayCapabilitySummariesInput() {
    return this._gatewayCapabilitySummaries
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName: string;
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName
  }

  // gateway_platform - computed: false, optional: false, required: true
  private _gatewayPlatform: IotsitewiseGatewayGatewayPlatform;
  public get gatewayPlatform() {
    return this.interpolationForAttribute('gateway_platform') as any;
  }
  public set gatewayPlatform(value: IotsitewiseGatewayGatewayPlatform) {
    this._gatewayPlatform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPlatformInput() {
    return this._gatewayPlatform
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: IotsitewiseGatewayTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: IotsitewiseGatewayTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_capability_summaries: cdktf.listMapper(iotsitewiseGatewayGatewayCapabilitySummariesToTerraform)(this._gatewayCapabilitySummaries),
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      gateway_platform: iotsitewiseGatewayGatewayPlatformToTerraform(this._gatewayPlatform),
      tags: cdktf.listMapper(iotsitewiseGatewayTagsToTerraform)(this._tags),
    };
  }
}
