// https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccServicecatalogCloudformationProvisionedProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html#id DataAwsccServicecatalogCloudformationProvisionedProduct#id}
  */
  readonly id: string;
}
export class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningParametersToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences extends cdktf.ComplexComputedList {

  // stack_set_accounts - computed: true, optional: false, required: false
  public get stackSetAccounts() {
    return this.getListAttribute('stack_set_accounts');
  }

  // stack_set_failure_tolerance_count - computed: true, optional: false, required: false
  public get stackSetFailureToleranceCount() {
    return this.getNumberAttribute('stack_set_failure_tolerance_count');
  }

  // stack_set_failure_tolerance_percentage - computed: true, optional: false, required: false
  public get stackSetFailureTolerancePercentage() {
    return this.getNumberAttribute('stack_set_failure_tolerance_percentage');
  }

  // stack_set_max_concurrency_count - computed: true, optional: false, required: false
  public get stackSetMaxConcurrencyCount() {
    return this.getNumberAttribute('stack_set_max_concurrency_count');
  }

  // stack_set_max_concurrency_percentage - computed: true, optional: false, required: false
  public get stackSetMaxConcurrencyPercentage() {
    return this.getNumberAttribute('stack_set_max_concurrency_percentage');
  }

  // stack_set_operation_type - computed: true, optional: false, required: false
  public get stackSetOperationType() {
    return this.getStringAttribute('stack_set_operation_type');
  }

  // stack_set_regions - computed: true, optional: false, required: false
  public get stackSetRegions() {
    return this.getListAttribute('stack_set_regions');
  }
}

export function dataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferencesToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductProvisioningPreferences): any {
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

export class DataAwsccServicecatalogCloudformationProvisionedProductTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccServicecatalogCloudformationProvisionedProductTagsToTerraform(struct?: DataAwsccServicecatalogCloudformationProvisionedProductTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product}
*/
export class DataAwsccServicecatalogCloudformationProvisionedProduct extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_servicecatalog_cloudformation_provisioned_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/servicecatalog_cloudformation_provisioned_product.html awscc_servicecatalog_cloudformation_provisioned_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccServicecatalogCloudformationProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccServicecatalogCloudformationProvisionedProductConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: true, optional: false, required: false
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }

  // cloudformation_stack_arn - computed: true, optional: false, required: false
  public get cloudformationStackArn() {
    return this.getStringAttribute('cloudformation_stack_arn');
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

  // notification_arns - computed: true, optional: false, required: false
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }

  // outputs - computed: true, optional: false, required: false
  public outputs(key: string): string {
    return new cdktf.StringMap(this, 'outputs').lookup(key);
  }

  // path_id - computed: true, optional: false, required: false
  public get pathId() {
    return this.getStringAttribute('path_id');
  }

  // path_name - computed: true, optional: false, required: false
  public get pathName() {
    return this.getStringAttribute('path_name');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // provisioned_product_id - computed: true, optional: false, required: false
  public get provisionedProductId() {
    return this.getStringAttribute('provisioned_product_id');
  }

  // provisioned_product_name - computed: true, optional: false, required: false
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }

  // provisioning_artifact_id - computed: true, optional: false, required: false
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }

  // provisioning_artifact_name - computed: true, optional: false, required: false
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }

  // provisioning_parameters - computed: true, optional: false, required: false
  public get provisioningParameters() {
    return this.interpolationForAttribute('provisioning_parameters') as any;
  }

  // provisioning_preferences - computed: true, optional: false, required: false
  public get provisioningPreferences() {
    return this.interpolationForAttribute('provisioning_preferences') as any;
  }

  // record_id - computed: true, optional: false, required: false
  public get recordId() {
    return this.getStringAttribute('record_id');
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
