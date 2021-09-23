// https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccSsmincidentsReplicationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html#id DataAwsccSsmincidentsReplicationSet#id}
  */
  readonly id: string;
}
export class DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration extends cdktf.ComplexComputedList {

  // sse_kms_key_id - computed: true, optional: false, required: false
  public get sseKmsKeyId() {
    return this.getStringAttribute('sse_kms_key_id');
  }
}

export function dataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct?: DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_kms_key_id: cdktf.stringToTerraform(struct!.sseKmsKeyId),
  }
}

export class DataAwsccSsmincidentsReplicationSetRegions extends cdktf.ComplexComputedList {

  // region_configuration - computed: true, optional: false, required: false
  public get regionConfiguration() {
    return this.interpolationForAttribute('region_configuration') as any;
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export function dataAwsccSsmincidentsReplicationSetRegionsToTerraform(struct?: DataAwsccSsmincidentsReplicationSetRegions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region_configuration: dataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct!.regionConfiguration),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html awscc_ssmincidents_replication_set}
*/
export class DataAwsccSsmincidentsReplicationSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmincidents_replication_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html awscc_ssmincidents_replication_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccSsmincidentsReplicationSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccSsmincidentsReplicationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ssmincidents_replication_set',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protected - computed: true, optional: false, required: false
  public get deletionProtected() {
    return this.getBooleanAttribute('deletion_protected');
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

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.interpolationForAttribute('regions') as any;
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
