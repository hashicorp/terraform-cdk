import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChatbotSlackChannelConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the configuration
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#configuration_name ChatbotSlackChannelConfiguration#configuration_name}
    */
    readonly configurationName: string;
    /**
    * The ARN of the IAM role that defines the permissions for AWS Chatbot
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#logging_level ChatbotSlackChannelConfiguration#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * The id of the Slack channel
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}
    */
    readonly slackChannelId: string;
    /**
    * The id of the Slack workspace
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#slack_workspace_id ChatbotSlackChannelConfiguration#slack_workspace_id}
    */
    readonly slackWorkspaceId: string;
    /**
    * ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}
    */
    readonly snsTopicArns?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration}
*/
export declare class ChatbotSlackChannelConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChatbotSlackChannelConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ChatbotSlackChannelConfigurationConfig);
    get arn(): string;
    private _configurationName;
    get configurationName(): string;
    set configurationName(value: string);
    get configurationNameInput(): string;
    private _iamRoleArn;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string;
    get id(): string;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string | undefined;
    private _slackChannelId;
    get slackChannelId(): string;
    set slackChannelId(value: string);
    get slackChannelIdInput(): string;
    private _slackWorkspaceId;
    get slackWorkspaceId(): string;
    set slackWorkspaceId(value: string);
    get slackWorkspaceIdInput(): string;
    private _snsTopicArns?;
    get snsTopicArns(): string[];
    set snsTopicArns(value: string[]);
    resetSnsTopicArns(): void;
    get snsTopicArnsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
