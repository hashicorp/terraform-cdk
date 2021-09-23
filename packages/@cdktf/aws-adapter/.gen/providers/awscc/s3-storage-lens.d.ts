import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3StorageLensConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the details of Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#storage_lens_configuration S3StorageLens#storage_lens_configuration}
    */
    readonly storageLensConfiguration: S3StorageLensStorageLensConfiguration;
    /**
    * A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#tags S3StorageLens#tags}
    */
    readonly tags?: S3StorageLensTags[];
}
export interface S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics {
    /**
    * Specifies whether activity metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#is_enabled S3StorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics): any;
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
    /**
    * Specifies whether activity metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#is_enabled S3StorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any;
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
    /**
    * Delimiter to divide S3 key into hierarchy of prefixes.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#delimiter S3StorageLens#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#max_depth S3StorageLens#max_depth}
    */
    readonly maxDepth?: number;
    /**
    * The minimum storage bytes threshold for the prefixes to be included in the analysis.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}
    */
    readonly minStorageBytesPercentage?: number;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any;
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
    /**
    * Specifies whether prefix-level storage metrics are enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#is_enabled S3StorageLens#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Selection criteria for prefix-level metrics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#selection_criteria S3StorageLens#selection_criteria}
    */
    readonly selectionCriteria?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any;
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#storage_metrics S3StorageLens#storage_metrics}
    */
    readonly storageMetrics: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any;
export interface S3StorageLensStorageLensConfigurationAccountLevelBucketLevel {
    /**
    * Enables activity metrics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#activity_metrics S3StorageLens#activity_metrics}
    */
    readonly activityMetrics?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
    /**
    * Prefix-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#prefix_level S3StorageLens#prefix_level}
    */
    readonly prefixLevel?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel): any;
export interface S3StorageLensStorageLensConfigurationAccountLevel {
    /**
    * Enables activity metrics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#activity_metrics S3StorageLens#activity_metrics}
    */
    readonly activityMetrics?: S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics;
    /**
    * Bucket-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#bucket_level S3StorageLens#bucket_level}
    */
    readonly bucketLevel: S3StorageLensStorageLensConfigurationAccountLevelBucketLevel;
}
export declare function s3StorageLensStorageLensConfigurationAccountLevelToTerraform(struct?: S3StorageLensStorageLensConfigurationAccountLevel): any;
export interface S3StorageLensStorageLensConfigurationAwsOrg {
    /**
    * The Amazon Resource Name (ARN) of the specified resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#arn S3StorageLens#arn}
    */
    readonly arn: string;
}
export declare function s3StorageLensStorageLensConfigurationAwsOrgToTerraform(struct?: S3StorageLensStorageLensConfigurationAwsOrg): any;
export interface S3StorageLensStorageLensConfigurationDataExportS3BucketDestination {
    /**
    * The AWS account ID that owns the destination S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#account_id S3StorageLens#account_id}
    */
    readonly accountId: string;
    /**
    * The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#arn S3StorageLens#arn}
    */
    readonly arn: string;
    /**
    * Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#encryption S3StorageLens#encryption}
    */
    readonly encryption?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#format S3StorageLens#format}
    */
    readonly format: string;
    /**
    * The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#output_schema_version S3StorageLens#output_schema_version}
    */
    readonly outputSchemaVersion: string;
    /**
    * The prefix to use for Amazon S3 Storage Lens export.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#prefix S3StorageLens#prefix}
    */
    readonly prefix?: string;
}
export declare function s3StorageLensStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination): any;
export interface S3StorageLensStorageLensConfigurationDataExport {
    /**
    * S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#s3_bucket_destination S3StorageLens#s3_bucket_destination}
    */
    readonly s3BucketDestination: S3StorageLensStorageLensConfigurationDataExportS3BucketDestination;
}
export declare function s3StorageLensStorageLensConfigurationDataExportToTerraform(struct?: S3StorageLensStorageLensConfigurationDataExport): any;
export interface S3StorageLensStorageLensConfigurationExclude {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#buckets S3StorageLens#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#regions S3StorageLens#regions}
    */
    readonly regions?: string[];
}
export declare function s3StorageLensStorageLensConfigurationExcludeToTerraform(struct?: S3StorageLensStorageLensConfigurationExclude): any;
export interface S3StorageLensStorageLensConfigurationInclude {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#buckets S3StorageLens#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#regions S3StorageLens#regions}
    */
    readonly regions?: string[];
}
export declare function s3StorageLensStorageLensConfigurationIncludeToTerraform(struct?: S3StorageLensStorageLensConfigurationInclude): any;
export interface S3StorageLensStorageLensConfiguration {
    /**
    * Account-level metrics configurations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#account_level S3StorageLens#account_level}
    */
    readonly accountLevel: S3StorageLensStorageLensConfigurationAccountLevel;
    /**
    * The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#aws_org S3StorageLens#aws_org}
    */
    readonly awsOrg?: S3StorageLensStorageLensConfigurationAwsOrg;
    /**
    * Specifies how Amazon S3 Storage Lens metrics should be exported.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#data_export S3StorageLens#data_export}
    */
    readonly dataExport?: S3StorageLensStorageLensConfigurationDataExport;
    /**
    * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#exclude S3StorageLens#exclude}
    */
    readonly exclude?: S3StorageLensStorageLensConfigurationExclude;
    /**
    * The ID that identifies the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#id S3StorageLens#id}
    */
    readonly id: string;
    /**
    * S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#include S3StorageLens#include}
    */
    readonly include?: S3StorageLensStorageLensConfigurationInclude;
    /**
    * Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#is_enabled S3StorageLens#is_enabled}
    */
    readonly isEnabled: boolean | cdktf.IResolvable;
    /**
    * The ARN for the Amazon S3 Storage Lens configuration.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#storage_lens_arn S3StorageLens#storage_lens_arn}
    */
    readonly storageLensArn: string;
}
export declare function s3StorageLensStorageLensConfigurationToTerraform(struct?: S3StorageLensStorageLensConfiguration): any;
export interface S3StorageLensTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#key S3StorageLens#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html#value S3StorageLens#value}
    */
    readonly value: string;
}
export declare function s3StorageLensTagsToTerraform(struct?: S3StorageLensTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html awscc_s3_storage_lens}
*/
export declare class S3StorageLens extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/s3_storage_lens.html awscc_s3_storage_lens} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3StorageLensConfig
    */
    constructor(scope: Construct, id: string, config: S3StorageLensConfig);
    get id(): string;
    private _storageLensConfiguration;
    get storageLensConfiguration(): S3StorageLensStorageLensConfiguration;
    set storageLensConfiguration(value: S3StorageLensStorageLensConfiguration);
    get storageLensConfigurationInput(): S3StorageLensStorageLensConfiguration;
    private _tags?;
    get tags(): S3StorageLensTags[];
    set tags(value: S3StorageLensTags[]);
    resetTags(): void;
    get tagsInput(): S3StorageLensTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
