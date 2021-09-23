import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function budgetsBudgetsActionActionThresholdToTerraform(struct?: BudgetsBudgetsActionActionThreshold): any;
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
export declare function budgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionIamActionDefinition): any;
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
export declare function budgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionScpActionDefinition): any;
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
export declare function budgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinitionSsmActionDefinition): any;
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
export declare function budgetsBudgetsActionDefinitionToTerraform(struct?: BudgetsBudgetsActionDefinition): any;
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
export declare function budgetsBudgetsActionSubscribersToTerraform(struct?: BudgetsBudgetsActionSubscribers): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html awscc_budgets_budgets_action}
*/
export declare class BudgetsBudgetsAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/budgets_budgets_action.html awscc_budgets_budgets_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetsActionConfig
    */
    constructor(scope: Construct, id: string, config: BudgetsBudgetsActionConfig);
    get actionId(): string;
    private _actionThreshold;
    get actionThreshold(): BudgetsBudgetsActionActionThreshold;
    set actionThreshold(value: BudgetsBudgetsActionActionThreshold);
    get actionThresholdInput(): BudgetsBudgetsActionActionThreshold;
    private _actionType;
    get actionType(): string;
    set actionType(value: string);
    get actionTypeInput(): string;
    private _approvalModel?;
    get approvalModel(): string;
    set approvalModel(value: string);
    resetApprovalModel(): void;
    get approvalModelInput(): string | undefined;
    private _budgetName;
    get budgetName(): string;
    set budgetName(value: string);
    get budgetNameInput(): string;
    private _definition;
    get definition(): BudgetsBudgetsActionDefinition;
    set definition(value: BudgetsBudgetsActionDefinition);
    get definitionInput(): BudgetsBudgetsActionDefinition;
    private _executionRoleArn;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _notificationType;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string;
    private _subscribers?;
    get subscribers(): BudgetsBudgetsActionSubscribers[];
    set subscribers(value: BudgetsBudgetsActionSubscribers[]);
    resetSubscribers(): void;
    get subscribersInput(): BudgetsBudgetsActionSubscribers[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
