import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class LicensemanagerGrant extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/licensemanager_grant.html awscc_licensemanager_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerGrantConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LicensemanagerGrantConfig);
    private _allowedOperations?;
    get allowedOperations(): string[];
    set allowedOperations(value: string[]);
    resetAllowedOperations(): void;
    get allowedOperationsInput(): string[] | undefined;
    get grantArn(): string;
    private _grantName?;
    get grantName(): string;
    set grantName(value: string);
    resetGrantName(): void;
    get grantNameInput(): string | undefined;
    private _homeRegion?;
    get homeRegion(): string;
    set homeRegion(value: string);
    resetHomeRegion(): void;
    get homeRegionInput(): string | undefined;
    get id(): string;
    private _licenseArn?;
    get licenseArn(): string;
    set licenseArn(value: string);
    resetLicenseArn(): void;
    get licenseArnInput(): string | undefined;
    private _principals?;
    get principals(): string[];
    set principals(value: string[]);
    resetPrincipals(): void;
    get principalsInput(): string[] | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
