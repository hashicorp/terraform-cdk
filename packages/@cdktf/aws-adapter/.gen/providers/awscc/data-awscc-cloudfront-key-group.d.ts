import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontKeyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html#id DataAwsccCloudfrontKeyGroup#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontKeyGroupKeyGroupConfig extends cdktf.ComplexComputedList {
    get comment(): string;
    get items(): string[];
    get name(): string;
}
export declare function dataAwsccCloudfrontKeyGroupKeyGroupConfigToTerraform(struct?: DataAwsccCloudfrontKeyGroupKeyGroupConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html awscc_cloudfront_key_group}
*/
export declare class DataAwsccCloudfrontKeyGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_key_group.html awscc_cloudfront_key_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontKeyGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontKeyGroupConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyGroupConfig(): any;
    get lastModifiedTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
