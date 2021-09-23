import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccFmsNotificationChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/fms_notification_channel.html#id DataAwsccFmsNotificationChannel#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/fms_notification_channel.html awscc_fms_notification_channel}
*/
export declare class DataAwsccFmsNotificationChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/fms_notification_channel.html awscc_fms_notification_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccFmsNotificationChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccFmsNotificationChannelConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get snsRoleName(): string;
    get snsTopicArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
