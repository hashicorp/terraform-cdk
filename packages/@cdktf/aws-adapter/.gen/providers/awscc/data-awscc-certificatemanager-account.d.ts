import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCertificatemanagerAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html#id DataAwsccCertificatemanagerAccount#id}
    */
    readonly id: string;
}
export declare class DataAwsccCertificatemanagerAccountExpiryEventsConfiguration extends cdktf.ComplexComputedList {
    get daysBeforeExpiry(): number;
}
export declare function dataAwsccCertificatemanagerAccountExpiryEventsConfigurationToTerraform(struct?: DataAwsccCertificatemanagerAccountExpiryEventsConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html awscc_certificatemanager_account}
*/
export declare class DataAwsccCertificatemanagerAccount extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/certificatemanager_account.html awscc_certificatemanager_account} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCertificatemanagerAccountConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCertificatemanagerAccountConfig);
    get accountId(): string;
    get expiryEventsConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
