import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html#sns_role_name FmsNotificationChannel#sns_role_name}
    */
    readonly snsRoleName: string;
    /**
    * A resource ARN.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html#sns_topic_arn FmsNotificationChannel#sns_topic_arn}
    */
    readonly snsTopicArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel}
*/
export declare class FmsNotificationChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/fms_notification_channel.html awscc_fms_notification_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsNotificationChannelConfig
    */
    constructor(scope: Construct, id: string, config: FmsNotificationChannelConfig);
    get id(): string;
    private _snsRoleName;
    get snsRoleName(): string;
    set snsRoleName(value: string);
    get snsRoleNameInput(): string;
    private _snsTopicArn;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    get snsTopicArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
