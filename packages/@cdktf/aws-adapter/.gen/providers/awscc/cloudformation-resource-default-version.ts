// https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudformationResourceDefaultVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#type_name CloudformationResourceDefaultVersion#type_name}
  */
  readonly typeName?: string;
  /**
  * The Amazon Resource Name (ARN) of the type version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#type_version_arn CloudformationResourceDefaultVersion#type_version_arn}
  */
  readonly typeVersionArn?: string;
  /**
  * The ID of an existing version of the resource to set as the default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html#version_id CloudformationResourceDefaultVersion#version_id}
  */
  readonly versionId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html awscc_cloudformation_resource_default_version}
*/
export class CloudformationResourceDefaultVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_cloudformation_resource_default_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/cloudformation_resource_default_version.html awscc_cloudformation_resource_default_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationResourceDefaultVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudformationResourceDefaultVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_cloudformation_resource_default_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._typeName = config.typeName;
    this._typeVersionArn = config.typeVersionArn;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string;
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string ) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // type_version_arn - computed: false, optional: true, required: false
  private _typeVersionArn?: string;
  public get typeVersionArn() {
    return this.getStringAttribute('type_version_arn');
  }
  public set typeVersionArn(value: string ) {
    this._typeVersionArn = value;
  }
  public resetTypeVersionArn() {
    this._typeVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVersionArnInput() {
    return this._typeVersionArn
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string ) {
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
      type_name: cdktf.stringToTerraform(this._typeName),
      type_version_arn: cdktf.stringToTerraform(this._typeVersionArn),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }
}
