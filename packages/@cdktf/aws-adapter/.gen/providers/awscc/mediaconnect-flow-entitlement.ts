// https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function mediaconnectFlowEntitlementEncryptionToTerraform(struct?: MediaconnectFlowEntitlementEncryption): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement}
*/
export class MediaconnectFlowEntitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_entitlement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MediaconnectFlowEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: MediaconnectFlowEntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_mediaconnect_flow_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataTransferSubscriberFeePercent = config.dataTransferSubscriberFeePercent;
    this._description = config.description;
    this._encryption = config.encryption;
    this._entitlementStatus = config.entitlementStatus;
    this._flowArn = config.flowArn;
    this._name = config.name;
    this._subscribers = config.subscribers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_transfer_subscriber_fee_percent - computed: true, optional: true, required: false
  private _dataTransferSubscriberFeePercent?: number;
  public get dataTransferSubscriberFeePercent() {
    return this.getNumberAttribute('data_transfer_subscriber_fee_percent');
  }
  public set dataTransferSubscriberFeePercent(value: number) {
    this._dataTransferSubscriberFeePercent = value;
  }
  public resetDataTransferSubscriberFeePercent() {
    this._dataTransferSubscriberFeePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferSubscriberFeePercentInput() {
    return this._dataTransferSubscriberFeePercent
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

  // encryption - computed: false, optional: true, required: false
  private _encryption?: MediaconnectFlowEntitlementEncryption;
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }
  public set encryption(value: MediaconnectFlowEntitlementEncryption ) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption
  }

  // entitlement_arn - computed: true, optional: false, required: false
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }

  // entitlement_status - computed: false, optional: true, required: false
  private _entitlementStatus?: string;
  public get entitlementStatus() {
    return this.getStringAttribute('entitlement_status');
  }
  public set entitlementStatus(value: string ) {
    this._entitlementStatus = value;
  }
  public resetEntitlementStatus() {
    this._entitlementStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementStatusInput() {
    return this._entitlementStatus
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

  // subscribers - computed: false, optional: false, required: true
  private _subscribers: string[];
  public get subscribers() {
    return this.getListAttribute('subscribers');
  }
  public set subscribers(value: string[]) {
    this._subscribers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersInput() {
    return this._subscribers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_transfer_subscriber_fee_percent: cdktf.numberToTerraform(this._dataTransferSubscriberFeePercent),
      description: cdktf.stringToTerraform(this._description),
      encryption: mediaconnectFlowEntitlementEncryptionToTerraform(this._encryption),
      entitlement_status: cdktf.stringToTerraform(this._entitlementStatus),
      flow_arn: cdktf.stringToTerraform(this._flowArn),
      name: cdktf.stringToTerraform(this._name),
      subscribers: cdktf.listMapper(cdktf.stringToTerraform)(this._subscribers),
    };
  }
}
