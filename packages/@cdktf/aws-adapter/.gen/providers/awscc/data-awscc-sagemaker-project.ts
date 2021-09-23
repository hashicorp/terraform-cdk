// https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSagemakerProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html#id DataAwsccSagemakerProject#id}
  */
  readonly id: string;
}
export class DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails extends cdktf.ComplexComputedList {

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_status_message - computed: true, optional: false, required: false
  public get provisionedProductStatusMessage() {
    return this.getStringAttribute('provisioned_product_status_message');
  }
}

export function dataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    provisioned_product_id: cdktf.stringToTerraform(struct!.provisionedProductId),
    provisioned_product_status_message: cdktf.stringToTerraform(struct!.provisionedProductStatusMessage),
  }
}

export class DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccSagemakerProjectServiceCatalogProvisioningDetails extends cdktf.ComplexComputedList {

  // path_id - computed: true, optional: false, required: false
  public get pathId() {
    return this.getStringAttribute('path_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // provisioning_artifact_id - computed: true, optional: false, required: false
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }

  // provisioning_parameters - computed: true, optional: false, required: false
  public get provisioningParameters() {
    return this.interpolationForAttribute('provisioning_parameters') as any;
  }
}

export function dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: DataAwsccSagemakerProjectServiceCatalogProvisioningDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path_id: cdktf.stringToTerraform(struct!.pathId),
    product_id: cdktf.stringToTerraform(struct!.productId),
    provisioning_artifact_id: cdktf.stringToTerraform(struct!.provisioningArtifactId),
    provisioning_parameters: cdktf.listMapper(dataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform)(struct!.provisioningParameters),
  }
}

export class DataAwsccSagemakerProjectTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccSagemakerProjectTagsToTerraform(struct?: DataAwsccSagemakerProjectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html awscc_sagemaker_project}
*/
export class DataAwsccSagemakerProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sagemaker_project.html awscc_sagemaker_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSagemakerProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSagemakerProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_sagemaker_project',
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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // project_arn - computed: true, optional: false, required: false
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }

  // project_description - computed: true, optional: false, required: false
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // project_status - computed: true, optional: false, required: false
  public get projectStatus() {
    return this.getStringAttribute('project_status');
  }

  // service_catalog_provisioned_product_details - computed: true, optional: false, required: false
  public get serviceCatalogProvisionedProductDetails() {
    return this.interpolationForAttribute('service_catalog_provisioned_product_details') as any;
  }

  // service_catalog_provisioning_details - computed: true, optional: false, required: false
  public get serviceCatalogProvisioningDetails() {
    return this.interpolationForAttribute('service_catalog_provisioning_details') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
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
