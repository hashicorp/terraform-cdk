// https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmcontactsContactChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The details that SSM Incident Manager uses when trying to engage the contact channel.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html#channel_address SsmcontactsContactChannel#channel_address}
  */
  readonly channelAddress?: string;
  /**
  * The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html#channel_name SsmcontactsContactChannel#channel_name}
  */
  readonly channelName?: string;
  /**
  * Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html#channel_type SsmcontactsContactChannel#channel_type}
  */
  readonly channelType?: string;
  /**
  * ARN of the contact resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html#contact_id SsmcontactsContactChannel#contact_id}
  */
  readonly contactId?: string;
  /**
  * If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html#defer_activation SsmcontactsContactChannel#defer_activation}
  */
  readonly deferActivation?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel}
*/
export class SsmcontactsContactChannel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmcontacts_contact_channel";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmcontactsContactChannelConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SsmcontactsContactChannelConfig = {}) {
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
    this._channelAddress = config.channelAddress;
    this._channelName = config.channelName;
    this._channelType = config.channelType;
    this._contactId = config.contactId;
    this._deferActivation = config.deferActivation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_address - computed: false, optional: true, required: false
  private _channelAddress?: string;
  public get channelAddress() {
    return this.getStringAttribute('channel_address');
  }
  public set channelAddress(value: string ) {
    this._channelAddress = value;
  }
  public resetChannelAddress() {
    this._channelAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelAddressInput() {
    return this._channelAddress
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string;
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string ) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName
  }

  // channel_type - computed: true, optional: true, required: false
  private _channelType?: string;
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }
  public set channelType(value: string) {
    this._channelType = value;
  }
  public resetChannelType() {
    this._channelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTypeInput() {
    return this._channelType
  }

  // contact_id - computed: true, optional: true, required: false
  private _contactId?: string;
  public get contactId() {
    return this.getStringAttribute('contact_id');
  }
  public set contactId(value: string) {
    this._contactId = value;
  }
  public resetContactId() {
    this._contactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId
  }

  // defer_activation - computed: false, optional: true, required: false
  private _deferActivation?: boolean | cdktf.IResolvable;
  public get deferActivation() {
    return this.getBooleanAttribute('defer_activation');
  }
  public set deferActivation(value: boolean | cdktf.IResolvable ) {
    this._deferActivation = value;
  }
  public resetDeferActivation() {
    this._deferActivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deferActivationInput() {
    return this._deferActivation
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
      channel_address: cdktf.stringToTerraform(this._channelAddress),
      channel_name: cdktf.stringToTerraform(this._channelName),
      channel_type: cdktf.stringToTerraform(this._channelType),
      contact_id: cdktf.stringToTerraform(this._contactId),
      defer_activation: cdktf.booleanToTerraform(this._deferActivation),
    };
  }
}
