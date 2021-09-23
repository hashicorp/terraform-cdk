// https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationModuleDefaultVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of a module existing in the registry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html#module_name CloudformationModuleDefaultVersion#module_name}
  */
  readonly moduleName?: string;
  /**
  * The ID of an existing version of the named module to set as the default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html#version_id CloudformationModuleDefaultVersion#version_id}
  */
  readonly versionId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version}
*/
export class CloudformationModuleDefaultVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_module_default_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_module_default_version.html awscc_cloudformation_module_default_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationModuleDefaultVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudformationModuleDefaultVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_module_default_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._moduleName = config.moduleName;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // module_name - computed: true, optional: true, required: false
  private _moduleName?: string;
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }
  public set moduleName(value: string) {
    this._moduleName = value;
  }
  public resetModuleName() {
    this._moduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleNameInput() {
    return this._moduleName
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      module_name: cdktf.stringToTerraform(this._moduleName),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }
}
