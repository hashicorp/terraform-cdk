import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccCloudfrontRealtimeLogConfigsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_configs.html awscc_cloudfront_realtime_log_configs}
*/
export declare class DataAwsccCloudfrontRealtimeLogConfigs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/cloudfront_realtime_log_configs.html awscc_cloudfront_realtime_log_configs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccCloudfrontRealtimeLogConfigsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccCloudfrontRealtimeLogConfigsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
