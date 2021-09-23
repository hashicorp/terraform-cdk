import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccDevopsguruNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html#id DataAwsccDevopsguruNotificationChannel#id}
    */
    readonly id: string;
}
export declare class DataAwsccDevopsguruNotificationChannelConfigSns extends cdktf.ComplexComputedList {
    get topicArn(): string;
}
export declare function dataAwsccDevopsguruNotificationChannelConfigSnsToTerraform(struct?: DataAwsccDevopsguruNotificationChannelConfigSns): any;
export declare class DataAwsccDevopsguruNotificationChannelConfigA extends cdktf.ComplexComputedList {
    get sns(): any;
}
export declare function dataAwsccDevopsguruNotificationChannelConfigAToTerraform(struct?: DataAwsccDevopsguruNotificationChannelConfigA): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html awscc_devopsguru_notification_channel}
*/
export declare class DataAwsccDevopsguruNotificationChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html awscc_devopsguru_notification_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccDevopsguruNotificationChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccDevopsguruNotificationChannelConfig);
    get config(): any;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
