// https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccNimblestudioStudioConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html#id DataAwsccNimblestudioStudio#id}
  */
  readonly id: string;
}
export class DataAwsccNimblestudioStudioStudioEncryptionConfiguration extends cdktf.ComplexComputedList {

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
}

export function dataAwsccNimblestudioStudioStudioEncryptionConfigurationToTerraform(struct?: DataAwsccNimblestudioStudioStudioEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html awscc_nimblestudio_studio}
*/
export class DataAwsccNimblestudioStudio extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_nimblestudio_studio";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/nimblestudio_studio.html awscc_nimblestudio_studio} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccNimblestudioStudioConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccNimblestudioStudioConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_role_arn - computed: true, optional: false, required: false
  public get adminRoleArn() {
    return this.getStringAttribute('admin_role_arn');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // sso_client_id - computed: true, optional: false, required: false
  public get ssoClientId() {
    return this.getStringAttribute('sso_client_id');
  }

  // studio_encryption_configuration - computed: true, optional: false, required: false
  public get studioEncryptionConfiguration() {
    return this.interpolationForAttribute('studio_encryption_configuration') as any;
  }

  // studio_id - computed: true, optional: false, required: false
  public get studioId() {
    return this.getStringAttribute('studio_id');
  }

  // studio_name - computed: true, optional: false, required: false
  public get studioName() {
    return this.getStringAttribute('studio_name');
  }

  // studio_url - computed: true, optional: false, required: false
  public get studioUrl() {
    return this.getStringAttribute('studio_url');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // user_role_arn - computed: true, optional: false, required: false
  public get userRoleArn() {
    return this.getStringAttribute('user_role_arn');
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
