import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLicensemanagerLicenseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html#id DataAwsccLicensemanagerLicense#id}
    */
    readonly id: string;
}
export declare class DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration extends cdktf.ComplexComputedList {
    get allowEarlyCheckIn(): any;
    get maxTimeToLiveInMinutes(): number;
}
export declare function dataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationBorrowConfiguration): any;
export declare class DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration extends cdktf.ComplexComputedList {
    get maxTimeToLiveInMinutes(): number;
}
export declare function dataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfigurationProvisionalConfiguration): any;
export declare class DataAwsccLicensemanagerLicenseConsumptionConfiguration extends cdktf.ComplexComputedList {
    get borrowConfiguration(): any;
    get provisionalConfiguration(): any;
    get renewType(): string;
}
export declare function dataAwsccLicensemanagerLicenseConsumptionConfigurationToTerraform(struct?: DataAwsccLicensemanagerLicenseConsumptionConfiguration): any;
export declare class DataAwsccLicensemanagerLicenseEntitlements extends cdktf.ComplexComputedList {
    get allowCheckIn(): any;
    get maxCount(): number;
    get name(): string;
    get overage(): any;
    get unit(): string;
    get value(): string;
}
export declare function dataAwsccLicensemanagerLicenseEntitlementsToTerraform(struct?: DataAwsccLicensemanagerLicenseEntitlements): any;
export declare class DataAwsccLicensemanagerLicenseIssuer extends cdktf.ComplexComputedList {
    get name(): string;
    get signKey(): string;
}
export declare function dataAwsccLicensemanagerLicenseIssuerToTerraform(struct?: DataAwsccLicensemanagerLicenseIssuer): any;
export declare class DataAwsccLicensemanagerLicenseLicenseMetadata extends cdktf.ComplexComputedList {
    get name(): string;
    get value(): string;
}
export declare function dataAwsccLicensemanagerLicenseLicenseMetadataToTerraform(struct?: DataAwsccLicensemanagerLicenseLicenseMetadata): any;
export declare class DataAwsccLicensemanagerLicenseValidity extends cdktf.ComplexComputedList {
    get begin(): string;
    get end(): string;
}
export declare function dataAwsccLicensemanagerLicenseValidityToTerraform(struct?: DataAwsccLicensemanagerLicenseValidity): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html awscc_licensemanager_license}
*/
export declare class DataAwsccLicensemanagerLicense extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_license.html awscc_licensemanager_license} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLicensemanagerLicenseConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLicensemanagerLicenseConfig);
    get beneficiary(): string;
    get consumptionConfiguration(): any;
    get entitlements(): any;
    get homeRegion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get issuer(): any;
    get licenseArn(): string;
    get licenseMetadata(): any;
    get licenseName(): string;
    get productName(): string;
    get productSku(): string;
    get status(): string;
    get validity(): any;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
