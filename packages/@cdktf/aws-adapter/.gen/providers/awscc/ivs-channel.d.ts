import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether the channel is authorized.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#authorized IvsChannel#authorized}
    */
    readonly authorized?: boolean | cdktf.IResolvable;
    /**
    * Channel latency mode.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#latency_mode IvsChannel#latency_mode}
    */
    readonly latencyMode?: string;
    /**
    * Channel
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#name IvsChannel#name}
    */
    readonly name?: string;
    /**
    * Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: ?? (recording is disabled).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#recording_configuration_arn IvsChannel#recording_configuration_arn}
    */
    readonly recordingConfigurationArn?: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#tags IvsChannel#tags}
    */
    readonly tags?: IvsChannelTags[];
    /**
    * Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#type IvsChannel#type}
    */
    readonly type?: string;
}
export interface IvsChannelTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#key IvsChannel#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html#value IvsChannel#value}
    */
    readonly value: string;
}
export declare function ivsChannelTagsToTerraform(struct?: IvsChannelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html awscc_ivs_channel}
*/
export declare class IvsChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_channel.html awscc_ivs_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsChannelConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IvsChannelConfig);
    get arn(): string;
    private _authorized?;
    get authorized(): boolean | cdktf.IResolvable;
    set authorized(value: boolean | cdktf.IResolvable);
    resetAuthorized(): void;
    get authorizedInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    get ingestEndpoint(): string;
    private _latencyMode?;
    get latencyMode(): string;
    set latencyMode(value: string);
    resetLatencyMode(): void;
    get latencyModeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get playbackUrl(): string;
    private _recordingConfigurationArn?;
    get recordingConfigurationArn(): string;
    set recordingConfigurationArn(value: string);
    resetRecordingConfigurationArn(): void;
    get recordingConfigurationArnInput(): string | undefined;
    private _tags?;
    get tags(): IvsChannelTags[];
    set tags(value: IvsChannelTags[]);
    resetTags(): void;
    get tagsInput(): IvsChannelTags[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
