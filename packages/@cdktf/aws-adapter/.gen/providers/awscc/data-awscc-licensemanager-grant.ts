// https://www.terraform.io/docs/providers/awscc/d/licensemanager_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLicensemanagerGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grant.html#id DataAwsccLicensemanagerGrant#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grant.html awscc_licensemanager_grant}
*/
export class DataAwsccLicensemanagerGrant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_licensemanager_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grant.html awscc_licensemanager_grant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLicensemanagerGrantConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLicensemanagerGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_licensemanager_grant',
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

  // allowed_operations - computed: true, optional: false, required: false
  public get allowedOperations() {
    return this.getListAttribute('allowed_operations');
  }

  // grant_arn - computed: true, optional: false, required: false
  public get grantArn() {
    return this.getStringAttribute('grant_arn');
  }

  // grant_name - computed: true, optional: false, required: false
  public get grantName() {
    return this.getStringAttribute('grant_name');
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // license_arn - computed: true, optional: false, required: false
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
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
