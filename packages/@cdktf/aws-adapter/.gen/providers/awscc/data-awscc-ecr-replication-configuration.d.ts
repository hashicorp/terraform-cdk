import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccEcrReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html#id DataAwsccEcrReplicationConfiguration#id}
    */
    readonly id: string;
}
export declare class DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations extends cdktf.ComplexComputedList {
    get region(): string;
    get registryId(): string;
}
export declare function dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinationsToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfigurationRulesDestinations): any;
export declare class DataAwsccEcrReplicationConfigurationReplicationConfigurationRules extends cdktf.ComplexComputedList {
    get destinations(): any;
}
export declare function dataAwsccEcrReplicationConfigurationReplicationConfigurationRulesToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfigurationRules): any;
export declare class DataAwsccEcrReplicationConfigurationReplicationConfiguration extends cdktf.ComplexComputedList {
    get rules(): any;
}
export declare function dataAwsccEcrReplicationConfigurationReplicationConfigurationToTerraform(struct?: DataAwsccEcrReplicationConfigurationReplicationConfiguration): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html awscc_ecr_replication_configuration}
*/
export declare class DataAwsccEcrReplicationConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ecr_replication_configuration.html awscc_ecr_replication_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccEcrReplicationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccEcrReplicationConfigurationConfig);
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get registryId(): string;
    get replicationConfiguration(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
