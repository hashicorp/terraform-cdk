// https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface IotsitewiseAccessPolicyAccessPolicyIdentityIamUser {
  /**
  * The ARN of the IAM user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#arn IotsitewiseAccessPolicy#arn}
  */
  readonly arn?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface IotsitewiseAccessPolicyAccessPolicyIdentityUser {
  /**
  * The AWS SSO ID of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentityUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

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

export function iotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_role: iotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct!.iamRole),
    iam_user: iotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct!.iamUser),
    user: iotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct!.user),
  }
}

export interface IotsitewiseAccessPolicyAccessPolicyResourcePortal {
  /**
  * The ID of the portal.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourcePortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export interface IotsitewiseAccessPolicyAccessPolicyResourceProject {
  /**
  * The ID of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html#id IotsitewiseAccessPolicy#id}
  */
  readonly id?: string;
}

export function iotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResourceProject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

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

export function iotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: IotsitewiseAccessPolicyAccessPolicyResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    portal: iotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct!.portal),
    project: iotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct!.project),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html awscc_iotsitewise_access_policy}
*/
export class IotsitewiseAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/iotsitewise_access_policy.html awscc_iotsitewise_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotsitewiseAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IotsitewiseAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_iotsitewise_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicyIdentity = config.accessPolicyIdentity;
    this._accessPolicyPermission = config.accessPolicyPermission;
    this._accessPolicyResource = config.accessPolicyResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_arn - computed: true, optional: false, required: false
  public get accessPolicyArn() {
    return this.getStringAttribute('access_policy_arn');
  }

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
  }

  // access_policy_identity - computed: false, optional: false, required: true
  private _accessPolicyIdentity: IotsitewiseAccessPolicyAccessPolicyIdentity;
  public get accessPolicyIdentity() {
    return this.interpolationForAttribute('access_policy_identity') as any;
  }
  public set accessPolicyIdentity(value: IotsitewiseAccessPolicyAccessPolicyIdentity) {
    this._accessPolicyIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyIdentityInput() {
    return this._accessPolicyIdentity
  }

  // access_policy_permission - computed: false, optional: false, required: true
  private _accessPolicyPermission: string;
  public get accessPolicyPermission() {
    return this.getStringAttribute('access_policy_permission');
  }
  public set accessPolicyPermission(value: string) {
    this._accessPolicyPermission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyPermissionInput() {
    return this._accessPolicyPermission
  }

  // access_policy_resource - computed: false, optional: false, required: true
  private _accessPolicyResource: IotsitewiseAccessPolicyAccessPolicyResource;
  public get accessPolicyResource() {
    return this.interpolationForAttribute('access_policy_resource') as any;
  }
  public set accessPolicyResource(value: IotsitewiseAccessPolicyAccessPolicyResource) {
    this._accessPolicyResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyResourceInput() {
    return this._accessPolicyResource
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
      access_policy_identity: iotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(this._accessPolicyIdentity),
      access_policy_permission: cdktf.stringToTerraform(this._accessPolicyPermission),
      access_policy_resource: iotsitewiseAccessPolicyAccessPolicyResourceToTerraform(this._accessPolicyResource),
    };
  }
}
