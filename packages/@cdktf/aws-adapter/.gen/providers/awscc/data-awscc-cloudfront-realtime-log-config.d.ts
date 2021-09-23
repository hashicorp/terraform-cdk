import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html#id DataAwsccCloudfrontRealtimeLogConfig#id}
    */
    readonly id: string;
}
export declare class DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig extends cdktf.ComplexComputedList {
    get roleArn(): string;
    get streamArn(): string;
}
export declare function dataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigToTerraform(struct?: DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig): any;
export declare class DataAwsccCloudfrontRealtimeLogConfigEndPoints extends cdktf.ComplexComputedList {
    get kinesisStreamConfig(): any;
    get streamType(): string;
}
export declare function dataAwsccCloudfrontRealtimeLogConfigEndPointsToTerraform(struct?: DataAwsccCloudfrontRealtimeLogConfigEndPoints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config}
*/
export declare class DataAwsccCloudfrontRealtimeLogConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontRealtimeLogConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccCloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    get endPoints(): any;
    get fields(): string[];
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get name(): string;
    get samplingRate(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
