import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccNimblestudioLaunchProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html#id DataAwsccNimblestudioLaunchProfile#id}
    */
    readonly id: string;
}
export declare class DataAwsccNimblestudioLaunchProfileStreamConfiguration extends cdktf.ComplexComputedList {
    get clipboardMode(): string;
    get ec2InstanceTypes(): string[];
    get maxSessionLengthInMinutes(): number;
    get streamingImageIds(): string[];
}
export declare function dataAwsccNimblestudioLaunchProfileStreamConfigurationToTerraform(struct?: DataAwsccNimblestudioLaunchProfileStreamConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile}
*/
export declare class DataAwsccNimblestudioLaunchProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_launch_profile.html awscc_nimblestudio_launch_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccNimblestudioLaunchProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccNimblestudioLaunchProfileConfig);
    get description(): string;
    get ec2SubnetIds(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get launchProfileId(): string;
    get launchProfileProtocolVersions(): string[];
    get name(): string;
    get streamConfiguration(): any;
    get studioComponentIds(): string[];
    get studioId(): string;
    tags(key: string): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
