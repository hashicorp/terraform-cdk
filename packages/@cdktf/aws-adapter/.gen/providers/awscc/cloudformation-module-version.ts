// https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationModuleVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the module being registered.

Recommended module naming pattern: company_or_organization::service::type::MODULE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html#module_name CloudformationModuleVersion#module_name}
  */
  readonly moduleName: string;
  /**
  * The url to the S3 bucket containing the schema and template fragment for the module you want to register.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html#module_package CloudformationModuleVersion#module_package}
  */
  readonly modulePackage: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html awscc_cloudformation_module_version}
*/
export class CloudformationModuleVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_module_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_version.html awscc_cloudformation_module_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationModuleVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationModuleVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_module_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._moduleName = config.moduleName;
    this._modulePackage = config.modulePackage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_version - computed: true, optional: false, required: false
  public get isDefaultVersion() {
    return this.getBooleanAttribute('is_default_version');
  }

  // module_name - computed: false, optional: false, required: true
  private _moduleName: string;
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName
  }

  // module_package - computed: false, optional: false, required: true
  private _modulePackage: string;
  public get modulePackage() {
    return this.getStringAttribute('module_package');
  }
  public set modulePackage(value: string) {
    this._modulePackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePackageInput() {
    return this._modulePackage
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      module_name: cdktf.stringToTerraform(this._moduleName),
      module_package: cdktf.stringToTerraform(this._modulePackage),
    };
  }
}
