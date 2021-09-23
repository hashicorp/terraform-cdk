import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3MultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Multi Region Access Point to apply policy
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html#mrap_name S3MultiRegionAccessPointPolicy#mrap_name}
    */
    readonly mrapName: string;
    /**
    * Policy document to apply to a Multi Region Access Point
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html#policy S3MultiRegionAccessPointPolicy#policy}
    */
    readonly policy: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class S3MultiRegionAccessPointPolicyPolicyStatus extends cdktf.ComplexComputedList {
    get isPublic(): string;
}
export declare function s3MultiRegionAccessPointPolicyPolicyStatusToTerraform(struct?: S3MultiRegionAccessPointPolicyPolicyStatus): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy}
*/
export declare class S3MultiRegionAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3MultiRegionAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3MultiRegionAccessPointPolicyConfig);
    get id(): string;
    private _mrapName;
    get mrapName(): string;
    set mrapName(value: string);
    get mrapNameInput(): string;
    private _policy;
    get policy(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set policy(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    get policyInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get policyStatus(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
