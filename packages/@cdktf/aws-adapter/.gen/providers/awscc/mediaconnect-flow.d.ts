import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function mediaconnectFlowSourceDecryptionToTerraform(struct?: MediaconnectFlowSourceDecryption): any;
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
export declare function mediaconnectFlowSourceToTerraform(struct?: MediaconnectFlowSource): any;
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
export declare function mediaconnectFlowSourceFailoverConfigToTerraform(struct?: MediaconnectFlowSourceFailoverConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html awscc_mediaconnect_flow}
*/
export declare class MediaconnectFlow extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow.html awscc_mediaconnect_flow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaconnectFlowConfig
    */
    constructor(scope: Construct, id: string, config: MediaconnectFlowConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    get flowArn(): string;
    get flowAvailabilityZone(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _source;
    get source(): MediaconnectFlowSource;
    set source(value: MediaconnectFlowSource);
    get sourceInput(): MediaconnectFlowSource;
    private _sourceFailoverConfig?;
    get sourceFailoverConfig(): MediaconnectFlowSourceFailoverConfig;
    set sourceFailoverConfig(value: MediaconnectFlowSourceFailoverConfig);
    resetSourceFailoverConfig(): void;
    get sourceFailoverConfigInput(): MediaconnectFlowSourceFailoverConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
