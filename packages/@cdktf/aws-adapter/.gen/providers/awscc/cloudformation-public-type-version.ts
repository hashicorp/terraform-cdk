// https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationPublicTypeVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A url to the S3 bucket where logs for the testType run will be available
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#log_delivery_bucket CloudformationPublicTypeVersion#log_delivery_bucket}
  */
  readonly logDeliveryBucket?: string;
  /**
  * The version number of a public third-party extension
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#public_version_number CloudformationPublicTypeVersion#public_version_number}
  */
  readonly publicVersionNumber?: string;
  /**
  * The kind of extension
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#type CloudformationPublicTypeVersion#type}
  */
  readonly type?: string;
  /**
  * The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html#type_name CloudformationPublicTypeVersion#type_name}
  */
  readonly typeName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html awscc_cloudformation_public_type_version}
*/
export class CloudformationPublicTypeVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_public_type_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_public_type_version.html awscc_cloudformation_public_type_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationPublicTypeVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudformationPublicTypeVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_public_type_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._logDeliveryBucket = config.logDeliveryBucket;
    this._publicVersionNumber = config.publicVersionNumber;
    this._type = config.type;
    this._typeName = config.typeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_delivery_bucket - computed: true, optional: true, required: false
  private _logDeliveryBucket?: string;
  public get logDeliveryBucket() {
    return this.getStringAttribute('log_delivery_bucket');
  }
  public set logDeliveryBucket(value: string) {
    this._logDeliveryBucket = value;
  }
  public resetLogDeliveryBucket() {
    this._logDeliveryBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryBucketInput() {
    return this._logDeliveryBucket
  }

  // public_type_arn - computed: true, optional: false, required: false
  public get publicTypeArn() {
    return this.getStringAttribute('public_type_arn');
  }

  // public_version_number - computed: true, optional: true, required: false
  private _publicVersionNumber?: string;
  public get publicVersionNumber() {
    return this.getStringAttribute('public_version_number');
  }
  public set publicVersionNumber(value: string) {
    this._publicVersionNumber = value;
  }
  public resetPublicVersionNumber() {
    this._publicVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicVersionNumberInput() {
    return this._publicVersionNumber
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // type_version_arn - computed: true, optional: false, required: false
  public get typeVersionArn() {
    return this.getStringAttribute('type_version_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      log_delivery_bucket: cdktf.stringToTerraform(this._logDeliveryBucket),
      public_version_number: cdktf.stringToTerraform(this._publicVersionNumber),
      type: cdktf.stringToTerraform(this._type),
      type_name: cdktf.stringToTerraform(this._typeName),
    };
  }
}
