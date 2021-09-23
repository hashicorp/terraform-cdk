// https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccHealthlakeFhirDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html#id DataAwsccHealthlakeFhirDatastore#id}
  */
  readonly id: string;
}
export class DataAwsccHealthlakeFhirDatastoreCreatedAt extends cdktf.ComplexComputedList {

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}

export function dataAwsccHealthlakeFhirDatastoreCreatedAtToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export class DataAwsccHealthlakeFhirDatastorePreloadDataConfig extends cdktf.ComplexComputedList {

  // preload_data_type - computed: true, optional: false, required: false
  public get preloadDataType() {
    return this.getStringAttribute('preload_data_type');
  }
}

export function dataAwsccHealthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastorePreloadDataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preload_data_type: cdktf.stringToTerraform(struct!.preloadDataType),
  }
}

export class DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // cmk_type - computed: true, optional: false, required: false
  public get cmkType() {
    return this.getStringAttribute('cmk_type');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export function dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cmk_type: cdktf.stringToTerraform(struct!.cmkType),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class DataAwsccHealthlakeFhirDatastoreSseConfiguration extends cdktf.ComplexComputedList {

  // kms_encryption_config - computed: true, optional: false, required: false
  public get kmsEncryptionConfig() {
    return this.interpolationForAttribute('kms_encryption_config') as any;
  }
}

export function dataAwsccHealthlakeFhirDatastoreSseConfigurationToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
  }
}

export class DataAwsccHealthlakeFhirDatastoreTags extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export function dataAwsccHealthlakeFhirDatastoreTagsToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore}
*/
export class DataAwsccHealthlakeFhirDatastore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_healthlake_fhir_datastore";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccHealthlakeFhirDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccHealthlakeFhirDatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_healthlake_fhir_datastore',
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.interpolationForAttribute('created_at') as any;
  }

  // datastore_arn - computed: true, optional: false, required: false
  public get datastoreArn() {
    return this.getStringAttribute('datastore_arn');
  }

  // datastore_endpoint - computed: true, optional: false, required: false
  public get datastoreEndpoint() {
    return this.getStringAttribute('datastore_endpoint');
  }

  // datastore_id - computed: true, optional: false, required: false
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }

  // datastore_name - computed: true, optional: false, required: false
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }

  // datastore_status - computed: true, optional: false, required: false
  public get datastoreStatus() {
    return this.getStringAttribute('datastore_status');
  }

  // datastore_type_version - computed: true, optional: false, required: false
  public get datastoreTypeVersion() {
    return this.getStringAttribute('datastore_type_version');
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

  // preload_data_config - computed: true, optional: false, required: false
  public get preloadDataConfig() {
    return this.interpolationForAttribute('preload_data_config') as any;
  }

  // sse_configuration - computed: true, optional: false, required: false
  public get sseConfiguration() {
    return this.interpolationForAttribute('sse_configuration') as any;
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
