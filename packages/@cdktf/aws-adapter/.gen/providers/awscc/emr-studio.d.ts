import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#auth_mode EmrStudio#auth_mode}
    */
    readonly authMode: string;
    /**
    * The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#default_s3_location EmrStudio#default_s3_location}
    */
    readonly defaultS3Location: string;
    /**
    * A detailed description of the Studio.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#description EmrStudio#description}
    */
    readonly description?: string;
    /**
    * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#engine_security_group_id EmrStudio#engine_security_group_id}
    */
    readonly engineSecurityGroupId: string;
    /**
    * A descriptive name for the Amazon EMR Studio.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#name EmrStudio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#service_role EmrStudio#service_role}
    */
    readonly serviceRole: string;
    /**
    * A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#subnet_ids EmrStudio#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#tags EmrStudio#tags}
    */
    readonly tags?: EmrStudioTags[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#user_role EmrStudio#user_role}
    */
    readonly userRole: string;
    /**
    * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#vpc_id EmrStudio#vpc_id}
    */
    readonly vpcId: string;
    /**
    * The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#workspace_security_group_id EmrStudio#workspace_security_group_id}
    */
    readonly workspaceSecurityGroupId: string;
}
export interface EmrStudioTags {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#key EmrStudio#key}
    */
    readonly key: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html#value EmrStudio#value}
    */
    readonly value: string;
}
export declare function emrStudioTagsToTerraform(struct?: EmrStudioTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio}
*/
export declare class EmrStudio extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioConfig);
    get arn(): string;
    private _authMode;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string;
    private _defaultS3Location;
    get defaultS3Location(): string;
    set defaultS3Location(value: string);
    get defaultS3LocationInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engineSecurityGroupId;
    get engineSecurityGroupId(): string;
    set engineSecurityGroupId(value: string);
    get engineSecurityGroupIdInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _serviceRole;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string;
    get studioId(): string;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    private _tags?;
    get tags(): EmrStudioTags[];
    set tags(value: EmrStudioTags[]);
    resetTags(): void;
    get tagsInput(): EmrStudioTags[] | undefined;
    get url(): string;
    private _userRole;
    get userRole(): string;
    set userRole(value: string);
    get userRoleInput(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _workspaceSecurityGroupId;
    get workspaceSecurityGroupId(): string;
    set workspaceSecurityGroupId(value: string);
    get workspaceSecurityGroupIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
