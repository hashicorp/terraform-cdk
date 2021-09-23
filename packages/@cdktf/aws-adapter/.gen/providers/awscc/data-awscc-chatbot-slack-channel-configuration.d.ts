import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccChatbotSlackChannelConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/chatbot_slack_channel_configuration.html#id DataAwsccChatbotSlackChannelConfiguration#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration}
*/
export declare class DataAwsccChatbotSlackChannelConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccChatbotSlackChannelConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccChatbotSlackChannelConfigurationConfig);
    get arn(): string;
    get configurationName(): string;
    get iamRoleArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get loggingLevel(): string;
    get slackChannelId(): string;
    get slackWorkspaceId(): string;
    get snsTopicArns(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
