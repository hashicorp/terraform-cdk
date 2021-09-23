import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/kms_key.html#id DataAwsccKmsKey#id}
    */
    readonly id: string;
}
export declare class DataAwsccKmsKeyTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccKmsKeyTagsToTerraform(struct?: DataAwsccKmsKeyTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/kms_key.html awscc_kms_key}
*/
export declare class DataAwsccKmsKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/kms_key.html awscc_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccKmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccKmsKeyConfig);
    get arn(): string;
    get description(): string;
    get enableKeyRotation(): cdktf.IResolvable;
    get enabled(): cdktf.IResolvable;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get keyId(): string;
    get keyPolicy(): string;
    get keySpec(): string;
    get keyUsage(): string;
    get multiRegion(): cdktf.IResolvable;
    get pendingWindowInDays(): number;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
