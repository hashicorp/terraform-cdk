import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccHealthlakeFhirDatastoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html#id DataAwsccHealthlakeFhirDatastore#id}
    */
    readonly id: string;
}
export declare class DataAwsccHealthlakeFhirDatastoreCreatedAt extends cdktf.ComplexComputedList {
    get nanos(): number;
    get seconds(): string;
}
export declare function dataAwsccHealthlakeFhirDatastoreCreatedAtToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreCreatedAt): any;
export declare class DataAwsccHealthlakeFhirDatastorePreloadDataConfig extends cdktf.ComplexComputedList {
    get preloadDataType(): string;
}
export declare function dataAwsccHealthlakeFhirDatastorePreloadDataConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastorePreloadDataConfig): any;
export declare class DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig extends cdktf.ComplexComputedList {
    get cmkType(): string;
    get kmsKeyId(): string;
}
export declare function dataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): any;
export declare class DataAwsccHealthlakeFhirDatastoreSseConfiguration extends cdktf.ComplexComputedList {
    get kmsEncryptionConfig(): any;
}
export declare function dataAwsccHealthlakeFhirDatastoreSseConfigurationToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreSseConfiguration): any;
export declare class DataAwsccHealthlakeFhirDatastoreTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccHealthlakeFhirDatastoreTagsToTerraform(struct?: DataAwsccHealthlakeFhirDatastoreTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore}
*/
export declare class DataAwsccHealthlakeFhirDatastore extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/healthlake_fhir_datastore.html awscc_healthlake_fhir_datastore} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccHealthlakeFhirDatastoreConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccHealthlakeFhirDatastoreConfig);
    get createdAt(): any;
    get datastoreArn(): string;
    get datastoreEndpoint(): string;
    get datastoreId(): string;
    get datastoreName(): string;
    get datastoreStatus(): string;
    get datastoreTypeVersion(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get preloadDataConfig(): any;
    get sseConfiguration(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
