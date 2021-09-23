// https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function sesContactListTagsToTerraform(struct?: SesContactListTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

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

export function sesContactListTopicsToTerraform(struct?: SesContactListTopics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_subscription_status: cdktf.stringToTerraform(struct!.defaultSubscriptionStatus),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html awscc_ses_contact_list}
*/
export class SesContactList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ses_contact_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ses_contact_list.html awscc_ses_contact_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesContactListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SesContactListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_ses_contact_list',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contactListName = config.contactListName;
    this._description = config.description;
    this._tags = config.tags;
    this._topics = config.topics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_list_name - computed: true, optional: true, required: false
  private _contactListName?: string;
  public get contactListName() {
    return this.getStringAttribute('contact_list_name');
  }
  public set contactListName(value: string) {
    this._contactListName = value;
  }
  public resetContactListName() {
    this._contactListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactListNameInput() {
    return this._contactListName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: SesContactListTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SesContactListTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: SesContactListTopics[];
  public get topics() {
    return this.interpolationForAttribute('topics') as any;
  }
  public set topics(value: SesContactListTopics[] ) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_list_name: cdktf.stringToTerraform(this._contactListName),
      description: cdktf.stringToTerraform(this._description),
      tags: cdktf.listMapper(sesContactListTagsToTerraform)(this._tags),
      topics: cdktf.listMapper(sesContactListTopicsToTerraform)(this._topics),
    };
  }
}
