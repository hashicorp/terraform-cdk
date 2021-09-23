import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCustomerprofilesDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html#id DataAwsccCustomerprofilesDomain#id}
    */
    readonly id: string;
}
export declare class DataAwsccCustomerprofilesDomainTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCustomerprofilesDomainTagsToTerraform(struct?: DataAwsccCustomerprofilesDomainTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html awscc_customerprofiles_domain}
*/
export declare class DataAwsccCustomerprofilesDomain extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_domain.html awscc_customerprofiles_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCustomerprofilesDomainConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesDomainConfig);
    get createdAt(): string;
    get deadLetterQueueUrl(): string;
    get defaultEncryptionKey(): string;
    get defaultExpirationDays(): number;
    get domainName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get lastUpdatedAt(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
