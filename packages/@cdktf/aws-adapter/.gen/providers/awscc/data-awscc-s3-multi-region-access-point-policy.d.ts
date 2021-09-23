import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3MultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html#id DataAwsccS3MultiRegionAccessPointPolicy#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus extends cdktf.ComplexComputedList {
    get isPublic(): string;
}
export declare function dataAwsccS3MultiRegionAccessPointPolicyPolicyStatusToTerraform(struct?: DataAwsccS3MultiRegionAccessPointPolicyPolicyStatus): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy}
*/
export declare class DataAwsccS3MultiRegionAccessPointPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point_policy.html awscc_s3_multi_region_access_point_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3MultiRegionAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3MultiRegionAccessPointPolicyConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get mrapName(): string;
    policy(key: string): string;
    get policyStatus(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
