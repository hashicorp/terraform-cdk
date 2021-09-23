// https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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

export function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3Destination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    bucket_region: cdktf.stringToTerraform(struct!.bucketRegion),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    sync_format: cdktf.stringToTerraform(struct!.syncFormat),
  }
}

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

export function ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct?: SsmResourceDataSyncSyncSourceAwsOrganizationsSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    organization_source_type: cdktf.stringToTerraform(struct!.organizationSourceType),
    organizational_units: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnits),
  }
}

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

export function ssmResourceDataSyncSyncSourceToTerraform(struct?: SsmResourceDataSyncSyncSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_organizations_source: ssmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct!.awsOrganizationsSource),
    include_future_regions: cdktf.booleanToTerraform(struct!.includeFutureRegions),
    source_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceRegions),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync}
*/
export class SsmResourceDataSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssm_resource_data_sync";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssm_resource_data_sync.html awscc_ssm_resource_data_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmResourceDataSyncConfig
  */
  public constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssm_resource_data_sync',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketName = config.bucketName;
    this._bucketPrefix = config.bucketPrefix;
    this._bucketRegion = config.bucketRegion;
    this._kmsKeyArn = config.kmsKeyArn;
    this._s3Destination = config.s3Destination;
    this._syncFormat = config.syncFormat;
    this._syncName = config.syncName;
    this._syncSource = config.syncSource;
    this._syncType = config.syncType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string;
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string;
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix
  }

  // bucket_region - computed: true, optional: true, required: false
  private _bucketRegion?: string;
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_arn - computed: true, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // s3_destination - computed: true, optional: true, required: false
  private _s3Destination?: SsmResourceDataSyncS3Destination;
  public get s3Destination() {
    return this.interpolationForAttribute('s3_destination') as any;
  }
  public set s3Destination(value: SsmResourceDataSyncS3Destination) {
    this._s3Destination = value;
  }
  public resetS3Destination() {
    this._s3Destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DestinationInput() {
    return this._s3Destination
  }

  // sync_format - computed: true, optional: true, required: false
  private _syncFormat?: string;
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }
  public set syncFormat(value: string) {
    this._syncFormat = value;
  }
  public resetSyncFormat() {
    this._syncFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFormatInput() {
    return this._syncFormat
  }

  // sync_name - computed: false, optional: false, required: true
  private _syncName: string;
  public get syncName() {
    return this.getStringAttribute('sync_name');
  }
  public set syncName(value: string) {
    this._syncName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncNameInput() {
    return this._syncName
  }

  // sync_source - computed: false, optional: true, required: false
  private _syncSource?: SsmResourceDataSyncSyncSource;
  public get syncSource() {
    return this.interpolationForAttribute('sync_source') as any;
  }
  public set syncSource(value: SsmResourceDataSyncSyncSource ) {
    this._syncSource = value;
  }
  public resetSyncSource() {
    this._syncSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSourceInput() {
    return this._syncSource
  }

  // sync_type - computed: true, optional: true, required: false
  private _syncType?: string;
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      bucket_region: cdktf.stringToTerraform(this._bucketRegion),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      s3_destination: ssmResourceDataSyncS3DestinationToTerraform(this._s3Destination),
      sync_format: cdktf.stringToTerraform(this._syncFormat),
      sync_name: cdktf.stringToTerraform(this._syncName),
      sync_source: ssmResourceDataSyncSyncSourceToTerraform(this._syncSource),
      sync_type: cdktf.stringToTerraform(this._syncType),
    };
  }
}
