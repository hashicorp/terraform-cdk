// https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetsBudgetsActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#action_threshold BudgetsBudgetsAction#action_threshold}
  */
  readonly actionThreshold: BudgetsBudgetsActionActionThreshold;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#action_type BudgetsBudgetsAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#approval_model BudgetsBudgetsAction#approval_model}
  */
  readonly approvalModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#budget_name BudgetsBudgetsAction#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#definition BudgetsBudgetsAction#definition}
  */
  readonly definition: BudgetsBudgetsActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#execution_role_arn BudgetsBudgetsAction#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#notification_type BudgetsBudgetsAction#notification_type}
  */
  readonly notificationType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#subscribers BudgetsBudgetsAction#subscribers}
  */
  readonly subscribers?: BudgetsBudgetsActionSubscribers[];
}
export interface BudgetsBudgetsActionActionThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#type BudgetsBudgetsAction#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#value BudgetsBudgetsAction#value}
  */
  readonly value: number;
}

export function budgetsBudgetsActionActionThresholdToTerraform(struct?: BudgetsBudgetsActionActionThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface BudgetsBudgetsActionDefinitionIamActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#groups BudgetsBudgetsAction#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#policy_arn BudgetsBudgetsAction#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#roles BudgetsBudgetsAction#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#users BudgetsBudgetsAction#users}
  */
  readonly users?: string[];
}

export function budgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionIamActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}

export interface BudgetsBudgetsActionDefinitionScpActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#policy_id BudgetsBudgetsAction#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#target_ids BudgetsBudgetsAction#target_ids}
  */
  readonly targetIds: string[];
}

export function budgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionScpActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetIds),
  }
}

export interface BudgetsBudgetsActionDefinitionSsmActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#instance_ids BudgetsBudgetsAction#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#region BudgetsBudgetsAction#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#subtype BudgetsBudgetsAction#subtype}
  */
  readonly subtype: string;
}

export function budgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionSsmActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceIds),
    region: cdktf.stringToTerraform(struct!.region),
    subtype: cdktf.stringToTerraform(struct!.subtype),
  }
}

export interface BudgetsBudgetsActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#iam_action_definition BudgetsBudgetsAction#iam_action_definition}
  */
  readonly iamActionDefinition?: BudgetsBudgetsActionDefinitionIamActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#scp_action_definition BudgetsBudgetsAction#scp_action_definition}
  */
  readonly scpActionDefinition?: BudgetsBudgetsActionDefinitionScpActionDefinition;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}
  */
  readonly ssmActionDefinition?: BudgetsBudgetsActionDefinitionSsmActionDefinition;
}

export function budgetsBudgetsActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_action_definition: budgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct!.iamActionDefinition),
    scp_action_definition: budgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct!.scpActionDefinition),
    ssm_action_definition: budgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct!.ssmActionDefinition),
  }
}

export interface BudgetsBudgetsActionSubscribers {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#address BudgetsBudgetsAction#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html#type BudgetsBudgetsAction#type}
  */
  readonly type: string;
}

export function budgetsBudgetsActionSubscribersToTerraform(struct?: BudgetsBudgetsActionSubscribers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html awscc_budgets_budgets_action}
*/
export class BudgetsBudgetsAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_budgets_budgets_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html awscc_budgets_budgets_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetsActionConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetsActionConfig) {
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
    this._actionThreshold = config.actionThreshold;
    this._actionType = config.actionType;
    this._approvalModel = config.approvalModel;
    this._budgetName = config.budgetName;
    this._definition = config.definition;
    this._executionRoleArn = config.executionRoleArn;
    this._notificationType = config.notificationType;
    this._subscribers = config.subscribers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_threshold - computed: false, optional: false, required: true
  private _actionThreshold: BudgetsBudgetsActionActionThreshold;
  public get actionThreshold() {
    return this.interpolationForAttribute('action_threshold') as any;
  }
  public set actionThreshold(value: BudgetsBudgetsActionActionThreshold) {
    this._actionThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdInput() {
    return this._actionThreshold
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType: string;
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType
  }

  // approval_model - computed: false, optional: true, required: false
  private _approvalModel?: string;
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }
  public set approvalModel(value: string ) {
    this._approvalModel = value;
  }
  public resetApprovalModel() {
    this._approvalModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModelInput() {
    return this._approvalModel
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName: string;
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName
  }

  // definition - computed: false, optional: false, required: true
  private _definition: BudgetsBudgetsActionDefinition;
  public get definition() {
    return this.interpolationForAttribute('definition') as any;
  }
  public set definition(value: BudgetsBudgetsActionDefinition) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType: string;
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }

  // subscribers - computed: false, optional: true, required: false
  private _subscribers?: BudgetsBudgetsActionSubscribers[];
  public get subscribers() {
    return this.interpolationForAttribute('subscribers') as any;
  }
  public set subscribers(value: BudgetsBudgetsActionSubscribers[] ) {
    this._subscribers = value;
  }
  public resetSubscribers() {
    this._subscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribersInput() {
    return this._subscribers
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_threshold: budgetsBudgetsActionActionThresholdToTerraform(this._actionThreshold),
      action_type: cdktf.stringToTerraform(this._actionType),
      approval_model: cdktf.stringToTerraform(this._approvalModel),
      budget_name: cdktf.stringToTerraform(this._budgetName),
      definition: budgetsBudgetsActionDefinitionToTerraform(this._definition),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      subscribers: cdktf.listMapper(budgetsBudgetsActionSubscribersToTerraform)(this._subscribers),
    };
  }
}
