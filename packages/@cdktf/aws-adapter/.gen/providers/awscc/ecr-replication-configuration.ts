// https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * An object representing the replication configuration for a registry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#replication_configuration EcrReplicationConfiguration#replication_configuration}
  */
  readonly replicationConfiguration: EcrReplicationConfigurationReplicationConfiguration;
}
export interface EcrReplicationConfigurationReplicationConfigurationRulesDestinations {
  /**
  * A Region to replicate to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#region EcrReplicationConfiguration#region}
  */
  readonly region: string;
  /**
  * The account ID of the destination registry to replicate to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#registry_id EcrReplicationConfiguration#registry_id}
  */
  readonly registryId: string;
}

export function ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesDestinations): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    registry_id: cdktf.stringToTerraform(struct!.registryId),
  }
}

export interface EcrReplicationConfigurationReplicationConfigurationRules {
  /**
  * An array of objects representing the details of a replication destination.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#destinations EcrReplicationConfiguration#destinations}
  */
  readonly destinations: EcrReplicationConfigurationReplicationConfigurationRulesDestinations[];
}

export function ecrReplicationConfigurationReplicationConfigurationRulesToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destinations: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform)(struct!.destinations),
  }
}

export interface EcrReplicationConfigurationReplicationConfiguration {
  /**
  * An array of objects representing the replication rules for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#rules EcrReplicationConfiguration#rules}
  */
  readonly rules: EcrReplicationConfigurationReplicationConfigurationRules[];
}

export function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    rules: cdktf.listMapper(ecrReplicationConfigurationReplicationConfigurationRulesToTerraform)(struct!.rules),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html awscc_ecr_replication_configuration}
*/
export class EcrReplicationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_ecr_replication_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html awscc_ecr_replication_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrReplicationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: EcrReplicationConfigurationConfig) {
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
    this._replicationConfiguration = config.replicationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }

  // replication_configuration - computed: false, optional: false, required: true
  private _replicationConfiguration: EcrReplicationConfigurationReplicationConfiguration;
  public get replicationConfiguration() {
    return this.interpolationForAttribute('replication_configuration') as any;
  }
  public set replicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration) {
    this._replicationConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replication_configuration: ecrReplicationConfigurationReplicationConfigurationToTerraform(this._replicationConfiguration),
    };
  }
}
