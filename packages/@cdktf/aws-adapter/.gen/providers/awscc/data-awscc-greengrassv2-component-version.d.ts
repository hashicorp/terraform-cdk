import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccGreengrassv2ComponentVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html#id DataAwsccGreengrassv2ComponentVersion#id}
    */
    readonly id: string;
}
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies extends cdktf.ComplexComputedList {
    get dependencyType(): string;
    get versionRequirement(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentDependencies): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources extends cdktf.ComplexComputedList {
    get topic(): string;
    get type(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices extends cdktf.ComplexComputedList {
    get addGroupOwner(): any;
    get path(): string;
    get permission(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes extends cdktf.ComplexComputedList {
    get addGroupOwner(): any;
    get destinationPath(): string;
    get permission(): string;
    get sourcePath(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams extends cdktf.ComplexComputedList {
    get devices(): any;
    get memorySizeInKb(): number;
    get mountRoSysfs(): any;
    get volumes(): any;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams extends cdktf.ComplexComputedList {
    get containerParams(): any;
    get isolationMode(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters extends cdktf.ComplexComputedList {
    get environmentVariables(): any;
    get eventSources(): any;
    get execArgs(): string[];
    get inputPayloadEncodingType(): string;
    get linuxProcessParams(): any;
    get maxIdleTimeInSeconds(): number;
    get maxInstancesCount(): number;
    get maxQueueSize(): number;
    get pinned(): any;
    get statusTimeoutInSeconds(): number;
    get timeoutInSeconds(): number;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms extends cdktf.ComplexComputedList {
    get attributes(): any;
    get name(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any;
export declare class DataAwsccGreengrassv2ComponentVersionLambdaFunction extends cdktf.ComplexComputedList {
    get componentDependencies(): any;
    get componentLambdaParameters(): any;
    get componentName(): string;
    get componentPlatforms(): any;
    get componentVersion(): string;
    get lambdaArn(): string;
}
export declare function dataAwsccGreengrassv2ComponentVersionLambdaFunctionToTerraform(struct?: DataAwsccGreengrassv2ComponentVersionLambdaFunction): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version}
*/
export declare class DataAwsccGreengrassv2ComponentVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/greengrassv2_component_version.html awscc_greengrassv2_component_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccGreengrassv2ComponentVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccGreengrassv2ComponentVersionConfig);
    get arn(): string;
    get componentName(): string;
    get componentVersion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inlineRecipe(): string;
    get lambdaFunction(): any;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
