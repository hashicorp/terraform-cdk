// https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NimblestudioStudioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#admin_role_arn NimblestudioStudio#admin_role_arn}
  */
  readonly adminRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#display_name NimblestudioStudio#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#studio_encryption_configuration NimblestudioStudio#studio_encryption_configuration}
  */
  readonly studioEncryptionConfiguration?: NimblestudioStudioStudioEncryptionConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#studio_name NimblestudioStudio#studio_name}
  */
  readonly studioName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#tags NimblestudioStudio#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#user_role_arn NimblestudioStudio#user_role_arn}
  */
  readonly userRoleArn: string;
}
export interface NimblestudioStudioStudioEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#key_arn NimblestudioStudio#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html#key_type NimblestudioStudio#key_type}
  */
  readonly keyType: string;
}

export function nimblestudioStudioStudioEncryptionConfigurationToTerraform(struct?: NimblestudioStudioStudioEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html awscc_nimblestudio_studio}
*/
export class NimblestudioStudio extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_studio";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/nimblestudio_studio.html awscc_nimblestudio_studio} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NimblestudioStudioConfig
  */
  public constructor(scope: Construct, id: string, config: NimblestudioStudioConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_nimblestudio_studio',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminRoleArn = config.adminRoleArn;
    this._displayName = config.displayName;
    this._studioEncryptionConfiguration = config.studioEncryptionConfiguration;
    this._studioName = config.studioName;
    this._tags = config.tags;
    this._userRoleArn = config.userRoleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_role_arn - computed: false, optional: false, required: true
  private _adminRoleArn: string;
  public get adminRoleArn() {
    return this.getStringAttribute('admin_role_arn');
  }
  public set adminRoleArn(value: string) {
    this._adminRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRoleArnInput() {
    return this._adminRoleArn
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
  }

  // studio_encryption_configuration - computed: false, optional: true, required: false
  private _studioEncryptionConfiguration?: NimblestudioStudioStudioEncryptionConfiguration;
  public get studioEncryptionConfiguration() {
    return this.interpolationForAttribute('studio_encryption_configuration') as any;
  }
  public set studioEncryptionConfiguration(value: NimblestudioStudioStudioEncryptionConfiguration ) {
    this._studioEncryptionConfiguration = value;
  }
  public resetStudioEncryptionConfiguration() {
    this._studioEncryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studioEncryptionConfigurationInput() {
    return this._studioEncryptionConfiguration
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // studio_name - computed: false, optional: false, required: true
  private _studioName: string;
  public get studioName() {
    return this.getStringAttribute('studio_name');
  }
  public set studioName(value: string) {
    this._studioName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioNameInput() {
    return this._studioName
  }

  // studio_url - computed: true, optional: false, required: false
  public get studioUrl() {
    return this.getStringAttribute('studio_url');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable
  public get tags(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // user_role_arn - computed: false, optional: false, required: true
  private _userRoleArn: string;
  public get userRoleArn() {
    return this.getStringAttribute('user_role_arn');
  }
  public set userRoleArn(value: string) {
    this._userRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRoleArnInput() {
    return this._userRoleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_role_arn: cdktf.stringToTerraform(this._adminRoleArn),
      display_name: cdktf.stringToTerraform(this._displayName),
      studio_encryption_configuration: nimblestudioStudioStudioEncryptionConfigurationToTerraform(this._studioEncryptionConfiguration),
      studio_name: cdktf.stringToTerraform(this._studioName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_role_arn: cdktf.stringToTerraform(this._userRoleArn),
    };
  }
}
