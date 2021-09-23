// https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaconnectFlowOutputConfig extends cdktf.TerraformMetaArguments {
  /**
  * The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#cidr_allow_list MediaconnectFlowOutput#cidr_allow_list}
  */
  readonly cidrAllowList?: string[];
  /**
  * A description of the output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#description MediaconnectFlowOutput#description}
  */
  readonly description?: string;
  /**
  * The address where you want to send the output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#destination MediaconnectFlowOutput#destination}
  */
  readonly destination?: string;
  /**
  * Information about the encryption of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#encryption MediaconnectFlowOutput#encryption}
  */
  readonly encryption?: MediaconnectFlowOutputEncryption;
  /**
  * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#flow_arn MediaconnectFlowOutput#flow_arn}
  */
  readonly flowArn: string;
  /**
  * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#max_latency MediaconnectFlowOutput#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * The name of the output. This value must be unique within the current flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#name MediaconnectFlowOutput#name}
  */
  readonly name?: string;
  /**
  * The port to use when content is distributed to this output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#port MediaconnectFlowOutput#port}
  */
  readonly port?: number;
  /**
  * The protocol that is used by the source or output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#protocol MediaconnectFlowOutput#protocol}
  */
  readonly protocol: string;
  /**
  * The remote ID for the Zixi-pull stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#remote_id MediaconnectFlowOutput#remote_id}
  */
  readonly remoteId?: string;
  /**
  * The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#smoothing_latency MediaconnectFlowOutput#smoothing_latency}
  */
  readonly smoothingLatency?: number;
  /**
  * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#stream_id MediaconnectFlowOutput#stream_id}
  */
  readonly streamId?: string;
  /**
  * The settings for attaching a VPC interface to an output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#vpc_interface_attachment MediaconnectFlowOutput#vpc_interface_attachment}
  */
  readonly vpcInterfaceAttachment?: MediaconnectFlowOutputVpcInterfaceAttachment;
}
export interface MediaconnectFlowOutputEncryption {
  /**
  * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#algorithm MediaconnectFlowOutput#algorithm}
  */
  readonly algorithm: string;
  /**
  * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#key_type MediaconnectFlowOutput#key_type}
  */
  readonly keyType?: string;
  /**
  * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#role_arn MediaconnectFlowOutput#role_arn}
  */
  readonly roleArn: string;
  /**
  *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#secret_arn MediaconnectFlowOutput#secret_arn}
  */
  readonly secretArn: string;
}

export function mediaconnectFlowOutputEncryptionToTerraform(struct?: MediaconnectFlowOutputEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}

export interface MediaconnectFlowOutputVpcInterfaceAttachment {
  /**
  * The name of the VPC interface to use for this output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#vpc_interface_name MediaconnectFlowOutput#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
}

export function mediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(struct?: MediaconnectFlowOutputVpcInterfaceAttachment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    vpc_interface_name: cdktf.stringToTerraform(struct!.vpcInterfaceName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html awscc_mediaconnect_flow_output}
*/
export class MediaconnectFlowOutput extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_output";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html awscc_mediaconnect_flow_output} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowOutputConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowOutputConfig) {
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
    this._cidrAllowList = config.cidrAllowList;
    this._description = config.description;
    this._destination = config.destination;
    this._encryption = config.encryption;
    this._flowArn = config.flowArn;
    this._maxLatency = config.maxLatency;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._remoteId = config.remoteId;
    this._smoothingLatency = config.smoothingLatency;
    this._streamId = config.streamId;
    this._vpcInterfaceAttachment = config.vpcInterfaceAttachment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_allow_list - computed: false, optional: true, required: false
  private _cidrAllowList?: string[];
  public get cidrAllowList() {
    return this.getListAttribute('cidr_allow_list');
  }
  public set cidrAllowList(value: string[] ) {
    this._cidrAllowList = value;
  }
  public resetCidrAllowList() {
    this._cidrAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrAllowListInput() {
    return this._cidrAllowList
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string;
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string ) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: MediaconnectFlowOutputEncryption;
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }
  public set encryption(value: MediaconnectFlowOutputEncryption ) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption
  }

  // flow_arn - computed: false, optional: false, required: true
  private _flowArn: string;
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string) {
    this._flowArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_latency - computed: false, optional: true, required: false
  private _maxLatency?: number;
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number ) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // output_arn - computed: true, optional: false, required: false
  public get outputArn() {
    return this.getStringAttribute('output_arn');
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string;
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string ) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId
  }

  // smoothing_latency - computed: false, optional: true, required: false
  private _smoothingLatency?: number;
  public get smoothingLatency() {
    return this.getNumberAttribute('smoothing_latency');
  }
  public set smoothingLatency(value: number ) {
    this._smoothingLatency = value;
  }
  public resetSmoothingLatency() {
    this._smoothingLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothingLatencyInput() {
    return this._smoothingLatency
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string;
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string ) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId
  }

  // vpc_interface_attachment - computed: false, optional: true, required: false
  private _vpcInterfaceAttachment?: MediaconnectFlowOutputVpcInterfaceAttachment;
  public get vpcInterfaceAttachment() {
    return this.interpolationForAttribute('vpc_interface_attachment') as any;
  }
  public set vpcInterfaceAttachment(value: MediaconnectFlowOutputVpcInterfaceAttachment ) {
    this._vpcInterfaceAttachment = value;
  }
  public resetVpcInterfaceAttachment() {
    this._vpcInterfaceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceAttachmentInput() {
    return this._vpcInterfaceAttachment
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_allow_list: cdktf.listMapper(cdktf.stringToTerraform)(this._cidrAllowList),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      encryption: mediaconnectFlowOutputEncryptionToTerraform(this._encryption),
      flow_arn: cdktf.stringToTerraform(this._flowArn),
      max_latency: cdktf.numberToTerraform(this._maxLatency),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      smoothing_latency: cdktf.numberToTerraform(this._smoothingLatency),
      stream_id: cdktf.stringToTerraform(this._streamId),
      vpc_interface_attachment: mediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(this._vpcInterfaceAttachment),
    };
  }
}
