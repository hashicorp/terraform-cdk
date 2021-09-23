// https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthlakeFhirDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-generated name for the Data Store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#datastore_name HealthlakeFhirDatastore#datastore_name}
  */
  readonly datastoreName?: string;
  /**
  * The FHIR version. Only R4 version data is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}
  */
  readonly datastoreTypeVersion: string;
  /**
  * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#preload_data_config HealthlakeFhirDatastore#preload_data_config}
  */
  readonly preloadDataConfig?: HealthlakeFhirDatastorePreloadDataConfig;
  /**
  * The server-side encryption key configuration for a customer provided encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#sse_configuration HealthlakeFhirDatastore#sse_configuration}
  */
  readonly sseConfiguration?: HealthlakeFhirDatastoreSseConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#tags HealthlakeFhirDatastore#tags}
  */
  readonly tags?: HealthlakeFhirDatastoreTags[];
}
export class HealthlakeFhirDatastoreCreatedAt extends cdktf.ComplexComputedList {

  // nanos - computed: true, optional: false, required: true
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: true
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}

export function healthlakeFhirDatastoreCreatedAtToTerraform(struct?: HealthlakeFhirDatastoreCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}

export interface HealthlakeFhirDatastorePreloadDataConfig {
  /**
  * The type of preloaded data. Only Synthea preloaded data is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#preload_data_type HealthlakeFhirDatastore#preload_data_type}
  */
  readonly preloadDataType: string;
}

export function healthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: HealthlakeFhirDatastorePreloadDataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    preload_data_type: cdktf.stringToTerraform(struct!.preloadDataType),
  }
}

export class HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {

  // cmk_type - computed: true, optional: false, required: true
  public get cmkType() {
    return this.getStringAttribute('cmk_type');
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }
}

export function healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cmk_type: cdktf.stringToTerraform(struct!.cmkType),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export interface HealthlakeFhirDatastoreSseConfiguration {
  /**
  * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}
  */
  readonly kmsEncryptionConfig: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
}

export function healthlakeFhirDatastoreSseConfigurationToTerraform(struct?: HealthlakeFhirDatastoreSseConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_encryption_config: healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct!.kmsEncryptionConfig),
  }
}

export interface HealthlakeFhirDatastoreTags {
  /**
  * The key of the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#key HealthlakeFhirDatastore#key}
  */
  readonly key: string;
  /**
  * The value of the tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#value HealthlakeFhirDatastore#value}
  */
  readonly value: string;
}

export function healthlakeFhirDatastoreTagsToTerraform(struct?: HealthlakeFhirDatastoreTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore}
*/
export class HealthlakeFhirDatastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_healthlake_fhir_datastore";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthlakeFhirDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: HealthlakeFhirDatastoreConfig) {
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
    this._datastoreName = config.datastoreName;
    this._datastoreTypeVersion = config.datastoreTypeVersion;
    this._preloadDataConfig = config.preloadDataConfig;
    this._sseConfiguration = config.sseConfiguration;
    this._tags = config.tags;
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

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string;
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName
  }

  // datastore_status - computed: true, optional: false, required: false
  public get datastoreStatus() {
    return this.getStringAttribute('datastore_status');
  }

  // datastore_type_version - computed: false, optional: false, required: true
  private _datastoreTypeVersion: string;
  public get datastoreTypeVersion() {
    return this.getStringAttribute('datastore_type_version');
  }
  public set datastoreTypeVersion(value: string) {
    this._datastoreTypeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreTypeVersionInput() {
    return this._datastoreTypeVersion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // preload_data_config - computed: true, optional: true, required: false
  private _preloadDataConfig?: HealthlakeFhirDatastorePreloadDataConfig;
  public get preloadDataConfig() {
    return this.interpolationForAttribute('preload_data_config') as any;
  }
  public set preloadDataConfig(value: HealthlakeFhirDatastorePreloadDataConfig) {
    this._preloadDataConfig = value;
  }
  public resetPreloadDataConfig() {
    this._preloadDataConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadDataConfigInput() {
    return this._preloadDataConfig
  }

  // sse_configuration - computed: true, optional: true, required: false
  private _sseConfiguration?: HealthlakeFhirDatastoreSseConfiguration;
  public get sseConfiguration() {
    return this.interpolationForAttribute('sse_configuration') as any;
  }
  public set sseConfiguration(value: HealthlakeFhirDatastoreSseConfiguration) {
    this._sseConfiguration = value;
  }
  public resetSseConfiguration() {
    this._sseConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseConfigurationInput() {
    return this._sseConfiguration
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: HealthlakeFhirDatastoreTags[];
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: HealthlakeFhirDatastoreTags[] ) {
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
      datastore_name: cdktf.stringToTerraform(this._datastoreName),
      datastore_type_version: cdktf.stringToTerraform(this._datastoreTypeVersion),
      preload_data_config: healthlakeFhirDatastorePreloadDataConfigToTerraform(this._preloadDataConfig),
      sse_configuration: healthlakeFhirDatastoreSseConfigurationToTerraform(this._sseConfiguration),
      tags: cdktf.listMapper(healthlakeFhirDatastoreTagsToTerraform)(this._tags),
    };
  }
}
