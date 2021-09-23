// https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogServiceActionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#product_id ServicecatalogServiceActionAssociation#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#provisioning_artifact_id ServicecatalogServiceActionAssociation#provisioning_artifact_id}
  */
  readonly provisioningArtifactId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html#service_action_id ServicecatalogServiceActionAssociation#service_action_id}
  */
  readonly serviceActionId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association}
*/
export class ServicecatalogServiceActionAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_service_action_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_service_action_association.html awscc_servicecatalog_service_action_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogServiceActionAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogServiceActionAssociationConfig) {
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
    this._productId = config.productId;
    this._provisioningArtifactId = config.provisioningArtifactId;
    this._serviceActionId = config.serviceActionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // provisioning_artifact_id - computed: false, optional: false, required: true
  private _provisioningArtifactId: string;
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string) {
    this._provisioningArtifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId
  }

  // service_action_id - computed: false, optional: false, required: true
  private _serviceActionId: string;
  public get serviceActionId() {
    return this.getStringAttribute('service_action_id');
  }
  public set serviceActionId(value: string) {
    this._serviceActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceActionIdInput() {
    return this._serviceActionId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      product_id: cdktf.stringToTerraform(this._productId),
      provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
      service_action_id: cdktf.stringToTerraform(this._serviceActionId),
    };
  }
}
