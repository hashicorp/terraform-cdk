import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed CMKs.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html#alias_name KmsAlias#alias_name}
    */
    readonly aliasName: string;
    /**
    * Identifies the CMK to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html#target_key_id KmsAlias#target_key_id}
    */
    readonly targetKeyId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias}
*/
export declare class KmsAlias extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/kms_alias.html awscc_kms_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsAliasConfig
    */
    constructor(scope: Construct, id: string, config: KmsAliasConfig);
    private _aliasName;
    get aliasName(): string;
    set aliasName(value: string);
    get aliasNameInput(): string;
    get id(): string;
    private _targetKeyId;
    get targetKeyId(): string;
    set targetKeyId(value: string);
    get targetKeyIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
