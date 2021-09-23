// https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The parent resource's identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#parent_id ApigatewayResource#parent_id}
  */
  readonly parentId: string;
  /**
  * The last path segment for this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#path_part ApigatewayResource#path_part}
  */
  readonly pathPart: string;
  /**
  * The ID of the RestApi resource in which you want to create this resource..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html#rest_api_id ApigatewayResource#rest_api_id}
  */
  readonly restApiId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html awscc_apigateway_resource}
*/
export class ApigatewayResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_apigateway_resource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/apigateway_resource.html awscc_apigateway_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_apigateway_resource',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parentId = config.parentId;
    this._pathPart = config.pathPart;
    this._restApiId = config.restApiId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId: string;
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId
  }

  // path_part - computed: false, optional: false, required: true
  private _pathPart: string;
  public get pathPart() {
    return this.getStringAttribute('path_part');
  }
  public set pathPart(value: string) {
    this._pathPart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPartInput() {
    return this._pathPart
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
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
      parent_id: cdktf.stringToTerraform(this._parentId),
      path_part: cdktf.stringToTerraform(this._pathPart),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
    };
  }
}
