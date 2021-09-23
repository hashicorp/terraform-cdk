// https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensemanagerLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Beneficiary of the license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#beneficiary LicensemanagerLicense#beneficiary}
  */
  readonly beneficiary?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#consumption_configuration LicensemanagerLicense#consumption_configuration}
  */
  readonly consumptionConfiguration: LicensemanagerLicenseConsumptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#entitlements LicensemanagerLicense#entitlements}
  */
  readonly entitlements: LicensemanagerLicenseEntitlements[];
  /**
  * Home region for the created license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#home_region LicensemanagerLicense#home_region}
  */
  readonly homeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#issuer LicensemanagerLicense#issuer}
  */
  readonly issuer: LicensemanagerLicenseIssuer;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#license_metadata LicensemanagerLicense#license_metadata}
  */
  readonly licenseMetadata?: LicensemanagerLicenseLicenseMetadata[];
  /**
  * Name for the created license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#license_name LicensemanagerLicense#license_name}
  */
  readonly licenseName: string;
  /**
  * Product name for the created license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#product_name LicensemanagerLicense#product_name}
  */
  readonly productName: string;
  /**
  * ProductSKU of the license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#product_sku LicensemanagerLicense#product_sku}
  */
  readonly productSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#status LicensemanagerLicense#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#validity LicensemanagerLicense#validity}
  */
  readonly validity: LicensemanagerLicenseValidity;
}
export interface LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#allow_early_check_in LicensemanagerLicense#allow_early_check_in}
  */
  readonly allowEarlyCheckIn: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}
  */
  readonly maxTimeToLiveInMinutes: number;
}

export function licensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_early_check_in: cdktf.booleanToTerraform(struct!.allowEarlyCheckIn),
    max_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.maxTimeToLiveInMinutes),
  }
}

export interface LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}
  */
  readonly maxTimeToLiveInMinutes: number;
}

export function licensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.maxTimeToLiveInMinutes),
  }
}

export interface LicensemanagerLicenseConsumptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#borrow_configuration LicensemanagerLicense#borrow_configuration}
  */
  readonly borrowConfiguration?: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#provisional_configuration LicensemanagerLicense#provisional_configuration}
  */
  readonly provisionalConfiguration?: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#renew_type LicensemanagerLicense#renew_type}
  */
  readonly renewType?: string;
}

export function licensemanagerLicenseConsumptionConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    borrow_configuration: licensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct!.borrowConfiguration),
    provisional_configuration: licensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct!.provisionalConfiguration),
    renew_type: cdktf.stringToTerraform(struct!.renewType),
  }
}

export interface LicensemanagerLicenseEntitlements {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#allow_check_in LicensemanagerLicense#allow_check_in}
  */
  readonly allowCheckIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#max_count LicensemanagerLicense#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#name LicensemanagerLicense#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#overage LicensemanagerLicense#overage}
  */
  readonly overage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#unit LicensemanagerLicense#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#value LicensemanagerLicense#value}
  */
  readonly value?: string;
}

export function licensemanagerLicenseEntitlementsToTerraform(struct?: LicensemanagerLicenseEntitlements): any {
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

export interface LicensemanagerLicenseIssuer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#name LicensemanagerLicense#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#sign_key LicensemanagerLicense#sign_key}
  */
  readonly signKey?: string;
}

export function licensemanagerLicenseIssuerToTerraform(struct?: LicensemanagerLicenseIssuer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sign_key: cdktf.stringToTerraform(struct!.signKey),
  }
}

export interface LicensemanagerLicenseLicenseMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#name LicensemanagerLicense#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#value LicensemanagerLicense#value}
  */
  readonly value: string;
}

