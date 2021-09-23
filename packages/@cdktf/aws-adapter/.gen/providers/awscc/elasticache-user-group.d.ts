import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticacheUserGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Must be redis.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#engine ElasticacheUserGroup#engine}
    */
    readonly engine: string;
    /**
    * The ID of the user group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#user_group_id ElasticacheUserGroup#user_group_id}
    */
    readonly userGroupId: string;
    /**
    * List of users associated to this user group.
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html#user_ids ElasticacheUserGroup#user_ids}
    */
    readonly userIds?: string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html awscc_elasticache_user_group}
*/
export declare class ElasticacheUserGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/awscc/r/elasticache_user_group.html awscc_elasticache_user_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheUserGroupConfig
    */
    constructor(scope: Construct, id: string, config: ElasticacheUserGroupConfig);
    get arn(): string;
    private _engine;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string;
    get id(): string;
    get status(): string;
    private _userGroupId;
    get userGroupId(): string;
    set userGroupId(value: string);
    get userGroupIdInput(): string;
    private _userIds?;
    get userIds(): string[];
    set userIds(value: string[]);
    resetUserIds(): void;
    get userIdsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
