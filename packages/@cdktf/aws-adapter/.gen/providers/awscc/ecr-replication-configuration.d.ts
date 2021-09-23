import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ecrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRulesDestinations): any;
export interface EcrReplicationConfigurationReplicationConfigurationRules {
    /**
    * An array of objects representing the details of a replication destination.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#destinations EcrReplicationConfiguration#destinations}
    */
    readonly destinations: EcrReplicationConfigurationReplicationConfigurationRulesDestinations[];
}
export declare function ecrReplicationConfigurationReplicationConfigurationRulesToTerraform(struct?: EcrReplicationConfigurationReplicationConfigurationRules): any;
export interface EcrReplicationConfigurationReplicationConfiguration {
    /**
    * An array of objects representing the replication rules for a replication configuration. A replication configuration may contain only one replication rule but the rule may contain one or more replication destinations.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html#rules EcrReplicationConfiguration#rules}
    */
    readonly rules: EcrReplicationConfigurationReplicationConfigurationRules[];
}
export declare function ecrReplicationConfigurationReplicationConfigurationToTerraform(struct?: EcrReplicationConfigurationReplicationConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html awscc_ecr_replication_configuration}
*/
export declare class EcrReplicationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ecr_replication_configuration.html awscc_ecr_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrReplicationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: EcrReplicationConfigurationConfig);
    get id(): string;
    get registryId(): string;
    private _replicationConfiguration;
    get replicationConfiguration(): EcrReplicationConfigurationReplicationConfiguration;
    set replicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration);
    get replicationConfigurationInput(): EcrReplicationConfigurationReplicationConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
