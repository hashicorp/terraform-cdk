import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3AccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html#id DataAwsccS3AccessPoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3AccessPointPolicyStatus extends cdktf.ComplexComputedList {
    get isPublic(): string;
}
export declare function dataAwsccS3AccessPointPolicyStatusToTerraform(struct?: DataAwsccS3AccessPointPolicyStatus): any;
export declare class DataAwsccS3AccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {
    get blockPublicAcls(): any;
    get blockPublicPolicy(): any;
    get ignorePublicAcls(): any;
    get restrictPublicBuckets(): any;
}
export declare function dataAwsccS3AccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3AccessPointPublicAccessBlockConfiguration): any;
export declare class DataAwsccS3AccessPointVpcConfiguration extends cdktf.ComplexComputedList {
    get vpcId(): string;
}
export declare function dataAwsccS3AccessPointVpcConfigurationToTerraform(struct?: DataAwsccS3AccessPointVpcConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html awscc_s3_access_point}
*/
export declare class DataAwsccS3AccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_access_point.html awscc_s3_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3AccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3AccessPointConfig);
    get alias(): string;
    get arn(): string;
    get bucket(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get networkOrigin(): string;
    policy(key: string): string;
    get policyStatus(): any;
    get publicAccessBlockConfiguration(): any;
    get vpcConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
