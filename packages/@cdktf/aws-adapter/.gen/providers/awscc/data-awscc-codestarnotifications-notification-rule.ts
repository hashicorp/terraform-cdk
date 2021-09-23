// https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html#id DataAwsccCodestarnotificationsNotificationRule#id}
  */
  readonly id: string;
}
export class DataAwsccCodestarnotificationsNotificationRuleTargets extends cdktf.ComplexComputedList {

  // target_address - computed: true, optional: false, required: false
  public get targetAddress() {
    return this.getStringAttribute('target_address');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
}

export function dataAwsccCodestarnotificationsNotificationRuleTargetsToTerraform(struct?: DataAwsccCodestarnotificationsNotificationRuleTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_address: cdktf.stringToTerraform(struct!.targetAddress),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule}
*/
export class DataAwsccCodestarnotificationsNotificationRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codestarnotifications_notification_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCodestarnotificationsNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCodestarnotificationsNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_codestarnotifications_notification_rule',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: true, optional: false, required: false
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }

  // event_type_ids - computed: true, optional: false, required: false
  public get eventTypeIds() {
    return this.getListAttribute('event_type_ids');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // targets - computed: true, optional: false, required: false
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
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
