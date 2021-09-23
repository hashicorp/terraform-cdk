import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Recording Destination Configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#destination_configuration IvsRecordingConfiguration#destination_configuration}
    */
    readonly destinationConfiguration: IvsRecordingConfigurationDestinationConfiguration;
    /**
    * Recording Configuration Name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#name IvsRecordingConfiguration#name}
    */
    readonly name?: string;
    /**
    * A list of key-value pairs that contain metadata for the asset model.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#tags IvsRecordingConfiguration#tags}
    */
    readonly tags?: IvsRecordingConfigurationTags[];
}
export interface IvsRecordingConfigurationDestinationConfigurationS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#bucket_name IvsRecordingConfiguration#bucket_name}
    */
    readonly bucketName: string;
}
export declare function ivsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: IvsRecordingConfigurationDestinationConfigurationS3): any;
export interface IvsRecordingConfigurationDestinationConfiguration {
    /**
    * Recording S3 Destination Configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#s3 IvsRecordingConfiguration#s3}
    */
    readonly s3: IvsRecordingConfigurationDestinationConfigurationS3;
}
export declare function ivsRecordingConfigurationDestinationConfigurationToTerraform(struct?: IvsRecordingConfigurationDestinationConfiguration): any;
export interface IvsRecordingConfigurationTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#key IvsRecordingConfiguration#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html#value IvsRecordingConfiguration#value}
    */
    readonly value: string;
}
export declare function ivsRecordingConfigurationTagsToTerraform(struct?: IvsRecordingConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html awscc_ivs_recording_configuration}
*/
export declare class IvsRecordingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ivs_recording_configuration.html awscc_ivs_recording_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvsRecordingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: IvsRecordingConfigurationConfig);
    get arn(): string;
    private _destinationConfiguration;
    get destinationConfiguration(): IvsRecordingConfigurationDestinationConfiguration;
    set destinationConfiguration(value: IvsRecordingConfigurationDestinationConfiguration);
    get destinationConfigurationInput(): IvsRecordingConfigurationDestinationConfiguration;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get state(): string;
    private _tags?;
    get tags(): IvsRecordingConfigurationTags[];
    set tags(value: IvsRecordingConfigurationTags[]);
    resetTags(): void;
    get tagsInput(): IvsRecordingConfigurationTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
