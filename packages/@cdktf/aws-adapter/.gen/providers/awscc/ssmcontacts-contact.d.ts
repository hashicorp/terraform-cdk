import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmcontactsContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#alias SsmcontactsContact#alias}
    */
    readonly alias: string;
    /**
    * Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#display_name SsmcontactsContact#display_name}
    */
    readonly displayName: string;
    /**
    * The stages that an escalation plan or engagement plan engages contacts and contact methods in.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#plan SsmcontactsContact#plan}
    */
    readonly plan: SsmcontactsContactPlan[];
    /**
    * Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#type SsmcontactsContact#type}
    */
    readonly type: string;
}
export interface SsmcontactsContactPlanTargetsChannelTargetInfo {
    /**
    * The Amazon Resource Name (ARN) of the contact channel.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#channel_id SsmcontactsContact#channel_id}
    */
    readonly channelId: string;
    /**
    * The number of minutes to wait to retry sending engagement in the case the engagement initially fails.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}
    */
    readonly retryIntervalInMinutes: number;
}
export declare function ssmcontactsContactPlanTargetsChannelTargetInfoToTerraform(struct?: SsmcontactsContactPlanTargetsChannelTargetInfo): any;
export interface SsmcontactsContactPlanTargetsContactTargetInfo {
    /**
    * The Amazon Resource Name (ARN) of the contact.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#contact_id SsmcontactsContact#contact_id}
    */
    readonly contactId: string;
    /**
    * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#is_essential SsmcontactsContact#is_essential}
    */
    readonly isEssential: boolean | cdktf.IResolvable;
}
export declare function ssmcontactsContactPlanTargetsContactTargetInfoToTerraform(struct?: SsmcontactsContactPlanTargetsContactTargetInfo): any;
export interface SsmcontactsContactPlanTargets {
    /**
    * Information about the contact channel that SSM Incident Manager uses to engage the contact.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#channel_target_info SsmcontactsContact#channel_target_info}
    */
    readonly channelTargetInfo?: SsmcontactsContactPlanTargetsChannelTargetInfo;
    /**
    * The contact that SSM Incident Manager is engaging during an incident.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#contact_target_info SsmcontactsContact#contact_target_info}
    */
    readonly contactTargetInfo?: SsmcontactsContactPlanTargetsContactTargetInfo;
}
export declare function ssmcontactsContactPlanTargetsToTerraform(struct?: SsmcontactsContactPlanTargets): any;
export interface SsmcontactsContactPlan {
    /**
    * The time to wait until beginning the next stage.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#duration_in_minutes SsmcontactsContact#duration_in_minutes}
    */
    readonly durationInMinutes: number;
    /**
    * The contacts or contact methods that the escalation plan or engagement plan is engaging.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html#targets SsmcontactsContact#targets}
    */
    readonly targets?: SsmcontactsContactPlanTargets[];
}
export declare function ssmcontactsContactPlanToTerraform(struct?: SsmcontactsContactPlan): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact}
*/
export declare class SsmcontactsContact extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmcontacts_contact.html awscc_ssmcontacts_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsContactConfig
    */
    constructor(scope: Construct, id: string, config: SsmcontactsContactConfig);
    private _alias;
    get alias(): string;
    set alias(value: string);
    get aliasInput(): string;
    get arn(): string;
    private _displayName;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string;
    get id(): string;
    private _plan;
    get plan(): SsmcontactsContactPlan[];
    set plan(value: SsmcontactsContactPlan[]);
    get planInput(): SsmcontactsContactPlan[];
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
