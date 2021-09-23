// https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudformationPublicTypeVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html#id DataAwsccCloudformationPublicTypeVersion#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html awscc_cloudformation_public_type_version}
*/
export class DataAwsccCloudformationPublicTypeVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_public_type_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_public_type_version.html awscc_cloudformation_public_type_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationPublicTypeVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationPublicTypeVersionConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // log_delivery_bucket - computed: true, optional: false, required: false
  public get logDeliveryBucket() {
    return this.getStringAttribute('log_delivery_bucket');
  }

  // public_type_arn - computed: true, optional: false, required: false
  public get publicTypeArn() {
    return this.getStringAttribute('public_type_arn');
  }

  // public_version_number - computed: true, optional: false, required: false
  public get publicVersionNumber() {
    return this.getStringAttribute('public_version_number');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
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
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
