import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccMediapackageChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html#id DataAwsccMediapackageChannel#id}
    */
    readonly id: string;
}
export declare class DataAwsccMediapackageChannelEgressAccessLogs extends cdktf.ComplexComputedList {
    get logGroupName(): string;
}
export declare function dataAwsccMediapackageChannelEgressAccessLogsToTerraform(struct?: DataAwsccMediapackageChannelEgressAccessLogs): any;
export declare class DataAwsccMediapackageChannelHlsIngestIngestEndpoints extends cdktf.ComplexComputedList {
    get id(): string;
    get password(): string;
    get url(): string;
    get username(): string;
}
export declare function dataAwsccMediapackageChannelHlsIngestIngestEndpointsToTerraform(struct?: DataAwsccMediapackageChannelHlsIngestIngestEndpoints): any;
export declare class DataAwsccMediapackageChannelHlsIngest extends cdktf.ComplexComputedList {
    get ingestEndpoints(): any;
}
export declare function dataAwsccMediapackageChannelHlsIngestToTerraform(struct?: DataAwsccMediapackageChannelHlsIngest): any;
export declare class DataAwsccMediapackageChannelIngressAccessLogs extends cdktf.ComplexComputedList {
    get logGroupName(): string;
}
export declare function dataAwsccMediapackageChannelIngressAccessLogsToTerraform(struct?: DataAwsccMediapackageChannelIngressAccessLogs): any;
export declare class DataAwsccMediapackageChannelTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccMediapackageChannelTagsToTerraform(struct?: DataAwsccMediapackageChannelTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html awscc_mediapackage_channel}
*/
export declare class DataAwsccMediapackageChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/mediapackage_channel.html awscc_mediapackage_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccMediapackageChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccMediapackageChannelConfig);
    get arn(): string;
    get description(): string;
    get egressAccessLogs(): any;
    get hlsIngest(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get ingressAccessLogs(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
