// https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccIotsitewiseAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html#id DataAwsccIotsitewiseAccessPolicy#id}
  */
  readonly id: string;
}
export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity extends cdktf.ComplexComputedList {

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.interpolationForAttribute('iam_role') as any;
  }

  // iam_user - computed: true, optional: false, required: false
  public get iamUser() {
    return this.interpolationForAttribute('iam_user') as any;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.interpolationForAttribute('user') as any;
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iam_role: dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamRoleToTerraform(struct!.iamRole),
    iam_user: dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityIamUserToTerraform(struct!.iamUser),
    user: dataAwsccIotsitewiseAccessPolicyAccessPolicyIdentityUserToTerraform(struct!.user),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class DataAwsccIotsitewiseAccessPolicyAccessPolicyResource extends cdktf.ComplexComputedList {

  // portal - computed: true, optional: false, required: false
  public get portal() {
    return this.interpolationForAttribute('portal') as any;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.interpolationForAttribute('project') as any;
  }
}

export function dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceToTerraform(struct?: DataAwsccIotsitewiseAccessPolicyAccessPolicyResource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    portal: dataAwsccIotsitewiseAccessPolicyAccessPolicyResourcePortalToTerraform(struct!.portal),
    project: dataAwsccIotsitewiseAccessPolicyAccessPolicyResourceProjectToTerraform(struct!.project),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html awscc_iotsitewise_access_policy}
*/
export class DataAwsccIotsitewiseAccessPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_iotsitewise_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/iotsitewise_access_policy.html awscc_iotsitewise_access_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccIotsitewiseAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccIotsitewiseAccessPolicyConfig) {
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
    this._id = config.id;
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

  // access_policy_identity - computed: true, optional: false, required: false
  public get accessPolicyIdentity() {
    return this.interpolationForAttribute('access_policy_identity') as any;
  }

  // access_policy_permission - computed: true, optional: false, required: false
  public get accessPolicyPermission() {
    return this.getStringAttribute('access_policy_permission');
  }

  // access_policy_resource - computed: true, optional: false, required: false
  public get accessPolicyResource() {
    return this.interpolationForAttribute('access_policy_resource') as any;
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
