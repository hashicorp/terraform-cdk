import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the quick connect.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#description ConnectQuickConnect#description}
    */
    readonly description?: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#instance_arn ConnectQuickConnect#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The name of the quick connect.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#name ConnectQuickConnect#name}
    */
    readonly name: string;
    /**
    * Configuration settings for the quick connect.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#quick_connect_config ConnectQuickConnect#quick_connect_config}
    */
    readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#tags ConnectQuickConnect#tags}
    */
    readonly tags?: ConnectQuickConnectTags[];
}
export interface ConnectQuickConnectQuickConnectConfigPhoneConfig {
    /**
    * The phone number in E.164 format.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#phone_number ConnectQuickConnect#phone_number}
    */
    readonly phoneNumber: string;
}
export declare function connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig): any;
export interface ConnectQuickConnectQuickConnectConfigQueueConfig {
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#contact_flow_arn ConnectQuickConnect#contact_flow_arn}
    */
    readonly contactFlowArn: string;
    /**
    * The identifier for the queue.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#queue_arn ConnectQuickConnect#queue_arn}
    */
    readonly queueArn: string;
}
export declare function connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig): any;
export interface ConnectQuickConnectQuickConnectConfigUserConfig {
    /**
    * The identifier of the contact flow.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#contact_flow_arn ConnectQuickConnect#contact_flow_arn}
    */
    readonly contactFlowArn: string;
    /**
    * The identifier of the user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#user_arn ConnectQuickConnect#user_arn}
    */
    readonly userArn: string;
}
export declare function connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig): any;
export interface ConnectQuickConnectQuickConnectConfig {
    /**
    * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#phone_config ConnectQuickConnect#phone_config}
    */
    readonly phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig;
    /**
    * The queue configuration. This is required only if QuickConnectType is QUEUE.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#queue_config ConnectQuickConnect#queue_config}
    */
    readonly queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig;
    /**
    * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#quick_connect_type ConnectQuickConnect#quick_connect_type}
    */
    readonly quickConnectType: string;
    /**
    * The user configuration. This is required only if QuickConnectType is USER.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#user_config ConnectQuickConnect#user_config}
    */
    readonly userConfig?: ConnectQuickConnectQuickConnectConfigUserConfig;
}
export declare function connectQuickConnectQuickConnectConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfig): any;
export interface ConnectQuickConnectTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#key ConnectQuickConnect#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html#value ConnectQuickConnect#value}
    */
    readonly value: string;
}
export declare function connectQuickConnectTagsToTerraform(struct?: ConnectQuickConnectTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect}
*/
export declare class ConnectQuickConnect extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/connect_quick_connect.html awscc_connect_quick_connect} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectQuickConnectConfig
    */
    constructor(scope: Construct, id: string, config: ConnectQuickConnectConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get quickConnectArn(): string;
    private _quickConnectConfig;
    get quickConnectConfig(): ConnectQuickConnectQuickConnectConfig;
    set quickConnectConfig(value: ConnectQuickConnectQuickConnectConfig);
    get quickConnectConfigInput(): ConnectQuickConnectQuickConnectConfig;
    private _tags?;
    get tags(): ConnectQuickConnectTags[];
    set tags(value: ConnectQuickConnectTags[]);
    resetTags(): void;
    get tagsInput(): ConnectQuickConnectTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
