// https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCertificatemanagerAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html#id DataAwsccCertificatemanagerAccount#id}
  */
  readonly id: string;
}
export class DataAwsccCertificatemanagerAccountExpiryEventsConfiguration extends cdktf.ComplexComputedList {

  // days_before_expiry - computed: true, optional: false, required: false
  public get daysBeforeExpiry() {
    return this.getNumberAttribute('days_before_expiry');
  }
}

export function dataAwsccCertificatemanagerAccountExpiryEventsConfigurationToTerraform(struct?: DataAwsccCertificatemanagerAccountExpiryEventsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html awscc_certificatemanager_account}
*/
export class DataAwsccCertificatemanagerAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_certificatemanager_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html awscc_certificatemanager_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCertificatemanagerAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCertificatemanagerAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_certificatemanager_account',
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

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expiry_events_configuration - computed: true, optional: false, required: false
  public get expiryEventsConfiguration() {
    return this.interpolationForAttribute('expiry_events_configuration') as any;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