export function licensemanagerLicenseLicenseMetadataToTerraform(struct?: LicensemanagerLicenseLicenseMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LicensemanagerLicenseValidity {
  /**
  * Validity begin date for the license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#begin LicensemanagerLicense#begin}
  */
  readonly begin: string;
  /**
  * Validity begin date for the license.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#end LicensemanagerLicense#end}
  */
  readonly end: string;
}

export function licensemanagerLicenseValidityToTerraform(struct?: LicensemanagerLicenseValidity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html awscc_licensemanager_license}
*/
export class LicensemanagerLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_licensemanager_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html awscc_licensemanager_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensemanagerLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfig) {
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
    this._beneficiary = config.beneficiary;
    this._consumptionConfiguration = config.consumptionConfiguration;
    this._entitlements = config.entitlements;
    this._homeRegion = config.homeRegion;
    this._issuer = config.issuer;
    this._licenseMetadata = config.licenseMetadata;
    this._licenseName = config.licenseName;
    this._productName = config.productName;
    this._productSku = config.productSku;
    this._status = config.status;
    this._validity = config.validity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beneficiary - computed: false, optional: true, required: false
  private _beneficiary?: string;
  public get beneficiary() {
    return this.getStringAttribute('beneficiary');
  }
  public set beneficiary(value: string ) {
    this._beneficiary = value;
  }
  public resetBeneficiary() {
    this._beneficiary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beneficiaryInput() {
    return this._beneficiary
  }

  // consumption_configuration - computed: false, optional: false, required: true
  private _consumptionConfiguration: LicensemanagerLicenseConsumptionConfiguration;
  public get consumptionConfiguration() {
    return this.interpolationForAttribute('consumption_configuration') as any;
  }
  public set consumptionConfiguration(value: LicensemanagerLicenseConsumptionConfiguration) {
    this._consumptionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionConfigurationInput() {
    return this._consumptionConfiguration
  }

  // entitlements - computed: false, optional: false, required: true
  private _entitlements: LicensemanagerLicenseEntitlements[];
  public get entitlements() {
    return this.interpolationForAttribute('entitlements') as any;
  }
  public set entitlements(value: LicensemanagerLicenseEntitlements[]) {
    this._entitlements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements
  }

  // home_region - computed: false, optional: false, required: true
  private _homeRegion: string;
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }
  public set homeRegion(value: string) {
    this._homeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeRegionInput() {
    return this._homeRegion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer: LicensemanagerLicenseIssuer;
  public get issuer() {
    return this.interpolationForAttribute('issuer') as any;
  }
  public set issuer(value: LicensemanagerLicenseIssuer) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer
  }

  // license_arn - computed: true, optional: false, required: false
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }

  // license_metadata - computed: false, optional: true, required: false
  private _licenseMetadata?: LicensemanagerLicenseLicenseMetadata[];
  public get licenseMetadata() {
    return this.interpolationForAttribute('license_metadata') as any;
  }
  public set licenseMetadata(value: LicensemanagerLicenseLicenseMetadata[] ) {
    this._licenseMetadata = value;
  }
  public resetLicenseMetadata() {
    this._licenseMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseMetadataInput() {
    return this._licenseMetadata
  }

  // license_name - computed: false, optional: false, required: true
  private _licenseName: string;
  public get licenseName() {
    return this.getStringAttribute('license_name');
  }
  public set licenseName(value: string) {
    this._licenseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseNameInput() {
    return this._licenseName
  }

  // product_name - computed: false, optional: false, required: true
  private _productName: string;
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName
  }

  // product_sku - computed: false, optional: true, required: false
  private _productSku?: string;
  public get productSku() {
    return this.getStringAttribute('product_sku');
  }
  public set productSku(value: string ) {
    this._productSku = value;
  }
  public resetProductSku() {
    this._productSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSkuInput() {
    return this._productSku
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

  // validity - computed: false, optional: false, required: true
  private _validity: LicensemanagerLicenseValidity;
  public get validity() {
    return this.interpolationForAttribute('validity') as any;
  }
  public set validity(value: LicensemanagerLicenseValidity) {
    this._validity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity
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
      beneficiary: cdktf.stringToTerraform(this._beneficiary),
      consumption_configuration: licensemanagerLicenseConsumptionConfigurationToTerraform(this._consumptionConfiguration),
      entitlements: cdktf.listMapper(licensemanagerLicenseEntitlementsToTerraform)(this._entitlements),
      home_region: cdktf.stringToTerraform(this._homeRegion),
      issuer: licensemanagerLicenseIssuerToTerraform(this._issuer),
      license_metadata: cdktf.listMapper(licensemanagerLicenseLicenseMetadataToTerraform)(this._licenseMetadata),
      license_name: cdktf.stringToTerraform(this._licenseName),
      product_name: cdktf.stringToTerraform(this._productName),
      product_sku: cdktf.stringToTerraform(this._productSku),
      status: cdktf.stringToTerraform(this._status),
      validity: licensemanagerLicenseValidityToTerraform(this._validity),
    };
  }
}
