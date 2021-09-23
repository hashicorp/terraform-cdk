import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3MultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point.html#id DataAwsccS3MultiRegionAccessPoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration extends cdktf.ComplexComputedList {
    get blockPublicAcls(): any;
    get blockPublicPolicy(): any;
    get ignorePublicAcls(): any;
    get restrictPublicBuckets(): any;
}
export declare function dataAwsccS3MultiRegionAccessPointPublicAccessBlockConfigurationToTerraform(struct?: DataAwsccS3MultiRegionAccessPointPublicAccessBlockConfiguration): any;
export declare class DataAwsccS3MultiRegionAccessPointRegions extends cdktf.ComplexComputedList {
    get bucket(): string;
}
export declare function dataAwsccS3MultiRegionAccessPointRegionsToTerraform(struct?: DataAwsccS3MultiRegionAccessPointRegions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point.html awscc_s3_multi_region_access_point}
*/
export declare class DataAwsccS3MultiRegionAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_multi_region_access_point.html awscc_s3_multi_region_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3MultiRegionAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3MultiRegionAccessPointConfig);
    get alias(): string;
    get createdAt(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get publicAccessBlockConfiguration(): any;
    get regions(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
