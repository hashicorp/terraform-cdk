// https://www.terraform.io/docs/providers/awscc/r/emr_studio.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function emrStudioTagsToTerraform(struct?: EmrStudioTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio}
*/
export class EmrStudio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_emr_studio";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/emr_studio.html awscc_emr_studio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrStudioConfig
  */
  public constructor(scope: Construct, id: string, config: EmrStudioConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_emr_studio',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authMode = config.authMode;
    this._defaultS3Location = config.defaultS3Location;
    this._description = config.description;
    this._engineSecurityGroupId = config.engineSecurityGroupId;
    this._name = config.name;
    this._serviceRole = config.serviceRole;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._userRole = config.userRole;
    this._vpcId = config.vpcId;
    this._workspaceSecurityGroupId = config.workspaceSecurityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_mode - computed: false, optional: false, required: true
  private _authMode: string;
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode
  }

  // default_s3_location - computed: false, optional: false, required: true
  private _defaultS3Location: string;
  public get defaultS3Location() {
    return this.getStringAttribute('default_s3_location');
  }
  public set defaultS3Location(value: string) {
    this._defaultS3Location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultS3LocationInput() {
    return this._defaultS3Location
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // engine_security_group_id - computed: false, optional: false, required: true
  private _engineSecurityGroupId: string;
  public get engineSecurityGroupId() {
    return this.getStringAttribute('engine_security_group_id');
  }
  public set engineSecurityGroupId(value: string) {
    this._engineSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineSecurityGroupIdInput() {
    return this._engineSecurityGroupId
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: EmrStudioTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: EmrStudioTags[] ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user_role - computed: false, optional: false, required: true
  private _userRole: string;
  public get userRole() {
    return this.getStringAttribute('user_role');
  }
  public set userRole(value: string) {
    this._userRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleInput() {
    return this._userRole
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId: string;
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId
  }

  // workspace_security_group_id - computed: false, optional: false, required: true
  private _workspaceSecurityGroupId: string;
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }
  public set workspaceSecurityGroupId(value: string) {
    this._workspaceSecurityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSecurityGroupIdInput() {
    return this._workspaceSecurityGroupId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mode: cdktf.stringToTerraform(this._authMode),
      default_s3_location: cdktf.stringToTerraform(this._defaultS3Location),
      description: cdktf.stringToTerraform(this._description),
      engine_security_group_id: cdktf.stringToTerraform(this._engineSecurityGroupId),
      name: cdktf.stringToTerraform(this._name),
      service_role: cdktf.stringToTerraform(this._serviceRole),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
      tags: cdktf.listMapper(emrStudioTagsToTerraform)(this._tags),
      user_role: cdktf.stringToTerraform(this._userRole),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      workspace_security_group_id: cdktf.stringToTerraform(this._workspaceSecurityGroupId),
    };
  }
}
