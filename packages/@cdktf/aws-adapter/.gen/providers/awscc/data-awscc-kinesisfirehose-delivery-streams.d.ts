import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKinesisfirehoseDeliveryStreamsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_streams.html awscc_kinesisfirehose_delivery_streams}
*/
export declare class DataAwsccKinesisfirehoseDeliveryStreams extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kinesisfirehose_delivery_streams.html awscc_kinesisfirehose_delivery_streams} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKinesisfirehoseDeliveryStreamsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccKinesisfirehoseDeliveryStreamsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
