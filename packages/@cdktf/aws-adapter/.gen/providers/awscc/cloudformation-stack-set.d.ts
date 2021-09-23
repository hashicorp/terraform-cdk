import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
    */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment;
    /**
    * Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#call_as CloudformationStackSet#call_as}
    */
    readonly callAs?: string;
    /**
    * In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#description CloudformationStackSet#description}
    */
    readonly description?: string;
    /**
    * The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * The user-specified preferences for how AWS CloudFormation performs a stack set operation.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#operation_preferences CloudformationStackSet#operation_preferences}
    */
    readonly operationPreferences?: CloudformationStackSetOperationPreferences;
    /**
    * The input parameters for the stack set template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}
    */
    readonly parameters?: CloudformationStackSetParameters[];
    /**
    * Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}
    */
    readonly permissionModel: string;
    /**
    * A group of stack instances with parameters in some specific accounts and regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#stack_instances_group CloudformationStackSet#stack_instances_group}
    */
    readonly stackInstancesGroup?: CloudformationStackSetStackInstancesGroup[];
    /**
    * The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#stack_set_name CloudformationStackSet#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}
    */
    readonly tags?: CloudformationStackSetTags[];
    /**
    * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}
    */
    readonly templateUrl?: string;
}
export interface CloudformationStackSetAutoDeployment {
    /**
    * If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
}
export declare function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeployment): any;
export interface CloudformationStackSetOperationPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#max_concurrent_count CloudformationStackSet#max_concurrent_count}
    */
    readonly maxConcurrentCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}
    */
    readonly maxConcurrentPercentage?: number;
    /**
    * The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#region_concurrency_type CloudformationStackSet#region_concurrency_type}
    */
    readonly regionConcurrencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#region_order CloudformationStackSet#region_order}
    */
    readonly regionOrder?: string[];
}
export declare function cloudformationStackSetOperationPreferencesToTerraform(struct?: CloudformationStackSetOperationPreferences): any;
export interface CloudformationStackSetParameters {
    /**
    * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameter_key CloudformationStackSet#parameter_key}
    */
    readonly parameterKey: string;
    /**
    * The input value associated with the parameter.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameter_value CloudformationStackSet#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function cloudformationStackSetParametersToTerraform(struct?: CloudformationStackSetParameters): any;
export interface CloudformationStackSetStackInstancesGroupDeploymentTargets {
    /**
    * AWS accounts that you want to create stack instances in the specified Region(s) for.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#accounts CloudformationStackSet#accounts}
    */
    readonly accounts?: string[];
    /**
    * The organization root ID or organizational unit (OU) IDs to which StackSets deploys.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#organizational_unit_ids CloudformationStackSet#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
}
export declare function cloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct?: CloudformationStackSetStackInstancesGroupDeploymentTargets): any;
export interface CloudformationStackSetStackInstancesGroupParameterOverrides {
    /**
    * The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameter_key CloudformationStackSet#parameter_key}
    */
    readonly parameterKey: string;
    /**
    * The input value associated with the parameter.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameter_value CloudformationStackSet#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function cloudformationStackSetStackInstancesGroupParameterOverridesToTerraform(struct?: CloudformationStackSetStackInstancesGroupParameterOverrides): any;
export interface CloudformationStackSetStackInstancesGroup {
    /**
    *  The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#deployment_targets CloudformationStackSet#deployment_targets}
    */
    readonly deploymentTargets: CloudformationStackSetStackInstancesGroupDeploymentTargets;
    /**
    * A list of stack set parameters whose values you want to override in the selected stack instances.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#parameter_overrides CloudformationStackSet#parameter_overrides}
    */
    readonly parameterOverrides?: CloudformationStackSetStackInstancesGroupParameterOverrides[];
    /**
    * The names of one or more Regions where you want to create stack instances using the specified AWS account(s).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#regions CloudformationStackSet#regions}
    */
    readonly regions: string[];
}
export declare function cloudformationStackSetStackInstancesGroupToTerraform(struct?: CloudformationStackSetStackInstancesGroup): any;
export interface CloudformationStackSetTags {
    /**
    * A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#key CloudformationStackSet#key}
    */
    readonly key: string;
    /**
    * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html#value CloudformationStackSet#value}
    */
    readonly value: string;
}
export declare function cloudformationStackSetTagsToTerraform(struct?: CloudformationStackSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html awscc_cloudformation_stack_set}
*/
export declare class CloudformationStackSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html awscc_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationStackSetConfig);
    private _administrationRoleArn?;
    get administrationRoleArn(): string;
    set administrationRoleArn(value: string);
    resetAdministrationRoleArn(): void;
    get administrationRoleArnInput(): string | undefined;
    private _autoDeployment?;
    get autoDeployment(): CloudformationStackSetAutoDeployment;
    set autoDeployment(value: CloudformationStackSetAutoDeployment);
    resetAutoDeployment(): void;
    get autoDeploymentInput(): CloudformationStackSetAutoDeployment | undefined;
    private _callAs?;
    get callAs(): string;
    set callAs(value: string);
    resetCallAs(): void;
    get callAsInput(): string | undefined;
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _executionRoleName?;
    get executionRoleName(): string;
    set executionRoleName(value: string);
    resetExecutionRoleName(): void;
    get executionRoleNameInput(): string | undefined;
    get id(): string;
    private _operationPreferences?;
    get operationPreferences(): CloudformationStackSetOperationPreferences;
    set operationPreferences(value: CloudformationStackSetOperationPreferences);
    resetOperationPreferences(): void;
    get operationPreferencesInput(): CloudformationStackSetOperationPreferences | undefined;
    private _parameters?;
    get parameters(): CloudformationStackSetParameters[];
    set parameters(value: CloudformationStackSetParameters[]);
    resetParameters(): void;
    get parametersInput(): CloudformationStackSetParameters[] | undefined;
    private _permissionModel;
    get permissionModel(): string;
    set permissionModel(value: string);
    get permissionModelInput(): string;
    private _stackInstancesGroup?;
    get stackInstancesGroup(): CloudformationStackSetStackInstancesGroup[];
    set stackInstancesGroup(value: CloudformationStackSetStackInstancesGroup[]);
    resetStackInstancesGroup(): void;
    get stackInstancesGroupInput(): CloudformationStackSetStackInstancesGroup[] | undefined;
    get stackSetId(): string;
    private _stackSetName;
    get stackSetName(): string;
    set stackSetName(value: string);
    get stackSetNameInput(): string;
    private _tags?;
    get tags(): CloudformationStackSetTags[];
    set tags(value: CloudformationStackSetTags[]);
    resetTags(): void;
    get tagsInput(): CloudformationStackSetTags[] | undefined;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
