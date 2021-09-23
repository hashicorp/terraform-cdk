// https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
export class RdsGlobalCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "awscc_rds_global_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/rds_global_cluster.html awscc_rds_global_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RdsGlobalClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RdsGlobalClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'awscc_rds_global_cluster',
      terraformGeneratorMetadata: {
        providerName: 'awscc'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deletionProtection = config.deletionProtection;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
    this._storageEncrypted = config.storageEncrypted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // global_cluster_identifier - computed: true, optional: true, required: false
  private _globalClusterIdentifier?: string;
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  public resetGlobalClusterIdentifier() {
    this._globalClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_db_cluster_identifier - computed: true, optional: true, required: false
  private _sourceDbClusterIdentifier?: string;
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string) {
    this._sourceDbClusterIdentifier = value;
  }
  public resetSourceDbClusterIdentifier() {
    this._sourceDbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdentifierInput() {
    return this._sourceDbClusterIdentifier
  }

  // storage_encrypted - computed: true, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable;
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      source_db_cluster_identifier: cdktf.stringToTerraform(this._sourceDbClusterIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
    };
  }
}
