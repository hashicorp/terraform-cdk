import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLicensemanagerGrantsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grants.html awscc_licensemanager_grants}
*/
export declare class DataAwsccLicensemanagerGrants extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_grants.html awscc_licensemanager_grants} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLicensemanagerGrantsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLicensemanagerGrantsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
