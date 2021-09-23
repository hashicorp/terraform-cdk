// https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function devopsguruNotificationChannelConfigSnsToTerraform(struct?: DevopsguruNotificationChannelConfigSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export interface DevopsguruNotificationChannelConfigA {
  /**
  * Information about a notification channel configured in DevOps Guru to send notifications when insights are created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html#sns DevopsguruNotificationChannel#sns}
  */
  readonly sns?: DevopsguruNotificationChannelConfigSns;
}

export function devopsguruNotificationChannelConfigAToTerraform(struct?: DevopsguruNotificationChannelConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sns: devopsguruNotificationChannelConfigSnsToTerraform(struct!.sns),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html awscc_devopsguru_notification_channel}
*/
export class DevopsguruNotificationChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_devopsguru_notification_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/devopsguru_notification_channel.html awscc_devopsguru_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsguruNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsguruNotificationChannelConfig) {
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
    this._config = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: DevopsguruNotificationChannelConfigA;
  public get config() {
    return this.interpolationForAttribute('config') as any;
  }
  public set config(value: DevopsguruNotificationChannelConfigA) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: devopsguruNotificationChannelConfigAToTerraform(this._config),
    };
  }
}
