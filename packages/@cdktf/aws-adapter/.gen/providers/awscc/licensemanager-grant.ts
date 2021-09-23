// https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#allowed_operations LicensemanagerGrant#allowed_operations}
  */
  readonly allowedOperations?: string[];
  /**
  * Name for the created Grant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#grant_name LicensemanagerGrant#grant_name}
  */
  readonly grantName?: string;
  /**
  * Home region for the created grant.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#home_region LicensemanagerGrant#home_region}
  */
  readonly homeRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#license_arn LicensemanagerGrant#license_arn}
  */
  readonly licenseArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#principals LicensemanagerGrant#principals}
  */
  readonly principals?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html#status LicensemanagerGrant#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html awscc_licensemanager_grant}
*/
export class LicensemanagerGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_licensemanager_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html awscc_licensemanager_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerGrantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerGrantConfig = {}) {
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
    this._allowedOperations = config.allowedOperations;
    this._grantName = config.grantName;
    this._homeRegion = config.homeRegion;
    this._licenseArn = config.licenseArn;
    this._principals = config.principals;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_operations - computed: false, optional: true, required: false
  private _allowedOperations?: string[];
  public get allowedOperations() {
    return this.getListAttribute('allowed_operations');
  }
  public set allowedOperations(value: string[] ) {
    this._allowedOperations = value;
  }
  public resetAllowedOperations() {
    this._allowedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationsInput() {
    return this._allowedOperations
  }

  // grant_arn - computed: true, optional: false, required: false
  public get grantArn() {
    return this.getStringAttribute('grant_arn');
  }

  // grant_name - computed: false, optional: true, required: false
  private _grantName?: string;
  public get grantName() {
    return this.getStringAttribute('grant_name');
  }
  public set grantName(value: string ) {
    this._grantName = value;
  }
  public resetGrantName() {
    this._grantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantNameInput() {
    return this._grantName
  }

  // home_region - computed: false, optional: true, required: false
  private _homeRegion?: string;
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }
  public set homeRegion(value: string ) {
    this._homeRegion = value;
  }
  public resetHomeRegion() {
    this._homeRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeRegionInput() {
    return this._homeRegion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_arn - computed: false, optional: true, required: false
  private _licenseArn?: string;
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }
  public set licenseArn(value: string ) {
    this._licenseArn = value;
  }
  public resetLicenseArn() {
    this._licenseArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseArnInput() {
    return this._licenseArn
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[];
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[] ) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
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
      allowed_operations: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedOperations),
      grant_name: cdktf.stringToTerraform(this._grantName),
      home_region: cdktf.stringToTerraform(this._homeRegion),
      license_arn: cdktf.stringToTerraform(this._licenseArn),
      principals: cdktf.listMapper(cdktf.stringToTerraform)(this._principals),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
