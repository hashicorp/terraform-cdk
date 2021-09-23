// https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogappregistryResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name or the Id of the Application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#application ServicecatalogappregistryResourceAssociation#application}
  */
  readonly application: string;
  /**
  * The name or the Id of the Resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#resource ServicecatalogappregistryResourceAssociation#resource}
  */
  readonly resource: string;
  /**
  * The type of the CFN Resource for now it's enum CFN_STACK.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html#resource_type ServicecatalogappregistryResourceAssociation#resource_type}
  */
  readonly resourceType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association}
*/
export class ServicecatalogappregistryResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalogappregistry_resource_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_resource_association.html awscc_servicecatalogappregistry_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogappregistryResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogappregistryResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalogappregistry_resource_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._resource = config.resource;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application: string;
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application
  }

  // application_arn - computed: true, optional: false, required: false
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource - computed: false, optional: false, required: true
  private _resource: string;
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      resource: cdktf.stringToTerraform(this._resource),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }
}
