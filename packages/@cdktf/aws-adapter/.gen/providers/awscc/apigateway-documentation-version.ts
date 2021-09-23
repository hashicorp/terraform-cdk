// https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayDocumentationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the API documentation snapshot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#description ApigatewayDocumentationVersion#description}
  */
  readonly description?: string;
  /**
  * The version identifier of the API documentation snapshot.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#documentation_version ApigatewayDocumentationVersion#documentation_version}
  */
  readonly documentationVersion: string;
  /**
  * The identifier of the API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html#rest_api_id ApigatewayDocumentationVersion#rest_api_id}
  */
  readonly restApiId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html awscc_apigateway_documentation_version}
*/
export class ApigatewayDocumentationVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_documentation_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_documentation_version.html awscc_apigateway_documentation_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayDocumentationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayDocumentationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_documentation_version',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._documentationVersion = config.documentationVersion;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // documentation_version - computed: false, optional: false, required: true
  private _documentationVersion: string;
  public get documentationVersion() {
    return this.getStringAttribute('documentation_version');
  }
  public set documentationVersion(value: string) {
    this._documentationVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationVersionInput() {
    return this._documentationVersion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      documentation_version: cdktf.stringToTerraform(this._documentationVersion),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
