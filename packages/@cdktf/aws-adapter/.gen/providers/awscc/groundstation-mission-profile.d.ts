import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GroundstationMissionProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Post-pass time needed after the contact.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}
    */
    readonly contactPostPassDurationSeconds?: number;
    /**
    * Pre-pass time needed before the contact.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}
    */
    readonly contactPrePassDurationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#dataflow_edges GroundstationMissionProfile#dataflow_edges}
    */
    readonly dataflowEdges: GroundstationMissionProfileDataflowEdges[];
    /**
    * Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}
    */
    readonly minimumViableContactDurationSeconds: number;
    /**
    * A name used to identify a mission profile.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#name GroundstationMissionProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#tags GroundstationMissionProfile#tags}
    */
    readonly tags?: GroundstationMissionProfileTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}
    */
    readonly trackingConfigArn: string;
}
export interface GroundstationMissionProfileDataflowEdges {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#destination GroundstationMissionProfile#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#source GroundstationMissionProfile#source}
    */
    readonly source?: string;
}
export declare function groundstationMissionProfileDataflowEdgesToTerraform(struct?: GroundstationMissionProfileDataflowEdges): any;
export interface GroundstationMissionProfileTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#key GroundstationMissionProfile#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html#value GroundstationMissionProfile#value}
    */
    readonly value?: string;
}
export declare function groundstationMissionProfileTagsToTerraform(struct?: GroundstationMissionProfileTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile}
*/
export declare class GroundstationMissionProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/groundstation_mission_profile.html awscc_groundstation_mission_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GroundstationMissionProfileConfig
    */
    constructor(scope: Construct, id: string, config: GroundstationMissionProfileConfig);
    get arn(): string;
    private _contactPostPassDurationSeconds?;
    get contactPostPassDurationSeconds(): number;
    set contactPostPassDurationSeconds(value: number);
    resetContactPostPassDurationSeconds(): void;
    get contactPostPassDurationSecondsInput(): number | undefined;
    private _contactPrePassDurationSeconds?;
    get contactPrePassDurationSeconds(): number;
    set contactPrePassDurationSeconds(value: number);
    resetContactPrePassDurationSeconds(): void;
    get contactPrePassDurationSecondsInput(): number | undefined;
    private _dataflowEdges;
    get dataflowEdges(): GroundstationMissionProfileDataflowEdges[];
    set dataflowEdges(value: GroundstationMissionProfileDataflowEdges[]);
    get dataflowEdgesInput(): GroundstationMissionProfileDataflowEdges[];
    get id(): string;
    private _minimumViableContactDurationSeconds;
    get minimumViableContactDurationSeconds(): number;
    set minimumViableContactDurationSeconds(value: number);
    get minimumViableContactDurationSecondsInput(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get region(): string;
    private _tags?;
    get tags(): GroundstationMissionProfileTags[];
    set tags(value: GroundstationMissionProfileTags[]);
    resetTags(): void;
    get tagsInput(): GroundstationMissionProfileTags[] | undefined;
    private _trackingConfigArn;
    get trackingConfigArn(): string;
    set trackingConfigArn(value: string);
    get trackingConfigArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
