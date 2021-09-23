import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html#id DataAwsccCloudfrontFunction#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontFunctionFunctionConfig extends cdktf.ComplexComputedList {
    get comment(): string;
    get runtime(): string;
}
export declare function dataAwsccCloudfrontFunctionFunctionConfigToTerraform(struct?: DataAwsccCloudfrontFunctionFunctionConfig): any;
export declare class DataAwsccCloudfrontFunctionFunctionMetadata extends cdktf.ComplexComputedList {
    get functionArn(): string;
}
export declare function dataAwsccCloudfrontFunctionFunctionMetadataToTerraform(struct?: DataAwsccCloudfrontFunctionFunctionMetadata): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html awscc_cloudfront_function}
*/
export declare class DataAwsccCloudfrontFunction extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_function.html awscc_cloudfront_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontFunctionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontFunctionConfig);
    get autoPublish(): cdktf.IResolvable;
    get functionArn(): string;
    get functionCode(): string;
    get functionConfig(): any;
    get functionMetadata(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get stage(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
