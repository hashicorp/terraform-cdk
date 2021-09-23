import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html#id DataAwsccSagemakerAppImageConfig#id}
    */
    readonly id: string;
}
export declare class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig extends cdktf.ComplexComputedList {
    get defaultGid(): number;
    get defaultUid(): number;
    get mountPath(): string;
}
export declare function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any;
export declare class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs extends cdktf.ComplexComputedList {
    get displayName(): string;
    get name(): string;
}
export declare function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs): any;
export declare class DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig extends cdktf.ComplexComputedList {
    get fileSystemConfig(): any;
    get kernelSpecs(): any;
}
export declare function dataAwsccSagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig): any;
export declare class DataAwsccSagemakerAppImageConfigTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSagemakerAppImageConfigTagsToTerraform(struct?: DataAwsccSagemakerAppImageConfigTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html awscc_sagemaker_app_image_config}
*/
export declare class DataAwsccSagemakerAppImageConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_app_image_config.html awscc_sagemaker_app_image_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSagemakerAppImageConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSagemakerAppImageConfigConfig);
    get appImageConfigArn(): string;
    get appImageConfigName(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get kernelGatewayImageConfig(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
