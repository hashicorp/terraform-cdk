// https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogCloudformationProvisionedProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#path_id ServicecatalogCloudformationProvisionedProduct#path_id}
  */
  readonly pathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#path_name ServicecatalogCloudformationProvisionedProduct#path_name}
  */
  readonly pathName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#product_id ServicecatalogCloudformationProvisionedProduct#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#product_name ServicecatalogCloudformationProvisionedProduct#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}
  */
  readonly provisionedProductName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}
  */
  readonly provisioningArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}
  */
  readonly provisioningArtifactName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}
  */
  readonly provisioningParameters?: ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}
  */
  readonly provisioningPreferences?: ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#tags ServicecatalogCloudformationProvisionedProduct#tags}
  */
  readonly tags?: ServicecatalogCloudformationProvisionedProductTags[];
}
export interface ServicecatalogCloudformationProvisionedProductProvisioningParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#key ServicecatalogCloudformationProvisionedProduct#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#value ServicecatalogCloudformationProvisionedProduct#value}
  */
  readonly value: string;
}

export function servicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogCloudformationProvisionedProductProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServicecatalogCloudformationProvisionedProductProvisioningPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}
  */
  readonly stackSetAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}
  */
  readonly stackSetFailureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}
  */
  readonly stackSetFailureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}
  */
  readonly stackSetMaxConcurrencyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}
  */
  readonly stackSetMaxConcurrencyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}
  */
  readonly stackSetOperationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}
  */
  readonly stackSetRegions?: string[];
}

export function servicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(struct?: ServicecatalogCloudformationProvisionedProductProvisioningPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    stack_set_accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.stackSetAccounts),
    stack_set_failure_tolerance_count: cdktf.numberToTerraform(struct!.stackSetFailureToleranceCount),
    stack_set_failure_tolerance_percentage: cdktf.numberToTerraform(struct!.stackSetFailureTolerancePercentage),
    stack_set_max_concurrency_count: cdktf.numberToTerraform(struct!.stackSetMaxConcurrencyCount),
    stack_set_max_concurrency_percentage: cdktf.numberToTerraform(struct!.stackSetMaxConcurrencyPercentage),
    stack_set_operation_type: cdktf.stringToTerraform(struct!.stackSetOperationType),
    stack_set_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.stackSetRegions),
  }
}

export interface ServicecatalogCloudformationProvisionedProductTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#key ServicecatalogCloudformationProvisionedProduct#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html#value ServicecatalogCloudformationProvisionedProduct#value}
  */
  readonly value: string;
}

export function servicecatalogCloudformationProvisionedProductTagsToTerraform(struct?: ServicecatalogCloudformationProvisionedProductTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product}
*/
export class ServicecatalogCloudformationProvisionedProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_cloudformation_provisioned_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogCloudformationProvisionedProductConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogCloudformationProvisionedProductConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_servicecatalog_cloudformation_provisioned_product',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._notificationArns = config.notificationArns;
    this._pathId = config.pathId;
    this._pathName = config.pathName;
    this._productId = config.productId;
    this._productName = config.productName;
    this._provisionedProductName = config.provisionedProductName;
    this._provisioningArtifactId = config.provisioningArtifactId;
    this._provisioningArtifactName = config.provisioningArtifactName;
    this._provisioningParameters = config.provisioningParameters;
    this._provisioningPreferences = config.provisioningPreferences;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string;
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string ) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage
  }

  // cloudformation_stack_arn - computed: true, optional: false, required: false
  public get cloudformationStackArn() {
    return this.getStringAttribute('cloudformation_stack_arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_arns - computed: true, optional: true, required: false
  private _notificationArns?: string[];
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[]) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // path_id - computed: false, optional: true, required: false
  private _pathId?: string;
  public get pathId() {
    return this.getStringAttribute('path_id');
  }
  public set pathId(value: string ) {
    this._pathId = value;
  }
  public resetPathId() {
    this._pathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIdInput() {
    return this._pathId
  }

  // path_name - computed: false, optional: true, required: false
  private _pathName?: string;
  public get pathName() {
    return this.getStringAttribute('path_name');
  }
  public set pathName(value: string ) {
    this._pathName = value;
  }
  public resetPathName() {
    this._pathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathNameInput() {
    return this._pathName
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string;
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string ) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string;
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string ) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName
  }

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_name - computed: true, optional: true, required: false
  private _provisionedProductName?: string;
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }
  public set provisionedProductName(value: string) {
    this._provisionedProductName = value;
  }
  public resetProvisionedProductName() {
    this._provisionedProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductNameInput() {
    return this._provisionedProductName
  }

  // provisioning_artifact_id - computed: false, optional: true, required: false
  private _provisioningArtifactId?: string;
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string ) {
    this._provisioningArtifactId = value;
  }
  public resetProvisioningArtifactId() {
    this._provisioningArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId
  }

  // provisioning_artifact_name - computed: false, optional: true, required: false
  private _provisioningArtifactName?: string;
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }
  public set provisioningArtifactName(value: string ) {
    this._provisioningArtifactName = value;
  }
  public resetProvisioningArtifactName() {
    this._provisioningArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactNameInput() {
    return this._provisioningArtifactName
  }

  // provisioning_parameters - computed: false, optional: true, required: false
  private _provisioningParameters?: ServicecatalogCloudformationProvisionedProductProvisioningParameters[];
  public get provisioningParameters() {
    return this.interpolationForAttribute('provisioning_parameters') as any;
  }
  public set provisioningParameters(value: ServicecatalogCloudformationProvisionedProductProvisioningParameters[] ) {
    this._provisioningParameters = value;
  }
  public resetProvisioningParameters() {
    this._provisioningParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParametersInput() {
    return this._provisioningParameters
  }

  // provisioning_preferences - computed: false, optional: true, required: false
  private _provisioningPreferences?: ServicecatalogCloudformationProvisionedProductProvisioningPreferences;
  public get provisioningPreferences() {
    return this.interpolationForAttribute('provisioning_preferences') as any;
  }
  public set provisioningPreferences(value: ServicecatalogCloudformationProvisionedProductProvisioningPreferences ) {
    this._provisioningPreferences = value;
  }
  public resetProvisioningPreferences() {
    this._provisioningPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningPreferencesInput() {
    return this._provisioningPreferences
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: ServicecatalogCloudformationProvisionedProductTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: ServicecatalogCloudformationProvisionedProductTags[] ) {
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
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
      path_id: cdktf.stringToTerraform(this._pathId),
      path_name: cdktf.stringToTerraform(this._pathName),
      product_id: cdktf.stringToTerraform(this._productId),
      product_name: cdktf.stringToTerraform(this._productName),
      provisioned_product_name: cdktf.stringToTerraform(this._provisionedProductName),
      provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
      provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
      provisioning_parameters: cdktf.listMapper(servicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
      provisioning_preferences: servicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(this._provisioningPreferences),
      tags: cdktf.listMapper(servicecatalogCloudformationProvisionedProductTagsToTerraform)(this._tags),
    };
  }
}
