import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DataAwsccLicensemanagerGrant extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grant.html awscc_licensemanager_grant} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLicensemanagerGrantConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccLicensemanagerGrantConfig);
    get allowedOperations(): string[];
    get grantArn(): string;
    get grantName(): string;
    get homeRegion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get licenseArn(): string;
    get principals(): string[];
    get status(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
