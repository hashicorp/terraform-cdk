import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class SsmcontactsContactChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsContactChannelConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SsmcontactsContactChannelConfig);
    get arn(): string;
    private _channelAddress?;
    get channelAddress(): string;
    set channelAddress(value: string);
    resetChannelAddress(): void;
    get channelAddressInput(): string | undefined;
    private _channelName?;
    get channelName(): string;
    set channelName(value: string);
    resetChannelName(): void;
    get channelNameInput(): string | undefined;
    private _channelType?;
    get channelType(): string;
    set channelType(value: string);
    resetChannelType(): void;
    get channelTypeInput(): string | undefined;
    private _contactId?;
    get contactId(): string;
    set contactId(value: string);
    resetContactId(): void;
    get contactIdInput(): string | undefined;
    private _deferActivation?;
    get deferActivation(): boolean | cdktf.IResolvable;
    set deferActivation(value: boolean | cdktf.IResolvable);
    resetDeferActivation(): void;
    get deferActivationInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
