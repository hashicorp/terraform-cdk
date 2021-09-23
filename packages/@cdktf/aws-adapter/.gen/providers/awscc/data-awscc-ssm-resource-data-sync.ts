// https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html#id DataAwsccSsmResourceDataSync#id}
  */
  readonly id: string;
}
export class DataAwsccSsmResourceDataSyncS3Destination extends cdktf.ComplexComputedList {

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // sync_format - computed: true, optional: false, required: false
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }
}

export function dataAwsccSsmResourceDataSyncS3DestinationToTerraform(struct?: DataAwsccSsmResourceDataSyncS3Destination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    bucket_region: cdktf.stringToTerraform(struct!.bucketRegion),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    sync_format: cdktf.stringToTerraform(struct!.syncFormat),
  }
}

export class DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource extends cdktf.ComplexComputedList {

  // organization_source_type - computed: true, optional: false, required: false
  public get organizationSourceType() {
    return this.getStringAttribute('organization_source_type');
  }

  // organizational_units - computed: true, optional: false, required: false
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
}

export function dataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct?: DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    organization_source_type: cdktf.stringToTerraform(struct!.organizationSourceType),
    organizational_units: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnits),
  }
}

export class DataAwsccSsmResourceDataSyncSyncSource extends cdktf.ComplexComputedList {

  // aws_organizations_source - computed: true, optional: false, required: false
  public get awsOrganizationsSource() {
    return this.interpolationForAttribute('aws_organizations_source') as any;
  }

  // include_future_regions - computed: true, optional: false, required: false
  public get includeFutureRegions() {
    return this.getBooleanAttribute('include_future_regions');
  }

  // source_regions - computed: true, optional: false, required: false
  public get sourceRegions() {
    return this.getListAttribute('source_regions');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export function dataAwsccSsmResourceDataSyncSyncSourceToTerraform(struct?: DataAwsccSsmResourceDataSyncSyncSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_organizations_source: dataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceToTerraform(struct!.awsOrganizationsSource),
    include_future_regions: cdktf.booleanToTerraform(struct!.includeFutureRegions),
    source_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceRegions),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html awscc_ssm_resource_data_sync}
*/
export class DataAwsccSsmResourceDataSync extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssm_resource_data_sync";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssm_resource_data_sync.html awscc_ssm_resource_data_sync} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmResourceDataSyncConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmResourceDataSyncConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_prefix - computed: true, optional: false, required: false
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
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

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // s3_destination - computed: true, optional: false, required: false
  public get s3Destination() {
    return this.interpolationForAttribute('s3_destination') as any;
  }

  // sync_format - computed: true, optional: false, required: false
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }

  // sync_name - computed: true, optional: false, required: false
  public get syncName() {
    return this.getStringAttribute('sync_name');
  }

  // sync_source - computed: true, optional: false, required: false
  public get syncSource() {
    return this.interpolationForAttribute('sync_source') as any;
  }

  // sync_type - computed: true, optional: false, required: false
  public get syncType() {
    return this.getStringAttribute('sync_type');
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
