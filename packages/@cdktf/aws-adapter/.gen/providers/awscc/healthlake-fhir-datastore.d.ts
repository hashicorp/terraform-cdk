import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare class HealthlakeFhirDatastoreCreatedAt extends cdktf.ComplexComputedList {
    get nanos(): number;
    get seconds(): string;
}
export declare function healthlakeFhirDatastoreCreatedAtToTerraform(struct?: HealthlakeFhirDatastoreCreatedAt): any;
export interface HealthlakeFhirDatastorePreloadDataConfig {
    /**
    * The type of preloaded data. Only Synthea preloaded data is supported.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#preload_data_type HealthlakeFhirDatastore#preload_data_type}
    */
    readonly preloadDataType: string;
}
export declare function healthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: HealthlakeFhirDatastorePreloadDataConfig): any;
export declare class HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get cmkType(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export declare function healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any;
export interface HealthlakeFhirDatastoreSseConfiguration {
    /**
    * The customer-managed-key (CMK) used when creating a Data Store. If a customer owned key is not specified, an AWS owned key will be used for encryption.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}
    */
    readonly kmsEncryptionConfig: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
}
export declare function healthlakeFhirDatastoreSseConfigurationToTerraform(struct?: HealthlakeFhirDatastoreSseConfiguration): any;
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
export declare function healthlakeFhirDatastoreTagsToTerraform(struct?: HealthlakeFhirDatastoreTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore}
*/
export declare class HealthlakeFhirDatastore extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options HealthlakeFhirDatastoreConfig
    */
    constructor(scope: Construct, id: string, config: HealthlakeFhirDatastoreConfig);
    get createdAt(): any;
    get datastoreArn(): string;
    get datastoreEndpoint(): string;
    get datastoreId(): string;
    private _datastoreName?;
    get datastoreName(): string;
    set datastoreName(value: string);
    resetDatastoreName(): void;
    get datastoreNameInput(): string | undefined;
    get datastoreStatus(): string;
    private _datastoreTypeVersion;
    get datastoreTypeVersion(): string;
    set datastoreTypeVersion(value: string);
    get datastoreTypeVersionInput(): string;
    get id(): string;
    private _preloadDataConfig?;
    get preloadDataConfig(): HealthlakeFhirDatastorePreloadDataConfig;
    set preloadDataConfig(value: HealthlakeFhirDatastorePreloadDataConfig);
    resetPreloadDataConfig(): void;
    get preloadDataConfigInput(): HealthlakeFhirDatastorePreloadDataConfig | undefined;
    private _sseConfiguration?;
    get sseConfiguration(): HealthlakeFhirDatastoreSseConfiguration;
    set sseConfiguration(value: HealthlakeFhirDatastoreSseConfiguration);
    resetSseConfiguration(): void;
    get sseConfigurationInput(): HealthlakeFhirDatastoreSseConfiguration | undefined;
    private _tags?;
    get tags(): HealthlakeFhirDatastoreTags[];
    set tags(value: HealthlakeFhirDatastoreTags[]);
    resetTags(): void;
    get tagsInput(): HealthlakeFhirDatastoreTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
