import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TimestreamDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html#database_name TimestreamDatabase#database_name}
    */
    readonly databaseName?: string;
    /**
    * The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html#kms_key_id TimestreamDatabase#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html#tags TimestreamDatabase#tags}
    */
    readonly tags?: TimestreamDatabaseTags[];
}
export interface TimestreamDatabaseTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html#key TimestreamDatabase#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html#value TimestreamDatabase#value}
    */
    readonly value?: string;
}
export declare function timestreamDatabaseTagsToTerraform(struct?: TimestreamDatabaseTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html awscc_timestream_database}
*/
export declare class TimestreamDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/timestream_database.html awscc_timestream_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamDatabaseConfig = {}
    */
    constructor(scope: Construct, id: string, config?: TimestreamDatabaseConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _tags?;
    get tags(): TimestreamDatabaseTags[];
    set tags(value: TimestreamDatabaseTags[]);
    resetTags(): void;
    get tagsInput(): TimestreamDatabaseTags[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
