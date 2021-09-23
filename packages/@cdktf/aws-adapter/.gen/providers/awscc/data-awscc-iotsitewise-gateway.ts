// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewiseGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html#id DataAwsccIotsitewiseGateway#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries extends cdktf.ComplexComputedList {

  // capability_configuration - computed: true, optional: false, required: false
  public get capabilityConfiguration() {
    return this.getStringAttribute('capability_configuration');
  }

  // capability_namespace - computed: true, optional: false, required: false
  public get capabilityNamespace() {
    return this.getStringAttribute('capability_namespace');
  }
}

export function dataAwsccIotsitewiseGatewayGatewayCapabilitySummariesToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayCapabilitySummaries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capability_configuration: cdktf.stringToTerraform(struct!.capabilityConfiguration),
    capability_namespace: cdktf.stringToTerraform(struct!.capabilityNamespace),
  }
}

export class DataAwsccIotsitewiseGatewayGatewayPlatformGreengrass extends cdktf.ComplexComputedList {

  // group_arn - computed: true, optional: false, required: false
  public get groupArn() {
    return this.getStringAttribute('group_arn');
  }
}

export function dataAwsccIotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayPlatformGreengrass): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    group_arn: cdktf.stringToTerraform(struct!.groupArn),
  }
}

export class DataAwsccIotsitewiseGatewayGatewayPlatform extends cdktf.ComplexComputedList {

  // greengrass - computed: true, optional: false, required: false
  public get greengrass() {
    return this.interpolationForAttribute('greengrass') as any;
  }
}

export function dataAwsccIotsitewiseGatewayGatewayPlatformToTerraform(struct?: DataAwsccIotsitewiseGatewayGatewayPlatform): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    greengrass: dataAwsccIotsitewiseGatewayGatewayPlatformGreengrassToTerraform(struct!.greengrass),
  }
}

export class DataAwsccIotsitewiseGatewayTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccIotsitewiseGatewayTagsToTerraform(struct?: DataAwsccIotsitewiseGatewayTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html awscc_iotsitewise_gateway}
*/
export class DataAwsccIotsitewiseGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_gateway.html awscc_iotsitewise_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseGatewayConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_capability_summaries - computed: true, optional: false, required: false
  public get gatewayCapabilitySummaries() {
    return this.interpolationForAttribute('gateway_capability_summaries') as any;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_name - computed: true, optional: false, required: false
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }

  // gateway_platform - computed: true, optional: false, required: false
  public get gatewayPlatform() {
    return this.interpolationForAttribute('gateway_platform') as any;
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
