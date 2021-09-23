// https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccLicensemanagerLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html#id DataAwsccLicensemanagerLicense#id}
  */
  readonly id: string;
}
export class DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration extends cdktf.ComplexComputedList {

  // allow_early_check_in - computed: true, optional: false, required: false
  public get allowEarlyCheckIn() {
    return this.getBooleanAttribute('allow_early_check_in');
  }

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_early_check_in: cdktf.booleanToTerraform(struct!.allowEarlyCheckIn),
    max_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.maxTimeToLiveInMinutes),
  }
}

export class DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration extends cdktf.ComplexComputedList {

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.maxTimeToLiveInMinutes),
  }
}

export class DataAwsccLicensemanagerLicenseConsumptionConfiguration extends cdktf.ComplexComputedList {

  // borrow_configuration - computed: true, optional: false, required: false
  public get borrowConfiguration() {
    return this.interpolationForAttribute('borrow_configuration') as any;
  }

  // provisional_configuration - computed: true, optional: false, required: false
  public get provisionalConfiguration() {
    return this.interpolationForAttribute('provisional_configuration') as any;
  }

  // renew_type - computed: true, optional: false, required: false
  public get renewType() {
    return this.getStringAttribute('renew_type');
  }
}

export function dataAwsccLicensemanagerLicenseConsumptionConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    borrow_configuration: dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct!.borrowConfiguration),
    provisional_configuration: dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct!.provisionalConfiguration),
    renew_type: cdktf.stringToTerraform(struct!.renewType),
  }
}

export class DataAwsccLicensemanagerLicenseEntitlements extends cdktf.ComplexComputedList {

  // allow_check_in - computed: true, optional: false, required: false
  public get allowCheckIn() {
    return this.getBooleanAttribute('allow_check_in');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // overage - computed: true, optional: false, required: false
  public get overage() {
    return this.getBooleanAttribute('overage');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccLicensemanagerLicenseEntitlementsToTerraform(struct?: DataAwsccLicensemanagerLicenseEntitlements): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_check_in: cdktf.booleanToTerraform(struct!.allowCheckIn),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    name: cdktf.stringToTerraform(struct!.name),
    overage: cdktf.booleanToTerraform(struct!.overage),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccLicensemanagerLicenseIssuer extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sign_key - computed: true, optional: false, required: false
  public get signKey() {
    return this.getStringAttribute('sign_key');
  }
}

export function dataAwsccLicensemanagerLicenseIssuerToTerraform(struct?: DataAwsccLicensemanagerLicenseIssuer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sign_key: cdktf.stringToTerraform(struct!.signKey),
  }
}

export class DataAwsccLicensemanagerLicenseLicenseMetadata extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccLicensemanagerLicenseLicenseMetadataToTerraform(struct?: DataAwsccLicensemanagerLicenseLicenseMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccLicensemanagerLicenseValidity extends cdktf.ComplexComputedList {

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getStringAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }
}

export function dataAwsccLicensemanagerLicenseValidityToTerraform(struct?: DataAwsccLicensemanagerLicenseValidity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html awscc_licensemanager_license}
*/
export class DataAwsccLicensemanagerLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_licensemanager_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html awscc_licensemanager_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccLicensemanagerLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccLicensemanagerLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_licensemanager_license',
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

  // beneficiary - computed: true, optional: false, required: false
  public get beneficiary() {
    return this.getStringAttribute('beneficiary');
  }

  // consumption_configuration - computed: true, optional: false, required: false
  public get consumptionConfiguration() {
    return this.interpolationForAttribute('consumption_configuration') as any;
  }

  // entitlements - computed: true, optional: false, required: false
  public get entitlements() {
    return this.interpolationForAttribute('entitlements') as any;
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

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.interpolationForAttribute('issuer') as any;
  }

  // license_arn - computed: true, optional: false, required: false
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }

  // license_metadata - computed: true, optional: false, required: false
  public get licenseMetadata() {
    return this.interpolationForAttribute('license_metadata') as any;
  }

  // license_name - computed: true, optional: false, required: false
  public get licenseName() {
    return this.getStringAttribute('license_name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_sku - computed: true, optional: false, required: false
  public get productSku() {
    return this.getStringAttribute('product_sku');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // validity - computed: true, optional: false, required: false
  public get validity() {
    return this.interpolationForAttribute('validity') as any;
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
