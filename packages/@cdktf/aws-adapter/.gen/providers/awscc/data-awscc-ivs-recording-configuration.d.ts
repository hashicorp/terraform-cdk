import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccIvsRecordingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html#id DataAwsccIvsRecordingConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccIvsRecordingConfigurationDestinationConfigurationS3 extends cdktf.ComplexComputedList {
    get bucketName(): string;
}
export declare function dataAwsccIvsRecordingConfigurationDestinationConfigurationS3ToTerraform(struct?: DataAwsccIvsRecordingConfigurationDestinationConfigurationS3): any;
export declare class DataAwsccIvsRecordingConfigurationDestinationConfiguration extends cdktf.ComplexComputedList {
    get s3(): any;
}
export declare function dataAwsccIvsRecordingConfigurationDestinationConfigurationToTerraform(struct?: DataAwsccIvsRecordingConfigurationDestinationConfiguration): any;
export declare class DataAwsccIvsRecordingConfigurationTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccIvsRecordingConfigurationTagsToTerraform(struct?: DataAwsccIvsRecordingConfigurationTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html awscc_ivs_recording_configuration}
*/
export declare class DataAwsccIvsRecordingConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ivs_recording_configuration.html awscc_ivs_recording_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccIvsRecordingConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccIvsRecordingConfigurationConfig);
    get arn(): string;
    get destinationConfiguration(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get state(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
