import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsmincidentsReplicationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html#id DataAwsccSsmincidentsReplicationSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration extends cdktf.ComplexComputedList {
    get sseKmsKeyId(): string;
}
export declare function dataAwsccSsmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct?: DataAwsccSsmincidentsReplicationSetRegionsRegionConfiguration): any;
export declare class DataAwsccSsmincidentsReplicationSetRegions extends cdktf.ComplexComputedList {
    get regionConfiguration(): any;
    get regionName(): string;
}
export declare function dataAwsccSsmincidentsReplicationSetRegionsToTerraform(struct?: DataAwsccSsmincidentsReplicationSetRegions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html awscc_ssmincidents_replication_set}
*/
export declare class DataAwsccSsmincidentsReplicationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/ssmincidents_replication_set.html awscc_ssmincidents_replication_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsmincidentsReplicationSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsmincidentsReplicationSetConfig);
    get arn(): string;
    get deletionProtected(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get regions(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
