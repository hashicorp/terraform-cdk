import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function mediaconnectFlowOutputEncryptionToTerraform(struct?: MediaconnectFlowOutputEncryption): any;
export interface MediaconnectFlowOutputVpcInterfaceAttachment {
    /**
    * The name of the VPC interface to use for this output.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html#vpc_interface_name MediaconnectFlowOutput#vpc_interface_name}
    */
    readonly vpcInterfaceName?: string;
}
export declare function mediaconnectFlowOutputVpcInterfaceAttachmentToTerraform(struct?: MediaconnectFlowOutputVpcInterfaceAttachment): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html awscc_mediaconnect_flow_output}
*/
export declare class MediaconnectFlowOutput extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_output.html awscc_mediaconnect_flow_output} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaconnectFlowOutputConfig
    */
    constructor(scope: Construct, id: string, config: MediaconnectFlowOutputConfig);
    private _cidrAllowList?;
    get cidrAllowList(): string[];
    set cidrAllowList(value: string[]);
    resetCidrAllowList(): void;
    get cidrAllowListInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    resetDestination(): void;
    get destinationInput(): string | undefined;
    private _encryption?;
    get encryption(): MediaconnectFlowOutputEncryption;
    set encryption(value: MediaconnectFlowOutputEncryption);
    resetEncryption(): void;
    get encryptionInput(): MediaconnectFlowOutputEncryption | undefined;
    private _flowArn;
    get flowArn(): string;
    set flowArn(value: string);
    get flowArnInput(): string;
    get id(): string;
    private _maxLatency?;
    get maxLatency(): number;
    set maxLatency(value: number);
    resetMaxLatency(): void;
    get maxLatencyInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get outputArn(): string;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string;
    private _remoteId?;
    get remoteId(): string;
    set remoteId(value: string);
    resetRemoteId(): void;
    get remoteIdInput(): string | undefined;
    private _smoothingLatency?;
    get smoothingLatency(): number;
    set smoothingLatency(value: number);
    resetSmoothingLatency(): void;
    get smoothingLatencyInput(): number | undefined;
    private _streamId?;
    get streamId(): string;
    set streamId(value: string);
    resetStreamId(): void;
    get streamIdInput(): string | undefined;
    private _vpcInterfaceAttachment?;
    get vpcInterfaceAttachment(): MediaconnectFlowOutputVpcInterfaceAttachment;
    set vpcInterfaceAttachment(value: MediaconnectFlowOutputVpcInterfaceAttachment);
    resetVpcInterfaceAttachment(): void;
    get vpcInterfaceAttachmentInput(): MediaconnectFlowOutputVpcInterfaceAttachment | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
