import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotsitewiseAccessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The identity for this access policy. Choose either an SSO user or group or an IAM user or role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#access_policy_identity IotsitewiseAccessPolicy#access_policy_identity}
    */
    readonly accessPolicyIdentity: IotsitewiseAccessPolicyAccessPolicyIdentity;
    /**
    * The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#access_policy_permission IotsitewiseAccessPolicy#access_policy_permission}
    */
    readonly accessPolicyPermission: string;
    /**
    * The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#access_policy_resource IotsitewiseAccessPolicy#access_policy_resource}
    */
    readonly accessPolicyResource: IotsitewiseAccessPolicyAccessPolicyResource;
}
export interface IotsitewiseAccessPolicyAccessPolicyIdentityIamRole {
    /**
    * The ARN of the IAM role.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#arn IotsitewiseAccessPolicy#arn}
    */
    readonly arn?: string;
}
export declare function iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any;
export interface IotsitewiseAccessPolicyAccessPolicyIdentityIamUser {
    /**
    * The ARN of the IAM user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#arn IotsitewiseAccessPolicy#arn}
    */
    readonly arn?: string;
}
export declare function iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any;
export interface IotsitewiseAccessPolicyAccessPolicyIdentityUser {
    /**
    * The AWS SSO ID of the user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
    */
    readonly id?: string;
}
export declare function iotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityUser): any;
export interface IotsitewiseAccessPolicyAccessPolicyIdentity {
    /**
    * Contains information for an IAM role identity in an access policy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#iam_role IotsitewiseAccessPolicy#iam_role}
    */
    readonly iamRole?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole;
    /**
    * Contains information for an IAM user identity in an access policy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#iam_user IotsitewiseAccessPolicy#iam_user}
    */
    readonly iamUser?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser;
    /**
    * Contains information for a user identity in an access policy.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#user IotsitewiseAccessPolicy#user}
    */
    readonly user?: IotsitewiseAccessPolicyAccessPolicyIdentityUser;
}
export declare function iotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentity): any;
export interface IotsitewiseAccessPolicyAccessPolicyResourcePortal {
    /**
    * The ID of the portal.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
    */
    readonly id?: string;
}
export declare function iotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourcePortal): any;
export interface IotsitewiseAccessPolicyAccessPolicyResourceProject {
    /**
    * The ID of the project.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
    */
    readonly id?: string;
}
export declare function iotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourceProject): any;
export interface IotsitewiseAccessPolicyAccessPolicyResource {
    /**
    * A portal resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#portal IotsitewiseAccessPolicy#portal}
    */
    readonly portal?: IotsitewiseAccessPolicyAccessPolicyResourcePortal;
    /**
    * A project resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#project IotsitewiseAccessPolicy#project}
    */
    readonly project?: IotsitewiseAccessPolicyAccessPolicyResourceProject;
}
export declare function iotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html awscc_iotsitewise_access_policy}
*/
export declare class IotsitewiseAccessPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html awscc_iotsitewise_access_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotsitewiseAccessPolicyConfig
    */
    constructor(scope: Construct, id: string, config: IotsitewiseAccessPolicyConfig);
    get accessPolicyArn(): string;
    get accessPolicyId(): string;
    private _accessPolicyIdentity;
    get accessPolicyIdentity(): IotsitewiseAccessPolicyAccessPolicyIdentity;
    set accessPolicyIdentity(value: IotsitewiseAccessPolicyAccessPolicyIdentity);
    get accessPolicyIdentityInput(): IotsitewiseAccessPolicyAccessPolicyIdentity;
    private _accessPolicyPermission;
    get accessPolicyPermission(): string;
    set accessPolicyPermission(value: string);
    get accessPolicyPermissionInput(): string;
    private _accessPolicyResource;
    get accessPolicyResource(): IotsitewiseAccessPolicyAccessPolicyResource;
    set accessPolicyResource(value: IotsitewiseAccessPolicyAccessPolicyResource);
    get accessPolicyResourceInput(): IotsitewiseAccessPolicyAccessPolicyResource;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
