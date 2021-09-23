import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function mediaconnectFlowSourceDecryptionAToTerraform(struct?: MediaconnectFlowSourceDecryptionA): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html awscc_mediaconnect_flow_source}
*/
export declare class MediaconnectFlowSourceA extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_source.html awscc_mediaconnect_flow_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaconnectFlowSourceAConfig
    */
    constructor(scope: Construct, id: string, config: MediaconnectFlowSourceAConfig);
    private _decryption?;
    get decryption(): MediaconnectFlowSourceDecryptionA;
    set decryption(value: MediaconnectFlowSourceDecryptionA);
    resetDecryption(): void;
    get decryptionInput(): MediaconnectFlowSourceDecryptionA | undefined;
    private _description;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _entitlementArn?;
    get entitlementArn(): string;
    set entitlementArn(value: string);
    resetEntitlementArn(): void;
    get entitlementArnInput(): string | undefined;
    private _flowArn?;
    get flowArn(): string;
    set flowArn(value: string);
    resetFlowArn(): void;
    get flowArnInput(): string | undefined;
    get id(): string;
    get ingestIp(): string;
    private _ingestPort?;
    get ingestPort(): number;
    set ingestPort(value: number);
    resetIngestPort(): void;
    get ingestPortInput(): number | undefined;
    private _maxBitrate?;
    get maxBitrate(): number;
    set maxBitrate(value: number);
    resetMaxBitrate(): void;
    get maxBitrateInput(): number | undefined;
    private _maxLatency?;
    get maxLatency(): number;
    set maxLatency(value: number);
    resetMaxLatency(): void;
    get maxLatencyInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    get sourceArn(): string;
    private _streamId?;
    get streamId(): string;
    set streamId(value: string);
    resetStreamId(): void;
    get streamIdInput(): string | undefined;
    private _vpcInterfaceName?;
    get vpcInterfaceName(): string;
    set vpcInterfaceName(value: string);
    resetVpcInterfaceName(): void;
    get vpcInterfaceNameInput(): string | undefined;
    private _whitelistCidr?;
    get whitelistCidr(): string;
    set whitelistCidr(value: string);
    resetWhitelistCidr(): void;
    get whitelistCidrInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
