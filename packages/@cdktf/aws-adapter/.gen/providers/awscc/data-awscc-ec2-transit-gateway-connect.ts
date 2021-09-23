// https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEc2TransitGatewayConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html#id DataAwsccEc2TransitGatewayConnect#id}
  */
  readonly id: string;
}
export class DataAwsccEc2TransitGatewayConnectOptions extends cdktf.ComplexComputedList {

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export function dataAwsccEc2TransitGatewayConnectOptionsToTerraform(struct?: DataAwsccEc2TransitGatewayConnectOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class DataAwsccEc2TransitGatewayConnectTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccEc2TransitGatewayConnectTagsToTerraform(struct?: DataAwsccEc2TransitGatewayConnectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect}
*/
export class DataAwsccEc2TransitGatewayConnect extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ec2_transit_gateway_connect";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ec2_transit_gateway_connect.html awscc_ec2_transit_gateway_connect} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEc2TransitGatewayConnectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEc2TransitGatewayConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_transit_gateway_connect',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: true, optional: false, required: false
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }

  // transport_transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transportTransitGatewayAttachmentId() {
    return this.getStringAttribute('transport_transit_gateway_attachment_id');
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
