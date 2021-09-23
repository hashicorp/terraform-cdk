// https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsccEcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Uniquely identifies the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html#id DataAwsccEcrReplicationConfiguration#id}
  */
  readonly id: string;
}
export class DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations extends cdktf.ComplexComputedList {

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
}

export function dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}

export class DataAwsccEcrReplicationConfigurationReplicationConfigurationRules extends cdktf.ComplexComputedList {

  // destinations - computed: true, optional: false, required: false
  public get destinations() {
    return this.interpolationForAttribute('destinations') as any;
  }
}

export function dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfigurationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destinations: cdktf.listMapper(dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform)(struct!.destinations),
  }
}

export class DataAwsccEcrReplicationConfigurationReplicationConfiguration extends cdktf.ComplexComputedList {

  // rules - computed: true, optional: false, required: false
  public get rules() {
    return this.interpolationForAttribute('rules') as any;
  }
}

export function dataAwsccEcrReplicationConfigurationReplicationConfigurationToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rules: cdktf.listMapper(dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesToTerraform)(struct!.rules),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html awscc_ecr_replication_configuration}
*/
export class DataAwsccEcrReplicationConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecr_replication_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html awscc_ecr_replication_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsccEcrReplicationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsccEcrReplicationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ecr_replication_configuration',
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

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // replication_configuration - computed: true, optional: false, required: false
  public get replicationConfiguration() {
    return this.interpolationForAttribute('replication_configuration') as any;
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
