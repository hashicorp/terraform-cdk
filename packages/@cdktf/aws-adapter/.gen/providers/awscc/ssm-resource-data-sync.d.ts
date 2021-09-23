import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_prefix SsmResourceDataSync#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_region SsmResourceDataSync#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#s3_destination SsmResourceDataSync#s3_destination}
    */
    readonly s3Destination?: SsmResourceDataSyncS3Destination;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#sync_name SsmResourceDataSync#sync_name}
    */
    readonly syncName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#sync_source SsmResourceDataSync#sync_source}
    */
    readonly syncSource?: SsmResourceDataSyncSyncSource;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#sync_type SsmResourceDataSync#sync_type}
    */
    readonly syncType?: string;
}
export interface SsmResourceDataSyncS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_prefix SsmResourceDataSync#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#bucket_region SsmResourceDataSync#bucket_region}
    */
    readonly bucketRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}
    */
    readonly syncFormat: string;
}
export declare function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3Destination): any;
export interface SsmResourceDataSyncSyncSourceAwsOrganizationsSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#organization_source_type SsmResourceDataSync#organization_source_type}
    */
    readonly organizationSourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#organizational_units SsmResourceDataSync#organizational_units}
    */
    readonly organizationalUnits?: string[];
}
export declare function ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct?: SsmResourceDataSyncSyncSourceAwsOrganizationsSource): any;
export interface SsmResourceDataSyncSyncSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#aws_organizations_source SsmResourceDataSync#aws_organizations_source}
    */
    readonly awsOrganizationsSource?: SsmResourceDataSyncSyncSourceAwsOrganizationsSource;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#include_future_regions SsmResourceDataSync#include_future_regions}
    */
    readonly includeFutureRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#source_regions SsmResourceDataSync#source_regions}
    */
    readonly sourceRegions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html#source_type SsmResourceDataSync#source_type}
    */
    readonly sourceType: string;
}
export declare function ssmResourceDataSyncSyncSourceToTerraform(struct?: SsmResourceDataSyncSyncSource): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync}
*/
export declare class SsmResourceDataSync extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _bucketRegion?;
    get bucketRegion(): string;
    set bucketRegion(value: string);
    resetBucketRegion(): void;
    get bucketRegionInput(): string | undefined;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _s3Destination?;
    get s3Destination(): SsmResourceDataSyncS3Destination;
    set s3Destination(value: SsmResourceDataSyncS3Destination);
    resetS3Destination(): void;
    get s3DestinationInput(): SsmResourceDataSyncS3Destination | undefined;
    private _syncFormat?;
    get syncFormat(): string;
    set syncFormat(value: string);
    resetSyncFormat(): void;
    get syncFormatInput(): string | undefined;
    private _syncName;
    get syncName(): string;
    set syncName(value: string);
    get syncNameInput(): string;
    private _syncSource?;
    get syncSource(): SsmResourceDataSyncSyncSource;
    set syncSource(value: SsmResourceDataSyncSyncSource);
    resetSyncSource(): void;
    get syncSourceInput(): SsmResourceDataSyncSyncSource | undefined;
    private _syncType?;
    get syncType(): string;
    set syncType(value: string);
    resetSyncType(): void;
    get syncTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
