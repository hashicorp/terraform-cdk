import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function licensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any;
export interface LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html#max_time_to_live_in_minutes LicensemanagerLicense#max_time_to_live_in_minutes}
    */
    readonly maxTimeToLiveInMinutes: number;
}
export declare function licensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any;
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
export declare function licensemanagerLicenseConsumptionConfigurationToTerraform(struct?: LicensemanagerLicenseConsumptionConfiguration): any;
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
export declare function licensemanagerLicenseEntitlementsToTerraform(struct?: LicensemanagerLicenseEntitlements): any;
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
export declare function licensemanagerLicenseIssuerToTerraform(struct?: LicensemanagerLicenseIssuer): any;
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
export declare function licensemanagerLicenseLicenseMetadataToTerraform(struct?: LicensemanagerLicenseLicenseMetadata): any;
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
export declare function licensemanagerLicenseValidityToTerraform(struct?: LicensemanagerLicenseValidity): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html awscc_licensemanager_license}
*/
export declare class LicensemanagerLicense extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_license.html awscc_licensemanager_license} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerLicenseConfig
    */
    constructor(scope: Construct, id: string, config: LicensemanagerLicenseConfig);
    private _beneficiary?;
    get beneficiary(): string;
    set beneficiary(value: string);
    resetBeneficiary(): void;
    get beneficiaryInput(): string | undefined;
    private _consumptionConfiguration;
    get consumptionConfiguration(): LicensemanagerLicenseConsumptionConfiguration;
    set consumptionConfiguration(value: LicensemanagerLicenseConsumptionConfiguration);
    get consumptionConfigurationInput(): LicensemanagerLicenseConsumptionConfiguration;
    private _entitlements;
    get entitlements(): LicensemanagerLicenseEntitlements[];
    set entitlements(value: LicensemanagerLicenseEntitlements[]);
    get entitlementsInput(): LicensemanagerLicenseEntitlements[];
    private _homeRegion;
    get homeRegion(): string;
    set homeRegion(value: string);
    get homeRegionInput(): string;
    get id(): string;
    private _issuer;
    get issuer(): LicensemanagerLicenseIssuer;
    set issuer(value: LicensemanagerLicenseIssuer);
    get issuerInput(): LicensemanagerLicenseIssuer;
    get licenseArn(): string;
    private _licenseMetadata?;
    get licenseMetadata(): LicensemanagerLicenseLicenseMetadata[];
    set licenseMetadata(value: LicensemanagerLicenseLicenseMetadata[]);
    resetLicenseMetadata(): void;
    get licenseMetadataInput(): LicensemanagerLicenseLicenseMetadata[] | undefined;
    private _licenseName;
    get licenseName(): string;
    set licenseName(value: string);
    get licenseNameInput(): string;
    private _productName;
    get productName(): string;
    set productName(value: string);
    get productNameInput(): string;
    private _productSku?;
    get productSku(): string;
    set productSku(value: string);
    resetProductSku(): void;
    get productSkuInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _validity;
    get validity(): LicensemanagerLicenseValidity;
    set validity(value: LicensemanagerLicenseValidity);
    get validityInput(): LicensemanagerLicenseValidity;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
