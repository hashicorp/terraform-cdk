import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class DataAwsccSsmcontactsContactChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmcontacts_contact_channel.html awscc_ssmcontacts_contact_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmcontactsContactChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmcontactsContactChannelConfig);
    get arn(): string;
    get channelAddress(): string;
    get channelName(): string;
    get channelType(): string;
    get contactId(): string;
    get deferActivation(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
