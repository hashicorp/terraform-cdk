import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMap): any;
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
export declare function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMap): any;
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
export declare function fmsPolicyResourceTagsToTerraform(struct?: FmsPolicyResourceTags): any;
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
export declare function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyData): any;
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
export declare function fmsPolicyTagsToTerraform(struct?: FmsPolicyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html awscc_fms_policy}
*/
export declare class FmsPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fms_policy.html awscc_fms_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: FmsPolicyConfig);
    get arn(): string;
    private _deleteAllPolicyResources?;
    get deleteAllPolicyResources(): boolean | cdktf.IResolvable;
    set deleteAllPolicyResources(value: boolean | cdktf.IResolvable);
    resetDeleteAllPolicyResources(): void;
    get deleteAllPolicyResourcesInput(): boolean | cdktf.IResolvable | undefined;
    private _excludeMap?;
    get excludeMap(): FmsPolicyExcludeMap;
    set excludeMap(value: FmsPolicyExcludeMap);
    resetExcludeMap(): void;
    get excludeMapInput(): FmsPolicyExcludeMap | undefined;
    private _excludeResourceTags;
    get excludeResourceTags(): boolean | cdktf.IResolvable;
    set excludeResourceTags(value: boolean | cdktf.IResolvable);
    get excludeResourceTagsInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _includeMap?;
    get includeMap(): FmsPolicyIncludeMap;
    set includeMap(value: FmsPolicyIncludeMap);
    resetIncludeMap(): void;
    get includeMapInput(): FmsPolicyIncludeMap | undefined;
    private _policyName;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string;
    private _remediationEnabled;
    get remediationEnabled(): boolean | cdktf.IResolvable;
    set remediationEnabled(value: boolean | cdktf.IResolvable);
    get remediationEnabledInput(): boolean | cdktf.IResolvable;
    private _resourceTags?;
    get resourceTags(): FmsPolicyResourceTags[];
    set resourceTags(value: FmsPolicyResourceTags[]);
    resetResourceTags(): void;
    get resourceTagsInput(): FmsPolicyResourceTags[] | undefined;
    private _resourceType;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string;
    private _resourceTypeList?;
    get resourceTypeList(): string[];
    set resourceTypeList(value: string[]);
    resetResourceTypeList(): void;
    get resourceTypeListInput(): string[] | undefined;
    private _securityServicePolicyData;
    get securityServicePolicyData(): FmsPolicySecurityServicePolicyData;
    set securityServicePolicyData(value: FmsPolicySecurityServicePolicyData);
    get securityServicePolicyDataInput(): FmsPolicySecurityServicePolicyData;
    private _tags?;
    get tags(): FmsPolicyTags[];
    set tags(value: FmsPolicyTags[]);
    resetTags(): void;
    get tagsInput(): FmsPolicyTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
