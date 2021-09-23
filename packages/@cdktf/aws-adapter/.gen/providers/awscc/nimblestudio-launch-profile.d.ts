import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NimblestudioLaunchProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#description NimblestudioLaunchProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#ec_2_subnet_ids NimblestudioLaunchProfile#ec_2_subnet_ids}
    */
    readonly ec2SubnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#launch_profile_protocol_versions NimblestudioLaunchProfile#launch_profile_protocol_versions}
    */
    readonly launchProfileProtocolVersions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#name NimblestudioLaunchProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#stream_configuration NimblestudioLaunchProfile#stream_configuration}
    */
    readonly streamConfiguration: NimblestudioLaunchProfileStreamConfiguration;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#studio_component_ids NimblestudioLaunchProfile#studio_component_ids}
    */
    readonly studioComponentIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#studio_id NimblestudioLaunchProfile#studio_id}
    */
    readonly studioId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#tags NimblestudioLaunchProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export interface NimblestudioLaunchProfileStreamConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#clipboard_mode NimblestudioLaunchProfile#clipboard_mode}
    */
    readonly clipboardMode: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#ec_2_instance_types NimblestudioLaunchProfile#ec_2_instance_types}
    */
    readonly ec2InstanceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#max_session_length_in_minutes NimblestudioLaunchProfile#max_session_length_in_minutes}
    */
    readonly maxSessionLengthInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html#streaming_image_ids NimblestudioLaunchProfile#streaming_image_ids}
    */
    readonly streamingImageIds: string[];
}
export declare function nimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: NimblestudioLaunchProfileStreamConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile}
*/
export declare class NimblestudioLaunchProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NimblestudioLaunchProfileConfig
    */
    constructor(scope: Construct, id: string, config: NimblestudioLaunchProfileConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ec2SubnetIds;
    get ec2SubnetIds(): string[];
    set ec2SubnetIds(value: string[]);
    get ec2SubnetIdsInput(): string[];
    get id(): string;
    get launchProfileId(): string;
    private _launchProfileProtocolVersions;
    get launchProfileProtocolVersions(): string[];
    set launchProfileProtocolVersions(value: string[]);
    get launchProfileProtocolVersionsInput(): string[];
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _streamConfiguration;
    get streamConfiguration(): NimblestudioLaunchProfileStreamConfiguration;
    set streamConfiguration(value: NimblestudioLaunchProfileStreamConfiguration);
    get streamConfigurationInput(): NimblestudioLaunchProfileStreamConfiguration;
    private _studioComponentIds;
    get studioComponentIds(): string[];
    set studioComponentIds(value: string[]);
    get studioComponentIdsInput(): string[];
    private _studioId;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string;
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
