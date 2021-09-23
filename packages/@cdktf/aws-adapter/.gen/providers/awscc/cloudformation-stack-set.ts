// https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
  }
}

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

export function cloudformationStackSetOperationPreferencesToTerraform(struct?: CloudformationStackSetOperationPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrent_count: cdktf.numberToTerraform(struct!.maxConcurrentCount),
    max_concurrent_percentage: cdktf.numberToTerraform(struct!.maxConcurrentPercentage),
    region_concurrency_type: cdktf.stringToTerraform(struct!.regionConcurrencyType),
    region_order: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regionOrder),
  }
}

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

export function cloudformationStackSetParametersToTerraform(struct?: CloudformationStackSetParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

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

export function cloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct?: CloudformationStackSetStackInstancesGroupDeploymentTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accounts),
    organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnitIds),
  }
}

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

export function cloudformationStackSetStackInstancesGroupParameterOverridesToTerraform(struct?: CloudformationStackSetStackInstancesGroupParameterOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

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

export function cloudformationStackSetStackInstancesGroupToTerraform(struct?: CloudformationStackSetStackInstancesGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_targets: cloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct!.deploymentTargets),
    parameter_overrides: cdktf.listMapper(cloudformationStackSetStackInstancesGroupParameterOverridesToTerraform)(struct!.parameterOverrides),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

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

export function cloudformationStackSetTagsToTerraform(struct?: CloudformationStackSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html awscc_cloudformation_stack_set}
*/
export class CloudformationStackSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_stack_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_stack_set.html awscc_cloudformation_stack_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackSetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_stack_set',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administrationRoleArn = config.administrationRoleArn;
    this._autoDeployment = config.autoDeployment;
    this._callAs = config.callAs;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._executionRoleName = config.executionRoleName;
    this._operationPreferences = config.operationPreferences;
    this._parameters = config.parameters;
    this._permissionModel = config.permissionModel;
    this._stackInstancesGroup = config.stackInstancesGroup;
    this._stackSetName = config.stackSetName;
    this._tags = config.tags;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: false, optional: true, required: false
  private _administrationRoleArn?: string;
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }
  public set administrationRoleArn(value: string ) {
    this._administrationRoleArn = value;
  }
  public resetAdministrationRoleArn() {
    this._administrationRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrationRoleArnInput() {
    return this._administrationRoleArn
  }

  // auto_deployment - computed: false, optional: true, required: false
  private _autoDeployment?: CloudformationStackSetAutoDeployment;
  public get autoDeployment() {
    return this.interpolationForAttribute('auto_deployment') as any;
  }
  public set autoDeployment(value: CloudformationStackSetAutoDeployment ) {
    this._autoDeployment = value;
  }
  public resetAutoDeployment() {
    this._autoDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentInput() {
    return this._autoDeployment
  }

  // call_as - computed: false, optional: true, required: false
  private _callAs?: string;
  public get callAs() {
    return this.getStringAttribute('call_as');
  }
  public set callAs(value: string ) {
    this._callAs = value;
  }
  public resetCallAs() {
    this._callAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAsInput() {
    return this._callAs
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities?: string[];
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[] ) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities
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

  // execution_role_name - computed: false, optional: true, required: false
  private _executionRoleName?: string;
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
  }
  public set executionRoleName(value: string ) {
    this._executionRoleName = value;
  }
  public resetExecutionRoleName() {
    this._executionRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleNameInput() {
    return this._executionRoleName
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // operation_preferences - computed: false, optional: true, required: false
  private _operationPreferences?: CloudformationStackSetOperationPreferences;
  public get operationPreferences() {
    return this.interpolationForAttribute('operation_preferences') as any;
  }
  public set operationPreferences(value: CloudformationStackSetOperationPreferences ) {
    this._operationPreferences = value;
  }
  public resetOperationPreferences() {
    this._operationPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPreferencesInput() {
    return this._operationPreferences
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: CloudformationStackSetParameters[];
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: CloudformationStackSetParameters[] ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // permission_model - computed: false, optional: false, required: true
  private _permissionModel: string;
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }
  public set permissionModel(value: string) {
    this._permissionModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModelInput() {
    return this._permissionModel
  }

  // stack_instances_group - computed: false, optional: true, required: false
  private _stackInstancesGroup?: CloudformationStackSetStackInstancesGroup[];
  public get stackInstancesGroup() {
    return this.interpolationForAttribute('stack_instances_group') as any;
  }
  public set stackInstancesGroup(value: CloudformationStackSetStackInstancesGroup[] ) {
    this._stackInstancesGroup = value;
  }
  public resetStackInstancesGroup() {
    this._stackInstancesGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInstancesGroupInput() {
    return this._stackInstancesGroup
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName: string;
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: CloudformationStackSetTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: CloudformationStackSetTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // template_body - computed: false, optional: true, required: false
  private _templateBody?: string;
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string ) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string;
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string ) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
      auto_deployment: cloudformationStackSetAutoDeploymentToTerraform(this._autoDeployment),
      call_as: cdktf.stringToTerraform(this._callAs),
      capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
      description: cdktf.stringToTerraform(this._description),
      execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
      operation_preferences: cloudformationStackSetOperationPreferencesToTerraform(this._operationPreferences),
      parameters: cdktf.listMapper(cloudformationStackSetParametersToTerraform)(this._parameters),
      permission_model: cdktf.stringToTerraform(this._permissionModel),
      stack_instances_group: cdktf.listMapper(cloudformationStackSetStackInstancesGroupToTerraform)(this._stackInstancesGroup),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      tags: cdktf.listMapper(cloudformationStackSetTagsToTerraform)(this._tags),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
    };
  }
}
