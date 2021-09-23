// https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediaconnectFlowOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html#id DataAwsccMediaconnectFlowOutput#id}
  */
  readonly id: string;
}
export class DataAwsccMediaconnectFlowOutputEncryption extends cdktf.ComplexComputedList {

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}

export function dataAwsccMediaconnectFlowOutputEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowOutputEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export class DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment extends cdktf.ComplexComputedList {

  // vpc_interface_name - computed: true, optional: false, required: false
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
}

export function dataAwsccMediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(struct?: DataAwsccMediaconnectFlowOutputVpcInterfaceAttachment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_interface_name: cdktf.stringToTerraform(struct!.vpcInterfaceName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html awscc_mediaconnect_flow_output}
*/
export class DataAwsccMediaconnectFlowOutput extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_output";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_output.html awscc_mediaconnect_flow_output} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowOutputConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowOutputConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_output',
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

  // cidr_allow_list - computed: true, optional: false, required: false
  public get cidrAllowList() {
    return this.getListAttribute('cidr_allow_list');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
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

  // max_latency - computed: true, optional: false, required: false
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // output_arn - computed: true, optional: false, required: false
  public get outputArn() {
    return this.getStringAttribute('output_arn');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // smoothing_latency - computed: true, optional: false, required: false
  public get smoothingLatency() {
    return this.getNumberAttribute('smoothing_latency');
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // vpc_interface_attachment - computed: true, optional: false, required: false
  public get vpcInterfaceAttachment() {
    return this.interpolationForAttribute('vpc_interface_attachment') as any;
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
