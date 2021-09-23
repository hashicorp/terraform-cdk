import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDevopsguruNotificationChannelsConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channels.html awscc_devopsguru_notification_channels}
*/
export declare class DataAwsccDevopsguruNotificationChannels extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channels.html awscc_devopsguru_notification_channels} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDevopsguruNotificationChannelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsccDevopsguruNotificationChannelsConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
