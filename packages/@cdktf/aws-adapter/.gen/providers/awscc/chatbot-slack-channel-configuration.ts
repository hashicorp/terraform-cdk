// https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class ChatbotSlackChannelConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_chatbot_slack_channel_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChatbotSlackChannelConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ChatbotSlackChannelConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_chatbot_slack_channel_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configurationName = config.configurationName;
    this._iamRoleArn = config.iamRoleArn;
    this._loggingLevel = config.loggingLevel;
    this._slackChannelId = config.slackChannelId;
    this._slackWorkspaceId = config.slackWorkspaceId;
    this._snsTopicArns = config.snsTopicArns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName: string;
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn: string;
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string;
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel
  }

  // slack_channel_id - computed: false, optional: false, required: true
  private _slackChannelId: string;
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }
  public set slackChannelId(value: string) {
    this._slackChannelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelIdInput() {
    return this._slackChannelId
  }

  // slack_workspace_id - computed: false, optional: false, required: true
  private _slackWorkspaceId: string;
  public get slackWorkspaceId() {
    return this.getStringAttribute('slack_workspace_id');
  }
  public set slackWorkspaceId(value: string) {
    this._slackWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackWorkspaceIdInput() {
    return this._slackWorkspaceId
  }

  // sns_topic_arns - computed: false, optional: true, required: false
  private _snsTopicArns?: string[];
  public get snsTopicArns() {
    return this.getListAttribute('sns_topic_arns');
  }
  public set snsTopicArns(value: string[] ) {
    this._snsTopicArns = value;
  }
  public resetSnsTopicArns() {
    this._snsTopicArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnsInput() {
    return this._snsTopicArns
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
      logging_level: cdktf.stringToTerraform(this._loggingLevel),
      slack_channel_id: cdktf.stringToTerraform(this._slackChannelId),
      slack_workspace_id: cdktf.stringToTerraform(this._slackWorkspaceId),
      sns_topic_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snsTopicArns),
    };
  }
}
