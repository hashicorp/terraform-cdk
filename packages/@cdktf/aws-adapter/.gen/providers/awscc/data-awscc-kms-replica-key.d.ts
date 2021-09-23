import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKmsReplicaKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kms_replica_key.html#id DataAwsccKmsReplicaKey#id}
    */
    readonly id: string;
}
export declare class DataAwsccKmsReplicaKeyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKmsReplicaKeyTagsToTerraform(struct?: DataAwsccKmsReplicaKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kms_replica_key.html awscc_kms_replica_key}
*/
export declare class DataAwsccKmsReplicaKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kms_replica_key.html awscc_kms_replica_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKmsReplicaKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKmsReplicaKeyConfig);
    get arn(): string;
    get description(): string;
    get enabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyId(): string;
    get keyPolicy(): string;
    get pendingWindowInDays(): number;
    get primaryKeyArn(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
