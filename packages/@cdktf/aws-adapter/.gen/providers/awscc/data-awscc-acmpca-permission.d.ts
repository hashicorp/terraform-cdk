import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccAcmpcaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_permission.html#id DataAwsccAcmpcaPermission#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_permission.html awscc_acmpca_permission}
*/
export declare class DataAwsccAcmpcaPermission extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/acmpca_permission.html awscc_acmpca_permission} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccAcmpcaPermissionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccAcmpcaPermissionConfig);
    get actions(): string[];
    get certificateAuthorityArn(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get principal(): string;
    get sourceAccount(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
