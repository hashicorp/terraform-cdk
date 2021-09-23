// https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MediaconnectFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#availability_zone MediaconnectFlow#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The name of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#name MediaconnectFlow#name}
  */
  readonly name: string;
  /**
  * The settings for the source of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#source MediaconnectFlow#source}
  */
  readonly source: MediaconnectFlowSource;
  /**
  * The settings for source failover
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#source_failover_config MediaconnectFlow#source_failover_config}
  */
  readonly sourceFailoverConfig?: MediaconnectFlowSourceFailoverConfig;
}
export interface MediaconnectFlowSourceDecryption {
  /**
  * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#algorithm MediaconnectFlow#algorithm}
  */
  readonly algorithm: string;
  /**
  * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}
  */
  readonly constantInitializationVector?: string;
  /**
  * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#device_id MediaconnectFlow#device_id}
  */
  readonly deviceId?: string;
  /**
  * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#key_type MediaconnectFlow#key_type}
  */
  readonly keyType?: string;
  /**
  * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#region MediaconnectFlow#region}
  */
  readonly region?: string;
  /**
  * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#resource_id MediaconnectFlow#resource_id}
  */
  readonly resourceId?: string;
  /**
  * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#role_arn MediaconnectFlow#role_arn}
  */
  readonly roleArn: string;
  /**
  *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#secret_arn MediaconnectFlow#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#url MediaconnectFlow#url}
  */
  readonly url?: string;
}

export function mediaconnectFlowSourceDecryptionToTerraform(struct?: MediaconnectFlowSourceDecryption): any {
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

export interface MediaconnectFlowSource {
  /**
  * Information about the encryption of the flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#decryption MediaconnectFlow#decryption}
  */
  readonly decryption?: MediaconnectFlowSourceDecryption;
  /**
  * A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#description MediaconnectFlow#description}
  */
  readonly description?: string;
  /**
  * The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#entitlement_arn MediaconnectFlow#entitlement_arn}
  */
  readonly entitlementArn?: string;
  /**
  * The IP address that the flow will be listening on for incoming content.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#ingest_ip MediaconnectFlow#ingest_ip}
  */
  readonly ingestIp: string;
  /**
  * The port that the flow will be listening on for incoming content.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#ingest_port MediaconnectFlow#ingest_port}
  */
  readonly ingestPort?: number;
  /**
  * The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#max_bitrate MediaconnectFlow#max_bitrate}
  */
  readonly maxBitrate?: number;
  /**
  * The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#max_latency MediaconnectFlow#max_latency}
  */
  readonly maxLatency?: number;
  /**
  * The name of the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#name MediaconnectFlow#name}
  */
  readonly name?: string;
  /**
  * The protocol that is used by the source or output.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#protocol MediaconnectFlow#protocol}
  */
  readonly protocol?: string;
  /**
  * The ARN of the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#source_arn MediaconnectFlow#source_arn}
  */
  readonly sourceArn: string;
  /**
  * The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#stream_id MediaconnectFlow#stream_id}
  */
  readonly streamId?: string;
  /**
  * The name of the VPC Interface this Source is configured with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#vpc_interface_name MediaconnectFlow#vpc_interface_name}
  */
  readonly vpcInterfaceName?: string;
  /**
  * The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#whitelist_cidr MediaconnectFlow#whitelist_cidr}
  */
  readonly whitelistCidr?: string;
}

export function mediaconnectFlowSourceToTerraform(struct?: MediaconnectFlowSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    decryption: mediaconnectFlowSourceDecryptionToTerraform(struct!.decryption),
    description: cdktf.stringToTerraform(struct!.description),
    entitlement_arn: cdktf.stringToTerraform(struct!.entitlementArn),
    ingest_ip: cdktf.stringToTerraform(struct!.ingestIp),
    ingest_port: cdktf.numberToTerraform(struct!.ingestPort),
    max_bitrate: cdktf.numberToTerraform(struct!.maxBitrate),
    max_latency: cdktf.numberToTerraform(struct!.maxLatency),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    vpc_interface_name: cdktf.stringToTerraform(struct!.vpcInterfaceName),
    whitelist_cidr: cdktf.stringToTerraform(struct!.whitelistCidr),
  }
}

export interface MediaconnectFlowSourceFailoverConfig {
  /**
  * Search window time to look for dash-7 packets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#recovery_window MediaconnectFlow#recovery_window}
  */
  readonly recoveryWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html#state MediaconnectFlow#state}
  */
  readonly state?: string;
}

export function mediaconnectFlowSourceFailoverConfigToTerraform(struct?: MediaconnectFlowSourceFailoverConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recovery_window: cdktf.numberToTerraform(struct!.recoveryWindow),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html awscc_mediaconnect_flow}
*/
export class MediaconnectFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html awscc_mediaconnect_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._name = config.name;
    this._source = config.source;
    this._sourceFailoverConfig = config.sourceFailoverConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // flow_arn - computed: true, optional: false, required: false
  public get flowArn() {
    return this.getStringAttribute('flow_arn');
  }

  // flow_availability_zone - computed: true, optional: false, required: false
  public get flowAvailabilityZone() {
    return this.getStringAttribute('flow_availability_zone');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // source - computed: false, optional: false, required: true
  private _source: MediaconnectFlowSource;
  public get source() {
    return this.interpolationForAttribute('source') as any;
  }
  public set source(value: MediaconnectFlowSource) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // source_failover_config - computed: false, optional: true, required: false
  private _sourceFailoverConfig?: MediaconnectFlowSourceFailoverConfig;
  public get sourceFailoverConfig() {
    return this.interpolationForAttribute('source_failover_config') as any;
  }
  public set sourceFailoverConfig(value: MediaconnectFlowSourceFailoverConfig ) {
    this._sourceFailoverConfig = value;
  }
  public resetSourceFailoverConfig() {
    this._sourceFailoverConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFailoverConfigInput() {
    return this._sourceFailoverConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      name: cdktf.stringToTerraform(this._name),
      source: mediaconnectFlowSourceToTerraform(this._source),
      source_failover_config: mediaconnectFlowSourceFailoverConfigToTerraform(this._sourceFailoverConfig),
    };
  }
}
