import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsccSsoPermissionSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Uniquely identifies the resource.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/d/sso_permission_set.html#id DataAwsccSsoPermissionSet#id}
    */
    readonly id: string;
}
export declare class DataAwsccSsoPermissionSetTags extends cdktf.ComplexComputedList {
    get key(): string;
    get value(): string;
}
export declare function dataAwsccSsoPermissionSetTagsToTerraform(struct?: DataAwsccSsoPermissionSetTags): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/d/sso_permission_set.html awscc_sso_permission_set}
*/
export declare class DataAwsccSsoPermissionSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/d/sso_permission_set.html awscc_sso_permission_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsccSsoPermissionSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsccSsoPermissionSetConfig);
    get description(): string;
    private _id;
    get id(): string;
    set id(value: string);
    get idInput(): string;
    get inlinePolicy(): string;
    get instanceArn(): string;
    get managedPolicies(): string[];
    get name(): string;
    get permissionSetArn(): string;
    get relayStateType(): string;
    get sessionDuration(): string;
    get tags(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
