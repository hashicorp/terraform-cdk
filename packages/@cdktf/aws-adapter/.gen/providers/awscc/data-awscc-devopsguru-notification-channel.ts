// https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccDevopsguruNotificationChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html#id DataAwsccDevopsguruNotificationChannel#id}
  */
  readonly id: string;
}
export class DataAwsccDevopsguruNotificationChannelConfigSns extends cdktf.ComplexComputedList {

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export function dataAwsccDevopsguruNotificationChannelConfigSnsToTerraform(struct?: DataAwsccDevopsguruNotificationChannelConfigSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export class DataAwsccDevopsguruNotificationChannelConfigA extends cdktf.ComplexComputedList {

  // sns - computed: true, optional: false, required: false
  public get sns() {
    return this.interpolationForAttribute('sns') as any;
  }
}

export function dataAwsccDevopsguruNotificationChannelConfigAToTerraform(struct?: DataAwsccDevopsguruNotificationChannelConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns: dataAwsccDevopsguruNotificationChannelConfigSnsToTerraform(struct!.sns),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html awscc_devopsguru_notification_channel}
*/
export class DataAwsccDevopsguruNotificationChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_devopsguru_notification_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/devopsguru_notification_channel.html awscc_devopsguru_notification_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccDevopsguruNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccDevopsguruNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_devopsguru_notification_channel',
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

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.interpolationForAttribute('config') as any;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
