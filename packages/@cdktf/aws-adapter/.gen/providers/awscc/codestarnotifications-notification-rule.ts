// https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#detail_type CodestarnotificationsNotificationRule#detail_type}
  */
  readonly detailType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
  */
  readonly eventTypeIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#name CodestarnotificationsNotificationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#resource CodestarnotificationsNotificationRule#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#status CodestarnotificationsNotificationRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#tags CodestarnotificationsNotificationRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#targets CodestarnotificationsNotificationRule#targets}
  */
  readonly targets: CodestarnotificationsNotificationRuleTargets[];
}
export interface CodestarnotificationsNotificationRuleTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#target_address CodestarnotificationsNotificationRule#target_address}
  */
  readonly targetAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html#target_type CodestarnotificationsNotificationRule#target_type}
  */
  readonly targetType: string;
}

export function codestarnotificationsNotificationRuleTargetsToTerraform(struct?: CodestarnotificationsNotificationRuleTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_address: cdktf.stringToTerraform(struct!.targetAddress),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule}
*/
export class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_codestarnotifications_notification_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/codestarnotifications_notification_rule.html awscc_codestarnotifications_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodestarnotificationsNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig) {
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
    this._detailType = config.detailType;
    this._eventTypeIds = config.eventTypeIds;
    this._name = config.name;
    this._resource = config.resource;
    this._status = config.status;
    this._tags = config.tags;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType: string;
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType
  }

  // event_type_ids - computed: false, optional: false, required: true
  private _eventTypeIds: string[];
  public get eventTypeIds() {
    return this.getListAttribute('event_type_ids');
  }
  public set eventTypeIds(value: string[]) {
    this._eventTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeIdsInput() {
    return this._eventTypeIds
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // status - computed: false, optional: true, required: false
  private _status?: string;
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string ) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // targets - computed: false, optional: false, required: true
  private _targets: CodestarnotificationsNotificationRuleTargets[];
  public get targets() {
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: CodestarnotificationsNotificationRuleTargets[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detail_type: cdktf.stringToTerraform(this._detailType),
      event_type_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._eventTypeIds),
      name: cdktf.stringToTerraform(this._name),
      resource: cdktf.stringToTerraform(this._resource),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      targets: cdktf.listMapper(codestarnotificationsNotificationRuleTargetsToTerraform)(this._targets),
    };
  }
}
