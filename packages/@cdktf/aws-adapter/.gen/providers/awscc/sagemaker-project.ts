// https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#project_description SagemakerProject#project_description}
  */
  readonly projectDescription?: string;
  /**
  * The name of the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#project_name SagemakerProject#project_name}
  */
  readonly projectName: string;
  /**
  * Input ServiceCatalog Provisioning Details
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}
  */
  readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
  /**
  * An array of key-value pairs to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#tags SagemakerProject#tags}
  */
  readonly tags?: SagemakerProjectTags[];
}
export class SagemakerProjectServiceCatalogProvisionedProductDetails extends cdktf.ComplexComputedList {

  // provisioned_product_id - computed: true, optional: true, required: false
  private _provisionedProductId?: string;
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }
  public set provisionedProductId(value: string) {
    this._provisionedProductId = value;
  }
  public resetProvisionedProductId() {
    this._provisionedProductId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductIdInput() {
    return this._provisionedProductId
  }

  // provisioned_product_status_message - computed: true, optional: true, required: false
  private _provisionedProductStatusMessage?: string;
  public get provisionedProductStatusMessage() {
    return this.getStringAttribute('provisioned_product_status_message');
  }
  public set provisionedProductStatusMessage(value: string) {
    this._provisionedProductStatusMessage = value;
  }
  public resetProvisionedProductStatusMessage() {
    this._provisionedProductStatusMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductStatusMessageInput() {
    return this._provisionedProductStatusMessage
  }
}

export function sagemakerProjectServiceCatalogProvisionedProductDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisionedProductDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    provisioned_product_id: cdktf.stringToTerraform(struct!.provisionedProductId),
    provisioned_product_status_message: cdktf.stringToTerraform(struct!.provisionedProductStatusMessage),
  }
}

export interface SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters {
  /**
  * The parameter key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#key SagemakerProject#key}
  */
  readonly key: string;
  /**
  * The parameter value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#value SagemakerProject#value}
  */
  readonly value: string;
}

export function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SagemakerProjectServiceCatalogProvisioningDetails {
  /**
  * The path identifier of the product.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#path_id SagemakerProject#path_id}
  */
  readonly pathId?: string;
  /**
  * Service Catalog product identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#product_id SagemakerProject#product_id}
  */
  readonly productId: string;
  /**
  * The identifier of the provisioning artifact (also known as a version).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}
  */
  readonly provisioningArtifactId: string;
  /**
  * Parameters specified by the administrator that are required for provisioning the product.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#provisioning_parameters SagemakerProject#provisioning_parameters}
  */
  readonly provisioningParameters?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters[];
}

export function sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path_id: cdktf.stringToTerraform(struct!.pathId),
    product_id: cdktf.stringToTerraform(struct!.productId),
    provisioning_artifact_id: cdktf.stringToTerraform(struct!.provisioningArtifactId),
    provisioning_parameters: cdktf.listMapper(sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersToTerraform)(struct!.provisioningParameters),
  }
}

export interface SagemakerProjectTags {
  /**
  * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#key SagemakerProject#key}
  */
  readonly key: string;
  /**
  * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html#value SagemakerProject#value}
  */
  readonly value: string;
}

export function sagemakerProjectTagsToTerraform(struct?: SagemakerProjectTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project}
*/
export class SagemakerProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_sagemaker_project";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/sagemaker_project.html awscc_sagemaker_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerProjectConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerProjectConfig) {
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
    this._projectDescription = config.projectDescription;
    this._projectName = config.projectName;
    this._serviceCatalogProvisioningDetails = config.serviceCatalogProvisioningDetails;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_arn - computed: true, optional: false, required: false
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }

  // project_description - computed: true, optional: true, required: false
  private _projectDescription?: string;
  public get projectDescription() {
    return this.getStringAttribute('project_description');
  }
  public set projectDescription(value: string) {
    this._projectDescription = value;
  }
  public resetProjectDescription() {
    this._projectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectDescriptionInput() {
    return this._projectDescription
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName: string;
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName
  }

  // project_status - computed: true, optional: false, required: false
  public get projectStatus() {
    return this.getStringAttribute('project_status');
  }

  // service_catalog_provisioned_product_details - computed: true, optional: false, required: false
  public get serviceCatalogProvisionedProductDetails() {
    return this.interpolationForAttribute('service_catalog_provisioned_product_details') as any;
  }

  // service_catalog_provisioning_details - computed: false, optional: false, required: true
  private _serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
  public get serviceCatalogProvisioningDetails() {
    return this.interpolationForAttribute('service_catalog_provisioning_details') as any;
  }
  public set serviceCatalogProvisioningDetails(value: SagemakerProjectServiceCatalogProvisioningDetails) {
    this._serviceCatalogProvisioningDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogProvisioningDetailsInput() {
    return this._serviceCatalogProvisioningDetails
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: SagemakerProjectTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: SagemakerProjectTags[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_description: cdktf.stringToTerraform(this._projectDescription),
      project_name: cdktf.stringToTerraform(this._projectName),
      service_catalog_provisioning_details: sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(this._serviceCatalogProvisioningDetails),
      tags: cdktf.listMapper(sagemakerProjectTagsToTerraform)(this._tags),
    };
  }
}
