import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCustomerprofilesObjectTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html#id DataAwsccCustomerprofilesObjectType#id}
    */
    readonly id: string;
}
export declare class DataAwsccCustomerprofilesObjectTypeFieldsObjectTypeField extends cdktf.ComplexComputedList {
    get contentType(): string;
    get source(): string;
    get target(): string;
}
export declare function dataAwsccCustomerprofilesObjectTypeFieldsObjectTypeFieldToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeFieldsObjectTypeField): any;
export declare class DataAwsccCustomerprofilesObjectTypeFields extends cdktf.ComplexComputedList {
    get name(): string;
    get objectTypeField(): any;
}
export declare function dataAwsccCustomerprofilesObjectTypeFieldsToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeFields): any;
export declare class DataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyList extends cdktf.ComplexComputedList {
    get fieldNames(): string[];
    get standardIdentifiers(): string[];
}
export declare function dataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyListToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeKeysObjectTypeKeyList): any;
export declare class DataAwsccCustomerprofilesObjectTypeKeys extends cdktf.ComplexComputedList {
    get name(): string;
    get objectTypeKeyList(): any;
}
export declare function dataAwsccCustomerprofilesObjectTypeKeysToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeKeys): any;
export declare class DataAwsccCustomerprofilesObjectTypeTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccCustomerprofilesObjectTypeTagsToTerraform(struct?: DataAwsccCustomerprofilesObjectTypeTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html awscc_customerprofiles_object_type}
*/
export declare class DataAwsccCustomerprofilesObjectType extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/customerprofiles_object_type.html awscc_customerprofiles_object_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCustomerprofilesObjectTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCustomerprofilesObjectTypeConfig);
    get allowProfileCreation(): cdktf.IResolvable;
    get createdAt(): string;
    get description(): string;
    get domainName(): string;
    get encryptionKey(): string;
    get expirationDays(): number;
    get fields(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keys(): any;
    get lastUpdatedAt(): string;
    get objectTypeName(): string;
    get tags(): any;
    get templateId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
