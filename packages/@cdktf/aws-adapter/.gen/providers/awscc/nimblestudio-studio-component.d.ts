import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NimblestudioStudioComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#configuration NimblestudioStudioComponent#configuration}
    */
    readonly configuration?: NimblestudioStudioComponentConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#description NimblestudioStudioComponent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}
    */
    readonly ec2SecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#initialization_scripts NimblestudioStudioComponent#initialization_scripts}
    */
    readonly initializationScripts?: NimblestudioStudioComponentInitializationScripts[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#name NimblestudioStudioComponent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#script_parameters NimblestudioStudioComponent#script_parameters}
    */
    readonly scriptParameters?: NimblestudioStudioComponentScriptParameters[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#studio_id NimblestudioStudioComponent#studio_id}
    */
    readonly studioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#subtype NimblestudioStudioComponent#subtype}
    */
    readonly subtype?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#tags NimblestudioStudioComponent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#type NimblestudioStudioComponent#type}
    */
    readonly type: string;
}
export interface NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#name NimblestudioStudioComponent#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#value NimblestudioStudioComponent#value}
    */
    readonly value?: string;
}
export declare function nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesToTerraform(struct?: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes): any;
export interface NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#computer_attributes NimblestudioStudioComponent#computer_attributes}
    */
    readonly computerAttributes?: NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#directory_id NimblestudioStudioComponent#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
}
export declare function nimblestudioStudioComponentConfigurationActiveDirectoryConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration): any;
export interface NimblestudioStudioComponentConfigurationComputeFarmConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#active_directory_user NimblestudioStudioComponent#active_directory_user}
    */
    readonly activeDirectoryUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
    */
    readonly endpoint?: string;
}
export declare function nimblestudioStudioComponentConfigurationComputeFarmConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationComputeFarmConfiguration): any;
export interface NimblestudioStudioComponentConfigurationLicenseServiceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
    */
    readonly endpoint?: string;
}
export declare function nimblestudioStudioComponentConfigurationLicenseServiceConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration): any;
export interface NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#endpoint NimblestudioStudioComponent#endpoint}
    */
    readonly endpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#file_system_id NimblestudioStudioComponent#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#linux_mount_point NimblestudioStudioComponent#linux_mount_point}
    */
    readonly linuxMountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#share_name NimblestudioStudioComponent#share_name}
    */
    readonly shareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}
    */
    readonly windowsMountDrive?: string;
}
export declare function nimblestudioStudioComponentConfigurationSharedFileSystemConfigurationToTerraform(struct?: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration): any;
export interface NimblestudioStudioComponentConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}
    */
    readonly activeDirectoryConfiguration?: NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}
    */
    readonly computeFarmConfiguration?: NimblestudioStudioComponentConfigurationComputeFarmConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#license_service_configuration NimblestudioStudioComponent#license_service_configuration}
    */
    readonly licenseServiceConfiguration?: NimblestudioStudioComponentConfigurationLicenseServiceConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}
    */
    readonly sharedFileSystemConfiguration?: NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration;
}
export declare function nimblestudioStudioComponentConfigurationToTerraform(struct?: NimblestudioStudioComponentConfiguration): any;
export interface NimblestudioStudioComponentInitializationScripts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}
    */
    readonly launchProfileProtocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#platform NimblestudioStudioComponent#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#run_context NimblestudioStudioComponent#run_context}
    */
    readonly runContext?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#script NimblestudioStudioComponent#script}
    */
    readonly script?: string;
}
export declare function nimblestudioStudioComponentInitializationScriptsToTerraform(struct?: NimblestudioStudioComponentInitializationScripts): any;
export interface NimblestudioStudioComponentScriptParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#key NimblestudioStudioComponent#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html#value NimblestudioStudioComponent#value}
    */
    readonly value?: string;
}
export declare function nimblestudioStudioComponentScriptParametersToTerraform(struct?: NimblestudioStudioComponentScriptParameters): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html awscc_nimblestudio_studio_component}
*/
export declare class NimblestudioStudioComponent extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio_component.html awscc_nimblestudio_studio_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NimblestudioStudioComponentConfig
    */
    constructor(scope: Construct, id: string, config: NimblestudioStudioComponentConfig);
    private _configuration?;
    get configuration(): NimblestudioStudioComponentConfiguration;
    set configuration(value: NimblestudioStudioComponentConfiguration);
    resetConfiguration(): void;
    get configurationInput(): NimblestudioStudioComponentConfiguration | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ec2SecurityGroupIds?;
    get ec2SecurityGroupIds(): string[];
    set ec2SecurityGroupIds(value: string[]);
    resetEc2SecurityGroupIds(): void;
    get ec2SecurityGroupIdsInput(): string[] | undefined;
    get id(): string;
    private _initializationScripts?;
    get initializationScripts(): NimblestudioStudioComponentInitializationScripts[];
    set initializationScripts(value: NimblestudioStudioComponentInitializationScripts[]);
    resetInitializationScripts(): void;
    get initializationScriptsInput(): NimblestudioStudioComponentInitializationScripts[] | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scriptParameters?;
    get scriptParameters(): NimblestudioStudioComponentScriptParameters[];
    set scriptParameters(value: NimblestudioStudioComponentScriptParameters[]);
    resetScriptParameters(): void;
    get scriptParametersInput(): NimblestudioStudioComponentScriptParameters[] | undefined;
    get studioComponentId(): string;
    private _studioId;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string;
    private _subtype?;
    get subtype(): string;
    set subtype(value: string);
    resetSubtype(): void;
    get subtypeInput(): string | undefined;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
