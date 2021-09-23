import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccBudgetsBudgetsActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html#id DataAwsccBudgetsBudgetsAction#id}
    */
    readonly id: string;
}
export declare class DataAwsccBudgetsBudgetsActionActionThreshold extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): number;
}
export declare function dataAwsccBudgetsBudgetsActionActionThresholdToTerraform(struct?: DataAwsccBudgetsBudgetsActionActionThreshold): any;
export declare class DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition extends cdktf.ComplexComputedList {
    get groups(): string[];
    get policyArn(): string;
    get roles(): string[];
    get users(): string[];
}
export declare function dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition): any;
export declare class DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition extends cdktf.ComplexComputedList {
    get policyId(): string;
    get targetIds(): string[];
}
export declare function dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition): any;
export declare class DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition extends cdktf.ComplexComputedList {
    get instanceIds(): string[];
    get region(): string;
    get subtype(): string;
}
export declare function dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition): any;
export declare class DataAwsccBudgetsBudgetsActionDefinition extends cdktf.ComplexComputedList {
    get iamActionDefinition(): any;
    get scpActionDefinition(): any;
    get ssmActionDefinition(): any;
}
export declare function dataAwsccBudgetsBudgetsActionDefinitionToTerraform(struct?: DataAwsccBudgetsBudgetsActionDefinition): any;
export declare class DataAwsccBudgetsBudgetsActionSubscribers extends cdktf.ComplexComputedList {
    get address(): string;
    get type(): string;
}
export declare function dataAwsccBudgetsBudgetsActionSubscribersToTerraform(struct?: DataAwsccBudgetsBudgetsActionSubscribers): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html awscc_budgets_budgets_action}
*/
export declare class DataAwsccBudgetsBudgetsAction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/budgets_budgets_action.html awscc_budgets_budgets_action} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccBudgetsBudgetsActionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccBudgetsBudgetsActionConfig);
    get actionId(): string;
    get actionThreshold(): any;
    get actionType(): string;
    get approvalModel(): string;
    get budgetName(): string;
    get definition(): any;
    get executionRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get notificationType(): string;
    get subscribers(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
