// https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccBudgetsBudgetsActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html#id DataAwsccBudgetsBudgetsAction#id}
  */
  readonly id: string;
}
export class DataAwsccBudgetsBudgetsActionActionThreshold extends cdktf.ComplexComputedList {

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export function dataAwsccBudgetsBudgetsActionActionThresholdToTerraform(struct?: DataAwsccBudgetsBudgetsActionActionThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition extends cdktf.ComplexComputedList {

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // policy_arn - computed: true, optional: false, required: false
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

export function dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}

export class DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition extends cdktf.ComplexComputedList {

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
}

export function dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetIds),
  }
}

export class DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition extends cdktf.ComplexComputedList {

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
}

export function dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceIds),
    region: cdktf.stringToTerraform(struct!.region),
    subtype: cdktf.stringToTerraform(struct!.subtype),
  }
}

export class DataAwsccBudgetsBudgetsActionDefinition extends cdktf.ComplexComputedList {

  // iam_action_definition - computed: true, optional: false, required: false
  public get iamActionDefinition() {
    return this.interpolationForAttribute('iam_action_definition') as any;
  }

  // scp_action_definition - computed: true, optional: false, required: false
  public get scpActionDefinition() {
    return this.interpolationForAttribute('scp_action_definition') as any;
  }

  // ssm_action_definition - computed: true, optional: false, required: false
  public get ssmActionDefinition() {
    return this.interpolationForAttribute('ssm_action_definition') as any;
  }
}

export function dataAwsccBudgetsBudgetsActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_action_definition: dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct!.iamActionDefinition),
    scp_action_definition: dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct!.scpActionDefinition),
    ssm_action_definition: dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct!.ssmActionDefinition),
  }
}

export class DataAwsccBudgetsBudgetsActionSubscribers extends cdktf.ComplexComputedList {

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccBudgetsBudgetsActionSubscribersToTerraform(struct?: DataAwsccBudgetsBudgetsActionSubscribers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html awscc_budgets_budgets_action}
*/
export class DataAwsccBudgetsBudgetsAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_budgets_budgets_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html awscc_budgets_budgets_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccBudgetsBudgetsActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccBudgetsBudgetsActionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_budgets_budgets_action',
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

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_threshold - computed: true, optional: false, required: false
  public get actionThreshold() {
    return this.interpolationForAttribute('action_threshold') as any;
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // approval_model - computed: true, optional: false, required: false
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }

  // budget_name - computed: true, optional: false, required: false
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }

  // execution_role_arn - computed: true, optional: false, required: false
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
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

  // notification_type - computed: true, optional: false, required: false
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }

  // subscribers - computed: true, optional: false, required: false
  public get subscribers() {
    return this.interpolationForAttribute('subscribers') as any;
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
