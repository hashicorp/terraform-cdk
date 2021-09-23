// https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificatemanagerAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html#expiry_events_configuration CertificatemanagerAccount#expiry_events_configuration}
  */
  readonly expiryEventsConfiguration: CertificatemanagerAccountExpiryEventsConfiguration;
}
export interface CertificatemanagerAccountExpiryEventsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html#days_before_expiry CertificatemanagerAccount#days_before_expiry}
  */
  readonly daysBeforeExpiry?: number;
}

export function certificatemanagerAccountExpiryEventsConfigurationToTerraform(struct?: CertificatemanagerAccountExpiryEventsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    days_before_expiry: cdktf.numberToTerraform(struct!.daysBeforeExpiry),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account}
*/
export class CertificatemanagerAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_certificatemanager_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/certificatemanager_account.html awscc_certificatemanager_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificatemanagerAccountConfig
  */
  public constructor(scope: Construct, id: string, config: CertificatemanagerAccountConfig) {
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
    this._expiryEventsConfiguration = config.expiryEventsConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // expiry_events_configuration - computed: false, optional: false, required: true
  private _expiryEventsConfiguration: CertificatemanagerAccountExpiryEventsConfiguration;
  public get expiryEventsConfiguration() {
    return this.interpolationForAttribute('expiry_events_configuration') as any;
  }
  public set expiryEventsConfiguration(value: CertificatemanagerAccountExpiryEventsConfiguration) {
    this._expiryEventsConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryEventsConfigurationInput() {
    return this._expiryEventsConfiguration
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expiry_events_configuration: certificatemanagerAccountExpiryEventsConfigurationToTerraform(this._expiryEventsConfiguration),
    };
  }
}
