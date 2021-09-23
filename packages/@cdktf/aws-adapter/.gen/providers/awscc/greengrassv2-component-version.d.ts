import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Greengrassv2ComponentVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#inline_recipe Greengrassv2ComponentVersion#inline_recipe}
    */
    readonly inlineRecipe?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#lambda_function Greengrassv2ComponentVersion#lambda_function}
    */
    readonly lambdaFunction?: Greengrassv2ComponentVersionLambdaFunction;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#tags Greengrassv2ComponentVersion#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export interface Greengrassv2ComponentVersionLambdaFunctionComponentDependencies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#dependency_type Greengrassv2ComponentVersion#dependency_type}
    */
    readonly dependencyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#version_requirement Greengrassv2ComponentVersion#version_requirement}
    */
    readonly versionRequirement?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentDependenciesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentDependencies): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#topic Greengrassv2ComponentVersion#topic}
    */
    readonly topic?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#type Greengrassv2ComponentVersion#type}
    */
    readonly type?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSourcesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#add_group_owner Greengrassv2ComponentVersion#add_group_owner}
    */
    readonly addGroupOwner?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#path Greengrassv2ComponentVersion#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#permission Greengrassv2ComponentVersion#permission}
    */
    readonly permission?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevicesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#add_group_owner Greengrassv2ComponentVersion#add_group_owner}
    */
    readonly addGroupOwner?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#destination_path Greengrassv2ComponentVersion#destination_path}
    */
    readonly destinationPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#permission Greengrassv2ComponentVersion#permission}
    */
    readonly permission?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#source_path Greengrassv2ComponentVersion#source_path}
    */
    readonly sourcePath?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumesToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#devices Greengrassv2ComponentVersion#devices}
    */
    readonly devices?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsDevices[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#memory_size_in_kb Greengrassv2ComponentVersion#memory_size_in_kb}
    */
    readonly memorySizeInKb?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#mount_ro_sysfs Greengrassv2ComponentVersion#mount_ro_sysfs}
    */
    readonly mountRoSysfs?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#volumes Greengrassv2ComponentVersion#volumes}
    */
    readonly volumes?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsVolumes[];
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParamsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#container_params Greengrassv2ComponentVersion#container_params}
    */
    readonly containerParams?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsContainerParams;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#isolation_mode Greengrassv2ComponentVersion#isolation_mode}
    */
    readonly isolationMode?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParamsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#environment_variables Greengrassv2ComponentVersion#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#event_sources Greengrassv2ComponentVersion#event_sources}
    */
    readonly eventSources?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersEventSources[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#exec_args Greengrassv2ComponentVersion#exec_args}
    */
    readonly execArgs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#input_payload_encoding_type Greengrassv2ComponentVersion#input_payload_encoding_type}
    */
    readonly inputPayloadEncodingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#linux_process_params Greengrassv2ComponentVersion#linux_process_params}
    */
    readonly linuxProcessParams?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersLinuxProcessParams;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_idle_time_in_seconds Greengrassv2ComponentVersion#max_idle_time_in_seconds}
    */
    readonly maxIdleTimeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_instances_count Greengrassv2ComponentVersion#max_instances_count}
    */
    readonly maxInstancesCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#max_queue_size Greengrassv2ComponentVersion#max_queue_size}
    */
    readonly maxQueueSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#pinned Greengrassv2ComponentVersion#pinned}
    */
    readonly pinned?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#status_timeout_in_seconds Greengrassv2ComponentVersion#status_timeout_in_seconds}
    */
    readonly statusTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#timeout_in_seconds Greengrassv2ComponentVersion#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentLambdaParametersToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters): any;
export interface Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#attributes Greengrassv2ComponentVersion#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#name Greengrassv2ComponentVersion#name}
    */
    readonly name?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionComponentPlatformsToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms): any;
export interface Greengrassv2ComponentVersionLambdaFunction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_dependencies Greengrassv2ComponentVersion#component_dependencies}
    */
    readonly componentDependencies?: {
        [key: string]: Greengrassv2ComponentVersionLambdaFunctionComponentDependencies;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_lambda_parameters Greengrassv2ComponentVersion#component_lambda_parameters}
    */
    readonly componentLambdaParameters?: Greengrassv2ComponentVersionLambdaFunctionComponentLambdaParameters;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_name Greengrassv2ComponentVersion#component_name}
    */
    readonly componentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_platforms Greengrassv2ComponentVersion#component_platforms}
    */
    readonly componentPlatforms?: Greengrassv2ComponentVersionLambdaFunctionComponentPlatforms[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#component_version Greengrassv2ComponentVersion#component_version}
    */
    readonly componentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html#lambda_arn Greengrassv2ComponentVersion#lambda_arn}
    */
    readonly lambdaArn?: string;
}
export declare function greengrassv2ComponentVersionLambdaFunctionToTerraform(struct?: Greengrassv2ComponentVersionLambdaFunction): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html awscc_greengrassv2_component_version}
*/
export declare class Greengrassv2ComponentVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/greengrassv2_component_version.html awscc_greengrassv2_component_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Greengrassv2ComponentVersionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Greengrassv2ComponentVersionConfig);
    get arn(): string;
    get componentName(): string;
    get componentVersion(): string;
    get id(): string;
    private _inlineRecipe?;
    get inlineRecipe(): string;
    set inlineRecipe(value: string);
    resetInlineRecipe(): void;
    get inlineRecipeInput(): string | undefined;
    private _lambdaFunction?;
    get lambdaFunction(): Greengrassv2ComponentVersionLambdaFunction;
    set lambdaFunction(value: Greengrassv2ComponentVersionLambdaFunction);
    resetLambdaFunction(): void;
    get lambdaFunctionInput(): Greengrassv2ComponentVersionLambdaFunction | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
