// https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaconnectFlowSourceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Information about the encryption of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#decryption MediaconnectFlowSourceA#decryption}
  */
  readonly decryption?: MediaconnectFlowSourceDecryptionA;
  /**
  * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#description MediaconnectFlowSourceA#description}
  */
  readonly description: string;
  /**
  * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}
  */
  readonly entitlementArn?: string;
  /**
  * The ARN of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#flow_arn MediaconnectFlowSourceA#flow_arn}
  */
  readonly flowArn?: string;
  /**
  * The port that the flow will be listening on for incoming content.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#ingest_port MediaconnectFlowSourceA#ingest_port}
  */
  readonly ingestPort?: number;
  /**
  * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#max_bitrate MediaconnectFlowSourceA#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#max_latency MediaconnectFlowSourceA#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * The name of the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#name MediaconnectFlowSourceA#name}
  */
  readonly name: string;
  /**
  * The protocol that is used by the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#protocol MediaconnectFlowSourceA#protocol}
  */
  readonly protocol?: string;
  /**
  * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#stream_id MediaconnectFlowSourceA#stream_id}
  */
  readonly streamId?: string;
  /**
  * The name of the VPC Interface this Source is configured with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
  /**
  * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}
  */
  readonly whitelistCidr?: string;
}
export interface MediaconnectFlowSourceDecryptionA {
  /**
  * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#algorithm MediaconnectFlowSourceA#algorithm}
  */
  readonly algorithm: string;
  /**
  * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}
  */
  readonly constantInitializationVector?: string;
  /**
  * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#device_id MediaconnectFlowSourceA#device_id}
  */
  readonly deviceId?: string;
  /**
  * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#key_type MediaconnectFlowSourceA#key_type}
  */
  readonly keyType?: string;
  /**
  * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#region MediaconnectFlowSourceA#region}
  */
  readonly region?: string;
  /**
  * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#resource_id MediaconnectFlowSourceA#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#role_arn MediaconnectFlowSourceA#role_arn}
  */
  readonly roleArn: string;
  /**
  *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#secret_arn MediaconnectFlowSourceA#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html#url MediaconnectFlowSourceA#url}
  */
  readonly url?: string;
}

export function mediaconnectFlowSourceDecryptionAToTerraform(struct?: MediaconnectFlowSourceDecryptionA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    constant_initialization_vector: cdktf.stringToTerraform(struct!.constantInitializationVector),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    region: cdktf.stringToTerraform(struct!.region),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html awscc_mediaconnect_flow_source}
*/
export class MediaconnectFlowSourceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_source";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html awscc_mediaconnect_flow_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowSourceAConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowSourceAConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_source',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._decryption = config.decryption;
    this._description = config.description;
    this._entitlementArn = config.entitlementArn;
    this._flowArn = config.flowArn;
    this._ingestPort = config.ingestPort;
    this._maxBitrate = config.maxBitrate;
    this._maxLatency = config.maxLatency;
    this._name = config.name;
    this._protocol = config.protocol;
    this._streamId = config.streamId;
    this._vpcInterfaceName = config.vpcInterfaceName;
    this._whitelistCidr = config.whitelistCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decryption - computed: false, optional: true, required: false
  private _decryption?: MediaconnectFlowSourceDecryptionA;
  public get decryption() {
    return this.interpolationForAttribute('decryption') as any;
  }
  public set decryption(value: MediaconnectFlowSourceDecryptionA ) {
    this._decryption = value;
  }
  public resetDecryption() {
    this._decryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // entitlement_arn - computed: false, optional: true, required: false
  private _entitlementArn?: string;
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }
  public set entitlementArn(value: string ) {
    this._entitlementArn = value;
  }
  public resetEntitlementArn() {
    this._entitlementArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementArnInput() {
    return this._entitlementArn
  }

  // flow_arn - computed: false, optional: true, required: false
  private _flowArn?: string;
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }
  public set flowArn(value: string ) {
    this._flowArn = value;
  }
  public resetFlowArn() {
    this._flowArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowArnInput() {
    return this._flowArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingest_ip - computed: true, optional: false, required: false
  public get ingestIp() {
    return this.getStringAttribute('ingest_ip');
  }

  // ingest_port - computed: false, optional: true, required: false
  private _ingestPort?: number;
  public get ingestPort() {
    return this.getNumberAttribute('ingest_port');
  }
  public set ingestPort(value: number ) {
    this._ingestPort = value;
  }
  public resetIngestPort() {
    this._ingestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestPortInput() {
    return this._ingestPort
  }

  // max_bitrate - computed: false, optional: true, required: false
  private _maxBitrate?: number;
  public get maxBitrate() {
    return this.getNumberAttribute('max_bitrate');
  }
  public set maxBitrate(value: number ) {
    this._maxBitrate = value;
  }
  public resetMaxBitrate() {
    this._maxBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBitrateInput() {
    return this._maxBitrate
  }

  // max_latency - computed: true, optional: true, required: false
  private _maxLatency?: number;
  public get maxLatency() {
    return this.getNumberAttribute('max_latency');
  }
  public set maxLatency(value: number) {
    this._maxLatency = value;
  }
  public resetMaxLatency() {
    this._maxLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLatencyInput() {
    return this._maxLatency
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string;
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string ) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // source_arn - computed: true, optional: false, required: false
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
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

  // vpc_interface_name - computed: false, optional: true, required: false
  private _vpcInterfaceName?: string;
  public get vpcInterfaceName() {
    return this.getStringAttribute('vpc_interface_name');
  }
  public set vpcInterfaceName(value: string ) {
    this._vpcInterfaceName = value;
  }
  public resetVpcInterfaceName() {
    this._vpcInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceNameInput() {
    return this._vpcInterfaceName
  }

  // whitelist_cidr - computed: false, optional: true, required: false
  private _whitelistCidr?: string;
  public get whitelistCidr() {
    return this.getStringAttribute('whitelist_cidr');
  }
  public set whitelistCidr(value: string ) {
    this._whitelistCidr = value;
  }
  public resetWhitelistCidr() {
    this._whitelistCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistCidrInput() {
    return this._whitelistCidr
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      decryption: mediaconnectFlowSourceDecryptionAToTerraform(this._decryption),
      description: cdktf.stringToTerraform(this._description),
      entitlement_arn: cdktf.stringToTerraform(this._entitlementArn),
      flow_arn: cdktf.stringToTerraform(this._flowArn),
      ingest_port: cdktf.numberToTerraform(this._ingestPort),
      max_bitrate: cdktf.numberToTerraform(this._maxBitrate),
      max_latency: cdktf.numberToTerraform(this._maxLatency),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      stream_id: cdktf.stringToTerraform(this._streamId),
      vpc_interface_name: cdktf.stringToTerraform(this._vpcInterfaceName),
      whitelist_cidr: cdktf.stringToTerraform(this._whitelistCidr),
    };
  }
}
