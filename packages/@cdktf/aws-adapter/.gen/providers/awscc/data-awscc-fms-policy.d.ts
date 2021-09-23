import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFmsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html#id DataAwsccFmsPolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccFmsPolicyExcludeMap extends cdktf.ComplexComputedList {
    get account(): string[];
    get orgunit(): string[];
}
export declare function dataAwsccFmsPolicyExcludeMapToTerraform(struct?: DataAwsccFmsPolicyExcludeMap): any;
export declare class DataAwsccFmsPolicyIncludeMap extends cdktf.ComplexComputedList {
    get account(): string[];
    get orgunit(): string[];
}
export declare function dataAwsccFmsPolicyIncludeMapToTerraform(struct?: DataAwsccFmsPolicyIncludeMap): any;
export declare class DataAwsccFmsPolicyResourceTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFmsPolicyResourceTagsToTerraform(struct?: DataAwsccFmsPolicyResourceTags): any;
export declare class DataAwsccFmsPolicySecurityServicePolicyData extends cdktf.ComplexComputedList {
    get managedServiceData(): string;
    get type(): string;
}
export declare function dataAwsccFmsPolicySecurityServicePolicyDataToTerraform(struct?: DataAwsccFmsPolicySecurityServicePolicyData): any;
export declare class DataAwsccFmsPolicyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccFmsPolicyTagsToTerraform(struct?: DataAwsccFmsPolicyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html awscc_fms_policy}
*/
export declare class DataAwsccFmsPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/fms_policy.html awscc_fms_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFmsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFmsPolicyConfig);
    get arn(): string;
    get deleteAllPolicyResources(): cdktf.IResolvable;
    get excludeMap(): any;
    get excludeResourceTags(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get includeMap(): any;
    get policyName(): string;
    get remediationEnabled(): cdktf.IResolvable;
    get resourceTags(): any;
    get resourceType(): string;
    get resourceTypeList(): string[];
    get securityServicePolicyData(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
