// https://www.terraform.io/docs/providers/awscc/d/chatbot_slack_channel_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class DataAwsccChatbotSlackChannelConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_chatbot_slack_channel_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/chatbot_slack_channel_configuration.html awscc_chatbot_slack_channel_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccChatbotSlackChannelConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccChatbotSlackChannelConfigurationConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_name - computed: true, optional: false, required: false
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }

  // id - computed: false, optional: false, required: true
  private _id: string;
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // logging_level - computed: true, optional: false, required: false
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }

  // slack_channel_id - computed: true, optional: false, required: false
  public get slackChannelId() {
    return this.getStringAttribute('slack_channel_id');
  }

  // slack_workspace_id - computed: true, optional: false, required: false
  public get slackWorkspaceId() {
    return this.getStringAttribute('slack_workspace_id');
  }

  // sns_topic_arns - computed: true, optional: false, required: false
  public get snsTopicArns() {
    return this.getListAttribute('sns_topic_arns');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
