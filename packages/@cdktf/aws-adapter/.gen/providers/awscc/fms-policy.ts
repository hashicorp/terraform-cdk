// https://www.terraform.io/docs/providers/awscc/r/fms_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}
  */
  readonly deleteAllPolicyResources?: boolean | cdktf.IResolvable;
  /**
  * An FMS includeMap or excludeMap.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#exclude_map FmsPolicy#exclude_map}
  */
  readonly excludeMap?: FmsPolicyExcludeMap;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#exclude_resource_tags FmsPolicy#exclude_resource_tags}
  */
  readonly excludeResourceTags: boolean | cdktf.IResolvable;
  /**
  * An FMS includeMap or excludeMap.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#include_map FmsPolicy#include_map}
  */
  readonly includeMap?: FmsPolicyIncludeMap;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#policy_name FmsPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#remediation_enabled FmsPolicy#remediation_enabled}
  */
  readonly remediationEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#resource_tags FmsPolicy#resource_tags}
  */
  readonly resourceTags?: FmsPolicyResourceTags[];
  /**
  * An AWS resource type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#resource_type FmsPolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#resource_type_list FmsPolicy#resource_type_list}
  */
  readonly resourceTypeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#security_service_policy_data FmsPolicy#security_service_policy_data}
  */
  readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#tags FmsPolicy#tags}
  */
  readonly tags?: FmsPolicyTags[];
}
export interface FmsPolicyExcludeMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

export function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export interface FmsPolicyIncludeMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#account FmsPolicy#account}
  */
  readonly account?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#orgunit FmsPolicy#orgunit}
  */
  readonly orgunit?: string[];
}

export function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    account: cdktf.listMapper(cdktf.stringToTerraform)(struct!.account),
    orgunit: cdktf.listMapper(cdktf.stringToTerraform)(struct!.orgunit),
  }
}

export interface FmsPolicyResourceTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#key FmsPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#value FmsPolicy#value}
  */
  readonly value?: string;
}

export function fmsPolicyResourceTagsToTerraform(struct?: FmsPolicyResourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface FmsPolicySecurityServicePolicyData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#managed_service_data FmsPolicy#managed_service_data}
  */
  readonly managedServiceData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#type FmsPolicy#type}
  */
  readonly type: string;
}

export function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyData): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    managed_service_data: cdktf.stringToTerraform(struct!.managedServiceData),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface FmsPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#key FmsPolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html#value FmsPolicy#value}
  */
  readonly value: string;
}

export function fmsPolicyTagsToTerraform(struct?: FmsPolicyTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html awscc_fms_policy}
*/
export class FmsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_fms_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html awscc_fms_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FmsPolicyConfig) {
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
    this._deleteAllPolicyResources = config.deleteAllPolicyResources;
    this._excludeMap = config.excludeMap;
    this._excludeResourceTags = config.excludeResourceTags;
    this._includeMap = config.includeMap;
    this._policyName = config.policyName;
    this._remediationEnabled = config.remediationEnabled;
    this._resourceTags = config.resourceTags;
    this._resourceType = config.resourceType;
    this._resourceTypeList = config.resourceTypeList;
    this._securityServicePolicyData = config.securityServicePolicyData;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // delete_all_policy_resources - computed: false, optional: true, required: false
  private _deleteAllPolicyResources?: boolean | cdktf.IResolvable;
  public get deleteAllPolicyResources() {
    return this.getBooleanAttribute('delete_all_policy_resources');
  }
  public set deleteAllPolicyResources(value: boolean | cdktf.IResolvable ) {
    this._deleteAllPolicyResources = value;
  }
  public resetDeleteAllPolicyResources() {
    this._deleteAllPolicyResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllPolicyResourcesInput() {
    return this._deleteAllPolicyResources
  }

  // exclude_map - computed: false, optional: true, required: false
  private _excludeMap?: FmsPolicyExcludeMap;
  public get excludeMap() {
    return this.interpolationForAttribute('exclude_map') as any;
  }
  public set excludeMap(value: FmsPolicyExcludeMap ) {
    this._excludeMap = value;
  }
  public resetExcludeMap() {
    this._excludeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMapInput() {
    return this._excludeMap
  }

  // exclude_resource_tags - computed: false, optional: false, required: true
  private _excludeResourceTags: boolean | cdktf.IResolvable;
  public get excludeResourceTags() {
    return this.getBooleanAttribute('exclude_resource_tags');
  }
  public set excludeResourceTags(value: boolean | cdktf.IResolvable) {
    this._excludeResourceTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTagsInput() {
    return this._excludeResourceTags
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_map - computed: false, optional: true, required: false
  private _includeMap?: FmsPolicyIncludeMap;
  public get includeMap() {
    return this.interpolationForAttribute('include_map') as any;
  }
  public set includeMap(value: FmsPolicyIncludeMap ) {
    this._includeMap = value;
  }
  public resetIncludeMap() {
    this._includeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMapInput() {
    return this._includeMap
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName: string;
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName
  }

  // remediation_enabled - computed: false, optional: false, required: true
  private _remediationEnabled: boolean | cdktf.IResolvable;
  public get remediationEnabled() {
    return this.getBooleanAttribute('remediation_enabled');
  }
  public set remediationEnabled(value: boolean | cdktf.IResolvable) {
    this._remediationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationEnabledInput() {
    return this._remediationEnabled
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: FmsPolicyResourceTags[];
  public get resourceTags() {
    return this.interpolationForAttribute('resource_tags') as any;
  }
  public set resourceTags(value: FmsPolicyResourceTags[] ) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // resource_type_list - computed: false, optional: true, required: false
  private _resourceTypeList?: string[];
  public get resourceTypeList() {
    return this.getListAttribute('resource_type_list');
  }
  public set resourceTypeList(value: string[] ) {
    this._resourceTypeList = value;
  }
  public resetResourceTypeList() {
    this._resourceTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeListInput() {
    return this._resourceTypeList
  }

  // security_service_policy_data - computed: false, optional: false, required: true
  private _securityServicePolicyData: FmsPolicySecurityServicePolicyData;
  public get securityServicePolicyData() {
    return this.interpolationForAttribute('security_service_policy_data') as any;
  }
  public set securityServicePolicyData(value: FmsPolicySecurityServicePolicyData) {
    this._securityServicePolicyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServicePolicyDataInput() {
    return this._securityServicePolicyData
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: FmsPolicyTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: FmsPolicyTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_all_policy_resources: cdktf.booleanToTerraform(this._deleteAllPolicyResources),
      exclude_map: fmsPolicyExcludeMapToTerraform(this._excludeMap),
      exclude_resource_tags: cdktf.booleanToTerraform(this._excludeResourceTags),
      include_map: fmsPolicyIncludeMapToTerraform(this._includeMap),
      policy_name: cdktf.stringToTerraform(this._policyName),
      remediation_enabled: cdktf.booleanToTerraform(this._remediationEnabled),
      resource_tags: cdktf.listMapper(fmsPolicyResourceTagsToTerraform)(this._resourceTags),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      resource_type_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeList),
      security_service_policy_data: fmsPolicySecurityServicePolicyDataToTerraform(this._securityServicePolicyData),
      tags: cdktf.listMapper(fmsPolicyTagsToTerraform)(this._tags),
    };
  }
}
