import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Access permissions string used for this user account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#access_string ElasticacheUser#access_string}
    */
    readonly accessString?: string;
    /**
    * Must be redis.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#engine ElasticacheUser#engine}
    */
    readonly engine: string;
    /**
    * Indicates a password is not required for this user account.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#no_password_required ElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Passwords used for this user account. You can create up to two passwords for each user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#passwords ElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * The ID of the user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#user_id ElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * The username of the user.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html#user_name ElasticacheUser#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html awscc_elasticache_user}
*/
export declare class ElasticacheUser extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user.html awscc_elasticache_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    resetAccessString(): void;
    get accessStringInput(): string | undefined;
    get arn(): string;
    private _engine;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    get id(): string;
    private _noPasswordRequired?;
    get noPasswordRequired(): boolean | cdktf.IResolvable;
    set noPasswordRequired(value: boolean | cdktf.IResolvable);
    resetNoPasswordRequired(): void;
    get noPasswordRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[] | undefined;
    get status(): string;
    private _userId;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string;
    private _userName;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
