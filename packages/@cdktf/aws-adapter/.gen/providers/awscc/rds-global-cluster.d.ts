import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#deletion_protection RdsGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
  If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#engine RdsGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#engine_version RdsGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#global_cluster_identifier RdsGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#source_db_cluster_identifier RdsGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    *  The storage encryption setting for the new global database cluster.
  If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html#storage_encrypted RdsGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html awscc_rds_global_cluster}
*/
export declare class RdsGlobalCluster extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html awscc_rds_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsGlobalClusterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: RdsGlobalClusterConfig);
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    resetGlobalClusterIdentifier(): void;
    get globalClusterIdentifierInput(): string | undefined;
    get id(): string;
    private _sourceDbClusterIdentifier?;
    get sourceDbClusterIdentifier(): string;
    set sourceDbClusterIdentifier(value: string);
    resetSourceDbClusterIdentifier(): void;
    get sourceDbClusterIdentifierInput(): string | undefined;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
