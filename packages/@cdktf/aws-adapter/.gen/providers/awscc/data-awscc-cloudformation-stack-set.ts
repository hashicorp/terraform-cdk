// https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccCloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html#id DataAwsccCloudformationStackSet#id}
  */
  readonly id: string;
}
export class DataAwsccCloudformationStackSetAutoDeployment extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // retain_stacks_on_account_removal - computed: true, optional: false, required: false
  public get retainStacksOnAccountRemoval() {
    return this.getBooleanAttribute('retain_stacks_on_account_removal');
  }
}

export function dataAwsccCloudformationStackSetAutoDeploymentToTerraform(struct?: DataAwsccCloudformationStackSetAutoDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
  }
}

export class DataAwsccCloudformationStackSetOperationPreferences extends cdktf.ComplexComputedList {

  // failure_tolerance_count - computed: true, optional: false, required: false
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }

  // failure_tolerance_percentage - computed: true, optional: false, required: false
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }

  // max_concurrent_count - computed: true, optional: false, required: false
  public get maxConcurrentCount() {
    return this.getNumberAttribute('max_concurrent_count');
  }

  // max_concurrent_percentage - computed: true, optional: false, required: false
  public get maxConcurrentPercentage() {
    return this.getNumberAttribute('max_concurrent_percentage');
  }

  // region_concurrency_type - computed: true, optional: false, required: false
  public get regionConcurrencyType() {
    return this.getStringAttribute('region_concurrency_type');
  }

  // region_order - computed: true, optional: false, required: false
  public get regionOrder() {
    return this.getListAttribute('region_order');
  }
}

export function dataAwsccCloudformationStackSetOperationPreferencesToTerraform(struct?: DataAwsccCloudformationStackSetOperationPreferences): any {
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

export class DataAwsccCloudformationStackSetParameters extends cdktf.ComplexComputedList {

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccCloudformationStackSetParametersToTerraform(struct?: DataAwsccCloudformationStackSetParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets extends cdktf.ComplexComputedList {

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return this.getListAttribute('accounts');
  }

  // organizational_unit_ids - computed: true, optional: false, required: false
  public get organizationalUnitIds() {
    return this.getListAttribute('organizational_unit_ids');
  }
}

export function dataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accounts),
    organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnitIds),
  }
}

export class DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides extends cdktf.ComplexComputedList {

  // parameter_key - computed: true, optional: false, required: false
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
}

export function dataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroupParameterOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export class DataAwsccCloudformationStackSetStackInstancesGroup extends cdktf.ComplexComputedList {

  // deployment_targets - computed: true, optional: false, required: false
  public get deploymentTargets() {
    return this.interpolationForAttribute('deployment_targets') as any;
  }

  // parameter_overrides - computed: true, optional: false, required: false
  public get parameterOverrides() {
    return this.interpolationForAttribute('parameter_overrides') as any;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }
}

export function dataAwsccCloudformationStackSetStackInstancesGroupToTerraform(struct?: DataAwsccCloudformationStackSetStackInstancesGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    deployment_targets: dataAwsccCloudformationStackSetStackInstancesGroupDeploymentTargetsToTerraform(struct!.deploymentTargets),
    parameter_overrides: cdktf.listMapper(dataAwsccCloudformationStackSetStackInstancesGroupParameterOverridesToTerraform)(struct!.parameterOverrides),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export class DataAwsccCloudformationStackSetTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccCloudformationStackSetTagsToTerraform(struct?: DataAwsccCloudformationStackSetTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html awscc_cloudformation_stack_set}
*/
export class DataAwsccCloudformationStackSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_stack_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudformation_stack_set.html awscc_cloudformation_stack_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccCloudformationStackSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccCloudformationStackSetConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_role_arn - computed: true, optional: false, required: false
  public get administrationRoleArn() {
    return this.getStringAttribute('administration_role_arn');
  }

  // auto_deployment - computed: true, optional: false, required: false
  public get autoDeployment() {
    return this.interpolationForAttribute('auto_deployment') as any;
  }

  // call_as - computed: true, optional: false, required: false
  public get callAs() {
    return this.getStringAttribute('call_as');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_role_name - computed: true, optional: false, required: false
  public get executionRoleName() {
    return this.getStringAttribute('execution_role_name');
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

  // operation_preferences - computed: true, optional: false, required: false
  public get operationPreferences() {
    return this.interpolationForAttribute('operation_preferences') as any;
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }

  // permission_model - computed: true, optional: false, required: false
  public get permissionModel() {
    return this.getStringAttribute('permission_model');
  }

  // stack_instances_group - computed: true, optional: false, required: false
  public get stackInstancesGroup() {
    return this.interpolationForAttribute('stack_instances_group') as any;
  }

  // stack_set_id - computed: true, optional: false, required: false
  public get stackSetId() {
    return this.getStringAttribute('stack_set_id');
  }

  // stack_set_name - computed: true, optional: false, required: false
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }

  // template_body - computed: true, optional: false, required: false
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
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
