import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
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
export declare function ssmincidentsReplicationSetRegionsRegionConfigurationToTerraform(struct?: SsmincidentsReplicationSetRegionsRegionConfiguration): any;
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
export declare function ssmincidentsReplicationSetRegionsToTerraform(struct?: SsmincidentsReplicationSetRegions): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html awscc_ssmincidents_replication_set}
*/
export declare class SsmincidentsReplicationSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/ssmincidents_replication_set.html awscc_ssmincidents_replication_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmincidentsReplicationSetConfig
    */
    constructor(scope: Construct, id: string, config: SsmincidentsReplicationSetConfig);
    get arn(): string;
    private _deletionProtected?;
    get deletionProtected(): boolean | cdktf.IResolvable;
    set deletionProtected(value: boolean | cdktf.IResolvable);
    resetDeletionProtected(): void;
    get deletionProtectedInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _regions;
    get regions(): SsmincidentsReplicationSetRegions[];
    set regions(value: SsmincidentsReplicationSetRegions[]);
    get regionsInput(): SsmincidentsReplicationSetRegions[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
