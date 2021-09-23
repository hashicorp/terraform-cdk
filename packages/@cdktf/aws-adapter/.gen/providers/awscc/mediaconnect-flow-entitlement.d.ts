import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaconnectFlowEntitlementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}
    */
    readonly dataTransferSubscriberFeePercent?: number;
    /**
    * A description of the entitlement.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#description MediaconnectFlowEntitlement#description}
    */
    readonly description: string;
    /**
    * Information about the encryption of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#encryption MediaconnectFlowEntitlement#encryption}
    */
    readonly encryption?: MediaconnectFlowEntitlementEncryption;
    /**
    *  An indication of whether the entitlement is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#entitlement_status MediaconnectFlowEntitlement#entitlement_status}
    */
    readonly entitlementStatus?: string;
    /**
    * The ARN of the flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#flow_arn MediaconnectFlowEntitlement#flow_arn}
    */
    readonly flowArn: string;
    /**
    * The name of the entitlement.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#name MediaconnectFlowEntitlement#name}
    */
    readonly name: string;
    /**
    * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#subscribers MediaconnectFlowEntitlement#subscribers}
    */
    readonly subscribers: string[];
}
export interface MediaconnectFlowEntitlementEncryption {
    /**
    * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#algorithm MediaconnectFlowEntitlement#algorithm}
    */
    readonly algorithm: string;
    /**
    * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}
    */
    readonly constantInitializationVector?: string;
    /**
    * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#device_id MediaconnectFlowEntitlement#device_id}
    */
    readonly deviceId?: string;
    /**
    * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#key_type MediaconnectFlowEntitlement#key_type}
    */
    readonly keyType?: string;
    /**
    * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#region MediaconnectFlowEntitlement#region}
    */
    readonly region?: string;
    /**
    * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#resource_id MediaconnectFlowEntitlement#resource_id}
    */
    readonly resourceId?: string;
    /**
    * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#role_arn MediaconnectFlowEntitlement#role_arn}
    */
    readonly roleArn: string;
    /**
    *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#secret_arn MediaconnectFlowEntitlement#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html#url MediaconnectFlowEntitlement#url}
    */
    readonly url?: string;
}
export declare function mediaconnectFlowEntitlementEncryptionToTerraform(struct?: MediaconnectFlowEntitlementEncryption): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement}
*/
export declare class MediaconnectFlowEntitlement extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaconnectFlowEntitlementConfig
    */
    constructor(scope: Construct, id: string, config: MediaconnectFlowEntitlementConfig);
    private _dataTransferSubscriberFeePercent?;
    get dataTransferSubscriberFeePercent(): number;
    set dataTransferSubscriberFeePercent(value: number);
    resetDataTransferSubscriberFeePercent(): void;
    get dataTransferSubscriberFeePercentInput(): number | undefined;
    private _description;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _encryption?;
    get encryption(): MediaconnectFlowEntitlementEncryption;
    set encryption(value: MediaconnectFlowEntitlementEncryption);
    resetEncryption(): void;
    get encryptionInput(): MediaconnectFlowEntitlementEncryption | undefined;
    get entitlementArn(): string;
    private _entitlementStatus?;
    get entitlementStatus(): string;
    set entitlementStatus(value: string);
    resetEntitlementStatus(): void;
    get entitlementStatusInput(): string | undefined;
    private _flowArn;
    get flowArn(): string;
    set flowArn(value: string);
    get flowArnInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _subscribers;
    get subscribers(): string[];
    set subscribers(value: string[]);
    get subscribersInput(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
