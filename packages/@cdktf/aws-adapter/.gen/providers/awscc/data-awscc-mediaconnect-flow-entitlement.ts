// https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccMediaconnectFlowEntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html#id DataAwsccMediaconnectFlowEntitlement#id}
  */
  readonly id: string;
}
export class DataAwsccMediaconnectFlowEntitlementEncryption extends cdktf.ComplexComputedList {

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // constant_initialization_vector - computed: true, optional: false, required: false
  public get constantInitializationVector() {
    return this.getStringAttribute('constant_initialization_vector');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export function dataAwsccMediaconnectFlowEntitlementEncryptionToTerraform(struct?: DataAwsccMediaconnectFlowEntitlementEncryption): any {
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
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement}
*/
export class DataAwsccMediaconnectFlowEntitlement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_mediaconnect_flow_entitlement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediaconnect_flow_entitlement.html awscc_mediaconnect_flow_entitlement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccMediaconnectFlowEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccMediaconnectFlowEntitlementConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_transfer_subscriber_fee_percent - computed: true, optional: false, required: false
  public get dataTransferSubscriberFeePercent() {
    return this.getNumberAttribute('data_transfer_subscriber_fee_percent');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.interpolationForAttribute('encryption') as any;
  }

  // entitlement_arn - computed: true, optional: false, required: false
  public get entitlementArn() {
    return this.getStringAttribute('entitlement_arn');
  }

  // entitlement_status - computed: true, optional: false, required: false
  public get entitlementStatus() {
    return this.getStringAttribute('entitlement_status');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subscribers - computed: true, optional: false, required: false
  public get subscribers() {
    return this.getListAttribute('subscribers');
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
