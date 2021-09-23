import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesContactListConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the contact list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#contact_list_name SesContactList#contact_list_name}
    */
    readonly contactListName?: string;
    /**
    * The description of the contact list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#description SesContactList#description}
    */
    readonly description?: string;
    /**
    * The tags (keys and values) associated with the contact list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#tags SesContactList#tags}
    */
    readonly tags?: SesContactListTags[];
    /**
    * The topics associated with the contact list.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#topics SesContactList#topics}
    */
    readonly topics?: SesContactListTopics[];
}
export interface SesContactListTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#key SesContactList#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#value SesContactList#value}
    */
    readonly value: string;
}
export declare function sesContactListTagsToTerraform(struct?: SesContactListTags): any;
export interface SesContactListTopics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#default_subscription_status SesContactList#default_subscription_status}
    */
    readonly defaultSubscriptionStatus: string;
    /**
    * The description of the topic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#description SesContactList#description}
    */
    readonly description?: string;
    /**
    * The display name of the topic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#display_name SesContactList#display_name}
    */
    readonly displayName: string;
    /**
    * The name of the topic.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html#topic_name SesContactList#topic_name}
    */
    readonly topicName: string;
}
export declare function sesContactListTopicsToTerraform(struct?: SesContactListTopics): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html awscc_ses_contact_list}
*/
export declare class SesContactList extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html awscc_ses_contact_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesContactListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SesContactListConfig);
    private _contactListName?;
    get contactListName(): string;
    set contactListName(value: string);
    resetContactListName(): void;
    get contactListNameInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _tags?;
    get tags(): SesContactListTags[];
    set tags(value: SesContactListTags[]);
    resetTags(): void;
    get tagsInput(): SesContactListTags[] | undefined;
    private _topics?;
    get topics(): SesContactListTopics[];
    set topics(value: SesContactListTopics[]);
    resetTopics(): void;
    get topicsInput(): SesContactListTopics[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
