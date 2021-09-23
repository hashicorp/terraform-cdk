import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#end_points CloudfrontRealtimeLogConfig#end_points}
    */
    readonly endPoints: CloudfrontRealtimeLogConfigEndPoints[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#fields CloudfrontRealtimeLogConfig#fields}
    */
    readonly fields: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#name CloudfrontRealtimeLogConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
    */
    readonly samplingRate: number;
}
export interface CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#role_arn CloudfrontRealtimeLogConfig#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
    */
    readonly streamArn: string;
}
export declare function cloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig): any;
export interface CloudfrontRealtimeLogConfigEndPoints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html#stream_type CloudfrontRealtimeLogConfig#stream_type}
    */
    readonly streamType: string;
}
export declare function cloudfrontRealtimeLogConfigEndPointsToTerraform(struct?: CloudfrontRealtimeLogConfigEndPoints): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config}
*/
export declare class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudfront_realtime_log_config.html awscc_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontRealtimeLogConfigConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    private _endPoints;
    get endPoints(): CloudfrontRealtimeLogConfigEndPoints[];
    set endPoints(value: CloudfrontRealtimeLogConfigEndPoints[]);
    get endPointsInput(): CloudfrontRealtimeLogConfigEndPoints[];
    private _fields;
    get fields(): string[];
    set fields(value: string[]);
    get fieldsInput(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _samplingRate;
    get samplingRate(): number;
    set samplingRate(value: number);
    get samplingRateInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
