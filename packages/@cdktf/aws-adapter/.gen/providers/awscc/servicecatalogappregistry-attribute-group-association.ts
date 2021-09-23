// https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name or the Id of the Application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html#application ServicecatalogappregistryAttributeGroupAssociation#application}
  */
  readonly application: string;
  /**
  * The name or the Id of the AttributeGroup.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html#attribute_group ServicecatalogappregistryAttributeGroupAssociation#attribute_group}
  */
  readonly attributeGroup: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association}
*/
export class ServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalogappregistry_attribute_group_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalogappregistry_attribute_group_association.html awscc_servicecatalogappregistry_attribute_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogappregistryAttributeGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalogappregistry_attribute_group_association',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._application = config.application;
    this._attributeGroup = config.attributeGroup;
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

  // attribute_group - computed: false, optional: false, required: true
  private _attributeGroup: string;
  public get attributeGroup() {
    return this.getStringAttribute('attribute_group');
  }
  public set attributeGroup(value: string) {
    this._attributeGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeGroupInput() {
    return this._attributeGroup
  }

  // attribute_group_arn - computed: true, optional: false, required: false
  public get attributeGroupArn() {
    return this.getStringAttribute('attribute_group_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      attribute_group: cdktf.stringToTerraform(this._attributeGroup),
    };
  }
}
