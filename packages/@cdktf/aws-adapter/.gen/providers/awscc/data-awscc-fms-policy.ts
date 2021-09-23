// https://www.terraform.io/docs/providers/awscc/d/fms_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccFmsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html#id DataAwsccFmsPolicy#id}
  */
  readonly id: string;
}
export class DataAwsccFmsPolicyExcludeMap extends cdktf.ComplexComputedList {

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getListAttribute('account');
  }

  // orgunit - computed: true, optional: false, required: false
  public get orgunit() {
    return this.getListAttribute('orgunit');
  }
}

export function dataAwsccFmsPolicyExcludeMapToTerraform(struct?: DataAwsccFmsPolicyExcludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export class DataAwsccFmsPolicyIncludeMap extends cdktf.ComplexComputedList {

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getListAttribute('account');
  }

  // orgunit - computed: true, optional: false, required: false
  public get orgunit() {
    return this.getListAttribute('orgunit');
  }
}

export function dataAwsccFmsPolicyIncludeMapToTerraform(struct?: DataAwsccFmsPolicyIncludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export class DataAwsccFmsPolicyResourceTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFmsPolicyResourceTagsToTerraform(struct?: DataAwsccFmsPolicyResourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccFmsPolicySecurityServicePolicyData extends cdktf.ComplexComputedList {

  // managed_service_data - computed: true, optional: false, required: false
  public get managedServiceData() {
    return this.getStringAttribute('managed_service_data');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export function dataAwsccFmsPolicySecurityServicePolicyDataToTerraform(struct?: DataAwsccFmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class DataAwsccFmsPolicyTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccFmsPolicyTagsToTerraform(struct?: DataAwsccFmsPolicyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html awscc_fms_policy}
*/
export class DataAwsccFmsPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_fms_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html awscc_fms_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccFmsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccFmsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_fms_policy',
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

  // delete_all_policy_resources - computed: true, optional: false, required: false
  public get deleteAllPolicyResources() {
    return this.getBooleanAttribute('delete_all_policy_resources');
  }

  // exclude_map - computed: true, optional: false, required: false
  public get excludeMap() {
    return this.interpolationForAttribute('exclude_map') as any;
  }

  // exclude_resource_tags - computed: true, optional: false, required: false
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
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

  // include_map - computed: true, optional: false, required: false
  public get includeMap() {
    return this.interpolationForAttribute('include_map') as any;
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // remediation_enabled - computed: true, optional: false, required: false
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }

  // resource_tags - computed: true, optional: false, required: false
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resource_type_list - computed: true, optional: false, required: false
  public get resourceTypeList() {
    return this.getListAttribute('resource_type_list');
  }

  // security_service_policy_data - computed: true, optional: false, required: false
  public get securityServicePolicyData() {
    return this.interpolationForAttribute('security_service_policy_data') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
