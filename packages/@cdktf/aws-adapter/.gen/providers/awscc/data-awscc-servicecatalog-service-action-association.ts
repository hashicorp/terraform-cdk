// https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccServicecatalogServiceActionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html#id DataAwsccServicecatalogServiceActionAssociation#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association}
*/
export class DataAwsccServicecatalogServiceActionAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_service_action_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogServiceActionAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogServiceActionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_service_action_association',
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

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // provisioning_artifact_id - computed: true, optional: false, required: false
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }

  // service_action_id - computed: true, optional: false, required: false
  public get serviceActionId() {
    return this.getStringAttribute('service_action_id');
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
