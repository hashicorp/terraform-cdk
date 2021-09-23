import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSignerProfilePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/signer_profile_permission.html#id DataAwsccSignerProfilePermission#id}
    */
    readonly id: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/signer_profile_permission.html awscc_signer_profile_permission}
*/
export declare class DataAwsccSignerProfilePermission extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/signer_profile_permission.html awscc_signer_profile_permission} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSignerProfilePermissionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSignerProfilePermissionConfig);
    get action(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get principal(): string;
    get profileName(): string;
    get profileVersion(): string;
    get statementId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
