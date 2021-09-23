import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSesContactListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html#id DataAwsccSesContactList#id}
    */
    readonly id: string;
}
export declare class DataAwsccSesContactListTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSesContactListTagsToTerraform(struct?: DataAwsccSesContactListTags): any;
export declare class DataAwsccSesContactListTopics extends cdktf.ComplexComputedList {
    get defaultSubscriptionStatus(): string;
    get description(): string;
    get displayName(): string;
    get topicName(): string;
}
export declare function dataAwsccSesContactListTopicsToTerraform(struct?: DataAwsccSesContactListTopics): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html awscc_ses_contact_list}
*/
export declare class DataAwsccSesContactList extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html awscc_ses_contact_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSesContactListConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSesContactListConfig);
    get contactListName(): string;
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get tags(): any;
    get topics(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
