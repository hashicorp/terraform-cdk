import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#auto_publish CloudfrontFunction#auto_publish}
    */
    readonly autoPublish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_code CloudfrontFunction#function_code}
    */
    readonly functionCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_config CloudfrontFunction#function_config}
    */
    readonly functionConfig?: CloudfrontFunctionFunctionConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_metadata CloudfrontFunction#function_metadata}
    */
    readonly functionMetadata?: CloudfrontFunctionFunctionMetadata;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#name CloudfrontFunction#name}
    */
    readonly name: string;
}
export interface CloudfrontFunctionFunctionConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#comment CloudfrontFunction#comment}
    */
    readonly comment: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#runtime CloudfrontFunction#runtime}
    */
    readonly runtime: string;
}
export declare function cloudfrontFunctionFunctionConfigToTerraform(struct?: CloudfrontFunctionFunctionConfig): any;
export interface CloudfrontFunctionFunctionMetadata {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html#function_arn CloudfrontFunction#function_arn}
    */
    readonly functionArn: string;
}
export declare function cloudfrontFunctionFunctionMetadataToTerraform(struct?: CloudfrontFunctionFunctionMetadata): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function}
*/
export declare class CloudfrontFunction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_function.html awscc_cloudfront_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontFunctionConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontFunctionConfig);
    private _autoPublish?;
    get autoPublish(): boolean | cdktf.IResolvable;
    set autoPublish(value: boolean | cdktf.IResolvable);
    resetAutoPublish(): void;
    get autoPublishInput(): boolean | cdktf.IResolvable | undefined;
    get functionArn(): string;
    private _functionCode?;
    get functionCode(): string;
    set functionCode(value: string);
    resetFunctionCode(): void;
    get functionCodeInput(): string | undefined;
    private _functionConfig?;
    get functionConfig(): CloudfrontFunctionFunctionConfig;
    set functionConfig(value: CloudfrontFunctionFunctionConfig);
    resetFunctionConfig(): void;
    get functionConfigInput(): CloudfrontFunctionFunctionConfig | undefined;
    private _functionMetadata?;
    get functionMetadata(): CloudfrontFunctionFunctionMetadata;
    set functionMetadata(value: CloudfrontFunctionFunctionMetadata);
    resetFunctionMetadata(): void;
    get functionMetadataInput(): CloudfrontFunctionFunctionMetadata | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get stage(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
