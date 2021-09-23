// https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmincidentsReplicationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configures the ReplicationSet deletion protection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html#deletion_protected SsmincidentsReplicationSet#deletion_protected}
  */
  readonly deletionProtected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html#regions SsmincidentsReplicationSet#regions}
  */
  readonly regions: SsmincidentsReplicationSetRegions[];
}
export interface SsmincidentsReplicationSetRegionsRegionConfiguration {
  /**
  * The ARN of the ReplicationSet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html#sse_kms_key_id SsmincidentsReplicationSet#sse_kms_key_id}
  */
  readonly sseKmsKeyId: string;
}

export function ssmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct?: SsmincidentsReplicationSetRegionsRegionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sse_kms_key_id: cdktf.stringToTerraform(struct!.sseKmsKeyId),
  }
}

export interface SsmincidentsReplicationSetRegions {
  /**
  * The ReplicationSet regional configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html#region_configuration SsmincidentsReplicationSet#region_configuration}
  */
  readonly regionConfiguration?: SsmincidentsReplicationSetRegionsRegionConfiguration;
  /**
  * The AWS region name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html#region_name SsmincidentsReplicationSet#region_name}
  */
  readonly regionName?: string;
}

export function ssmincidentsReplicationSetRegionsToTerraform(struct?: SsmincidentsReplicationSetRegions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region_configuration: ssmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct!.regionConfiguration),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html awscc_ssmincidents_replication_set}
*/
export class SsmincidentsReplicationSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ssmincidents_replication_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html awscc_ssmincidents_replication_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmincidentsReplicationSetConfig
  */
  public constructor(scope: Construct, id: string, config: SsmincidentsReplicationSetConfig) {
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
    this._deletionProtected = config.deletionProtected;
    this._regions = config.regions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_protected - computed: true, optional: true, required: false
  private _deletionProtected?: boolean | cdktf.IResolvable;
  public get deletionProtected() {
    return this.getBooleanAttribute('deletion_protected');
  }
  public set deletionProtected(value: boolean | cdktf.IResolvable) {
    this._deletionProtected = value;
  }
  public resetDeletionProtected() {
    this._deletionProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectedInput() {
    return this._deletionProtected
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // regions - computed: false, optional: false, required: true
  private _regions: SsmincidentsReplicationSetRegions[];
  public get regions() {
    return this.interpolationForAttribute('regions') as any;
  }
  public set regions(value: SsmincidentsReplicationSetRegions[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protected: cdktf.booleanToTerraform(this._deletionProtected),
      regions: cdktf.listMapper(ssmincidentsReplicationSetRegionsToTerraform)(this._regions),
    };
  }
}
