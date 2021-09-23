import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Information about notification channels you have configured with DevOps Guru.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html#config DevopsguruNotificationChannel#config}
    */
    readonly config: DevopsguruNotificationChannelConfigA;
}
export interface DevopsguruNotificationChannelConfigSns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html#topic_arn DevopsguruNotificationChannel#topic_arn}
    */
    readonly topicArn?: string;
}
export declare function devopsguruNotificationChannelConfigSnsToTerraform(struct?: DevopsguruNotificationChannelConfigSns): any;
export interface DevopsguruNotificationChannelConfigA {
    /**
    * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html#sns DevopsguruNotificationChannel#sns}
    */
    readonly sns?: DevopsguruNotificationChannelConfigSns;
}
export declare function devopsguruNotificationChannelConfigAToTerraform(struct?: DevopsguruNotificationChannelConfigA): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html awscc_devopsguru_notification_channel}
*/
export declare class DevopsguruNotificationChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html awscc_devopsguru_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruNotificationChannelConfig
    */
    constructor(scope: Construct, id: string, config: DevopsguruNotificationChannelConfig);
    private _config;
    get config(): DevopsguruNotificationChannelConfigA;
    set config(value: DevopsguruNotificationChannelConfigA);
    get configInput(): DevopsguruNotificationChannelConfigA;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
