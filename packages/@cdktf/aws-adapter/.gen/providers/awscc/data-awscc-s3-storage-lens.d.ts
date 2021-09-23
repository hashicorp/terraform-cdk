import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccS3StorageLensConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html#id DataAwsccS3StorageLens#id}
    */
    readonly id: string;
}
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics extends cdktf.ComplexComputedList {
    get isEnabled(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics extends cdktf.ComplexComputedList {
    get isEnabled(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria extends cdktf.ComplexComputedList {
    get delimiter(): string;
    get maxDepth(): number;
    get minStorageBytesPercentage(): number;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics extends cdktf.ComplexComputedList {
    get isEnabled(): any;
    get selectionCriteria(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel extends cdktf.ComplexComputedList {
    get storageMetrics(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel extends cdktf.ComplexComputedList {
    get activityMetrics(): any;
    get prefixLevel(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAccountLevel extends cdktf.ComplexComputedList {
    get activityMetrics(): any;
    get bucketLevel(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAccountLevel): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationAwsOrg extends cdktf.ComplexComputedList {
    get arn(): string;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationAwsOrg): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination extends cdktf.ComplexComputedList {
    get accountId(): string;
    get arn(): string;
    get encryption(): any;
    get format(): string;
    get outputSchemaVersion(): string;
    get prefix(): string;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationDataExport extends cdktf.ComplexComputedList {
    get s3BucketDestination(): any;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationDataExportToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationDataExport): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationExclude extends cdktf.ComplexComputedList {
    get buckets(): string[];
    get regions(): string[];
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationExcludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationExclude): any;
export declare class DataAwsccS3StorageLensStorageLensConfigurationInclude extends cdktf.ComplexComputedList {
    get buckets(): string[];
    get regions(): string[];
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationIncludeToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfigurationInclude): any;
export declare class DataAwsccS3StorageLensStorageLensConfiguration extends cdktf.ComplexComputedList {
    get accountLevel(): any;
    get awsOrg(): any;
    get dataExport(): any;
    get exclude(): any;
    get id(): string;
    get include(): any;
    get isEnabled(): any;
    get storageLensArn(): string;
}
export declare function dataAwsccS3StorageLensStorageLensConfigurationToTerraform(struct?: DataAwsccS3StorageLensStorageLensConfiguration): any;
export declare class DataAwsccS3StorageLensTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccS3StorageLensTagsToTerraform(struct?: DataAwsccS3StorageLensTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens}
*/
export declare class DataAwsccS3StorageLens extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/s3_storage_lens.html awscc_s3_storage_lens} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccS3StorageLensConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccS3StorageLensConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get storageLensConfiguration(): any;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
