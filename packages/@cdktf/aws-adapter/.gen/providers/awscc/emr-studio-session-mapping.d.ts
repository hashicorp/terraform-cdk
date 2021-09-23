import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#identity_name EmrStudioSessionMapping#identity_name}
    */
    readonly identityName: string;
    /**
    * Specifies whether the identity to map to the Studio is a user or a group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#identity_type EmrStudioSessionMapping#identity_type}
    */
    readonly identityType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
    */
    readonly sessionPolicyArn: string;
    /**
    * The ID of the Amazon EMR Studio to which the user or group will be mapped.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html#studio_id EmrStudioSessionMapping#studio_id}
    */
    readonly studioId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html awscc_emr_studio_session_mapping}
*/
export declare class EmrStudioSessionMapping extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio_session_mapping.html awscc_emr_studio_session_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioSessionMappingConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioSessionMappingConfig);
    get id(): string;
    private _identityName;
    get identityName(): string;
    set identityName(value: string);
    get identityNameInput(): string;
    private _identityType;
    get identityType(): string;
    set identityType(value: string);
    get identityTypeInput(): string;
    private _sessionPolicyArn;
    get sessionPolicyArn(): string;
    set sessionPolicyArn(value: string);
    get sessionPolicyArnInput(): string;
    private _studioId;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
