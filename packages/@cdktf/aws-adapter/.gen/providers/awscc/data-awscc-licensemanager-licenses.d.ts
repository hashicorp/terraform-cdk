import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccLicensemanagerLicensesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_licenses.html awscc_licensemanager_licenses}
*/
export declare class DataAwsccLicensemanagerLicenses extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/licensemanager_licenses.html awscc_licensemanager_licenses} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccLicensemanagerLicensesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccLicensemanagerLicensesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
