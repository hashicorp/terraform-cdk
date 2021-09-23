// https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmcontactsContactChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact_channel.html#id DataAwsccSsmcontactsContactChannel#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel}
*/
export class DataAwsccSsmcontactsContactChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmcontacts_contact_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmcontactsContactChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmcontactsContactChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmcontacts_contact_channel',
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

  // channel_address - computed: true, optional: false, required: false
  public get channelAddress() {
    return this.getStringAttribute('channel_address');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // channel_type - computed: true, optional: false, required: false
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }

  // contact_id - computed: true, optional: false, required: false
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }

  // defer_activation - computed: true, optional: false, required: false
  public get deferActivation() {
    return this.getBooleanAttribute('defer_activation');
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
