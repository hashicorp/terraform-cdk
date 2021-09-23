// https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSesContactListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html#id DataAwsccSesContactList#id}
  */
  readonly id: string;
}
export class DataAwsccSesContactListTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSesContactListTagsToTerraform(struct?: DataAwsccSesContactListTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccSesContactListTopics extends cdktf.ComplexComputedList {

  // default_subscription_status - computed: true, optional: false, required: false
  public get defaultSubscriptionStatus() {
    return this.getStringAttribute('default_subscription_status');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // topic_name - computed: true, optional: false, required: false
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
}

export function dataAwsccSesContactListTopicsToTerraform(struct?: DataAwsccSesContactListTopics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_subscription_status: cdktf.stringToTerraform(struct!.defaultSubscriptionStatus),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html awscc_ses_contact_list}
*/
export class DataAwsccSesContactList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ses_contact_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ses_contact_list.html awscc_ses_contact_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSesContactListConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSesContactListConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_list_name - computed: true, optional: false, required: false
  public get contactListName() {
    return this.getStringAttribute('contact_list_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return this.interpolationForAttribute('topics') as any;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
