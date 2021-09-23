import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3OutpostsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html#id DataAwsccS3OutpostsAccessPoint#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3OutpostsAccessPointVpcConfiguration extends cdktf.ComplexComputedList {
    get vpcId(): string;
}
export declare function dataAwsccS3OutpostsAccessPointVpcConfigurationToTerraform(struct?: DataAwsccS3OutpostsAccessPointVpcConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html awscc_s3outposts_access_point}
*/
export declare class DataAwsccS3OutpostsAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3outposts_access_point.html awscc_s3outposts_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3OutpostsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3OutpostsAccessPointConfig);
    get arn(): string;
    get bucket(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    policy(key: string): string;
    get vpcConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
